"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[118],{3905:(e,n,t)=>{t.d(n,{Zo:()=>g,kt:()=>s});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),i=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},g=function(e){var n=i(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,g=u(e,["components","mdxType","originalType","parentName"]),m=i(t),s=a,d=m["".concat(c,".").concat(s)]||m[s]||p[s]||o;return t?r.createElement(d,l(l({ref:n},g),{},{components:t})):r.createElement(d,l({ref:n},g))}));function s(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=m;var u={};for(var c in n)hasOwnProperty.call(n,c)&&(u[c]=n[c]);u.originalType=e,u.mdxType="string"==typeof e?e:a,l[1]=u;for(var i=2;i<o;i++)l[i]=t[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2694:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>u,toc:()=>i});var r=t(7462),a=(t(7294),t(3905));const o={},l="Function and method",u={unversionedId:"learn/language/golang/function-method",id:"learn/language/golang/function-method",title:"Function and method",description:"The procedural programming concept in Go.",source:"@site/docs/learn/language/golang/7-function-method.mdx",sourceDirName:"learn/language/golang",slug:"/learn/language/golang/function-method",permalink:"/my-blog/docs/learn/language/golang/function-method",draft:!1,editUrl:"https://github.com/huytunguyenn/my-blog/tree/main/docs/learn/language/golang/7-function-method.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{},sidebar:"docs",previous:{title:"Collection",permalink:"/my-blog/docs/learn/language/golang/collection"},next:{title:"Package",permalink:"/my-blog/docs/learn/language/golang/package"}},c={},i=[{value:"Function",id:"function",level:2},{value:"Argument &amp; parameter",id:"argument--parameter",level:3},{value:"Returning result",id:"returning-result",level:3},{value:"Method",id:"method",level:2},{value:"Interface",id:"interface",level:2}],g={toc:i};function p(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"function-and-method"},"Function and method"),(0,a.kt)("p",null,"The procedural programming concept in Go."),(0,a.kt)("h2",{id:"function"},"Function"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"func main () {\n}\n")),(0,a.kt)("p",null,"Curly braces need to be on the same line:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"// -error\nfunc main ()\n{\n}\n")),(0,a.kt)("h3",{id:"argument--parameter"},"Argument & parameter"),(0,a.kt)("p",null,"They're basically the same. Parameter is when defines, argument is when uses."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"func main () {\n  num := 42\n  fooFunc(num)\n}\n\nfunc fooFunc (argument int) { // name followed by data type\n  println(argument)\n}\n")),(0,a.kt)("p",null,"You can shorten parameter list."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"func fooFunc (arg1 int, arg2 int) {\n}\n// shortcut\nfunc fooFunc (arg1, arg2 int) {\n}\n")),(0,a.kt)("h3",{id:"returning-result"},"Returning result"),(0,a.kt)("h2",{id:"method"},"Method"),(0,a.kt)("p",null,"This is a little of object-oriented programming where we can add behaviors to the types that we create."),(0,a.kt)("h2",{id:"interface"},"Interface"))}p.isMDXComponent=!0}}]);