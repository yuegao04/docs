"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2992],{35733:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var a=l(87462),n=(l(67294),l(3905));const s={sidebar_position:1},r="\u5355\u5b9e\u4f8b\u90e8\u7f72",o={unversionedId:"deploy/standalone",id:"deploy/standalone",title:"\u5355\u5b9e\u4f8b\u90e8\u7f72",description:"\u9002\u7528\u4e8ePoC\u6216\u6d4b\u8bd5\u573a\u666f\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/deploy/standalone.md",sourceDirName:"deploy",slug:"/deploy/standalone",permalink:"/docs/zh/deploy/standalone",draft:!1,editUrl:"https://github.com/seal-io/docs/edit/main/docs/deploy/standalone.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docs",previous:{title:"Installation",permalink:"/docs/zh/category/installation"},next:{title:"\u9ad8\u53ef\u7528\u90e8\u7f72",permalink:"/docs/zh/deploy/replication"}},p={},u=[{value:"\u914d\u7f6eTLS",id:"\u914d\u7f6etls",level:2},{value:"\u9ed8\u8ba4\u65b9\u5f0f\uff0c\u4f7f\u7528\u7cfb\u7edf\uff08\u975e\u516c\u5f00\u53d7\u4fe1\uff09\u7684\u81ea\u7b7e\u8bc1\u4e66",id:"\u9ed8\u8ba4\u65b9\u5f0f\u4f7f\u7528\u7cfb\u7edf\u975e\u516c\u5f00\u53d7\u4fe1\u7684\u81ea\u7b7e\u8bc1\u4e66",level:3},{value:"\u4f7f\u7528 ACME \u6311\u6218\u751f\u6210\uff08\u516c\u5f00\u53d7\u4fe1\uff09\u7684\u8bc1\u4e66",id:"\u4f7f\u7528-acme-\u6311\u6218\u751f\u6210\u516c\u5f00\u53d7\u4fe1\u7684\u8bc1\u4e66",level:3},{value:"\u4f7f\u7528\u81ea\u5b9a\u4e49\u7684\u8bc1\u4e66",id:"\u4f7f\u7528\u81ea\u5b9a\u4e49\u7684\u8bc1\u4e66",level:3},{value:"\u4f7f\u7528TLS\u7ec8\u6b62",id:"\u4f7f\u7528tls\u7ec8\u6b62",level:3},{value:"\u914d\u7f6e\u6570\u636e\u5e93",id:"\u914d\u7f6e\u6570\u636e\u5e93",level:2},{value:"\u914d\u7f6eHTTP\u4ee3\u7406",id:"\u914d\u7f6ehttp\u4ee3\u7406",level:2}],i={toc:u};function d(e){let{components:t,...l}=e;return(0,n.kt)("wrapper",(0,a.Z)({},i,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"\u5355\u5b9e\u4f8b\u90e8\u7f72"},"\u5355\u5b9e\u4f8b\u90e8\u7f72"),(0,n.kt)("p",null,"\u9002\u7528\u4e8ePoC\u6216\u6d4b\u8bd5\u573a\u666f\u3002"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u524d\u7f6e\u6761\u4ef6\uff1a"),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},"\u8d44\u6e90\u4e0d\u5c11\u4e8e4CPU\uff0c8Gi\u5185\u5b58\u7684Linux\u670d\u52a1\u5668\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u81f3\u5c1150GB\u7684\u7a7a\u4f59\u78c1\u76d8\u7a7a\u95f4\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u5b89\u88c5Docker\uff0c\u8be6\u7ec6\u6307\u5f15\u53c2\u8003",(0,n.kt)("a",{parentName:"li",href:"https://docs.docker.com/"},"Docker\u5b98\u65b9\u6587\u6863"),"\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u670d\u52a1\u5668\u5f00\u653e80\u548c443\u7aef\u53e3\u3002"))),(0,n.kt)("p",null,"\u4f7f\u7528 Docker Run \u6307\u4ee4\u5373\u53ef\u5b8c\u6210\u6807\u51c6\u90e8\u7f72\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"sudo docker run -d --privileged --restart=always \\\n  -p 80:80 -p 443:443 \\\n  sealio/walrus:<VERSION>\n")),(0,n.kt)("h2",{id:"\u914d\u7f6etls"},"\u914d\u7f6eTLS"),(0,n.kt)("h3",{id:"\u9ed8\u8ba4\u65b9\u5f0f\u4f7f\u7528\u7cfb\u7edf\u975e\u516c\u5f00\u53d7\u4fe1\u7684\u81ea\u7b7e\u8bc1\u4e66"},"\u9ed8\u8ba4\u65b9\u5f0f\uff0c\u4f7f\u7528\u7cfb\u7edf\uff08\u975e\u516c\u5f00\u53d7\u4fe1\uff09\u7684\u81ea\u7b7e\u8bc1\u4e66"),(0,n.kt)("p",null,"\u7531\u4e8eHTTPs\u670d\u52a1\u8bc1\u4e66\uff08\u94fe\uff09\u7531\u975e\u516c\u5f00\u53d7\u4fe1\u7684CA\uff08Walrus\u542f\u52a8\u521b\u5efa\uff09\u7b7e\u53d1\uff0c\u7528\u6237\u8bbf\u95eeUI\u524d\u9700\u8981\u5728\u6d4f\u89c8\u5668\u786e\u8ba4\u4f7f\u7528\u98ce\u9669\u3002"),(0,n.kt)("h3",{id:"\u4f7f\u7528-acme-\u6311\u6218\u751f\u6210\u516c\u5f00\u53d7\u4fe1\u7684\u8bc1\u4e66"},"\u4f7f\u7528 ",(0,n.kt)("a",{parentName:"h3",href:"https://letsencrypt.org/docs/challenge-types"},"ACME")," \u6311\u6218\u751f\u6210\uff08\u516c\u5f00\u53d7\u4fe1\uff09\u7684\u8bc1\u4e66"),(0,n.kt)("p",null,"\u901a\u8fc7 Let's Encrypt \u670d\u52a1\u6765\u6267\u884c\u6311\u6218\uff0c\u6311\u6218\u6210\u529f\u540e\u7531 Let's Encrypt \u9881\u53d1\u4e00\u4e2a\u4e3a\u671f90\u5929\u7684 HTTPs \u670d\u52a1\u8bc1\u4e66\uff08\u94fe\uff09\u3002\u8be5\u8bc1\u4e66\uff08\u94fe\uff09\u7684\u7eed\u7ea6\u5de5\u4f5c\uff0c\u7531 Walrus \u81ea\u52a8\u5b8c\u6210\u3002"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u524d\u7f6e\u6761\u4ef6\uff1a"),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},"\u914d\u7f6e\u4e00\u4e2a\u57df\u540d\uff0c\u4f7f\u8be5\u57df\u540d\u80fd\u6620\u5c04\u5230\u90e8\u7f72Walrus\u7684Linux\u670d\u52a1\u5668\uff0c\u4f8b\u5982\uff0c",(0,n.kt)("inlineCode",{parentName:"li"},"walrus.mydomain.com"),"\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u5f00\u653e\u90e8\u7f72Walrus\u7684Linux\u670d\u52a1\u5668\u768480\u548c443\u7aef\u53e3\uff0c\u5e76\u786e\u4fdd\u8be5\u670d\u52a1\u5668\u80fd\u591f\u88abLet's Encrypt\u670d\u52a1\u8bbf\u95ee\u3002"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"sudo docker run -d --privileged --restart=always \\\n -p 80:80 -p 443:443 \\\n -e SERVER_TLS_AUTO_CERT_DOMAINS=<YOUR_DOMAIN_NAME> \\\n sealio/walrus:<VERSION>\n")),(0,n.kt)("p",null,"\u4e0a\u8ff0\u91c7\u7528\u7684\u662f ",(0,n.kt)("a",{parentName:"p",href:"https://letsencrypt.org/docs/challenge-types/#http-01-challenge"},"HTTP-01")," \u6311\u6218\u6a21\u5f0f\uff0c\u5982\u679c",(0,n.kt)("strong",{parentName:"p"},"\u65e0\u6cd5\u5f00\u653e80\u7aef\u53e3"),"\uff0c\u5c06\u81ea\u52a8\u8f6c\u4e3a\u4f7f\u7528 ",(0,n.kt)("a",{parentName:"p",href:"https://letsencrypt.org/docs/challenge-types/#tls-alpn-01"},"TLS-ALPN-01")," \u6311\u6218\u6a21\u5f0f\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"sudo docker run -d --privileged --restart=always \\\n -p 443:443 \\\n -e SERVER_TLS_AUTO_CERT_DOMAINS=<YOUR_DOMAIN_NAME> \\\n sealio/walrus:<VERSION>\n")),(0,n.kt)("h3",{id:"\u4f7f\u7528\u81ea\u5b9a\u4e49\u7684\u8bc1\u4e66"},"\u4f7f\u7528\u81ea\u5b9a\u4e49\u7684\u8bc1\u4e66"),(0,n.kt)("p",null,"\u81ea\u5b9a\u4e49\u7684\u8bc1\u4e66\u662f\u6307\uff0c\u4f7f\u7528\u516c\u5f00\u53d7\u4fe1\u6216\u975e\u516c\u5f00\u53d7\u4fe1\u7684CA\u8bc1\u4e66\uff0c\u7b7e\u53d1\u7684HTTPs\u670d\u52a1\u8bc1\u4e66\uff08\u94fe\uff09\u3002"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u524d\u7f6e\u6761\u4ef6\uff1a"),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},"\u5728\u90e8\u7f72Walrus\u7684Linux\u670d\u52a1\u5668\u4e0a\u51c6\u5907\u8bc1\u4e66\u6587\u4ef6\uff0c\u4f8b\u5982\uff0c\u5728<PRIVATE_KEY_FILE>\u8def\u5f84\u4e0b\u653e\u7f6e\u7528\u4e8eHTTPs\u670d\u52a1\u79c1\u94a5PEM\u6587\u4ef6\uff0c\u5728<CERT_FILE>\u8def\u5f84\u4e0b\u653e\u7f6e\u7528\u4e8eHTTPs\u670d\u52a1\u8bc1\u4e66\uff08\u94fe\uff09PEM\u6587\u4ef6\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u5982\u679c\u6709\uff08\u975e\u516c\u5f00\u53d7\u4fe1\u7684\uff09CA\u8bc1\u4e66\uff0c\u8bf7\u5e76\u7f6e\u5728<CERT_FILE>\u8def\u5f84\u4e0b\u7684\u6587\u4ef6\u4e2d\uff0c\u901a\u5e38\u4e32\u8054\u5728HTTPs\u670d\u52a1\u8bc1\u4e66\uff08\u94fe\uff09\u540e\u3002"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"sudo docker run -d --privileged --restart=always \\\n  -p 80:80 -p 443:443 \\\n  -v /<PRIVATE_KEY_FILE>:/etc/walrus/ssl/key.pem \\\n  -v /<CERT_FILE>:/etc/walrus/ssl/cert.pem \\\n  -e SERVER_TLS_PRIVATE_KEY_FILE=/etc/walrus/ssl/key.pem \\\n  -e SERVER_TLS_CERT_FILE=/etc/walrus/ssl/cert.pem \\\n  sealio/walrus:<VERSION>\n")),(0,n.kt)("h3",{id:"\u4f7f\u7528tls\u7ec8\u6b62"},"\u4f7f\u7528TLS\u7ec8\u6b62"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/TLS_termination_proxy"},"TLS \u7ec8\u6b62"),"\uff0c\u901a\u5e38\u7531\u53cd\u5411\u4ee3\u7406\u670d\u52a1\u6267\u884c\u3002"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a"),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},"\u53cd\u5411\u4ee3\u7406\u670d\u52a1\u5230Walrus\u7684\u94fe\u8def\u4e2d\u53ef\u4f7f\u7528HTTP\u8bf7\u6c42\uff0c\u5e76\u4e14\u5f3a\u5316Walrus\u7684\u4f1a\u8bddCookie",(0,n.kt)("inlineCode",{parentName:"li"},"walrus_session"),"\u4e3a",(0,n.kt)("inlineCode",{parentName:"li"},"Secure: true"),"\u4ee5\u907f\u514d\u4e2d\u95f4\u4eba\u653b\u51fb\u3002"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"sudo docker run -d --privileged --restart=always \\\n  -p 80:80 \\\n  -e SERVER_ENABLE_TLS=false \\\n  sealio/walrus:<VERSION>\n")),(0,n.kt)("h2",{id:"\u914d\u7f6e\u6570\u636e\u5e93"},"\u914d\u7f6e\u6570\u636e\u5e93"),(0,n.kt)("p",null,"Walrus\u57fa\u4e8e",(0,n.kt)("a",{parentName:"p",href:"https://www.postgresql.org/"},"PostgreSQL"),"\u5173\u7cfb\u578b\u6570\u636e\u5e93\u5b9e\u73b0\u6570\u636e\u5b58\u50a8\u3002"),(0,n.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cWalrus\u4f1a\u5728\u8fd0\u884c\u5bb9\u5668\u5185\u542f\u52a8\u4e00\u4e2a PostgresSQL \u7684\u5b9e\u4f8b\uff0c\u8fd9\u975e\u5e38\u4fbf\u6377\u4e14\u6613\u4e8e\u4f7f\u7528\uff0c\u4f46\u53ef\u80fd\u9762\u4e34\u4f7f\u7528\u6570\u636e\u7684\u4e22\u5931\u3002\u4e3a\u6b64\uff0c\u7528\u6237\u53ef\u4ee5\u5728\u542f\u52a8Walrus\u65f6\uff0c\u63d0\u4f9b\u5916\u90e8\u7684PostgreSQL\u6e90\uff0c\u4ee5\u907f\u514d\u4f7f\u7528\u6570\u636e\u7684\u4e22\u5931\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'# step 1: Start PostgreSQL with the following command.\ndocker run -d --restart=always \\\n  -p 5432:5432 \\\n  -e "POSTGRES_PASSWORD=Root123" \\\n  -e "POSTGRES_USER=root" \\\n  -e "POSTGRES_DB=walrus" \\\n  postgres:14.6\n\n# step 2: Start Walrus with the following command.\nsudo docker run -d --privileged --restart=always \\\n  -p 80:80 -p 443:443 \\\n  -e SERVER_DATA_SOURCE_ADDRESS="postgres://root:Root123@<postgres-ip-address>:5432/walrus?sslmode=disable"\\\n  sealio/walrus:<VERSION>\n')),(0,n.kt)("h2",{id:"\u914d\u7f6ehttp\u4ee3\u7406"},"\u914d\u7f6eHTTP\u4ee3\u7406"),(0,n.kt)("p",null,"\u5982\u679c\u90e8\u7f72\u5728\u7f51\u7edc\u9694\u79bb\u73af\u5883\uff0c\u5e76\u4e14\u53ef\u4ee5\u901a\u8fc7\u4ee3\u7406\u8bbf\u95ee\u5916\u7f51\uff0c\u53ef\u4ee5\u901a\u8fc7\u914d\u7f6e\u73af\u5883\u53d8\u91cf\u7684\u65b9\u5f0f\u8bbe\u7f6e\u4ee3\u7406\u3002\u4f8b\u5982\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'sudo docker run -d --privileged --restart=always \\\n  -p 80:80 -p 443:443 \\\n  -e HTTP_PROXY="http://192.168.0.100:3128" \\\n  -e HTTPS_PROXY="http://192.168.0.100:3128" \\\n  -e NO_PROXY="localhost,127.0.0.1,0.0.0.0,10.0.0.0/8,.svc,.cluster.local,example.com" \\\n  sealio/walrus:<VERSION>\n')))}d.isMDXComponent=!0}}]);