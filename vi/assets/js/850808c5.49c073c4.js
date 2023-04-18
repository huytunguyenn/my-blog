"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6997],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(g,l(l({ref:t},c),{},{components:n})):r.createElement(g,l({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3093:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_label:"modules"},l="Modules",i={unversionedId:"learn/framework/nodejs/modules",id:"learn/framework/nodejs/modules",title:"Modules",description:"Fancy word for a file/folder that contains code.",source:"@site/docs/learn/framework/nodejs/5-modules.mdx",sourceDirName:"learn/framework/nodejs",slug:"/learn/framework/nodejs/modules",permalink:"/my-blog/vi/docs/learn/framework/nodejs/modules",draft:!1,editUrl:"https://github.com/huytunguyenn/my-blog/tree/main/docs/learn/framework/nodejs/5-modules.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_label:"modules"},sidebar:"docs",previous:{title:"npm & yarn",permalink:"/my-blog/vi/docs/learn/framework/nodejs/npm"},next:{title:"concurrency & async",permalink:"/my-blog/vi/docs/learn/framework/nodejs/concurrency"}},s={},p=[{value:"Node Modules",id:"node-modules",level:2},{value:"Types of API objects",id:"types-of-api-objects",level:2},{value:"Object",id:"object",level:3},{value:"Array, String, Function",id:"array-string-function",level:3},{value:"Global Object",id:"global-object",level:2},{value:"Errors &amp; Exceptions",id:"errors--exceptions",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"modules"},"Modules"),(0,o.kt)("p",null,"Fancy word for a file/folder that contains code."),(0,o.kt)("h2",{id:"node-modules"},"Node Modules"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"arguments")," keyword:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"function func() { console.log(arguments) }\nfunc(3, 4, 5, 6)\n")),(0,o.kt)("p",null,"Node is not only executing a line of code, it actually wraps the file with a function:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"console.log(arguments); // suppose this is at top level of the file\n")),(0,o.kt)("p",null,"it's actually like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// -highlight\nfunction _(exports, module, require, __filename, __dirname) {\n  console.log(arguments);\n  // -highlight\n  return module.exports;\n// -highlight\n}\n")),(0,o.kt)("p",null,"We usually use ",(0,o.kt)("inlineCode",{parentName:"p"},"exports")," keyword to export things, it's actually not a global keyword or something, it's just the first argument to the hidden wrapping function. Also, variables declared at top level are not global as well."),(0,o.kt)("p",null,"Browser don't like Node, it doesn't have hidden wrapping function, so variables declared at top level is global."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"exports")," is just alias of ",(0,o.kt)("inlineCode",{parentName:"p"},"module.exports"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"(exports, module, ...) { // Node does this wrap (module.exports, module, ...)\n  exports.a = 1\n  module.exports.b = 99\n  // if we do like this, we're not changing the module object, we just assign new pointer that no longer point to module.exports\n  exports = ...\n  // -error\n  exports = () => {}  // break the assignment reference\n  // -highlight\n  module.exports = () => {}  // ok because module.exports is actually what is being returned\n}\n")),(0,o.kt)("h2",{id:"types-of-api-objects"},"Types of API objects"),(0,o.kt)("h3",{id:"object"},"Object"),(0,o.kt)("p",null,"Top-level API is a simple object. So, no need to use ",(0,o.kt)("inlineCode",{parentName:"p"},"module.exports")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"exports.name = 'Tu'\nexports.age = 23\n\nconst me = require('./me')\nconsole.log(me.name, me.age)\n")),(0,o.kt)("h3",{id:"array-string-function"},"Array, String, Function"),(0,o.kt)("p",null,"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"module.exports"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"module.exports = [2, 3, 4, 7]\n")),(0,o.kt)("h2",{id:"global-object"},"Global Object"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"setTimeout()  // implies global.setTimeout()\n")),(0,o.kt)("p",null,"You can actually make object globally by attaching it to ",(0,o.kt)("inlineCode",{parentName:"p"},"global"),"."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Avoid doing that!")),(0,o.kt)("h2",{id:"errors--exceptions"},"Errors & Exceptions"),(0,o.kt)("p",null,'Error is "problem", exception is "condition".'))}u.isMDXComponent=!0}}]);