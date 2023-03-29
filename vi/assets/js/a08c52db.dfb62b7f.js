"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5459],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=s(n),d=r,h=c["".concat(p,".").concat(d)]||c[d]||u[d]||i;return n?a.createElement(h,l(l({ref:t},m),{},{components:n})):a.createElement(h,l({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8332:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_label:"cpp notes",description:"Summary some useful code snippets for competitive programming"},l="Code snippets (CPP version)",o={unversionedId:"learn/algorithm/CP-notes",id:"learn/algorithm/CP-notes",title:"Code snippets (CPP version)",description:"Summary some useful code snippets for competitive programming",source:"@site/docs/learn/algorithm/99-CP-notes.mdx",sourceDirName:"learn/algorithm",slug:"/learn/algorithm/CP-notes",permalink:"/my-blog/vi/docs/learn/algorithm/CP-notes",draft:!1,editUrl:"https://github.com/huytunguyenn/my-blog/tree/main/docs/learn/algorithm/99-CP-notes.mdx",tags:[],version:"current",sidebarPosition:99,frontMatter:{sidebar_label:"cpp notes",description:"Summary some useful code snippets for competitive programming"},sidebar:"docs",previous:{title:"prim",permalink:"/my-blog/vi/docs/learn/algorithm/prim"},next:{title:"architecture",permalink:"/my-blog/vi/docs/category/architecture"}},p={},s=[{value:"Input &amp; output",id:"input--output",level:2},{value:"Read integer input",id:"read-integer-input",level:3},{value:"Built-in functions",id:"built-in-functions",level:2},{value:"Max, min",id:"max-min",level:3},{value:"Sorting",id:"sorting",level:3},{value:"Using lambda",id:"using-lambda",level:3},{value:"Example:",id:"example",level:5},{value:"Array tips",id:"array-tips",level:2},{value:"Declare 2-dimension array",id:"declare-2-dimension-array",level:3},{value:"Declare",id:"declare",level:3},{value:"Examples",id:"examples",level:4},{value:"Data structures",id:"data-structures",level:2},{value:"Set",id:"set",level:2},{value:"Counter",id:"counter",level:3},{value:"Heap",id:"heap",level:2}],m={toc:s};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"code-snippets-cpp-version"},"Code snippets (CPP version)"),(0,r.kt)("p",null,"*",(0,r.kt)("em",{parentName:"p"},"CPP: competitive programming in Python")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Some code snippets in Python that I concluded so that I can do LeetCode faster.")),(0,r.kt)("h2",{id:"input--output"},"Input & output"),(0,r.kt)("p",null,"In some platforms like Codeforces or UVA, sometimes reading input is complicated if you're not familiar with it."),(0,r.kt)("h3",{id:"read-integer-input"},"Read integer input"),(0,r.kt)("p",null,"Read an integer in a line:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"n = int(input())\n")),(0,r.kt)("p",null,"Read many integers in a line:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# highlight\n9, 10\n\nna,nb = map(int, input().split())\n\n# highlight\n> na: 9, nb: 10\n")),(0,r.kt)("p",null,"Read many lines into an array, use ",(0,r.kt)("inlineCode",{parentName:"p"},"list(map(int, input().split()))"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# highlight-start\n2 4\n5 6\n# highlight-end\n\na = []\nfor i in range(2):\n  a.extend(list(map(int,input().split())))\n\n# highlight\n> a: [2, 4, 5, 6]\n")),(0,r.kt)("h2",{id:"built-in-functions"},"Built-in functions"),(0,r.kt)("p",null,"Python has many things that has built up for us. Why not using them?"),(0,r.kt)("h3",{id:"max-min"},"Max, min"),(0,r.kt)("p",null,"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"max"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"min")," for faster finding:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"current_max = max(current_max, array[i])\ncurrent_min = min(current_min, array[i])\n")),(0,r.kt)("h3",{id:"sorting"},"Sorting"),(0,r.kt)("p",null,"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"sort")," to sort array (mutable). The complexity is usually ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"O"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mi",{parentName:"mrow"},"N"),(0,r.kt)("mi",{parentName:"mrow"},"L"),(0,r.kt)("mi",{parentName:"mrow"},"O"),(0,r.kt)("mi",{parentName:"mrow"},"G"),(0,r.kt)("mi",{parentName:"mrow"},"N"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(NLOGN)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10903em"}},"N"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"L"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10903em"}},"OGN"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")"))))),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"arr.sort()\n")),(0,r.kt)("p",null,"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"sorted")," for immutable:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"sorted_arr = sorted(arr)\n")),(0,r.kt)("h3",{id:"using-lambda"},"Using lambda"),(0,r.kt)("p",null,"Lambda function is an anonymous function with 1 expression. You can prefer something like ",(0,r.kt)("inlineCode",{parentName:"p"},"(x) => x + 1")," in JavaScript for example."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"x = lambda a : a + 10\nprint(x(5)) # 15\n")),(0,r.kt)("p",null,"You can use lambda function with ",(0,r.kt)("inlineCode",{parentName:"p"},"map"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"filter"),", etc."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Note that ",(0,r.kt)("inlineCode",{parentName:"em"},"map")," returns map object so we have to convert it to array using ",(0,r.kt)("inlineCode",{parentName:"em"},"list()"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"arr = [1, 2, 3, 4, 5]\nlist(map(lambda n: n * 2, arr))\n\n# highlight\n> [2, 4, 6, 8, 10]\n")),(0,r.kt)("p",null,"One ",(0,r.kt)("em",{parentName:"p"},"example")," that we want addition of arrays.  For example, ","[1, 2, 1, 0]"," plus ","[0, 1, 2, 1]"," like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"}," 1 2 1 0\n 0 1 2 1\n 1 3 3 1 <-\n")),(0,r.kt)("p",null,"Simply add is not going to work:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"sum = [1, 2, 1, 0] + [0, 1, 2, 1]\n\n# highlight\n> sum: [1, 2, 1, 0, 0, 1, 2, 1]\n")),(0,r.kt)("p",null,"So we use ",(0,r.kt)("strong",{parentName:"p"},"lambda function")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"map()")," and convert it using ",(0,r.kt)("inlineCode",{parentName:"p"},"list()"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"arr1 = [1, 2, 1, 0]\narr2 = [0, 1, 2, 1]\nsum = list(map(lambda x, y: x + y, arr1, arr2))\n\n# highlight\n> sum: [1, 3, 3, 1]\n")),(0,r.kt)("h5",{id:"example"},"Example:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/pascals-triangle/"},"LeetCode 118: Pascal's Triangle"),", ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tu-learnspace/algorithms/blob/main/01-Dynamic-Array-%26-String/LC-118-Pascal's-Triangle.py"},"solution"),".")),(0,r.kt)("h2",{id:"array-tips"},"Array tips"),(0,r.kt)("h3",{id:"declare-2-dimension-array"},"Declare 2-dimension array"),(0,r.kt)("p",null,"Instead of:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"2d_arr = [0] * rows\nfor i in range(rows):\n  res[i] = [0] * cols\n\n# highlight-start\n# for example with rows = 3, cols = 4:\n[[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]\n0 0 0 0\n0 0 0 0\n0 0 0 0\n# highlight-end\n")),(0,r.kt)("p",null,"Do these:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"2d_arr = [[0 for _ in range(cols)] for _ in range(rows)]\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Note that we don't use")," ",(0,r.kt)("inlineCode",{parentName:"p"},"arr = [] * n"),(0,r.kt)("em",{parentName:"p"},", cause this is not create anything. So we had to have initial value for array.")),(0,r.kt)("h3",{id:"declare"},"Declare"),(0,r.kt)("p",null,"When we do things related to 2-D array, remember divide (",(0,r.kt)("inlineCode",{parentName:"p"},"//"),") and module (",(0,r.kt)("inlineCode",{parentName:"p"},"%"),")."),(0,r.kt)("h4",{id:"examples"},"Examples"),(0,r.kt)("h2",{id:"data-structures"},"Data structures"),(0,r.kt)("h2",{id:"set"},"Set"),(0,r.kt)("h3",{id:"counter"},"Counter"),(0,r.kt)("p",null,"When counter problems that requires counting elements repeat, etc. Example is the problem that ask for repeat of each character in a string."),(0,r.kt)("p",null,"We can use ",(0,r.kt)("inlineCode",{parentName:"p"},"Counter")," from ",(0,r.kt)("inlineCode",{parentName:"p"},"collections")," library, this data structure creates a dictionary that has element is ",(0,r.kt)("strong",{parentName:"p"},"key"),", ",(0,r.kt)("strong",{parentName:"p"},"value")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"count")," variable."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from collections import Counter\n\n# create dictionary stores <objects,counts> as <key,value>\ncnt = Counter('hello world')\n\ncnt['o']  # 2, count of character 'c'\ncnt['o'] += 1\n")),(0,r.kt)("h2",{id:"heap"},"Heap"))}u.isMDXComponent=!0}}]);