"use strict";(self.webpackChunktu_website=self.webpackChunktu_website||[]).push([[5513],{8285:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>h});var i=n(5893),a=n(1151);const o={slug:"duck-typing",title:"Duck typing",authors:["huytu"],tags:["career"],hide_table_of_contents:!1},r=void 0,c={permalink:"/my-blog/more-of-technical-blogs/duck-typing",editUrl:"https://github.com/huytunguyenn/my-blog/tree/main/blog/career/2023/12-29-duck-typing.mdx",source:"@site/blog/career/2023/12-29-duck-typing.mdx",title:"Duck typing",description:"ABC//medium.com/always-be-coding/abc-always-be-coding-d5f8051afce2",date:"2023-12-29T00:00:00.000Z",formattedDate:"December 29, 2023",tags:[{label:"career",permalink:"/my-blog/more-of-technical-blogs/tags/career"}],readingTime:1.81,hasTruncateMarker:!1,authors:[{name:"Huy-Tu Nguyen",title:"Software Engineer",url:"https://github.com/huytunguyenn",imageURL:"https://avatars.githubusercontent.com/u/49774218?s=400&u=138919d59c0418791e7151634a2c1e662846b074&v=4",key:"huytu"}],frontMatter:{slug:"duck-typing",title:"Duck typing",authors:["huytu"],tags:["career"],hide_table_of_contents:!1},unlisted:!1,prevItem:{title:"blob-la-gi",permalink:"/my-blog/more-of-technical-blogs/2024/1/4/career/blob-la-gi"},nextItem:{title:"T\u1ea3n m\xe0n v\u1ec1 scripts (2023)",permalink:"/my-blog/more-of-technical-blogs/my-experience-about-writing-scripts"}},s={authorsImageUrls:[void 0]},h=[{value:"T\xe1ch h\xe0m nh\u01b0 th\u1ebf n\xe0o",id:"t\xe1ch-h\xe0m-nh\u01b0-th\u1ebf-n\xe0o",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["ABC: ",(0,i.jsx)(t.a,{href:"https://medium.com/always-be-coding/abc-always-be-coding-d5f8051afce2",children:"https://medium.com/always-be-coding/abc-always-be-coding-d5f8051afce2"})]}),"\n",(0,i.jsxs)(t.p,{children:["Broken windows: ",(0,i.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Broken_windows_theory",children:"https://en.wikipedia.org/wiki/Broken_windows_theory"})]}),"\n",(0,i.jsx)(t.h2,{id:"t\xe1ch-h\xe0m-nh\u01b0-th\u1ebf-n\xe0o",children:"T\xe1ch h\xe0m nh\u01b0 th\u1ebf n\xe0o"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"    src = if imageDownloadUrl != null then builtins.fetchurl {\n    } else fetchEcr {\n    };\n"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Duck_typing",children:"https://en.wikipedia.org/wiki/Duck_typing"})}),"\n",(0,i.jsx)(t.p,{children:"N\u1ebfu c\xf3 th\u1ec3 cho r\u1eb1ng b\u1ea5t c\u1ee9 th\u1ee9 g\xec bi\u1ebft b\u01a1i \u0111\u1ec1u l\xe0 v\u1ecbt v\xec v\u1ecbt c\xf3 th\u1ec3 b\u01a1i th\xec c\xe1 voi c\xf3 th\u1ec3 \u0111\u01b0\u1ee3c coi l\xe0 v\u1ecbt; tuy nhi\xean, n\u1ebfu ng\u01b0\u1eddi ta c\u0169ng cho r\u1eb1ng con v\u1ecbt ph\u1ea3i c\xf3 kh\u1ea3 n\u0103ng bay th\xec con c\xe1 voi s\u1ebd kh\xf4ng \u0111\u01b0\u1ee3c coi l\xe0 con v\u1ecbt."}),"\n",(0,i.jsx)(t.p,{children:"So it seems weird that the function has to be executed either with args A, B or with arg C, D, but no overlap. It doesn't even attempt to catch odd case if all args are specified."}),"\n",(0,i.jsxs)(t.p,{children:["This should be separated back into two separate unrelated functions for clarity, and shouldn't be ",(0,i.jsx)(t.code,{children:"doEverything(args, for, all, possible, cases)"})]}),"\n",(0,i.jsx)(t.p,{children:"I don't know if I'd agree with that. It's fine to have two functions returning the same \"type\" (i.e. in nix's case, similar to JavaScripts, using duck typing). But having function distinctly doing different things just so that it returns same return type is weird. If one function fails to return, for example, imageTag and that key is needed for evaluation, nix evaluation will fail with error message. And if it's not needed, no harm if function doesn't return it."}),"\n",(0,i.jsx)(t.p,{children:"I.e. there are many functions in nix (that can be used) for fetching git source code: fetchUrl, fetchGit, fetchGitHub, fetchGitLab, fetchTarball, fetchBitbucket, fetchgitLocal , fetchgitPrivate, and possibly even more. There even other functions for svn, hg, and other source-related fetches. Each, in the end, returns one same thing, a git repo. But you'll notice that there is not a function fetchRepo(name, revision, url, git, github, gitlab, tarball, bitbucket, local, private) which would reuse first two args, and then require exclusive 3rd arg (or some combination of exclusive arg sets, such as sometimes asking for authentication or w/e else). Because such a function would be unmanageable and confusing. So I think it's best to separate the two, and, in addition, make it clearer which one is fetching from where and requires what data explicitly (e.g. Ecr fetch always would require aws creds, not optionally)"})]})}function u(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>r});var i=n(7294);const a={},o=i.createContext(a);function r(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);