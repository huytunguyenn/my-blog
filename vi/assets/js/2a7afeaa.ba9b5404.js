"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[965],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(r),m=o,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||a;return r?n.createElement(f,s(s({ref:t},u),{},{components:r})):n.createElement(f,s({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},807:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:2,description:"how do we store data in aws"},s="Storage",i={unversionedId:"learn/cloud/aws/storage",id:"learn/cloud/aws/storage",title:"Storage",description:"how do we store data in aws",source:"@site/docs/learn/cloud/aws/storage.mdx",sourceDirName:"learn/cloud/aws",slug:"/learn/cloud/aws/storage",permalink:"/my-blog/vi/docs/learn/cloud/aws/storage",draft:!1,editUrl:"https://github.com/huytunguyenn/my-blog/tree/main/docs/learn/cloud/aws/storage.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,description:"how do we store data in aws"},sidebar:"docs",previous:{title:"Intro to AWS",permalink:"/my-blog/vi/docs/learn/cloud/aws/intro"},next:{title:"Azure",permalink:"/my-blog/vi/docs/category/azure"}},l={},c=[{value:"S3",id:"s3",level:2},{value:"DynamoDB",id:"dynamodb",level:2}],u={toc:c};function d(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"storage"},"Storage"),(0,o.kt)("h2",{id:"s3"},"S3"),(0,o.kt)("p",null,"Use AWS S3 (Simple Storage Service) for saving objects like ",(0,o.kt)("em",{parentName:"p"},"images, videos, files, etc"),"."),(0,o.kt)("h2",{id:"dynamodb"},"DynamoDB"),(0,o.kt)("p",null,"Use DynamoDB when you want to store the document or ",(0,o.kt)("strong",{parentName:"p"},"key-value")," pair data."),(0,o.kt)("p",null,"It doesn\u2019t work well for relational operations. Although it can be used for the storage of binary objects, it was designed for the storage of structured textual/JSON data."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"S3 vs. DynamoDB",src:r(1387).Z,width:"1375",height:"1015"})),(0,o.kt)("center",null,"S3 vs DynamoDB (",(0,o.kt)("a",{href:"https://serverless.pub/s3-or-dynamodb"},"source"),") "))}d.isMDXComponent=!0},1387:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/s3ordynamo-7b44f5d67b6dc7bf413e6393d43a99da.png"}}]);