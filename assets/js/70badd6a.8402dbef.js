"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[396],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=p(n),u=i,d=s["".concat(c,".").concat(u)]||s[u]||h[u]||a;return n?r.createElement(d,l(l({ref:t},m),{},{components:n})):r.createElement(d,l({ref:t},m))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=s;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},1431:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var r=n(7462),i=(n(7294),n(3905));const a={sidebar_position:8,description:"Binary search algorithm"},l="Binary search",o={unversionedId:"learn/algorithms/binary-search",id:"learn/algorithms/binary-search",title:"Binary search",description:"Binary search algorithm",source:"@site/docs/learn/algorithms/binary-search.mdx",sourceDirName:"learn/algorithms",slug:"/learn/algorithms/binary-search",permalink:"/my-blog/docs/learn/algorithms/binary-search",draft:!1,editUrl:"https://github.com/huytunguyenn/my-blog/tree/main/docs/learn/algorithms/binary-search.mdx",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8,description:"Binary search algorithm"},sidebar:"docs",previous:{title:"String problems",permalink:"/my-blog/docs/learn/algorithms/string"},next:{title:"Architecture",permalink:"/my-blog/docs/category/architecture"}},c={},p=[{value:"B\xe0i to\xe1n",id:"b\xe0i-to\xe1n",level:2},{value:"\xdd t\u01b0\u1edfng",id:"\xfd-t\u01b0\u1edfng",level:2},{value:"Code",id:"code",level:2},{value:"Q&amp;A",id:"qa",level:2},{value:"\u1ee8ng d\u1ee5ng",id:"\u1ee9ng-d\u1ee5ng",level:2},{value:"T\xecm",id:"t\xecm",level:3}],m={toc:p};function h(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"binary-search"},"Binary search"),(0,i.kt)("h2",{id:"b\xe0i-to\xe1n"},"B\xe0i to\xe1n"),(0,i.kt)("p",null,"T\xecm ki\u1ebfm ph\u1ea7n t\u1eed trong m\u1ed9t d\xe3y li\xean ti\u1ebfp. \u0110\xe2y l\xe0 b\xe0i to\xe1n \u0111\u01a1n gi\u1ea3n, tuy nhi\xean, \u0111\u1ec3 th\u1ef1c thi m\u1ed9t c\xe1ch hi\u1ec7u qu\u1ea3 (ti\u1ebft ki\u1ec7m chi ph\xed) th\xec c\u1ea7n thu\u1eadt to\xe1n & h\u01b0\u1edbng ti\u1ebfp c\u1eadn c\u1ee5 th\u1ec3."),(0,i.kt)("h2",{id:"\xfd-t\u01b0\u1edfng"},"\xdd t\u01b0\u1edfng"),(0,i.kt)("p",null,"Ta s\u1eafp x\u1ebfp m\u1ea3ng theo th\u1ee9 t\u1ef1 t\u0103ng d\u1ea7n."),(0,i.kt)("p",null,"Sau \u0111\xf3, ch\u1ecdn \u0111i\u1ec3m ",(0,i.kt)("inlineCode",{parentName:"p"},"mid")," \u1edf gi\u1eefa m\u1ea3ng, xem coi n\xf3 c\xf3 b\u1eb1ng v\u1edbi ph\u1ea7n t\u1eed m\xecnh c\u1ea7n t\xecm kh\xf4ng. N\u1ebfu c\xf3, b\xe0i to\xe1n k\u1ebft th\xfac."),(0,i.kt)("p",null,"N\u1ebfu kh\xf4ng:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Nh\u1ecf h\u01a1n: ngh\u0129a l\xe0 c\u1ea7n t\xecm kho\u1ea3ng c\xf3 gi\xe1 tr\u1ecb l\u1edbn h\u01a1n n\u1eefa -> \u0111i v\u1ec1 ph\xeda tay ph\u1ea3i -> ",(0,i.kt)("inlineCode",{parentName:"li"},"right = mid + 1")),(0,i.kt)("li",{parentName:"ul"},"L\u1edbn h\u01a1n: ngh\u0129a l\xe0 c\u1ea7n t\xecm kho\u1ea3ng c\xf3 gi\xe1 tr\u1ecb nh\u1ecf h\u01a1n n\u1eefa -> \u0111i v\u1ec1 ph\xeda tay tr\xe1i -> ",(0,i.kt)("inlineCode",{parentName:"li"},"left = mid - 1"))),(0,i.kt)("h2",{id:"code"},"Code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'"""\nFind position of x in items from [left, right] range, if no return -1\n"""\ndef binary_search(arr, x):\n  left = 0\n  right = len(arr) - 1\n\n  while left <= right:\n    mid = left + (right - left) // 2\n\n    if arr[mid] == x:\n      return mid\n    elif arr[mid] < x:\n      left = mid + 1\n    else:\n      right = mid - 1\n\n  return -1\n')),(0,i.kt)("p",null,"Recursion way:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"def binray_search(arr, left, right, x):\n  if left <= right:\n    mid = left + (right - left) // 2\n    if arr[mid] == x:\n      return mid\n    elif arr[mid] > x:\n      return binary_search(arr, left, mid - 1, x)\n    return binray_search(arr, mid + 1, right, x)\n  return -1\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"}," \u0110\u1ed9 ph\u1ee9c t\u1ea1p: O() ")),(0,i.kt)("h2",{id:"qa"},"Q&A"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Q: What is that ",(0,i.kt)("inlineCode",{parentName:"strong"},"mid"),"?")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"A:")," The middle number of the elements. To easily find ",(0,i.kt)("inlineCode",{parentName:"p"},"mid"),", you can use ",(0,i.kt)("inlineCode",{parentName:"p"},"(left + right) / 2"),".\nBut you can see that the addition ",(0,i.kt)("inlineCode",{parentName:"p"},"left + right")," could potentially cause overflow, so we can use another way:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"(left + right)/2\n= left/2 + right/2\n= left - left/2 + right/2\n= left + (right-left)/2\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Q: ")),(0,i.kt)("p",null,"A:"),(0,i.kt)("h2",{id:"\u1ee9ng-d\u1ee5ng"},"\u1ee8ng d\u1ee5ng"),(0,i.kt)("h3",{id:"t\xecm"},"T\xecm"))}h.isMDXComponent=!0}}]);