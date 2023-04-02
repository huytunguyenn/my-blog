"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[521],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>u});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=p(a),u=l,k=d["".concat(s,".").concat(u)]||d[u]||c[u]||r;return a?n.createElement(k,i(i({ref:t},m),{},{components:a})):n.createElement(k,i({ref:t},m))}));function u(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},7586:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var n=a(7462),l=(a(7294),a(3905));const r={sidebar_label:"logic & statements"},i="Conditional Logic, Block Statements and Looping",o={unversionedId:"learn/language/java/statements",id:"learn/language/java/statements",title:"Conditional Logic, Block Statements and Looping",description:"Arithmetic Operators",source:"@site/docs/learn/language/java/5-statements.mdx",sourceDirName:"learn/language/java",slug:"/learn/language/java/statements",permalink:"/my-blog/vi/docs/learn/language/java/statements",draft:!1,editUrl:"https://github.com/huytunguyenn/my-blog/tree/main/docs/learn/language/java/5-statements.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_label:"logic & statements"},sidebar:"docs",previous:{title:"data types",permalink:"/my-blog/vi/docs/learn/language/java/data-types"},next:{title:"collections",permalink:"/my-blog/vi/docs/learn/language/java/collections"}},s={},p=[{value:"Arithmetic Operators",id:"arithmetic-operators",level:2},{value:"Basic",id:"basic",level:3},{value:"Prefix &amp; Postfix",id:"prefix--postfix",level:3},{value:"Compound Assignment",id:"compound-assignment",level:3},{value:"Operator Precedence",id:"operator-precedence",level:3},{value:"Logical Operators",id:"logical-operators",level:2},{value:"Conditional Logical Operators",id:"conditional-logical-operators",level:3},{value:"Condition Logic",id:"condition-logic",level:2},{value:"Relational Operators",id:"relational-operators",level:3},{value:"Conditional Assignment",id:"conditional-assignment",level:3},{value:"If-else",id:"if-else",level:3},{value:"Block",id:"block",level:2},{value:"Block and Variable Scope",id:"block-and-variable-scope",level:3},{value:"Switch",id:"switch",level:2},{value:"Looping",id:"looping",level:2},{value:"While",id:"while",level:3},{value:"Do-while",id:"do-while",level:3},{value:"For",id:"for",level:3},{value:"For-each",id:"for-each",level:3}],m={toc:p};function c(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"conditional-logic-block-statements-and-looping"},"Conditional Logic, Block Statements and Looping"),(0,l.kt)("h2",{id:"arithmetic-operators"},"Arithmetic Operators"),(0,l.kt)("h3",{id:"basic"},"Basic"),(0,l.kt)("p",null,"Produce a result, no impact on values used."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"1 + 2 = 3\n5 - 4 = 1\n4 * 2 = 8\n13.0 / 5.0 = 2.6\n13 / 5 - 2\n13 % 5 = 3\n")),(0,l.kt)("h3",{id:"prefix--postfix"},"Prefix & Postfix"),(0,l.kt)("p",null,"Increase or decrease a value, replace original value."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"int a = 5;\nSystem.out.println(++a);  // 6\nSystem.out.println(a);    // 6\n\nint b = 5;\nSystem.out.println(b++);  // 5\nSystem.out.println(b);    // 6\n")),(0,l.kt)("h3",{id:"compound-assignment"},"Compound Assignment"),(0,l.kt)("p",null,"Operate on a value, replace original value."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"+= -= *= /= %=\n")),(0,l.kt)("h3",{id:"operator-precedence"},"Operator Precedence"),(0,l.kt)("p",null,"Postfix (",(0,l.kt)("inlineCode",{parentName:"p"},"X++"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"X--"),") ",(0,l.kt)("span",{parentName:"p",className:"math math-inline"},(0,l.kt)("span",{parentName:"span",className:"katex"},(0,l.kt)("span",{parentName:"span",className:"katex-mathml"},(0,l.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,l.kt)("semantics",{parentName:"math"},(0,l.kt)("mrow",{parentName:"semantics"},(0,l.kt)("mo",{parentName:"mrow"},"\u2192")),(0,l.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\rightarrow")))),(0,l.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,l.kt)("span",{parentName:"span",className:"base"},(0,l.kt)("span",{parentName:"span",className:"strut",style:{height:"0.3669em"}}),(0,l.kt)("span",{parentName:"span",className:"mrel"},"\u2192")))))," Prefix (",(0,l.kt)("inlineCode",{parentName:"p"},"++X"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"--X"),") ",(0,l.kt)("span",{parentName:"p",className:"math math-inline"},(0,l.kt)("span",{parentName:"span",className:"katex"},(0,l.kt)("span",{parentName:"span",className:"katex-mathml"},(0,l.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,l.kt)("semantics",{parentName:"math"},(0,l.kt)("mrow",{parentName:"semantics"},(0,l.kt)("mo",{parentName:"mrow"},"\u2192")),(0,l.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\rightarrow")))),(0,l.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,l.kt)("span",{parentName:"span",className:"base"},(0,l.kt)("span",{parentName:"span",className:"strut",style:{height:"0.3669em"}}),(0,l.kt)("span",{parentName:"span",className:"mrel"},"\u2192")))))," Multiplicative (",(0,l.kt)("inlineCode",{parentName:"p"},"*")," ",(0,l.kt)("inlineCode",{parentName:"p"},"/")," ",(0,l.kt)("inlineCode",{parentName:"p"},"%"),") ",(0,l.kt)("span",{parentName:"p",className:"math math-inline"},(0,l.kt)("span",{parentName:"span",className:"katex"},(0,l.kt)("span",{parentName:"span",className:"katex-mathml"},(0,l.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,l.kt)("semantics",{parentName:"math"},(0,l.kt)("mrow",{parentName:"semantics"},(0,l.kt)("mo",{parentName:"mrow"},"\u2192")),(0,l.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\rightarrow")))),(0,l.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,l.kt)("span",{parentName:"span",className:"base"},(0,l.kt)("span",{parentName:"span",className:"strut",style:{height:"0.3669em"}}),(0,l.kt)("span",{parentName:"span",className:"mrel"},"\u2192")))))," Additive (",(0,l.kt)("inlineCode",{parentName:"p"},"+")," ",(0,l.kt)("inlineCode",{parentName:"p"},"-"),")"),(0,l.kt)("h2",{id:"logical-operators"},"Logical Operators"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},"Operator"),(0,l.kt)("th",{parentName:"tr",align:null},"What resolves to true"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"AND"),(0,l.kt)("td",{parentName:"tr",align:null},"&"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true & true"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"OR"),(0,l.kt)("td",{parentName:"tr",align:null},"|"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false \\| true"),"  ",(0,l.kt)("inlineCode",{parentName:"td"},"true \\| false"),"  ",(0,l.kt)("inlineCode",{parentName:"td"},"true \\| true"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"XOR (exclusive or)"),(0,l.kt)("td",{parentName:"tr",align:null},"^"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false ^ true"),"  ",(0,l.kt)("inlineCode",{parentName:"td"},"true ^ false"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"NOT"),(0,l.kt)("td",{parentName:"tr",align:null},"!"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false"))))),(0,l.kt)("h3",{id:"conditional-logical-operators"},"Conditional Logical Operators"),(0,l.kt)("p",null,"Similar to standard logical operators. Right side executes only when needed:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"&&")," executes right only when left is ",(0,l.kt)("inlineCode",{parentName:"li"},"true")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"||")," executes right only when left is ",(0,l.kt)("inlineCode",{parentName:"li"},"false"))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},"Operator"),(0,l.kt)("th",{parentName:"tr",align:null},"What resolves to true"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"AND"),(0,l.kt)("td",{parentName:"tr",align:null},"&&"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true && true"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"OR"),(0,l.kt)("td",{parentName:"tr",align:null},"|","|"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false \\|\\| true"),"  ",(0,l.kt)("inlineCode",{parentName:"td"},"true \\|\\| ----"))))),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Q: So what's so different?")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"A:")," When you use ",(0,l.kt)("inlineCode",{parentName:"p"},"&"),", both sides are executed. With ",(0,l.kt)("inlineCode",{parentName:"p"},"&&"),", right side is not always be executed. Consider below example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"// this could crash if denom == 0, cause divided by 0 is not allowed\nif ( denom != 0 & numer / denom > 10 ) {\n}\n// so, you should do this\nif ( denom != 0 && numer / denom > 10 ) {\n}\n")),(0,l.kt)("h2",{id:"condition-logic"},"Condition Logic"),(0,l.kt)("h3",{id:"relational-operators"},"Relational Operators"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"> >= < <= == !=\n")),(0,l.kt)("h3",{id:"conditional-assignment"},"Conditional Assignment"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"result = condition ? true-value : false-value;\n")),(0,l.kt)("h3",{id:"if-else"},"If-else"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"if ( condition ) {\n  statement;\n}\nelse if ( condition ) {\n  statement;\n}\nelse {\n  statement;\n}\n")),(0,l.kt)("h2",{id:"block"},"Block"),(0,l.kt)("p",null,"Use ",(0,l.kt)("inlineCode",{parentName:"p"},"{")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"}")," to create block."),(0,l.kt)("h3",{id:"block-and-variable-scope"},"Block and Variable Scope"),(0,l.kt)("p",null,"Variable scope is limited to block."),(0,l.kt)("h2",{id:"switch"},"Switch"),(0,l.kt)("p",null,"Only primitive types supported (byte, short, int, long, char)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"switch (value-to-test) {\n  case matching-value-1:\n    statements\n    break;\n  .\n  .\n  .\n  case matching-value-N:\n    statements\n    break;\n  default:\n    statements\n}\n")),(0,l.kt)("h2",{id:"looping"},"Looping"),(0,l.kt)("h3",{id:"while"},"While"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"while ( condition ) {\n  statement;\n}\n")),(0,l.kt)("h3",{id:"do-while"},"Do-while"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"do {\n  statment;\n} while ( condition );\n")),(0,l.kt)("h3",{id:"for"},"For"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"for (initialize; condition; update) {\n  statement;\n}\n")),(0,l.kt)("h3",{id:"for-each"},"For-each"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"for ( loop-variable : array ) {\n  statement;\n}\n")))}c.isMDXComponent=!0}}]);