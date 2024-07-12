# Open Telekom Cloud Architecture Center 

This project is serving as the documentation site of Open Telekom Cloud Architecture Center and is built using [Docusaurus](https://docusaurus.io/), a modern static website generator created by [Meta](https://opensource.fb.com/).


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

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build and Run in Production

```
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service by the following command:

```
npm run serve
```

> [!NOTE]
> docs-next is tuned to run at port `80` and *not* at the default `3000` (either with `npm run start` or with `npm run build`). If this port
> is already in use in your computer, the app will be rendered at a random high port in the development environment.

## Deployment

You can deploy docs-next in a various infrastructure (as every React/TS application). You can just spin a docker container, or deploy it directly on
an ECS Server or on a CCE Kubernetes Cluster (recommended). Check the architecture and provided Helm Charts for the latter [Open Telekom Cloud Architecture Center Helm Charts](https://github.com/akyriako/docs-next-charts)) repository.

### Manual

#### Build Docker Image

You can build manually your own container image as follows:

```shell
docker build . -t <docker_hub_org>/docsnext:<tag>
docker push <docker_hub_org>/docsnext:<tag>
```

and then run it locally on port:

```shell
docker run -d docs-next -p 3000:80 <docker_hub_org>/docsnext:<tag>
```

### Using the CI/CD Pipeline