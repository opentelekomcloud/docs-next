---
id: deploy-openwebui-on-cce
title: Deploy Open WebUI on CCE
tags: [cce, llm, openwebui, ai]
sidebar_position: 4
---

# Deploy Open WebUI on CCE

[Open WebUI](https://docs.openwebui.com/) is a self-hosted web interface for interacting with large language models. It provides a chat-based UI that connects to OpenAI-compatible APIs, making it easy to test and use different models without building custom frontends. In this blueprint, Open WebUI acts as the user-facing layer on top of the LLM gateway. It allows users and teams to interact with the models exposed through LiteLLM, without needing to know where those models are running. This makes it a practical tool for internal adoption, enabling non-developers and developers alike to access LLM capabilities through a browser.

Open WebUI also supports multi-user environments, storing user sessions, chat history, and preferences. This makes it suitable for shared deployments where different teams access the same underlying LLM platform. Within CCE, Open WebUI is deployed as a frontend service that connects to LiteLLM as its backend. 