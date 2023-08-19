---
sidebar_position: 1
---

# Deploy llama-2 on AWS

This tutorial demonstrates how to deploy llama-2 using Walrus on AWS with CPU, and utilize it through a user-friendly web UI.

## Prerequisites

To follow this tutorial, you will need:

1. An AWS account with associated [credentials](https://docs.aws.amazon.com/general/latest/gr/aws-sec-cred-types.html), and sufficient permissions to create EC2 instances.
2. [Walrus installed](/deploy/standalone).

> Note:
> While using CPU is cheaper than GPU, it still incurs costs corresponding to the EC2 instance.

## The Simple Way

With Walrus, you can have a running llama-2 instance on AWS with a user-friendly web UI in about a minute. Just follow these steps:

### Add the llama-2 Service Template
1. Log in to Walrus, click on `Operations Center` in the left navigation, go to the `Templates` tab, and click the `New Template` button.
2. Enter a template name, e.g., `llama-2`.
3. In the source field, enter `https://github.com/walrus-tutorials/llama2-on-aws`.
4. Click `Save`.

![llama2-add-template](/img/v0.3.0/tutorials/llama2-on-aws/llama2-add-template.png)

### Configure Environment and AWS Credentials
1. In the left navigation, click on `Application Management`, go to the `default` project view, and click the `Connectors` tab.
2. Click the `New Connector` button and select the `Cloud Provider` type.
3. Enter a connector name, e.g., `aws`.
4. Choose `AWS` for the `Type` option.
5. Select `Tokyo (ap-northeast-1)` for the `Region` option.
6. Click `Save`.

> Note:
> The specified region is used here because the subsequent steps involve using an AMI from that region. If you want to use a different region, you can export the AMI to your region or refer to the following sections on how to build the llama-2 image from scratch.

![llama2-add-connector](/img/v0.3.0/tutorials/llama2-on-aws/llama2-add-connector.png)

1. Click the `Environments` tab, click the `New Environment` button.
2. Enter an environment name, e.g., `dev`.
3. Click the `Add Connector` button and select the `aws` connector created in the previous step.
4. Click `Save`.

![llama2-add-environment](/img/v0.3.0/tutorials/llama2-on-aws/llama2-add-env.png)

### Create the llama-2 Service
1. In the `Environments` tab, click on the name of the `dev` environment to enter its view.
2. Click the `New Service` button.
3. Enter a service name, e.g., `my-llama-2`.
4. Choose `llama-2` in the `Template` option.
5. Click `Save`.

> Note:
> The default service configuration assumes your AWS account has a default VPC in the corresponding region. If you don't have a default VPC, create a new VPC, associate a subnet and a security group with it in the AWS VPC console.
> The security group needs to open port 7860 TCP (for accessing the llama-2 web UI). You can set your VPC name and security group name in the service configuration.

### Accessing the llama-2 Web UI

You can see the deployment and running status of the llama-2 service on its details page. Once the llama-2 service deployment is complete, you can access its web UI by clicking the access link of the service in the Walrus UI.

![llama2-service-detail](/img/v0.3.0/tutorials/llama2-on-aws/llama2-service-detail.png)

![llama2-webui](/img/v0.3.0/tutorials/llama2-on-aws/llama2-web-ui.png)

## Deep Dive: Building the llama-2 Image from Scratch

The above instructions utilized a pre-built llama-2 image. This approach saves time as you don't need to download the large language model (often with a significant file size) or build the inference service when creating a new llama-2 instance.
This section explains how such a llama-2 image is built.

You can find the complete build process [here](https://github.com/walrus-tutorials/llama2-on-aws/blob/build/main.tf).

Key steps include:

```shell
# get text-generation-webui
git clone https://github.com/oobabooga/text-generation-webui && cd text-generation-webui
# configure text-generation-webui
ln -s docker/{Dockerfile,docker-compose.yml,.dockerignore} .
cp docker/.env.example .env
sed -i '/^CLI_ARGS=/s/.*/CLI_ARGS=--model llama-2-7b-chat.ggmlv3.q4_K_M.bin --wbits 4 --listen --auto-devices/' .env
sed -i '/^\s*deploy:/,$d' docker/docker-compose.yml
# get quantized llama-2
curl -L https://huggingface.co/TheBloke/Llama-2-7B-Chat-GGML/resolve/main/llama-2-7b-chat.ggmlv3.q4_K_M.bin --output ./models/llama-2-7b-chat.ggmlv3.q4_K_M.bin
# build and run
docker compose up --build
```

In essence, this process downloads the quantized llama-2-7b-chat model, then builds and utilizes text-generation-webui to launch the llama-2 service.