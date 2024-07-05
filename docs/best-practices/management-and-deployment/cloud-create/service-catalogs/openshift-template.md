---
id: openshift-template
title: OpenShift Template 
tags: [openshift, cloud-create]
last_update:
  date: 7/5/2024
  author: Dr. Tri Vo 
---

# OpenShift Template

The following tutorial shows you how to register a (trial) subscription key from Red Hat and uses it to create an OpenShift cluster using the OpenShift template.

:::important
*   The OpenShift template deploys a [Self-managed OpenShift Container Platform](https://www.redhat.com/en/technologies/cloud-computing/openshift/container-platform) on Open Telekom Cloud with Bring Your Own License (BYOL).
*   Your license/subscription will cover technical support from Red Hat as well as upgrades between OpenShift versions. [Read more](https://www.redhat.com/en/about/value-of-Red-Hat).
*   Supported versions: 4.12.39 and 4.13.x.
:::

How to use
----------------------------------------------------------

### How to deploy

1.  Create a new application using the template **OpenShift** or **OpenShift HA** with a selected version (e.g., 4.13.19)
2.  Go to **Quick Deploy**.

### Deploy Setup

#### Specify base\_domain

Specify the **base\_domain** (e.g., `tri-test.com`). This is the domain name that you will use to access the OpenShift console after the deployment completes. A DNS Public Zone will be created on Open Telekom Cloud with this name. Therefore this domain name **must be unique** in the Domain Name Service of Open Telekom Cloud.

[![../_images/openshift_config1.png](https://docs.otc.t-systems.com/cloud-create/umn/_images/openshift_config1.png)](https://docs.otc.t-systems.com/cloud-create/umn/_images/openshift_config1.png)

Figure 1. Specify a domain name

#### Specify pull\_secret

1.  Register [a trial account at Red Hat](https://www.redhat.com/en/technologies/cloud-computing/openshift/ocp-self-managed-trial).
2.  Go to the [Redhat Console](https://console.redhat.com/openshift) and copy the pull secret in Section **Downloads** / **Tokens**.
    
[![../_images/openshift_redhat_console.png](https://docs.otc.t-systems.com/cloud-create/umn/_images/openshift_redhat_console.png)](https://docs.otc.t-systems.com/cloud-create/umn/_images/openshift_redhat_console.png)

Figure 2. Copy pull secret

3.  Paste the content in the **pull\_secret** in the Section **Secrets Inputs**.
    
[![../_images/openshift_pull_secrect.png](https://docs.otc.t-systems.com/cloud-create/umn/_images/openshift_pull_secrect.png)](https://docs.otc.t-systems.com/cloud-create/umn/_images/openshift_pull_secrect.png)

Figure 2. Paste the pull secret

#### Specify os\_password

*   Specfiy the **os\_password**. This is the password when you login to Cloud Create.
    
:::note
We do not store your password but the OpenShift install needs it one time for the installation process. In the next release, we will replace this password with an application credential for password protection.
:::

#### (Optional) Specify ssh\_public\_key

*   Specify the **ssh\_public\_key** with your SSH public key (e.g., `ssh-ed25519 AAAAC3N...`). This public key will be injected in the bastion host, master and worker nodes so that you can SSH to them later on.
*   If ssh\_public\_key is **not specified**, we will auto-select one of your **existing key pair** from the Open Telekom Cloud console instead.
    
[![../_images/openshift_config2.png](https://docs.otc.t-systems.com/cloud-create/umn/_images/openshift_config2.png)](https://docs.otc.t-systems.com/cloud-create/umn/_images/openshift_config2.png)

Figure 3. Specify your SSH public key

#### (Optional) Specify other paramters

1.  Specify the **number\_workers** (e.g., 2). OpenShift requires a minimum of 2 worker nodes in total.
2.  Specify the **nat\_gateway\_specs** (e.g., Small). This is the flavor of the NAT Gateway for outgoing traffic.
3.  Specify the **worker\_num\_cpus** (e.g., 4) and **worker\_mem\_size** (e.g., 16 GB). OpenShift requires a minimum of 4vCPU and 16 GB memory for the worker node.
    
[![../_images/openshift_config3.png](https://docs.otc.t-systems.com/cloud-create/umn/_images/openshift_config3.png)](https://docs.otc.t-systems.com/cloud-create/umn/_images/openshift_config3.png)

Figure 4. Specify your SSH public key

Expect result
----------------------------------------------------------------

*   It takes about 2 minutes to create all compute resources on Open Telekom Cloud. Afterwards, the OpenShift bootstrap process continues to setup the master and worker nodes.    
*   After about 31 minutes, the **CheckOpenShiftStatus** job checks the OpenShift boostrap process and reports the status.
    
[![../_images/openshift_check_result.png](https://docs.otc.t-systems.com/cloud-create/umn/_images/openshift_check_result.png)](https://docs.otc.t-systems.com/cloud-create/umn/_images/openshift_check_result.png)

Figure 5. CheckOpenShiftStatus waits 31 minutes and checks the status

### Access the console

After the deployment completes, you can access the OpenShift console as follows.

*   Copy **console\_hostname**, **oauth\_hostanme**, and the **INGRESS\_VIP** from the deployment outputs.
    
[![../_images/openshift_result1.png](https://docs.otc.t-systems.com/cloud-create/umn/_images/openshift_result1.png)](https://docs.otc.t-systems.com/cloud-create/umn/_images/openshift_result1.png)

Figure 6. Copy the hostname and VIP address

*   Paste **console\_hostname** and **oauth\_hostanme** and the **INGRESS\_VIP** in your **/etc/hosts**
    
```
# vim /etc/hosts
80.158.36.243 console-openshift-console.apps.openshift.tri-test.com
80.158.36.243 oauth-openshift.apps.openshift.tri-test.com

```

*   Access the OpenShift console URL via the web browser with the **kubeadmin\_username** and **kubeadmin\_password** from the deployment outputs.
    
```
# The output of the "console_url"
https://console-openshift-console.apps.openshift.tri-test.com

```

[![../_images/openshift_result2.png](https://docs.otc.t-systems.com/cloud-create/umn/_images/openshift_result2.png)](https://docs.otc.t-systems.com/cloud-create/umn/_images/openshift_result2.png)

Figure 7. Access the OpenShift console

### Access the bastion host

During the OpenShift bootstrap process, you can access to the bastion host as follows:

*   Copy **public\_address** of the **Bastionhost**

![../_images/openshift_result3.png](https://docs.otc.t-systems.com/cloud-create/umn/_images/openshift_result3.png)

Figure 8. The public IP address of the bastion host

*   Access the bastion host with the IP
    
```
# We use Ubuntu OS for the bastion host
ssh ubuntu@164.30.10.109

```

*   Check nodes are ready
    
```
# Set KUBECONFIG
export KUBECONFIG="/home/ubuntu/openshift/auth/kubeconfig"

# Check all nodes are ready
$ oc get nodes
NAME                        STATUS   ROLES                  AGE    VERSION
openshift-k55b9-master-0    Ready    control-plane,master   179m   v1.26.9+636f2be
openshift-k55b9-master-1    Ready    control-plane,master   179m   v1.26.9+636f2be
openshift-k55b9-master-2    Ready    control-plane,master   179m   v1.26.9+636f2be
openshift-k55b9-workers-0   Ready    worker                 163m   v1.26.9+636f2be
openshift-k55b9-workers-1   Ready    worker                 163m   v1.26.9+636f2be

```

*   Check all cluster operators are available
    
```
$ oc get clusteroperators
  NAME                                       VERSION   AVAILABLE   PROGRESSING   DEGRADED   SINCE   MESSAGE
  authentication                             4.13.19   True        False         False      156m
  baremetal                                  4.13.19   True        False         False      174m
  cloud-controller-manager                   4.13.19   True        False         False      3h1m
  cloud-credential                           4.13.19   True        False         False      3h4m
  cluster-autoscaler                         4.13.19   True        False         False      175m
  config-operator                            4.13.19   True        False         False      175m
  console                                    4.13.19   True        False         False      161m
  control-plane-machine-set                  4.13.19   True        False         False      175m
  csi-snapshot-controller                    4.13.19   True        False         False      175m
  dns                                        4.13.19   True        False         False      174m
  etcd                                       4.13.19   True        False         False      174m
  image-registry                             4.13.19   True        False         False      163m
  ingress                                    4.13.19   True        False         False      163m
  insights                                   4.13.19   True        False         False      168m
  kube-apiserver                             4.13.19   True        False         False      164m
  kube-controller-manager                    4.13.19   True        False         False      172m
  kube-scheduler                             4.13.19   True        False         False      172m
  kube-storage-version-migrator              4.13.19   True        False         False      164m
  machine-api                                4.13.19   True        False         False      171m
  machine-approver                           4.13.19   True        False         False      174m
  machine-config                             4.13.19   True        False         False      174m
  marketplace                                4.13.19   True        False         False      174m
  monitoring                                 4.13.19   True        False         False      162m
  network                                    4.13.19   True        False         False      177m
  node-tuning                                4.13.19   True        False         False      174m
  openshift-apiserver                        4.13.19   True        False         False      165m
  openshift-controller-manager               4.13.19   True        False         False      174m
  openshift-samples                          4.13.19   True        False         False      168m
  operator-lifecycle-manager                 4.13.19   True        False         False      174m
  operator-lifecycle-manager-catalog         4.13.19   True        False         False      175m
  operator-lifecycle-manager-packageserver   4.13.19   True        False         False      169m
  service-ca                                 4.13.19   True        False         False      175m
  storage                                    4.13.19   True        False         False      170m

```

How to create storages
----------------------------------------------------------------------------------

### Elastic Volume Service (EVS)

In OpenShift you can provision an EVS on Open Telekom Cloud dynamically:

1.  Create a new **storage class** (e.g., `ssd-csi`) with a volume type (e.g., `SSD`):
    
```yaml
apiVersion: storage.k8s.io/v1
kind: StorageClass
metadata:
  name: ssd-csi
provisioner: cinder.csi.openstack.org
parameters:
  type: SSD # Choose 'SSD' for 'Ultra high I/O', 'SAS' for 'High I/O', 'SATA' for 'Common I/O'
reclaimPolicy: Delete
allowVolumeExpansion: true
volumeBindingMode: WaitForFirstConsumer # PVC is PENDING until the Pod is created. As a result, the volume is created in the same AZ as the POD.

```

(Alternative) Create a storage class with specific AZ (e.g., `eu-de-01`) so that volumes will be created only in this AZ:

```yaml
apiVersion: storage.k8s.io/v1
kind: StorageClass
metadata:
  name: eu-de-01-ssd-csi
provisioner: cinder.csi.openstack.org
parameters:
  type: SSD # Choose 'SSD' for 'Ultra high I/O', 'SAS' for 'High I/O', 'SATA' for 'Common I/O'
reclaimPolicy: Delete
allowVolumeExpansion: true
allowedTopologies:
- matchLabelExpressions:
  - key: topology.cinder.csi.openstack.org/zone
    values:
    - eu-de-01 # Choose 'eu-de-01', 'eu-de-02', 'eu-de-03'

```

2.  Create a **PersistentVolumeClaim** (e.g., `ssd-pvc`) with the storage class `ssd-csi`:
    
```yaml
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: ssd-pvc
  namespace: <YOUR_NAMESPACE>
spec:
  storageClassName: ssd-csi
  accessModes:
    - ReadWriteOnce
  volumeMode: Filesystem
  resources:
    requests:
      storage: 10Gi

```

3.  Create a Pod `example` with the PersistentVolumeClaim `ssd-pvc`:
    
```yaml
apiVersion: v1
kind: Pod
metadata:
  name: example
  labels:
    app: httpd
  namespace: <YOUR_NAMESPACE>
spec:
  securityContext:
    runAsNonRoot: true
    seccompProfile:
      type: RuntimeDefault
  containers:
    - name: httpd
      image: 'image-registry.openshift-image-registry.svc:5000/openshift/httpd:latest'
      ports:
        - containerPort: 8080
      securityContext:
        allowPrivilegeEscalation: false
        capabilities:
          drop:
            - ALL
      volumeMounts: # Add the following lines to the 'example' Pod to test the PVC
        - name: ssd-volume
          mountPath: /test
  volumes:
    - name: ssd-volume
      persistentVolumeClaim:
        claimName: ssd-pvc

```

4.  On OpenShift console, see Pod is running:
    
![../_images/openshift_pod.png](https://docs.otc.t-systems.com/cloud-create/umn/_images/openshift_pod.png)

Figure 9. Pod example is running

5.  On Open Telekom Cloud, see EVS is created:
    
![../_images/openshift_evs.png](https://docs.otc.t-systems.com/cloud-create/umn/_images/openshift_evs.png)

Figure 10. A new EVS is created with the volume type "Ultra High I/O"

### Scalable File Service & SFS Turbo

You can create a SFS on Open Telekom Cloud manually and create a [PersistentVolume using NFS](https://docs.openshift.com/container-platform/4.13/storage/persistent_storage/persistent-storage-nfs.html) in OpenShift, which connects to SFS via NFS protocol:

1.  Go to the [webconsole of Open Telekom Cloud](https://console.otc.t-systems.com/) and create a SFS or SFS Turbo:
    
[![../_images/openshift_sfs.png](https://docs.otc.t-systems.com/cloud-create/umn/_images/openshift_sfs.png)](https://docs.otc.t-systems.com/cloud-create/umn/_images/openshift_sfs.png)

Figure 11. Create SFS via webconsole

*   Choose the VPC and subnet of your OpenShift so that the SFS is created in the same subnet. The VPC `cc-environment-openshift00` in this example was created by Cloud Create, which starts with the prefix `cc`, followed by the environement name `enviroment` and the application name `openshift00`.
*   Choose the security group sg-worker. This is the security group of the worker nodes.
    
2.  Copy the SFS endpoint
    
![../_images/openshift_sfs2.png](https://docs.otc.t-systems.com/cloud-create/umn/_images/openshift_sfs2.png)

Figure 12. Copy the SFS endpoint `10.0.207.136`

3.  Create a PersistentVolume (e.g., `sfs-pv`) with the SFS endpoint:
    
```yaml
apiVersion: v1
kind: PersistentVolume
metadata:
  name: sfs-pv
spec:
  capacity:
    storage: 500Gi
  accessModes:
  - ReadWriteMany
  nfs:
    server: 10.0.207.136 # SFS endpoint
    path: /
  persistentVolumeReclaimPolicy: Retain

```

4.  Create a PersistentVolumeClaim (e.g., `sfs-pvc`) with the `sfs-pv`:
    
```yaml
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: sfs-pvc
  namespace: <YOUR_NAMESPACE>
spec:
  accessModes:
    - ReadWriteMany
  resources:
    requests:
      storage: 500Gi
  volumeName: sfs-pv
  storageClassName: "" # Important

```

5.  Create a Pod to use `sfs-pvc`
    
Tear down
--------------------------------------------------------

*   In Cloud Create, go to **Action** / **Undeploy** to delete the OpenShift cluster.    
*   The PVC storages, which were created by OpenShift, will not be deleted automatically. You have to delete them manually.
    
![../_images/openshift_tear_down.png](https://docs.otc.t-systems.com/cloud-create/umn/_images/openshift_tear_down.png)

Figure 12. Check PVC with Available status

Links
------------------------------------------------

*   Our [OpenShift app template in TOSCA](https://github.com/opentelekomcloud-blueprints/tosca-service-catalogs/blob/main/templates/openshift/4.13/topology.yml).    
*   How to create a [PersistentVolume using NFS in OpenShift](https://docs.openshift.com/container-platform/4.13/storage/persistent_storage/persistent-storage-nfs.html).