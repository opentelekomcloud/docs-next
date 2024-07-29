---
id: identity-federation-github
title: Identity Federation with GitHub
tags: [keycloak, security, github, oauth2, iam, federation]
---

# Identity Federation with GitHub

Identity Federation in Keycloak refers to the ability to use external identity providers to authenticate users in your
application. In this context, GitHub can be used as an identity provider, allowing users to log in to your
Open Telekom Cloud tenant using their GitHub credentials. Users can choose to log in with their GitHub accounts and
Keycloak takes care of the authentication process, providing a seamless experience for users while ensuring security
and centralized identity management for external accounts that are not actively managed in your tenant's IAM.

## Prerequisites

For this lab, you are going to need a:

1. **Keycloak** server: You should have a Keycloak server instance set up and running
2. **GitHub** account: You need a GitHub account to register your application and obtain client ID and secret


## Deploying Keycloak

:::tip
You can follow the blueprint [Deploy Keycloak on CCE](./cce-keycloak.md) in order to setup a working instance of Keycloak on CCE.
:::

## Configuring Keycloak & IAM

### Creating a new Realm

A realm manages users, credentials, roles, and groups. A user belongs to and logs into the realm he is assigned to.
Realms are isolated from one another and can  manage and authenticate only those users that they belong to them.

Open and login to your Keycloak instance. Create a new realm (let's call it `otcac_test_company_1` for the course of
this blueprint) and mark it as enabled:

![image](/img/docs/blueprints/by-use-case/security/keycloak/SCR-20231212-mfl.png)

### Creating a new Client

Clients are applications, or services, that can request the authentication of a user. Create a new client (let's call it
`otcac_test_company_1_client` with type `OpenID Connect` and in the *Capability config* step of the wizard, activate the following Authentication
flows:

- Standard flow
- Implicit flow
- Direct access grants

![image](/img/docs/blueprints/by-use-case/security/keycloak/SCR-20231212-mmx.png)

### Configuring Mappers

Open the management console of the Client you just created, and navigate to the *Client scopes* tab. Click on the list
item with the name: `otcac_test_company_1_client-dedicated`:

![image](/img/docs/blueprints/by-use-case/security/keycloak/SCR-20231212-mr5.png)

Now we need to add some mappers. We will first add one of the predefined ones:

![image](/img/docs/blueprints/by-use-case/security/keycloak/SCR-20231212-n1w.png)

and from the list choose `email`:

![image](/img/docs/blueprints/by-use-case/security/keycloak/SCR-20231212-n0d.png)

Next we need to add a group membership mapper. Click *Add mapper* -> *By Configuration*:

![image](/img/docs/blueprints/by-use-case/security/keycloak/SCR-20231212-n0n.png)

and from the list choose *Group Membership*:

![image](/img/docs/blueprints/by-use-case/security/keycloak/SCR-20231212-n15.png)

Open the configuration of the mapper. Insert a mapper and token name as `gruppen`. The token name will be used in the
OTC Conversion Rules. **Disable** the *Full group path* option:

![image](/img/docs/blueprints/by-use-case/security/keycloak/SCR-20231212-n8b.png)

### Get OpenID Endpoint Configuration

Open *Realm Settings* and click on *OpenID Endpoint Configuration*:

![image](/img/docs/blueprints/by-use-case/security/keycloak/SCR-20231212-nj4.png)

You will be redirected to web page rendering, as JSON, all the endpoints and the current configuration of your realm:

![image](/img/docs/blueprints/by-use-case/security/keycloak/SCR-20231212-ngd.png)

:::note
It is recommended to keep this web page open in a separate tab or screen, because we are going to need to
grab some values from it, for our the next steps.
:::

## Creating a new IAM Identity Provider

For this step we will change to Open Telekom Cloud Console and particularly to IAM and Identity Providers. Create a new
one, and set **Protocol** to `OpenID Connect`, **SSO Type** to `Virtual User` and **Status** to `Enabled`:

![image](/img/docs/blueprints/by-use-case/security/keycloak/SCR-20231212-nq7.png)

### Configuring the IAM Identity Provider

Find your newly created provider in Identity Providers list and click *Modify*:

![image](/img/docs/blueprints/by-use-case/security/keycloak/SCR-20231212-nw9.png)

Set the following values:

- **Access Type**: *Programmatic access and management console access*
- **Client ID**: The id of your client as defined in Keycloak (in this example is `otcac_test_company_1_client`)
- **Authorization Endpoint**: copy the value from key **authorization_endpoint** of the *OpenID Endpoint Configuration* JSON output
- **Response Mode**: `form_post`
- **Signing Key**: open in a new tab the URL address that is value of the key `jwks_uri` of the *OpenID Endpoint Configuration* JSON output. Copy the whole output of the new page and paste it as is in the respective textbox for *Signing Key*.

![image](/img/docs/blueprints/by-use-case/security/keycloak/SCR-20231212-o7i.png)

Save the changes, **but before closing this panel copy the value** of the *Identity Provider URL* because we are going to
need this value in the next step of this blueprint.

## Configuring Client's Access Settings

For this step we will switch back to *Keycloak Administration Console*, and navigate to *Access Settings* for our client:

![image](/img/docs/blueprints/by-use-case/security/keycloak/SCR-20231212-och.png)

Set the following values:

- **Root URL**: The *Identity Provider URL* you copied in the previous step.
- **Home URL**: `https://auth.otc.t-systems.com`
- **Valid redirect URIs**: `https://auth.otc.t-systems.com/authui/oidc/post`

## GitHub Integration

### Adding GitHub as Identity Provider

Then we have to add a new Identity Provider that will allow users to authenticate using their GitHub accounts:

![image](/img/docs/blueprints/by-use-case/security/keycloak/SCR-20240122-k3x.png)

Enable the provider and copy the *Redirect URI* because we are going to need in the next step, that will interconnect
this Keycloak realm with a GitHub OAuth application.

![image](/img/docs/blueprints/by-use-case/security/keycloak/SCR-20240201-k76.png)

### Creating new GitHub OAuth App

Open your GitHub account and find *OAuth Apps* under *Settings* -> *Developer Settings* and create a new app:

![image](/img/docs/blueprints/by-use-case/security/keycloak/SCR-20240122-k0w.png)

and set the following values:

- **Homepage URL**: `https://auth.otc.t-systems.com`
- **Authorization call back URL**: the *Redirect URI* we picked up from the previous step

![image](/img/docs/blueprints/by-use-case/security/keycloak/SCR-20240122-k68.png)

Last piece of creating an OAuth App is to generate a client secret:

![image](/img/docs/blueprints/by-use-case/security/keycloak/SCR-20240122-k76.png)

:::note
Make immediately a copy of the client secret value. We are going to need it (along with the *Client ID* of the app)
during our next step and additionally that is the last time that it will be visible on the GitHub console.
:::

### Configuring GitHub Identity Provider

Next, let's return back to the configuration panel of our newly created GitHub Identity Provider in Keycloak, and set
the following values:

![image](/img/docs/blueprints/by-use-case/security/keycloak/SCR-20240122-k1y.png)

- **Client ID**: the *Client ID* of the GitHub OAUth app we just created
- **Client Secret**: the *Client Secret* of the GitHub OAUth app

## Configuring the IAM Identity Provider Conversion Rules

By default federated users are named `FederationUser` in the Open Telekom Cloud platform. These users can only log in to
the cloud platform and they do not have **any** other permissions. You can configure identity conversion rules on the
IAM console to achieve the following:

- Display enterprise users with different names in the cloud platform.
- Assign permissions to enterprise users to use the cloud platform resources by mapping these users to IAM user groups.
  Ensure that you have created the required user groups.

This can be achieved by editing the *Identity Conversion Rules* under *IAM* -> *Identity Providers*:

![image](/img/docs/blueprints/by-use-case/security/keycloak/SCR-20240201-erg.png)

Paste the following conversion rule in the *Edit Rule* panel:

```json
    [
      {
        "remote": [
        {
          "type": "email"
        },
        {
          "type": "gruppen"
        }],
        "local": [
        {
          "user": {
            "name": "{0}"
          }
        },
        {
          "groups": "{1}"
        }]
      }
    ]
```

The *remote* part describes the *Predefined Mappers* (`email` and `gruppen`) we created in KeyCloak Client's configuration.
The *local* part defines the mapping between the remote properties and the OTC account. The user will get as `name`
the the value of `remote.email` and will automatically belong to the `groups` defined in `remote.gruppen`.

:::warning
Bear in mind, that we have to create those OTC groups on before hands so they match 1-1 name-wise in order
the mapping to work and our federated user to get the desired permissions.
:::

## Appendix

:::note See Also

- [Configure Identity Conversion Rules](https://docs.otc.t-systems.com/identity-access-management/umn/user_guide/identity_providers/virtual_user_sso_via_openid_connect/step_2_configure_identity_conversion_rules.html)
- [Syntax of Identity Conversion Rules](https://docs.otc.t-systems.com/identity-access-management/umn/user_guide/identity_providers/syntax_of_identity_conversion_rules.html#en-us-topic-0079620340)

:::