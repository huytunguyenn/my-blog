"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8596],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),g=s(r),m=a,y=g["".concat(c,".").concat(m)]||g[m]||p[m]||l;return r?n.createElement(y,o(o({ref:t},u),{},{components:r})):n.createElement(y,o({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=g;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},7250:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const l={sidebar_position:5},o="Collection",i={unversionedId:"learn/languages/golang/collection",id:"learn/languages/golang/collection",title:"Collection",description:"Array",source:"@site/docs/learn/languages/golang/collection.mdx",sourceDirName:"learn/languages/golang",slug:"/learn/languages/golang/collection",permalink:"/my-blog/docs/learn/languages/golang/collection",draft:!1,editUrl:"https://github.com/huytunguyenn/my-blog/tree/main/docs/learn/languages/golang/collection.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"docs",previous:{title:"Data types",permalink:"/my-blog/docs/learn/languages/golang/data-types"},next:{title:"Package",permalink:"/my-blog/docs/learn/languages/golang/package"}},c={},s=[{value:"Array",id:"array",level:2},{value:"Slice",id:"slice",level:2},{value:"Map",id:"map",level:2},{value:"Struct",id:"struct",level:2}],u={toc:s};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"collection"},"Collection"),(0,a.kt)("h2",{id:"array"},"Array"),(0,a.kt)("p",null,"An array in Go is a fixed sized entity. All elements in an array must have same type."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"var arr [3]int\narr[0] = 1\narr[1] = 2\narr[2] = 3\nfmt.Println(arr)\n\narr2 := [3]int{1, 2, 3}\nfmt.Println(arr2)\n")),(0,a.kt)("h2",{id:"slice"},"Slice"),(0,a.kt)("p",null,"Slice is built on top of array. It is like array, but ",(0,a.kt)("em",{parentName:"p"},"dynamically sized")," and offer up a lot of really ",(0,a.kt)("em",{parentName:"p"},"neat attributes")," <- ",(0,a.kt)("strong",{parentName:"p"},"used more than array")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"arr2 := [3]int{1, 2, 3}\nslice := arr[:] // [:] means from start to end\n")),(0,a.kt)("h2",{id:"map"},"Map"),(0,a.kt)("p",null,"Key-value relationship."),(0,a.kt)("h2",{id:"struct"},"Struct"),(0,a.kt)("p",null,"Go doesn't have class, but it has ",(0,a.kt)("inlineCode",{parentName:"p"},"struct"),"."))}p.isMDXComponent=!0}}]);