#!/bin/bash

yarn install

export TYPESENSE_API_KEY=xyz
export CONFIG_JSON=$(cat .devcontainer/docsearch-config.json | jq -r tostring)

docker compose up -d

