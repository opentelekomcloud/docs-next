# Open Telekom Cloud Architecture Center

This project (*docs-next*) is serving as the documentation site of Open Telekom Cloud Architecture Center and is built using [Docusaurus](https://docusaurus.io/), a modern static website generator created by [Meta](https://opensource.fb.com/).


## Development

### Installation

`npm install` is a command used in the Node Package Manager (npm) for Node.js. It will install all the dependencies listed in the dependencies and devDependencies sections of the **package.json** file and  will create a **node_modules** directory (if it doesn't already exist) and install all the packages specified in **package.json**.

```
npm install
```

### Local Development

The command `npm run start` is used to start a Node.js application as defined in the scripts section of the **package.json** file in the development environment and starts locally an http server serving you app and giving you a hot-reload live environment to observe the changes you've done in your code.

```
npm run start
```

This command starts a local development server and opens up a browser window. Changes are reflected live without having to restart the server.

> [!IMPORTANT]
> **docs-next** functionality is tightly integrated with [typesense](https://typesense.org/) (as long as you want to work with search in your development enviroment).
> No typesense installation is provided out-of-the-box, you need to come with you own instance. A Helm Chart is already provided for that matter and you can easily
> install a typesense-bundle in your local enviroment using KinD or K3d.

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
an ECS Server or on a CCE Kubernetes Cluster (recommended). Check the architecture and provided Helm Charts for the latter at [Open Telekom Cloud Architecture Center Helm Charts](https://github.com/akyriako/docs-next-charts) repository.

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
3. Updates the Helm Charts with new versions and image tags in [Open Telekom Cloud Architecture Center Helm Charts](https://github.com/akyriako/docs-next-charts)

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