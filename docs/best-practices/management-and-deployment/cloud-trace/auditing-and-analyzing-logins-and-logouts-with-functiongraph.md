---
id: auditing-and-analyzing-logins-and-logouts-with-functiongraph
title: Auditing and Analyzing Logins and Logouts with Functiongraph
tags: [cts, cts-trigger, functiongraph, events, logs]
---

# Auditing and Analyzing Logins and Logouts with Functiongraph

Cloud Trace Service (CTS) collects real-time records of operations on cloud resources. You can create a CTS trigger to obtain records of subscribed cloud resource operations, analyze and process the operation records, and report alarms. You can use Simple Message Notification (SMN) to push alarm messages to service personnel by SMS message or email. [Figure 1](#figure-1) shows the procedure.

## Solution Design

<a id="figure-1"></a>

![Figure 1](/img/docs/best-practices/management-and-deployment/cloud-trace/auditing-and-analyzing-logins-and-logouts-with-functiongraph/en-us_image_0000001264679162.png)

**Figure 1** Flowchart  

* Operation records collected by CTS can be quickly analyzed and operations from specified IP addresses can be filtered out.
* CTS processes and analyzes data in response to log events in a serverless architecture, which features automatic scaling, no O&M, and pay-per-use billing.
* CTS sends alarm notifications through SMN.

## Enabling CTS

Configure a tracker, and the system immediately starts recording operations based on the new rule.

1. Log in to the console.
2. Click ![](/img/en-us_image_0000001264369622.png) in the upper left corner of the console and select a region and a project.
3. Click ![](/img/en-us_image_0000001312049497.png) in the upper left corner and choose *Management & Governance* -> *Cloud Trace Service*.
4. On the displayed page, choose *Tracker List* in the navigation pane on the left.
5. Locate a data tracker and click *Configure* in the *Operation* column.
    * **Operation**: Select the data operations that need to be recorded.
    * **Transfer to OBS**
        * If you select *Yes*, select an existing OBS bucket or create one directly on the *Configure Tracker* page and set **File Prefix**.
        * If you select *No*, no configuration is required.
    * **Create OBS Bucket**: If this function is enabled, an OBS bucket will be created automatically with the name you enter. If this function is disabled, select an existing OBS bucket.
    * **OBS Bucket**: You can create an OBS bucket or select an existing OBS bucket.
    * **Retention Period**: Select the duration for storing traces in the OBS bucket.
    * **File Prefix**: The prefix is used to mark a transferred trace file. Your specified prefix will be automatically added to the beginning of the name of a transferred file, helping you quickly filter files.
    * **Verify Trace File**: When this function is enabled, integrity verification will be performed to check whether trace files in OBS buckets have been tampered with.
6. Click *OK* to complete the tracker configuration.

## Creating an Agency

1. Log in to the [*Identity and Access Management (IAM) console*](https://console.otc.t-systems.com/iam/?locale=en-us). In the navigation pane on the left, choose *Agencies*.
2. On the *Agencies* page, click *Create Agency*.
3. Set the agency information.

    * For **Agency Name**, enter `serverless\_trust`.
    * For **Agency Type**, select **Cloud service**.
    * For **Cloud service**, select **FunctionGraph**.
    * For **Validity Period**, select **Unlimited**.
    * Click *Assign Permissions*. On the *Assign Permissions* page, select **Tenant Administrator**.

    :::note
        Users with the **Tenant Administrator** permission can perform any operations on all cloud resources of the enterprise.
    :::

4. Click *OK*.

## Pushing Alarm Messages

* Create a topic named `cts\_test` on the *SMN console*. For details, see [Creating a Topic](https://docs.otc.t-systems.com/simple-message-notification/umn/topic_management/creating_a_topic.html).
* Add subscriptions to the `cts\_test` topic to push alarm messages. For details, see [Adding a Subscription](https://docs.otc.t-systems.com/simple-message-notification/umn/topic_management/adding_a_subscription_to_a_topic.html).

:::note

* Alarm messages can be sent by **emails**, **SMS** messages, and **HTTP/HTTPS**.
* In this example, when log events trigger the specified function, the function filters operations that are performed by users not in the IP address whitelist, and pushes alarm messages to the subscribers.

:::

## Building a Program

This section describes how use the following snippet for log alarms.

```python
import json
import base64
import sys
import os
import requests

def handler(event, context):
    text = json.dumps(event["cts"])
    ctsmsg = json.loads(text)
    
    #Resource operator IP
    source_ip = ctsmsg["source_ip"]
    #trace_name
    action = ctsmsg["trace_name"]
    
    SMN_Topic = context.getUserData('SMN_Topic')
    regionName = context.getUserData('RegionName')
    ip = context.getUserData('IP')
    projectId = context.getProjectID()
    
    if (action not in ("login" or "logout")):
    	return "action is fail"
    
    if ip.find(source_ip) < 0 :
        return "reasonable " + action
    
    logInfo = "  IP:"+source_ip + ",  Action:"+action

    body = {"message" :"Illegal operation["+logInfo+"]", "subject":"CTSTrigger"}
    headers = {'X-Auth-Token': context.getToken(),  "accept": "application/json"}
    url= "https://smn."+regionName+".otc.t-systems.com/v2/"+projectId+"/notifications/topics/urn:smn:"+regionName+":"+projectId+":"+SMN_Topic+"/publish"

	
    response = requests.post(url,headers=headers,data=json.dumps(body))
    if response.status_code != 200:
        print (response.status_code)
        return "send alarm message failed."


    return 'send email success'
```

### Creating a Function

Create a function for extracting the logs (as shown in the Python snippet below) and upload the code package. For details, see [Function Management](https://docs.otc.t-systems.com/function-graph/umn/function_management.html).

```python
import json
import base64
import sys
import os
import requests

from obs import *

current_file_path = os.path.dirname(os.path.realpath(__file__))
# append current path to search paths, so that we can import some third party libraries.
sys.path.append(current_file_path)

TEMP_ROOT_PATH = "/tmp/"
region = 'eu-de'
secure = True
signature = 'v4'
port = 443
path_style = True


def GetObject(obsAddr, bucketName, objName, ak, sk):
    TestObs = ObsClient(access_key_id=ak, secret_access_key=sk,
                        is_secure=secure, server=obsAddr, signature=signature, path_style=path_style, region=region,
                        ssl_verify=False, port=port,
                        max_retry_count=5, timeout=20)

    LobjectRequest = GetObjectRequest(content_type='application/zip', content_language=None, expires=None,
                                      cache_control=None, content_disposition=None, content_encoding=None,
                                      versionId=None)

    Lheaders = GetObjectHeader(range='', if_modified_since=None, if_unmodified_since=None, if_match=None,
                               if_none_match=None)

    loadStreamInMemory = False
    fileNamePath = TEMP_ROOT_PATH + objName
    resp = TestObs.getObject(bucketName=bucketName, objectKey=objName, downloadPath=fileNamePath,
                             getObjectRequest=LobjectRequest, headers=Lheaders, loadStreamInMemory=loadStreamInMemory)

    print('*** GetObject resp: ', resp)

    return (int(resp.status))


def PostObject(obsAddr, bucket, objName, ak, sk):
    obsClient = ObsClient(access_key_id=ak, secret_access_key=sk,
                        is_secure=secure, server=obsAddr, signature=signature, path_style=path_style, region=region,
                        ssl_verify=False, port=port,
                        max_retry_count=5, timeout=20)

    Lheaders = PutObjectHeader(md5=None, acl='private', location=None, contentType='text/plain')

    Lheaders.sseHeader = SseKmsHeader.getInstance()
    h = PutObjectHeader()
    Lmetadata = {'key': 'value'}

    objPath = TEMP_ROOT_PATH + objName
    resp = obsClient.putFile(bucketName=bucket, objectKey=objName, file_path=objPath,
                              metadata=Lmetadata, headers=h)
    if isinstance(resp, list):
        for k, v in resp:
            print(
            'PostObject, objectKey', k, 'common msg:status:', v.status, ',errorCode:', v.errorCode, ',errorMessage:',
            v.errorMessage)
    else:
        print('*** PostObject, common msg: status:', resp.status, ',errorCode:', resp.errorCode, ',errorMessage:',
              resp.errorMessage)

def checkAlarmLogs(logs):
    alarmlogs = []
    for log in logs:
        logStr = json.dumps(log)
        if "WARN" in logStr or "WRN" in logStr or "ERROR" in logStr or "ERR" in logStr:
            alarmlogs.append(logStr)
    return alarmlogs

def log_store(fileName, logs):
    fileNamePath = TEMP_ROOT_PATH + fileName
    with open(fileNamePath, 'a') as f:
        print ("*** Open log file"+fileNamePath+" successfully")
        for log in logs:
            logStr = json.dumps(log).replace('\\','')
            if "WARN" in logStr or "WRN" in logStr or "ERROR" in logStr or "ERR" in logStr:
                f.write(logStr + '\n')
    return fileName

def handler(event, context):
    # Obtains the data of lts logs.
    print ("*********the data of lts logs********")
    encodingData = event["lts"]["data"]
    data = base64.b64decode(encodingData)  # Base64 decoding is required because the information of lts logs has been encoded.
    text = json.loads(data)
    # Output log group id
    print ("*** log group id:"+text["log_group_id"])
    # Output log topic id
    print ("*** log topic id:"+text["log_topic_id"])
    # Obtains lts log list
    logs = text["logs"]
    # Check whether the alarm log existed
    alarmLogs = checkAlarmLogs(logs)
    if len(alarmLogs) == 0:
        print ("*** no need to send alarm message")
        return "no need to send alarm message"
    
    # send smn message 
    print ("***********send smn message **********")
    SMN_Topic = context.getUserData('SMN_Topic')
    if not SMN_Topic.strip():
        print ('*** No SMN topic. Please configure "SMN_Topic" environment variable')
        return "Environment variable configuration error"
    projectId = context.getProjectID()
    body = {"message" :"Get warning message.The content of message is:"+json.dumps(alarmLogs).replace('\\',''), "subject":"TimeTrigger"}
    headers = {'X-Auth-Token': context.getToken(),  "accept": "application/json"}
    url= "https://smn." + region + ".otc.t-systems.com/v2/"+projectId+"/notifications/topics/urn:smn:" + region + ":"+projectId+":"+SMN_Topic+"/publish"
    response = requests.post(url,headers=headers,data=json.dumps(body))
    if response.status_code != 200:
        print ("*** send SMN message failed. resp statusCode:"+str(response.status_code))
        return "send alarm message failed."
    print ("*** send SMN message to terminal successfully")
    
    print ("***********strore log file to obs bucket **********")
    obs_address = context.getUserData('obs_address')
    storeBucket = context.getUserData('obs_store_bucket')
    storeObjName = context.getUserData('obs_store_objName')
    if not obs_address.strip() or not storeBucket.strip() or not storeObjName.strip():
        print ('*** No obs environment variable. Please configure obs environment variable')
        return "Environment variable configuration error"

    ak = context.getAccessKey()
    sk = context.getSecretKey()
    if not ak.strip() or not sk.strip():
        print ("*** Can not get accessKey or secretKey. Please check authority of IAM service")
        return "accessKey or secretKey error" 

    print ("*** obs_address: " + obs_address)
    print ("*** store bucket: " + storeBucket)
    print ("*** store objName: " + storeObjName)

    # download file uploaded by user from obs
    # if store object uploaded not exist, automatically create OBS object.
    status = GetObject(obs_address, storeBucket, storeObjName, ak, sk)
    if status != 200:
        print ("*** get store object failed. Create a new OBS object:"+storeObjName)
    
    outFile = log_store(storeObjName, alarmLogs)
    
    # upload file to obs bucket
    PostObject(obs_address, storeBucket, outFile, ak, sk)
    return 'log store success'
```

This function analyzes received operation records, filters logins or logouts from unauthorized IP addresses using a whitelist, and sends alarms under a specified SMN topic.

### Setting Environment Variables

On the *Configuration* tab page of the function, set the environment variables and SMN topic name, as shown in table below:

|       Environment Variable|       Description          |
|---------------------------|----------------------------|
|       SMN_Topic           |       SMN topic name.      |
|       RegionName          |       Region.              |
|       IP                  |       IP address whitelist.|

**Table 1** Environment variable description

For details about how to set environment variables, see [Using Environment Variables](https://docs.otc.t-systems.com/function-graph/umn/configuring_functions/configuring_environment_variables.html), as shown in [Figure 2](#figure-2).

<a id="figure-2"></a>

![](/img/docs/best-practices/management-and-deployment/cloud-trace/auditing-and-analyzing-logins-and-logouts-with-functiongraph/en-us_image_0000001264392960.png)

**Figure 2** Setting environment variables  

## Adding an Event Source

Create a CTS trigger, as shown in [Enabling CTS](#enabling-cts). For details, see [Using a CTS Trigger](https://docs.otc.t-systems.com/function-graph/umn/creating_triggers/using_a_cts_trigger.html).

<a id="figure-3"></a>

![](/img/docs/best-practices/management-and-deployment/cloud-trace/auditing-and-analyzing-logins-and-logouts-with-functiongraph/en-us_image_0000001312436037.png)

**Figure 3** Creating a CTS trigger  

CTS records the logins and logouts of users on IAM.

## Processing Operation Records

When a user performs login or logout using an account, the subscription service log will be triggered and a function will be directly invoked. The system then checks whether the IP address of the current login or logout account is in the whitelist based on function code. If the IP address is not in the whitelist, SMN will send notifications, as shown in [Figure 4](#figure-4).

<a id="figure-4"></a>

![](/img/docs/best-practices/management-and-deployment/cloud-trace/auditing-and-analyzing-logins-and-logouts-with-functiongraph/en-us_image_0000002133767412.png)

**Figure 4** Alarm notification sent by email  

The email contains the unauthorized IP address and user operation (login or logout).

On the *Monitoring* tab page of the function, check the number of invocations, as shown in [Figure 5](#figure-5).

<a id="figure-"></a>

**Figure 5** Function metrics  
![](/img/docs/best-practices/management-and-deployment/cloud-trace/auditing-and-analyzing-logins-and-logouts-with-functiongraph/en-us_image_0000002169007081.png)
