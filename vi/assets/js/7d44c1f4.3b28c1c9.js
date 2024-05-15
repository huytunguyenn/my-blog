"use strict";(self.webpackChunktu_website=self.webpackChunktu_website||[]).push([[6305],{7080:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>t,contentTitle:()=>o,default:()=>a,frontMatter:()=>l,metadata:()=>d,toc:()=>r});var i=n(5893),c=n(1151);const l={sidebar_position:2},o="Basic first",d={id:"learn/utils/bash/basic_commands",title:"Basic first",description:"You can use up arrow to go to previous command.",source:"@site/docs/learn/utils/bash/basic_commands.mdx",sourceDirName:"learn/utils/bash",slug:"/learn/utils/bash/basic_commands",permalink:"/my-blog/vi/docs/learn/utils/bash/basic_commands",draft:!1,unlisted:!1,editUrl:"https://github.com/huytunguyenn/my-blog/tree/main/docs/learn/utils/bash/basic_commands.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docs",previous:{title:"Intro to shell",permalink:"/my-blog/vi/docs/learn/utils/bash/intro"},next:{title:"Advanced",permalink:"/my-blog/vi/docs/learn/utils/bash/advanced_commands"}},t={},r=[{value:"Read the docs",id:"read-the-docs",level:3},{value:"Anatomy of a command",id:"anatomy-of-a-command",level:3},{value:"Some commands",id:"some-commands",level:2},{value:"Navigate filesystem",id:"navigate-filesystem",level:3},{value:"Work with text files",id:"work-with-text-files",level:3},{value:"List files",id:"list-files",level:4},{value:"Edit with Nano",id:"edit-with-nano",level:4},{value:"Edit with Vi",id:"edit-with-vi",level:4},{value:"Case sensitivity in filenames",id:"case-sensitivity-in-filenames",level:3},{value:"Log in to another system using SSH",id:"log-in-to-another-system-using-ssh",level:2}];function h(e){const s={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"basic-first",children:"Basic first"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.em,{children:"You can use up arrow to go to previous command."})}),"\n",(0,i.jsx)(s.p,{children:"If your system does not support up/down arrow key, you can use Ctrl-p or Ctrl-n."}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"reset"})," to reset."]}),"\n",(0,i.jsx)(s.p,{children:"Ctrl-c to break off command."}),"\n",(0,i.jsx)(s.h3,{id:"read-the-docs",children:"Read the docs"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"man"})," for getting help. ",(0,i.jsxs)(s.em,{children:["E.g. ",(0,i.jsx)(s.code,{children:"man ls"})," to see info about ",(0,i.jsx)(s.code,{children:"ls"})," user commands."]})]}),"\n",(0,i.jsxs)(s.p,{children:["Then press ",(0,i.jsx)(s.code,{children:"space"})," to move down, press ",(0,i.jsx)(s.code,{children:"b"})," to move up. ",(0,i.jsx)(s.code,{children:"/"})," for search, write the word then enter, ",(0,i.jsx)(s.code,{children:"n"})," to find next occurs."]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"q"})," to exit."]}),"\n",(0,i.jsx)(s.h3,{id:"anatomy-of-a-command",children:"Anatomy of a command"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Words seperated by spaces","\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"First word: the command to run"}),"\n",(0,i.jsx)(s.li,{children:"Other words: arguments"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["Options are arguments starting with -","\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"It changes behavior of the command"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"Some for user interface:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"Space bar"})," to move down, ",(0,i.jsx)(s.code,{children:"b"})," to move up a page."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"/"})," for search, ",(0,i.jsx)(s.code,{children:"n"})," for next match."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"q"})," for quit."]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"some-commands",children:"Some commands"}),"\n",(0,i.jsx)(s.h3,{id:"navigate-filesystem",children:"Navigate filesystem"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"pwd"}),": path to work directory."]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"ls"}),": list contents. ",(0,i.jsx)(s.code,{children:"ls -a"}),": list all files including hidden. ",(0,i.jsx)(s.code,{children:"ls -l"}),": long format."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsxs)(s.em,{children:[(0,i.jsx)(s.code,{children:"a"})," and ",(0,i.jsx)(s.code,{children:"l"})," above called options. You can combine both by using ",(0,i.jsx)(s.code,{children:"ls -a -l"})," or just ",(0,i.jsx)(s.code,{children:"ls -la"}),"."]})}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"cd somePathToDir"}),": change directory by go ",(0,i.jsx)(s.em,{children:"somePathToDir"}),"."]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"cd"}),": go to home directory."]}),"\n",(0,i.jsxs)(s.p,{children:["To get the suggestion when ",(0,i.jsx)(s.code,{children:"cd"}),", use tab. E.g. in ",(0,i.jsx)(s.strong,{children:"bash"}),":"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-shell",children:"$ cd D# then hit tab twice\n# shows all directories start with 'D'\nDesktop/    Documents/  Downloads/\n\n$ cd Doc# then tab\n$ cd Documents/\n"})}),"\n",(0,i.jsxs)(s.p,{children:["With ",(0,i.jsx)(s.strong,{children:"zsh"}),", you only to tab once to show all suggestions, then continue to tab to choose the directory."]}),"\n",(0,i.jsx)(s.h3,{id:"work-with-text-files",children:"Work with text files"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"touch file1 file2"}),": create empty files."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsxs)(s.em,{children:["If you want space in filename, use single quote or backlash ",(0,i.jsx)(s.code,{children:"\\"})," escape"]})}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"mkdir someDir"}),": create directory."]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"rm someFile"}),": delete file permanently."]}),"\n",(0,i.jsx)(s.h4,{id:"list-files",children:"List files"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"cat someFile"}),": show content of ",(0,i.jsx)(s.em,{children:"someFile"}),". Use ",(0,i.jsx)(s.code,{children:"less someFile"})," if the file is large & complex (then you can use ",(0,i.jsx)(s.code,{children:"space"})," and ",(0,i.jsx)(s.code,{children:"b"})," to move around, etc.)."]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"file someFile"}),": info of ",(0,i.jsx)(s.em,{children:"someFile"}),"."]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"open someFile"}),": open a file (macOS)."]}),"\n",(0,i.jsx)(s.h4,{id:"edit-with-nano",children:"Edit with Nano"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"nano someFile"}),", it will show some instructions at bottom."]}),"\n",(0,i.jsx)(s.h4,{id:"edit-with-vi",children:"Edit with Vi"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"vi someFile"}),"."]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Vi"})," has different modes:"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Command mode ",(0,i.jsx)(s.em,{children:"(default)"}),":","\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"X"}),": delete a character."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"DD"}),": delete whole line."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:":"})," ",(0,i.jsxs)(s.em,{children:["(shows ",(0,i.jsx)(s.code,{children:":"})," at the bottom"]}),"U, then do below before enter:","\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"w"}),": write (save file's changes)."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"q"}),": exit ",(0,i.jsx)(s.strong,{children:"vi"}),". ",(0,i.jsx)(s.code,{children:"q!"}),": exit without saving changes."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"wq"}),": write and exit."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["Insert mode:","\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Press ",(0,i.jsx)(s.code,{children:"i"})," to enter this mode ",(0,i.jsxs)(s.em,{children:["(at the bottom shows ",(0,i.jsx)(s.code,{children:"-- INSERT --"}),")"]}),"."]}),"\n",(0,i.jsxs)(s.li,{children:["Press ",(0,i.jsx)(s.code,{children:"esc"})," to exit this mode."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"case-sensitivity-in-filenames",children:"Case sensitivity in filenames"}),"\n",(0,i.jsx)(s.p,{children:"Default filesystem on macOS is not case-sensitive."}),"\n",(0,i.jsx)(s.p,{children:"Characters to avoid:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Quotes: ",(0,i.jsx)(s.code,{children:" `` ' \""})]}),"\n",(0,i.jsxs)(s.li,{children:["Brackets, parens: ",(0,i.jsx)(s.code,{children:"{} () <> []"})]}),"\n",(0,i.jsxs)(s.li,{children:["Interpunction: ",(0,i.jsx)(s.code,{children:"! ? & | : ; \\ ^"})]}),"\n",(0,i.jsxs)(s.li,{children:["Other: ",(0,i.jsx)(s.code,{children:"$ @ ~ * #"})]}),"\n",(0,i.jsx)(s.li,{children:"Whitespace: tab delete backspace newline"}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"log-in-to-another-system-using-ssh",children:"Log in to another system using SSH"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:"ssh someLinuxServer"})}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"The prompt"})," will also change corresponding to the session."]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"exit"}),", ",(0,i.jsx)(s.code,{children:"logout"})]})]})}function a(e={}){const{wrapper:s}={...(0,c.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},1151:(e,s,n)=>{n.d(s,{Z:()=>d,a:()=>o});var i=n(7294);const c={},l=i.createContext(c);function o(e){const s=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:o(e.components),i.createElement(l.Provider,{value:s},e.children)}}}]);