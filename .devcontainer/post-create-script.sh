#!/bin/bash

yarn install

export TYPESENSE_API_KEY=xyz
export CONFIG_JSON=$(cat .devcontainer/docsearch-config.json | jq -r tostring)

cd .devcontainer

docker-compose up -d

