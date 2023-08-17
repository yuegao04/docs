---
slug: /
---

# Overview

Walrus is an application management platform that supports application configuration management, infrastructure orchestration, environment management and cost management (FinOps). It is designed for platform engineering teams.

The Walrus application management platform has the following characteristics:

### Separation of Concerns

Platform and operations engineers bundle infrastructure capabilities into service templates, manage environments and integrations with external systems, while application developers deploy and manage application without having to worry about the complexities of infrastructure and environment setup.

### Platform and Runtime Independence

It provides a wide range of application runtimes, including both cloud-native and traditional application deployment models. It offers a consistent application deployment and management experience on any underlying infrastructure, from Kubernetes clusters, public or private clouds, or legacy data centers.

### Flexible Application and Configuration Management

Walrus service templates define applications at a high level. Configuration parameters can be dynamically reset based on the capabilities of the deployment environment.

### Rich Open Source Ecosystem and Extensibility

It can integrate with a variety of tools such as Terraform, Helm, and Kustomize. By reusing the rich capabilities from the open-source ecosystems of Terraform and Kubernetes, it is highly extensible to meet the diverse needs of enterprises.

## Architecture

The architecture of Walrus is shown as below:

![architecture](/img/architecture.png)
