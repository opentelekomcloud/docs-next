# Syntactic and Stylistic Guidelines

## Syntax

All text content should adhere to the guidelines provided by official [Markdown Guide](https://www.markdownguide.org/):

* [Basic Syntax](https://www.markdownguide.org/basic-syntax/)
* [Extended Syntax](https://www.markdownguide.org/extended-syntax/)

## Styling

* Always highlight paths and file names as **bold**, e.g. **/etc/hosts** or **package.json**
* Always highlight UI choices/navigation etc as *italic*, e.g. "[...] then click *Create ECS Server* on Open Telekom Cloud Console."
* Variables and their values should be always highlight as `inline code`, e.g. "[...] change the `replica` count to `1`"
* If you provide a code-block that requires a specific file name for the blueprint to work, insert always the file name in the header of the code-block, e.g. 
    ```yaml title="credentials.yaml  
    apiVersion: v1
    kind: Secret
    metadata:
    name: postgres-credentials
    namespace: keycloak
    type: Opaque
    stringData:
    POSTGRES_USER: root
    POSTGRES_PASSWORD: <<POSTGRES_PASSWORD>>
    POSTGRES_DB: postgres
    ```
    > It will not render here, but Docusaurus makes sure to render it correct!  