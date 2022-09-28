"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[289],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},h=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,h=o(e,["components","mdxType","originalType","parentName"]),g=s(n),u=r,c=g["".concat(p,".").concat(u)]||g[u]||d[u]||i;return n?a.createElement(c,l(l({ref:t},h),{},{components:n})):a.createElement(c,l({ref:t},h))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=g;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},7561:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:3},l="Dynamic array",o={unversionedId:"learn/languages/python/dynamic-array",id:"learn/languages/python/dynamic-array",title:"Dynamic array",description:"Array is a collection of items of same data type stored at contiguous memory locations.",source:"@site/docs/learn/languages/python/dynamic-array.mdx",sourceDirName:"learn/languages/python",slug:"/learn/languages/python/dynamic-array",permalink:"/my-blog/docs/learn/languages/python/dynamic-array",draft:!1,editUrl:"https://github.com/huytunguyenn/my-blog/tree/main/docs/learn/languages/python/dynamic-array.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docs",previous:{title:"Basics",permalink:"/my-blog/docs/learn/languages/python/function"},next:{title:"String",permalink:"/my-blog/docs/learn/languages/python/string"}},p={},s=[{value:"Add element",id:"add-element",level:2},{value:"At the end",id:"at-the-end",level:3},{value:"At anywhere",id:"at-anywhere",level:3},{value:"Get array size",id:"get-array-size",level:2},{value:"Access element in array",id:"access-element-in-array",level:2},{value:"Delete element",id:"delete-element",level:2},{value:"At the end",id:"at-the-end-1",level:3},{value:"At anywhere",id:"at-anywhere-1",level:3},{value:"Delete all",id:"delete-all",level:3},{value:"Extend array",id:"extend-array",level:2},{value:"Reduce array",id:"reduce-array",level:2},{value:"Useful codes",id:"useful-codes",level:2},{value:"Check if an array is empty",id:"check-if-an-array-is-empty",level:3},{value:"Iterate over a list",id:"iterate-over-a-list",level:3},{value:"Iterate over a list in reverse order",id:"iterate-over-a-list-in-reverse-order",level:3}],h={toc:s};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"dynamic-array"},"Dynamic array"),(0,r.kt)("p",null,"Array is a collection of items of same data type stored at contiguous memory locations."),(0,r.kt)("p",null,"In Python, it's called ",(0,r.kt)("strong",{parentName:"p"},"list"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# -highlight-start\nfruits = []\nfruits = ['orange', 'apple', 'strawberry']\n# -highlight-end\n")),(0,r.kt)("h2",{id:"add-element"},"Add element"),(0,r.kt)("h3",{id:"at-the-end"},"At the end"),(0,r.kt)("p",null,"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"append(item)"),". The ",(0,r.kt)("inlineCode",{parentName:"p"},"item")," will be pushed back at the end of array."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"fruits = ['orange', 'apple', 'strawberry']\n# -highlight\nfruits.append('lemon')\n\n\n# highlight\n> fruits: ['orange', 'apple', 'strawberry', 'lemon']\n")),(0,r.kt)("h3",{id:"at-anywhere"},"At anywhere"),(0,r.kt)("p",null,"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"insert(pos, item)"),". The ",(0,r.kt)("inlineCode",{parentName:"p"},"item")," will be inserted at position ",(0,r.kt)("inlineCode",{parentName:"p"},"pos"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"fruits = ['orange', 'apple', 'strawberry']\n# -highlight\nfruits.insert(2, 'pineapple')\n\n\n# highlight\n> fruits: ['orange', 'apple', 'pineapple', 'strawberry']\n")),(0,r.kt)("h2",{id:"get-array-size"},"Get array size"),(0,r.kt)("p",null,"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"len(arr)"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"fruits = ['orange', 'apple', 'strawberry']\n# -highlight\nn = len(fruits)\n\n\n# highlight\n> n: 3\n")),(0,r.kt)("h2",{id:"access-element-in-array"},"Access element in array"),(0,r.kt)("p",null,"Use bracket notation",(0,r.kt)("inlineCode",{parentName:"p"},"[index]"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"fruits = ['orange', 'apple', 'strawberry']\n# -highlight\nmy_pick = fruits[1]\n\n\n# highlight\n> my_pick: apple\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"index")," can be negative."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"fruits = ['orange', 'apple', 'tangerine']\n# -highlight\norange_variety = fruits[-1]     # fruits[2]\n\n\n# highlight\n> orange_variety: tangerine\n")),(0,r.kt)("h2",{id:"delete-element"},"Delete element"),(0,r.kt)("p",null,"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"pop(index)")),(0,r.kt)("h3",{id:"at-the-end-1"},"At the end"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"fruits = ['orange', 'apple', 'strawberry']\n# -highlight\nfruits.pop()\n\n\n# highlight\n> fruits: ['orange', 'apple']\n")),(0,r.kt)("h3",{id:"at-anywhere-1"},"At anywhere"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"fruits = ['orange', 'apple', 'strawberry']\n# -highlight\nfruits.pop(1)\n\n\n# highlight\n> fruits: ['orange', 'strawberry']\n")),(0,r.kt)("h3",{id:"delete-all"},"Delete all"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"fruits = ['orange', 'apple', 'strawberry']\n# -highlight\nfruits.clear()\n\n\n# highlight\n> fruits: []\n")),(0,r.kt)("h2",{id:"extend-array"},"Extend array"),(0,r.kt)("p",null,"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"list.extend(another_list)")," to concat ",(0,r.kt)("inlineCode",{parentName:"p"},"another_list")," to the end of ",(0,r.kt)("inlineCode",{parentName:"p"},"list"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"zeros = [0, 0, 0]\n# -highlight\nzeros.extend(2*[0])\n\n\n# highlight\n> zeros: [0, 0, 0, 0, 0]\n")),(0,r.kt)("h2",{id:"reduce-array"},"Reduce array"),(0,r.kt)("p",null,"Use slicing to get a part of the array, then assign it to itself."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"nums = [0, 1, 2, 3, 4, 5]\n# -highlight\nnums = nums[0:2]\n\n\n# highlight\n> nums: [0, 1]\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"When do ",(0,r.kt)("inlineCode",{parentName:"p"},"arr[start:end]"),", you can remember it as:"),(0,r.kt)("blockquote",{parentName:"admonition"},(0,r.kt)("p",{parentName:"blockquote"},'"get me that ',(0,r.kt)("inlineCode",{parentName:"p"},"arr")," from ",(0,r.kt)("inlineCode",{parentName:"p"},"start")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"end")," ",(0,r.kt)("strong",{parentName:"p"},"but")," ",(0,r.kt)("inlineCode",{parentName:"p"},"end"),'"'))),(0,r.kt)("h2",{id:"useful-codes"},"Useful codes"),(0,r.kt)("h3",{id:"check-if-an-array-is-empty"},"Check if an array is empty"),(0,r.kt)("p",null,"Check the ",(0,r.kt)("inlineCode",{parentName:"p"},"len")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"arr = []\n# -highlight-start\nif len(arr) == 0:\n  print('Nothing is here!')\nelse:\n  print('Array is not empty!')\n# -highlight-end\n")),(0,r.kt)("h3",{id:"iterate-over-a-list"},"Iterate over a list"),(0,r.kt)("p",null,"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"range(len_of_arr)")," to create range from 0 to len_of_arr - 1 with step = 1. Then loop through it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"arr = [4 ,8 , 2, 0, 0]\n# -highlight-start\nfor i in range(len(arr)):\n  print(arr[i], end=' ')\n# -highlight-end\n\n\n# highlight\n> 4 8 2 0 0\n")),(0,r.kt)("h3",{id:"iterate-over-a-list-in-reverse-order"},"Iterate over a list in reverse order"),(0,r.kt)("p",null,"Use simple loop. Note that just like ",(0,r.kt)("a",{parentName:"p",href:"#reduce-array"},"slicing array"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"range(start, end, step)"),' is like "get me from ',(0,r.kt)("inlineCode",{parentName:"p"},"start")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"end")," but not take that ",(0,r.kt)("inlineCode",{parentName:"p"},"end"),'".'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"arr = [4 ,8 , 2, 0, 0]\n# -highlight-start\nfor i in range(len(arr) - 1, -1, -1):\n  print(arr[i], end=' ')\n# -highlight-end\n\n\n# highlight\n> 0 0 2 8 4\n")),(0,r.kt)("p",null,"Or using ",(0,r.kt)("inlineCode",{parentName:"p"},"reversed(array)"),". The ",(0,r.kt)("inlineCode",{parentName:"p"},"array")," will not be affected."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"wordList = 'Python is great!'\n# -highlight-start\nfor i in reversed(wordList) :\n  print(i, end='')\n# -highlight-end\n\n# highlight\n> !taerg si nohtyP\n")),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Oh wait, isn't ",(0,r.kt)("inlineCode",{parentName:"p"},"wordList")," a string? Is it an array too?"),(0,r.kt)("p",null,"Well, it is. Let's go to next module. \ud83d\ude97"))}d.isMDXComponent=!0}}]);