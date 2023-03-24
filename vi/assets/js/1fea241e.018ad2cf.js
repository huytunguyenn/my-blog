"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4839],{3905:(e,t,n)=>{n.d(t,{Zo:()=>g,kt:()=>c});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},g=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),h=p(n),c=i,d=h["".concat(s,".").concat(c)]||h[c]||u[c]||r;return n?a.createElement(d,l(l({ref:t},g),{},{components:n})):a.createElement(d,l({ref:t},g))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8746:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const r={sidebar_position:4},l="String",o={unversionedId:"learn/languages/python/string",id:"learn/languages/python/string",title:"String",description:"String is a collection of items of same data type stored at contiguous memory locations.",source:"@site/i18n/vi/docusaurus-plugin-content-docs/current/learn/languages/python/string.mdx",sourceDirName:"learn/languages/python",slug:"/learn/languages/python/string",permalink:"/my-blog/vi/docs/learn/languages/python/string",draft:!1,editUrl:"https://github.com/huytunguyenn/my-blog/tree/main/docs/learn/languages/python/string.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docs",previous:{title:"M\u1ea3ng \u0111\u1ed9ng",permalink:"/my-blog/vi/docs/learn/languages/python/dynamic-array"},next:{title:"Summary some useful code snippets for competitive programming",permalink:"/my-blog/vi/docs/learn/languages/python/CP-notes"}},s={},p=[{value:"Declare",id:"declare",level:2},{value:"Basics",id:"basics",level:2},{value:"Get array size",id:"get-array-size",level:3},{value:"Check empty string",id:"check-empty-string",level:3},{value:"Insert",id:"insert",level:3},{value:"Delete",id:"delete",level:3},{value:"Find",id:"find",level:3},{value:"Get sub-string",id:"get-sub-string",level:3},{value:"Concat",id:"concat",level:3},{value:"Validation of string",id:"validation-of-string",level:2},{value:"ASCII tables",id:"ascii-tables",level:3},{value:"Check if character is a digit",id:"check-if-character-is-a-digit",level:3},{value:"Built-in functions",id:"built-in-functions",level:3},{value:"isalpha",id:"isalpha",level:4},{value:"isdigit",id:"isdigit",level:4},{value:"islower",id:"islower",level:4},{value:"isupper",id:"isupper",level:4},{value:"Normalization",id:"normalization",level:2},{value:"string to number",id:"string-to-number",level:3},{value:"number to string",id:"number-to-string",level:3},{value:"Input &amp; output",id:"input--output",level:2}],g={toc:p};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"string"},"String"),(0,i.kt)("p",null,"String is a collection of items of same data type stored at contiguous memory locations."),(0,i.kt)("p",null,(0,i.kt)("del",{parentName:"p"},"(deja vu enough?)")," Well, ",(0,i.kt)("strong",{parentName:"p"},"string is array"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},'Python strings are "immutable"')," which means they cannot be changed after they are created."),(0,i.kt)("h2",{id:"declare"},"Declare"),(0,i.kt)("p",null,"To declare a string, you can assign variable to empty string"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"# -highlight-start\ns = ''\n# -highlight-end\n")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"You can use ",(0,i.kt)("inlineCode",{parentName:"p"},"s = ''")," to delete all characters of the string")),(0,i.kt)("h2",{id:"basics"},"Basics"),(0,i.kt)("p",null,"Since, string is array, it has array's basic function."),(0,i.kt)("h3",{id:"get-array-size"},"Get array size"),(0,i.kt)("p",null,"Use ",(0,i.kt)("inlineCode",{parentName:"p"},"len(s)")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"s = 'Python'\n# -highlight-start\nlen(s)\n# -highlight-end\n\n\n# highlight\n> s: 6\n")),(0,i.kt)("h3",{id:"check-empty-string"},"Check empty string"),(0,i.kt)("p",null,"Check the ",(0,i.kt)("inlineCode",{parentName:"p"},"len"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"s = 'Python'\n# -highlight\nif len(s) == 0:\n  print('Nothing is here!')\nelse:\n  print('String is not empty!')\n")),(0,i.kt)("h3",{id:"insert"},"Insert"),(0,i.kt)("p",null,"Use slicing array. Common pattern is ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"str[:pos] + something + str[pos:]"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"s = 'Python'\ns2 = ' is great!'\n# -highlight-start\ns = s[:6] + s2 + s[6:]\n# -highlight-end\n\n\n# highlight\n> s: 'Python is great'\n")),(0,i.kt)("h3",{id:"delete"},"Delete"),(0,i.kt)("p",null,"Same as ",(0,i.kt)("a",{parentName:"p",href:"#insert"},"insert"),", use slicing array to delete. Common pattern is ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"str[:start] + str[end:]"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"s = 'Python is great'\n# -highlight\ns = s[:6] + s[14:]\n\n# highlight\n> s: 'Python'\n")),(0,i.kt)("h3",{id:"find"},"Find"),(0,i.kt)("p",null,"Use ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"find(string)")),". You can user ",(0,i.kt)("inlineCode",{parentName:"p"},"find(string, start, end)")," to find in a specific range."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"s = 'Python'\n# -highlight-start\nf = s.find('t')\nnf = s.find('z')\nr = s.find('t', 0, 1)\n# -highlight-end\n\n\n# highlight-start\n> f: 2\n> nf: -1\n> r: -1\n# highlight-end\n")),(0,i.kt)("h3",{id:"get-sub-string"},"Get sub-string"),(0,i.kt)("p",null,"Use ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"str[start:end]"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"# -highlight\n'Python'[1:3]\n\n\n# highlight\n> yt\n")),(0,i.kt)("h3",{id:"concat"},"Concat"),(0,i.kt)("p",null,"Use ",(0,i.kt)("inlineCode",{parentName:"p"},"+")," operator."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"# -highlight\n'Python ' + 'is great' + '!'\n\n\n# highlight\n> Python is great!\n")),(0,i.kt)("h2",{id:"validation-of-string"},"Validation of string"),(0,i.kt)("h3",{id:"ascii-tables"},"ASCII tables"),(0,i.kt)("p",null,"Lookup for ASCII table ",(0,i.kt)("a",{parentName:"p",href:"https:#www.lookuptables.com/text/ascii-table"},"here")," or ",(0,i.kt)("a",{parentName:"p",href:"http://www.asciichars.com/_site_media/ascii/ascii-chars-landscape.pdf"},"simply here"),"."),(0,i.kt)("h3",{id:"check-if-character-is-a-digit"},"Check if character is a digit"),(0,i.kt)("p",null,"You can use ",(0,i.kt)("inlineCode",{parentName:"p"},"ord(char)")," to get ASCII decimal number of a character."),(0,i.kt)("p",null,"Based on the ASCII table, you can see ",(0,i.kt)("strong",{parentName:"p"},"digits")," will have decimal number from ",(0,i.kt)("inlineCode",{parentName:"p"},"48"),", which is 0 to ",(0,i.kt)("inlineCode",{parentName:"p"},"57"),", which is 9."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"# -highlight\nif ord(str[0]) >= 48 and ord(str[0]) <= 57:\n    # it is a digit, do something\n")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Remember number for ASCII '0' is ",(0,i.kt)("strong",{parentName:"p"},"48"),"."),(0,i.kt)("p",{parentName:"admonition"},"Then, you know there is digits from 0 to 9, add more up to 9, which come up to 57.")),(0,i.kt)("p",null,"You can use ",(0,i.kt)("inlineCode",{parentName:"p"},"chr(number)")," to convert ASCII code to a character."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"# -highlight\nzero = chr(48)\n\n\n# highlight\n> 0\n")),(0,i.kt)("h3",{id:"built-in-functions"},"Built-in functions"),(0,i.kt)("p",null,"Python has some built-in libraries to do fun thing on string. How to use them is alike. Below is some examples:"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Python built-in functions can not only check a character but also a whole string.")),(0,i.kt)("h4",{id:"isalpha"},"isalpha"),(0,i.kt)("p",null,"Use built-in function ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"str.isalpha()")),". It will return ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," if string is alpha, ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," if not alpha or empty."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"str = 'Python is great!'\n# -highlight\nres = str[1].isalpha()\n\n\n# highlight\n> res: true\n")),(0,i.kt)("h4",{id:"isdigit"},"isdigit"),(0,i.kt)("h4",{id:"islower"},"islower"),(0,i.kt)("h4",{id:"isupper"},"isupper"),(0,i.kt)("h2",{id:"normalization"},"Normalization"),(0,i.kt)("h3",{id:"string-to-number"},"string to number"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"int(string)")),": int to string."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"float(string)")),": float to string.")),(0,i.kt)("h3",{id:"number-to-string"},"number to string"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"str(int)"))),(0,i.kt)("h3",{id:""}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"lower()")),": returns a string where all characters are lower case."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"upper()")),": returns a string where all characters are upper case.")),(0,i.kt)("h2",{id:"input--output"},"Input & output"))}u.isMDXComponent=!0}}]);