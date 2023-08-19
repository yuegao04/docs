---
sidebar_position: 3
---

# Integration with CI/CD Tools

This tutorial explains how to integrate the Walrus CLI with your CI/CD tools to achieve an automated deployment process.

## Prerequisites

To follow this tutorial, you will need:

1. A GitHub Repo where you can fork our Demo project.
2. [Installation of Walrus](/deploy/standalone).

## Creating an API Key

First, you need to create an API key to allow the Walrus CLI to communicate with the Walrus server.

1. Go to `User information` and click on `API Keys`, then click `Add new key`, configure a name, and set an expiration time for the key.
2. Once completed, copy the generated key for later use.

## Integration of Walrus CLI and CI/CD Tools

We will use CLI and GitHub Actions integration as an example.

1. Go to your GitHub repository and create a `ci.yaml` file under the `.github/workflows` directory, defining your CI/CD workflow within.
2. In the workflow, configure GitHub Actions secrets, including `CI_REGISTRY_PASSWORD`, `CI_WALRUS_SERVER`, and `CI_WALRUS_TOKEN`, to securely store sensitive information. The format for `CI_WALRUS_SERVER` should be https://domain:port/.

Here's an example `ci.yaml`:

```yaml
name: ci

on:
  push:
    branches:
      - "main"

jobs:
  build:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        arch: 
          - amd64
    steps:
      - name: Download CLI
        run: |
          # Download walrus cli
          curl -v -k -o walrus -LO "${{ secrets.CI_WALRUS_SERVER }}/cli?arch=amd64&os=linux"
          chmod +x ./walrus

      - name: Deploy
        run: |
          # Setup CLI config
          ./walrus config setup --server ${{ secrets.CI_WALRUS_SERVER }} --project web --environment dev --token ${{ secrets.CI_WALRUS_TOKEN }}

          # Build and deploy from source code
          ./walrus service create --name simple-web-service --template '{"name":"deploy-source-code", "version":"v0.0.1"}' --attributes '{ "git_url": "https://github.com/seal-io/simple-web-service", "git_branch": "main", "git_auth": false, "registry_auth": true, "registry_username": "sealio", "registry_password": "${{ secrets.CI_REGISTRY_PASSWORD }}", "image": "sealio/simple-web-service:${{ github.sha }}", "namespace": "default", "name": "simple-web-service"}' -d
```

After deployment, you can view the corresponding service in Walrus. For more CLI-related operations, please refer to the CLI documentation.