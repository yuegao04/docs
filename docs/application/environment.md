---
sidebar_position: 2
---

# Environment

The environment is the target of service deployment and is managed under the project.

## View the Environment List

1. Click `Application Management` on the left navigation bar. By default, the first project view will be displayed. The project can be switched via the top-level breadcrumb.
2. The environment list under this project can be viewed in the Environment tab.
3. You can enter keywords in the search bar of the environment list page to quickly search for related environments.

## Create an Environment

1. Access the list page through the action of viewing the environment list.
2. Click `New Environment`, enter the `name` to identify your environment. The environment name should be unique, so you can easily find it in the environment list.

![qs-create-env](/img/v0.3.0/quickstart/qs-create-env.png)

3. Add `Environment tags` and `Environment description` based on the actual environment.
4. Add a connector, click `Add Connector`, select the connector used in the environment, and finally click the `Confirm` button.
5. Click the `Save` button to save the environment configuration, and then you can use this environment in Application Management.

![qs-create-env2](/img/v0.3.0/quickstart/qs-create-env2.png)

## Edit Environment

1. Access the list page through the action of viewing the environment list.
2. Select the environment that you need to edit and click the Edit button.
3. Modify the environment configuration as needed, and add or delete connectors.
4. Click the `Save` button to save the environment configuration.

![app-env-edit](/img/v0.3.0/application/environment/app-env-edit.png)

## Manage Services

Within the environment, you can manage the services, including adding services, deleting services, and modifying service configurations.
1. Click `Application Management` in the navigation bar, switch to the corresponding project, and select the environment that needs to be managed.
2. View the list of services in the environment under the "Services" tab.
3. Click `New Service`, select the service that needs to be added, fill in the corresponding information, and click the `Save` button to complete the addition of services.
4. Click the `Delete` operation in the service list to delete services in the environment.

For more details on service management, please refer to [Services](/application/service).

## Dependency Graph

Within an environment, different services can have dependencies. The dependencies between services can be viewed through the dependency graph, and all services and their resources in the environment can also be viewed. In the dependency graph, some resources can be operated through the top-right corner of the resource card. For example, viewing logs or executing terminal tasks on resources in the dependency graph can be done.

For more detailed information on dependency graphs, please refer to [Dependency Graph](/application/graph).

![app-env-graph](/img/v0.3.0/application/environment/app-env-graph.png)

![app-env-graph-res](/img/v0.3.0/application/environment/app-env-graph-res.png)

## Environment Variables

Environment variables are key-value pairs stored in the environment and can be referenced in the services in the environment. Environment variables are used when creating or editing deployment services and when using related parameters in the configuration module. The variables in the current environment can only be used in the current environment, and the variables in different environments are independent of each other.
> If a variable with the same name exists in the project or globally, the variable value defined in the environment will override the project or global variable value.

![app/env-var](/img/v0.3.0/application/environment/app-env-var.png)

Usage: When creating a service, enter `${var.Environment Variable Name}` in the input box where the variable is needed.

For more detailed information on variables, please refer to [Variables](/operation/variable).

## Clone Environment

In some cases, you may need to create an environment that is identical to an existing one, in which case you can use the Clone Environment feature. Cloning an environment allows you to quickly create a new environment based on the configuration and services of the existing one.
1. Click `Application Management` -> `Environment` on the navigation bar to enter the environment list.
2. In the environment list, select the environment that needs to be cloned and click `Clone`.

![app-env-clone](/img/v0.3.0/application/environment/app-env-clone.png)

3. Configure the name, description, tags, etc., of the cloned environment, and select connectors.
4. If needed, modify the configuration of services in the cloned environment. Click to select the service, modify the service configuration in the pop-up window, click `Confirm` to save the alteration, and then click `Save` to complete the cloning of the environment.

![app-env-clone-details](/img/v0.3.0/application/environment/app-env-clone-details.png)

5. Once the cloned environment is created, you can use this environment in Application Management. The cloned services will also be automatically deployed in sequence according to the dependencies, and you can view the service status in the service list.

![app-env-clone-deploy](/img/v0.3.0/application/environment/app-env-clone-deploy.png)

## Delete Environment

1. Click `Application Management` -> `Environment` in the navigation bar to enter the environment list.
2. Ensure no services depend on this environment, select the environment you need to delete and click `Delete` to complete the deletion.