#!/bin/bash
#usage - ./build.sh -edev -by -iy -py -v24.02.20.1

env="dev";
build="n";
image="n";
push="n";

while getopts e:b:i:p:v: flag
do
    case "${flag}" in
        e) env=${OPTARG};;
        b) build=${OPTARG};;
        i) image=${OPTARG};;
        p) push=${OPTARG};;
        v) version=${OPTARG};;
    esac
done

echo "Building"
if [ $build == "y" ]; 
then
	echo "Build started for "$env
	cp src/environments/environment.$env.ts src/environments/environment.ts

    ng build --configuration=production --project="account"
	echo "Build completed for "$env
fi

if [ $image == "y" ]; 
then
    echo "Build docker image"
	docker build -t account-ui-$1 .
	docker tag account-ui-$1:latest 582780350629.dkr.ecr.ap-south-1.amazonaws.com/account-ui:$env.$version

    echo "Build docker image done"
fi

if [ $push == "y" ]; 
then
    echo "Push image to ECR"
    aws ecr get-login-password --region ap-south-1 | docker login --username AWS --password-stdin 582780350629.dkr.ecr.ap-south-1.amazonaws.com
	docker push 582780350629.dkr.ecr.ap-south-1.amazonaws.com/account-ui:$env.$version
    MANIFEST=$(aws ecr batch-get-image --repository-name account-ui --image-ids imageTag=$env.$version --output text --query 'images[].imageManifest')

    aws ecr put-image --repository-name account-ui --image-tag current.$env --image-manifest "$MANIFEST" > /dev/null
fi
