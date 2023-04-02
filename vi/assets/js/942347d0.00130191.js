"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7839],{3905:(e,a,n)=>{n.d(a,{Zo:()=>u,kt:()=>m});var t=n(7294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function c(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=t.createContext({}),s=function(e){var a=t.useContext(i),n=a;return e&&(n="function"==typeof e?e(a):l(l({},a),e)),n},u=function(e){var a=s(e.components);return t.createElement(i.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},g=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),g=s(n),m=r,d=g["".concat(i,".").concat(m)]||g[m]||p[m]||o;return n?t.createElement(d,l(l({ref:a},u),{},{components:n})):t.createElement(d,l({ref:a},u))}));function m(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=g;var c={};for(var i in a)hasOwnProperty.call(a,i)&&(c[i]=a[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var s=2;s<o;s++)l[s]=n[s];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}g.displayName="MDXCreateElement"},5886:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var t=n(7462),r=(n(7294),n(3905));const o={sidebar_label:"packages"},l="Packages",c={unversionedId:"learn/language/java/packages",id:"learn/language/java/packages",title:"Packages",description:"Packages provide organization.",source:"@site/docs/learn/language/java/8-packages.mdx",sourceDirName:"learn/language/java",slug:"/learn/language/java/packages",permalink:"/my-blog/vi/docs/learn/language/java/packages",draft:!1,editUrl:"https://github.com/huytunguyenn/my-blog/tree/main/docs/learn/language/java/8-packages.mdx",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_label:"packages"},sidebar:"docs",previous:{title:"methods",permalink:"/my-blog/vi/docs/learn/language/java/functions-methods"},next:{title:"classes & objects",permalink:"/my-blog/vi/docs/learn/language/java/classes-and-objects"}},i={},s=[],u={toc:s};function p(e){let{components:a,...n}=e;return(0,r.kt)("wrapper",(0,t.Z)({},u,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"packages"},"Packages"),(0,r.kt)("p",null,"Packages provide organization."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"package com.huytunguyenn.create;\n\npublic class Main {\n}\n")),(0,r.kt)("p",null,"Naming convention:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"all lowercase"),(0,r.kt)("li",{parentName:"ul"},"use reverse domain name notation to assure global uniqueness"),(0,r.kt)("li",{parentName:"ul"},"add further qualifiers to assure uniqueness within a company or group")),(0,r.kt)("p",null,"Type names are qualified by their package, e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"com.huytunguyenn.create.Main"),"."),(0,r.kt)("p",null,"It also affects source code organization:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"src\n |__com\n     |__huytunguyenn\n             |_______create\n                       |____Main\n")))}p.isMDXComponent=!0}}]);