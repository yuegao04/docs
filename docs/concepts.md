# Concepts

The following are the key concepts in Walrus.

## Connectors

Connectors are components that integrate with third-party services. Walrus provides various types of connectors, including Kubernetes, cloud providers, version control systems, and customizable integrations with any system.

## Projects

Projects are your workspaces for team collaboration. You can use projects to group connectors, environments, services, variables, and other resources. Within a project, you can have multiple environments to manage application deployments in different contexts.

## Environments

Environments represent the deployment targets for applications, such as development, testing, production, etc.

## Services

Services are the deployment units of applications, typically containing configuration, images, and resource information. Services are created using service templates.

## Templates

In Walrus, templates refer to service templates used to define and describe various aspects of a service or application's configuration. Operational or platform engineers are responsible for managing and maintaining templates. Application developers use templates to create services without needing to understand the infrastructure details associated with the template.