"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8333],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(r),d=a,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(f,s(s({ref:t},p),{},{components:r})):n.createElement(f,s({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6214:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_label:"Serverless",sidebar_position:1,description:"introduction about serverless"},s="Serverless",i={unversionedId:"learn/architecture/serverless",id:"learn/architecture/serverless",title:"Serverless",description:"introduction about serverless",source:"@site/docs/learn/architecture/serverless.mdx",sourceDirName:"learn/architecture",slug:"/learn/architecture/serverless",permalink:"/my-blog/docs/learn/architecture/serverless",draft:!1,editUrl:"https://github.com/huytunguyenn/my-blog/tree/main/docs/learn/architecture/serverless.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Serverless",sidebar_position:1,description:"introduction about serverless"},sidebar:"docs",previous:{title:"Architecture",permalink:"/my-blog/docs/category/architecture"},next:{title:"Cloud",permalink:"/my-blog/docs/category/cloud"}},l={},c=[{value:"There is no server?",id:"there-is-no-server",level:2},{value:"Functions",id:"functions",level:2}],p={toc:c};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"serverless"},"Serverless"),(0,a.kt)("h2",{id:"there-is-no-server"},"There is no server?"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"There are still servers, silly.")),(0,a.kt)("p",null,"But you delegate the management & maintenance to 3rd parties. Therefore, we use ",(0,a.kt)("strong",{parentName:"p"},"Platform as a Service")," wherever possible, for example:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"CosmosDB, DynamoDB > provisioning own database server"),(0,a.kt)("li",{parentName:"ul"},"Auth0, AWS Cognito > for authentication & authorization"),(0,a.kt)("li",{parentName:"ul"},"Run custom code on Functions: AWS Lambda/GCP Functions/Azure Functions")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"saas-paas-iaas-diagram",src:r(5758).Z,width:"1336",height:"536"})),(0,a.kt)("center",null,"3 service models of cloud computing (",(0,a.kt)("a",{href:"https://www.cloudflare.com/learning/serverless/glossary/platform-as-a-service-paas/"},"source"),") "),(0,a.kt)("h2",{id:"functions"},"Functions"),(0,a.kt)("p",null,"On its own, functions ",(0,a.kt)("strong",{parentName:"p"},"isn't")," a serverless framework."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Easy to run -> good for ",(0,a.kt)("strong",{parentName:"p"},"experiments & prototyping"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Automate development processes"),". ",(0,a.kt)("em",{parentName:"p"},"(You don't want to build a server just to handle 1 webhooks integrate with Slack channel for deploy notifications.)"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Decompose")," or ",(0,a.kt)("strong",{parentName:"p"},"extend")," monolithic applications. Sometimes, you just need to add a couple of functions to existing architecture to get things done.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Independent scaling.")," Independent services means you can scale it independently as well ",(0,a.kt)("em",{parentName:"p"},"(in monolithic architecture, we have to which consider services should be scale together and group it into a server to minimize the cost)"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Adapters")," for integrate systems."))))}u.isMDXComponent=!0},5758:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/saas-paas-iaas-diagram-f94f4ec3d1df84bc5eb712694d393fa0.png"}}]);