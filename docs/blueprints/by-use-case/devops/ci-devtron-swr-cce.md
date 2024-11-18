---
id: ci-devtron-swr-cce
title: Build a CI/CD Pipeline with Devtron, SWR and CCE
tags: [devops, ci, cd, cicd, devtron, swr, cce]
---

# Build a CI/CD Pipeline with Devtron, SWR and CCE

This blueprint covers integrating Devtron with Open Telekom Cloud Container Engine (CCE) for efficient CI/CD pipelines. It details installing Devtron in CCE clusters, emphasizing using containerized Masters and dynamic Agents managed by Kubernetes for optimal resource utilization and self-healing. The Master schedules jobs, which Agents execute within Kubernetes pods. This setup enhances security and maintenance efficiency.

## What is Devtron?

[Devtron](https://devtron.ai/) is an open-source software delivery workflow automation platform
designed to streamline the DevOps lifecycle. It provides tools for
continuous integration and continuous deployment (CI/CD), infrastructure
management, application lifecycle management, and monitoring,
specifically tailored for Kubernetes-based applications.

### Key Features

- **CI/CD Pipelines**: Automated pipelines for building, testing, and
    deploying applications.
- **Kubernetes Integration**: Native support for Kubernetes, enabling
    easy management of Kubernetes clusters and deployments.
- **Application Management**: Tools for managing applications
    throughout their lifecycle, including versioning, rollback, and
    updates.
- **Infrastructure Management**: Automation of infrastructure
    provisioning and management, supporting Infrastructure as Code (IaC)
    practices.
- **Monitoring and Logging**: Built-in monitoring and logging
    capabilities to track application performance and troubleshoot
    issues.
- **Collaboration**: Features that facilitate team collaboration,
    including role-based access control and audit trails.

Devtron is particularly useful for teams adopting Kubernetes and
microservices architectures, offering a unified platform to manage the
entire software delivery pipeline.

### Architecture

The architecture of Devtron is designed to be highly modular and
extensible, integrating seamlessly with Kubernetes and various CI/CD
tools. Below are the primary components of Devtron:

- **Devtron Dashboard**: The user interface for managing applications,
    CI/CD pipelines, and infrastructure.
- **CI/CD Integration**: Connects with CI/CD tools like Jenkins,
    GitLab CI, and others to automate the build, test, and deployment
    processes.
- **Kubernetes Agents**: Deployed within Kubernetes clusters to manage
    and orchestrate deployments, scaling, and monitoring.
- **Devtron API**: Provides RESTful APIs for integrating with other
    tools and services, enabling automation and custom workflows.
- **Devtron Plugins**: Extensible plugins that add functionalities
    such as security scanning, GitOps, and more.

![](https://raw.githubusercontent.com/devtron-labs/devtron/main/assets/Architecture.jpg)

:::caution
Open Telekom Cloud, and CCE in its extent, **do not** provide official maintenance and support for Devtron. The maintenance is provided exclusively by the developers of the Devtron. You can read more in the documentation of the platform [here](https://docs.devtron.ai/).
:::

## Prerequisites

Before installing Devtron, ensure that your environment meets the
following minimum requirements:

1. **Kubernetes** version **1.16 or higher** is recommended.

2. Ensure **Helm** is installed on your Kubernetes cluster. Follow the official [Helm installation guide](https://helm.sh/docs/intro/install/) for setup instructions.

3. The minimum resources required for installing Devtron vary based on the number of applications you plan to manage:

    For Managing **Up to 5 Applications**:

    | Integration                   | CPU | Memory |
    | ----------------------------- | --- | ------ |
    | **Devtron with CI/CD**        | 2   | 6 GB   |
    | **Helm Dashboard by Devtron** | 1   | 1 GB   |

    For Managing **More Than 5 Applications**:

    | Integration                   | CPU | Memory |
    | ----------------------------- | --- | ------ |
    | **Devtron with CI/CD**        | 6   | 13 GB  |
    | **Helm Dashboard by Devtron** | 2   | 3 GB   |

:::important

- Ensure that the recommended resources are available on your
Kubernetes cluster before proceeding with the Devtron installation.
- It is **NOT** recommended to use burstable CPU VMs for Devtron installation to
ensure consistent performance.

:::

## Installing Devtron on CCE

This guide provides a step-by-step process to install Devtron, including
selecting the appropriate installation repository, installing with Helm
charts, accessing the dashboard via port forwarding, and logging in with
an overview of the dashboard.

### Choosing the Right Installation Option

Devtron offers different installation options based on your
requirements. Here's how to decide which option to use:

1. **Devtron with CI/CD**: Use this if you need comprehensive CI/CD
    integration, security scanning, GitOps, debugging, and
    observability.
2. **Helm Dashboard by Devtron**: Choose this if you need a standalone
    installation focused on deploying, observing, managing, and
    debugging existing Helm applications across multiple clusters.
3. **Devtron with CI/CD and GitOps (Argo CD)**: Opt for this if you
    want CI/CD with GitOps capabilities enabled during installation.

### Installing Devtron with Helm Charts

Follow these steps to install Devtron using Helm charts: In this
instruction we use the first option **Devtron with CI/CD**.

1. **Add Devtron Helm Repository**: Add Devtron Helm repository to your
    local Helm client:

    ``` bash
    helm repo add devtron https://helm.devtron.ai
    helm repo update
    ```

2. **Install Devtron**: Install Devtron using the Helm chart:

    ``` bash
    helm install devtron devtron/devtron-operator \
    --create-namespace --namespace devtroncd \
    --set installer.modules={cicd}
    ```

3. **Install Devtron**: Check the status of the installation:

    ``` bash
    kubectl get pods -n devtroncd
    ```

### Connecting Devtron to OBS for logging and caching

Follow these steps to connect the OBS blob storage to Devtron:

1. **Create a bucket in OBS**: You can create two different buckets one
    for *log storage* and another one for *cache storage*. In this example
    we make one bucket named `devtron` for both purposes.

2. **Updating Devtron**: Update Devtron configuration using the
    following command:

    ``` bash
    helm upgrade devtron devtron/devtron-operator --namespace devtroncd --reuse-values \
    --set configs.BLOB_STORAGE_PROVIDER=S3 \
    --set configs.DEFAULT_CACHE_BUCKET=devtron \
    --set configs.DEFAULT_CACHE_BUCKET_REGION=eu-de \
    --set configs.DEFAULT_BUILD_LOGS_BUCKET=devtron \
    --set configs.DEFAULT_CD_LOGS_BUCKET_REGION=eu-de \
    --set secrets.BLOB_STORAGE_S3_ACCESS_KEY=<access-key\
    --set secrets.BLOB_STORAGE_S3_SECRET_KEY=<secret-key\
    --set configs.BLOB_STORAGE_S3_ENDPOINT=https://obs.eu-de.otc.t-systems.com
    ```

    :::note
    To obtain access-key and secret-key for OBS check [Accessing OBS
    Using Permanent Access
    Keys](https://docs.otc.t-systems.com/object-storage-service/permissions-configuration-guide/access_requests/accessing_obs_using_permanent_access_keys.html#obs-40-0007).
    :::

## Accessing the Devtron Dashboard

:::note
By default, the Devtron service is exposed internally through a
NodePort. This makes Devtron available on any Kubernetes node IP.

Alternatively, a dedicated external IP can be assigned by switching the
service type to LoadBalancer. This will provision a cloud load balancer
that handles routing external traffic to Jenkins. For details, see
[Creating a LoadBalancer
Service](https://docs.otc.t-systems.com/cloud-container-engine/umn/network/service/loadbalancer/creating_a_loadbalancer_service.html).
:::

To access the Devtron dashboard, you need to use port forwarding. Follow
these steps:

1. **Port Forward to Access the Dashboard**: Forward the port to access
    the Devtron dashboard from your local machine:

    ``` bash
    kubectl port-forward svc/devtron-service -n devtroncd 8080:8080
    ```

2. **Visit the Dashboard**: Open your web browser and visit
    http://localhost:8080 to access the Devtron dashboard.

3. **Credentials**: 

    - **UserName**: `admin`
    - **Password**: Run the following command to get the admin password for Devtron:

        ``` bash
        kubectl -n devtroncd get secret devtron-secret -o jsonpath='{.data.ADMIN_PASSWORD}' | base64 -d
        ```

## Connecting Devtron to SWR or other private Registries

Devtron allows you to configure a private image repository to securely
store and manage your container images and other artifacts. This guide
provides a step-by-step process to add a SWR to Devtron.

### Adding a Container Registry

1. Go to *Global Configurations* -> *Container/OCI Registry* from the left sidebar.

    ![Figure 1: Container/OCI Registry](https://devtron-public-asset.s3.us-east-2.amazonaws.com/images/global-configurations/container-registries/add-registry.jpg)

2. Click *Add Registry*.

    ![Figure 2: Add a Registry](/img/docs/blueprints/by-use-case/devops/ci-devtron-swr-cce/en-us_image_A0000001348013634.png)

3. From the *Registry provider* dropdown, select your desired provider. Select *other* for SWR.

4. Choose the appropriate registry type:

    - **Private Registry**: For authenticated access, requiring credentials. Use this for SWR.
    - **Public Registry**: For open access, no credentials needed.

5. Fill in the following fields:

    | Field                                      | Description                                            |
    | ------------------------------------------ | ------------------------------------------------------ |
    | *Registry URL*                             | URL of your registry. `swr.{region}.otc.t-systems.com` |
    | *Username*                                 | Account username.                                      |
    | *Password/Token*                           | Account password or token.                             |
    | *Advanced Registry URL Connection Options* | Options for secure/insecure connections.               |

    :::note
    If you are in region `eu-de` then the Registry URL is `swr.eu-de.otc.t-systems.com`. To obtain an *Username* and
    *Password/Token* for accessing SWR, see [Obtaining a Long-Term Valid Login
    Command](https://docs.otc.t-systems.com/software-repository-container/umn/image_management/obtaining_a_long-term_valid_login_command.html).
    :::

    and here is a recap of available options:

    | Field                     | Description                                                                                                                                       |
    | ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
    | *Name*                    | Provide a name for your registry. This will appear in the *Container Registry* dropdown in the *Build Configuration* section of your application. |
    | *Registry URL*            | Enter the registry URL                                                                                                                            |
    | *Authentication Type*     | Select based on your registry provider.                                                                                                           |
    | *Push container images*   | Enable if you plan to push container images to this repository.                                                                                   |
    | *Push helm packages*      | Enable if you plan to push Helm charts to this repository.                                                                                        |
    | *Use as chart repository* | Enable if you want Devtron to pull Helm charts from this registry.                                                                                |
    | *Set as default registry* | Enable to set this registry as the default for your images or artifacts.                                                                          |

6. Click *Save* and continue.

### Managing Registry Credentials

Manage registry credentials for deploying images from private
registries. Super-admins can choose to auto-inject credentials or use a
secret.

1. Click *Manage* to configure registry credential access.

    | Option                                   | Description                                     |
    | ---------------------------------------- | ----------------------------------------------- |
    | **Do not inject credentials to clusters* | Select clusters to exclude from auto-injection. |
    | *Auto-inject credentials to clusters*    | Select clusters for auto-injection.             |

2. Define credentials, choose between:

    - *Use Registry Credentials* or *Specify Image Pull Secret*

#### Use Registry Credentials

If you use this option selected clusters will be auto-injected with
registry credentials.

![Figure 3: Using Registry Credentials](https://devtron-public-asset.s3.us-east-2.amazonaws.com/images/global-configurations/container-registries/use-registry-credentials-1.jpg)

#### Specify Image Pull Secret

If you use this option selected clusters will be injected with the
credentials provided by the secret specified on that cluster. You can
create a Secret by providing credentials on the command line.

![Figure 4: Using Image Pull Secret](https://devtron-public-asset.s3.us-east-2.amazonaws.com/images/global-configurations/container-registries/specify-image-pull-secret-1.jpg)

Create this Secret and name it `regcred`:

``` bash
kubectl create -n ${namespace} secret docker-registry regcred \
--docker-server=${your-registry-server} \
--docker-username=${your-name} \
--docker-password=${your-pword} \
--docker-email=${your-email} 
```

where,

- `namespace` is your sub-cluster, e.g., `devtron-demo`
- `your-registry-server` is your Private Registry. Use `swr.${region}.otc.t-systems.com` template for SWR.
- `your-name` is your username
- `your-pword` is your password
- `your-email` is your email

You have successfully set your credentials in the cluster as a Secret
called `regcred`:

:::warning
Typing secrets on the command line may store them in your shell history
unprotected, and those secrets might also be visible to other users on
your PC during the time when kubectl is running.
:::

Enter the Secret name in the field and click *Save*.

## Deploying a Sample Application on Devtron and Building a CI/CD Pipeline

This tutorial will guide you through deploying a Node.js sample
application on Devtron and setting up a CI/CD pipeline.

### Testing locally (Optional)

First, clone the sample application repository and navigate into the
directory:

``` shell
git clone https://github.com/devtron-labs/getting-started-nodejs
cd getting-started-nodejs
```

To run the sample application locally, execute:

``` shell
node app.js
```

Now, open your browser and go to
[http://localhost:8080](http://localhost:8080/). You should see the
following output:

``` json
{"cities":["Amsterdam","Berlin","New York","San Francisco","Tokyo"]}
```

### Deploying the Application with Devtron

Let's deploy this Node.js application using Devtron. Ensure that your
global configurations are successfully saved and validated before
proceeding.

#### Creating a new Application

  1. Login into your *Devtron Dashboard*.
  2. Navigate to *Applications* and click on *Create* and select
      *Custom app*.
  3. Provide an appropriate name for the application, `sample-app` for
      example, select the project in which you want your app to reside,
      and create it.

#### Configuring the Git Repository

    After creating the app, set up the configurations.

    1. Select *Github Public* as the Git Account.
    2. Copy the repository URL
        *https://github.com/devtron-labs/getting-started-nodejs* and paste
        it into the Git repo section of your application.
    3. Click *Save* and proceed to the next configuration.

#### Configuring Docker Build

    1. Select the repository where you want to store your CI build image.
        Select either SWR which you configured in
        [Connecting Devtron to SWR](#connecting-devtron-to-swr-or-other-private-registries) or
        provide other image repository.
    2. Choose the build configuration. We use Dockerfile because this
        repository provides a default Dockerfile on this path
        **./Dockerfile**.
    3. Click *Save & Next* and proceed to the next configuration.

 :::note
 You can also use Buildpacks if your selected repository doesn't provide
 any Dockerfile or if you prefer them. For more information about
 Buildpacks visit [Cloud Native Buildpacks](https://buildpacks.io/).
 :::

#### Configuring the Deployment Template

  1. Set the container Port: The Node.js application runs on port `8080`.

  2. Set the resource limits and requests:

      `cpu: "0.5"` and `memory: 50Mi`

  3. Click *Save & Next* and proceed to the next configuration.

#### Creating a CI/CD Workflow

  1. Click on *New workflow* to create a CI/CD workflow to deploy the
      application.
  2. Select *Build and Deploy from Source Code* for the type of
      pipeline.
  3. Configure Code Source. For Source type select *Branch Fixed* and
      for Branch Name enter the branch which you want to pull form here e.g. `main`.
  4. Click *Create Pipeline*.
  5. Add your CD pipeline, choosing the environment where you want to
      deploy the app.

  ![](https://devtron-public-asset.s3.us-east-2.amazonaws.com/images/creating-application/workflow-ci-pipeline/workflow-ci-1.jpg)

  ![](https://devtron-public-asset.s3.us-east-2.amazonaws.com/images/creating-application/workflow-ci-pipeline/workflow-ci-2.jpg)

#### Adding Secrets and/or ConfigMaps

  1. Add or create secrets or configmaps as required.
  2. These values will be automatically mounted with pods and made
      available as volumes or environment variables, based on your
      selection.

#### Triggering the CI Pipeline

  1. Trigger your CI pipeline by selecting the latest image.
  2. Deploy it on your chosen project.

#### Fetching the LoadBalancer URL

  1. After a successful deployment, check the service manifest.
  2. Fetch the LoadBalancer URL from the dashboard present in the App
      Details section.

#### Verifying the Deployment

  1. Use the LoadBalancer URL in your browser.

  2. You should see the following output:

      ``` json
      {"cities":["Amsterdam","Berlin","New York","San Francisco","Tokyo"]}
      ```

#### Conclusion

By following these steps, you have successfully deployed a Node.js
application using Devtron and set up a CI/CD pipeline to automate the
process.

:::tip
For more detailed documentation about the configurations, refer to the
[Devtron User
Guide](https://docs.devtron.ai/devtron/user-guide/creating-application).
:::

## Appendix (Review of Advanced Options)

#### Build and Deploy from Source Code

*Build and Deploy from Source Code* workflow allows you to build the
container image from a source code repository.

1. From the *Applications* menu, select your application.
2. On the *App Configuration* page, select *Workflow Editor*.
3. Select *+ New Workflow*.
4. Select *Build and Deploy from Source Code*.
5. Enter the following fields on the *Create build pipeline* window:

![](https://devtron-public-asset.s3.us-east-2.amazonaws.com/images/creating-application/workflow-ci-pipeline/ci-pipeline-v1.jpg)

#### Advanced Options

The Advanced CI Pipeline includes the following stages:

- *Pre-build stage*: The tasks in this stage are executed before the
    image is built.
- *Build stage*: In this stage, the build is triggered from the
    source code that you provide.
- *Post-build stage*: The tasks in this stage will be triggered once
    the build is complete.

![](https://devtron-public-asset.s3.us-east-2.amazonaws.com/images/creating-application/workflow-ci-pipeline/advanced-options.jpg)

The Pre-build and Post-build stages allow you to create Pre/Post-Build
CI tasks.

#### Build Stage

Go to the *Build stage* tab.

![](https://devtron-public-asset.s3.us-east-2.amazonaws.com/images/creating-application/workflow-ci-pipeline/build-stage-v2.jpg)

 Field Name | Required/Optional | Description |
| ---                    | ---      | ---                                                                                                                                                                         |
| Pipeline Name          | Required | A name for the pipeline                                                                                                                                                     |
| Source type            | Required | Select the source type to build the CI pipeline: [Branch Fixed](#branch-fixed), [Branch Regex](#branch-regex), [Pull Request](#pull-request), [Tag Creation](#tag-creation) |
| Branch Name            | Required | Branch that triggers the CI build                                                                                                                                           |
| Docker build arguments | Optional | Override docker build configurations for this pipeline.   Key: Field name Value: Field value                                                                                |

#### Source type

##### Branch Fixed

This allows you to trigger a CI build whenever there is a code change on
the specified branch. Enter the **Branch Name** of your code repository.

##### Branch Regex

*Branch Regex* allows users to easily switch between branches matching the configured Regex before triggering
the build pipeline.

![](https://devtron-public-asset.s3.us-east-2.amazonaws.com/images/creating-application/workflow-ci-pipeline/branch-regex.jpg)

For example, if the user sets the Branch Regex as `feature-\*`, then users can trigger from branches such as `feature-1450`, `feature-hot-fix` etc.

##### Pull Request

This allows you to trigger the CI build when a pull request is created
in your repository.

:::note Prerequisites
Configure the webhook for either GitHub or Bitbucket.
:::

:::warning
The `Pull Request` source type feature only works for the host GitHub
or Bitbucket Cloud.
:::

![](https://devtron-public-asset.s3.us-east-2.amazonaws.com/images/creating-application/workflow-ci-pipeline/ci-pipeline-3.jpg)

To trigger the build from specific PRs, you can filter the PRs based on
the following keys:

| Filter key         | Description                                              |
| ------------------ | -------------------------------------------------------- |
| Author             | Author of the PR                                         |
| Source branch name | Branch from which the Pull Request is generated          |
| Target branch name | Branch to which the Pull request will be merged          |
| Title              | Title of the Pull Request                                |
| State              | State of the PR. Default is "open" and cannot be changed |

![](https://devtron-public-asset.s3.us-east-2.amazonaws.com/images/creating-application/workflow-ci-pipeline/ci-pipeline-8.jpg)

Select the appropriate filter and pass the matching condition as a regular expression (regex).

Devtron uses **regexp** library, view [regexp cheatsheet](https://yourbasic.org/golang/regexp-cheat-sheet/). You can
test your custom regex from here [regex101](https://regex101.com/r/lHHuaE/1).

Select *Create Pipeline*.

##### Tag Creation

This allows you to trigger the CI build whenever a new tag is created.

:::note Prerequisites
Configure the webhook for either GitHub or Bitbucket.
:::

![](https://devtron-public-asset.s3.us-east-2.amazonaws.com/images/creating-application/workflow-ci-pipeline/ci-pipeline-9.jpg)

To trigger the build from specific tags, you can filter the tags based
on the `author` and/or the `tag name`.

| Filter key | Description                                             |
| ---------- | ------------------------------------------------------- |
| Author     | The one who created the tag                             |
| Tag name   | Name of the tag for which the webhook will be triggered |

Select the appropriate filter and pass the matching condition as a regular expression (regex).

Select *Create Pipeline*.

:::note
The total timeout for the execution of the CI pipeline is by default set
as 3600 seconds. This default timeout is configurable according to the
use case.
:::

#### Scan for Vulnerabilities

:::important Prerequisites
Install any one of the following integrations from *Devtron Stack Manager*:  

- [Clair](https://github.com/quay/clair)
- [Trivy](https://trivy.dev/)
:::

To perform the security scan after the container image is built, enable
the *Scan for vulnerabilities* toggle in the build stage.

![](https://devtron-public-asset.s3.us-east-2.amazonaws.com/images/creating-application/workflow-ci-pipeline/scan-for-vulnerabilities-v2.jpg)

#### Custom Image Tag Pattern

This feature helps you apply custom tags (e.g., `v1.0.0`) to readily distinguish container images within your repository.

1. Enable the toggle button as shown below.

    ![](https://devtron-public-asset.s3.us-east-2.amazonaws.com/images/creating-application/workflow-ci-pipeline/ci-image-tag-pattern.jpg)

2. You can write an alphanumeric pattern for your image tag, e.g.,
    `test-v1.0.{x}`. Here, `x` is a mandatory variable whose value
    will incrementally increase with every build. You can also define
    the value of `x` for the next build trigger in case you want to
    change it.

    ![](https://devtron-public-asset.s3.us-east-2.amazonaws.com/images/creating-application/workflow-ci-pipeline/ci-image-tag-version.jpg)

    :::warning
    Ensure your custom tag does not start or end with a period (.) or comma (,)
    :::

3. Click *Update Pipeline*.

4. Now, go to the *Build & Deploy* tab of your application, and click
    *Select Material* in the CI pipeline.

    ![](https://devtron-public-asset.s3.us-east-2.amazonaws.com/images/creating-application/workflow-ci-pipeline/ci-material.jpg)

5. Choose the git commit you wish to use for building the container
    image. Click *Start Build*.

    ![](https://devtron-public-asset.s3.us-east-2.amazonaws.com/images/creating-application/workflow-ci-pipeline/choose-commit.jpg)

6. The build will initiate and once it is successful, the image tag
    would reflect at all relevant screens:

    - *Build History*

        ![](https://devtron-public-asset.s3.us-east-2.amazonaws.com/images/creating-application/workflow-ci-pipeline/build-history.jpg)

    - *CD Pipeline (Image Selection)*

        ![](https://devtron-public-asset.s3.us-east-2.amazonaws.com/images/creating-application/workflow-ci-pipeline/select-ci-image.jpg)

:::note
Build will fail if the resulting image tag has already been built in the
past. This means if there is an existing image with tag `test-v1.0.0`, you cannot build another image
having the same tag `test-v1.0.0` in the
same CI pipeline. This error might occur when you reset the value of the
variable `x` or when you disable/enable the
toggle button for *Custom image tag
pattern*.
:::
