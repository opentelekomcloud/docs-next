---
id: authentik-as-identity-provider-iam
title: Authentik as an Identity Provider for IAM
tags: [security, oauth2, iam, authentik]
---
# Connecting Authentik with IAM for Login

This guide will walk you through the process of integrating authentik, with Identity and Access Management (IAM) of Open Telekom Cloud using OAuth 2.0.

## Prerequisites

Before starting the integration, ensure you have:

- An authentik installation up and running
- Administrative privileges on both authentik and your IAM system
- Basic understanding of OAuth 2.0 concepts and flows

## Adding Groups in Scope Mapping for Authentik

Scope Mapping in authentik allows you to control what information is shared with applications when users authenticate. Adding groups to scope mapping can be particularly useful for role-based access control in IAM. Here's how to set it up:

1. Log in to your authentik admin interface
2. Navigate to *Customization -> Property Mappings*
3. Create a *New property mapping* of type *Scope Mapping* with the following details:
   - Name: `authentik default OAuth Mapping: OpenID 'groups'` (or any name to specify that in authentik)
   - Scope name: `groups` (or create a custom scope if desired)
   - Expression: Use the following Python expression:

   ```python
   return [group.name for group in request.user.ak_groups.all()]
   ```

   ![image](/img/docs/blueprints/by-use-case/security/authentik/group-scope-mapping.png)

## Configuring Authentik as an OAuth Provider

1. Log in to your authentik admin panel
2. Navigate to  *Applications -> Providers*
3. Create a new OAuth2/OpenID Provider
4. Configure the provider settings:
   - Name: Give your provider a descriptive name
   - Client type: Public
   - Client ID: Auto-generated or specify your own
   - Redirect URIs: Enter the callback URL from your IAM: `https://auth.otc.t-systems.com/authui/oidc/post`
   - Under Advanced protocol settings -> Scopes: Select the required scopes (e.g., openid, profile, email, groups)
  ![image](/img/docs/blueprints/by-use-case/security/authentik/create-oauth.png)
5. Save the provider configuration
6. Note down the Client ID, and Authorization/Token endpoints

## Configuring IAM

### Create a new IAM Identity Provider

1. Log in to your Open Telekom Cloud Console
2. Navigate to *IAM and Identity Providers* under *Management & Deployment*
3. Select *Identity Providers* and click *Create Identity Provider* to create a new identity provider with the following values:
   - Name: Give your provider a descriptive name
   - Protocol: *OpenID Connect*
   - SSO Type: *Virtual User*
   - Status: *Enabled*
  ![image](/img/docs/blueprints/by-use-case/security/authentik/create-idp-iam.png)

### Configure the IAM Identity Provider

Find your newly created provider in Identity Providers list and click *Modify*:

![image](/img/docs/blueprints/by-use-case/security/authentik/modify-idp-iam.png)

Set the following values:

- **Access Type**: *Programmatic access and management console access*
- **Identity Provider URL**: URL of authentik (e.g. `https://test-domain.com/application/o/authentik-iam/`)
- **Client ID**: The id of your client as defined in *Configuring Authentik as an OAuth Provider*
- **Authorization Endpoint**: copy the value from key *authorization_endpoint* of the *OpenID Endpoint Configuration* (e.g. `https://test-domain.com/application/o/authorize/`)
- **Scopes**: Select the required scopes (e.g., openid, profile, email, groups)
- **Response Mode**: `form_post`
- **Signing Key**: Value of the key `jwks_uri` of the *OpenID Endpoint Configuration* JSON output
   ![image](/img/docs/blueprints/by-use-case/security/authentik/configure-idp-iam.png)

:::note Note
All of the links for your setup can be found in *Overview* page of the *OAuth2/OpenID Provider* in Authentik admin dashboard.
:::

## Configure the IAM Identity Provider Conversion Rules

You can use [identity conversion rules](https://docs.otc.t-systems.com/identity-access-management/umn/user_guide/identity_providers/virtual_user_sso_via_openid_connect/step_2_configure_identity_conversion_rules.html) to map the identities of existing users to Open Telekom Cloud and control their access to cloud resources.

By default federated users are named *FederationUser* in the Open Telekom Cloud platform. These users can only log in to
the cloud platform and they do not have **any** other permissions. You can configure identity conversion rules on the
IAM console to achieve the following:

- Display enterprise users with different names in the cloud platform.
- Assign permissions to enterprise users to use the cloud platform resources by mapping these users to IAM user groups.
  Ensure that you have created the required user groups.

This can be done by editing the Identity Conversion Rules. Edit the conversion rule of previously created Identity Provider in IAM:

![image](/img/docs/blueprints/by-use-case/security/authentik/edit-conversion-rules.png)

Paste the following conversion rule in the *Edit Rule* panel:

```json
[
  {
    "remote": [
      {
        "type": "email"
      },
      {
        "any_one_of": [
          "github-users"
        ],
        "type": "groups"
      }
    ],
    "local": [
      {
        "user": {
          "name": "fidp-{0}"
        }
      },
      {
        "group": {
          "name": "ecs-admin"
        }
      }
    ]
  }
]
```

The *remote* part describes the  requested *Scopes* (``profile``, ``email`` or ``groups``) of the user.
The *local* part defines the mapping between the remote properties and the local IAM. The user will get a ``name``
as the value of ``fidp-<user-email>`` and will automatically belong to the ``ecs-admin`` if it is a member of ``github-users``.

:::warning
Notice that the *ecs-admin* group is created in advanced so the IAM can find the group localy and it would automatically add all the users which belong to the *github-users* in remote identity provider to this local group. If it cannot match the user to any group the access of the user would be simply denied.
:::

:::tip Tip
You can find more detailed info about *Conversion Rules* under:

- [Configure Identity Conversion Rules](https://docs.otc.t-systems.com/identity-access-management/umn/user_guide/identity_providers/virtual_user_sso_via_openid_connect/step_2_configure_identity_conversion_rules.html)
- [Syntax of Identity Conversion Rules](https://docs.otc.t-systems.com/identity-access-management/umn/user_guide/identity_providers/syntax_of_identity_conversion_rules.html#en-us-topic-0079620340)
:::
