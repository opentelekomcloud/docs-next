---
id: active-directory-as-identity-provider-iam
title: Active Directory as Identity Provider for IAM
tags: [security, saml, iam, active-directory, ldap, adfs, microsoft]
---

# Active Directory as Identity Provider for IAM

In this guide, we'll walk you through extending your on‑premises Microsoft Active Directory Domain Services (AD DS) environment by deploying Active Directory Federation Services (AD FS) to establish a secure, claims‑based federation with Open Telekom Cloud's Identity and Access Management (IAM) platform. We'll cover everything from preparing SSL certificates and configuring your AD FS farm, to creating the Relying Party Trust in AD FS, defining claim issuance rules, and exchanging federation metadata. By leveraging the SAML 2.0 protocol, you'll achieve seamless single‑sign‑on between your corporate directory and the cloud IAM, ensuring both strong security and a smooth user experience.

## Prerequisites

Before initiating the integration process, make sure the following prerequisites are met:

* A fully deployed and accessible ADFS instance, reachable via a valid public domain. Otherwise, follow the guide: [Deploy Active Directory Federation Service on ECS](deploy-adfs-on-ecs).
* Administrator-level access to both Microsoft ADFS and Open Telekom Cloud's Identity and Access Management (IAM) console.
* A working knowledge of SAML 2.0, particularly around concepts such as assertions, metadata exchange, and service provider (SP) vs. identity provider (IdP) roles. If needed, refer to the SAML 2.0 specification for a foundational overview.
These requirements ensure that you're equipped to configure and validate the trust relationship between the two platforms.

## Creating a new Relying Party Trust in AD FS

First, retrieve the Service Provider metadata for Open Telekom Cloud:

1. Launch your web browser and navigate to:  
   `https://auth.otc.t-systems.com/authui/saml/metadata.xml`  
2. When the XML metadata loads, save the document locally under the filename **sp-metadata.xml**.  
3. Confirm that **sp-metadata.xml** is intact—its root element should be `<EntityDescriptor>`—before proceeding.  

You'll reference this file when establishing the Relying Party Trust in AD FS.

Then, go to *Server Manager* -> *Tools* -> *AD FS Management* -> *Relying Party Trusts* -> *Add Relying Party Trust*

![image](/img/docs/blueprints/by-use-case/security/microsoft/Screenshot_from_2025-04-22_09-34-05.png)

Follow the wizard:

1. **Welcome**: Choose "*Claims-aware*" and click *Next*.
2. **Select Data Source**: Choose "*Import data about the relying party from a file*" and click *Browse* and pick **sp-metadata.xml**. Click *Next*.
3. **Specify Display Name**: Enter **Open Telekom Cloud** and click *Next*.
4. **Choose Access Control Policy**: Choose "*Permit everyone*" and click *Next*.
5. **Ready to Add Trust**: Click *Next*.
6. **Finish**: Deselect "*Configure claims issuance policy for this application*" and click *Close*.

:::danger
In Step 4 of the Relying Party Trust configuration, you'll specify the Access Control Policy that governs who can authenticate via this trust. For the purposes of this blueprint we've selected the built‑in "*Permit everyone*" policy to streamline testing and validation. In your environment, however, you should work closely with your security and platform architects to choose a policy that enforces the appropriate controls (for example, requiring MFA, restricting by AD group membership, or integrating with Conditional Access rules) in accordance with your organization's security guidelines.
:::

### Setting the Secure Hash Algorithm

Finally, if you have followed the guide [Deploy Active Directory Federation Service on ECS](deploy-adfs-on-ecs) or your existing Certificates Authority works with `RSA-SHA256`, we need to set the secure hash algorith to `RSA-SHA1`. Go to *Server Manager* -> *Tools* -> *AD FS Management* -> *Relying Party Trusts*, right-click on **Open Telekom Cloud**, click *Properties* and go to tab *Advanced*:

![alt text](/img/docs/blueprints/by-use-case/security/microsoft/Screenshot_from_2025-04-22_12-17-20.png)

## Editing Claim Issuance Policy

Next, let's configure the Claims Issuance Policy so that AD FS will emit the correct SAML assertions to Open Telekom Cloud. go to *Server Manager* -> *Tools* -> *AD FS Management* -> *Relying Party Trusts*, right-click on **Open Telekom Cloud** and click *Edit Claim Issuance Policy*:

![image](/img/docs/blueprints/by-use-case/security/microsoft/Screenshot_from_2025-04-21_14-23-32.png)

1. **Rule 01**: Click on *Add Rule*:
   * **Claim rule template**: "*Send Claims using a Custom Rule*"
   * **Claim rule name**: *nameidentifier_custom_rule*
   * **Custom rule**:
  
        ``` title "Custom rule"
        c:[Type == "http://schemas.microsoft.com/ws/2008/06/identity/claims/windowsaccountname", Issuer == "AD AUTHORITY"] => add(store = "Active Directory", types = ("http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"), query = ";sAMAccountName;{0}", param = c.Value);
        ```

2. **Rule 02**: Click on *Add Rule*:
   * **Claim rule template**: "*Send Claims using a Custom Rule*"
   * **Claim rule name**: *transient_nameidentifier_custom_rule*
   * **Custom rule**:
  
        ``` title "Custom rule"
        c:[Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"] => issue(Type = "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier", Issuer = c.Issuer, OriginalIssuer = c.OriginalIssuer, Value = c.Value, ValueType = c.ValueType, Properties["http://schemas.xmlsoap.org/ws/2005/05/identity/claimproperties/format"] = "urn:oasis:names:tc:SAML:2.0:nameid-format:transient", Properties["http://schemas.xmlsoap.org/ws/2005/05/identity/claimproperties/spnamequalifier"] = "https://auth.otc.t-systems.com");
        ```

        :::warning
        Be extra cautious in case of entering `spnamequalifier` manually; there should be **no trailing slash** in the end of the URL otherwise it will be considered as a different Relying Party.
        :::

3. **Rule 03**: Click on *Add Rule*:
   * **Claim rule template**: "*Send Group Membership as Claim*"
   * **Claim rule name**: *tenant_admins_group_membership_rule*
   * **User's Group**: *MYCOMPANY\Tenant-Admins*
   * **Outgoing claim type**: "*Group*"
   * **Outgoing claim value**: *Tenant-Admins*

4. **Rule 04**: Click on *Add Rule*:
   * **Claim rule template**: "*Send Group Membership as Claim*"
   * **Claim rule name**: *ecs_admins_group_membership_rule*
   * **User's Group**: *MYCOMPANY\ECS-Admins*
   * **Outgoing claim type**: "*Group*"
   * **Outgoing claim value**: *ECS-Admins*

:::important
This blueprint assumes you've already deployed and configured your AD FS farm on Open Telekom Cloud ECS in accordance with the [Deploy Active Directory Federation Service on ECS](deploy-adfs-on-ecs) guide. If your AD FS topology or certificate infrastructure differs, adjust the settings in steps 3 & 4—and throughout the rest of this document—to align with your organization's landscape and security requirements.
:::

5. **Rule 05**: Click on *Add Rule*:
   * **Claim rule template**: "*Send LDAP Attributes as Claims*"
   * **Claim rule name**: *ldap_attributes_rule*
   * **Attribute store**: "*Active Directory*"
  
  Fill in the *Mapping of LDAP attributes to outgoing claim types* as depicted in the picture below:

  ![image](/img/docs/blueprints/by-use-case/security/microsoft/Screenshot_from_2025-04-22_10-59-39.png)

## Configuring IAM

### Creating a new Identity Provider

Go to *Open Telekom Cloud Console* -> *IAM* -> *Identity Providers* and click *Create Identity Provider*:

Set the following parameters and click *OK*.

- **Protocol**: `SAML`
- **SSO Type**: `Virtual user`

:::note
Choosing Virtual user allows OTC to create ephemeral user sessions based on SAML assertions without requiring persistent user accounts in IAM. This mode is suitable for scenarios where user identity and group memberships are fully managed by the external IdP (in this case AD/AD FS). For more information about Virtual Users check the [documentation](https://docs.otc.t-systems.com/identity-access-management/umn/user_guide/identity_providers/virtual_user_sso_via_saml/overview_of_virtual_user_sso_via_saml.html#iam-08-0021) in our Help Center.
:::

### Configure the new Identity Provider

First, retrieve the ADFS federation metadata:

1. Launch your web browser and navigate to:  
   `https://adfs.example.com/federationmetadata/2007-06/federationmetadata.xml`  
2. When the XML metadata loads, save the document locally under the filename **idp-metadata.xml**.  

:::important
Replace `example.com` with the public domain named of your organization.
:::

After your AD FS infrastructure and Relying Party configuration is in place correctly injecting the necessary assertions and the Open Telekom Cloud Identity Provider has been created, navigate to the *Identity Providers* and click on *Modify* next to the provider to finalize the trust relationship by uploading AD FS's metadata to Open Telekom Cloud IAM. Under the *Metadata Configuration* section click *Upload* and select the **idp-metadata.xml** file you retrieved earlier.

This file contains AD FS SAML configuration, including its public keys and SSO endpoints. Uploading it allows Open Telekom Cloud IAM to trust and process incoming authentication responses from AD FS securely, based on signed and validated assertions. Once uploaded, save the configuration to apply the changes.

### Configure the Conversion Rules

Now that the metadata exchange is complete and AD FS is trusted by Open Telekom Cloud IAM, the next step is to define conversion rules. These rules map incoming SAML attributes, such as LDAP groups to IAM user groups within your Open Telekom Cloud tenant. This mapping is essential for authorization. It ensures that users federated through AD FS are granted the correct level of access in OTC based on the attributes included in the SAML assertions.

Return to the *IAM* -> *Identity Providers* section in the *Open Telekom Cloud IAM Console*, locate your configured AD FS SAML provider, and click *Modify*. Scroll to the bottom of the configuration page and click on the *Edit Rule* link under *Identity Conversion Rules*. This will open the rule editor where you can define how SAML attributes from AD FS are translated into Open Telekom Cloud IAM group memberships.

In the *Edit Rule* popup, remove the default rule and paste the following conversion logic. This rule maps users from AD FS to the appropriate Open Telekom Cloud IAM group(s) based on the Active Directory Group they belong to and was included as an attribute in the SAML assertions:

```json title="Identity Conversion Rule"
[
  {
    "remote": [
      {
        "type": "http://schemas.microsoft.com/ws/2008/06/identity/claims/windowsaccountname"
      },
      {
        "any_one_of": [ "Tenant-Admins"],
        "type": "http://schemas.xmlsoap.org/claims/Group"
      }
    ],
    "local": [
      {
        "user": { "name": "{0}@mycompany.com" }
      },
      {
        "group": { "name": "admin" }
      }
    ]
  },
  {
    "remote": [
      {
        "type": "http://schemas.microsoft.com/ws/2008/06/identity/claims/windowsaccountname"
      },
      {
        "any_one_of": [ "ECS-Admins" ],
        "type": "http://schemas.xmlsoap.org/claims/Group"
      }
    ],
    "local": [
      {
        "user": { "name": "{0}@mycompany.com" }
      },
      {
        "group": { "name": "ecs-admin" }
      }
    ]
  }
]
```

It will construct a federated username in the format: `{windowsaccountname}@mycompany.com`

:::important
This blueprint operates under the assumption that your Open Telekom Cloud IAM environment includes the following two User Groups:

|Group|Policy/Role|Description
|--|--|--|
|**rds-admin**|Tenant Guest|Tenant Guest (Exclude IAM)|
||RDS Administrator|RDS Administrator |
||Server Administrator|Server Administrator |
|**ecs-admin**|ECS Admin|All permissions of ECS service.|

:::

## Verification

Return to the *IAM* -> *Identity Providers* section in the *Open Telekom Cloud IAM Console*, locate your configured AD FS SAML provider, Then click *View* next to your configured Identity Provider. In the details panel, locate the *Login Link*, copy its value, and open it in an incognito or private browsing session using your preferred browser:

![alt text](/img/docs/blueprints/by-use-case/security/microsoft/Screenshot_from_2025-04-22_11-23-20.png)

Enter your corporate credentials for a user who is a member of `MYCOMPANY\ECS-Admins` and verify that he is operating with reduced priviledges in Open Telekom Cloud Console:

![alt text](/img/docs/blueprints/by-use-case/security/microsoft/Screenshot_from_2025-04-22_11-31-37.png)

## Troubleshooting

### MSIS7093: The message is not signed with expected signature algorithm

```
Encountered error during federation passive request. 

Additional Data 

Protocol Name: 
Saml 

Relying Party: 
https://auth.otc.t-systems.com 

Exception details: 
Microsoft.IdentityServer.Protocols.Saml.SamlProtocolSignatureAlgorithmMismatchException: MSIS7093: The message is not signed with expected signature algorithm. Message is signed with signature algorithm http://www.w3.org/2000/09/xmldsig#rsa-sha1. Expected signature algorithm http://www.w3.org/2001/04/xmldsig-more#rsa-sha256.
```

That exception is informing us that AD FS will **only** accept SAML messages signed with the algorithm it's been configured to expect—and in this case it was configured for `RSA‑SHA256`, but the Service Provider (Open Telekom Cloud) is signing everything with `RSA‑SHA1`. In order to solve this error refer to [Setting the Secure Hash Algorithm](#setting-the-secure-hash-algorithm).


