# GitHub Environments Configuration

You need to configure 3 GitHub environments:

- **preview**: for staging
- **stable**: for production
- **pull-requests-preview**: for ephemeral deployments for PR reviews

## Variables

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
