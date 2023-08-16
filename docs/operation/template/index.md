---
sidebar_position: 1
---

# Template

A template is a pre-defined service framework or architecture which includes a set of related resource definitions, inputs and outputs.

## Type

Walrus currently supports Terraform module as the template type which is stored in git code repositories.

## Template version

Walrus supports managing multiple versions of templates within the same git code tree. Semantic versioning should be used for template versioning and placed in the following directory structure:
```shell
<path-to-template>
├── 0.0.1
│   ├── README.md
│   ├── main.tf
│   ├── outputs.tf
│   └── variables.tf
└── 0.0.2
    ├── README.md
    ├── main.tf
    ├── outputs.tf
    └── variables.tf
```

## Variable style extension

Walrus has extended the Terraform variable definition to support additional attributes describing the variable style, which is useful in generating user-friendly forms on the user interface. The extended styles are defined by HCL annotations.

| Attribute Name | Type | Description | Example |
|----------------|------|-------------|---------|
| label | String | UI labels | @label "Name" |
| group | String | Grouping | @group "Basic Information" |
| options | Array | Option list| @options ["NodePort","ClusterIP","LoadBalancer"] |
| show_if | String | Show condition, displays the variable only if the condition is true | @show_if "cluster_type=NodePort" |
| hidden | Boolean | Whether to show on UI | @hidden |

The following is a sample for the variable extension:
```hcl
# variables.tf

# @group "Resources"
# @label "CPU Limit"
# @options ["0.5","1","2"]
# @show_if "advanced=true"
variable "limit_cpu" {
  type        = string
  description = "CPU limit. e.g. 0.5, 1, 2"
  default     = "0.5"
}
```

## Metadata Variables

Walrus provides the following metadata variables. When you declare matching variable names in your template, Walrus injects the values of the metadata variables during deployment.

| Variable Name                  | Type | Description                                                                            |
|--------------------------------|-----|----------------------------------------------------------------------------------------|
| walrus_metadata_project_name   | String | Service project name                                                                   |
| walrus_metadata_project_id       | String | Service project ID                                                                     |
| walrus_metadata_environment_name | String | Service environment name                                                               |
| walrus_metadata_environment_id   | String | Service environment ID                                                                 |
| walrus_metadata_service_name     | String | Service name                                                                           |
| walrus_metadata_service_id       | String | Service ID                                                                             |
| walrus_metadata_namespace_name   | String | Name of the Walrus-managed environment namespace, available in Kubernetes environments |

## Outputs

Walrus will capture the outputs defined in the Terraform files. After deployment, outputs will be displayed on the service output page. Walrus supports capturing custom Access URLs. Configure the output name to start with`endpoint` (as shown below), and these outputs will be captured by Walrus and displayed as `Access URLs`.

```hcl
output "endpoint_web" {
  value = "http://${var.host}:${var.port}"
}
```