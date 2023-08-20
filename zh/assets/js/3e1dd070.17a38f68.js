"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5087],{55185:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>u,default:()=>h,frontMatter:()=>c,metadata:()=>d,toc:()=>g});var s=a(87462),m=(a(67294),a(3905)),i=a(26389),l=a(94891),n=(a(75190),a(47507)),r=a(24310),p=a(63303),o=(a(75035),a(85162));const c={id:"bdf-194-bc-7-e-765803",title:"Get summary cluster costs for costs.",description:"Get summary cluster costs for costs.",sidebar_label:"Get summary cluster costs for costs.",hide_title:!1,hide_table_of_contents:!0,api:{description:"Get summary cluster costs for costs.",operationId:"bdf194bc7e765803",requestBody:{content:{"application/json":{schema:{properties:{connectorID:{type:"string"},endTime:{format:"date-time",type:"string"},startTime:{format:"date-time",type:"string"}},type:"object"}}},required:!0},responses:{200:{content:{"application/json":{schema:{properties:{averageDailyCost:{format:"double",type:"number"},collectedTimeRange:{properties:{firstTime:{format:"date-time",type:"string"},lastTime:{format:"date-time",type:"string"}},type:"object"},currency:{type:"integer"},idleCost:{format:"double",type:"number"},itemCost:{format:"double",type:"number"},managementCost:{format:"double",type:"number"},totalCost:{format:"double",type:"number"}},type:"object"}}},description:"OK"},400:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:400,type:"integer"},statusText:{default:"Bad Request",type:"string"}},type:"object"}}},description:"Bad Request"},401:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:401,type:"integer"},statusText:{default:"Unauthorized",type:"string"}},type:"object"}}},description:"Unauthorized"},403:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:403,type:"integer"},statusText:{default:"Forbidden",type:"string"}},type:"object"}}},description:"Forbidden"},404:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:404,type:"integer"},statusText:{default:"Not Found",type:"string"}},type:"object"}}},description:"Not Found"},408:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:408,type:"integer"},statusText:{default:"Request Timeout",type:"string"}},type:"object"}}},description:"Request Timeout"},409:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:409,type:"integer"},statusText:{default:"Conflict",type:"string"}},type:"object"}}},description:"Conflict"},415:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:415,type:"integer"},statusText:{default:"Unsupported Media Type",type:"string"}},type:"object"}}},description:"Unsupported Media Type"},422:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:422,type:"integer"},statusText:{default:"Unprocessable Entity",type:"string"}},type:"object"}}},description:"Unprocessable Entity"},429:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:429,type:"integer"},statusText:{default:"Too Many Requests",type:"string"}},type:"object"}}},description:"Too Many Requests"},500:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:500,type:"integer"},statusText:{default:"Internal Server Error",type:"string"}},type:"object"}}},description:"Internal Server Error"},503:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:503,type:"integer"},statusText:{default:"Service Unavailable",type:"string"}},type:"object"}}},description:"Service Unavailable"}},security:[{BasicAuth:[]},{BearerAuth:[]}],tags:["Costs"],"x-cli-ignore":!0,extensions:[{key:"x-cli-ignore",value:!0}],method:"post",path:"/v1/costs/_/summary-cluster-costs",securitySchemes:{BasicAuth:{description:"Basic Authentication, in form of base64(<username>:<password>), the password must be a valid Seal API token.",in:"header",scheme:"basic",type:"http"},BearerAuth:{description:"Bearer Authentication, the token must be a valid Seal API token.",in:"header",scheme:"bearer",type:"http"}},jsonRequestBodyExample:{connectorID:"string",endTime:"2023-08-20T07:23:21.781Z",startTime:"2023-08-20T07:23:21.781Z"},info:{description:"Restful APIs to access Walrus.",title:"Restful APIs",version:"dev"},postman:{name:"Get summary cluster costs for costs.",description:{content:"Get summary cluster costs for costs.",type:"text/plain"},url:{path:["v1","costs","_","summary-cluster-costs"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}},auth:{type:"basic",basic:[{type:"any",value:"<Basic Auth Username>",key:"username"},{type:"any",value:"<Basic Auth Password>",key:"password"}]}}},sidebar_class_name:"post api-method",info_path:"openapi/restful-apis",custom_edit_url:null},u=void 0,d={unversionedId:"openapi/bdf-194-bc-7-e-765803",id:"openapi/bdf-194-bc-7-e-765803",title:"Get summary cluster costs for costs.",description:"Get summary cluster costs for costs.",source:"@site/docs/openapi/bdf-194-bc-7-e-765803.api.mdx",sourceDirName:"openapi",slug:"/openapi/bdf-194-bc-7-e-765803",permalink:"/docs/zh/openapi/bdf-194-bc-7-e-765803",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"bdf-194-bc-7-e-765803",title:"Get summary cluster costs for costs.",description:"Get summary cluster costs for costs.",sidebar_label:"Get summary cluster costs for costs.",hide_title:!1,hide_table_of_contents:!0,api:{description:"Get summary cluster costs for costs.",operationId:"bdf194bc7e765803",requestBody:{content:{"application/json":{schema:{properties:{connectorID:{type:"string"},endTime:{format:"date-time",type:"string"},startTime:{format:"date-time",type:"string"}},type:"object"}}},required:!0},responses:{200:{content:{"application/json":{schema:{properties:{averageDailyCost:{format:"double",type:"number"},collectedTimeRange:{properties:{firstTime:{format:"date-time",type:"string"},lastTime:{format:"date-time",type:"string"}},type:"object"},currency:{type:"integer"},idleCost:{format:"double",type:"number"},itemCost:{format:"double",type:"number"},managementCost:{format:"double",type:"number"},totalCost:{format:"double",type:"number"}},type:"object"}}},description:"OK"},400:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:400,type:"integer"},statusText:{default:"Bad Request",type:"string"}},type:"object"}}},description:"Bad Request"},401:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:401,type:"integer"},statusText:{default:"Unauthorized",type:"string"}},type:"object"}}},description:"Unauthorized"},403:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:403,type:"integer"},statusText:{default:"Forbidden",type:"string"}},type:"object"}}},description:"Forbidden"},404:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:404,type:"integer"},statusText:{default:"Not Found",type:"string"}},type:"object"}}},description:"Not Found"},408:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:408,type:"integer"},statusText:{default:"Request Timeout",type:"string"}},type:"object"}}},description:"Request Timeout"},409:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:409,type:"integer"},statusText:{default:"Conflict",type:"string"}},type:"object"}}},description:"Conflict"},415:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:415,type:"integer"},statusText:{default:"Unsupported Media Type",type:"string"}},type:"object"}}},description:"Unsupported Media Type"},422:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:422,type:"integer"},statusText:{default:"Unprocessable Entity",type:"string"}},type:"object"}}},description:"Unprocessable Entity"},429:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:429,type:"integer"},statusText:{default:"Too Many Requests",type:"string"}},type:"object"}}},description:"Too Many Requests"},500:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:500,type:"integer"},statusText:{default:"Internal Server Error",type:"string"}},type:"object"}}},description:"Internal Server Error"},503:{content:{"application/json":{schema:{properties:{message:{type:"string"},status:{default:503,type:"integer"},statusText:{default:"Service Unavailable",type:"string"}},type:"object"}}},description:"Service Unavailable"}},security:[{BasicAuth:[]},{BearerAuth:[]}],tags:["Costs"],"x-cli-ignore":!0,extensions:[{key:"x-cli-ignore",value:!0}],method:"post",path:"/v1/costs/_/summary-cluster-costs",securitySchemes:{BasicAuth:{description:"Basic Authentication, in form of base64(<username>:<password>), the password must be a valid Seal API token.",in:"header",scheme:"basic",type:"http"},BearerAuth:{description:"Bearer Authentication, the token must be a valid Seal API token.",in:"header",scheme:"bearer",type:"http"}},jsonRequestBodyExample:{connectorID:"string",endTime:"2023-08-20T07:23:21.781Z",startTime:"2023-08-20T07:23:21.781Z"},info:{description:"Restful APIs to access Walrus.",title:"Restful APIs",version:"dev"},postman:{name:"Get summary cluster costs for costs.",description:{content:"Get summary cluster costs for costs.",type:"text/plain"},url:{path:["v1","costs","_","summary-cluster-costs"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}},auth:{type:"basic",basic:[{type:"any",value:"<Basic Auth Username>",key:"username"},{type:"any",value:"<Basic Auth Password>",key:"password"}]}}},sidebar_class_name:"post api-method",info_path:"openapi/restful-apis",custom_edit_url:null},sidebar:"openapi",previous:{title:"Get cost reports for costs.",permalink:"/docs/zh/openapi/5-ecf-8-ed-8-ff-05-f-50-e"},next:{title:"Get summary costs for costs.",permalink:"/docs/zh/openapi/5180-c-689-f-5887720"}},y={},g=[{value:"Get summary cluster costs for costs.",id:"get-summary-cluster-costs-for-costs",level:2}],T={toc:g};function h(e){let{components:t,...a}=e;return(0,m.kt)("wrapper",(0,s.Z)({},T,a,{components:t,mdxType:"MDXLayout"}),(0,m.kt)("h2",{id:"get-summary-cluster-costs-for-costs"},"Get summary cluster costs for costs."),(0,m.kt)("p",null,"Get summary cluster costs for costs."),(0,m.kt)(l.Z,{mdxType:"MimeTabs"},(0,m.kt)(o.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,m.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,m.kt)("summary",{style:{textAlign:"left"}},(0,m.kt)("strong",null,"Request Body"),(0,m.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,m.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,m.kt)("ul",{style:{marginLeft:"1rem"}},(0,m.kt)(r.Z,{collapsible:!1,name:"connectorID",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(r.Z,{collapsible:!1,name:"endTime",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{format:"date-time",type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(r.Z,{collapsible:!1,name:"startTime",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{format:"date-time",type:"string"},mdxType:"SchemaItem"}))))),(0,m.kt)("div",null,(0,m.kt)(i.Z,{mdxType:"ApiTabs"},(0,m.kt)(o.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,m.kt)("div",null,(0,m.kt)("p",null,"OK")),(0,m.kt)("div",null,(0,m.kt)(l.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,m.kt)(o.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,m.kt)(p.Z,{mdxType:"SchemaTabs"},(0,m.kt)(o.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,m.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,m.kt)("summary",{style:{textAlign:"left"}},(0,m.kt)("strong",null,"Schema")),(0,m.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,m.kt)("ul",{style:{marginLeft:"1rem"}},(0,m.kt)(r.Z,{collapsible:!1,name:"averageDailyCost",required:!1,schemaName:"double",qualifierMessage:void 0,schema:{format:"double",type:"number"},mdxType:"SchemaItem"}),(0,m.kt)(r.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,m.kt)("details",{style:{}},(0,m.kt)("summary",{style:{}},(0,m.kt)("strong",null,"collectedTimeRange"),(0,m.kt)("span",{style:{opacity:"0.6"}}," object")),(0,m.kt)("div",{style:{marginLeft:"1rem"}},(0,m.kt)(r.Z,{collapsible:!1,name:"firstTime",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{format:"date-time",type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(r.Z,{collapsible:!1,name:"lastTime",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{format:"date-time",type:"string"},mdxType:"SchemaItem"})))),(0,m.kt)(r.Z,{collapsible:!1,name:"currency",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer"},mdxType:"SchemaItem"}),(0,m.kt)(r.Z,{collapsible:!1,name:"idleCost",required:!1,schemaName:"double",qualifierMessage:void 0,schema:{format:"double",type:"number"},mdxType:"SchemaItem"}),(0,m.kt)(r.Z,{collapsible:!1,name:"itemCost",required:!1,schemaName:"double",qualifierMessage:void 0,schema:{format:"double",type:"number"},mdxType:"SchemaItem"}),(0,m.kt)(r.Z,{collapsible:!1,name:"managementCost",required:!1,schemaName:"double",qualifierMessage:void 0,schema:{format:"double",type:"number"},mdxType:"SchemaItem"}),(0,m.kt)(r.Z,{collapsible:!1,name:"totalCost",required:!1,schemaName:"double",qualifierMessage:void 0,schema:{format:"double",type:"number"},mdxType:"SchemaItem"})))),(0,m.kt)(o.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,m.kt)(n.Z,{responseExample:'{\n  "averageDailyCost": 0,\n  "collectedTimeRange": {\n    "firstTime": "2023-08-20T07:23:21.849Z",\n    "lastTime": "2023-08-20T07:23:21.849Z"\n  },\n  "currency": 0,\n  "idleCost": 0,\n  "itemCost": 0,\n  "managementCost": 0,\n  "totalCost": 0\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,m.kt)(o.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,m.kt)("div",null,(0,m.kt)("p",null,"Bad Request")),(0,m.kt)("div",null,(0,m.kt)(l.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,m.kt)(o.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,m.kt)(p.Z,{mdxType:"SchemaTabs"},(0,m.kt)(o.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,m.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,m.kt)("summary",{style:{textAlign:"left"}},(0,m.kt)("strong",null,"Schema")),(0,m.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,m.kt)("ul",{style:{marginLeft:"1rem"}},(0,m.kt)(r.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(r.Z,{collapsible:!1,name:"status",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{default:400,type:"integer"},mdxType:"SchemaItem"}),(0,m.kt)(r.Z,{collapsible:!1,name:"statusText",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{default:"Bad Request",type:"string"},mdxType:"SchemaItem"})))),(0,m.kt)(o.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,m.kt)(n.Z,{responseExample:'{\n  "message": "string",\n  "status": 400,\n  "statusText": "Bad Request"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,m.kt)(o.Z,{label:"401",value:"401",mdxType:"TabItem"},(0,m.kt)("div",null,(0,m.kt)("p",null,"Unauthorized")),(0,m.kt)("div",null,(0,m.kt)(l.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,m.kt)(o.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,m.kt)(p.Z,{mdxType:"SchemaTabs"},(0,m.kt)(o.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,m.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,m.kt)("summary",{style:{textAlign:"left"}},(0,m.kt)("strong",null,"Schema")),(0,m.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,m.kt)("ul",{style:{marginLeft:"1rem"}},(0,m.kt)(r.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(r.Z,{collapsible:!1,name:"status",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{default:401,type:"integer"},mdxType:"SchemaItem"}),(0,m.kt)(r.Z,{collapsible:!1,name:"statusText",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{default:"Unauthorized",type:"string"},mdxType:"SchemaItem"})))),(0,m.kt)(o.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,m.kt)(n.Z,{responseExample:'{\n  "message": "string",\n  "status": 401,\n  "statusText": "Unauthorized"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,m.kt)(o.Z,{label:"403",value:"403",mdxType:"TabItem"},(0,m.kt)("div",null,(0,m.kt)("p",null,"Forbidden")),(0,m.kt)("div",null,(0,m.kt)(l.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,m.kt)(o.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,m.kt)(p.Z,{mdxType:"SchemaTabs"},(0,m.kt)(o.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,m.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,m.kt)("summary",{style:{textAlign:"left"}},(0,m.kt)("strong",null,"Schema")),(0,m.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,m.kt)("ul",{style:{marginLeft:"1rem"}},(0,m.kt)(r.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(r.Z,{collapsible:!1,name:"status",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{default:403,type:"integer"},mdxType:"SchemaItem"}),(0,m.kt)(r.Z,{collapsible:!1,name:"statusText",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{default:"Forbidden",type:"string"},mdxType:"SchemaItem"})))),(0,m.kt)(o.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,m.kt)(n.Z,{responseExample:'{\n  "message": "string",\n  "status": 403,\n  "statusText": "Forbidden"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,m.kt)(o.Z,{label:"404",value:"404",mdxType:"TabItem"},(0,m.kt)("div",null,(0,m.kt)("p",null,"Not Found")),(0,m.kt)("div",null,(0,m.kt)(l.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,m.kt)(o.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,m.kt)(p.Z,{mdxType:"SchemaTabs"},(0,m.kt)(o.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,m.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,m.kt)("summary",{style:{textAlign:"left"}},(0,m.kt)("strong",null,"Schema")),(0,m.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,m.kt)("ul",{style:{marginLeft:"1rem"}},(0,m.kt)(r.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(r.Z,{collapsible:!1,name:"status",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{default:404,type:"integer"},mdxType:"SchemaItem"}),(0,m.kt)(r.Z,{collapsible:!1,name:"statusText",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{default:"Not Found",type:"string"},mdxType:"SchemaItem"})))),(0,m.kt)(o.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,m.kt)(n.Z,{responseExample:'{\n  "message": "string",\n  "status": 404,\n  "statusText": "Not Found"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,m.kt)(o.Z,{label:"408",value:"408",mdxType:"TabItem"},(0,m.kt)("div",null,(0,m.kt)("p",null,"Request Timeout")),(0,m.kt)("div",null,(0,m.kt)(l.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,m.kt)(o.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,m.kt)(p.Z,{mdxType:"SchemaTabs"},(0,m.kt)(o.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,m.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,m.kt)("summary",{style:{textAlign:"left"}},(0,m.kt)("strong",null,"Schema")),(0,m.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,m.kt)("ul",{style:{marginLeft:"1rem"}},(0,m.kt)(r.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(r.Z,{collapsible:!1,name:"status",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{default:408,type:"integer"},mdxType:"SchemaItem"}),(0,m.kt)(r.Z,{collapsible:!1,name:"statusText",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{default:"Request Timeout",type:"string"},mdxType:"SchemaItem"})))),(0,m.kt)(o.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,m.kt)(n.Z,{responseExample:'{\n  "message": "string",\n  "status": 408,\n  "statusText": "Request Timeout"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,m.kt)(o.Z,{label:"409",value:"409",mdxType:"TabItem"},(0,m.kt)("div",null,(0,m.kt)("p",null,"Conflict")),(0,m.kt)("div",null,(0,m.kt)(l.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,m.kt)(o.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,m.kt)(p.Z,{mdxType:"SchemaTabs"},(0,m.kt)(o.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,m.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,m.kt)("summary",{style:{textAlign:"left"}},(0,m.kt)("strong",null,"Schema")),(0,m.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,m.kt)("ul",{style:{marginLeft:"1rem"}},(0,m.kt)(r.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(r.Z,{collapsible:!1,name:"status",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{default:409,type:"integer"},mdxType:"SchemaItem"}),(0,m.kt)(r.Z,{collapsible:!1,name:"statusText",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{default:"Conflict",type:"string"},mdxType:"SchemaItem"})))),(0,m.kt)(o.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,m.kt)(n.Z,{responseExample:'{\n  "message": "string",\n  "status": 409,\n  "statusText": "Conflict"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,m.kt)(o.Z,{label:"415",value:"415",mdxType:"TabItem"},(0,m.kt)("div",null,(0,m.kt)("p",null,"Unsupported Media Type")),(0,m.kt)("div",null,(0,m.kt)(l.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,m.kt)(o.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,m.kt)(p.Z,{mdxType:"SchemaTabs"},(0,m.kt)(o.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,m.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,m.kt)("summary",{style:{textAlign:"left"}},(0,m.kt)("strong",null,"Schema")),(0,m.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,m.kt)("ul",{style:{marginLeft:"1rem"}},(0,m.kt)(r.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(r.Z,{collapsible:!1,name:"status",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{default:415,type:"integer"},mdxType:"SchemaItem"}),(0,m.kt)(r.Z,{collapsible:!1,name:"statusText",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{default:"Unsupported Media Type",type:"string"},mdxType:"SchemaItem"})))),(0,m.kt)(o.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,m.kt)(n.Z,{responseExample:'{\n  "message": "string",\n  "status": 415,\n  "statusText": "Unsupported Media Type"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,m.kt)(o.Z,{label:"422",value:"422",mdxType:"TabItem"},(0,m.kt)("div",null,(0,m.kt)("p",null,"Unprocessable Entity")),(0,m.kt)("div",null,(0,m.kt)(l.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,m.kt)(o.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,m.kt)(p.Z,{mdxType:"SchemaTabs"},(0,m.kt)(o.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,m.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,m.kt)("summary",{style:{textAlign:"left"}},(0,m.kt)("strong",null,"Schema")),(0,m.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,m.kt)("ul",{style:{marginLeft:"1rem"}},(0,m.kt)(r.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(r.Z,{collapsible:!1,name:"status",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{default:422,type:"integer"},mdxType:"SchemaItem"}),(0,m.kt)(r.Z,{collapsible:!1,name:"statusText",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{default:"Unprocessable Entity",type:"string"},mdxType:"SchemaItem"})))),(0,m.kt)(o.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,m.kt)(n.Z,{responseExample:'{\n  "message": "string",\n  "status": 422,\n  "statusText": "Unprocessable Entity"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,m.kt)(o.Z,{label:"429",value:"429",mdxType:"TabItem"},(0,m.kt)("div",null,(0,m.kt)("p",null,"Too Many Requests")),(0,m.kt)("div",null,(0,m.kt)(l.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,m.kt)(o.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,m.kt)(p.Z,{mdxType:"SchemaTabs"},(0,m.kt)(o.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,m.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,m.kt)("summary",{style:{textAlign:"left"}},(0,m.kt)("strong",null,"Schema")),(0,m.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,m.kt)("ul",{style:{marginLeft:"1rem"}},(0,m.kt)(r.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(r.Z,{collapsible:!1,name:"status",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{default:429,type:"integer"},mdxType:"SchemaItem"}),(0,m.kt)(r.Z,{collapsible:!1,name:"statusText",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{default:"Too Many Requests",type:"string"},mdxType:"SchemaItem"})))),(0,m.kt)(o.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,m.kt)(n.Z,{responseExample:'{\n  "message": "string",\n  "status": 429,\n  "statusText": "Too Many Requests"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,m.kt)(o.Z,{label:"500",value:"500",mdxType:"TabItem"},(0,m.kt)("div",null,(0,m.kt)("p",null,"Internal Server Error")),(0,m.kt)("div",null,(0,m.kt)(l.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,m.kt)(o.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,m.kt)(p.Z,{mdxType:"SchemaTabs"},(0,m.kt)(o.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,m.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,m.kt)("summary",{style:{textAlign:"left"}},(0,m.kt)("strong",null,"Schema")),(0,m.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,m.kt)("ul",{style:{marginLeft:"1rem"}},(0,m.kt)(r.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(r.Z,{collapsible:!1,name:"status",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{default:500,type:"integer"},mdxType:"SchemaItem"}),(0,m.kt)(r.Z,{collapsible:!1,name:"statusText",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{default:"Internal Server Error",type:"string"},mdxType:"SchemaItem"})))),(0,m.kt)(o.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,m.kt)(n.Z,{responseExample:'{\n  "message": "string",\n  "status": 500,\n  "statusText": "Internal Server Error"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,m.kt)(o.Z,{label:"503",value:"503",mdxType:"TabItem"},(0,m.kt)("div",null,(0,m.kt)("p",null,"Service Unavailable")),(0,m.kt)("div",null,(0,m.kt)(l.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,m.kt)(o.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,m.kt)(p.Z,{mdxType:"SchemaTabs"},(0,m.kt)(o.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,m.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,m.kt)("summary",{style:{textAlign:"left"}},(0,m.kt)("strong",null,"Schema")),(0,m.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,m.kt)("ul",{style:{marginLeft:"1rem"}},(0,m.kt)(r.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(r.Z,{collapsible:!1,name:"status",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{default:503,type:"integer"},mdxType:"SchemaItem"}),(0,m.kt)(r.Z,{collapsible:!1,name:"statusText",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{default:"Service Unavailable",type:"string"},mdxType:"SchemaItem"})))),(0,m.kt)(o.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,m.kt)(n.Z,{responseExample:'{\n  "message": "string",\n  "status": 503,\n  "statusText": "Service Unavailable"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}h.isMDXComponent=!0}}]);