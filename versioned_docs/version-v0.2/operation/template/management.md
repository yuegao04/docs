---
sidebar_position: 2
---

# Template Management

## Adding a Template

1. Click on "Operations Center" in the navigation bar and enter the "Template" tab.
2. Click the "New Template" button.
3. Enter the name, description, source, and icon of the template. Where,
    - Source: An address compatible with the Terraform git type module source, refer to the [instructions](https://developer.hashicorp.com/terraform/language/modules/sources#module-sources).
    - Icon: Pointing to an SVG or PNG icon's address.
4. Click the "OK" button.

## Editing a Template

1. Click on "Operations Center" in the navigation bar and enter the "Template" tab.
2. Find the template you need to edit.
3. Click the more operations button indicated by the thumbnail and select 'edit'.
4. Modify the corresponding attribute values as per your need.
5. Click the "OK" button.

## Deleting a Template

1. Click on "Operations Center" in the navigation bar and enter the "Template" tab.
2. Select the template you need to delete.
3. Click the "Delete" button.
4. In the delete confirmation prompt, click the "OK" button.

## AI-assisted Template Creation

Seal can use OpenAI's GPT large language model capabilities to assist you in writing and submitting templates.

> Note: Before using this feature, you first need to:
> 1. Obtain OpenAI's API token and configure it in Seal's system settings.
> 2. Create a version control connector.

### Generating Templates Based on Natural Language Descriptions

1. Click on "Operations Center" in the navigation bar and enter the "Template" tab.
2. Click the "AI Write Template" button.
3. In the text box, use natural language to describe the functionality of the template you need. You can select an example from the instance list in the top right corner.
4. Click the "Generate" button.

### Explaining the Functionality of Template Code

1. Click on "Operations Center" in the navigation bar and enter the "Template" tab.
2. Click the "AI Write Template" button.
3. After generating/writing the template code in the text box via AI, click the "Explain" button.
4. Click the "OK" button to close the template explanation popup.

### Correcting Template Code

1. Click on "Operations Center" in the navigation bar and enter the "Template" tab.
2. Click the "AI Write Template" button.
3. After generating/writing the template code in the text box via AI, click the "Correct" button.
4. Review the repair instructions and consider the suggested repairs.
5. Click "Accept Repair" in the top left corner to apply the repair suggestion, or "Abort Repair" to discard the repair suggestion.

### Submitting Written Template Code to Git Repository

1. Click on "Operations Center" in the navigation bar and enter the "Template" tab.
2. After generating/writing the template code in the text box via AI, click the "Create PR" button.
3. Select an available version control connector.
4. Select a code repository.
5. Select the target branch.
6. Enter the submission path, that is, the folder path in the code repository where this template is stored.
7. Click the "Save" button.