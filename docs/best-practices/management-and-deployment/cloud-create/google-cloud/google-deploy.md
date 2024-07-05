---
id: google-deploy
title: How to deploy your application on Google Cloud
tags: [multi-cloud, google, gcp, cloud-create]
---

# How to deploy your application on Google Cloud
Prerequisites
----------------------------------------------------------------

To deploy on Google Cloud, you need to:

*   Have a Google Cloud account.
*   Your account has one of the following roles `roles/compute.admin`, `roles/editor`, or `roles/owner` assigned to a Google project. This role allows you to create a compute resource in the given project.
*   Your account has one of the following roles `roles/browser`, `roles/editor`, or `roles/owner`. This role allows Telekom Cloud Create to read the [IAM access control policy](https://cloud.google.com/resource-manager/docs/access-control-proj) of the project to check for access permissions before a deployment can start.
*   Enable the **Compute Engine API** and **Cloud Resource Manager API** in your google project.
    

### How to assign a role to a principal

*   Go to: **IAM & Admin** / **IAM**
*   Go to **Principal**, click **Edit** and assign roles. The following example assigns the role `roles/browser` and `roles/compute.admin` to a principal.
    

[![../_images/set-roles.png](https://docs.otc.t-systems.com/cloud-create/umn/_images/set-roles.png)](https://docs.otc.t-systems.com/cloud-create/umn/_images/set-roles.png)

Figure 1. Set IAM roles for a user

### How to enable an API on Google Cloud

*   Go to: **APIs & Services** / **Library**
*   Search for an API (e.g., `Compute Engine` or `Cloud Resource`)
*   Click **Enable**
    
[![../_images/enable-api.png](https://docs.otc.t-systems.com/cloud-create/umn/_images/enable-api.png)](https://docs.otc.t-systems.com/cloud-create/umn/_images/enable-api.png)

Figure 2. Enable Compute Engine API

How to deploy
----------------------------------------------------------------

### Choose the Google Cloud location

1.  Go to: **Deploy**
2.  Choose **Google**
    

[![../_images/deploy-step1.png](https://docs.otc.t-systems.com/cloud-create/umn/_images/deploy-step1.png)](https://docs.otc.t-systems.com/cloud-create/umn/_images/deploy-step1.png)

Figure 3. Choose Google Cloud location

### Authenticate for the first time

*   The first time you deploy an application on Google Cloud, Cloud Create redirects you to Google Cloud to loggin.
*   After logging sucessfully, click on the **allow** button to grant the permissions for Cloud Create to manage compute resources on Google Cloud on your behalf.
    

[![../_images/deploy-step2.png](https://docs.otc.t-systems.com/cloud-create/umn/_images/deploy-step2.png)](https://docs.otc.t-systems.com/cloud-create/umn/_images/deploy-step2.png)

Figure 4. Authenticate and grant permissions

:::important
By clicking the allow button, you allow Cloud Create to access the following information:

1.  Read your email address for authentication purpose.
2.  List your Google projects so you can choose a Google project to deploy.
3.  Manage compute resources on Google Cloud (e.g., to create and delete a VM).
    
In particular, Cloud Create requests the following OAuth scopes:

*   `https://www.googleapis.com/auth/userinfo.email`   
*   `https://www.googleapis.com/auth/cloudplatformprojects.readonly`
*   `https://www.googleapis.com/auth/compute`
::: 

:::tip
You can revoke access any time later. See [3\. How to revoke access](#google-revoke-access).
:::

### Choose a Google project to deploy

*   Cloud Create displays a list of the Google projects, which you have the permissions to create a compute resource.
*   Choose one Google project you want to deploy your app into.

[![../_images/deploy-step3.png](https://docs.otc.t-systems.com/cloud-create/umn/_images/deploy-step3.png)](https://docs.otc.t-systems.com/cloud-create/umn/_images/deploy-step3.png)

Figure 5. Choose a google project to deploy

:::note
If no projects are dislayed, it means you do not have the roles mentioned in the [1\. Prerequisites](#google-prerequisites). In such a case, ask your Google administrators to assign a role in a Google project for you.
:::

### Choose an availability zone and keypair (optional)

1.  Click **Configure cloud provider**
2.  Choose a **Compute**.
3.  Choose an availability **zone** from the dropbox. The default availability zone is `europe-west1-c` if not set.
4.  Choose a **keypair** from the dropbox.
    
[![../_images/deploy-step4.png](https://docs.otc.t-systems.com/cloud-create/umn/_images/deploy-step4.png)](https://docs.otc.t-systems.com/cloud-create/umn/_images/deploy-step4.png)

Figure 6. Choose a zone and keypair

:::tip
If the keypair dropbox is empty, you can create a keypair from the Open Telekom Cloud console and refresh the page to display it.
:::

### Deploy

*   Click **Deploy** to start.
    
How to revoke access
------------------------------------------------------------------------------

In step 2, you grant Cloud Create the permissions to manage compute resources on your behalf. You can revoke this access anytime.

To revoke:

*   Go to: 1. **Manage your Google account** / 2. **Security** / 3. **Third party apps with account access**.
*   Click on **Revoke access** button.
    
[![../_images/deploy-revoke.png](https://docs.otc.t-systems.com/cloud-create/umn/_images/deploy-revoke.png)](https://docs.otc.t-systems.com/cloud-create/umn/_images/deploy-revoke.png)

Figure 7. Revoke token

After the access is revoked, if you deploy your app on Google Cloud again, Cloud Create will ask you to authenticate to Google Cloud again (i.e., it will repeat step 2).