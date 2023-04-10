"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2722],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=p(n),g=r,c=u["".concat(o,".").concat(g)]||u[g]||d[g]||i;return n?a.createElement(c,l(l({ref:t},m),{},{components:n})):a.createElement(c,l({ref:t},m))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9916:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_label:"wrapper"},l="Wrapper Classes",s={unversionedId:"learn/language/java/wrapper-classes",id:"learn/language/java/wrapper-classes",title:"Wrapper Classes",description:"Primitive Wrappers",source:"@site/docs/learn/language/java/11-wrapper-classes.mdx",sourceDirName:"learn/language/java",slug:"/learn/language/java/wrapper-classes",permalink:"/my-blog/vi/docs/learn/language/java/wrapper-classes",draft:!1,editUrl:"https://github.com/huytunguyenn/my-blog/tree/main/docs/learn/language/java/11-wrapper-classes.mdx",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_label:"wrapper"},sidebar:"docs",previous:{title:"oop",permalink:"/my-blog/vi/docs/learn/language/java/oop"},next:{title:"advanced",permalink:"/my-blog/vi/docs/learn/language/java/advanced"}},o={},p=[{value:"Primitive Wrappers",id:"primitive-wrappers",level:2},{value:"Converting",id:"converting",level:3},{value:"Strings",id:"strings",level:2},{value:"String Class",id:"string-class",level:3},{value:"Equality",id:"equality",level:3},{value:"Interning string",id:"interning-string",level:3},{value:"Methods",id:"methods",level:3},{value:"Conversions",id:"conversions",level:3},{value:"StringBuilder",id:"stringbuilder",level:3},{value:"Formatting",id:"formatting",level:3}],m={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"wrapper-classes"},"Wrapper Classes"),(0,r.kt)("h2",{id:"primitive-wrappers"},"Primitive Wrappers"),(0,r.kt)("p",null,"Primitive data types represent data only, they are unable to provide methods for operating."),(0,r.kt)("p",null,(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mo",{parentName:"mrow"},"\u2192")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\rightarrow")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.3669em"}}),(0,r.kt)("span",{parentName:"span",className:"mrel"},"\u2192")))))," ",(0,r.kt)("strong",{parentName:"p"},"Wrapper classes"),". Each primitive type has a wrapper class:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"byte, short, int, long: ",(0,r.kt)("inlineCode",{parentName:"li"},"Byte"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Short"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Integer"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Long")),(0,r.kt)("li",{parentName:"ul"},"float, double: ",(0,r.kt)("inlineCode",{parentName:"li"},"Float"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Double")),(0,r.kt)("li",{parentName:"ul"},"char: ",(0,r.kt)("inlineCode",{parentName:"li"},"Character")),(0,r.kt)("li",{parentName:"ul"},"boolean: ",(0,r.kt)("inlineCode",{parentName:"li"},"Boolean"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"int valA = 10;\nInteger valB = 10;\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"valA")," is a primitive type, so it directly stores value of 10."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"valB")," is a reference type, it holds a reference, that reference refers to an instance of ",(0,r.kt)("inlineCode",{parentName:"li"},"Integer")," class.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"valA [10]\nvalB [] ------\x3e (20)\n")),(0,r.kt)("h3",{id:"converting"},"Converting"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"int valA = 10;\nInteger valB = 10;\nInteger valC = valA;  // boxing\nint valD = valB;  // unboxing\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Boxing"),": convert from primitive type to a wrapper class."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Unboxing"),": convert from a wrapper class to a primitive type.")),(0,r.kt)("p",null,"The wrappers have methods to convert, but Java compiler helps to do these conversions automatically with ",(0,r.kt)("strong",{parentName:"p"},"auto(un)boxing"),". Instead of doing this,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"int aPrimitive = 42;\nInteger anObject = new Integer(aPrimitive);\nmyList.add(anObject);  // suppose this method only accepts object parameter\n")),(0,r.kt)("p",null,"you can just do this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"int aPrimitive = 42;\nmyList.add(aPrimitive);  // auto: myList.add(new Integer(aPrimitive));\n\nInteger anObject = aPrimitive;  // auto: = new Integer(aPrimitive);\nint anotherPrimitive = anObject;  // auto: = anObject.intValue();\n")),(0,r.kt)("h2",{id:"strings"},"Strings"),(0,r.kt)("h3",{id:"string-class"},"String Class"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'String name = "Tu";\nString greeting = "Hello " + name;\ngreeting += " good to see you!";\n')),(0,r.kt)("p",null,"String variables do not directly hold the string value, it hold ",(0,r.kt)("strong",{parentName:"p"},"a reference")," to the instance of string."),(0,r.kt)("p",null,"String are immutable. So when we change the value, it actually creates a entirely new instance of the string."),(0,r.kt)("p",null,"This is how above code work under the hood:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"name  --------  | T | u |\n                | H | e | l | l | o |\n                | H | e | l | l | o | | T | u |\ngreeting -----  | H | e | l | l | o | | T | u | | g | o | o | d | | t | o | s | e | e | | y | o | u | ! |\n")),(0,r.kt)("h3",{id:"equality"},"Equality"),(0,r.kt)("p",null,"Equality operator ",(0,r.kt)("inlineCode",{parentName:"p"},"==")," check if both string variables reference the same string instance."),(0,r.kt)("p",null,"To perform character-by-character comparision, use ",(0,r.kt)("inlineCode",{parentName:"p"},"s.equal()"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'String s1 = "I love";\ns1 += " you";\nString s2 = "I";\ns2 += " love you";\n\nif( s1 == s2 ) { // false, this compare reference\n}\nif (s1.equals(s2)) { // true, compare value\n}\n')),(0,r.kt)("h3",{id:"interning-string"},"Interning string"),(0,r.kt)("p",null,"Interning a string will canonicalize value and enable reliable ",(0,r.kt)("inlineCode",{parentName:"p"},"=="),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// above example\nString s3 = s1.intern();\nString s4 = s2.intern();\n\nif ( s3 == s4 ){ // true\n}\n")),(0,r.kt)("p",null,"What it actually does:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"s1 --- abc\ns2 --- abc\n\ns3 --- abc (first time, search for interned version of s1, if no, create)\n    /\ns4 /       (next time, only need to reference to that interned version)\n")),(0,r.kt)("p",null,"We only should use ",(0,r.kt)("inlineCode",{parentName:"p"},"intern")," when we compare strings ",(0,r.kt)("strong",{parentName:"p"},"frequently"),"."),(0,r.kt)("h3",{id:"methods"},"Methods"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Operation"),(0,r.kt)("th",{parentName:"tr",align:null},"Methods"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Length"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"length"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Create new string(s) from existing"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"concat")," ",(0,r.kt)("inlineCode",{parentName:"td"},"replace")," ",(0,r.kt)("inlineCode",{parentName:"td"},"toLowerCase")," ",(0,r.kt)("inlineCode",{parentName:"td"},"toUpperCase")," ",(0,r.kt)("inlineCode",{parentName:"td"},"trim")," ",(0,r.kt)("inlineCode",{parentName:"td"},"split"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Extract substring"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"charAt")," ",(0,r.kt)("inlineCode",{parentName:"td"},"substring"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Test substring"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"contains")," ",(0,r.kt)("inlineCode",{parentName:"td"},"endsWith")," ",(0,r.kt)("inlineCode",{parentName:"td"},"startsWith")," ",(0,r.kt)("inlineCode",{parentName:"td"},"indexOf")," ",(0,r.kt)("inlineCode",{parentName:"td"},"lastIndexOf"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Comparison"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"equals")," ",(0,r.kt)("inlineCode",{parentName:"td"},"equalsIgnoreCase")," ",(0,r.kt)("inlineCode",{parentName:"td"},"isEmpty")," ",(0,r.kt)("inlineCode",{parentName:"td"},"compareTo")," ",(0,r.kt)("inlineCode",{parentName:"td"},"compareToIgnoreCase"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Formatting"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"format"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"String for non-string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"valueOf"))))),(0,r.kt)("h3",{id:"conversions"},"Conversions"),(0,r.kt)("h3",{id:"stringbuilder"},"StringBuilder"),(0,r.kt)("p",null,"Strings are immutable. So we have ",(0,r.kt)("inlineCode",{parentName:"p"},"StringBuilder"),", it provides mutable string buffer."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"StringBuilder")," itself is not a string, we need to convert it to a string."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'String title = "student";\nint age = 18;\n\nStringBuilder sb = new StringBuilder(34);\nsb.append("I am a ");\nsb.append(title);\nsb.append(" at ");\nsb.append(age);\n\nString str = sb.toString();  // "I am a student at 18"\n\nString major = "software engineering";\nint pos = sb.indexOf(" student");\nsb.insert(pos, major);\nsb.insert(pos, " ");\nString message = sb.toString();  // "I am a software engineering student at 18"\n')),(0,r.kt)("h3",{id:"formatting"},"Formatting"))}d.isMDXComponent=!0}}]);