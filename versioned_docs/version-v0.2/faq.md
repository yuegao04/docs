# Frequently Asked Questions

## Q1: How to manage tenants?

Currently, the basic unit of resource isolation in the system is the project, i.e., resources within projects do not share with each other, such as the services under the project.

To this end, the system provides the following 6 user roles at 2 levels to help users manage resources.

- **System level**: Typically provides permissions, manages global level resources (e.g., templates, global variables, global connectors, etc.), system users, personal projects, etc.
  - **Ordinary user**: Can configure and manage project-level resources, such as creating personal projects, authorizing personal projects to others, etc.
  - **Platform engineer**: Can configure and manage global level resources, such as creating templates, configuring global variables, changing global connectors, etc.
  - **Administrator**: Has the highest authority in the system, and can manage system users in addition to configuring and managing system resources.

- **Project level**: Typically provides permissions, manages project-level resources (e.g., environments, services, variables, connectors, etc.).
  - **Read-only**: Can perform read-only operations on project-level resources.
  - **Member**: Can configure and manage project-level resources, such as creating services, configuring variables, changing connectors, etc.
  - **Owner**: Has the highest authority in the project, can manage project members in addition to configuring and managing project resources. Administrators are usually the owners of all projects.

These 6 user roles can support the following collaborative scenarios.

1. User with the "Administrator" role creates new users.
2. User with the "Platform Engineer" role manages templates, global variables, and global connectors.
3. User with the "Ordinary User" role creates their own projects. Under the project, create an environment and choose to use the global connector. Under the environment, create services and choose to use global variables.
4. The "Owner" of the project can authorize the project to another user, and can specify "Read-only", "Member" or "Owner" when authorizing.

## Q2: How to encrypt data information?

Currently, the system encrypts the following data information.

- The value content of "Global Variables" or "Project Variables".
- The configuration content of "Global Connectors" or "Project Connectors".
- The value content of "Configuration Settings".

Users can encrypt this data information through environment variables when starting a Seal instance to achieve encryption within the library.

> Note:
> - This configuration only takes effect when the Seal instance is started for the first time, and reconfiguration will cause the system to fail to start.

```shell
# step 1: Get 128/256 bits key with OpenSSL.

openssl rand -hex 16
# openssl rand -hex 32


# step 2: Start Seal with the following command.

sudo docker run -d --privileged --restart=always \
  -p 80:80 -p 443:443 \
  -e SERVER_DATA_SOURCE_DATA_ENCRYPTION=aesgcm:${the output from step 1} \
  <seal-container-image>

```

Currently only supports [AES](https://en.wikipedia.org/wiki/Advanced_Encryption_Standard) [GCM](https://en.wikipedia.org/wiki/Galois/Counter_Mode) mode, for more symmetric encryption support, welcome to communicate and contact.

## Q3: How to modify the log level?

Currently, the system includes the following log levels: `debug`, `info`, `warning`, `error` and `fatal`.

The configuration parameters `log-debug` and `log-verbosity` are used to control the printing of Seal logs. When `log-debug` is set to `true`, all levels of logs will be printed; when set to `false`, `info`, `warning`, `error` and `fatal` level logs will be printed. The configuration parameter `log-verbosity` is used to control the maximum verbosity level of the Seal log, and all logs below this level will be printed.

During server startup, the printing of Seal logs can be controlled by adding configuration parameters. After the server starts, logs can be obtained and the log configuration can be dynamically modified through the API.
```shell
# Get log configuration
curl -k 'https://localhost/debug/flags'

# Modify log configuration
curl --request PUT 'https://localhost/debug/flags?log-debug=true&log-verbosity=5'
```
> Note:
> - For security reasons, modifying the log configuration via the API is only supported through `localhost` access.