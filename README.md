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

### Build and Run in Production

```
npm run build
```

This command generates static content into the **build** directory and can be served using any static contents hosting service by the following command:

```
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
* **Always** highlight UI choices/navigation etc as *italic*, e.g. "[...] then click *Create ECS Server* on [...]."
* Variables and values should be **always** marked as `inline code`, e.g. "[...] change the `replica` count to `1`"
* If you provide a code-block that requires a specific file name for the blueprint to work, insert **always** the file name in the header of the code-block, e.g. "```yaml title="credentials.yaml  [...] ```"
* **Do not** use punctuation marks at the end of headings, e.g. "# Installation Steps" and **not** "# Installation Steps:". 
  
### Diagramms

Use one of the following tools for creating diagramms:

* [draw.io](https://www.drawio.com/). You can find the Open Telekom Cloud stencils [here](https://www.t-systems.com).
* [Diagrams for Open Telekom Cloud](https://github.com/akyriako/diagrams)

> [!NOTE]
> No licence required for any of the aformentioned tools.

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