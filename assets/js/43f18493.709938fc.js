"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[671],{3905:(e,a,t)=>{t.d(a,{Zo:()=>o,kt:()=>i});var l=t(7294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);a&&(l=l.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,l)}return t}function u(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,l,n=function(e,a){if(null==e)return{};var t,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)t=r[l],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)t=r[l],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=l.createContext({}),c=function(e){var a=l.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):u(u({},a),e)),t},o=function(e){var a=c(e.components);return l.createElement(s.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return l.createElement(l.Fragment,{},a)}},d=l.forwardRef((function(e,a){var t=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),d=c(t),i=n,k=d["".concat(s,".").concat(i)]||d[i]||m[i]||r;return t?l.createElement(k,u(u({ref:a},o),{},{components:t})):l.createElement(k,u({ref:a},o))}));function i(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var r=t.length,u=new Array(r);u[0]=d;var p={};for(var s in a)hasOwnProperty.call(a,s)&&(p[s]=a[s]);p.originalType=e,p.mdxType="string"==typeof e?e:n,u[1]=p;for(var c=2;c<r;c++)u[c]=t[c];return l.createElement.apply(null,u)}return l.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5162:(e,a,t)=>{t.d(a,{Z:()=>u});var l=t(7294),n=t(6010);const r="tabItem_Ymn6";function u(e){let{children:a,hidden:t,className:u}=e;return l.createElement("div",{role:"tabpanel",className:(0,n.Z)(r,u),hidden:t},a)}},4866:(e,a,t)=>{t.d(a,{Z:()=>N});var l=t(7462),n=t(7294),r=t(6010),u=t(2466),p=t(6775),s=t(1980),c=t(7392),o=t(12);function m(e){return function(e){var a;return(null==(a=n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:a.filter(Boolean))??[]}(e).map((e=>{let{props:{value:a,label:t,attributes:l,default:n}}=e;return{value:a,label:t,attributes:l,default:n}}))}function d(e){const{values:a,children:t}=e;return(0,n.useMemo)((()=>{const e=a??m(t);return function(e){const a=(0,c.l)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,t])}function i(e){let{value:a,tabValues:t}=e;return t.some((e=>e.value===a))}function k(e){let{queryString:a=!1,groupId:t}=e;const l=(0,p.k6)(),r=function(e){let{queryString:a=!1,groupId:t}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:a,groupId:t});return[(0,s._X)(r),(0,n.useCallback)((e=>{if(!r)return;const a=new URLSearchParams(l.location.search);a.set(r,e),l.replace({...l.location,search:a.toString()})}),[r,l])]}function v(e){const{defaultValue:a,queryString:t=!1,groupId:l}=e,r=d(e),[u,p]=(0,n.useState)((()=>function(e){let{defaultValue:a,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!i({value:a,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const l=t.find((e=>e.default))??t[0];if(!l)throw new Error("Unexpected error: 0 tabValues");return l.value}({defaultValue:a,tabValues:r}))),[s,c]=k({queryString:t,groupId:l}),[m,v]=function(e){let{groupId:a}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(a),[l,r]=(0,o.Nk)(t);return[l,(0,n.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:l}),b=(()=>{const e=s??m;return i({value:e,tabValues:r})?e:null})();(0,n.useLayoutEffect)((()=>{b&&p(b)}),[b]);return{selectedValue:u,selectValue:(0,n.useCallback)((e=>{if(!i({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);p(e),c(e),v(e)}),[c,v,r]),tabValues:r}}var b=t(2389);const y="tabList__CuJ",g="tabItem_LNqP";function T(e){let{className:a,block:t,selectedValue:p,selectValue:s,tabValues:c}=e;const o=[],{blockElementScrollPositionUntilNextRender:m}=(0,u.o5)(),d=e=>{const a=e.currentTarget,t=o.indexOf(a),l=c[t].value;l!==p&&(m(a),s(l))},i=e=>{var a;let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=o.indexOf(e.currentTarget)+1;t=o[a]??o[0];break}case"ArrowLeft":{const a=o.indexOf(e.currentTarget)-1;t=o[a]??o[o.length-1];break}}null==(a=t)||a.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},a)},c.map((e=>{let{value:a,label:t,attributes:u}=e;return n.createElement("li",(0,l.Z)({role:"tab",tabIndex:p===a?0:-1,"aria-selected":p===a,key:a,ref:e=>o.push(e),onKeyDown:i,onClick:d},u,{className:(0,r.Z)("tabs__item",g,null==u?void 0:u.className,{"tabs__item--active":p===a})}),t??a)})))}function f(e){let{lazy:a,children:t,selectedValue:l}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(a){const e=r.find((e=>e.props.value===l));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},r.map(((e,a)=>(0,n.cloneElement)(e,{key:a,hidden:e.props.value!==l}))))}function h(e){const a=v(e);return n.createElement("div",{className:(0,r.Z)("tabs-container",y)},n.createElement(T,(0,l.Z)({},e,a)),n.createElement(f,(0,l.Z)({},e,a)))}function N(e){const a=(0,b.Z)();return n.createElement(h,(0,l.Z)({key:String(a)},e))}},9018:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>s,default:()=>i,frontMatter:()=>p,metadata:()=>c,toc:()=>m});var l=t(7462),n=(t(7294),t(3905)),r=t(4866),u=t(5162);const p={sidebar_label:"stack, queue",description:"Stack and queue"},s="Stack & Queue",c={unversionedId:"learn/data-structure/stack-queue",id:"learn/data-structure/stack-queue",title:"Stack & Queue",description:"Stack and queue",source:"@site/docs/learn/data-structure/3-stack-queue.mdx",sourceDirName:"learn/data-structure",slug:"/learn/data-structure/stack-queue",permalink:"/my-blog/docs/learn/data-structure/stack-queue",draft:!1,editUrl:"https://github.com/huytunguyenn/my-blog/tree/main/docs/learn/data-structure/3-stack-queue.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"stack, queue",description:"Stack and queue"},sidebar:"docs",previous:{title:"linked list",permalink:"/my-blog/docs/learn/data-structure/array-linked-list"},next:{title:"heap",permalink:"/my-blog/docs/learn/data-structure/heap"}},o={},m=[{value:"Stack",id:"stack",level:2},{value:"Declare",id:"declare",level:3},{value:"Add elements",id:"add-elements",level:3},{value:"Delete the most above element",id:"delete-the-most-above-element",level:3},{value:"Get value of most above element",id:"get-value-of-most-above-element",level:3},{value:"Get stack&#39;s size",id:"get-stacks-size",level:3},{value:"Check if stack is empty",id:"check-if-stack-is-empty",level:3},{value:"Swap 2 stacks",id:"swap-2-stacks",level:3},{value:"Queue",id:"queue",level:2},{value:"Declare",id:"declare-1",level:3},{value:"Add elements",id:"add-elements-1",level:3},{value:"Delete",id:"delete",level:3},{value:"Get value of the first element",id:"get-value-of-the-first-element",level:3},{value:"Get queue&#39;s size",id:"get-queues-size",level:3},{value:"Check if queue is empty",id:"check-if-queue-is-empty",level:3},{value:"Swap 2 queues",id:"swap-2-queues",level:3},{value:"Dequeue",id:"dequeue",level:2},{value:"Compare complexity",id:"compare-complexity",level:2}],d={toc:m};function i(e){let{components:a,...t}=e;return(0,n.kt)("wrapper",(0,l.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"stack--queue"},"Stack & Queue"),(0,n.kt)("h2",{id:"stack"},"Stack"),(0,n.kt)("p",null,"LIFO (Last In First Out)"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"}," 0  1  2\n[4, 7, 8]\n\n| 8 | 2\n| 7 | 1\n|_4_| 0\n")),(0,n.kt)("h3",{id:"declare"},"Declare"),(0,n.kt)(r.Z,{groupId:"stack",mdxType:"Tabs"},(0,n.kt)(u.Z,{value:"py",label:"Python",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-py"},"s = []\n"))),(0,n.kt)(u.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"import java.util.Stack;\n  \nStack<Integer> variable = new Stack<Integer>();\n"))),(0,n.kt)(u.Z,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <stack>\nusing namespace std;\n\nstack<int> s;\n")))),(0,n.kt)("h3",{id:"add-elements"},"Add elements"),(0,n.kt)(r.Z,{groupId:"stack",mdxType:"Tabs"},(0,n.kt)(u.Z,{value:"py",label:"Python",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-py"},"s = []\ns.push(1)\n"))),(0,n.kt)(u.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"Stack<Integer> s = new Stack<Integer>();\ns.push(1);\n"))),(0,n.kt)(u.Z,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"stack<int> s;\ns.push(1);\n")))),(0,n.kt)("h3",{id:"delete-the-most-above-element"},"Delete the most above element"),(0,n.kt)(r.Z,{groupId:"stack",mdxType:"Tabs"},(0,n.kt)(u.Z,{value:"py",label:"Python",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-py"},"value = s.pop();\n"))),(0,n.kt)(u.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"int value = s.pop();\n"))),(0,n.kt)(u.Z,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"s.pop();  // note that this doesn't return popped value\n")))),(0,n.kt)("h3",{id:"get-value-of-most-above-element"},"Get value of most above element"),(0,n.kt)(r.Z,{groupId:"stack",mdxType:"Tabs"},(0,n.kt)(u.Z,{value:"py",label:"Python",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-py"},"value = s[-1]\n"))),(0,n.kt)(u.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"int value = s.peek();\n"))),(0,n.kt)(u.Z,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"int value = s.top();\n")))),(0,n.kt)("h3",{id:"get-stacks-size"},"Get stack's size"),(0,n.kt)(r.Z,{groupId:"stack",mdxType:"Tabs"},(0,n.kt)(u.Z,{value:"py",label:"Python",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-py"},"n = len(s)\n"))),(0,n.kt)(u.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"int n = s.size();\n"))),(0,n.kt)(u.Z,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"int n = s.size();\n")))),(0,n.kt)("h3",{id:"check-if-stack-is-empty"},"Check if stack is empty"),(0,n.kt)(r.Z,{groupId:"stack",mdxType:"Tabs"},(0,n.kt)(u.Z,{value:"py",label:"Python",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-py"},"if len(s) == 0:\n  # statement\n"))),(0,n.kt)(u.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"if( s.empty() )\n  // statement\n"))),(0,n.kt)(u.Z,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"if( s.empt() == true)\n  // statement\n")))),(0,n.kt)("h3",{id:"swap-2-stacks"},"Swap 2 stacks"),(0,n.kt)(r.Z,{groupId:"stack",mdxType:"Tabs"},(0,n.kt)(u.Z,{value:"py",label:"Python",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-py"},"s1, s2 = s2, s1\n"))),(0,n.kt)(u.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"Stack<Integer> temp = s1;\ns1 = s2;\ns2 = temp;\n"))),(0,n.kt)(u.Z,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"s1.swap(s2);\n")))),(0,n.kt)("h2",{id:"queue"},"Queue"),(0,n.kt)("p",null,"FIFO (First In First Out)"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"   _________\n=>  4 3 2 1  =>\n   ---------\n")),(0,n.kt)("h3",{id:"declare-1"},"Declare"),(0,n.kt)(r.Z,{groupId:"queue",mdxType:"Tabs"},(0,n.kt)(u.Z,{value:"py",label:"Python",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-py"},"from queue import Queue\n\nq = Queue()\n"))),(0,n.kt)(u.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"// Queue in Java is just interface -> implement using LinkedList\nimport java.util.LinkedList;\nimport java.util.Queue;\n\nQueue<Integer> q = new LinkedList<Integer>();\n"))),(0,n.kt)(u.Z,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <queue>\nusing namespace std;\n\nqueue<int> q;\n")))),(0,n.kt)("h3",{id:"add-elements-1"},"Add elements"),(0,n.kt)(r.Z,{groupId:"queue",mdxType:"Tabs"},(0,n.kt)(u.Z,{value:"py",label:"Python",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-py"},"q.put(1)\n"))),(0,n.kt)(u.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"q.add(1); \nq.offer(2);\n"))),(0,n.kt)(u.Z,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"q.push(1);\n")))),(0,n.kt)("h3",{id:"delete"},"Delete"),(0,n.kt)(r.Z,{groupId:"queue",mdxType:"Tabs"},(0,n.kt)(u.Z,{value:"py",label:"Python",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-py"},"value = q.get()\n"))),(0,n.kt)(u.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"int value = q.remove();\n"))),(0,n.kt)(u.Z,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"q.pop();  // doesn't return value\n")))),(0,n.kt)("h3",{id:"get-value-of-the-first-element"},"Get value of the first element"),(0,n.kt)(r.Z,{groupId:"queue",mdxType:"Tabs"},(0,n.kt)(u.Z,{value:"py",label:"Python",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-py"},"value = q.queue[0]\n"))),(0,n.kt)(u.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"int value = q.peek();\n"))),(0,n.kt)(u.Z,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"int value = q.front();\n")))),(0,n.kt)("h3",{id:"get-queues-size"},"Get queue's size"),(0,n.kt)(r.Z,{groupId:"queue",mdxType:"Tabs"},(0,n.kt)(u.Z,{value:"py",label:"Python",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-py"},"n = q.qsize()\n"))),(0,n.kt)(u.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"int n = q.size();\n"))),(0,n.kt)(u.Z,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"int n = q.size();\n")))),(0,n.kt)("h3",{id:"check-if-queue-is-empty"},"Check if queue is empty"),(0,n.kt)(r.Z,{groupId:"queue",mdxType:"Tabs"},(0,n.kt)(u.Z,{value:"py",label:"Python",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-py"},"if q.empty():\n  # statement\n"))),(0,n.kt)(u.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"if( q.isEmpty() )\n  // statement\n"))),(0,n.kt)(u.Z,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"if( q.empty() == true ) \n  // statement\n")))),(0,n.kt)("h3",{id:"swap-2-queues"},"Swap 2 queues"),(0,n.kt)(r.Z,{groupId:"queue",mdxType:"Tabs"},(0,n.kt)(u.Z,{value:"py",label:"Python",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-py"},"q1, q2 = q2, q1\n"))),(0,n.kt)(u.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"Queue<Integer> temp = q1;\nq1 = q2;\nq2 = temp;\n"))),(0,n.kt)(u.Z,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"q1.swap(q2);\n")))),(0,n.kt)("h2",{id:"dequeue"},"Dequeue"),(0,n.kt)(r.Z,{groupId:"dequeue",mdxType:"Tabs"},(0,n.kt)(u.Z,{value:"py",label:"Python",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-py"},""))),(0,n.kt)(u.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},""))),(0,n.kt)(u.Z,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"")))),(0,n.kt)("h2",{id:"compare-complexity"},"Compare complexity"))}i.isMDXComponent=!0}}]);