"use strict";(self.webpackChunktu_website=self.webpackChunktu_website||[]).push([[9277],{3686:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>g,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var h=e(5893),c=e(1151);const i={slug:"concurrency-series-1-measurement",title:"\u0110o \u0111\u1ea1c hi\u1ec7u n\u0103ng",authors:["huytu"],tags:[],hide_table_of_contents:!1},s=void 0,r={permalink:"/my-blog/more-of-technical-blogs/concurrency-series-1-measurement",editUrl:"https://github.com/huytunguyenn/my-blog/tree/main/blog/career/2024/5-15-ccrc-measurement.mdx",source:"@site/blog/career/2024/5-15-ccrc-measurement.mdx",title:"\u0110o \u0111\u1ea1c hi\u1ec7u n\u0103ng",description:"Ch\u1eafc h\u1eb3n ai c\u0169ng mu\u1ed1n (kh\xf4ng mu\u1ed1n th\xec \u0111\u1ebfn l\xfac c\u0169ng ph\u1ea3i mu\u1ed1n) c\xe1i app m\xecnh code ch\u1ea1y nhanh nh\u1ea5t,",date:"2024-05-15T00:00:00.000Z",formattedDate:"May 15, 2024",tags:[],readingTime:2.62,hasTruncateMarker:!1,authors:[{name:"Huy-Tu Nguyen",title:"Software Engineer",url:"https://github.com/huytunguyenn",imageURL:"https://avatars.githubusercontent.com/u/49774218?s=400&u=138919d59c0418791e7151634a2c1e662846b074&v=4",key:"huytu"}],frontMatter:{slug:"concurrency-series-1-measurement",title:"\u0110o \u0111\u1ea1c hi\u1ec7u n\u0103ng",authors:["huytu"],tags:[],hide_table_of_contents:!1},unlisted:!1,nextItem:{title:"blob-la-gi",permalink:"/my-blog/more-of-technical-blogs/2024/1/4/career/blob-la-gi"}},o={authorsImageUrls:[void 0]},l=[{value:"[Concurrency series] #1 \u0110o \u0111\u1ea1c t\u1ed1c \u0111\u1ed9",id:"concurrency-series-1-\u0111o-\u0111\u1ea1c-t\u1ed1c-\u0111\u1ed9",level:3}];function a(n){const t={blockquote:"blockquote",code:"code",em:"em",h3:"h3",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,c.a)(),...n.components};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(t.p,{children:"Ch\u1eafc h\u1eb3n ai c\u0169ng mu\u1ed1n (kh\xf4ng mu\u1ed1n th\xec \u0111\u1ebfn l\xfac c\u0169ng ph\u1ea3i mu\u1ed1n) c\xe1i app m\xecnh code ch\u1ea1y nhanh nh\u1ea5t,\nresponsive nh\u1ea5t n\xean kh\xf4ng l\u1ea1 g\xec v\u1edbi c\xe1c th\xf4ng s\u1ed1 \u0111o \u0111\u1ea1c performance c\u1ee7a h\u1ec7 th\u1ed1ng\n\u0111\u1ec3 bi\u1ebft n\xf3 nhanh hay ch\u1eadm. V\xe0i c\xe1i ti\xeau bi\u1ec3u l\xe0 latency & throughput."}),"\n",(0,h.jsx)(t.h3,{id:"concurrency-series-1-\u0111o-\u0111\u1ea1c-t\u1ed1c-\u0111\u1ed9",children:"[Concurrency series] #1 \u0110o \u0111\u1ea1c t\u1ed1c \u0111\u1ed9"}),"\n",(0,h.jsxs)(t.p,{children:[(0,h.jsx)(t.strong,{children:"Latency (\u0111\u1ed9 tr\u1ec5)"})," l\xe0 th\u1eddi gian t\u1eeb khi g\xf3i tin \u0111\u01b0\u1ee3c g\u1eedi \u0111i cho \u0111\u1ebfn khi g\xf3i tin\n\u0111\u01b0\u1ee3c nh\u1eadn, hay l\xe0 th\u1eddi gian t\u1eeb khi b\u1eaft \u0111\u1ea7u t\u1edbi khi ho\xe0n th\xe0nh task, hay l\xe0.\nLatency cao ngh\u0129a l\xe0 \u0111\u1ed9 tr\u1ec5 cao, aka th\u1eddi gian ho\xe0n th\xe0nh l\u1edbn-ch\u1eadm."]}),"\n",(0,h.jsxs)(t.p,{children:[(0,h.jsx)(t.strong,{children:"Throughput (th\xf4ng l\u01b0\u1ee3ng)"})," l\xe0 s\u1ed1 byte g\u1eedi/nh\u1eadn trong 1 gi\xe2y c\u1ee7a m\u1ea1ng, l\xe0 s\u1ed1 l\u01b0\u1ee3ng\ntask m\xe0 system c\xf3 th\u1ec3 handle trong 1 kho\u1ea3ng th\u1eddi gian. N\xf3 th\u1ec3 hi\u1ec7n cho \u201cn\u0103ng su\u1ea5t\u201d."]}),"\n",(0,h.jsxs)(t.blockquote,{children:["\n",(0,h.jsx)(t.p,{children:(0,h.jsx)(t.em,{children:"M\u1ed9t v\xed d\u1ee5 \u0111\u01a1n gi\u1ea3n l\xe0 xe m\xe1y & xe bus, xe m\xe1y c\xf3 th\u1ec3 nhanh g\u1ea5p \u0111\xf4i xe bus nh\u01b0ng\nxe bus l\u1ea1i ch\u1edf \u0111\u01b0\u1ee3c s\u1ed1 l\u01b0\u1ee3ng x25 l\u1ea7n xe m\xe1y. Xe bus c\xf3 throughput l\u1edbn h\u01a1n xe m\xe1y."})}),"\n"]}),"\n",(0,h.jsx)(t.p,{children:"**"}),"\n",(0,h.jsxs)(t.p,{children:[(0,h.jsx)(t.em,{children:(0,h.jsx)(t.strong,{children:"V\u1eady l\xe0 h\u1ec7 th\u1ed1ng throughput cao th\xec latency th\u1ea5p?"})})," C\u0169ng kh\xf4ng h\u1eb3n nh\u01b0 v\u1eady:"]}),"\n",(0,h.jsxs)(t.blockquote,{children:["\n",(0,h.jsx)(t.p,{children:(0,h.jsx)(t.em,{children:"Xe m\xe1y ch\u1edf \u0111c 1 ng\u01b0\u1eddi/h, xe bus th\xec ch\u1edf 50 ng\u01b0\u1eddi/2h (l\xe0 25 ng\u01b0\u1eddi/h). Trong tr\u01b0\u1eddng\nh\u1ee3p n\xe0y, xe bus c\xf3 throughput cao, nh\u01b0ng latency n\xf3 c\u0169ng cao h\u01a1n xe m\xe1y."})}),"\n"]}),"\n",(0,h.jsxs)(t.p,{children:["\u2192 T\u01b0\u01a1ng t\u1ef1 trong h\u1ec7 th\u1ed1ng m\xe1y t\xednh, ",(0,h.jsx)(t.strong,{children:"kh\xf4ng ph\u1ea3i throughput cao l\xe0 \u0111\u1ed3ng ngh\u0129a v\u1edbi latency th\u1ea5p."})]}),"\n",(0,h.jsx)(t.p,{children:"C\xf3 2 \u0111i\u1ec1u c\u1ea7n l\u01b0u \xfd r\u1eb1ng:"}),"\n",(0,h.jsxs)(t.ul,{children:["\n",(0,h.jsx)(t.li,{children:"C\u1ea3i thi\u1ec7n y\u1ebfu t\u1ed1 n\xe0y c\xf3 th\u1ec3 l\xe0m t\u1ec7 \u0111i y\u1ebfu t\u1ed1 c\xf2n l\u1ea1i."}),"\n",(0,h.jsx)(t.li,{children:"C\xe1c kh\xe1i ni\u1ec7m tr\xe1i ngh\u0129a nhau kh\xf4ng \u0111\u1ed3ng th\u1eddi tri\u1ec7t ti\xeau nhau m\xe0 c\xf3 th\u1ec3 t\u1ed3n t\u1ea1i c\xf9ng nhau (c\xe1i n\xe0y n\xf3i sau hehe)."}),"\n"]}),"\n",(0,h.jsxs)(t.p,{children:["N\xf3i m\u1ed9t c\xe1ch technical h\u01a1n 1 long-running task c\xf3 th\u1ec3 \u0111\u01b0\u1ee3c chia nh\u1ecf th\xe0nh nhi\u1ec1u\ntask c\xf3 th\u1ec3 \u0111\u01b0\u1ee3c th\u1ef1c thi ",(0,h.jsx)(t.em,{children:"song song"}),", gi\xfap gi\u1ea3m th\u1eddi gian th\u1ef1c thi \u2192 gi\u1ea3m latency.\nNhi\u1ec1u task \u0111\u01b0\u1ee3c th\u1ef1c hi\u1ec7n ",(0,h.jsx)(t.em,{children:"\u0111\u1ed3ng th\u1eddi"})," c\u0169ng l\xe0 gi\xfap t\u0103ng throughput."]}),"\n",(0,h.jsxs)(t.p,{children:[(0,h.jsx)(t.code,{children:"x"})," c\xf2n gi\xfap ",(0,h.jsx)(t.strong,{children:"che gi\u1ea5u latency."})]}),"\n",(0,h.jsxs)(t.blockquote,{children:["\n",(0,h.jsx)(t.p,{children:(0,h.jsx)(t.em,{children:"M\u1ed9t v\xed d\u1ee5 \u0111\u1eddi th\u1ef1c l\xe0 khi ch\u1edd xe bus, thay v\xec ch\u1ec9 ng\u1ed3i ch\u1edd, ch\xfang ta c\xf3 th\u1ec3 l\xe0m\nnh\u1eefng task kh\xe1c nh\u01b0 \u0111\u1ecdc s\xe1ch, check mail, tin nh\u1eafn, g\u1ecdi \u0111i\u1ec7n, \u0103n s\xe1ng, etc."})}),"\n"]}),"\n",(0,h.jsx)(t.p,{children:"\u0110\xe2y l\xe0 nh\u1eefng h\xe0nh \u0111\u1ed9ng v\xf4 th\u1ee9c m\xe0 ta l\xe0m th\u01b0\u1eddng ng\xe0y. T\u1ea1i sao ch\xfang ta l\xe0m? \u2192 B\u1edfi v\xec ch\xfang ta \u201cth\u1ea5y\u201d n\xf3 optimize ho\u1ea1t \u0111\u1ed9ng c\u1ee7a m\xecnh."}),"\n",(0,h.jsx)(t.p,{children:(0,h.jsx)(t.em,{children:"T\u1ea1i sao n\xf3 optimize? Vi\u1ec7c ch\xfang check mail trong l\xfac ch\u1edd xe bus kh\xf4ng gi\xfap xe bus \u0111i nhanh h\u01a1n?"})}),"\n",(0,h.jsx)(t.p,{children:"\u2192 Well th\u1ef1c t\u1ebf b\u1edfi v\xec ch\xfang ta \u0111\xe3 che gi\u1ea5u \u0111i \u0111\u1ed9 tr\u1ec5 c\u1ee7a xe bus, i.e. l\xe0m task kh\xe1c trong\nth\u1eddi gian \u0111\u1ee3i task c\xf3 latency cao. \u0110\xe2y c\u0169ng l\xe0 m\u1ed9t v\xed d\u1ee5 cho th\u1ea5y che gi\u1ea5u latency\nl\xe0 m\u1ed9t trong nh\u1eefng key cho 1 responsive system (v\xe0 \u0111\xe2y l\xe0 \u0111\xe1p \xe1n \u0111\u1ea7u ti\xean cho b\xe0i to\xe1n li\xean quan t\u1edbi vi\u1ec7c waiting)."}),"\n",(0,h.jsx)(t.p,{children:"**"}),"\n",(0,h.jsxs)(t.p,{children:[(0,h.jsx)(t.em,{children:(0,h.jsx)(t.strong,{children:"Q:"})})," What is ",(0,h.jsx)(t.code,{children:"x"}),"?"]}),"\n",(0,h.jsxs)(t.p,{children:[(0,h.jsx)(t.em,{children:(0,h.jsx)(t.strong,{children:"A:"})})," Based on the title and the bold words, you\u2019ve already known. It is concurrency."]}),"\n",(0,h.jsxs)(t.p,{children:[(0,h.jsx)(t.em,{children:(0,h.jsx)(t.strong,{children:"Q:"})})," What is concurrency?"]}),"\n",(0,h.jsx)(t.hr,{}),"\n",(0,h.jsxs)(t.p,{children:[(0,h.jsx)(t.strong,{children:"ResRef"}),": Kirill Bobrov, Manning Publications - Grokking Concurrency"]})]})}function g(n={}){const{wrapper:t}={...(0,c.a)(),...n.components};return t?(0,h.jsx)(t,{...n,children:(0,h.jsx)(a,{...n})}):a(n)}},1151:(n,t,e)=>{e.d(t,{Z:()=>r,a:()=>s});var h=e(7294);const c={},i=h.createContext(c);function s(n){const t=h.useContext(i);return h.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function r(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:s(n.components),h.createElement(i.Provider,{value:t},n.children)}}}]);