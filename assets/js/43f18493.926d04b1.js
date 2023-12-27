"use strict";(self.webpackChunktu_website=self.webpackChunktu_website||[]).push([[671],{3074:(e,a,l)=>{l.r(a),l.d(a,{assets:()=>d,contentTitle:()=>u,default:()=>p,frontMatter:()=>c,metadata:()=>i,toc:()=>o});var n=l(5893),s=l(1151),r=l(4866),t=l(5162);const c={sidebar_label:"stack / queue",description:"Stack and queue"},u="Stack & Queue",i={id:"learn/data-structure/stack-queue",title:"Stack & Queue",description:"Stack and queue",source:"@site/docs/learn/data-structure/3-stack-queue.mdx",sourceDirName:"learn/data-structure",slug:"/learn/data-structure/stack-queue",permalink:"/my-blog/docs/learn/data-structure/stack-queue",draft:!1,unlisted:!1,editUrl:"https://github.com/huytunguyenn/my-blog/tree/main/docs/learn/data-structure/3-stack-queue.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"stack / queue",description:"Stack and queue"},sidebar:"docs",previous:{title:"linked list",permalink:"/my-blog/docs/learn/data-structure/array-linked-list"},next:{title:"heap",permalink:"/my-blog/docs/learn/data-structure/heap"}},d={},o=[{value:"Stack",id:"stack",level:2},{value:"Declare",id:"declare",level:3},{value:"Add elements",id:"add-elements",level:3},{value:"Delete the most above element",id:"delete-the-most-above-element",level:3},{value:"Get value of most above element",id:"get-value-of-most-above-element",level:3},{value:"Get stack&#39;s size",id:"get-stacks-size",level:3},{value:"Check if stack is empty",id:"check-if-stack-is-empty",level:3},{value:"Swap 2 stacks",id:"swap-2-stacks",level:3},{value:"Queue",id:"queue",level:2},{value:"Declare",id:"declare-1",level:3},{value:"Add elements",id:"add-elements-1",level:3},{value:"Delete",id:"delete",level:3},{value:"Get value of the first element",id:"get-value-of-the-first-element",level:3},{value:"Get queue&#39;s size",id:"get-queues-size",level:3},{value:"Check if queue is empty",id:"check-if-queue-is-empty",level:3},{value:"Swap 2 queues",id:"swap-2-queues",level:3},{value:"Dequeue",id:"dequeue",level:2},{value:"Compare complexity",id:"compare-complexity",level:2}];function h(e){const a={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h1,{id:"stack--queue",children:"Stack & Queue"}),"\n",(0,n.jsx)(a.h2,{id:"stack",children:"Stack"}),"\n",(0,n.jsx)(a.p,{children:"LIFO (Last In First Out)"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:" 0  1  2\n[4, 7, 8]\n\n| 8 | 2\n| 7 | 1\n|_4_| 0\n"})}),"\n",(0,n.jsx)(a.h3,{id:"declare",children:"Declare"}),"\n",(0,n.jsxs)(r.Z,{groupId:"stack",children:[(0,n.jsx)(t.Z,{value:"py",label:"Python",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-py",children:"s = []\n"})})}),(0,n.jsx)(t.Z,{value:"java",label:"Java",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-java",children:"import java.util.Stack;\n\nStack<Integer> variable = new Stack<Integer>();\n"})})}),(0,n.jsx)(t.Z,{value:"cpp",label:"C++",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-cpp",children:"#include <stack>\nusing namespace std;\n\nstack<int> s;\n"})})})]}),"\n",(0,n.jsx)(a.h3,{id:"add-elements",children:"Add elements"}),"\n",(0,n.jsxs)(r.Z,{groupId:"stack",children:[(0,n.jsx)(t.Z,{value:"py",label:"Python",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-py",children:"s = []\ns.push(1)\n"})})}),(0,n.jsx)(t.Z,{value:"java",label:"Java",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-java",children:"Stack<Integer> s = new Stack<Integer>();\ns.push(1);\n"})})}),(0,n.jsx)(t.Z,{value:"cpp",label:"C++",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-cpp",children:"stack<int> s;\ns.push(1);\n"})})})]}),"\n",(0,n.jsx)(a.h3,{id:"delete-the-most-above-element",children:"Delete the most above element"}),"\n",(0,n.jsxs)(r.Z,{groupId:"stack",children:[(0,n.jsx)(t.Z,{value:"py",label:"Python",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-py",children:"value = s.pop();\n"})})}),(0,n.jsx)(t.Z,{value:"java",label:"Java",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-java",children:"int value = s.pop();\n"})})}),(0,n.jsx)(t.Z,{value:"cpp",label:"C++",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-cpp",children:"s.pop();  // note that this doesn't return popped value\n"})})})]}),"\n",(0,n.jsx)(a.h3,{id:"get-value-of-most-above-element",children:"Get value of most above element"}),"\n",(0,n.jsxs)(r.Z,{groupId:"stack",children:[(0,n.jsx)(t.Z,{value:"py",label:"Python",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-py",children:"value = s[-1]\n"})})}),(0,n.jsx)(t.Z,{value:"java",label:"Java",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-java",children:"int value = s.peek();\n"})})}),(0,n.jsx)(t.Z,{value:"cpp",label:"C++",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-cpp",children:"int value = s.top();\n"})})})]}),"\n",(0,n.jsx)(a.h3,{id:"get-stacks-size",children:"Get stack's size"}),"\n",(0,n.jsxs)(r.Z,{groupId:"stack",children:[(0,n.jsx)(t.Z,{value:"py",label:"Python",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-py",children:"n = len(s)\n"})})}),(0,n.jsx)(t.Z,{value:"java",label:"Java",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-java",children:"int n = s.size();\n"})})}),(0,n.jsx)(t.Z,{value:"cpp",label:"C++",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-cpp",children:"int n = s.size();\n"})})})]}),"\n",(0,n.jsx)(a.h3,{id:"check-if-stack-is-empty",children:"Check if stack is empty"}),"\n",(0,n.jsxs)(r.Z,{groupId:"stack",children:[(0,n.jsx)(t.Z,{value:"py",label:"Python",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-py",children:"if len(s) == 0:\n  # statement\n"})})}),(0,n.jsx)(t.Z,{value:"java",label:"Java",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-java",children:"if( s.empty() )\n  // statement\n"})})}),(0,n.jsx)(t.Z,{value:"cpp",label:"C++",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-cpp",children:"if( s.empt() == true)\n  // statement\n"})})})]}),"\n",(0,n.jsx)(a.h3,{id:"swap-2-stacks",children:"Swap 2 stacks"}),"\n",(0,n.jsxs)(r.Z,{groupId:"stack",children:[(0,n.jsx)(t.Z,{value:"py",label:"Python",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-py",children:"s1, s2 = s2, s1\n"})})}),(0,n.jsx)(t.Z,{value:"java",label:"Java",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-java",children:"Stack<Integer> temp = s1;\ns1 = s2;\ns2 = temp;\n"})})}),(0,n.jsx)(t.Z,{value:"cpp",label:"C++",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-cpp",children:"s1.swap(s2);\n"})})})]}),"\n",(0,n.jsx)(a.h2,{id:"queue",children:"Queue"}),"\n",(0,n.jsx)(a.p,{children:"FIFO (First In First Out)"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"   _________\n=>  4 3 2 1  =>\n   ---------\n"})}),"\n",(0,n.jsx)(a.h3,{id:"declare-1",children:"Declare"}),"\n",(0,n.jsxs)(r.Z,{groupId:"queue",children:[(0,n.jsx)(t.Z,{value:"py",label:"Python",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-py",children:"from queue import Queue\n\nq = Queue()\n"})})}),(0,n.jsx)(t.Z,{value:"java",label:"Java",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-java",children:"// Queue in Java is just interface -> implement using LinkedList\nimport java.util.LinkedList;\nimport java.util.Queue;\n\nQueue<Integer> q = new LinkedList<Integer>();\n"})})}),(0,n.jsx)(t.Z,{value:"cpp",label:"C++",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-cpp",children:"#include <queue>\nusing namespace std;\n\nqueue<int> q;\n"})})})]}),"\n",(0,n.jsx)(a.h3,{id:"add-elements-1",children:"Add elements"}),"\n",(0,n.jsxs)(r.Z,{groupId:"queue",children:[(0,n.jsx)(t.Z,{value:"py",label:"Python",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-py",children:"q.put(1)\n"})})}),(0,n.jsx)(t.Z,{value:"java",label:"Java",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-java",children:"q.add(1);\nq.offer(2);\n"})})}),(0,n.jsx)(t.Z,{value:"cpp",label:"C++",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-cpp",children:"q.push(1);\n"})})})]}),"\n",(0,n.jsx)(a.h3,{id:"delete",children:"Delete"}),"\n",(0,n.jsxs)(r.Z,{groupId:"queue",children:[(0,n.jsx)(t.Z,{value:"py",label:"Python",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-py",children:"value = q.get()\n"})})}),(0,n.jsx)(t.Z,{value:"java",label:"Java",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-java",children:"int value = q.remove();\n"})})}),(0,n.jsx)(t.Z,{value:"cpp",label:"C++",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-cpp",children:"q.pop();  // doesn't return value\n"})})})]}),"\n",(0,n.jsx)(a.h3,{id:"get-value-of-the-first-element",children:"Get value of the first element"}),"\n",(0,n.jsxs)(r.Z,{groupId:"queue",children:[(0,n.jsx)(t.Z,{value:"py",label:"Python",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-py",children:"value = q.queue[0]\n"})})}),(0,n.jsx)(t.Z,{value:"java",label:"Java",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-java",children:"int value = q.peek();\n"})})}),(0,n.jsx)(t.Z,{value:"cpp",label:"C++",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-cpp",children:"int value = q.front();\n"})})})]}),"\n",(0,n.jsx)(a.h3,{id:"get-queues-size",children:"Get queue's size"}),"\n",(0,n.jsxs)(r.Z,{groupId:"queue",children:[(0,n.jsx)(t.Z,{value:"py",label:"Python",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-py",children:"n = q.qsize()\n"})})}),(0,n.jsx)(t.Z,{value:"java",label:"Java",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-java",children:"int n = q.size();\n"})})}),(0,n.jsx)(t.Z,{value:"cpp",label:"C++",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-cpp",children:"int n = q.size();\n"})})})]}),"\n",(0,n.jsx)(a.h3,{id:"check-if-queue-is-empty",children:"Check if queue is empty"}),"\n",(0,n.jsxs)(r.Z,{groupId:"queue",children:[(0,n.jsx)(t.Z,{value:"py",label:"Python",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-py",children:"if q.empty():\n  # statement\n"})})}),(0,n.jsx)(t.Z,{value:"java",label:"Java",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-java",children:"if( q.isEmpty() )\n  // statement\n"})})}),(0,n.jsx)(t.Z,{value:"cpp",label:"C++",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-cpp",children:"if( q.empty() == true )\n  // statement\n"})})})]}),"\n",(0,n.jsx)(a.h3,{id:"swap-2-queues",children:"Swap 2 queues"}),"\n",(0,n.jsxs)(r.Z,{groupId:"queue",children:[(0,n.jsx)(t.Z,{value:"py",label:"Python",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-py",children:"q1, q2 = q2, q1\n"})})}),(0,n.jsx)(t.Z,{value:"java",label:"Java",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-java",children:"Queue<Integer> temp = q1;\nq1 = q2;\nq2 = temp;\n"})})}),(0,n.jsx)(t.Z,{value:"cpp",label:"C++",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-cpp",children:"q1.swap(q2);\n"})})})]}),"\n",(0,n.jsx)(a.h2,{id:"dequeue",children:"Dequeue"}),"\n",(0,n.jsxs)(r.Z,{groupId:"dequeue",children:[(0,n.jsx)(t.Z,{value:"py",label:"Python",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-py"})})}),(0,n.jsx)(t.Z,{value:"java",label:"Java",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-java"})})}),(0,n.jsx)(t.Z,{value:"cpp",label:"C++",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-cpp"})})})]}),"\n",(0,n.jsx)(a.h2,{id:"compare-complexity",children:"Compare complexity"})]})}function p(e={}){const{wrapper:a}={...(0,s.a)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},5162:(e,a,l)=>{l.d(a,{Z:()=>t});l(7294);var n=l(4334);const s={tabItem:"tabItem_Ymn6"};var r=l(5893);function t(e){let{children:a,hidden:l,className:t}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,n.Z)(s.tabItem,t),hidden:l,children:a})}},4866:(e,a,l)=>{l.d(a,{Z:()=>q});var n=l(7294),s=l(4334),r=l(2466),t=l(6550),c=l(469),u=l(1980),i=l(7392),d=l(12);function o(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:a,children:l}=e;return(0,n.useMemo)((()=>{const e=a??function(e){return o(e).map((e=>{let{props:{value:a,label:l,attributes:n,default:s}}=e;return{value:a,label:l,attributes:n,default:s}}))}(l);return function(e){const a=(0,i.l)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,l])}function p(e){let{value:a,tabValues:l}=e;return l.some((e=>e.value===a))}function j(e){let{queryString:a=!1,groupId:l}=e;const s=(0,t.k6)(),r=function(e){let{queryString:a=!1,groupId:l}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!l)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return l??null}({queryString:a,groupId:l});return[(0,u._X)(r),(0,n.useCallback)((e=>{if(!r)return;const a=new URLSearchParams(s.location.search);a.set(r,e),s.replace({...s.location,search:a.toString()})}),[r,s])]}function v(e){const{defaultValue:a,queryString:l=!1,groupId:s}=e,r=h(e),[t,u]=(0,n.useState)((()=>function(e){let{defaultValue:a,tabValues:l}=e;if(0===l.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!p({value:a,tabValues:l}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${l.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const n=l.find((e=>e.default))??l[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:a,tabValues:r}))),[i,o]=j({queryString:l,groupId:s}),[v,x]=function(e){let{groupId:a}=e;const l=function(e){return e?`docusaurus.tab.${e}`:null}(a),[s,r]=(0,d.Nk)(l);return[s,(0,n.useCallback)((e=>{l&&r.set(e)}),[l,r])]}({groupId:s}),m=(()=>{const e=i??v;return p({value:e,tabValues:r})?e:null})();(0,c.Z)((()=>{m&&u(m)}),[m]);return{selectedValue:t,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);u(e),o(e),x(e)}),[o,x,r]),tabValues:r}}var x=l(2389);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=l(5893);function b(e){let{className:a,block:l,selectedValue:n,selectValue:t,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:i}=(0,r.o5)(),d=e=>{const a=e.currentTarget,l=u.indexOf(a),s=c[l].value;s!==n&&(i(a),t(s))},o=e=>{let a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const l=u.indexOf(e.currentTarget)+1;a=u[l]??u[0];break}case"ArrowLeft":{const l=u.indexOf(e.currentTarget)-1;a=u[l]??u[u.length-1];break}}a?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":l},a),children:c.map((e=>{let{value:a,label:l,attributes:r}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:n===a?0:-1,"aria-selected":n===a,ref:e=>u.push(e),onKeyDown:o,onClick:d,...r,className:(0,s.Z)("tabs__item",m.tabItem,r?.className,{"tabs__item--active":n===a}),children:l??a},a)}))})}function f(e){let{lazy:a,children:l,selectedValue:s}=e;const r=(Array.isArray(l)?l:[l]).filter(Boolean);if(a){const e=r.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:r.map(((e,a)=>(0,n.cloneElement)(e,{key:a,hidden:e.props.value!==s})))})}function y(e){const a=v(e);return(0,g.jsxs)("div",{className:(0,s.Z)("tabs-container",m.tabList),children:[(0,g.jsx)(b,{...e,...a}),(0,g.jsx)(f,{...e,...a})]})}function q(e){const a=(0,x.Z)();return(0,g.jsx)(y,{...e,children:o(e.children)},String(a))}},1151:(e,a,l)=>{l.d(a,{Z:()=>c,a:()=>t});var n=l(7294);const s={},r=n.createContext(s);function t(e){const a=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function c(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),n.createElement(r.Provider,{value:a},e.children)}}}]);