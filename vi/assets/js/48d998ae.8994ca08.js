"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6106],{3905:(e,n,r)=>{r.d(n,{Zo:()=>p,kt:()=>u});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=t.createContext({}),s=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},p=function(e){var n=s(e.components);return t.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(r),u=a,g=d["".concat(c,".").concat(u)]||d[u]||m[u]||o;return r?t.createElement(g,i(i({ref:n},p),{},{components:r})):t.createElement(g,i({ref:n},p))}));function u(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},680:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var t=r(7462),a=(r(7294),r(3905));const o={sidebar_label:"npm & yarn"},i="Node Package Manager & Yarn",l={unversionedId:"learn/framework/nodejs/npm",id:"learn/framework/nodejs/npm",title:"Node Package Manager & Yarn",description:"NPM",source:"@site/docs/learn/framework/nodejs/4-npm.mdx",sourceDirName:"learn/framework/nodejs",slug:"/learn/framework/nodejs/npm",permalink:"/my-blog/vi/docs/learn/framework/nodejs/npm",draft:!1,editUrl:"https://github.com/huytunguyenn/my-blog/tree/main/docs/learn/framework/nodejs/4-npm.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_label:"npm & yarn"},sidebar:"docs",previous:{title:"repl & cli",permalink:"/my-blog/vi/docs/learn/framework/nodejs/repl"},next:{title:"modules",permalink:"/my-blog/vi/docs/learn/framework/nodejs/modules"}},c={},s=[{value:"NPM",id:"npm",level:2},{value:"<code>package.json</code> &amp; <code>package-lock.json</code>",id:"packagejson--package-lockjson",level:3},{value:"Semantic Versioning",id:"semantic-versioning",level:3},{value:"Installing &amp; Using",id:"installing--using",level:3},{value:"Creating &amp; Publishing",id:"creating--publishing",level:3},{value:"Npx",id:"npx",level:2},{value:"Yarn",id:"yarn",level:2}],p={toc:s};function m(e){let{components:n,...r}=e;return(0,a.kt)("wrapper",(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"node-package-manager--yarn"},"Node Package Manager & Yarn"),(0,a.kt)("h2",{id:"npm"},"NPM"),(0,a.kt)("h3",{id:"packagejson--package-lockjson"},(0,a.kt)("inlineCode",{parentName:"h3"},"package.json")," & ",(0,a.kt)("inlineCode",{parentName:"h3"},"package-lock.json")),(0,a.kt)("h3",{id:"semantic-versioning"},"Semantic Versioning"),(0,a.kt)("p",null,"SemVer"),(0,a.kt)("h3",{id:"installing--using"},"Installing & Using"),(0,a.kt)("h3",{id:"creating--publishing"},"Creating & Publishing"),(0,a.kt)("h2",{id:"npx"},"Npx"),(0,a.kt)("h2",{id:"yarn"},"Yarn"))}m.isMDXComponent=!0}}]);