"use strict";(self.webpackChunktu_website=self.webpackChunktu_website||[]).push([[2027],{8523:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var t=r(5893),o=r(1151);const s={},a=void 0,c={id:"learn/framework/spring-boot/a",title:"a",description:"Create App",source:"@site/docs/learn/framework/spring-boot/4-a.mdx",sourceDirName:"learn/framework/spring-boot",slug:"/learn/framework/spring-boot/a",permalink:"/my-blog/docs/learn/framework/spring-boot/a",draft:!1,unlisted:!1,editUrl:"https://github.com/huytunguyenn/my-blog/tree/main/docs/learn/framework/spring-boot/4-a.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"docs",previous:{title:"setup",permalink:"/my-blog/docs/learn/framework/spring-boot/setup"},next:{title:"node.js",permalink:"/my-blog/docs/category/nodejs"}},i={},d=[{value:"Create App",id:"create-app",level:3},{value:"Connect to database",id:"connect-to-database",level:3}];function l(e){const n={code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h3,{id:"create-app",children:"Create App"}),"\n",(0,t.jsxs)(n.p,{children:["Go to ",(0,t.jsx)(n.code,{children:"main/java/com.example"}),". Create packages under your main package."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"controllers"}),": API controllers"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"models"}),": JPA entities & other persistence info"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"repositories"}),": JPA repositories"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"services"}),": logic-based code"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"connect-to-database",children:"Connect to database"}),"\n",(0,t.jsx)(n.p,{children:"Add Data JPA library & connect it to Postgres.\nAdd Postgres JDBC driver dependency to pom.xml"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",children:"        <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-starter-data-jpa</artifactId>\n        </dependency>\n        <dependency>\n            <groupId>org.postgresql</groupId>\n            <artifactId>postgresql</artifactId>\n            <scope>runtime</scope>\n        </dependency>\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Add ",(0,t.jsx)(n.code,{children:"src/main/resources/application.properties"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"spring.datasource.url=jdbc:postgresql://localhost:5432/conference_app\nspring.datasource.username=\nspring.datasource.password=\nspring.jpa.database-platform=org.hibernate.dialect.PostgreSQLDialect\nspring.jpa.hibernate.ddl-auto=none\nspring.jpa.hibernate.show-sql=true\n"})})]})}function p(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>c,a:()=>a});var t=r(7294);const o={},s=t.createContext(o);function a(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);