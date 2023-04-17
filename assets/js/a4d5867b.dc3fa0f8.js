"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[728],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=r.createContext({}),s=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(a),d=n,g=m["".concat(u,".").concat(d)]||m[d]||p[d]||l;return a?r.createElement(g,o(o({ref:t},c),{},{components:a})):r.createElement(g,o({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>o});var r=a(7294),n=a(6010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(l,o),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>w});var r=a(7462),n=a(7294),l=a(6010),o=a(2466),i=a(6775),u=a(1980),s=a(7392),c=a(12);function p(e){return function(e){var t;return(null==(t=n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function m(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:a}=e;const r=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,u._X)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function b(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,l=m(e),[o,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[u,s]=g({queryString:a,groupId:r}),[p,b]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,c.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:r}),k=(()=>{const e=u??p;return d({value:e,tabValues:l})?e:null})();(0,n.useLayoutEffect)((()=>{k&&i(k)}),[k]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!d({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),s(e),b(e)}),[s,b,l]),tabValues:l}}var k=a(2389);const f="tabList__CuJ",h="tabItem_LNqP";function y(e){let{className:t,block:a,selectedValue:i,selectValue:u,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),m=e=>{const t=e.currentTarget,a=c.indexOf(t),r=s[a].value;r!==i&&(p(t),u(r))},d=e=>{var t;let a=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;a=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;a=c[t]??c[c.length-1];break}}null==(t=a)||t.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},s.map((e=>{let{value:t,label:a,attributes:o}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:d,onClick:m},o,{className:(0,l.Z)("tabs__item",h,null==o?void 0:o.className,{"tabs__item--active":i===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:r}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function N(e){const t=b(e);return n.createElement("div",{className:(0,l.Z)("tabs-container",f)},n.createElement(y,(0,r.Z)({},e,t)),n.createElement(v,(0,r.Z)({},e,t)))}function w(e){const t=(0,k.Z)();return n.createElement(N,(0,r.Z)({key:String(t)},e))}},7952:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=a(7462),n=(a(7294),a(3905)),l=a(4866),o=a(5162);const i={sidebar_label:"characteristics"},u="Overview",s={unversionedId:"learn/language/golang/characteristics",id:"learn/language/golang/characteristics",title:"Overview",description:"Some of Go characteristics. golang.org",source:"@site/docs/learn/language/golang/2-characteristics.mdx",sourceDirName:"learn/language/golang",slug:"/learn/language/golang/characteristics",permalink:"/my-blog/docs/learn/language/golang/characteristics",draft:!1,editUrl:"https://github.com/huytunguyenn/my-blog/tree/main/docs/learn/language/golang/2-characteristics.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"characteristics"},sidebar:"docs",previous:{title:"intro",permalink:"/my-blog/docs/learn/language/golang/intro-golang"},next:{title:"setup",permalink:"/my-blog/docs/learn/language/golang/setup"}},c={},p=[{value:"Characteristics",id:"characteristics",level:2},{value:"Philosophy and value",id:"philosophy-and-value",level:2},{value:"Simplicity",id:"simplicity",level:3},{value:"Network aware &amp; concurrent apps",id:"network-aware--concurrent-apps",level:3},{value:"Out-of-the-box experience",id:"out-of-the-box-experience",level:3},{value:"Cross-platform",id:"cross-platform",level:3},{value:"Backward compatibility",id:"backward-compatibility",level:3},{value:"Primary use cases",id:"primary-use-cases",level:2}],m={toc:p};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"overview"},"Overview"),(0,n.kt)("p",null,"Some of Go characteristics. ",(0,n.kt)("a",{parentName:"p",href:"https://go.dev/"},"golang.org")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"What's the problem?")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null}),(0,n.kt)("th",{parentName:"tr",align:null},"C++"),(0,n.kt)("th",{parentName:"tr",align:null},"Java"),(0,n.kt)("th",{parentName:"tr",align:null},"Python"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"+"),(0,n.kt)("td",{parentName:"tr",align:null},"High performance ",(0,n.kt)("br",null)," Type safety"),(0,n.kt)("td",{parentName:"tr",align:null},"Rapid compilation ",(0,n.kt)("br",null)," Type safety"),(0,n.kt)("td",{parentName:"tr",align:null},"Ease of use")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"Slow compilation ",(0,n.kt)("br",null)," Historically complex syntax"),(0,n.kt)("td",{parentName:"tr",align:null},"Complicated ecosystem"),(0,n.kt)("td",{parentName:"tr",align:null},"Lack of type safety ",(0,n.kt)("br",null)," Relatively slow")))),(0,n.kt)("p",null,"=> GO:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"fast compilation"),(0,n.kt)("li",{parentName:"ul"},"fully compiled"),(0,n.kt)("li",{parentName:"ul"},"strongly typed"),(0,n.kt)("li",{parentName:"ul"},"concurrent ",(0,n.kt)("em",{parentName:"li"},"by default")),(0,n.kt)("li",{parentName:"ul"},"garbage collected"),(0,n.kt)("li",{parentName:"ul"},"simplicity")),(0,n.kt)("h2",{id:"characteristics"},"Characteristics"),(0,n.kt)("p",null,"Go has a strong, static type system, better when compare to scripting languages such as JavaScript or Python."),(0,n.kt)("p",null,"Go is inspired by C's syntax."),(0,n.kt)("p",null,"Go is multi-paradigm programming language, a mixture of ",(0,n.kt)("strong",{parentName:"p"},"procedural")," and ",(0,n.kt)("strong",{parentName:"p"},"object-oriented"),"."),(0,n.kt)("p",null,"Go is ",(0,n.kt)("strong",{parentName:"p"},"garbage collected")," language."),(0,n.kt)("p",null,"Go is fully compiled. Unlike ",(0,n.kt)("em",{parentName:"p"},"scripting languages")," (which are interpreted at runtime) or languages that are compiled to some intermediate code that are interpreted by a runtime (such as Java)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Go applications are fully compiled down to an executable binary -> highest levels of performance possible"),(0,n.kt)("li",{parentName:"ul"},"Single binary output -> simple deployment")),(0,n.kt)("p",null,"Go has rapid compilation -> better when doing TDD methodology"),(0,n.kt)("h2",{id:"philosophy-and-value"},"Philosophy and value"),(0,n.kt)("h3",{id:"simplicity"},"Simplicity"),(0,n.kt)("p",null,"For example:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"All loops in Go are ",(0,n.kt)("strong",{parentName:"li"},"for-loops")),(0,n.kt)("li",{parentName:"ul"},"Go doesn't make ",(0,n.kt)("strong",{parentName:"li"},"expressions"),", it is ",(0,n.kt)("strong",{parentName:"li"},"statements")," ",(0,n.kt)("em",{parentName:"li"},"(it evaluates all as 1 unit, whereas expression is a component of statement)"),". For example:")),(0,n.kt)(l.Z,{mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"code-1",label:"There are some expressions",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"i := 1\nprintln(i++) // sometimes you may confuse\nprintln(++i)\n"))),(0,n.kt)(o.Z,{value:"code-2",label:"It's all statement",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"i := 1\ni++\nprintln(i) // 2, obviously\ni++\nprintln(i) // 3\n")))),(0,n.kt)("h3",{id:"network-aware--concurrent-apps"},"Network aware & concurrent apps"),(0,n.kt)("p",null,"Unlike other languages, Go was created after CPUs have multiple core and were able to run tasks concurrently -> Go adotped those designs"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"net and net/http packages: create web servers using only standard library"),(0,n.kt)("li",{parentName:"ul"},"goroutines: start tons of concurrent tasks with minimal resources"),(0,n.kt)("li",{parentName:"ul"},"channels: safely communicate between concurrent tasks")),(0,n.kt)("h3",{id:"out-of-the-box-experience"},"Out-of-the-box experience"),(0,n.kt)("p",null,"Standard library: string manipulation, data compression, file manipulation, networking APIS, testing, etc."),(0,n.kt)("p",null,"Go CLI: project initialization, build, code generation, retrieve dependencies, test, profiling, documentation, report language bugs,  etc."),(0,n.kt)("h3",{id:"cross-platform"},"Cross-platform"),(0,n.kt)("p",null,"Just by changing 2 parameters - GOOS and GOARCH, don't need any specified-platform device. For example:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null}),(0,n.kt)("th",{parentName:"tr",align:null},"Windows"),(0,n.kt)("th",{parentName:"tr",align:null},"OS X"),(0,n.kt)("th",{parentName:"tr",align:null},"Android"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"GOOS"),(0,n.kt)("td",{parentName:"tr",align:null},"windows"),(0,n.kt)("td",{parentName:"tr",align:null},"darwin"),(0,n.kt)("td",{parentName:"tr",align:null},"android")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"GOARCH"),(0,n.kt)("td",{parentName:"tr",align:null},"amd64"),(0,n.kt)("td",{parentName:"tr",align:null},"amd64"),(0,n.kt)("td",{parentName:"tr",align:null},"arm")))),(0,n.kt)("h3",{id:"backward-compatibility"},"Backward compatibility"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://go.dev/doc/go1compat"},"https://go.dev/doc/go1compat")),(0,n.kt)("h2",{id:"primary-use-cases"},"Primary use cases"),(0,n.kt)("p",null,"Web services / microservices"),(0,n.kt)("p",null,"Devops"))}d.isMDXComponent=!0}}]);