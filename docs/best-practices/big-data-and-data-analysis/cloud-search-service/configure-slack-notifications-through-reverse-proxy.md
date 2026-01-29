---
id: configuring-slack-notifications-through-reverse-proxy
title: Configuring Slack Notifications through reverse proxy
tags: [css, opensearch, elasticsearch, notification]
---

# Configuring OpenSearch (CSS) Notifications to Slack in Open Telekom Cloud

## Introduction

Open Telekom Cloud (OTC) provides **Cloud Search Service (CSS)**, a fully managed **OpenSearch** offering used widely for log analytics, observability, and security monitoring.

A very common requirement is to **send alerts and notifications to Slack** when certain conditions are met—such as:
- Error rate spikes
- Cluster health degradation
- Security or audit events

However, there is an important architectural constraint:

> **OTC CSS/OpenSearch does not have direct outbound internet access.**

Because Slack webhooks are hosted on the public internet, OpenSearch **cannot directly call Slack endpoints**. To solve this, we introduce an **internal relay component** (reverse proxy or webhook service) deployed inside the same VPC.

This article explains a **clean, production-ready approach** to integrate OpenSearch notifications with Slack in OTC.

---

## High-Level Architecture

```
+------------------+
| OpenSearch (CSS) |
+------------------+
          |
          | HTTP (internal VPC traffic)
          v
+--------------------------+
| Reverse Proxy (NGINX)    |
| ECS / CCE / VM           |
+--------------------------+
          |
          | HTTPS (internet)
          v
+--------------------------+
| Slack Incoming Webhook   |
+--------------------------+
```

### Why This Works
- OpenSearch communicates only **inside the VPC**
- The proxy handles **secure outbound HTTPS**
- No internet exposure for OpenSearch itself

---

## Prerequisites

- OTC **CSS (OpenSearch)** cluster
- A **VPC** where OpenSearch is deployed
- An **ECS VM** or **CCE cluster** in the same VPC
- Network access between OpenSearch and proxy
- Slack workspace admin or app permissions

---

## Step 1: Create a Slack Incoming Webhook

1. Go to **Slack → Settings → Apps**
2. Search for **Incoming WebHooks**
3. Create a new webhook
4. Select the target Slack channel
5. Copy the webhook URL

Example:
```
https://hooks.slack.com/services/<TEAM_ID>/<APP_ID>/<WEBHOOK_TOKEN>
```

⚠️ Treat this URL as a secret.

---

## Step 2: Ensure Slack Notifications Are Enabled in OpenSearch

In some OTC OpenSearch deployments, **Slack notifications may be disabled by default**.

### Enable Slack Channel Support

Open **OpenSearch Dashboards → Dev Tools** and execute:

```json
PUT /_cluster/settings
{
  "transient": {
    "opensearch.notifications.core.allowed_config_types": [
      "smn",
      "slack",
      "prometheus",
      "webhook"
    ]
  }
}
```

✅ This enables Slack and webhook-based notification channels.

---

## Step 3: Deploy a Reverse Proxy Inside same subnet of CSS cluster.

You can deploy the proxy using:
- ECS VM (simplest)
- CCE (Kubernetes + NGINX)
- Lightweight webhook relay service

This guide uses **NGINX on an ECS VM**.

---

## Step 4: Install NGINX on ECS

```bash
sudo apt update
sudo apt install -y nginx
```

Verify:
```bash
sudo systemctl status nginx
```

---

## Step 5: Configure NGINX as a Slack Reverse Proxy

Create a new configuration file:

```bash
sudo vi /etc/nginx/conf.d/slack-proxy.conf
```

### NGINX Configuration

```nginx
server {
    listen 8080;


        proxy_set_header Host hooks.slack.com;
        proxy_set_header Content-Type application/json;
        proxy_ssl_server_name on;
    }
}

server {
    listen 8080;

    location /slack-webhook {
        # Forward requests to Slack
        proxy_pass https://hooks.slack.com/services/<TEAM_ID>/<APP_ID>/<WEBHOOK_TOKEN>;

        # Mandatory headers for Slack
        proxy_set_header Host hooks.slack.com;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;

        # HTTPS settings
        proxy_ssl_server_name on;           # Enable SNI
        proxy_ssl_name hooks.slack.com;     # Explicit SNI name

        # Optional: increase buffer for larger payloads
        client_max_body_size 10M;

        # Timeouts
        proxy_connect_timeout 10s;
        proxy_read_timeout 30s;
        proxy_send_timeout 30s;
    }
}

```

Reload NGINX:

```bash
sudo nginx -t
sudo systemctl reload nginx
```

### Internal Webhook URL

```
http://<proxy-private-ip>:8080/slack-webhook
```

This URL is reachable by OpenSearch.

---

## Step 6: Configure Network Security

Ensure:
- Security Groups allow inbound traffic on port `8080` from OpenSearch subnet
- No public IP is required for OpenSearch
- NACLs allow internal traffic

---

## Step 7: Create a Notification Channel in OpenSearch

1. Open **OpenSearch Dashboards**
2. Go to **Notifications → Channels**
3. Click **Create Channel**
4. Choose **Webhook**

### Channel Configuration

| Field | Value |
|------|------|
| Name | `slack-notifications` |
| Method | POST |
| URL | `http://<proxy-private-ip>:8080/slack-webhook` |
| Headers | `Content-Type: application/json` |

### Message Template

```json
{
  "text": "OpenSearch Alert: {{ctx.monitor.name}} triggered"
}
```

---

## Step 8: Create a Monitor and Trigger

Example:
- Monitor type: Query-level monitor
- Index pattern: `logs-*`
- Condition: Error count > threshold

Trigger action:
- Action type: Send notification
- Channel: `slack-notifications`

Message example:

```json
{
  "text": "*Alert:* {{ctx.monitor.name}}\nTime: {{ctx.periodStart}}"
}
```

---

## Step 9: Test the Integration

- Use **Send test message** in the channel
- Trigger the monitor manually
- Verify message delivery in Slack

---

## Troubleshooting

### No messages received
- Check NGINX logs:
  ```bash
  sudo tail -f /var/log/nginx/error.log
  ```
- Validate webhook URL
- Confirm OpenSearch can reach proxy IP

### HTTP 403 / 404
- Incorrect webhook path
- Missing headers

### SSL Issues
- Ensure `proxy_ssl_server_name on;` is enabled

---

## Security Best Practices

- Restrict proxy access to OpenSearch subnets only
- Do not expose proxy publicly
- Rotate Slack webhook URLs periodically
- Consider secret management for webhook URLs

---

## Alternative Designs

- Webhook relay service (Python / Go)
- Internal API Gateway with outbound access
- Service Mesh egress (advanced environments)

---

## Conclusion

Although **OTC CSS/OpenSearch cannot access the internet directly**, Slack notifications can be implemented cleanly using an **internal reverse proxy**.

This approach is:
- Secure
- Simple
- Fully compatible with OTC networking constraints

You have successfully configured reliable Slack alerts.
