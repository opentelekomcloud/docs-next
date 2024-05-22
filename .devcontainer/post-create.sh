#!/bin/bash

yarn install

export TYPESENSE_API_KEY=xyz
    
mkdir -p typesense_data

if [ ! "$(docker ps -a | grep typesense)" ]; then
    if [ "$(docker ps -aq -f status=exited -f name=typesense)" ]; then
            docker rm typesense
    fi

    docker run -d -p 8108:8108 \
                --name typesense \
                -v typesense_data:/data typesense/typesense:26.0 \
                --data-dir /data \
                --api-key=$TYPESENSE_API_KEY \
                --enable-cors=true \
                --add-host host.docker.internal:host-gateway
fi


if [ ! "$(docker ps -a | grep typesense-scraper)" ]; then
    if [ "$(docker ps -aq -f status=exited -f name=typesense-scraper)" ]; then
            docker rm typesense-scraper
    fi

    docker run -d \
        --name typesense-scraper \
        --env-file=.devcontainer/docsearch-scraper.env \
        -e "CONFIG=$(cat .devcontainer/docsearch-config.json | jq -r tostring)" \
        typesense/docsearch-scraper:0.9.1 \
        --add-host host.docker.internal:host-gateway 

fi



# docker run -d \
#         --add-host host.docker.internal:host-gateway \
#         busybox
