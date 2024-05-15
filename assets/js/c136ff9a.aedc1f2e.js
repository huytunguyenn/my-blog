"use strict";(self.webpackChunktu_website=self.webpackChunktu_website||[]).push([[8812],{7970:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>h,contentTitle:()=>s,default:()=>o,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var i=r(5893),t=r(1151);const a={sidebar_label:"dynamic array"},s="Dynamic array",l={id:"learn/language/python/dynamic-array",title:"Dynamic array",description:"Array is a collection of items of same data type stored at contiguous memory locations.",source:"@site/docs/learn/language/python/3-dynamic-array.mdx",sourceDirName:"learn/language/python",slug:"/learn/language/python/dynamic-array",permalink:"/my-blog/docs/learn/language/python/dynamic-array",draft:!1,unlisted:!1,editUrl:"https://github.com/huytunguyenn/my-blog/tree/main/docs/learn/language/python/3-dynamic-array.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"dynamic array"},sidebar:"docs",previous:{title:"basics",permalink:"/my-blog/docs/learn/language/python/function"},next:{title:"string",permalink:"/my-blog/docs/learn/language/python/string"}},h={},d=[{value:"Add element",id:"add-element",level:2},{value:"At the end",id:"at-the-end",level:3},{value:"At anywhere",id:"at-anywhere",level:3},{value:"Get array size",id:"get-array-size",level:2},{value:"Access element in array",id:"access-element-in-array",level:2},{value:"Delete element",id:"delete-element",level:2},{value:"At the end",id:"at-the-end-1",level:3},{value:"At anywhere",id:"at-anywhere-1",level:3},{value:"Delete all",id:"delete-all",level:3},{value:"Extend array",id:"extend-array",level:2},{value:"Reduce array",id:"reduce-array",level:2},{value:"Useful codes",id:"useful-codes",level:2},{value:"Check if an array is empty",id:"check-if-an-array-is-empty",level:3},{value:"Iterate over a list",id:"iterate-over-a-list",level:3},{value:"Iterate over a list in reverse order",id:"iterate-over-a-list-in-reverse-order",level:3}];function c(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"dynamic-array",children:"Dynamic array"}),"\n",(0,i.jsx)(n.p,{children:"Array is a collection of items of same data type stored at contiguous memory locations."}),"\n",(0,i.jsxs)(n.p,{children:["In Python, it's called ",(0,i.jsx)(n.strong,{children:"list"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"# -highlight-start\nfruits = []\nfruits = ['orange', 'apple', 'strawberry']\n# -highlight-end\n"})}),"\n",(0,i.jsx)(n.h2,{id:"add-element",children:"Add element"}),"\n",(0,i.jsx)(n.h3,{id:"at-the-end",children:"At the end"}),"\n",(0,i.jsxs)(n.p,{children:["Use ",(0,i.jsx)(n.code,{children:"append(item)"}),". The ",(0,i.jsx)(n.code,{children:"item"})," will be pushed back at the end of array."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"fruits = ['orange', 'apple', 'strawberry']\n# -highlight\nfruits.append('lemon')\n\n\n# highlight\n> fruits: ['orange', 'apple', 'strawberry', 'lemon']\n"})}),"\n",(0,i.jsx)(n.h3,{id:"at-anywhere",children:"At anywhere"}),"\n",(0,i.jsxs)(n.p,{children:["Use ",(0,i.jsx)(n.code,{children:"insert(pos, item)"}),". The ",(0,i.jsx)(n.code,{children:"item"})," will be inserted at position ",(0,i.jsx)(n.code,{children:"pos"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"fruits = ['orange', 'apple', 'strawberry']\n# -highlight\nfruits.insert(2, 'pineapple')\n\n\n# highlight\n> fruits: ['orange', 'apple', 'pineapple', 'strawberry']\n"})}),"\n",(0,i.jsx)(n.h2,{id:"get-array-size",children:"Get array size"}),"\n",(0,i.jsxs)(n.p,{children:["Use ",(0,i.jsx)(n.code,{children:"len(arr)"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"fruits = ['orange', 'apple', 'strawberry']\n# -highlight\nn = len(fruits)\n\n\n# highlight\n> n: 3\n"})}),"\n",(0,i.jsx)(n.h2,{id:"access-element-in-array",children:"Access element in array"}),"\n",(0,i.jsxs)(n.p,{children:["Use bracket notation",(0,i.jsx)(n.code,{children:"[index]"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"fruits = ['orange', 'apple', 'strawberry']\n# -highlight\nmy_pick = fruits[1]\n\n\n# highlight\n> my_pick: apple\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"index"})," can be negative."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"fruits = ['orange', 'apple', 'tangerine']\n# -highlight\norange_variety = fruits[-1]     # fruits[2]\n\n\n# highlight\n> orange_variety: tangerine\n"})}),"\n",(0,i.jsx)(n.h2,{id:"delete-element",children:"Delete element"}),"\n",(0,i.jsxs)(n.p,{children:["Use ",(0,i.jsx)(n.code,{children:"pop(index)"})]}),"\n",(0,i.jsx)(n.h3,{id:"at-the-end-1",children:"At the end"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"fruits = ['orange', 'apple', 'strawberry']\n# -highlight\nfruits.pop()\n\n\n# highlight\n> fruits: ['orange', 'apple']\n"})}),"\n",(0,i.jsx)(n.h3,{id:"at-anywhere-1",children:"At anywhere"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"fruits = ['orange', 'apple', 'strawberry']\n# -highlight\nfruits.pop(1)\n\n\n# highlight\n> fruits: ['orange', 'strawberry']\n"})}),"\n",(0,i.jsx)(n.h3,{id:"delete-all",children:"Delete all"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"fruits = ['orange', 'apple', 'strawberry']\n# -highlight\nfruits.clear()\n\n\n# highlight\n> fruits: []\n"})}),"\n",(0,i.jsx)(n.h2,{id:"extend-array",children:"Extend array"}),"\n",(0,i.jsxs)(n.p,{children:["Use ",(0,i.jsx)(n.code,{children:"list.extend(another_list)"})," to concat ",(0,i.jsx)(n.code,{children:"another_list"})," to the end of ",(0,i.jsx)(n.code,{children:"list"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"zeros = [0, 0, 0]\n# -highlight\nzeros.extend(2*[0])\n\n\n# highlight\n> zeros: [0, 0, 0, 0, 0]\n"})}),"\n",(0,i.jsx)(n.h2,{id:"reduce-array",children:"Reduce array"}),"\n",(0,i.jsx)(n.p,{children:"Use slicing to get a part of the array, then assign it to itself."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"nums = [0, 1, 2, 3, 4, 5]\n# -highlight\nnums = nums[0:2]\n\n\n# highlight\n> nums: [0, 1]\n"})}),"\n",(0,i.jsxs)(n.admonition,{type:"tip",children:[(0,i.jsxs)(n.p,{children:["When do ",(0,i.jsx)(n.code,{children:"arr[start:end]"}),", you can remember it as:"]}),(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:['"get me that ',(0,i.jsx)(n.code,{children:"arr"})," from ",(0,i.jsx)(n.code,{children:"start"})," to ",(0,i.jsx)(n.code,{children:"end"})," ",(0,i.jsx)(n.strong,{children:"but"})," ",(0,i.jsx)(n.code,{children:"end"}),'"']}),"\n"]})]}),"\n",(0,i.jsx)(n.h2,{id:"useful-codes",children:"Useful codes"}),"\n",(0,i.jsx)(n.h3,{id:"check-if-an-array-is-empty",children:"Check if an array is empty"}),"\n",(0,i.jsxs)(n.p,{children:["Check the ",(0,i.jsx)(n.code,{children:"len"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"arr = []\n# -highlight-start\nif len(arr) == 0:\n  print('Nothing is here!')\nelse:\n  print('Array is not empty!')\n# -highlight-end\n"})}),"\n",(0,i.jsx)(n.h3,{id:"iterate-over-a-list",children:"Iterate over a list"}),"\n",(0,i.jsxs)(n.p,{children:["Use ",(0,i.jsx)(n.code,{children:"range(len_of_arr)"})," to create range from 0 to len_of_arr - 1 with step = 1. Then loop through it."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"arr = [4 ,8 , 2, 0, 0]\n# -highlight-start\nfor i in range(len(arr)):\n  print(arr[i], end=' ')\n# -highlight-end\n\n\n# highlight\n> 4 8 2 0 0\n"})}),"\n",(0,i.jsx)(n.h3,{id:"iterate-over-a-list-in-reverse-order",children:"Iterate over a list in reverse order"}),"\n",(0,i.jsxs)(n.p,{children:["Use simple loop. Note that just like ",(0,i.jsx)(n.a,{href:"#reduce-array",children:"slicing array"}),", ",(0,i.jsx)(n.code,{children:"range(start, end, step)"}),' is like "get me from ',(0,i.jsx)(n.code,{children:"start"})," to ",(0,i.jsx)(n.code,{children:"end"})," but not take that ",(0,i.jsx)(n.code,{children:"end"}),'".']}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"arr = [4 ,8 , 2, 0, 0]\n# -highlight-start\nfor i in range(len(arr) - 1, -1, -1):\n  print(arr[i], end=' ')\n# -highlight-end\n\n\n# highlight\n> 0 0 2 8 4\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Or using ",(0,i.jsx)(n.code,{children:"reversed(array)"}),". The ",(0,i.jsx)(n.code,{children:"array"})," will not be affected."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"wordList = 'Python is great!'\n# -highlight-start\nfor i in reversed(wordList) :\n  print(i, end='')\n# -highlight-end\n\n# highlight\n> !taerg si nohtyP\n"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsxs)(n.p,{children:["Oh wait, isn't ",(0,i.jsx)(n.code,{children:"wordList"})," a string? Is it an array too?"]}),"\n",(0,i.jsx)(n.p,{children:"Well, it is. Let's go to next module. \ud83d\ude97"})]})}function o(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>l,a:()=>s});var i=r(7294);const t={},a=i.createContext(t);function s(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);