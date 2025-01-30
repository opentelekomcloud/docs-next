"use strict";(self.webpackChunkdocs_next=self.webpackChunkdocs_next||[]).push([[11276],{42989:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>g,frontMatter:()=>o,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"best-practices/management-and-deployment/cloud-trace/auditing-and-analyzing-logins-and-logouts-with-functiongraph","title":"Auditing and Analyzing Logins and Logouts with Functiongraph","description":"Cloud Trace Service (CTS) collects real-time records of operations on cloud resources. You can create a CTS trigger to obtain records of subscribed cloud resource operations, analyze and process the operation records, and report alarms. You can use Simple Message Notification (SMN) to push alarm messages to service personnel by SMS message or email. Figure 1 shows the procedure.","source":"@site/docs/best-practices/management-and-deployment/cloud-trace/auditing-and-analyzing-logins-and-logouts-with-functiongraph.md","sourceDirName":"best-practices/management-and-deployment/cloud-trace","slug":"/best-practices/management-and-deployment/cloud-trace/auditing-and-analyzing-logins-and-logouts-with-functiongraph","permalink":"/docs-next/pr-preview/pr-195/docs/best-practices/management-and-deployment/cloud-trace/auditing-and-analyzing-logins-and-logouts-with-functiongraph","draft":false,"unlisted":false,"editUrl":"https://github.com/opentelekomcloud/docs-next/tree/main/docs/best-practices/management-and-deployment/cloud-trace/auditing-and-analyzing-logins-and-logouts-with-functiongraph.md","tags":[{"inline":true,"label":"cts","permalink":"/docs-next/pr-preview/pr-195/docs/tags/cts"},{"inline":true,"label":"cts-trigger","permalink":"/docs-next/pr-preview/pr-195/docs/tags/cts-trigger"},{"inline":true,"label":"functiongraph","permalink":"/docs-next/pr-preview/pr-195/docs/tags/functiongraph"},{"inline":true,"label":"events","permalink":"/docs-next/pr-preview/pr-195/docs/tags/events"},{"inline":true,"label":"logs","permalink":"/docs-next/pr-preview/pr-195/docs/tags/logs"}],"version":"current","frontMatter":{"id":"auditing-and-analyzing-logins-and-logouts-with-functiongraph","title":"Auditing and Analyzing Logins and Logouts with Functiongraph","tags":["cts","cts-trigger","functiongraph","events","logs"]},"sidebar":"bestPracticesSidebar","previous":{"title":"Resource Group Monitoring","permalink":"/docs-next/pr-preview/pr-195/docs/best-practices/management-and-deployment/cloud-eye/resource-group-monitoring"},"next":{"title":"Configuring Private Domain Names for ECSs","permalink":"/docs-next/pr-preview/pr-195/docs/best-practices/networking/domain-name-service/configuring-private-domain-names-for-ecss"}}');var i=s(74848),r=s(28453);const o={id:"auditing-and-analyzing-logins-and-logouts-with-functiongraph",title:"Auditing and Analyzing Logins and Logouts with Functiongraph",tags:["cts","cts-trigger","functiongraph","events","logs"]},a="Auditing and Analyzing Logins and Logouts with Functiongraph",c={},l=[{value:"Solution Design",id:"solution-design",level:2},{value:"Enabling CTS",id:"enabling-cts",level:2},{value:"Creating an Agency",id:"creating-an-agency",level:2},{value:"Pushing Alarm Messages",id:"pushing-alarm-messages",level:2},{value:"Building a Program",id:"building-a-program",level:2},{value:"Creating a Function",id:"creating-a-function",level:3},{value:"Setting Environment Variables",id:"setting-environment-variables",level:3},{value:"Adding an Event Source",id:"adding-an-event-source",level:2},{value:"Processing Operation Records",id:"processing-operation-records",level:2}];function d(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"auditing-and-analyzing-logins-and-logouts-with-functiongraph",children:"Auditing and Analyzing Logins and Logouts with Functiongraph"})}),"\n",(0,i.jsxs)(n.p,{children:["Cloud Trace Service (CTS) collects real-time records of operations on cloud resources. You can create a CTS trigger to obtain records of subscribed cloud resource operations, analyze and process the operation records, and report alarms. You can use Simple Message Notification (SMN) to push alarm messages to service personnel by SMS message or email. ",(0,i.jsx)(n.a,{href:"#figure-1",children:"Figure 1"})," shows the procedure."]}),"\n",(0,i.jsx)(n.h2,{id:"solution-design",children:"Solution Design"}),"\n",(0,i.jsx)("a",{id:"figure-1"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Figure 1",src:s(60435).A+"",width:"753",height:"460"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Figure 1"})," Flowchart"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Operation records collected by CTS can be quickly analyzed and operations from specified IP addresses can be filtered out."}),"\n",(0,i.jsx)(n.li,{children:"CTS processes and analyzes data in response to log events in a serverless architecture, which features automatic scaling, no O&M, and pay-per-use billing."}),"\n",(0,i.jsx)(n.li,{children:"CTS sends alarm notifications through SMN."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"enabling-cts",children:"Enabling CTS"}),"\n",(0,i.jsx)(n.p,{children:"Configure a tracker, and the system immediately starts recording operations based on the new rule."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Log in to the console."}),"\n",(0,i.jsxs)(n.li,{children:["Click ",(0,i.jsx)(n.img,{src:s(55435).A+"",width:"15",height:"18"})," in the upper left corner of the console and select a region and a project."]}),"\n",(0,i.jsxs)(n.li,{children:["Click ",(0,i.jsx)(n.img,{src:s(72312).A+"",width:"25",height:"23"})," in the upper left corner and choose ",(0,i.jsx)(n.em,{children:"Management & Governance"})," -> ",(0,i.jsx)(n.em,{children:"Cloud Trace Service"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["On the displayed page, choose ",(0,i.jsx)(n.em,{children:"Tracker List"})," in the navigation pane on the left."]}),"\n",(0,i.jsxs)(n.li,{children:["Locate a data tracker and click ",(0,i.jsx)(n.em,{children:"Configure"})," in the ",(0,i.jsx)(n.em,{children:"Operation"})," column.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Operation"}),": Select the data operations that need to be recorded."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Transfer to OBS"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["If you select ",(0,i.jsx)(n.em,{children:"Yes"}),", select an existing OBS bucket or create one directly on the ",(0,i.jsx)(n.em,{children:"Configure Tracker"})," page and set ",(0,i.jsx)(n.strong,{children:"File Prefix"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["If you select ",(0,i.jsx)(n.em,{children:"No"}),", no configuration is required."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Create OBS Bucket"}),": If this function is enabled, an OBS bucket will be created automatically with the name you enter. If this function is disabled, select an existing OBS bucket."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"OBS Bucket"}),": You can create an OBS bucket or select an existing OBS bucket."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Retention Period"}),": Select the duration for storing traces in the OBS bucket."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"File Prefix"}),": The prefix is used to mark a transferred trace file. Your specified prefix will be automatically added to the beginning of the name of a transferred file, helping you quickly filter files."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Verify Trace File"}),": When this function is enabled, integrity verification will be performed to check whether trace files in OBS buckets have been tampered with."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Click ",(0,i.jsx)(n.em,{children:"OK"})," to complete the tracker configuration."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"creating-an-agency",children:"Creating an Agency"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Log in to the ",(0,i.jsx)(n.a,{href:"https://console.otc.t-systems.com/iam/?locale=en-us",children:(0,i.jsx)(n.em,{children:"Identity and Access Management (IAM) console"})}),". In the navigation pane on the left, choose ",(0,i.jsx)(n.em,{children:"Agencies"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["On the ",(0,i.jsx)(n.em,{children:"Agencies"})," page, click ",(0,i.jsx)(n.em,{children:"Create Agency"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Set the agency information."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["For ",(0,i.jsx)(n.strong,{children:"Agency Name"}),", enter ",(0,i.jsx)(n.code,{children:"serverless\\_trust"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["For ",(0,i.jsx)(n.strong,{children:"Agency Type"}),", select ",(0,i.jsx)(n.strong,{children:"Cloud service"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["For ",(0,i.jsx)(n.strong,{children:"Cloud service"}),", select ",(0,i.jsx)(n.strong,{children:"FunctionGraph"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["For ",(0,i.jsx)(n.strong,{children:"Validity Period"}),", select ",(0,i.jsx)(n.strong,{children:"Unlimited"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Click ",(0,i.jsx)(n.em,{children:"Assign Permissions"}),". On the ",(0,i.jsx)(n.em,{children:"Assign Permissions"})," page, select ",(0,i.jsx)(n.strong,{children:"Tenant Administrator"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["Users with the ",(0,i.jsx)(n.strong,{children:"Tenant Administrator"})," permission can perform any operations on all cloud resources of the enterprise."]})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Click ",(0,i.jsx)(n.em,{children:"OK"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"pushing-alarm-messages",children:"Pushing Alarm Messages"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Create a topic named ",(0,i.jsx)(n.code,{children:"cts\\_test"})," on the ",(0,i.jsx)(n.em,{children:"SMN console"}),". For details, see ",(0,i.jsx)(n.a,{href:"https://docs.otc.t-systems.com/simple-message-notification/umn/topic_management/creating_a_topic.html",children:"Creating a Topic"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Add subscriptions to the ",(0,i.jsx)(n.code,{children:"cts\\_test"})," topic to push alarm messages. For details, see ",(0,i.jsx)(n.a,{href:"https://docs.otc.t-systems.com/simple-message-notification/umn/topic_management/adding_a_subscription_to_a_topic.html",children:"Adding a Subscription"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Alarm messages can be sent by ",(0,i.jsx)(n.strong,{children:"emails"}),", ",(0,i.jsx)(n.strong,{children:"SMS"})," messages, and ",(0,i.jsx)(n.strong,{children:"HTTP/HTTPS"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"In this example, when log events trigger the specified function, the function filters operations that are performed by users not in the IP address whitelist, and pushes alarm messages to the subscribers."}),"\n"]})}),"\n",(0,i.jsx)(n.h2,{id:"building-a-program",children:"Building a Program"}),"\n",(0,i.jsx)(n.p,{children:"This section describes how use the following snippet for log alarms."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'import json\nimport base64\nimport sys\nimport os\nimport requests\n\ndef handler(event, context):\n    text = json.dumps(event["cts"])\n    ctsmsg = json.loads(text)\n    \n    #Resource operator IP\n    source_ip = ctsmsg["source_ip"]\n    #trace_name\n    action = ctsmsg["trace_name"]\n    \n    SMN_Topic = context.getUserData(\'SMN_Topic\')\n    regionName = context.getUserData(\'RegionName\')\n    ip = context.getUserData(\'IP\')\n    projectId = context.getProjectID()\n    \n    if (action not in ("login" or "logout")):\n    \treturn "action is fail"\n    \n    if ip.find(source_ip) < 0 :\n        return "reasonable " + action\n    \n    logInfo = "  IP:"+source_ip + ",  Action:"+action\n\n    body = {"message" :"Illegal operation["+logInfo+"]", "subject":"CTSTrigger"}\n    headers = {\'X-Auth-Token\': context.getToken(),  "accept": "application/json"}\n    url= "https://smn."+regionName+".myhuaweicloud.com/v2/"+projectId+"/notifications/topics/urn:smn:"+regionName+":"+projectId+":"+SMN_Topic+"/publish"\n\n    response = requests.post(url,headers=headers,data=json.dumps(body))\n    if response.status_code != 200:\n        print (response.status_code)\n        return "send alarm message failed."\n\n\n    return \'send email success\'\n'})}),"\n",(0,i.jsx)(n.h3,{id:"creating-a-function",children:"Creating a Function"}),"\n",(0,i.jsxs)(n.p,{children:["Create a function for extracting the logs (as shown in the Python snippet below) and upload the code package. For details, see ",(0,i.jsx)(n.a,{href:"https://docs.otc.t-systems.com/function-graph/umn/function_management.html",children:"Function Management"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'import json\nimport base64\nimport sys\nimport os\nimport requests\n\nfrom obs import *\n\ncurrent_file_path = os.path.dirname(os.path.realpath(__file__))\n# append current path to search paths, so that we can import some third party libraries.\nsys.path.append(current_file_path)\n\nTEMP_ROOT_PATH = "/tmp/"\nregion = \'eu-de\'\nsecure = True\nsignature = \'v4\'\nport = 443\npath_style = True\n\n\ndef GetObject(obsAddr, bucketName, objName, ak, sk):\n    TestObs = ObsClient(access_key_id=ak, secret_access_key=sk,\n                        is_secure=secure, server=obsAddr, signature=signature, path_style=path_style, region=region,\n                        ssl_verify=False, port=port,\n                        max_retry_count=5, timeout=20)\n\n    LobjectRequest = GetObjectRequest(content_type=\'application/zip\', content_language=None, expires=None,\n                                      cache_control=None, content_disposition=None, content_encoding=None,\n                                      versionId=None)\n\n    Lheaders = GetObjectHeader(range=\'\', if_modified_since=None, if_unmodified_since=None, if_match=None,\n                               if_none_match=None)\n\n    loadStreamInMemory = False\n    fileNamePath = TEMP_ROOT_PATH + objName\n    resp = TestObs.getObject(bucketName=bucketName, objectKey=objName, downloadPath=fileNamePath,\n                             getObjectRequest=LobjectRequest, headers=Lheaders, loadStreamInMemory=loadStreamInMemory)\n\n    print(\'*** GetObject resp: \', resp)\n\n    return (int(resp.status))\n\n\ndef PostObject(obsAddr, bucket, objName, ak, sk):\n    obsClient = ObsClient(access_key_id=ak, secret_access_key=sk,\n                        is_secure=secure, server=obsAddr, signature=signature, path_style=path_style, region=region,\n                        ssl_verify=False, port=port,\n                        max_retry_count=5, timeout=20)\n\n    Lheaders = PutObjectHeader(md5=None, acl=\'private\', location=None, contentType=\'text/plain\')\n\n    Lheaders.sseHeader = SseKmsHeader.getInstance()\n    h = PutObjectHeader()\n    Lmetadata = {\'key\': \'value\'}\n\n    objPath = TEMP_ROOT_PATH + objName\n    resp = obsClient.putFile(bucketName=bucket, objectKey=objName, file_path=objPath,\n                              metadata=Lmetadata, headers=h)\n    if isinstance(resp, list):\n        for k, v in resp:\n            print(\n            \'PostObject, objectKey\', k, \'common msg:status:\', v.status, \',errorCode:\', v.errorCode, \',errorMessage:\',\n            v.errorMessage)\n    else:\n        print(\'*** PostObject, common msg: status:\', resp.status, \',errorCode:\', resp.errorCode, \',errorMessage:\',\n              resp.errorMessage)\n\ndef checkAlarmLogs(logs):\n    alarmlogs = []\n    for log in logs:\n        logStr = json.dumps(log)\n        if "WARN" in logStr or "WRN" in logStr or "ERROR" in logStr or "ERR" in logStr:\n            alarmlogs.append(logStr)\n    return alarmlogs\n\ndef log_store(fileName, logs):\n    fileNamePath = TEMP_ROOT_PATH + fileName\n    with open(fileNamePath, \'a\') as f:\n        print ("*** Open log file"+fileNamePath+" successfully")\n        for log in logs:\n            logStr = json.dumps(log).replace(\'\\\\\',\'\')\n            if "WARN" in logStr or "WRN" in logStr or "ERROR" in logStr or "ERR" in logStr:\n                f.write(logStr + \'\\n\')\n    return fileName\n\ndef handler(event, context):\n    # Obtains the data of lts logs.\n    print ("*********the data of lts logs********")\n    encodingData = event["lts"]["data"]\n    data = base64.b64decode(encodingData)  # Base64 decoding is required because the information of lts logs has been encoded.\n    text = json.loads(data)\n    # Output log group id\n    print ("*** log group id:"+text["log_group_id"])\n    # Output log topic id\n    print ("*** log topic id:"+text["log_topic_id"])\n    # Obtains lts log list\n    logs = text["logs"]\n    # Check whether the alarm log existed\n    alarmLogs = checkAlarmLogs(logs)\n    if len(alarmLogs) == 0:\n        print ("*** no need to send alarm message")\n        return "no need to send alarm message"\n    \n    # send smn message \n    print ("***********send smn message **********")\n    SMN_Topic = context.getUserData(\'SMN_Topic\')\n    if not SMN_Topic.strip():\n        print (\'*** No SMN topic. Please configure "SMN_Topic" environment variable\')\n        return "Environment variable configuration error"\n    projectId = context.getProjectID()\n    body = {"message" :"Get warning message.The content of message is:"+json.dumps(alarmLogs).replace(\'\\\\\',\'\'), "subject":"TimeTrigger"}\n    headers = {\'X-Auth-Token\': context.getToken(),  "accept": "application/json"}\n    url= "https://smn." + region + ".myhuaweicloud.com/v2/"+projectId+"/notifications/topics/urn:smn:" + region + ":"+projectId+":"+SMN_Topic+"/publish"\n    response = requests.post(url,headers=headers,data=json.dumps(body))\n    if response.status_code != 200:\n        print ("*** send SMN message failed. resp statusCode:"+str(response.status_code))\n        return "send alarm message failed."\n    print ("*** send SMN message to terminal successfully")\n    \n    print ("***********strore log file to obs bucket **********")\n    obs_address = context.getUserData(\'obs_address\')\n    storeBucket = context.getUserData(\'obs_store_bucket\')\n    storeObjName = context.getUserData(\'obs_store_objName\')\n    if not obs_address.strip() or not storeBucket.strip() or not storeObjName.strip():\n        print (\'*** No obs environment variable. Please configure obs environment variable\')\n        return "Environment variable configuration error"\n\n    ak = context.getAccessKey()\n    sk = context.getSecretKey()\n    if not ak.strip() or not sk.strip():\n        print ("*** Can not get accessKey or secretKey. Please check authority of IAM service")\n        return "accessKey or secretKey error" \n\n    print ("*** obs_address: " + obs_address)\n    print ("*** store bucket: " + storeBucket)\n    print ("*** store objName: " + storeObjName)\n\n    # download file uploaded by user from obs\n    # if store object uploaded not exist, automatically create OBS object.\n    status = GetObject(obs_address, storeBucket, storeObjName, ak, sk)\n    if status != 200:\n        print ("*** get store object failed. Create a new OBS object:"+storeObjName)\n    \n    outFile = log_store(storeObjName, alarmLogs)\n    \n    # upload file to obs bucket\n    PostObject(obs_address, storeBucket, outFile, ak, sk)\n    return \'log store success\'\n'})}),"\n",(0,i.jsx)(n.p,{children:"This function analyzes received operation records, filters logins or logouts from unauthorized IP addresses using a whitelist, and sends alarms under a specified SMN topic."}),"\n",(0,i.jsx)(n.h3,{id:"setting-environment-variables",children:"Setting Environment Variables"}),"\n",(0,i.jsxs)(n.p,{children:["On the ",(0,i.jsx)(n.em,{children:"Configuration"})," tab page of the function, set the environment variables and SMN topic name, as shown in table below:"]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Environment Variable"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"SMN_Topic"}),(0,i.jsx)(n.td,{children:"SMN topic name."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"RegionName"}),(0,i.jsx)(n.td,{children:"Region."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"IP"}),(0,i.jsx)(n.td,{children:"IP address whitelist."})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Table 1"})," Environment variable description"]}),"\n",(0,i.jsxs)(n.p,{children:["For details about how to set environment variables, see ",(0,i.jsx)(n.a,{href:"https://docs.otc.t-systems.com/function-graph/umn/configuring_functions/configuring_environment_variables.html",children:"Using Environment Variables"}),", as shown in ",(0,i.jsx)(n.a,{href:"#figure-2",children:"Figure 2"}),"."]}),"\n",(0,i.jsx)("a",{id:"figure-2"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(69273).A+"",width:"859",height:"307"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Figure 2"})," Setting environment variables"]}),"\n",(0,i.jsx)(n.h2,{id:"adding-an-event-source",children:"Adding an Event Source"}),"\n",(0,i.jsxs)(n.p,{children:["Create a CTS trigger, as shown in ",(0,i.jsx)(n.a,{href:"#enabling-cts",children:"Enabling CTS"}),". For details, see ",(0,i.jsx)(n.a,{href:"https://docs.otc.t-systems.com/function-graph/umn/creating_triggers/using_a_cts_trigger.html",children:"Using a CTS Trigger"}),"."]}),"\n",(0,i.jsx)("a",{id:"figure-3"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(38949).A+"",width:"671",height:"560"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Figure 3"})," Creating a CTS trigger"]}),"\n",(0,i.jsx)(n.p,{children:"CTS records the logins and logouts of users on IAM."}),"\n",(0,i.jsx)(n.h2,{id:"processing-operation-records",children:"Processing Operation Records"}),"\n",(0,i.jsxs)(n.p,{children:["When a user performs login or logout using an account, the subscription service log will be triggered and a function will be directly invoked. The system then checks whether the IP address of the current login or logout account is in the whitelist based on function code. If the IP address is not in the whitelist, SMN will send notifications, as shown in ",(0,i.jsx)(n.a,{href:"#figure-4",children:"Figure 4"}),"."]}),"\n",(0,i.jsx)("a",{id:"figure-4"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://support.huaweicloud.com/intl/en-us/bestpractice-cts/en-us_image_0000001312598869.png",alt:""})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Figure 4"})," Alarm notification sent by email"]}),"\n",(0,i.jsx)(n.p,{children:"The email contains the unauthorized IP address and user operation (login or logout)."}),"\n",(0,i.jsxs)(n.p,{children:["On the ",(0,i.jsx)(n.em,{children:"Monitoring"})," tab page of the function, check the number of invocations, as shown in ",(0,i.jsx)(n.a,{href:"#figure-5",children:"Figure 5"}),"."]}),"\n",(0,i.jsx)("a",{id:"figure-"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Figure 5"})," Function metrics",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.img,{src:"https://support.huaweicloud.com/intl/en-us/bestpractice-cts/en-us_image_0000001312357985.png",alt:""})]})]})}function g(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},69273:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/en-us_image_0000001264392960-9054719e1a3dce557972321447efaadb.png"},60435:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/en-us_image_0000001264679162-167335dc9b9138298f172342e243483d.png"},38949:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/en-us_image_0000001312436037-e3255c9a57e3bf03e77905d1bad381f0.png"},55435:(e,n,s)=>{s.d(n,{A:()=>t});const t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAASCAYAAACEnoQPAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAEXRFWHRTb2Z0d2FyZQBTbmlwYXN0ZV0Xzt0AAAGkSURBVDiNndO/i+JAGMfhj8eQLFYagkUKbSyEYCysRLCwsFJEwc7av8tCEGJnIfaaSkWxEWzFFCIqGAKJgbviUC5m2Vv2W87MMzPv/Ih5nvebH+bXT+F/8e12+xKL94bdbodlWTiO82pLJpM0m00SiURobOzfmufzOcvlEgBZllEUhcvlgud5ALRaLTKZTBTbto1pmgghaDQaoUGr1YrZbIYQgl6vhyRJ4ZoXiwUAlUrlBZ81F4tFdF0nCALW6/Vr0he+3W4IIcjlcgAMBgP6/T6TyQSAQqEAwPF4jOJnJEnC933u9zsAl8sl1P94PKL44+ODIAiwbRtJkmg2mxiGQbvdBuBwOACgKEoUZ7NZADabDQCaplGtVonH48DfKwTQdT2K8/k8siyz3+85nU6hrW63W87nM6qqomlaFEuSRLlcBmA8HuP7PgCu62JZFgC1Wi00aejADMMgnU7jOA6maeL7PqPRCM/zKJVKpFKpEI69/yrf9xkOh1yvV4QQBEGAqqp0u13e8+lVdTodZFn+En668jOu6zKdTqnX66/n+G38nfwBKbqv10VnRowAAAAASUVORK5CYII="},72312:(e,n,s)=>{s.d(n,{A:()=>t});const t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAXCAYAAAD+4+QTAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAEXRFWHRTb2Z0d2FyZQBTbmlwYXN0ZV0Xzt0AAABSSURBVEiJY/z///9/BhoDJlpbQDdLWGCM9+8/MKRllTJcvHyNIgP1dbUYZk3rZhAUFICL0cUnjKMRPzItGU3CJIHhE/HDx5LRJEwSGD4RTxdLANA6KyHkPZlqAAAAAElFTkSuQmCC"},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>a});var t=s(96540);const i={},r=t.createContext(i);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);