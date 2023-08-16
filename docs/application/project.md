---
sidebar_position: 1
---

# Project

> Note:
>
> - Walrus creates a "default" project on bootstrap, and assigns "ownership" to the admin user.
> - The project names within the system are unique.

## View Project List
Click `Application Management` on the navigation bar, then click the `Project` dropdown menu at the top, and click `Manage` to enter the project list.

![app-proj-mgt](/img/v0.3.0/application/project/app-proj-mgt-en.png)

## Create Projects

1. Enter the project list.
2. Click `Create New Project`, input the "Name" and "Description", and add "Tags".

![app-proj-add](/img/v0.3.0/application/project/app-proj-add-en.png)

## Enter Projects

You can enter projects in the following two ways:

1. If you are in the "Project List", click the project name to enter the corresponding project page.

![app-proj-view](/img/v0.3.0/application/project/app-proj-view-en.png)

2. If you are already in a specific project, click the `Project` dropdown menu at the top, select the project name to enter the corresponding project page.

![app-proj-switch](/img/v0.3.0/application/project/app-proj-switch-en.png)

## Search Projects

In the "Project List" page or the search box of the `Project` dropdown menu, enter the project name, press enter, and conduct a fuzzy search based on the project name.

## Edit Projects

1. Enter the "Project List".
2. Click `Edit` on the line of the project to be modified, select to change the "Name", "Description" or "Tags".
3. Click `Save` to complete the modification.

![app-proj-edit](/img/v0.3.0/application/project/app-proj-edit-en.png)

## Delete Projects

1. Enter the "Project List".
2. Check the projects to be deleted, click `Delete`, and confirm deleting in the pop-up window, to complete the deletion.

![app-proj-del](/img/v0.3.0/application/project/app-proj-del-en.png)

> Note:
> - If there are still environments under the project, the deletion of the project will fail.

## Environment Management

In the project view, click the `Environment` tab to perform [environment management](/application/environment).

## Variable Management

In the project view, click the `Variable` tab to perform [variable management](/operation/variable).

## Connector Management

In the project view, click the `Connector` tab to perform [connector management](/operation/connector).

## Member Management

In the project view, click the `Members` tab to manage the members.

![app-proj-member](/img/v0.3.0/application/project/app-proj-member-en.png)

### Search Members

Enter the member (user) name, click `Search` to conduct a fuzzy search based on the username.

### Add Members

1. In the `Members` tab, click `Add Member`.
2. After `selecting the user` and `assigning the role`, click `Add` to complete the adding.

![app-proj-member-add](/img/v0.3.0/application/project/app-proj-member-add-en.png)

Currently, the system provides 3 kinds of project user roles, which are **Read-Only**, **Member**, and **Owner**.

- **Read-Only**: Can only read the resources at the project level.
- **Member**: Can manage the configuration of resources at the project level, such as creating services, configuring variables, changing connectors, etc.
- **Owner**: Has the highest authority of the project, in addition to managing the configuration of project resources, they can also manage project members. The admin is usually the owner of all projects.

### Delete Members

Click `Delete` on the line of the member to be deleted, confirm deleting in the pop-up window, to complete the deletion.

![app-proj-member-del](/img/v0.3.0/application/project/app-proj-member-del-en.png)