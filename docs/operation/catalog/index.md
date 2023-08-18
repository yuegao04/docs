---
sidebar_position: 1
---

# Catalog

The catalog is a collection of templates. You can view, import, edit, and delete templates in the catalog.

## View the Catalog

1. Click the `Operations Hub` menu in the navigation bar and go to the `Catalog` tab.
2. In the Template tab, you can view the templates in the template list.
3. You can search for templates in the template library using the Search box.

![list](/img/v0.3.0/catalog/list.png)

## Create a Catalog

1. Click the `Operations Hub` menu in the navigation bar and go to the `Catalog` tab.
2. Click the `Add` button.
3. Enter the name, description, and source for the catalog. The source address is the address of a Github organization, such as https://github.com/terraform-aliyun-modules.
4. Click the Confirm button.

![create](/img/v0.3.0/catalog/create.png)

> Walrus supports Github organizations containing Terraform module repositories. You can import all templates under that organization into the catalog.

![create-result](/img/v0.3.0/catalog/create-result.png)

## Delete a Catalog

You can delete a catalog. Deleting a catalog will delete all templates under that catalog.

1. Click the `Operations Hub` menu in the navigation bar and go to the `Catalog` tab.
2. Select the catalog you want to delete.
3. Click the `Delete` button.