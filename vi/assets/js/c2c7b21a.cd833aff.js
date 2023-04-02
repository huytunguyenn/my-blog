"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2722],{3905:(e,a,t)=>{t.d(a,{Zo:()=>m,kt:()=>g});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=n.createContext({}),s=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},m=function(e){var a=s(e.components);return n.createElement(o.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),u=s(t),g=r,v=u["".concat(o,".").concat(g)]||u[g]||c[g]||l;return t?n.createElement(v,i(i({ref:a},m),{},{components:t})):n.createElement(v,i({ref:a},m))}));function g(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=u;var p={};for(var o in a)hasOwnProperty.call(a,o)&&(p[o]=a[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var s=2;s<l;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9916:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var n=t(7462),r=(t(7294),t(3905));const l={sidebar_label:"wrapper"},i="Wrapper Class",p={unversionedId:"learn/language/java/wrapper-classes",id:"learn/language/java/wrapper-classes",title:"Wrapper Class",description:"Primitive data types represent data only, they are unable to provide methods for operating.",source:"@site/docs/learn/language/java/11-wrapper-classes.mdx",sourceDirName:"learn/language/java",slug:"/learn/language/java/wrapper-classes",permalink:"/my-blog/vi/docs/learn/language/java/wrapper-classes",draft:!1,editUrl:"https://github.com/huytunguyenn/my-blog/tree/main/docs/learn/language/java/11-wrapper-classes.mdx",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_label:"wrapper"},sidebar:"docs",previous:{title:"oop",permalink:"/my-blog/vi/docs/learn/language/java/oop"},next:{title:"annotations",permalink:"/my-blog/vi/docs/learn/language/java/annotations"}},o={},s=[{value:"Primitive Wrappers",id:"primitive-wrappers",level:2},{value:"Converting",id:"converting",level:3}],m={toc:s};function c(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"wrapper-class"},"Wrapper Class"),(0,r.kt)("p",null,"Primitive data types represent data only, they are unable to provide methods for operating."),(0,r.kt)("p",null,(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mo",{parentName:"mrow"},"\u2192")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\rightarrow")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.3669em"}}),(0,r.kt)("span",{parentName:"span",className:"mrel"},"\u2192")))))," ",(0,r.kt)("strong",{parentName:"p"},"Wrapper classes"),". Each primitive type has a wrapper class:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"byte, short, int, long: ",(0,r.kt)("inlineCode",{parentName:"li"},"Byte"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Short"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Integer"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Long")),(0,r.kt)("li",{parentName:"ul"},"float, double: ",(0,r.kt)("inlineCode",{parentName:"li"},"Float"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Double")),(0,r.kt)("li",{parentName:"ul"},"char: ",(0,r.kt)("inlineCode",{parentName:"li"},"Character")),(0,r.kt)("li",{parentName:"ul"},"boolean: ",(0,r.kt)("inlineCode",{parentName:"li"},"Boolean"))),(0,r.kt)("h2",{id:"primitive-wrappers"},"Primitive Wrappers"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"int valA = 10;\nInteger valB = 10;\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"valA")," is a primitive type, so it directly stores value of 10."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"valB")," is a reference type, it holds a reference, that reference refers to an instance of ",(0,r.kt)("inlineCode",{parentName:"li"},"Integer")," class.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"valA [10]\nvalB [] ------\x3e (20)\n")),(0,r.kt)("h3",{id:"converting"},"Converting"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"int valA = 10;\nInteger valB = 10;\nInteger valC = valA;  // boxing\nint valD = valB;  // unboxing\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Boxing"),": convert from primitive type to a wrapper class."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Unboxing"),": convert from a wrapper class to a primitive type.")))}c.isMDXComponent=!0}}]);