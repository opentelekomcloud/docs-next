---
id: deploy-ollama-on-cce
title: Deploy Ollama on CCE
tags: [cce, llm, ollama, ai]
sidebar_position: 2
---

# Deploy Ollama on CCE

[Ollama](https://ollama.com/) is a lightweight runtime for running large language models locally. It provides a simple way to download, manage, and serve models through a REST API, without requiring complex setup or deep knowledge of model serving frameworks. This makes it well suited for environments where ease of deployment and fast iteration are important. 

In the context of CCE, Ollama can be deployed on GPU-enabled nodes to provide local inference capabilities within your cluster. It exposes models as API endpoints that can be consumed directly or integrated behind an LLM gateway such as LiteLLM. This allows you to keep inference workloads within your own infrastructure, which can be relevant for data residency, cost control, or offline scenarios.


