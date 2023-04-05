"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8181],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>d});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=p(a),d=l,k=c["".concat(o,".").concat(d)]||c[d]||u[d]||r;return a?n.createElement(k,i(i({ref:t},m),{},{components:a})):n.createElement(k,i({ref:t},m))}));function d(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:l,i[1]=s;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},539:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var n=a(7462),l=(a(7294),a(3905));const r={sidebar_label:"data types",toc_max_heading_level:4},i="Variables, Data Types & Math Operations",s={unversionedId:"learn/language/java/data-types",id:"learn/language/java/data-types",title:"Variables, Data Types & Math Operations",description:"Variables",source:"@site/docs/learn/language/java/4-data-types.mdx",sourceDirName:"learn/language/java",slug:"/learn/language/java/data-types",permalink:"/my-blog/vi/docs/learn/language/java/data-types",draft:!1,editUrl:"https://github.com/huytunguyenn/my-blog/tree/main/docs/learn/language/java/4-data-types.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_label:"data types",toc_max_heading_level:4},sidebar:"docs",previous:{title:"setup",permalink:"/my-blog/vi/docs/learn/language/java/setup"},next:{title:"logic & statements",permalink:"/my-blog/vi/docs/learn/language/java/logic-statements"}},o={},p=[{value:"Variables",id:"variables",level:2},{value:"Instantiate &amp; Initialize",id:"instantiate--initialize",level:3},{value:"Constants",id:"constants",level:3},{value:"Usage",id:"usage",level:4},{value:"Constants vs. Immutable",id:"constants-vs-immutable",level:4},{value:"Primitive Types",id:"primitive-types",level:2},{value:"Integer",id:"integer",level:3},{value:"Floating Point",id:"floating-point",level:3},{value:"Character",id:"character",level:3},{value:"Boolean",id:"boolean",level:3},{value:"Objects",id:"objects",level:2},{value:"Reference Types",id:"reference-types",level:3},{value:"Special References",id:"special-references",level:3},{value:"this",id:"this",level:4},{value:"null",id:"null",level:4},{value:"Type Conversion",id:"type-conversion",level:2},{value:"Implicit Type Conversion",id:"implicit-type-conversion",level:3},{value:"Explicit Type Conversion",id:"explicit-type-conversion",level:3},{value:"Time and Date",id:"time-and-date",level:2},{value:"Instant",id:"instant",level:4},{value:"LocalTime",id:"localtime",level:4},{value:"LocalDate",id:"localdate",level:4},{value:"LocalDateTime",id:"localdatetime",level:4},{value:"ZonedDateTime",id:"zoneddatetime",level:4},{value:"DateTimeFormatter",id:"datetimeformatter",level:4},{value:"Enumeration Types",id:"enumeration-types",level:2},{value:"Relative Comparisons",id:"relative-comparisons",level:3},{value:"Enum Methods",id:"enum-methods",level:3},{value:"Enum Types as Classes",id:"enum-types-as-classes",level:3},{value:"Records",id:"records",level:2},{value:"Collections",id:"collections",level:2}],m={toc:p};function u(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"variables-data-types--math-operations"},"Variables, Data Types & Math Operations"),(0,l.kt)("h2",{id:"variables"},"Variables"),(0,l.kt)("p",null,"Use only letters & numbers, camelCase. First character cannot be a number."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"int total;\nint totalStudent;\nint 2much; // <- error\n")),(0,l.kt)("h3",{id:"instantiate--initialize"},"Instantiate & Initialize"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Instantiation"),": creating an object by using the ",(0,l.kt)("inlineCode",{parentName:"li"},"new")," keyword.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"Person p = new Person();\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Initialization"),": assigning a value to a variable is called initialization.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'int a = 10;\n// or\nPerson p = new Person();\np.setName("Alice");\np.setAge(30);\n')),(0,l.kt)("h3",{id:"constants"},"Constants"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"final")," keyword when it is used on:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"variable/field: means cannot reassign"),(0,l.kt)("li",{parentName:"ul"},"method: means cannot override"),(0,l.kt)("li",{parentName:"ul"},"class: means cannot inherit")),(0,l.kt)("h4",{id:"usage"},"Usage"),(0,l.kt)("p",null,"Variables can be declared ",(0,l.kt)("inlineCode",{parentName:"p"},"final"),", means the value cannot be changed once set."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"final int maxStudents = 25;\n// you declare it first\nfinal int someVar;\nint someDummyVar = 100;\nsomeVar = someDummyVar;\n// -error\nsomeVar = 100;  // <- error\n")),(0,l.kt)("p",null,"With object, the reference is constant, but not the object, so you still call method to change fields."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'final Person jennie = new Person("Jennie");\n// -error-start\njennie = new Person("Lisa");  // <- error\njennie = null;  // <- error\n// -error-end\njennie.changeName("Lisa");  // can call method to change fields\n')),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Read more about ",(0,l.kt)("a",{parentName:"em",href:"/my-blog/vi/docs/learn/language/java/classes-and-objects#objects"},"Objects"),".")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"final")," can also be used on classes & methods. Read more at ",(0,l.kt)("a",{parentName:"p",href:"/my-blog/vi/docs/learn/language/java/oop#final"},"final class/method"),"."),(0,l.kt)("h4",{id:"constants-vs-immutable"},"Constants vs. Immutable"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Constants: applies to ",(0,l.kt)("strong",{parentName:"li"},"variables"),", including object references. It means that you can't reassign the variable."),(0,l.kt)("li",{parentName:"ul"},"Immutable: applies to ",(0,l.kt)("strong",{parentName:"li"},"objects")," (e.g. strings). It means that you can't change the state of the object.")),(0,l.kt)("h2",{id:"primitive-types"},"Primitive Types"),(0,l.kt)("p",null,"Primitive types are stored by value, means each variable's values are unrelated to any others. These are foundation of all other types:"),(0,l.kt)("h3",{id:"integer"},"Integer"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Bits"),(0,l.kt)("th",{parentName:"tr",align:null},"Min value"),(0,l.kt)("th",{parentName:"tr",align:null},"Max value"),(0,l.kt)("th",{parentName:"tr",align:null},"Literal form"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"byte"),(0,l.kt)("td",{parentName:"tr",align:null},"8"),(0,l.kt)("td",{parentName:"tr",align:null},"-128"),(0,l.kt)("td",{parentName:"tr",align:null},"127"),(0,l.kt)("td",{parentName:"tr",align:null},"0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"short"),(0,l.kt)("td",{parentName:"tr",align:null},"16"),(0,l.kt)("td",{parentName:"tr",align:null},"-32768"),(0,l.kt)("td",{parentName:"tr",align:null},"32767"),(0,l.kt)("td",{parentName:"tr",align:null},"0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"32"),(0,l.kt)("td",{parentName:"tr",align:null},"-2147483648"),(0,l.kt)("td",{parentName:"tr",align:null},"2147483647"),(0,l.kt)("td",{parentName:"tr",align:null},"0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"long"),(0,l.kt)("td",{parentName:"tr",align:null},"64"),(0,l.kt)("td",{parentName:"tr",align:null},"-9223372036854775808"),(0,l.kt)("td",{parentName:"tr",align:null},"9223372036854775807"),(0,l.kt)("td",{parentName:"tr",align:null},"0L")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"byte a = 25;\nshort b = 5280;\nint c = 92960000;\nlong d = 5879000000000L;\n")),(0,l.kt)("h3",{id:"floating-point"},"Floating Point"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Bits"),(0,l.kt)("th",{parentName:"tr",align:null},"Smallest positive value"),(0,l.kt)("th",{parentName:"tr",align:null},"Largest positive value"),(0,l.kt)("th",{parentName:"tr",align:null},"Literal form"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"float"),(0,l.kt)("td",{parentName:"tr",align:null},"32"),(0,l.kt)("td",{parentName:"tr",align:null},"1.4 x 10^-45"),(0,l.kt)("td",{parentName:"tr",align:null},"3.4 x 10^38"),(0,l.kt)("td",{parentName:"tr",align:null},"0.0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"double"),(0,l.kt)("td",{parentName:"tr",align:null},"64"),(0,l.kt)("td",{parentName:"tr",align:null},"4.9 x 10^-324"),(0,l.kt)("td",{parentName:"tr",align:null},"1.7 x 10^308"),(0,l.kt)("td",{parentName:"tr",align:null},"0.0 or 0.0d")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"float a = 42.195f;\nfloat b = -273.15f;\ndouble c = 0.0000000001d;\n")),(0,l.kt)("h3",{id:"character"},"Character"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"char a = 'B';\nchar b = '\\u00DA';  // \xda (for Unicode code points, use \\u + 4-digit hex value)\n")),(0,l.kt)("h3",{id:"boolean"},"Boolean"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"boolean a = true;\n")),(0,l.kt)("h2",{id:"objects"},"Objects"),(0,l.kt)("p",null,"Read more about ",(0,l.kt)("a",{parentName:"p",href:"/my-blog/vi/docs/learn/language/java/classes-and-objects#objects"},"Objects"),"."),(0,l.kt)("h3",{id:"reference-types"},"Reference Types"),(0,l.kt)("p",null,"They are used to access objects, which are addresses of the objects in memory (4 or 8 bytes). It can refer to any object of declared/compatible type."),(0,l.kt)("p",null,"In Java, ",(0,l.kt)("strong",{parentName:"p"},"classes")," and various type of ",(0,l.kt)("strong",{parentName:"p"},"array")," variables are reference type."),(0,l.kt)("h3",{id:"special-references"},"Special References"),(0,l.kt)("h4",{id:"this"},"this"),(0,l.kt)("p",null,"Implicit reference to current object. This is optional to use in class."),(0,l.kt)("h4",{id:"null"},"null"),(0,l.kt)("p",null,"Represents an uncreated object. Sometimes, we just declare it and create after. Null Exception is a common error, to avoid that using initialization."),(0,l.kt)("h2",{id:"type-conversion"},"Type Conversion"),(0,l.kt)("h3",{id:"implicit-type-conversion"},"Implicit Type Conversion"),(0,l.kt)("p",null,"Conversion automatically performed by the compiler."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"int a = 50;\nlong b = a;\n")),(0,l.kt)("p",null,"Implicit widening conversions are automatically done:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Mixed integer sizes: use largest integer"),(0,l.kt)("li",{parentName:"ul"},"Mixed floating point sizes: use double"),(0,l.kt)("li",{parentName:"ul"},"Mixed integer and floating point: use largest floating point")),(0,l.kt)("p",null,"Compiler cannot automatically do narrowing conversions ",(0,l.kt)("span",{parentName:"p",className:"math math-inline"},(0,l.kt)("span",{parentName:"span",className:"katex"},(0,l.kt)("span",{parentName:"span",className:"katex-mathml"},(0,l.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,l.kt)("semantics",{parentName:"math"},(0,l.kt)("mrow",{parentName:"semantics"},(0,l.kt)("mo",{parentName:"mrow"},"\u2192")),(0,l.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\rightarrow")))),(0,l.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,l.kt)("span",{parentName:"span",className:"base"},(0,l.kt)("span",{parentName:"span",className:"strut",style:{height:"0.3669em"}}),(0,l.kt)("span",{parentName:"span",className:"mrel"},"\u2192")))))," explicit by developers."),(0,l.kt)("h3",{id:"explicit-type-conversion"},"Explicit Type Conversion"),(0,l.kt)("p",null,"Conversion performed explicitly in code with ",(0,l.kt)("em",{parentName:"p"},"cast operator"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"long b = 50;\nint a = (int) b;\n")),(0,l.kt)("p",null,"Consider with explicit conversions:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Narrowing: significant bits may be discarded"),(0,l.kt)("li",{parentName:"ul"},"Floating point ",(0,l.kt)("span",{parentName:"li",className:"math math-inline"},(0,l.kt)("span",{parentName:"span",className:"katex"},(0,l.kt)("span",{parentName:"span",className:"katex-mathml"},(0,l.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,l.kt)("semantics",{parentName:"math"},(0,l.kt)("mrow",{parentName:"semantics"},(0,l.kt)("mo",{parentName:"mrow"},"\u2192")),(0,l.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\rightarrow")))),(0,l.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,l.kt)("span",{parentName:"span",className:"base"},(0,l.kt)("span",{parentName:"span",className:"strut",style:{height:"0.3669em"}}),(0,l.kt)("span",{parentName:"span",className:"mrel"},"\u2192")))))," integer: fractional portion may be discarded"),(0,l.kt)("li",{parentName:"ul"},"Integer ",(0,l.kt)("span",{parentName:"li",className:"math math-inline"},(0,l.kt)("span",{parentName:"span",className:"katex"},(0,l.kt)("span",{parentName:"span",className:"katex-mathml"},(0,l.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,l.kt)("semantics",{parentName:"math"},(0,l.kt)("mrow",{parentName:"semantics"},(0,l.kt)("mo",{parentName:"mrow"},"\u2192")),(0,l.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\rightarrow")))),(0,l.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,l.kt)("span",{parentName:"span",className:"base"},(0,l.kt)("span",{parentName:"span",className:"strut",style:{height:"0.3669em"}}),(0,l.kt)("span",{parentName:"span",className:"mrel"},"\u2192")))))," floating point: precision may be lost (10000 may be 9999,9999)")),(0,l.kt)("h2",{id:"time-and-date"},"Time and Date"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Time of events: primarily interested in sequencing and timestamp."),(0,l.kt)("li",{parentName:"ul"},"Human-friendly time: date and/or time of day."),(0,l.kt)("li",{parentName:"ul"},"Global human-friendly time: date and time of day, understands time zone.")),(0,l.kt)("h4",{id:"instant"},"Instant"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"Instant nowInstant = Instant.now();\nInstant otherInstant\n\notherInstant.compareTo(nowInstant) // > < = 0\n")),(0,l.kt)("h4",{id:"localtime"},"LocalTime"),(0,l.kt)("p",null,"09:15:10.000000"),(0,l.kt)("h4",{id:"localdate"},"LocalDate"),(0,l.kt)("p",null,"2023-12-3"),(0,l.kt)("h4",{id:"localdatetime"},"LocalDateTime"),(0,l.kt)("h4",{id:"zoneddatetime"},"ZonedDateTime"),(0,l.kt)("h4",{id:"datetimeformatter"},"DateTimeFormatter"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'LocalDate today = LocalDate.now();  // 2023-03-30\n\nDateTimeFormatter usDateFormat = DateTimeFormatter.ofPattern("MM-dd-yyyy");\nString output = today.format(usDateFormat); // 03-30-2023\n')),(0,l.kt)("h2",{id:"enumeration-types"},"Enumeration Types"),(0,l.kt)("p",null,"A type with a finite list of valid values."),(0,l.kt)("p",null,"Enums support equality tests:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"==")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"!=")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"switch")," statement")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"public enum FlightCrewJob {\n  FLIGHT_ATTENDANT,  // all upper case\n  COPILOT,\n  PILOT\n}\n\nFlightCrewJob job1 = FlightCrewJob.PILOT;\nFlightCrewJob job2 = FlightCrewJob.COPILOT;\njob1 != job2\n\nswitch(job) {\n  case FLIGHT_ATTENDANT:\n    // statement\n    break;\n}\n")),(0,l.kt)("p",null,"It can be declared in a class and access through ",(0,l.kt)("inlineCode",{parentName:"p"},"ClassName.EnumName.EnumValue"),"."),(0,l.kt)("h3",{id:"relative-comparisons"},"Relative Comparisons"),(0,l.kt)("p",null,"The values are not just simple a list, they are ",(0,l.kt)("strong",{parentName:"p"},"ordered"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"first value is lowest"),(0,l.kt)("li",{parentName:"ul"},"last value is highest"),(0,l.kt)("li",{parentName:"ul"},"use ",(0,l.kt)("inlineCode",{parentName:"li"},"compareTo"))),(0,l.kt)("h3",{id:"enum-methods"},"Enum Methods"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Method"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"values")),(0,l.kt)("td",{parentName:"tr",align:null},"Returns an array contain all values")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"valueOf")),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the value that corresponds to a string (case sensitive)")))),(0,l.kt)("h3",{id:"enum-types-as-classes"},"Enum Types as Classes"),(0,l.kt)("p",null,"Enum types can be treated as classes:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"each value is an instance of the enum type:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'public enum FlightCrewJob {\n  FLIGHT_ATTENDANT,\n  COPILOT,\n  PILOT;  // semicolon before adding members\n  // -highlight-start\n  private String title;\n  public String getTitle() { return title; }\n  private FlightCrewJob(String title) {\n    this.title = title;\n    System.out.println("count");\n  }\n  // -highlight-end\n}\n')),(0,l.kt)("p",null,"It means ",(0,l.kt)("inlineCode",{parentName:"p"},"FLIGHT_ATTENDANT"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"COPILOT")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"PILOT")," are instances of ",(0,l.kt)("inlineCode",{parentName:"p"},"FlightCrewJob"),". Therefore, we can leverage the enum type's constructor:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'public enum FlightCrewJob {\n  // -highlight-start\n  FLIGHT_ATTENDANT("Flight Attendant"),\n  COPILOT("First Officer"),\n  PILOT("Captain");\n  // -highlight-end\n  private String title;\n  public String getTitle() { return title; }\n  private FlightCrewJob(String title) {\n    this.title = title;\n    System.out.println("count");\n  }\n}\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"declaring the value creates the instance:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"public static void main(String[] args){\n  System.out.println(FlightCrewJob.COPILOT.getTitle());\n  System.out.println(FlightCrewJob.PILOT.getTitle());\n}\n\n// highlight-start\n> count\n> count\n> count\n> First Officer\n> Captain\n// highlight-end\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Note that, enum declaration can be done outside a Class or inside a Class but not inside a Method.")),(0,l.kt)("h2",{id:"records"},"Records"),(0,l.kt)("p",null,"Some classes serve only as data carriers (data-only classes/data-transport objects):"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"initialized with required data values"),(0,l.kt)("li",{parentName:"ul"},"those values never change\n",(0,l.kt)("span",{parentName:"li",className:"math math-inline"},(0,l.kt)("span",{parentName:"span",className:"katex"},(0,l.kt)("span",{parentName:"span",className:"katex-mathml"},(0,l.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,l.kt)("semantics",{parentName:"math"},(0,l.kt)("mrow",{parentName:"semantics"},(0,l.kt)("mo",{parentName:"mrow"},"\u2192")),(0,l.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\rightarrow")))),(0,l.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,l.kt)("span",{parentName:"span",className:"base"},(0,l.kt)("span",{parentName:"span",className:"strut",style:{height:"0.3669em"}}),(0,l.kt)("span",{parentName:"span",className:"mrel"},"\u2192")))))," involves a lot of ",(0,l.kt)("em",{parentName:"li"},"boilerplate")," code like this:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"public class Person {\n  private String name;\n  private int age;\n  public Person(String name, int age) { this.name = name; this.age = age; }\n  // getters\n  public String getName() { return name; }\n  public int getAge() { return age; }\n  // common methods\n  public boolean equals(Object o) { }\n  public int hashCode() { }\n  public String toString() { }\n}\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"record")," come to rescue:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'public record Person(String name, int age) { }\n\nPerson bob = new Person("Bob", 2);\nString name = bob.name();\nint age = bob.age();\n\nbob.equals(alice);\n')),(0,l.kt)("h2",{id:"collections"},"Collections"),(0,l.kt)("p",null,"They are collections of similar data elements stored at contiguous memory locations."),(0,l.kt)("p",null,"They are different from primitives type, since they are references. See more at ",(0,l.kt)("a",{parentName:"p",href:"/my-blog/vi/docs/learn/language/java/collections"},"Collections"),"."))}u.isMDXComponent=!0}}]);