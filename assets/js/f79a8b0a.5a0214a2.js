"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1386],{3905:(e,a,t)=>{t.d(a,{Zo:()=>u,kt:()=>v});var n=t(7294);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=n.createContext({}),s=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},u=function(e){var a=s(e.components);return n.createElement(p.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,l=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(t),v=l,m=d["".concat(p,".").concat(v)]||d[v]||c[v]||i;return t?n.createElement(m,r(r({ref:a},u),{},{components:t})):n.createElement(m,r({ref:a},u))}));function v(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var i=t.length,r=new Array(i);r[0]=d;var o={};for(var p in a)hasOwnProperty.call(a,p)&&(o[p]=a[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var s=2;s<i;s++)r[s]=t[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5250:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=t(7462),l=(t(7294),t(3905));const i={sidebar_label:"setup",description:"Setup environment"},r="Environment setup",o={unversionedId:"learn/language/java/setup",id:"learn/language/java/setup",title:"Environment setup",description:"Setup environment",source:"@site/docs/learn/language/java/3-setup.mdx",sourceDirName:"learn/language/java",slug:"/learn/language/java/setup",permalink:"/my-blog/docs/learn/language/java/setup",draft:!1,editUrl:"https://github.com/huytunguyenn/my-blog/tree/main/docs/learn/language/java/3-setup.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"setup",description:"Setup environment"},sidebar:"docs",previous:{title:"characteristics",permalink:"/my-blog/docs/learn/language/java/characteristics"},next:{title:"data types",permalink:"/my-blog/docs/learn/language/java/data-types"}},p={},s=[{value:"Java Development Kit (JDK)",id:"java-development-kit-jdk",level:2},{value:"It is",id:"it-is",level:3},{value:"Installation",id:"installation",level:3},{value:"Windows",id:"windows",level:3},{value:"macOS",id:"macos",level:3},{value:"Linux",id:"linux",level:3},{value:"Integrated Development Environment (IDE)",id:"integrated-development-environment-ide",level:2},{value:"Native way",id:"native-way",level:3},{value:"IntelliJ",id:"intellij",level:3},{value:"Packing Java Application",id:"packing-java-application",level:2},{value:"Native way",id:"native-way-1",level:3},{value:"Build tools",id:"build-tools",level:3}],u={toc:s};function c(e){let{components:a,...t}=e;return(0,l.kt)("wrapper",(0,n.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"environment-setup"},"Environment setup"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"JRE (Java Runtime Environment): enables Java code execution, because Java is a cross-platform environment\n-> we don't need native code, we need thing called ",(0,l.kt)("strong",{parentName:"li"},"byte codes")),(0,l.kt)("li",{parentName:"ul"},"JDK (Java Development Kit): provides tools required to create Java apps (licensed - ",(0,l.kt)("em",{parentName:"li"},"Oracle Corporation"),", open source version - ",(0,l.kt)("em",{parentName:"li"},"OpenJDK"),")")),(0,l.kt)("p",null,"insert image"),(0,l.kt)("h2",{id:"java-development-kit-jdk"},"Java Development Kit (JDK)"),(0,l.kt)("h3",{id:"it-is"},"It is"),(0,l.kt)("p",null,"insert image"),(0,l.kt)("h3",{id:"installation"},"Installation"),(0,l.kt)("p",null,"Install the Java SE (the standard edition JDK)"),(0,l.kt)("admonition",{title:"Steps:",type:"note"},(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},"Download the latest JDK at ",(0,l.kt)("a",{parentName:"li",href:"https://jdk.java.net"},"jdk.java.net")),(0,l.kt)("li",{parentName:"ul"},"Setup ",(0,l.kt)("inlineCode",{parentName:"li"},"JAVA_HOME")," variable"),(0,l.kt)("li",{parentName:"ul"},"Update ",(0,l.kt)("inlineCode",{parentName:"li"},"PATH")," variable"),(0,l.kt)("li",{parentName:"ul"},"Verify correct installation ",(0,l.kt)("inlineCode",{parentName:"li"},"java --version")))),(0,l.kt)("h3",{id:"windows"},"Windows"),(0,l.kt)("h3",{id:"macos"},"macOS"),(0,l.kt)("p",null,"Download and unpack it into ",(0,l.kt)("inlineCode",{parentName:"p"},"/Library/Java/JavaVirtualMachine/")," and setting ",(0,l.kt)("inlineCode",{parentName:"p"},"JAVA_HOME")," and path variables."),(0,l.kt)("p",null,"Or using ",(0,l.kt)("inlineCode",{parentName:"p"},"Homebrew"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"brew tap homebew/cask-versions  # install Homebrew Cask\nbrew cask install java\n")),(0,l.kt)("h3",{id:"linux"},"Linux"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"/opt")),(0,l.kt)("p",null,"Ubuntu:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"apt update\napt install openjdk-13-jdk\nupdate-alternatives --config java\n")),(0,l.kt)("h2",{id:"integrated-development-environment-ide"},"Integrated Development Environment (IDE)"),(0,l.kt)("h3",{id:"native-way"},"Native way"),(0,l.kt)("p",null,"Use ",(0,l.kt)("inlineCode",{parentName:"p"},"javac")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"java")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"javac Hello.java # <- Java compiler takes the code and turn it into Java bytecode (create Hello.class)\njava Hello # JVM runs the .class file\n")),(0,l.kt)("p",null,"Other way is to use a popular Java IDE like:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"IntelliJ IDEA, JetBrains"),(0,l.kt)("li",{parentName:"ul"},"Eclipse, Eclipse Foundation"),(0,l.kt)("li",{parentName:"ul"},"NetBeans, Apache Foundation (before: Oracle)")),(0,l.kt)("h3",{id:"intellij"},"IntelliJ"),(0,l.kt)("p",null,"Use it!"),(0,l.kt)("h2",{id:"packing-java-application"},"Packing Java Application"),(0,l.kt)("p",null,"Java applications are packaged into JAR (",(0,l.kt)("strong",{parentName:"p"},"J"),"ava ",(0,l.kt)("strong",{parentName:"p"},"AR"),"chive) files, which contains application classes and metadata."),(0,l.kt)("p",null,"We can create launch-able JAR file in many ways:"),(0,l.kt)("h3",{id:"native-way-1"},"Native way"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"c"),": create, ",(0,l.kt)("inlineCode",{parentName:"p"},"v"),": verbose, ",(0,l.kt)("inlineCode",{parentName:"p"},"f"),": filename, ",(0,l.kt)("inlineCode",{parentName:"p"},"m"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"jar cvmf TC-MANIFEST.MF MyApplication.jar\n")),(0,l.kt)("p",null,"Create TC-MANIFEST.MF"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Main-Class: com.hahaha.Main\n")),(0,l.kt)("p",null,"Run:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"java -jar MyApplication.jar\n")),(0,l.kt)("h3",{id:"build-tools"},"Build tools"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Maven"),(0,l.kt)("li",{parentName:"ul"},"Gradle")))}c.isMDXComponent=!0}}]);