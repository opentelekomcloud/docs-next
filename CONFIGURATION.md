# GitHub Environments Configuration

You need to configure 3 GitHub environments:

- **preview**: for staging
- **stable**: for production
- **pull-requests-preview**: for ephemeral deployments for PR reviews

## Variables

| Variable              |   pull-requests-preview    |   preview   |   stable    | Default/Description |
| :-------------------- | :------------------------: | :---------: | :---------: | :------------------ |
| APP_VERSION           |             ✅             |     ✅      |     ✅      | `0.1`               |
| IMG_NAME              |             ❌             | `docs-next` | `docs-next` | Docker Image Name   |
| DOCS_NEXT_ORG         |             ✅             |     ✅      |     ✅      | GitHub Org Name     |
| DOCS_NEXT_HOST        | `$DOCS_NEXT_ORG`.github.io |     ✅      |     ✅      | Domain name         |
| DOCS_NEXT_CHARTS_ORG  |             ❌             |     ✅      |     ✅      | GitHub Org Name     |
| DOCS_NEXT_CHARTS_REPO |             ❌             |     ✅      |     ✅      | GitHub Org Name     |


**Legend**: ✅ : Yes ❌ : No 🔤 : Insert dictated value
