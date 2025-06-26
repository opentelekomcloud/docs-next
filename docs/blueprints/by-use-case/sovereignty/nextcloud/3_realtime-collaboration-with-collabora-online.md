---
id: realtime-collaboration-with-collabora-online
title: Real-Time Collaboration with Collabora Online
tags: [nextcloud,storage,office,collaboration,sovereignty]
---

# Real-Time Collaboration with Collabora Online

Collabora Online is a web-based office suite built on LibreOffice technology that integrates seamlessly with Nextcloud to provide real-time collaborative document editing. It enables multiple users to simultaneously edit documents, spreadsheets, and presentations directly within the browser while maintaining full compatibility with Microsoft Office and OpenDocument formats. By deploying Collabora Online as a backend service, Nextcloud transforms from a simple file storage platform into a comprehensive collaborative workspace that rivals commercial solutions like Google Workspace or Microsoft Office 365, all while keeping your data under your complete control.

## Deploy Collabora Online

### Helm Chart Values

Add these values to your **values.yaml** file created in [Deploy Nextcloud on CCE -> Configuring Helm Chart Values](./2_deploy-nextcloud-on-cce.md#configuring-helm-chart-values):

The `collabora` field specifies whether to enable Collabora Online as a backend service for your Nextcloud deployment.

```yaml
collabora:
  enabled: true
  replicaCount: 1

  image:
    tag: "25.04.2.2.1"

  collabora:
    ## HTTPS nextcloud domain, if needed
    aliasgroups:
      - host: "https://nextcloud.example.com:443"

    # set extra parameters for collabora
    # you may need to add --o:ssl.termination=true
    extra_params: --o:ssl.enable=false --o:ssl.termination=true

    ## Specify server_name when the hostname is not reachable directly for
    # example behind reverse-proxy. example: collabora.domain
    server_name: collabora.example.com

    existingSecret:
      # set to true to to get collabora admin credentials from an existin secret
      # if set, ignores collabora.collabora.username and password
      enabled: true
      # name of existing Kubernetes Secret with collboara admin credentials
      secretName: "nextcloud-collabora"
      usernameKey: "username"
      passwordKey: "password"

  # # setup ingress
  ingress:
    # enable ingress for collabora online
    enabled: true
    className: "nginx"
    # please check collabora values.yaml for nginx/haproxy annotations examples
    annotations: 
      nginx.ingress.kubernetes.io/upstream-hash-by: "$arg_WOPISrc"
      nginx.ingress.kubernetes.io/proxy-body-size: "0"
      nginx.ingress.kubernetes.io/proxy-read-timeout: "600"
      nginx.ingress.kubernetes.io/proxy-send-timeout: "600"
      kubernetes.io/tls-acme: "true"
      cert-manager.io/cluster-issuer: opentelekomcloud-letsencrypt
    hosts:
      - host: collabora.example.com
        paths:
        - path: /
          pathType: ImplementationSpecific
    tls:
     - secretName: collabora-ingress-tls
       hosts:
         - collabora.example.com
```

1. **enabled**: Determines whether to enable Collabora Online as a backend service for Nextcloud.
2. **replicaCount**: Specifies the number of replicas (instances) of the Collabora container to run. In this example, it is set to 1.
3. **image**: `tag: 25.04.2.2.1` specifies the tag or version of the Collabora image to use.
4. **collabora**:

   * `aliasgroups`: Defines a list of alias groups for the Collabora service. This field is used to specify the HTTPS Nextcloud domain if needed.
   * `extra_params: --o:ssl.enable=false --o:ssl.termination=true`: Allows you to pass extra parameters to the Collabora container. These parameters relate to SSL/TLS settings for the Collabora service.
   * `server_name: collabora.example.com`: Specifies the server name for the Collabora service when the hostname is not directly reachable (e.g., behind a reverse proxy).
5. **existingSecret**:

   * `enabled: true`: Determines whether to use an existing secret to retrieve Collabora admin credentials.
   * `secretName: collabora`: Specifies the name of the existing Kubernetes Secret with Collabora admin credentials.
   * `usernameKey` and `passwordKey`: Specify the keys within the existing secret where the Collabora username and password are stored, respectively.
6. **ingress**:

   * `enabled: true`: Enables ingress for Collabora Online.
   * `className: nginx`: Specifies the class name of the ingress controller (in this case, "nginx").
   * `annotations`: Provides additional annotations for the ingress resource. These include settings related to upstream hashing, proxy body size, and TLS/SSL certificates managed by cert-manager.
   * `hosts`: Defines a list of hosts for the ingress resource.
   * `tls`: Specifies the secret name for the TLS certificate used by Collabora.

### Upgrading Nextcloud

Run the following command to upgrade Nextcloud with Collabora enabled:

```bash
helm -n nextcloud upgrade \
--install nextcloud nextcloud/nextcloud \
-f values.yaml \
--version 6.6.10
```

### Enabling Collabora Online on Nextcloud

1. First, log in to your Nextcloud. Click on your user account, then select **Apps** in the menu.
2. Search for **Collabora Online – Built-in CODE Server** and click **Download and enable** to install it.
3. Also install **Nextcloud Office** if it's not already installed.

![image](/img/docs/blueprints/by-use-case/storage/nextcloud/collabora-install.png)

### Configuring Collabora Online

Now configure Nextcloud to use the Collabora Online service that was created by the new chart.

1. Click on your user account, then select **Administration settings**. From the left menu under the **Administration** section, select **Office**.
2. Select the **Use your own server** option and provide the **Collabora Domain** you specified in the Helm values earlier.
3. Click **Save**. You should see a notification saying **Collabora Online server is reachable**.

![image](/img/docs/blueprints/by-use-case/storage/nextcloud/collabora-configure.png)

## Verifying Collaboration

### Creating a Shared Document

To verify that collaboration is working, create a shared document in Nextcloud. Follow these steps:

1. Log in to your Nextcloud and navigate to the folder where you want to create a new file.
2. Click the **+ New** button to create a new file.
3. Select the type of file you want to create (e.g., Word document, spreadsheet, presentation).
4. Give the file a name and click **Create**.

### Sharing the Document

Share the document with another user by following these steps:

1. Click on the share icon of the newly created file.
2. Click on the **Sharing** tab and enter the username or email address of the person you want to share the document with.
3. Select the permission level and click **Save share**.
4. The user you shared the document with should now receive an email invitation to edit the file. Alternatively, they can view all files shared with them by clicking on **Shares** in the left panel. They can then access the file through Nextcloud and start editing it in real time.

![image](/img/docs/blueprints/by-use-case/storage/nextcloud/collabora-test.png)

### Verifying Real-time Collaboration

To verify that real-time collaboration is working, follow these steps:

1. Have two users (User A and User B) open the shared document simultaneously.
2. User A makes some changes to the document by typing a sentence.
3. User B should see the changes made by User A in real time, without needing to reload the page or refresh the browser.

If you see these changes reflected on User B's screen, it means that collaboration is working correctly.

