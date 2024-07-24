---
id: ci-jenkins-swr-cce
title: Build a CI Pipeline with Jenkins, SWR and CCE
tags: [devops, ci, jenkins, swr, cce]
---

# Build a CI Pipeline with Jenkins, SWR and CCE

This blueprint covers integrating Jenkins with Open Telekom Cloud Container Engine (CCE) for efficient CI/CD pipelines. It details installing Jenkins in CCE clusters, emphasizing using containerized Masters and dynamic Agents managed by Kubernetes for optimal resource utilization and self-healing. The Master schedules jobs, which Agents execute within Kubernetes pods. This setup enhances security and maintenance efficiency. 

## Solution Design

[Jenkins](https://www.jenkins.io/) is an open source continuous integration (CI) tool that provides
user-friendly GUIs. It originates from [Hudson](https://projects.eclipse.org/projects/technology.hudson) and is used to automate
all sorts of tasks related to building, testing, and delivering or
deploying software.

Jenkins is written in Java and can run in popular servlet containers
such as Tomcat, or run independently. It is usually used together with
the version control tools (or SCM tools) and build tools. Jenkins
supports various languages and is compatible with third-party build
tools, such as Maven, Ant, and Gradle. It seamlessly integrates with
common version control tools, such as SVN and Git, and can directly
connect to source code hosting services, such as GitHub.

:::warning Constrains
-   This solution can be deployed only in CCE clusters. It is not supported in DeC.
-   CCE does not provide maintenance and support for Jenkins. The maintenance is provided by the developers.
::: 

You can install Jenkins using one of the following methods:

-   You can use a **single Master** to install Jenkins. The Master handles
    jobs and builds and releases services. However, security risks may
    exist.
-   or use **Master & Agents**. Master schedules build jobs to
    Agents for execution, and monitors the Agent(s) status. Agents execute
    the build jobs dispatched by the Master and return the job progress and
    result. You can install the Master and Agents on VMs, containers, or combination
    of the two.

In this blueprint, Jenkins is installed with a containerized Master and
Agents. Kubernetes schedules the dynamic Agents:

![**Figure 1** Installing Jenkins onKubernetes](/img/docs/blueprints/by-use-case/devops/cicd-jenkins-swr-cce/en-us_image_0000001348013634.png)

-   The Master handles jobs. Install Kubernetes add-ons on the Master to
    use the Kubernetes platform resources.
-   The Kubernetes platform generates pods for Agents to execute jobs.
    When a job is scheduled on the Master, the Master sends a request to
    the Kubernetes platform using the Kubernetes add-on. After receiving
    the request, Kubernetes builds a pod using the pod template to send
    requests to the Master. After the Master is successfully connected,
    you can execute the job on the pod.

## Installing and Deploying Jenkins Master

:::important
Select an image from Docker Hub. For this test, `jenkins/jenkins:latest` was selected, which is the official jenkins image with 
all add-ons and functions. For details, see [Installing Jenkins](https://www.jenkins.io/doc/book/installing/).

It is **not** advised to use `latest` images on production, choose a specific version!
:::

### Prerequisites

-   Before creating a containerized workload, create a cluster (the
    cluster must contain at least one node with 4 vCPUs and 8 GB
    memory). For details, see [Creating a CCE Cluster](https://docs.otc.t-systems.com/cloud-container-engine/umn/clusters/creating_a_cce_cluster.html).
-   In order to manage your CCE cluster through `kubectl`, you need to
    configure kubectl so that it can communicate with the cluster. This
    involves obtaining the cluster\'s credentials from CCE and setting
    up a `kubeconfig` file that kubectl will use to connect. For details,
    see [Connecting to a Cluster Using kubectl](https://docs.otc.t-systems.com/cloud-container-engine/umn/clusters/connecting_to_a_cluster/connecting_to_a_cluster_using_kubectl.html).
-   To enable access to a workload from a public network, ensure that an
    elastic IP address (EIP) has been bound to or a load balancer has
    been configured for at least one node in the cluster.

### Installing Jenkins on CCE

1.  The first step is to create a dedicated Kubernetes namespace for
    Jenkins using:

    ```bash
    kubectl create namespace jenkins
    ```

2.  Create service account. Jenkins needs access to the Kubernetes API
    to manage resources. The **sa.yaml** file defines a ClusterRole to
    grant admin access, a ServiceAccount, and a ClusterRoleBinding to
    link them. This is created with:


    ```yaml title="sa.yaml"
    apiVersion: rbac.authorization.k8s.io/v1
    kind: ClusterRole
    metadata:
    name: jenkins-admin
    rules:
    - apiGroups: [""]
    resources: ["*"]
    verbs: ["*"]
    ---
    apiVersion: v1
    kind: ServiceAccount
    metadata:
    name: jenkins-admin
    namespace: jenkins
    ---
    apiVersion: rbac.authorization.k8s.io/v1
    kind: ClusterRoleBinding
    metadata:
    name: jenkins-admin
    roleRef:
    apiGroup: rbac.authorization.k8s.io
    kind: ClusterRole
    name: jenkins-admin
    subjects:
    - kind: ServiceAccount
    name: jenkins-admin
    namespace: jenkins
    ```

    and apply with:

    ```bash
    kubectl create -f sa.yaml --namespace jenkins
    ```

3.  Create persistent volume claim. To persist Jenkins data, a
    `PersistentVolumeClaim` is defined in **storage.yaml**. An available
    `10Gi` volume will be dynamically provisioned when the claim is
    created:

    ```yaml title="storage.yaml"
    apiVersion: v1
    kind: PersistentVolumeClaim
    metadata:
    name: jenkins-pv-claim
    namespace: jenkins
    annotations:
    everest.io/disk-volume-type: SSD
    spec:
    accessModes:
    - ReadWriteOnce
    resources:
    requests:
        storage: 10Gi
    storageClassName: csi-disk
    ```

    and apply with:

    ```bash
    kubectl create -f storage.yaml --namespace jenkins
    ```

4.  Create Jenkins deployment. The **deployment.yaml** defines a Jenkins
    `Deployment` and associated Kubernetes objects like `Services` and
    `Probes`. This spins up the Jenkins pod with the persistent volume
    mounted:

    ```yaml title="deployment.yaml"
    apiVersion: apps/v1
    kind: Deployment
    metadata:
    name: jenkins
    namespace: jenkins
    spec:
    replicas: 1
    selector:
    matchLabels:
        app: jenkins
    template:
    metadata:
        labels:
        app: jenkins
    spec:
        securityContext:
                fsGroup: 1000
                runAsUser: 1000
        serviceAccountName: jenkins-admin
        containers:
        - name: jenkins
            image: jenkins/jenkins:lts
            resources:
                limits:
                memory: "2Gi"
                cpu: "1000m"
                requests:
                memory: "500Mi"
                cpu: "500m"
            ports:
                - name: httpport
                containerPort: 8080
                - name: jnlpport
                containerPort: 50000
            livenessProbe:
                httpGet:
                path: "/login"
                port: 8080
                initialDelaySeconds: 90
                periodSeconds: 10
                timeoutSeconds: 5
                failureThreshold: 5
            readinessProbe:
                httpGet:
                path: "/login"
                port: 8080
                initialDelaySeconds: 60
                periodSeconds: 10
                timeoutSeconds: 5
                failureThreshold: 3
            volumeMounts:
                - name: jenkins-data
                mountPath: /var/jenkins_home
        volumes:
        - name: jenkins-data
            persistentVolumeClaim:
                claimName: jenkins-pv-claim
    ```

    and apply with:

    ```bash
    kubectl create -f deployment.yaml --namespace jenkins
    ```

5.  Create Jenkins service. The Jenkins service exposes Jenkins on a `NodePort`:

    By default, the Jenkins service is exposed internally through a
    `NodePort`. This makes Jenkins available of any Kubernetes node IP.

    Alternatively, a dedicated external IP can be assigned by switching
    the service type to `LoadBalancer`. This will provision a cloud load
    balancer that handles routing external traffic to Jenkins. For
    details, see [Creating a LoadBalancer Service](https://docs.otc.t-systems.com/cloud-container-engine/umn/network/service/loadbalancer/creating_a_loadbalancer_service.html).

    ```yaml title="service.yaml"
    apiVersion: v1
    kind: Service
    metadata:
    name: jenkins-service
    namespace: jenkins
    annotations:
        prometheus.io/scrape: 'true'
        prometheus.io/path:   /
        prometheus.io/port:   '8080'
    spec:
    selector: 
    app: jenkins
    type: NodePort  
    ports:
    - name: httpport
        port: 8080
        targetPort: 8080
        nodePort: 32000
    - name: jnlpport
        port: 50000
        targetPort: 50000
    ```

    and apply with:

    ```bash
    $ kubectl create -f service.yaml --namespace jenkins
    ```

### Logging In and Initializing Jenkins

1.  On the CCE console, click the target cluster. Choose *Networking*
    in the navigation pane. On the *Services* tab , view the
    Jenkins access mode.

    ![image1](/img/docs/blueprints/by-use-case/devops/cicd-jenkins-swr-cce/en-us_image_0000001349490578.png)


2.  Enter `http://<ElasticLoadBalancerIPv4Address>:8080` in the browser address box to visit the Jenkins configuration page.

    When you visit the page for the first time, you are prompted to
    obtain the initial administrator password. You can obtain the
    password from the Jenkins pod. Before running the following
    commands, connect to the cluster using `kubectl`. For details, see
    [Connecting to a Cluster Using kubectl](https://docs.otc.t-systems.com/cloud-container-engine/umn/clusters/using_kubectl_to_run_a_cluster/connecting_to_a_cluster_using_kubectl.html).

    ```bash
    # kubectl get pod -n cicd

    NAME                                     READY   STATUS    RESTARTS   AGE
    jenkins-544d9765c4-pqgd8                  1/1     Running   0          1h

    # kubectl exec -it jenkins-544d9765c4-pqgd8 -n cicd -- /bin/sh
    # cat /var/jenkins_home/secrets/initialAdminPassword
    b10eabe29a9f427c9b54c01a9c3383ae
    ```

3.  The system prompts you to select the default recommended add-on and
    create an administrator upon the first login. After the initial
    configuration is complete, the Jenkins page is displayed.

    ![image1](/img/docs/blueprints/by-use-case/devops/cicd-jenkins-swr-cce/en-us_image_0000001465971797.png)

### Modifying the number of Concurrent Build Jobs 

1.  On the Jenkins dashboard page, click *Manage Jenkins* on the left,
    choose *System Configuration* -> *Manage nodes and clouds*, and
    select *Configure* from the drop-down list of the target node.

    ![image2](/img/docs/blueprints/by-use-case/devops/cicd-jenkins-swr-cce/en-us_image_0000001471311349.png)

:::note
-   You can modify the number of concurrent build jobs on both
    Master and Agent. The following uses Master as an example.
-   If the Master is used with Agents, you are advised to set the number of concurrent
    build jobs of Master to `0`. That is, all build jobs are performed using Agents. If a
    single Master is used, you **do not need** to change the value to `0`.
:::


2.  Modify the maximum number of concurrent build jobs. In this example,
    the value is changed to `2`. You can change the value as required.

    ![image3](/img/docs/blueprints/by-use-case/devops/cicd-jenkins-swr-cce/en-us_image_0000001416531766.png)


## Configuring Jenkins Agent 

After Jenkins is installed, the following information may display,
indicating that Jenkins uses a Master for local build and Agents are not
configured.

![image1](/img/docs/blueprints/by-use-case/devops/cicd-jenkins-swr-cce/en-us_image_0000001465972145.png)

:::note
If you install Jenkins using a Master, you can build a pipeline after
performing operations in [Installing and Deploying Jenkins Master](#installing-and-deploying-jenkins-master). 
For details, see [Using Jenkins to Build a Pipeline](#using-jenkins-to-build-a-pipeline).
:::

### Setting a Dynamic Agent for Jenkins

1.  **Install the plug-in**

    On the Jenkins dashboard page, click *Manage Jenkins* on the left
    and choose *System Configuration* -> *Manage Plugins*. On the
    *Available* tab page, filter and install *Kubernetes Plugin* and
    *Kubernetes CLI Plugin*.

    ![image6](/img/docs/blueprints/by-use-case/devops/cicd-jenkins-swr-cce/en-us_image_0000001471430697.png)

    The plug-in version may change with time. Select a plug-in version
    as required:

    -   [Kubernetes Plugin](https://plugins.jenkins.io/kubernetes/):`3734.v562b_b_a_627ea_c`
        
        It is used to run dynamic Agents in the Kubernetes cluster,
        create a Kubernetes pod for each started Agent, and stop the pod
        after each build is complete.
    -   [Kubernetes CLI Plugin](https://plugins.jenkins.io/kubernetes-cli/):`1.10.3`

    `kubectl` can be configured for jobs to interact with Kubernetes clusters.

:::note
The Jenkins plug-ins are provided by the plug-in maintainer and may
be iterated due to security risks.
:::

2.  **Add cluster access credentials to Jenkins**

    Add cluster access credentials to Jenkins in advance. For details, see [Setting Cluster Access Credentials](#setting-cluster-access-credentials).

3.  **Configure basic cluster information**

    On the Jenkins dashboard page, click *Manage Jenkins* on the left
    and choose *System Configuration* -> *Manage nodes and clouds*.
    Click *Configure Clouds* on the left to configure the cluster.
    Click *Add a new cloud* and select *Kubernetes*. The cluster
    name can be customized.

4.  **Enter Kubernetes Cloud details**

    Set the following cluster parameters and retain the values for other parameters:

    -   **Kubernetes URL**: cluster API server address. You can enter `https://kubernetes.default.svc.cluster.local:443`.
    -   **Kubernetes server certificate key**: your cluster CA certificate.
    -   **Credentials**: Select the cluster credential added in. You can click *Test Connection* to check whether the cluster is connected.
    -   **Jenkins URL**: Jenkins access path. Enter the IP address of port 8080 set in installing process **(ports 8080 and 50000 must
        be enabled for the IP address, that is, the intra-cluster access
        address)**, for example, `http://10.247.222.254:8080`.

    ![**Figure 1**Example](/img/docs/blueprints/by-use-case/devops/cicd-jenkins-swr-cce/en-us_image_0000001349986824.png)

5.  **Pod Template**: Click *Add Pod Template -> Pod Template details*
    and set the pod template parameters:

        -   **Name**: `jenkins-agent`
        -   **Namespace**: `cicd`
        -   **Labels**: `jenkins-agent`
        -   **Usage**: Select `Use this node as much as possible`.

        ![**Figure 2** Basic parameters of the podtemplate](/img/docs/blueprints/by-use-case/devops/cicd-jenkins-swr-cce/en-us_image_0000001399744097.png)

    -   Add a container. Click *Add Container -> Container Template*.

        -   **Name**: The value must be `jnlp`.
        -   **Docker image**: `jenkins/inbound-agent:4.13.3-1`. The
            image version may change with time. Select an image version
            as required or use the latest version.
        -   **Working directory**: `/home/jenkins/agent` is selected
            by default.
        -   **Command to run**/**Arguments to pass to the command**:
            Delete the existing default value and leave these two
            parameters empty.
        -   **Allocate pseudo-TTY**: Select this parameter.
        -   Select *Run in privileged mode* and set `Run As User ID`
            to `0` (**root** user).

        ![**Figure 3** Container template parameters](/img/docs/blueprints/by-use-case/devops/cicd-jenkins-swr-cce/en-us_image_0000001350206690.png)

6.  Click **Save**

### Setting Cluster Access Credentials

The certificate file that can be identified in Jenkins is in **PKCS#12**
format. Therefore, convert the cluster certificate to a PFX certificate
file in PKCS#12 format.

1.  Log in to the *CCE console* and go to the cluster console. Choose
    *Cluster Information -> Connection Information* to download the
    cluster certificate. The downloaded certificate contains three
    files: **ca.crt**, **client.crt**, and **client.key**.

2.  Log in to a Linux host, place the three certificate files in the
    same directory, and use **OpenSSL** to convert the certificate into a
    **cert.pfx** certificate. After the certificate is generated, the
    system prompts you to enter a custom password.

    ```bash
    openssl pkcs12 -export -out cert.pfx -inkey client.key -in client.crt -certfile ca.crt
    ```

3.  On the *Jenkins console*, choose *Manage Jenkins* -> *Manage
    Credentials* and click *Global*. You can also create a domain.

    ![image8](/img/docs/blueprints/by-use-case/devops/cicd-jenkins-swr-cce/en-us_image_0000001416735446.png)

4.  Click *Add Credential*:

    -   **Kind**: Select `Certificate`.
    -   **Scope**: Select `Global`.
    -   **Certificate**: Select *Upload PKCS#12 certificate* and upload the **cert.pfx** file generated in.
    -   **Password**: The password customized during **cert.pfx** conversion.
    -   **ID**: Set this parameter to `k8s-test-cert`, which can be customized.

    ![image9](/img/docs/blueprints/by-use-case/devops/cicd-jenkins-swr-cce/en-us_image_0000001400577445.png)

## Using Jenkins to Build a Pipeline


### Obtaining a long-term SWR Login Command 

During Jenkins installation and deployment, the Docker commands have
been configured in the container. Therefore, no additional configuration
is required for interconnecting Jenkins with SWR. You can directly run
the Docker commands. You only need to obtain a long-term valid SWR login
command. For details, see [Obtaining a Long-Term Valid Login Command](https://docs.otc.t-systems.com/software-repository-container/umn/image_management/obtaining_a_long-term_valid_login_command.html).

For example, the command of this account is as follows:

```shell
docker login -u eu-de_otcxxxxx@xxxxx -p xxxxx swr.eu-de.otc.t-systems.com
```

### Creating a Pipeline to Build and Push Images

In this example, Jenkins is used to build a pipeline to pull code from
the code repository, package the code into an image, and push the image
to SWR.

The pipeline creation procedure is as follows:

1.  Click *New Item* on the Jenkins page.

2.  Enter a task name and select *Create Pipeline*.

    ![image1](/img/docs/blueprints/by-use-case/devops/cicd-jenkins-swr-cce/en-us_image_0000001466646017.png)

3.  Configure only the pipeline script.

    ![image2](/img/docs/blueprints/by-use-case/devops/cicd-jenkins-swr-cce/en-us_image_0000001416249976.png)

    The following pipeline scripts are for reference only. You can
    customize the script. For details about the syntax, see
    [Pipeline](https://www.jenkins.io/doc/book/pipeline/).

    Some parameters in the example need to be modified:

    -   **git_url**: Address of your code repository. Replace it with the actual address.
    -   **swr_login**: The login command obtained in [Obtaining a long-term SWR Login Command](#obtaining-a-long-term-swr-login-command)
    -   **swr_region**: SWR region.
    -   **organization**: The actual organization name in SWR.
    -   **build_name**: Name of the created image.
    -   **credential** The cluster credential added to Jenkins. Enter
        the credential ID. If you want to deploy the service in another
        cluster, add the access credential of the cluster to Jenkins
        again. For details, see [Setting Cluster Access Credentials](#setting-cluster-access-credentials)
    -   **apiserver**: IP address of the API server where the application cluster is deployed. Ensure that the IP address can
        be accessed from the Jenkins cluster.


    ```ruby
    //Define the code repository address.
    def git_url = 'https://github.com/cnych/jenkins-demo.git'
    //Define the SWR login command.
    def swr_login = 'docker login -u eu-dexxxx@xxxxxxx -p xxxxxxxxxxxx swr.eu-de.otc.t-systems.com'
    //Define the SWR region.
    def swr_region = 'eu-de'
    //Define the name of the SWR organization to be uploaded.
    def organization = 'batch'
    //Define the image name.
    def build_name = 'jenkins-demo'
    //Certificate ID of the cluster to be deployed
    def credential = 'k8s-token'
    //API server address of the cluster. Ensure that the address can be accessed from the Jenkins cluster.
    def apiserver = 'https://kubernetes.default.svc.cluster.local:443'

    pipeline {
        agent any
        stages {
            stage('Clone') {
                steps{
                    echo "1.Clone Stage"
                    git url: git_url
                    script {
                        build_tag = sh(returnStdout: true, script: 'git rev-parse --short HEAD').trim()
                    }
                }
            }
            stage('Test') {
                steps{
                    echo "2.Test Stage"
                }
            }
            stage('Build') {
                steps{
                    echo "3.Build Docker Image Stage"
                    sh "docker build -t swr.${swr_region}.otc.t-systems.com/${organization}/${build_name}:${build_tag} ."
                    //${build_tag} indicates that the build_tag variable is obtained as the image tag. It is the return value of the git rev-parse --short HEAD command, that is, commit ID.
                }
            }
            stage('Push') {
                steps{
                    echo "4.Push Docker Image Stage"
                    sh swr_login
                    sh "docker push swr.${swr_region}.otc.t-systems.com/${organization}/${build_name}:${build_tag}"
                }
            }
            stage('Deploy') {
                steps{
                    echo "5. Deploy Stage"
                    script {
                    try {
                        withKubeConfig([credentialsId: credential, serverUrl: apiserver]) {
                            sh "sed -i 's/<BUILD_TAG>/${build_tag}/' k8s.yaml"
                            sh "kubectl apply -f k8s.yaml --record"
                            //The YAML file is stored in the code repository. The following is only an example. Replace it as required.
                        }
                    } catch (e) {
                        println "oh no! Deployment failed! "
                        println e
                    }
                    }
                }
            }
        }
    }
    ```

4.  Save the settings and execute the Jenkins job.

