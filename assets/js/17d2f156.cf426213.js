"use strict";(self.webpackChunktu_website=self.webpackChunktu_website||[]).push([[2506],{7203:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>t,toc:()=>c});var l=n(5893),i=n(1151);const r={sidebar_position:3},o="Advanced",t={id:"learn/utils/bash/advanced_commands",title:"Advanced",description:"Some advanced things",source:"@site/docs/learn/utils/bash/advanced_commands.mdx",sourceDirName:"learn/utils/bash",slug:"/learn/utils/bash/advanced_commands",permalink:"/my-blog/docs/learn/utils/bash/advanced_commands",draft:!1,unlisted:!1,editUrl:"https://github.com/huytunguyenn/my-blog/tree/main/docs/learn/utils/bash/advanced_commands.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docs",previous:{title:"Basic first",permalink:"/my-blog/docs/learn/utils/bash/basic_commands"},next:{title:"Scripting",permalink:"/my-blog/docs/learn/utils/bash/scripting"}},d={},c=[{value:"Pipes &amp; direction",id:"pipes--direction",level:2},{value:"Wildcards",id:"wildcards",level:2},{value:"Superuser do",id:"superuser-do",level:2},{value:"Customization",id:"customization",level:2},{value:"Variables",id:"variables",level:3},{value:"Aliases",id:"aliases",level:3},{value:"Community",id:"community",level:3}];function a(e){const s={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.h1,{id:"advanced",children:"Advanced"}),"\n",(0,l.jsx)(s.p,{children:"Some advanced things"}),"\n",(0,l.jsx)(s.h2,{id:"pipes--direction",children:"Pipes & direction"}),"\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.code,{children:"|"})," is called pipe symbol."]}),"\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.code,{children:"ls | less"}),": take output from ",(0,l.jsx)(s.code,{children:"ls"})," and send it to input of ",(0,l.jsx)(s.code,{children:"less"}),". So that you can easily browse through file list."]}),"\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.code,{children:"grep string file"}),": search for ",(0,l.jsx)(s.em,{children:"string"})," in ",(0,l.jsx)(s.em,{children:"file"})," and print only those lines."]}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.strong,{children:"Some examples"})}),"\n",(0,l.jsx)(s.p,{children:"Let say I have a csv file that includes details of films that nominated Oscars:"}),"\n",(0,l.jsxs)(s.ol,{children:["\n",(0,l.jsx)(s.li,{children:"I want extract all the films that are in 1978 in order."}),"\n"]}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:['First I find all the lines that has "1978": ',(0,l.jsx)(s.code,{children:"grep 1978 oscars.tsv"})]}),"\n",(0,l.jsxs)(s.li,{children:["Then I continue to sort: ",(0,l.jsx)(s.code,{children:"grep 1978 oscars.tsv | sort"})]}),"\n",(0,l.jsxs)(s.li,{children:["Then I want to save it to another file: ",(0,l.jsx)(s.code,{children:"grap 1978 oscars.tsv | sort > 1978films.txt"})]}),"\n"]}),"\n",(0,l.jsxs)(s.ol,{start:"2",children:["\n",(0,l.jsx)(s.li,{children:"I want to know how many films received 4 Oscars. Suppose 3rd column is number of Oscar film received."}),"\n"]}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:["Cut the 3rd column of every line and print it: ",(0,l.jsx)(s.code,{children:"cut -f 3 oscars.tsv"})]}),"\n",(0,l.jsxs)(s.li,{children:["Find 4: ",(0,l.jsx)(s.code,{children:"cut -f 3 oscars.tsv | grep 4"})]}),"\n",(0,l.jsxs)(s.li,{children:["Count how many of them: ",(0,l.jsx)(s.code,{children:"cut -f 3 oscars.tsv | grep 4 | wc -l"})," (wc means word count, -l is for line)"]}),"\n"]}),"\n",(0,l.jsx)(s.h2,{id:"wildcards",children:"Wildcards"}),"\n",(0,l.jsx)(s.p,{children:"Wildcards is the star or asterisk that bash will replace with the name of all files in the current directory."}),"\n",(0,l.jsx)(s.p,{children:"For example:"}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.code,{children:"ls a*"}),': list all files start with "a".']}),"\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.code,{children:"ls *a"}),': list all files end with "a".']}),"\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.code,{children:"ls *ab*"}),': list all files contain "ab".']}),"\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.code,{children:"grep ab *"}),': search "ab" in all files.']}),"\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.code,{children:"echo *"}),': (echo is just simply echo what you type), bash will replace "*" with all the files in the directory.']}),"\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.code,{children:"mv *txt textFolder"}),": move all txt file to ",(0,l.jsx)(s.em,{children:"textFolder"})]}),"\n"]}),"\n",(0,l.jsx)(s.h2,{id:"superuser-do",children:"Superuser do"}),"\n",(0,l.jsxs)(s.p,{children:["Some command that not allowed to run. To run it add ",(0,l.jsx)(s.code,{children:"sudo"})," at the beginning."]}),"\n",(0,l.jsx)(s.h2,{id:"customization",children:"Customization"}),"\n",(0,l.jsx)(s.p,{children:"There are many files is used for customization. All these files should be placed at home directory."}),"\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.strong,{children:"Bash"}),":"]}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsx)(s.li,{children:".profile read on login -> should use for config variable"}),"\n",(0,l.jsx)(s.li,{children:".bashrc read for interactive shells -> should use for running commands, aliases"}),"\n"]}),"\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.strong,{children:"Zsh"}),":"]}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsx)(s.li,{children:".zshenv read always"}),"\n",(0,l.jsx)(s.li,{children:".zshrc read fir interactive shells"}),"\n"]}),"\n",(0,l.jsx)(s.h3,{id:"variables",children:"Variables"}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.code,{children:"export SOMEVAR=some_value"})}),"\n",(0,l.jsxs)(s.p,{children:["Usually to not set this everytime you start shell, you should put it in a ",(0,l.jsx)(s.code,{children:".zshenv"})," file. For ",(0,l.jsx)(s.strong,{children:"bash"}),", it is ",(0,l.jsx)(s.code,{children:".profile"}),"."]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-shell",children:"$ nano .zshenv\n$ export EDITOR=nano\n"})}),"\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.strong,{children:"PATH"})," is a path variable indicate where to look for the commands. If it doesn't exist, shell will tell the command cannot be found."]}),"\n",(0,l.jsxs)(s.p,{children:["To see the value, use ",(0,l.jsx)(s.code,{children:"echo"})," and ",(0,l.jsx)(s.code,{children:"$"}),"."]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-shell",children:"$ echo $PATH\n/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:\n"})}),"\n",(0,l.jsxs)(s.p,{children:["This means that when you use command like ",(0,l.jsx)(s.code,{children:"grep"})," for e.g., the shell will go to ",(0,l.jsx)(s.code,{children:"/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:"})," to find that command to execute."]}),"\n",(0,l.jsxs)(s.p,{children:["Let's say we have ",(0,l.jsx)(s.em,{children:"helloworld"})," program in ",(0,l.jsx)(s.em,{children:"bin"})," folder. Using like this won't work:"]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-shell",children:"$ helloworld\nzsh: command not found: helloworld\n\n$ bin/helloworld # path from the home directory to the executable file\n# executes the file\nHello, World!\n"})}),"\n",(0,l.jsxs)(s.p,{children:["To make it easier, you can add ",(0,l.jsx)(s.em,{children:"bin"})," to the PATH variable."]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-shell",children:"$ export PATH=$PATH:~/bin # extend the $PATH variable with bin, colon as separator\n\n# now you can use helloworld from everywhere\n$ helloworld\nHello, World!\n"})}),"\n",(0,l.jsx)(s.h3,{id:"aliases",children:"Aliases"}),"\n",(0,l.jsxs)(s.p,{children:["In macOS, the ",(0,l.jsx)(s.code,{children:"ls"})," list does not show any colors. To do it, you have to use ",(0,l.jsx)(s.code,{children:"ls -G"}),"."]}),"\n",(0,l.jsx)(s.p,{children:"Or you can simply put alias:"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-shell",children:'$ alias ls="ls -G"\n$ ls\n# show files in colors\n'})}),"\n",(0,l.jsx)(s.h3,{id:"community",children:"Community"}),"\n",(0,l.jsx)(s.p,{children:"Check out the documentations of bash and zsh."}),"\n",(0,l.jsxs)(s.p,{children:["Check out ",(0,l.jsx)(s.a,{href:"https://ohmyz.sh",children:"ohmyz.sh"}),"."]})]})}function h(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,l.jsx)(s,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},1151:(e,s,n)=>{n.d(s,{Z:()=>t,a:()=>o});var l=n(7294);const i={},r=l.createContext(i);function o(e){const s=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function t(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),l.createElement(r.Provider,{value:s},e.children)}}}]);