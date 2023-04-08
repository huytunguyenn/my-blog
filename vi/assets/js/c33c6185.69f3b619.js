"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8552],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,g=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(g,l(l({ref:t},u),{},{components:n})):a.createElement(g,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3324:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_label:"collections"},l="Collections",i={unversionedId:"learn/language/java/collections",id:"learn/language/java/collections",title:"Collections",description:"Data structure consisting of a collection of elements stored at contiguous memory locations.",source:"@site/docs/learn/language/java/6-collections.mdx",sourceDirName:"learn/language/java",slug:"/learn/language/java/collections",permalink:"/my-blog/vi/docs/learn/language/java/collections",draft:!1,editUrl:"https://github.com/huytunguyenn/my-blog/tree/main/docs/learn/language/java/6-collections.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_label:"collections"},sidebar:"docs",previous:{title:"logic & statements",permalink:"/my-blog/vi/docs/learn/language/java/logic-statements"},next:{title:"methods",permalink:"/my-blog/vi/docs/learn/language/java/functions-methods"}},s={},c=[{value:"Arrays",id:"arrays",level:2},{value:"Problems",id:"problems",level:2},{value:"Collection of Collections",id:"collection-of-collections",level:2},{value:"What to use?",id:"what-to-use",level:3},{value:"Lists - Collections with Iteration Order",id:"lists---collections-with-iteration-order",level:2},{value:"Maps - Collections of Pairs",id:"maps---collections-of-pairs",level:2},{value:"Java Streams",id:"java-streams",level:2},{value:"Collection Operations &amp; Factories",id:"collection-operations--factories",level:2},{value:"Sets - Collection with Uniqueness",id:"sets---collection-with-uniqueness",level:2}],u={toc:c};function p(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"collections"},"Collections"),(0,r.kt)("p",null,"Data structure consisting of a collection of elements stored at contiguous memory locations."),(0,r.kt)("p",null,"In Java, array variables are references. See more at ",(0,r.kt)("a",{parentName:"p",href:"/my-blog/vi/docs/learn/language/java/data-types#reference-types"},"References")," to learn more."),(0,r.kt)("h2",{id:"arrays"},"Arrays"),(0,r.kt)("p",null,"Arrays provide an ordered collection of elements. They're immutable."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"float[] theVals = new float[3];\nfloat[] theVals = { 10.0f, 20.0f, 15.0f };\n")),(0,r.kt)("h2",{id:"problems"},"Problems"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'private static Product[] add(Product product, Product[] array){\n  int length = array.length;\n  var newArray = Arrays.copyOf(array, length + 1);\n  newArray[length] = product;\n  return newArray;\n}\nvar door = new Product("Wooden Door", 35);\nvar floorPanel = new Product("Floor Panel", 25);\nvar window = new Product("Glass Window", 10);\n\n// Create\nProduct[] products = { door, floorPanel };\n// 1. Print\n// highlight\nSystem.out.println(products);\n// -highlight\nSystem.out.println(Arrays.toString(products));\n// 2. Add - complex code\n// -error\nproducts[2] = window;  // array is immutable\n// -highlight\nproducts = add(window, products);\n// 3. Duplicates - no way\n// highlight\nproducts = add(window, products);\n')),(0,r.kt)("p",null,"Implementing data structures is hard."),(0,r.kt)("h2",{id:"collection-of-collections"},"Collection of Collections"),(0,r.kt)("p",null,"Each collection has more than 2 different components."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Interfaces"),(0,r.kt)("th",{parentName:"tr",align:null},"Implementation"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Multiple data structures"),(0,r.kt)("td",{parentName:"tr",align:null},"Specific data structures")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Functional characteristics"),(0,r.kt)("td",{parentName:"tr",align:null},"Performance characteristics")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Prefer as variable type"),(0,r.kt)("td",{parentName:"tr",align:null},"Concrete and instantiable")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Often has a popular implementation"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"collections&#39; components",src:n(9067).Z,width:"994",height:"512"})),(0,r.kt)("h3",{id:"what-to-use"},"What to use?"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"collection decision tree",src:n(9395).Z,width:"1024",height:"556"})),(0,r.kt)("h2",{id:"lists---collections-with-iteration-order"},"Lists - Collections with Iteration Order"),(0,r.kt)("h2",{id:"maps---collections-of-pairs"},"Maps - Collections of Pairs"),(0,r.kt)("h2",{id:"java-streams"},"Java Streams"),(0,r.kt)("p",null,"Stream with no side effect at Capturing Local Variables"),(0,r.kt)("h2",{id:"collection-operations--factories"},"Collection Operations & Factories"),(0,r.kt)("h2",{id:"sets---collection-with-uniqueness"},"Sets - Collection with Uniqueness"))}p.isMDXComponent=!0},9395:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/collection-decision-tree-34a5a4c92093dd313d35e6c1673e10ab.png"},9067:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/collections-component-46f58113170db8f8d237a384f74b7944.png"}}]);