# Open Telekom Cloud Architecture Center

This project (*docs-next*) is serving as the documentation site of Open Telekom Cloud Architecture Center and is built using [Docusaurus](https://docusaurus.io/), a modern static website generator created by [Meta](https://opensource.fb.com/).

## Development

### Installation

`npm install` is a command used in the Node Package Manager (npm) for Node.js. It will install all the dependencies listed in the dependencies and devDependencies sections of the **package.json** file and  will create a **node_modules** directory (if it doesn't already exist) and install all the packages specified in **package.json**.

```bash
npm install --save-dev dotenv-cli yarn && npm install
```

### Local Development

The command `npm run start` is used to start a Node.js application as defined in the scripts section of the **package.json** file in the development environment and starts locally an http server serving you app and giving you a hot-reload live environment to observe the changes you've done in your code.

```bash
export $(cat .devcontainer/.env | xargs)
npm run start
```

This command starts a local development server and opens up a browser window. Changes are reflected live without having to restart the server.

> [!IMPORTANT]
> **docs-next** functionality is tightly integrated with [typesense](https://typesense.org/) (as long as you want to work with search in your development enviroment).
> No typesense installation is provided out-of-the-box, you need to come with you own instance. A Helm Chart is already provided for that matter and you can easily
> install a typesense-bundle in your local enviroment using KinD or K3d.

### WSL Development

Ensure that WSL2 is installed and properly configured on your machine. Once it is available, proceed with deploying an Ubuntu 22.04 instance:

```Powershell
wsl --install Ubuntu-22.04
```

> [!NOTE]
> You will be prompted to provide an account name. If you are an employee of the Deutsche Telekom Group, use your corporate account.

Next you need to configure your environment to use the appropriate proxy, if any, so that both system package management and command-line tools can access external resources.

Start by creating an APT configuration file under `/etc/apt/apt.conf.d/` to ensure that all **apt** operations are routed through the proxy. This is required for package installation and updates in restricted network environments.

Next, define the proxy environment variables in your user configuration files. Add them to both `~/.bashrc` and `~/.profile` so that they are available in interactive and login shells. This allows common tools such as curl, wget, and other CLI-based applications to use the proxy automatically.

After updating the configuration files, reload your shell environment by sourcing `~/.bashrc`. This applies the changes immediately without requiring you to open a new session.

> [!IMPORTANT]
> In the following scripts, replace all occurrences of `PROXY_ADDRESS:PORT` with the value that matches your environment.

```shell
sudo tee /etc/apt/apt.conf.d/proxy.conf <<EOF 
Acquire::http::Proxy "http://PROXY_ADDRESS:PORT/"; 
Acquire::https::Proxy "http://PROXY_ADDRESS:PORT/"; 
EOF 

sudo tee ~/.bashrc <<EOF 
export http_proxy=http://PROXY_ADDRESS:PORT 
export HTTP_PROXY=http://PROXY_ADDRESS:PORT 
export https_proxy=http://PROXY_ADDRESS:PORT 
export HTTPS_PROXY=http://PROXY_ADDRESS:PORT 
EOF 

sudo tee ~/.profile <<EOF 
export http_proxy=http://PROXY_ADDRESS:PORT 
export HTTP_PROXY=http://PROXY_ADDRESS:PORT 
export https_proxy=http://PROXY_ADDRESS:PORT 
export HTTPS_PROXY=http://PROXY_ADDRESS:PORT 
EOF 

source ~/.bashrc
```

> [!NOTE]
> You can skip the previous step if you are not an employee of the Deutsche Telekom Group or you are not working behind a proxy.

Ensure that proxy environment variables are preserved when running commands with `sudo`, as they are not forwarded by default.

Start by creating the `/etc/sudoers.d` directory if it does not already exist. Then add a dedicated configuration file that instructs `sudo` to retain the proxy-related environment variables. This allows elevated commands, such as package installations or remote downloads, to continue using the configured proxy.

Set the correct permissions on the file to `440`, as required by `sudoers` configurations. This prevents unauthorized modifications while keeping the file readable by the system.

Finally, validate the configuration using `visudo` in check mode. This step ensures that the syntax is correct and avoids breaking `sudo` access due to misconfiguration.

```shell
sudo mkdir -p /etc/sudoers.d

printf '%s\n' 'Defaults env_keep += "http_proxy https_proxy ftp_proxy no_proxy HTTP_PROXY HTTPS_PROXY FTP_PROXY NO_PROXY"' | sudo tee /etc/sudoers.d/proxy-env-keep >/dev/null

sudo chmod 440 /etc/sudoers.d/proxy-env-keep
sudo visudo -cf /etc/sudoers.d/proxy-env-keep
sudo visudo -c
```
Install Docker from the official repository to ensure you are using a supported and up-to-date version.

Begin by updating the package index and installing the required dependencies, including tools for handling certificates, GPG keys, and repository metadata. Then create a dedicated keyring directory and download Docker’s official GPG key. This key is used by APT to verify the authenticity of the packages.

Next, add the Docker repository to your APT sources. The configuration dynamically selects the correct Ubuntu release codename and system architecture, ensuring compatibility with your environment. Once the repository is in place, update the package index again so the new source is taken into account.

Proceed with installing the Docker Engine, CLI, container runtime, and additional plugins such as Buildx and Docker Compose. These components provide the full container management and build capabilities required for most workloads.

Finally, configure user permissions by adding your user to the `docker` group. This allows you to run Docker commands without `sudo`. Apply the change to your current session using `newgrp docker`, so you can use Docker immediately without logging out.

```shell
# Add Docker's official GPG key:
sudo apt update
sudo apt install ca-certificates curl gnupg lsb-release -y
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc

# Add the repository to Apt sources:
sudo tee /etc/apt/sources.list.d/docker.sources <<EOF
Types: deb
URIs: https://download.docker.com/linux/ubuntu
Suites: $(. /etc/os-release && echo "${UBUNTU_CODENAME:-$VERSION_CODENAME}")
Components: stable
Architectures: $(dpkg --print-architecture)
Signed-By: /etc/apt/keyrings/docker.asc
EOF

sudo apt update

# Install packages
sudo apt install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin -y

# Add user to group
sudo addgroup docker
sudo usermod -aG docker $USER
newgrp docker
```

Configure Docker to use the corporate proxy so that it can pull images and communicate with external registries in a restricted network environment.

Start by creating a systemd drop-in directory for the Docker service. In this directory, define a configuration file that sets the `HTTP_PROXY`, `HTTPS_PROXY`, and `NO_PROXY` environment variables. This ensures that the Docker daemon itself, not only the client, routes its traffic through the proxy.

After creating the configuration, reload the systemd daemon to apply the changes. Then restart the Docker service so that it picks up the new environment variables.

Once completed, Docker will use the configured proxy for all outbound network operations, such as pulling images from remote repositories.

```shell
sudo mkdir -p /etc/systemd/system/docker.service.d
sudo tee /etc/systemd/system/docker.service.d/http-proxy.conf <<EOF
[Service]
Environment="HTTP_PROXY=http://PROXY_ADDRESS:PORT"
Environment="HTTPS_PROXY=http://PROXY_ADDRESS:PORT"
Environment="NO_PROXY=localhost,127.0.0.1"
EOF

sudo systemctl daemon-reload
sudo systemctl restart docker
```

> [!NOTE]
> You can skip the previous step if you are not working behind a proxy.

And close the installation by installing the `binfmt-support` package, which enables the system to recognize and handle foreign binary formats.

```shell
sudo apt update
sudo apt install binfmt-support -y
```

You can then close the repo inside WSL and open Visual Studio Code:

```shell
git clone https://github.com/opentelekomcloud/docs-next

cd docs-next
code .
```

Once Visual Studio Code opens, you will be prompted to choose whether to work directly within the WSL instance or to create a container-based environment using the `devcontainer.json` configuration (see next chapter).

### Remote Container Development

Any IDE that supports [Dev Containers](https://code.visualstudio.com/docs/devcontainers/containers), but in this case everything is tailored for Visual Studio Code, will build a container with all the necessary prerequisites to get you started creating content immediately based on the extensions
and features defined in **devcontainer.json**. A `typescript-node:1-20-bullseye` container will be spawned with the following
extras pre-installed:

* **Visual Studio Code Extensions**

  - JavaScript and TypeScript Nightly
  - React Native Tools
  - ES7+ React/Redux/React-Native snippets, Simple React Snippets
  - npm Intellisense, Path Intellisense
  - Markdown, Markdown All in One, Markdown Table, markdownlint
  - MDX, MDX Preview, MDX Inline
  - Git Graph
  - Resource Monitor
  - YAML

* **Features**

  - Git
  - Docker-in-Docker

* **Post-Create Command**

  - `npm run install`

#### Add your own Extensions

You can add your own extensions in your Dev Container and customize it to the fullest. By right-clicking the desired
extension in the *Marketplace* and choosing the *Add to devcontainer.json* the extension will be installed and activated
the next time you rebuild your Dev Container.

![add-extension.png](/static/img/add_extension_vscode.png)

> [!NOTE]  
> You can afterwards rebuild your container so the changes take effect, with our without using cache, in the latter
> case it will rebuild the container from scratch.

#### Git Credentials

The Git extension will automatically forward your local **SSH agent**, if one is running otherwise it will use directly the git configuration of your local host. In that way you can take advantage of keeping tight control of your credentials and your SSH keys in one place, your local machine, and not spreading them individually to every new development enviroment.

#### Using ssh-agent for agent forwarding

There are some cases when you may be cloning your repository using SSH keys instead of a credential helper. To enable this scenario, the extension will automatically forward your **local [SSH agent](https://www.ssh.com/ssh/agent) if one is running**.
Want to know how ssh-agent works? read [SSH Agent Explained](https://smallstep.com/blog/ssh-agent-explained/ "SSH Agent Explained")

You can add your local SSH keys to the agent if it is running by using the `ssh-add` command. Add these lines to your `~/.bash_profile` or `~/.zprofile` (for Zsh) so it starts on login:

```bash
if [ -z "$SSH_AUTH_SOCK" ]; then
   # Check for a currently running instance of the agent
   RUNNING_AGENT="`ps -fp $(pgrep -u $USER) | grep 'ssh-agent -s' | grep -v grep | wc -l | tr -d '[:space:]'`"
   if [ "$RUNNING_AGENT" = "0" ]; then
        # Launch a new instance of the agent
        ssh-agent -s &> $HOME/.ssh/ssh-agent
   fi
   eval `cat $HOME/.ssh/ssh-agent`
fi
```

Open a new shell and test if ssh-agent is runnig by excecuting `ssh-add -l` which shoud list your keys.

### Build and Run in Production

```bash
npm run build
```

This command generates static content into the **build** directory and can be served using any static contents hosting service by the following command:

```bash
npm run serve
```

> [!NOTE]
> docs-next is tuned to run at port `80` and *not* at the default `3000` (either with `npm run start` or with `npm run build`). If this port
> is already in use in your computer, the app will be rendered at a random high port in the development environment.

## Deployment

You can deploy docs-next in a various infrastructure (as every React/TS application). You can just spin a docker container, or deploy it directly on
an ECS Server or on a CCE Kubernetes Cluster (recommended). Check the architecture and provided Helm Charts for the latter at [Open Telekom Cloud Architecture Center Helm Charts](https://github.com/opentelekomcloud-infra/docs-next-charts) repository.

### Manual

#### Build Docker Image

You can build manually your own container image as follows:

```shell
docker build . -t <docker_hub_org>/docsnext:<tag>
docker push <docker_hub_org>/docsnext:<tag>
```

and then run it locally on any port you want to forward at you local machine (port `3000` was chosen here):

```shell
docker run -d docs-next -p 3000:80 <docker_hub_org>/docsnext:<tag>
```

### Using the provided CI/CD Pipeline

The repository is already employed with a GitHub Release Workflow that will do the following actions:

1. Builds the application for production (`npm run build`)
2. Builds and tags a container image and push the image to a predefined docker hub organization
3. Updates the Helm Charts with new versions and image tags in [Open Telekom Cloud Architecture Center Helm Charts](https://github.com/opentelekomcloud-infra/docs-next-charts)

ArgoCD (deployed on the same CCE Cluster) will pick up the changes, within its `timeout.reconciliation` value (default is *180s*), and provision
the changes without any human intervention.

The whole process is fully autonomous, and after the approval of every PR requires zero human intervention.

## Contributing

If you are contributing as content creator follow the Syntactic and Stylistic Guidelines of the project:

### Syntax

All text content should adhere to the guidelines provided by official [Markdown Guide](https://www.markdownguide.org/):

* [Basic Syntax](https://www.markdownguide.org/basic-syntax/)
* [Extended Syntax](https://www.markdownguide.org/extended-syntax/)

### Styling

* **Always** highlight paths and file names as **bold**, e.g. **/etc/hosts** or **package.json**
* **Always** highlight UI choices and navigation elements as *italics*, e.g. "[...] then click *Create ECS Server* on [...]."
* Variables and values should be **always** marked as `inline code`, e.g. "[...] change the `replica` count to `1`"
* Key presses should be **always** written in CAPS and highlighted as *italics*, e.g. "[...] press *CTRL-S* to save and continue."
* If you provide a code-block that requires a specific file name for the blueprint to work, insert **always** the file name in the header of the code-block, e.g. "```yaml title="credentials.yaml  [...] ```".
* **Do not** use punctuation marks at the end of headings, e.g. "# Installation Steps" and **not** "# Installation Steps:".
* **Always** use *gerund* describing the action in a heading, e.g. "# Creat*ing* a CCE Cluster" and **not** "# Create a CCE Cluster".
  
### Diagramms

Use one of the following tools for creating diagramms:

* [draw.io](https://www.drawio.com/). You can find the Open Telekom Cloud stencils [here](https://www.t-systems.com).
* [Diagrams for Open Telekom Cloud](https://github.com/akyriako/diagrams)

> [!NOTE]
> No licence required for any of the aformentioned tools!

### Text & Grammar

Every blueprint should have the following attributes. It should be:

1. **comprehensive** with clear steps to recreate it end to end.
2. **technically accurate** and conforming to industry standards.
3. **self-contained**, if you feel you are cross-overring into multiple topics then split it in two or more blueprints.
4. written in a **friendly** tone but still remain **formal**:
   * Write simple, **do not** use slang.
   * **Do not** use colloquial expressions. They might be confusing for many readers or even offensive in specific regions, in or out of context.
   * Check the correct usage of punctuation marks [here](https://www.grammarly.com/punctuation).
   * **Avoid** using emojis.
5. **impartial**, waive strong personal technical opinions and/or preferences.

You can use [this](https://urltomarkdown.com/) web tool to transform public pages to Markdown.

### Tables

In order to facilitate and help in the content creation process, the development container is pre-configured with the *Markdown Table* extension,
which adds a plethora of functionality in regards of structuring and styling a Markdown table.

You can see more information about the features of the extension [here](https://marketplace.visualstudio.com/items?itemName=TakumiI.markdowntable).

#### Structure

1. Include a mini overview of the blueprint under the blueprint title (additional sub-header **is not** required).
2. If you need to present (with a picture) a high-level architecture of the blueprint, insert a paragraph under the overview with the name *Solution Design* (additional sub-header **is** required).
3. Include a *Conclusion* paragraph in the end of **every** blueprint as a summary of what we achieved during the process (additional sub-header **is** required).
4. If you want to convey information that the user should not miss or overlook use **always** [admonitions](https://docusaurus.io/docs/markdown-features/admonitions).