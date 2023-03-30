"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1386],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(a),m=l,v=d["".concat(p,".").concat(m)]||d[m]||c[m]||i;return a?n.createElement(v,r(r({ref:t},u),{},{components:a})):n.createElement(v,r({ref:t},u))}));function m(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=a.length,r=new Array(i);r[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var s=2;s<i;s++)r[s]=a[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5250:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=a(7462),l=(a(7294),a(3905));const i={sidebar_label:"setup",description:"Setup environment"},r="Environment setup",o={unversionedId:"learn/language/java/setup",id:"learn/language/java/setup",title:"Environment setup",description:"Setup environment",source:"@site/docs/learn/language/java/3-setup.mdx",sourceDirName:"learn/language/java",slug:"/learn/language/java/setup",permalink:"/my-blog/docs/learn/language/java/setup",draft:!1,editUrl:"https://github.com/huytunguyenn/my-blog/tree/main/docs/learn/language/java/3-setup.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"setup",description:"Setup environment"},sidebar:"docs",previous:{title:"characteristics",permalink:"/my-blog/docs/learn/language/java/characteristics"},next:{title:"data types",permalink:"/my-blog/docs/learn/language/java/data-types"}},p={},s=[{value:"Java Development Kit (JDK)",id:"java-development-kit-jdk",level:2},{value:"It is",id:"it-is",level:3},{value:"Installation",id:"installation",level:3},{value:"Windows",id:"windows",level:3},{value:"macOS",id:"macos",level:4},{value:"Linux",id:"linux",level:3},{value:"Integrated Development Environment (IDE)",id:"integrated-development-environment-ide",level:2},{value:"Native way",id:"native-way",level:3},{value:"IntelliJ",id:"intellij",level:3},{value:"Packing Java Application",id:"packing-java-application",level:2},{value:"Native way",id:"native-way-1",level:3},{value:"Build tools",id:"build-tools",level:3},{value:"Resources",id:"resources",level:2}],u={toc:s};function c(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"environment-setup"},"Environment setup"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"JRE (Java Runtime Environment): enables Java code execution, because Java is a cross-platform environment\n-> we don't need native code, we need thing called ",(0,l.kt)("strong",{parentName:"li"},"byte codes")),(0,l.kt)("li",{parentName:"ul"},"JDK (Java Development Kit): provides tools required to create Java apps (licensed - ",(0,l.kt)("em",{parentName:"li"},"Oracle Corporation"),", open source version - ",(0,l.kt)("em",{parentName:"li"},"OpenJDK"),")")),(0,l.kt)("p",null,"insert image"),(0,l.kt)("h2",{id:"java-development-kit-jdk"},"Java Development Kit (JDK)"),(0,l.kt)("h3",{id:"it-is"},"It is"),(0,l.kt)("p",null,"insert image"),(0,l.kt)("h3",{id:"installation"},"Installation"),(0,l.kt)("p",null,"Install the Java SE (the standard edition JDK)"),(0,l.kt)("admonition",{title:"Steps:",type:"note"},(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},"Download the latest JDK at ",(0,l.kt)("a",{parentName:"li",href:"https://jdk.java.net"},"jdk.java.net")),(0,l.kt)("li",{parentName:"ul"},"Setup ",(0,l.kt)("inlineCode",{parentName:"li"},"JAVA_HOME")," variable"),(0,l.kt)("li",{parentName:"ul"},"Update ",(0,l.kt)("inlineCode",{parentName:"li"},"PATH")," variable"),(0,l.kt)("li",{parentName:"ul"},"Verify correct installation ",(0,l.kt)("inlineCode",{parentName:"li"},"java --version")))),(0,l.kt)("h3",{id:"windows"},"Windows"),(0,l.kt)("h4",{id:"macos"},"macOS"),(0,l.kt)("p",null,"Download and unpack it into ",(0,l.kt)("inlineCode",{parentName:"p"},"/Library/Java/JavaVirtualMachine/")," and setting ",(0,l.kt)("inlineCode",{parentName:"p"},"JAVA_HOME")," and path variables."),(0,l.kt)("p",null,"Or using ",(0,l.kt)("inlineCode",{parentName:"p"},"Homebrew"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"brew tap homebew/cask-versions  # install Homebrew Cask\nbrew cask install java\n")),(0,l.kt)("h3",{id:"linux"},"Linux"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"/opt")),(0,l.kt)("p",null,"Ubuntu:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"apt update\napt install openjdk-13-jdk\nupdate-alternatives --config java\n")),(0,l.kt)("h2",{id:"integrated-development-environment-ide"},"Integrated Development Environment (IDE)"),(0,l.kt)("h3",{id:"native-way"},"Native way"),(0,l.kt)("p",null,"Use ",(0,l.kt)("inlineCode",{parentName:"p"},"javac")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"java")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"javac Hello.java # <- Java compiler takes the code and turn it into Java bytecode (create Hello.class)\njava Hello # JVM runs the .class file\n")),(0,l.kt)("p",null,"Other way is to use a popular Java IDE like:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"IntelliJ IDEA, JetBrains"),(0,l.kt)("li",{parentName:"ul"},"Eclipse, Eclipse Foundation"),(0,l.kt)("li",{parentName:"ul"},"NetBeans, Apache Foundation (before: Oracle)")),(0,l.kt)("h3",{id:"intellij"},"IntelliJ"),(0,l.kt)("p",null,"Use it!"),(0,l.kt)("h2",{id:"packing-java-application"},"Packing Java Application"),(0,l.kt)("p",null,"Java applications are packaged into JAR (",(0,l.kt)("strong",{parentName:"p"},"J"),"ava ",(0,l.kt)("strong",{parentName:"p"},"AR"),"chive) files, which contains application classes and metadata."),(0,l.kt)("p",null,"We can create launch-able JAR file in many ways:"),(0,l.kt)("h3",{id:"native-way-1"},"Native way"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"c"),": create, ",(0,l.kt)("inlineCode",{parentName:"p"},"v"),": verbose, ",(0,l.kt)("inlineCode",{parentName:"p"},"f"),": filename, ",(0,l.kt)("inlineCode",{parentName:"p"},"m"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"jar cvmf TC-MANIFEST.MF MyApplication.jar\n")),(0,l.kt)("p",null,"Create TC-MANIFEST.MF"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Main-Class: com.hahaha.Main\n")),(0,l.kt)("p",null,"Run:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"java -jar MyApplication.jar\n")),(0,l.kt)("h3",{id:"build-tools"},"Build tools"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Maven"),(0,l.kt)("li",{parentName:"ul"},"Gradle")),(0,l.kt)("h2",{id:"resources"},"Resources"),(0,l.kt)("p",null,"Learning:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Java Basic: ",(0,l.kt)("a",{parentName:"li",href:"https://www.tutorialspoint.com/java/"},"https://www.tutorialspoint.com/java/")),(0,l.kt)("li",{parentName:"ul"},"Others:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-092-introduction-to-programming-in-java-january-iap-2010/lecture-notes/"},"https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-092-introduction-to-programming-in-java-january-iap-2010/lecture-notes/")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://web.stanford.edu/class/archive/cs/cs108/cs108.1092/"},"http://web.stanford.edu/class/archive/cs/cs108/cs108.1092/"))))),(0,l.kt)("p",null,"Install JDK: ",(0,l.kt)("a",{parentName:"p",href:"https://www3.ntu.edu.sg/home/ehchua/programming/howto/JDK_Howto.html"},"https://www3.ntu.edu.sg/home/ehchua/programming/howto/JDK_Howto.html")),(0,l.kt)("p",null,"Coding standard and practices: ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/kms-technology/coding-guidelines/blob/master/java.md"},"https://github.com/kms-technology/coding-guidelines/blob/master/java.md")))}c.isMDXComponent=!0}}]);