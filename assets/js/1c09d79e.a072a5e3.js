"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9777],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),f=l(n),d=o,m=f["".concat(c,".").concat(d)]||f[d]||p[d]||i;return n?r.createElement(m,a(a({ref:t},s),{},{components:n})):r.createElement(m,a({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4521:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>u,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_position:1,description:"introduction to azure functions"},a="Intro",u={unversionedId:"learn/cloud/azure/function/intro",id:"learn/cloud/azure/function/intro",title:"Intro",description:"introduction to azure functions",source:"@site/docs/learn/cloud/azure/function/intro.mdx",sourceDirName:"learn/cloud/azure/function",slug:"/learn/cloud/azure/function/intro",permalink:"/my-blog/docs/learn/cloud/azure/function/intro",draft:!1,editUrl:"https://github.com/huytunguyenn/my-blog/tree/main/docs/learn/cloud/azure/function/intro.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"introduction to azure functions"},sidebar:"docs",previous:{title:"Azure Functions",permalink:"/my-blog/docs/category/azure-functions"},next:{title:"Code",permalink:"/my-blog/docs/learn/cloud/azure/function/code"}},c={},l=[{value:"Azure Functions",id:"azure-functions",level:2},{value:"Differences with Azure Virtual Machine &amp; Azure App Service",id:"differences-with-azure-virtual-machine--azure-app-service",level:4},{value:"Events",id:"events",level:3},{value:"Function App",id:"function-app",level:3}],s={toc:l};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"intro"},"Intro"),(0,o.kt)("h2",{id:"azure-functions"},"Azure Functions"),(0,o.kt)("p",null,"Sometimes, this referred to FaaS (Functions as a Service)."),(0,o.kt)("p",null,"With this we just need to focus on writing application. Help with rapid & simple development."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Azure Function = Events (Triggers) + Code")),(0,o.kt)("h4",{id:"differences-with-azure-virtual-machine--azure-app-service"},"Differences with Azure Virtual Machine & Azure App Service"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Azure Virtual Machine is IaaS (Infrastructure as a Service).")),(0,o.kt)("p",null,"-> Costly (server runs constantly), operational overhead (setup before running), patching & maintaining server, not auto-scaling."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Azure App Service is PaaS (Platform as a Service).")),(0,o.kt)("p",null,"-> ",(0,o.kt)("strong",{parentName:"p"},"Azure Functions")," is built on top of web jobs SDK & hosted on App Service platform."),(0,o.kt)("h3",{id:"events"},"Events"),(0,o.kt)("p",null,"Example:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Time: run task on a regular schedule"),(0,o.kt)("li",{parentName:"ul"},"Data: process message in a queue, new items in blob storage"),(0,o.kt)("li",{parentName:"ul"},"Web: respond to HTTP request/web-hook")),(0,o.kt)("h3",{id:"function-app"},"Function App"),(0,o.kt)("p",null,"Azure Functions group related functions together into a function app -> share configuration & local resources."))}p.isMDXComponent=!0}}]);