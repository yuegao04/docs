(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8457],{61968:(t,e,n)=>{"use strict";n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>f,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var o=n(87462),a=(n(67294),n(3905));n(44996),n(50941);var s=n(63303),i=n(85162);n(93162);const l={id:"restful-apis",title:"Restful APIs to access Walrus.",description:"Restful APIs to access Walrus.",sidebar_label:"Introduction",sidebar_position:0,hide_title:!1,custom_edit_url:null},r=void 0,u={unversionedId:"openapi/restful-apis",id:"openapi/restful-apis",title:"Restful APIs to access Walrus.",description:"Restful APIs to access Walrus.",source:"@site/docs/openapi/restful-apis.info.mdx",sourceDirName:"openapi",slug:"/openapi/restful-apis",permalink:"/docs/openapi/restful-apis",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"restful-apis",title:"Restful APIs to access Walrus.",description:"Restful APIs to access Walrus.",sidebar_label:"Introduction",sidebar_position:0,hide_title:!1,custom_edit_url:null},sidebar:"openapi",previous:{title:"API Docs",permalink:"/docs/category/openapi"},next:{title:"Get info.",permalink:"/docs/openapi/eb-211-e-798-af-0-d-6-b-4"}},c={},d=[],p={toc:d};function f(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("span",{className:"theme-doc-version-badge badge badge--secondary"},"Version: dev"),(0,a.kt)("h1",{id:"restful-apis"},"Restful APIs"),(0,a.kt)("p",null,"Restful APIs to access Walrus."),(0,a.kt)("div",{style:{marginBottom:"2rem"}},(0,a.kt)("h2",{id:"authentication",style:{marginBottom:"1rem"}},"Authentication"),(0,a.kt)(s.Z,{className:"openapi-tabs__security-schemes",mdxType:"SchemaTabs"},(0,a.kt)(i.Z,{label:"HTTP: Basic Auth",value:"BasicAuth",mdxType:"TabItem"},(0,a.kt)("p",null,"Basic Authentication, in form of base64(<username",">",":<password",">","), the password must be a valid Seal API token."),(0,a.kt)("div",null,(0,a.kt)("table",null,(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Security Scheme Type:"),(0,a.kt)("td",null,"http")),(0,a.kt)("tr",null,(0,a.kt)("th",null,"HTTP Authorization Scheme:"),(0,a.kt)("td",null,"basic")))))),(0,a.kt)(i.Z,{label:"HTTP: Bearer Auth",value:"BearerAuth",mdxType:"TabItem"},(0,a.kt)("p",null,"Bearer Authentication, the token must be a valid Seal API token."),(0,a.kt)("div",null,(0,a.kt)("table",null,(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Security Scheme Type:"),(0,a.kt)("td",null,"http")),(0,a.kt)("tr",null,(0,a.kt)("th",null,"HTTP Authorization Scheme:"),(0,a.kt)("td",null,"bearer")))))))))}f.isMDXComponent=!0},93162:function(t,e,n){var o,a,s,i=n(25108);a=[],o=function(){"use strict";function e(t,e){return void 0===e?e={autoBom:!1}:"object"!=typeof e&&(i.warn("Deprecated: Expected third argument to be a object"),e={autoBom:!e}),e.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob(["\ufeff",t],{type:t.type}):t}function o(t,e,n){var o=new XMLHttpRequest;o.open("GET",t),o.responseType="blob",o.onload=function(){u(o.response,e,n)},o.onerror=function(){i.error("could not download file")},o.send()}function a(t){var e=new XMLHttpRequest;e.open("HEAD",t,!1);try{e.send()}catch(t){}return 200<=e.status&&299>=e.status}function s(t){try{t.dispatchEvent(new MouseEvent("click"))}catch(o){var e=document.createEvent("MouseEvents");e.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(e)}}var l="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof n.g&&n.g.global===n.g?n.g:void 0,r=l.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),u=l.saveAs||("object"!=typeof window||window!==l?function(){}:"download"in HTMLAnchorElement.prototype&&!r?function(t,e,n){var i=l.URL||l.webkitURL,r=document.createElement("a");e=e||t.name||"download",r.download=e,r.rel="noopener","string"==typeof t?(r.href=t,r.origin===location.origin?s(r):a(r.href)?o(t,e,n):s(r,r.target="_blank")):(r.href=i.createObjectURL(t),setTimeout((function(){i.revokeObjectURL(r.href)}),4e4),setTimeout((function(){s(r)}),0))}:"msSaveOrOpenBlob"in navigator?function(t,n,i){if(n=n||t.name||"download","string"!=typeof t)navigator.msSaveOrOpenBlob(e(t,i),n);else if(a(t))o(t,n,i);else{var l=document.createElement("a");l.href=t,l.target="_blank",setTimeout((function(){s(l)}))}}:function(t,e,n,a){if((a=a||open("","_blank"))&&(a.document.title=a.document.body.innerText="downloading..."),"string"==typeof t)return o(t,e,n);var s="application/octet-stream"===t.type,i=/constructor/i.test(l.HTMLElement)||l.safari,u=/CriOS\/[\d]+/.test(navigator.userAgent);if((u||s&&i||r)&&"undefined"!=typeof FileReader){var c=new FileReader;c.onloadend=function(){var t=c.result;t=u?t:t.replace(/^data:[^;]*;/,"data:attachment/file;"),a?a.location.href=t:location=t,a=null},c.readAsDataURL(t)}else{var d=l.URL||l.webkitURL,p=d.createObjectURL(t);a?a.location=p:location.href=p,a=null,setTimeout((function(){d.revokeObjectURL(p)}),4e4)}});l.saveAs=u.saveAs=u,t.exports=u},void 0===(s="function"==typeof o?o.apply(e,a):o)||(t.exports=s)}}]);