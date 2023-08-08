---
sidebar_position: 1
---

# Variables

There are several levels of variables in Seal:

- Environment Variables: Applied to a specific environment
- Project Variables: Applied to a specific project
- Global Variables: Can be applied to all projects

When variables with the same name exist at different levels, the value of the variable is used according to the following **priority**: **Environment > Project > Global**.

## View Variable List

### Global Variables
1. Click on the `Operation Center` menu in the left navigation bar.
2. Click on the `Global Variables` tab to manage global variables.

![var-global-list](/img/v0.3.0/opration/variable/op-var-global-list.png)

### Project Variables

1. Click on `Application Management` in the left navigation bar.
2. Select the project using the project dropdown button at the top breadcrumb.
3. Click on the `Variables` tab to manage the variables under this project.

![var-project-list](/img/v0.3.0/opration/variable/op-var-proj-list.png)

### Environment Variables

1. Click on `Application Management` in the left navigation bar.
2. Select the project using the project dropdown button at the top breadcrumb.
3. Under the `Environment` tab, click on the name of an environment to enter the environment view.
4. Click on the `Variables` tab to manage the variables under this environment.

![var-environment-list](/img/v0.3.0/opration/variable/op-var-env-list.png)

## Create, Update Variables

1. Enter the variable list page.
2. Click on the 【New Variable】button to create a variable.
3. Select `Sensitive`. If this option is enabled, the value of the variable cannot be seen after it is saved.

![var-create](/img/v0.3.0/opration/variable/op-var-create.png)

4. Click on the `Edit` operation button in the variable list to update the variable.

![var-edit](/img/v0.3.0/opration/variable/op-var-edit.png)

## Use Variables

When creating or editing a service, input `${var.variable name}` in the input box in the template configuration to use the corresponding variable.

![var-reference](/img/v0.3.0/opration/variable/op-var-ref.png)

## Delete Variables

1. Enter the variable list page.
2. Select the variable to be deleted and click on the `Delete` button. Confirm to delete.