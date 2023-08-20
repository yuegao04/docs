"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6249],{1001:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var i=n(87462),a=(n(67294),n(3905));const s={sidebar_position:2},r="System Settings",o={unversionedId:"setting/setting",id:"setting/setting",title:"System Settings",description:"The system supports the following settings:",source:"@site/docs/setting/setting.md",sourceDirName:"setting",slug:"/setting/",permalink:"/docs/setting/",draft:!1,editUrl:"https://github.com/seal-io/docs/edit/main/docs/setting/setting.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docs",previous:{title:"Settings",permalink:"/docs/category/settings"},next:{title:"Tutorials",permalink:"/docs/category/tutorials"}},l={},u=[{value:"Viewing the System Configuration List",id:"viewing-the-system-configuration-list",level:2},{value:"Service Management",id:"service-management",level:2},{value:"Deployment Management",id:"deployment-management",level:2},{value:"Task Settings",id:"task-settings",level:2}],m={toc:u};function c(e){let{components:t,...s}=e;return(0,a.kt)("wrapper",(0,i.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"system-settings"},"System Settings"),(0,a.kt)("p",null,"The system supports the following settings:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Service Management"),": Refers to the management configuration of the Walrus server, usually configurations of addresses, parameters, and tokens. To ensure system stability, users should aim to minimize modifications to these settings."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Deployment Management"),": Refers to the management configuration for Walrus's service deployment."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Task Settings"),": Refers to the execution configuration of Walrus's background tasks.")),(0,a.kt)("h2",{id:"viewing-the-system-configuration-list"},"Viewing the System Configuration List"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Click on ",(0,a.kt)("inlineCode",{parentName:"li"},"System Settings")," in the navigation bar."),(0,a.kt)("li",{parentName:"ol"},"Select the ",(0,a.kt)("inlineCode",{parentName:"li"},"Configuration Management")," tab to enter the configuration list.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"system-configuration",src:n(35991).Z,width:"3286",height:"1882"})),(0,a.kt)("h2",{id:"service-management"},"Service Management"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Basic Settings"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Server Address"),": The address for accessing Walrus server, usually filled in when logging into Walrus's UI for the first time."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Participate in the Improvement Plan")," Switch: Sends anonymous data to help Walrus improve product quality and service. You can participate in or opt out of the Improvement Plan according to your wishes."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Enhanced Management"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"OpenAI API Token"),": The token required for calling the OpenAI API.")))),(0,a.kt)("h2",{id:"deployment-management"},"Deployment Management"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Basic Settings"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Runtime Image"),": The image used by Walrus for service deployment."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Proxy Settings"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"HTTP_PROXY"),": Provides a proxy address, proxying non-TLS HTTP outbound traffic. It applies to the service deployment execution environment, defaults to the same configuration as the Walrus server."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"HTTPS_PROXY"),": Provides a proxy address, proxying TLS HTTP outbound traffic. It applies to the service deployment execution environment, defaults to the same configuration as the Walrus server."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ALL_PROXY"),": Provides a proxy address, proxying all outbound traffic. It applies to the service deployment execution environment, defaults to the same configuration as the Walrus server."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"NO_PROXY"),": Does not proxy outbound traffic for matching domains and IPs. Separated by commas, supports CIDR and wildcard domain names, such as ",(0,a.kt)("inlineCode",{parentName:"li"},"10.0.0.0/8,*.example.com"),". It applies to the service deployment execution environment, defaults to the same configuration as the Walrus server.")))),(0,a.kt)("h2",{id:"task-settings"},"Task Settings"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Basic Task"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Check Connector Status"),": Regularly checks the connectivity of the connectors, factory settings are set to execute once every 5 minutes."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Check Service Resource Status"),": Regularly checks the service resources, factory settings are set to execute once every minute."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Check Service Dependency Status"),": Regularly checks the service resources, factory settings are set to execute once every 30 seconds."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"FinOps Tasks"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Tag Service Resources"),": Regularly tags service resources to assist in collecting usage costs, factory settings are to execute once every 2 minutes."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Collect Usage Costs"),': Regularly gathers the usage data of the Kubernetes cluster where "Cost Analysis" is enabled, the factory settings are set to one execution per hour.')))))}c.isMDXComponent=!0},35991:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/ss-config-svc-en-29e4d93189324852e107a249200580b1.png"}}]);