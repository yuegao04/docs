"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3648],{54429:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const l={sidebar_position:1},i="Template",o={unversionedId:"operation/template/index",id:"operation/template/index",title:"Template",description:"A template is a pre-defined service framework or architecture which includes a set of related resource definitions, inputs and outputs.",source:"@site/docs/operation/template/index.md",sourceDirName:"operation/template",slug:"/operation/template/",permalink:"/docs/operation/template/",draft:!1,editUrl:"https://github.com/seal-io/docs/edit/main/docs/operation/template/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docs",previous:{title:"Catalog",permalink:"/docs/operation/catalog/"},next:{title:"Template Management",permalink:"/docs/operation/template/management"}},p={},s=[{value:"Type",id:"type",level:2},{value:"Template version",id:"template-version",level:2},{value:"Variable style extension",id:"variable-style-extension",level:2},{value:"Metadata Variables",id:"metadata-variables",level:2},{value:"Outputs",id:"outputs",level:2}],d={toc:s};function u(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"template"},"Template"),(0,r.kt)("p",null,"A template is a pre-defined service framework or architecture which includes a set of related resource definitions, inputs and outputs."),(0,r.kt)("h2",{id:"type"},"Type"),(0,r.kt)("p",null,"Walrus currently supports Terraform module as the template type which is stored in git code repositories."),(0,r.kt)("h2",{id:"template-version"},"Template version"),(0,r.kt)("p",null,"Walrus supports managing multiple versions of templates in the same git codebase. Template versions need to use semantic versioning, imported through code repository Tags, currently supporting version number format vX.Y.Z, where X, Y, Z are numbers, e.g. v0.0.1. Template versions need to be placed in the following directory structure:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"<path-to-template>\n\u2502\u2500\u2500 README.md\n\u2502\u2500\u2500 main.tf\n\u2502\u2500\u2500 outputs.tf\n\u2502\u2500\u2500 variables.tf\n")),(0,r.kt)("h2",{id:"variable-style-extension"},"Variable style extension"),(0,r.kt)("p",null,"Walrus has extended the Terraform variable definition to support additional attributes describing the variable style, which is useful in generating user-friendly forms on the user interface. The extended styles are defined by HCL annotations."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Attribute Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"label"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"UI labels"),(0,r.kt)("td",{parentName:"tr",align:null},'@label "Name"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"group"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Grouping"),(0,r.kt)("td",{parentName:"tr",align:null},'@group "Basic Information"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"options"),(0,r.kt)("td",{parentName:"tr",align:null},"Array"),(0,r.kt)("td",{parentName:"tr",align:null},"Option list"),(0,r.kt)("td",{parentName:"tr",align:null},"@options ",'["NodePort","ClusterIP","LoadBalancer"]')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"show_if"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Show condition, displays the variable only if the condition is true"),(0,r.kt)("td",{parentName:"tr",align:null},'@show_if "cluster_type=NodePort"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hidden"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to show on UI"),(0,r.kt)("td",{parentName:"tr",align:null},"@hidden")))),(0,r.kt)("p",null,"The following is a sample for the variable extension:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-hcl"},'# variables.tf\n\n# @group "Resources"\n# @label "CPU Limit"\n# @options ["0.5","1","2"]\n# @show_if "advanced=true"\nvariable "limit_cpu" {\n  type        = string\n  description = "CPU limit. e.g. 0.5, 1, 2"\n  default     = "0.5"\n}\n')),(0,r.kt)("h2",{id:"metadata-variables"},"Metadata Variables"),(0,r.kt)("p",null,"Walrus provides the following metadata variables. When you declare matching variable names in your template, Walrus injects the values of the metadata variables during deployment."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Variable Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"walrus_metadata_project_name"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Service project name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"walrus_metadata_project_id"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Service project ID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"walrus_metadata_environment_name"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Service environment name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"walrus_metadata_environment_id"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Service environment ID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"walrus_metadata_service_name"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Service name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"walrus_metadata_service_id"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Service ID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"walrus_metadata_namespace_name"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the Walrus-managed environment namespace, available in Kubernetes environments")))),(0,r.kt)("h2",{id:"outputs"},"Outputs"),(0,r.kt)("p",null,"Walrus will capture the outputs defined in the Terraform files. After deployment, outputs will be displayed on the service output page. Walrus supports capturing custom Access URLs. Configure the output name to start with",(0,r.kt)("inlineCode",{parentName:"p"},"endpoint")," (as shown below), and these outputs will be captured by Walrus and displayed as ",(0,r.kt)("inlineCode",{parentName:"p"},"Access URLs"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-hcl"},'output "endpoint_web" {\n  value = "http://${var.host}:${var.port}"\n}\n')))}u.isMDXComponent=!0}}]);