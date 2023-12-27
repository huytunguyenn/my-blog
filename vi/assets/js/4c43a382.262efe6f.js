"use strict";(self.webpackChunktu_website=self.webpackChunktu_website||[]).push([[4404],{1292:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var i=s(5893),l=s(1151);const a={sidebar_label:"logic & statements"},t="Conditional Logic, Block Statements and Looping",r={id:"learn/language/java/logic-statements",title:"Conditional Logic, Block Statements and Looping",description:"Arithmetic Operators",source:"@site/docs/learn/language/java/5-logic-statements.mdx",sourceDirName:"learn/language/java",slug:"/learn/language/java/logic-statements",permalink:"/my-blog/vi/docs/learn/language/java/logic-statements",draft:!1,unlisted:!1,editUrl:"https://github.com/huytunguyenn/my-blog/tree/main/docs/learn/language/java/5-logic-statements.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_label:"logic & statements"},sidebar:"docs",previous:{title:"data types",permalink:"/my-blog/vi/docs/learn/language/java/data-types"},next:{title:"collections",permalink:"/my-blog/vi/docs/learn/language/java/collections"}},c={},d=[{value:"Arithmetic Operators",id:"arithmetic-operators",level:2},{value:"Basic",id:"basic",level:3},{value:"Prefix &amp; Postfix",id:"prefix--postfix",level:3},{value:"Compound Assignment",id:"compound-assignment",level:3},{value:"Operator Precedence",id:"operator-precedence",level:3},{value:"Logical Operators",id:"logical-operators",level:2},{value:"Conditional Logical Operators",id:"conditional-logical-operators",level:3},{value:"Condition Logic",id:"condition-logic",level:2},{value:"Relational Operators",id:"relational-operators",level:3},{value:"Conditional Assignment",id:"conditional-assignment",level:3},{value:"If-else",id:"if-else",level:3},{value:"Block",id:"block",level:2},{value:"Block and Variable Scope",id:"block-and-variable-scope",level:3},{value:"Switch",id:"switch",level:2},{value:"Looping",id:"looping",level:2},{value:"While",id:"while",level:3},{value:"Do-while",id:"do-while",level:3},{value:"For",id:"for",level:3},{value:"For-each",id:"for-each",level:3}];function o(e){const n={annotation:"annotation",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",math:"math",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"conditional-logic-block-statements-and-looping",children:"Conditional Logic, Block Statements and Looping"}),"\n",(0,i.jsx)(n.h2,{id:"arithmetic-operators",children:"Arithmetic Operators"}),"\n",(0,i.jsx)(n.h3,{id:"basic",children:"Basic"}),"\n",(0,i.jsx)(n.p,{children:"Produce a result, no impact on values used."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"1 + 2 = 3\n5 - 4 = 1\n4 * 2 = 8\n13.0 / 5.0 = 2.6\n13 / 5 - 2\n13 % 5 = 3\n"})}),"\n",(0,i.jsx)(n.h3,{id:"prefix--postfix",children:"Prefix & Postfix"}),"\n",(0,i.jsx)(n.p,{children:"Increase or decrease a value, replace original value."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"int a = 5;\nSystem.out.println(++a);  // 6, increase before being used in an expression\nSystem.out.println(a);    // 6\n\nint b = 5;\nSystem.out.println(b++);  // 5\nSystem.out.println(b);    // 6, increase after being used\n"})}),"\n",(0,i.jsx)(n.h3,{id:"compound-assignment",children:"Compound Assignment"}),"\n",(0,i.jsx)(n.p,{children:"Operate on a value, replace original value."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"+= -= *= /= %=\n"})}),"\n",(0,i.jsx)(n.h3,{id:"operator-precedence",children:"Operator Precedence"}),"\n",(0,i.jsxs)(n.p,{children:["Postfix (",(0,i.jsx)(n.code,{children:"X++"}),", ",(0,i.jsx)(n.code,{children:"X--"}),") ",(0,i.jsxs)(n.span,{className:"katex",children:[(0,i.jsx)(n.span,{className:"katex-mathml",children:(0,i.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(n.semantics,{children:[(0,i.jsx)(n.mrow,{children:(0,i.jsx)(n.mo,{children:"\u2192"})}),(0,i.jsx)(n.annotation,{encoding:"application/x-tex",children:"\\rightarrow"})]})})}),(0,i.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(n.span,{className:"base",children:[(0,i.jsx)(n.span,{className:"strut",style:{height:"0.3669em"}}),(0,i.jsx)(n.span,{className:"mrel",children:"\u2192"})]})})]})," Prefix (",(0,i.jsx)(n.code,{children:"++X"}),", ",(0,i.jsx)(n.code,{children:"--X"}),") ",(0,i.jsxs)(n.span,{className:"katex",children:[(0,i.jsx)(n.span,{className:"katex-mathml",children:(0,i.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(n.semantics,{children:[(0,i.jsx)(n.mrow,{children:(0,i.jsx)(n.mo,{children:"\u2192"})}),(0,i.jsx)(n.annotation,{encoding:"application/x-tex",children:"\\rightarrow"})]})})}),(0,i.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(n.span,{className:"base",children:[(0,i.jsx)(n.span,{className:"strut",style:{height:"0.3669em"}}),(0,i.jsx)(n.span,{className:"mrel",children:"\u2192"})]})})]})," Multiplicative (",(0,i.jsx)(n.code,{children:"*"})," ",(0,i.jsx)(n.code,{children:"/"})," ",(0,i.jsx)(n.code,{children:"%"}),") ",(0,i.jsxs)(n.span,{className:"katex",children:[(0,i.jsx)(n.span,{className:"katex-mathml",children:(0,i.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(n.semantics,{children:[(0,i.jsx)(n.mrow,{children:(0,i.jsx)(n.mo,{children:"\u2192"})}),(0,i.jsx)(n.annotation,{encoding:"application/x-tex",children:"\\rightarrow"})]})})}),(0,i.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(n.span,{className:"base",children:[(0,i.jsx)(n.span,{className:"strut",style:{height:"0.3669em"}}),(0,i.jsx)(n.span,{className:"mrel",children:"\u2192"})]})})]})," Additive (",(0,i.jsx)(n.code,{children:"+"})," ",(0,i.jsx)(n.code,{children:"-"}),")"]}),"\n",(0,i.jsx)(n.h2,{id:"logical-operators",children:"Logical Operators"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Operator"}),(0,i.jsx)(n.th,{children:"What resolves to true"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"AND"}),(0,i.jsx)(n.td,{children:"&"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"true & true"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"OR"}),(0,i.jsx)(n.td,{children:"|"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:"false | true"}),"  ",(0,i.jsx)(n.code,{children:"true | false"}),"  ",(0,i.jsx)(n.code,{children:"true | true"})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"XOR (exclusive or)"}),(0,i.jsx)(n.td,{children:"^"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:"false ^ true"}),"  ",(0,i.jsx)(n.code,{children:"true ^ false"})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"NOT"}),(0,i.jsx)(n.td,{children:"!"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"false"})})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"conditional-logical-operators",children:"Conditional Logical Operators"}),"\n",(0,i.jsx)(n.p,{children:"Similar to standard logical operators. Right side executes only when needed:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"&&"})," executes right only when left is ",(0,i.jsx)(n.code,{children:"true"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"||"})," executes right only when left is ",(0,i.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Operator"}),(0,i.jsx)(n.th,{children:"What resolves to true"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"AND"}),(0,i.jsx)(n.td,{children:"&&"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"true && true"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"OR"}),(0,i.jsx)(n.td,{children:"||"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:"false || true"}),"  ",(0,i.jsx)(n.code,{children:"true || ----"})]})]})]})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"Q: So what's so different?"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"A:"})," When you use ",(0,i.jsx)(n.code,{children:"&"}),", both sides are executed. With ",(0,i.jsx)(n.code,{children:"&&"}),", right side is not always be executed. Consider below example:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"// this could crash if denom == 0, cause divided by 0 is not allowed\nif ( denom != 0 & numer / denom > 10 ) {\n}\n// so, you should do this\nif ( denom != 0 && numer / denom > 10 ) {\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"condition-logic",children:"Condition Logic"}),"\n",(0,i.jsx)(n.h3,{id:"relational-operators",children:"Relational Operators"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"> >= < <= == !=\n"})}),"\n",(0,i.jsx)(n.h3,{id:"conditional-assignment",children:"Conditional Assignment"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"result = condition ? true-value : false-value;\n"})}),"\n",(0,i.jsx)(n.h3,{id:"if-else",children:"If-else"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"if ( condition ) {\n  statement;\n}\nelse if ( condition ) {\n  statement;\n}\nelse {\n  statement;\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"block",children:"Block"}),"\n",(0,i.jsxs)(n.p,{children:["Use ",(0,i.jsx)(n.code,{children:"{"})," and ",(0,i.jsx)(n.code,{children:"}"})," to create block."]}),"\n",(0,i.jsx)(n.h3,{id:"block-and-variable-scope",children:"Block and Variable Scope"}),"\n",(0,i.jsx)(n.p,{children:"Variable scope is limited to block."}),"\n",(0,i.jsx)(n.h2,{id:"switch",children:"Switch"}),"\n",(0,i.jsx)(n.p,{children:"Only primitive types supported (byte, short, int, long, char)"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"switch (value-to-test) {\n  case matching-value-1:\n    statements\n    break;\n  .\n  .\n  .\n  case matching-value-N:\n    statements\n    break;\n  default:\n    statements\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"looping",children:"Looping"}),"\n",(0,i.jsx)(n.h3,{id:"while",children:"While"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"while ( condition ) {\n  statement;\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"do-while",children:"Do-while"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"do {\n  statment;\n} while ( condition );\n"})}),"\n",(0,i.jsx)(n.h3,{id:"for",children:"For"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"for (initialize; condition; update) {\n  statement;\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"for-each",children:"For-each"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"for ( loop-variable : array ) {\n  statement;\n}\n"})})]})}function h(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>r,a:()=>t});var i=s(7294);const l={},a=i.createContext(l);function t(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);