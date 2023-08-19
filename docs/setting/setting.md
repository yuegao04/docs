---
sidebar_position: 2
---

# System Settings

The system supports the following settings:

- `Service Management`: Refers to the management configuration of the Walrus server, usually configurations of addresses, parameters, and tokens. To ensure system stability, users should aim to minimize modifications to these settings.
- `Deployment Management`: Refers to the management configuration for Walrus's service deployment.
- `Task Settings`: Refers to the execution configuration of Walrus's background tasks.

## Viewing the System Configuration List

1. Click on `System Settings` in the navigation bar.
2. Select the `Configuration Management` tab to enter the configuration list.

![system-configuration](/img/v0.3.0/settings/ss-config-svc-en.png)

## Service Management

- **Basic Settings**
    - `Server Address`: The address for accessing Walrus server, usually filled in when logging into Walrus's UI for the first time.
    - `Participate in the Improvement Plan` Switch: Sends anonymous data to help Walrus improve product quality and service. You can participate in or opt out of the Improvement Plan according to your wishes.
- **Enhanced Management**
    - `OpenAI API Token`: The token required for calling the OpenAI API.

## Deployment Management

- **Basic Settings**
    - `Runtime Image`: The image used by Walrus for service deployment.
- **Proxy Settings**
    - `HTTP_PROXY`: Provides a proxy address, proxying non-TLS HTTP outbound traffic. It applies to the service deployment execution environment, defaults to the same configuration as the Walrus server.
    - `HTTPS_PROXY`: Provides a proxy address, proxying TLS HTTP outbound traffic. It applies to the service deployment execution environment, defaults to the same configuration as the Walrus server.
    - `ALL_PROXY`: Provides a proxy address, proxying all outbound traffic. It applies to the service deployment execution environment, defaults to the same configuration as the Walrus server.
    - `NO_PROXY`: Does not proxy outbound traffic for matching domains and IPs. Separated by commas, supports CIDR and wildcard domain names, such as `10.0.0.0/8,*.example.com`. It applies to the service deployment execution environment, defaults to the same configuration as the Walrus server.

## Task Settings

- **Basic Task**
    - `Check Connector Status`: Regularly checks the connectivity of the connectors, factory settings are set to execute once every 5 minutes.
    - `Check Service Resource Status`: Regularly checks the service resources, factory settings are set to execute once every minute.
    - `Check Service Dependency Status`: Regularly checks the service resources, factory settings are set to execute once every 30 seconds.
- **FinOps Tasks**
    - `Tag Service Resources`: Regularly tags service resources to assist in collecting usage costs, factory settings are to execute once every 2 minutes.
    - `Collect Usage Costs`: Regularly gathers the usage data of the Kubernetes cluster where "Cost Analysis" is enabled, the factory settings are set to one execution per hour.