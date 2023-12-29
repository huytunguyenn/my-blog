"use strict";(self.webpackChunktu_website=self.webpackChunktu_website||[]).push([[5452],{4094:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var i=t(5893),s=t(1151);const r={slug:"my-experience-about-writing-scripts",title:"T\u1ea3n m\xe0n v\u1ec1 scripts (2023)",authors:["huytu"],tags:[],hide_table_of_contents:!1},c="L\xe0m vi\u1ec7c v\u1edbi scripts",a={permalink:"/my-blog/vi/more-of-technical-blogs/my-experience-about-writing-scripts",editUrl:"https://github.com/huytunguyenn/my-blog/tree/main/blog/career/2023/12-29-tan-man-ve-scripts.mdx",source:"@site/blog/career/2023/12-29-tan-man-ve-scripts.mdx",title:"T\u1ea3n m\xe0n v\u1ec1 scripts (2023)",description:"T\xe2m s\u1ef1 nh\u1ea3m (skip for now):",date:"2023-12-29T00:00:00.000Z",formattedDate:"29 th\xe1ng 12, 2023",tags:[],readingTime:1.255,hasTruncateMarker:!1,authors:[{name:"Huy-Tu Nguyen",title:"Software Engineer",url:"https://github.com/huytunguyenn",imageURL:"https://avatars.githubusercontent.com/u/49774218?s=400&u=138919d59c0418791e7151634a2c1e662846b074&v=4",key:"huytu"}],frontMatter:{slug:"my-experience-about-writing-scripts",title:"T\u1ea3n m\xe0n v\u1ec1 scripts (2023)",authors:["huytu"],tags:[],hide_table_of_contents:!1},unlisted:!1,prevItem:{title:"Duck typing",permalink:"/my-blog/vi/more-of-technical-blogs/duck-typing"},nextItem:{title:"Dump l\xe0 g\xec?",permalink:"/my-blog/vi/more-of-technical-blogs/what-is-dump"}},o={authorsImageUrls:[void 0]},l=[{value:"Kinh nghi\u1ec7m v\u1edbi",id:"kinh-nghi\u1ec7m-v\u1edbi",level:2}];function h(e){const n={code:"code",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"T\xe2m s\u1ef1 nh\u1ea3m (skip for now):"}),"\nN\u0103m m\u1edbi s\u1eafp h\u1ebft, h\xf4m nay l\xe0 ng\xe0y l\xe0m vi\u1ec7c cu\u1ed1i c\xf9ng c\u1ee7a n\u0103m - friday 29/12\n(th\u1eadt ra h\xf4m nay booked off r\u1ed3i ",":v","). N\xean c\u0169ng mu\u1ed1n vi\u1ebft m\u1ed9t c\xe1i g\xec \u0111\xf3. Cho n\xean\nh\xf4m nay s\u1ebd vi\u1ebft v\u1ec1 m\u1ed9t th\u1ee9 li\xean quan t\u1edbi c\xf4ng vi\u1ec7c c\u1ee7a m\xecnh trong n\u1eeda cu\u1ed1i n\u0103m\nv\u1eeba qua, \u0111\xf3 ch\xednh l\xe0 l\xe0m vi\u1ec7c v\u1edbi scripts."]}),"\n",(0,i.jsx)(n.h2,{id:"kinh-nghi\u1ec7m-v\u1edbi",children:"Kinh nghi\u1ec7m v\u1edbi"}),"\n",(0,i.jsxs)(n.p,{children:["Ch\xfang ta lu\xf4n c\xf3 folder d\u1ef1 ph\xf2ng ",(0,i.jsx)(n.code,{children:"/tmp"})," \u1edf \u0111\xe2u \u0111\xf3."]}),"\n",(0,i.jsx)(n.p,{children:"Khi l\xe0m m\u1ed9t l\u1ec7nh g\xec \u0111\xf3 n\xean check n\u1ebfu l\u1ec7nh \u0111\xf3 c\xf3 th\u1ec3 fail v\xe0 g\xe2y crash. M\u1ed9t s\u1ed1 v\xed d\u1ee5"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"# Copy file \u1edf SOURCE -> TARGET\nscp $SOURCE/my_awesome_file $TARGET:/still_my_awesome_file\n"})}),"\n",(0,i.jsx)(n.p,{children:"N\xean:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'scp ... || (echo "failed yada yada"; exit 1)\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Nh\u1eefng l\u1ec7nh ",(0,i.jsx)(n.code,{children:"cd"})," v\u1ec1 technically v\u1eabn c\xf3 th\u1ec3 failed v\u1edbi nh\u1eefng unexpected path."]}),"\n",(0,i.jsx)(n.p,{children:'Use "|| true" to avoid interruption on stopping failure'}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"docker-compose -f ${hostConfig.dockerComposeYmlPath} down -v || true\n\n"})}),"\n",(0,i.jsx)(n.p,{children:"This stop on errors but hide all errors."}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsx)(n.li,{children:"Error"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'mkdir -p ${hostConfig.dockerRootDataDir} || true\necho "Success!"\n'})}),"\n",(0,i.jsxs)(n.p,{children:["$\\leftarrow$",(0,i.jsx)(n.code,{children:"|| true"})," here seems pointless, as it'll continue anyway. Also confusing in that it'll always write Success! even if mkdir fails -> It was meant to be ",(0,i.jsx)(n.code,{children:"|| exit 1"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'if [ ! -f "$file_path" ]; then\n  echo "Expecting the file at path $file_path but it\'s unavailable. Stop now"\n'})}),"\n",(0,i.jsx)(n.p,{children:"should be going to stderr via >&2?"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"# For debug when needed\nset -x\n"})})]})}function d(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>c});var i=t(7294);const s={},r=i.createContext(s);function c(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);