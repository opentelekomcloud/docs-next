# GitHub Environments Configuration

You need to configure 4 GitHub environments:

- **preview**: for staging
- **stable**: for production
- **pull-requests-preview**: for ephemeral deployments for PR reviews
- **gh-pages**: for GitHub pages publishing and deployment

## Configuration

### Variables

| Variable               |     pull-requests-preview      |   preview   |   stable    | Default/Description                          |
| :--------------------- | :----------------------------: | :---------: | :---------: | :------------------------------------------- |
| APP_VERSION            |               ✅               |     ✅      |     ✅      | `0.1`                                        |
| IMG_NAME               |               ❌               | `docs-next` | `docs-next` | Docker Image Name                            |
| DOCS_NEXT_ORG          |               ✅               |     ✅      |     ✅      | GitHub Org Name                              |
| DOCS_NEXT_HOST         |   `$DOCS_NEXT_ORG`.github.io   |     ✅      |     ✅      | Domain name                                  |
| DOCS_NEXT_CHARTS_ORG   |               ❌               |     ✅      |     ✅      | GitHub Org Name                              |
| DOCS_NEXT_CHARTS_REPO  |               ❌               |     ✅      |     ✅      | GitHub Org Name                              |
| DOCUSAURUS_BASE_URL    |    `/docs-next/pr-preview/`    |     ❌      |     ❌      | Docusaurus `baseUrl`                         |
| DOCS_NEXT_ELB_ID       |               ❌               |     ✅      |     ✅      | Elastic Load Balancer ID                     |
| TYPESENSE_HOST         |               ❌               |     ✅      |     ✅      | Domain name                                  |
| TYPESENSE_PROTOCOL     |               ❌               |     ✅      |     ✅      | `https`                                      |
| TYPESENSE_PORT         |               ❌               |     ✅      |     ✅      | `443`                                        |
| TYPESENSE_ELB_ID       |               ❌               |     ✅      |     ✅      | Elastic Load Balancer ID                     |
| UMAMI_ANALYTICS_DOMAIN |     `analytics.example.de`     |     ✅      |     ✅      | Domain name                                  |
| UMAMI_DATAHOST_URL     | `https://analytics.example.de` |     ✅      |     ✅      | Umami URL                                    |
| UMAMI_DATA_DOMAINS     |               ✅               |     ✅      |     ✅      | Umami Allowed CORS Domains `$DOCS_NEXT_HOST` |
| UMAMI_WEBSITE_ID       |            `00000`             |     ✅      |     ✅      | Umami WebSite ID                             |

> [!NOTE]
> ✅ : Yes,
> ❌ : No,
> Otherwise use either the default value or the one dictated per environment.

### Secrets

| Secret                 | pull-requests-preview | preview | stable | Default/Description               |
| :--------------------- | :-------------------: | :-----: | :----: | :-------------------------------- |
| DOCKERHUB_USERNAME     |          ❌           |   ✅    |   ✅   | Container Registry User           |
| DOCKERHUB_TOKEN        |          ❌           |   ✅    |   ✅   | Container Registry Access Token   |
| DOCS_NEXT_CHARTS_TOKEN |          ❌           |   ✅    |   ✅   | **DOCS_NEXT_CHARTS_ORG** Access Token |
| TYPESENSE_API_KEY      |          ❌           |   ✅    |   ✅   | TypeSense Admin API Key           |
| TYPESENSE_SEARCH_KEY   |          ❌           |   ✅    |   ✅   | TypeSense Search API Key          |


### GitHub Pages
