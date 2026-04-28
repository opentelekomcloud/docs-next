---
id: deploy-litellm-on-cce
title: Deploy LiteLLM on CCE
tags: [cce, llm, litellm, ai]
sidebar_position: 3
---

# Deploy LiteLLM on CCE

[LiteLLM](https://docs.litellm.ai/docs/) is a lightweight gateway that provides a unified interface for interacting with multiple large language model providers. It exposes an OpenAI-compatible API, allowing applications and tools to integrate once while abstracting the differences between various backends. In this role, LiteLLM sits between clients and the underlying inference layer and becomes the central control point for how models are consumed. It can route requests to different backends, such as local runtimes or external providers, without requiring changes on the client side. This enables flexibility in choosing where inference runs based on cost, performance, or data residency requirements.

Beyond simple routing, LiteLLM also introduces a layer for governance. It allows platform teams to control access to models, apply usage limits, and monitor consumption across different users or teams. This makes it possible to expose a curated set of models as a shared service within an organization, while maintaining visibility and control over cost and usage patterns.

Within CCE, LiteLLM is deployed as the central gateway for all LLM traffic. It enables a platform approach where models,whether hosted locally or accessed externally, can be offered to multiple teams through a single, consistent endpoint. This article focuses on deploying LiteLLM on CCE and preparing it to act as the control and access layer in a modular LLM architecture.
