#!/bin/bash

yarn install

export TYPESENSE_API_KEY=xyz
    
mkdir -p typesense_data

if [ "$(docker ps -a | grep typesense)" ]; then
    if [ "$(docker ps -aq -f status=exited -f name=typesense)" ]; then
            docker rm typesense
    fi

    docker run -d -p 8108:8108 \
                --name typesense \
                -v typesense_data:/data typesense/typesense:26.0 \
                --data-dir /data \
                --api-key=$TYPESENSE_API_KEY \
                --enable-cors 
fi