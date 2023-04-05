"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4679],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var n=a(7294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var o=n.createContext({}),c=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,l=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(a),d=s,g=u["".concat(o,".").concat(d)]||u[d]||m[d]||l;return a?n.createElement(g,r(r({ref:t},p),{},{components:a})):n.createElement(g,r({ref:t},p))}));function d(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var l=a.length,r=new Array(l);r[0]=u;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:s,r[1]=i;for(var c=2;c<l;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3471:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=a(7462),s=(a(7294),a(3905));const l={sidebar_label:"classes & objects",toc_max_heading_level:4},r="Classes and Objects",i={unversionedId:"learn/language/java/classes-and-objects",id:"learn/language/java/classes-and-objects",title:"Classes and Objects",description:"Java is an object-oriented language.",source:"@site/docs/learn/language/java/9-classes-and-objects.mdx",sourceDirName:"learn/language/java",slug:"/learn/language/java/classes-and-objects",permalink:"/my-blog/docs/learn/language/java/classes-and-objects",draft:!1,editUrl:"https://github.com/huytunguyenn/my-blog/tree/main/docs/learn/language/java/9-classes-and-objects.mdx",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_label:"classes & objects",toc_max_heading_level:4},sidebar:"docs",previous:{title:"packages",permalink:"/my-blog/docs/learn/language/java/packages"},next:{title:"oop",permalink:"/my-blog/docs/learn/language/java/oop"}},o={},c=[{value:"Objects",id:"objects",level:2},{value:"Memory",id:"memory",level:3},{value:"Object Class Methods",id:"object-class-methods",level:3},{value:"Classes",id:"classes",level:2},{value:"Declare",id:"declare",level:3},{value:"Usage",id:"usage",level:3},{value:"Access Modifier",id:"access-modifier",level:2},{value:"Non-access Modifier",id:"non-access-modifier",level:2},{value:"Static Members",id:"static-members",level:3},{value:"Static Fields",id:"static-fields",level:4},{value:"Static Methods",id:"static-methods",level:4},{value:"Static Import Statement",id:"static-import-statement",level:4},{value:"Static Initialization Blocks",id:"static-initialization-blocks",level:4},{value:"Nested Classes",id:"nested-classes",level:2}],p={toc:c};function m(e){let{components:t,...l}=e;return(0,s.kt)("wrapper",(0,n.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"classes-and-objects"},"Classes and Objects"),(0,s.kt)("p",null,"Java is an object-oriented language."),(0,s.kt)("h2",{id:"objects"},"Objects"),(0,s.kt)("p",null,"In Java, ",(0,s.kt)("strong",{parentName:"p"},"everything is an object"),". It is the root of Java class hierarchy."),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"For example, look at the below image, it is hierarchy of classes to deal with input, output stream, it has the root of ",(0,s.kt)("inlineCode",{parentName:"em"},"Object")," class.")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"InputOutputStreamClass",src:a(9389).Z,width:"600",height:"400"})),(0,s.kt)("p",null,"Object has some characteristics:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"an ",(0,s.kt)("inlineCode",{parentName:"li"},"Object")," reference can reference an instance of any class"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"every class")," has characteristics of ",(0,s.kt)("inlineCode",{parentName:"li"},"Object"))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'Object[] stuff = new Object[3];\n\nstuff[0] = new Student(123);\nstuff[1] = new MathEquation();\nstuff[2] = "a string";\n\nObject o = "string";\no = new House(1);\n\nvoid doWork(Object o) { }\n')),(0,s.kt)("h3",{id:"memory"},"Memory"),(0,s.kt)("p",null,"When create object, Java allocates it in ",(0,s.kt)("strong",{parentName:"p"},"heap")," memory. But not only that, Java returns a reference to the object (object's address). And usually, we assign that to a variable."),(0,s.kt)("p",null,"So unlike ",(0,s.kt)("a",{parentName:"p",href:"/my-blog/docs/learn/language/java/data-types#primitive-types"},"Primitives")," (contain a value), Object variables contain a reference to the object."),(0,s.kt)("p",null,"We never interact with the object directly but through reference."),(0,s.kt)("h3",{id:"object-class-methods"},"Object Class Methods"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Method"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"clone")),(0,s.kt)("td",{parentName:"tr",align:null},"Create a new object instance that duplicates the current instance")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"hashCode")),(0,s.kt)("td",{parentName:"tr",align:null},"Get a hash code for current instance")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"getClass")),(0,s.kt)("td",{parentName:"tr",align:null},"Return type information for the current instance")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"finialize")),(0,s.kt)("td",{parentName:"tr",align:null},"Handle special resource cleanup scenarios")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"toString")),(0,s.kt)("td",{parentName:"tr",align:null},"Return a string value representing the current instance")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"equals")),(0,s.kt)("td",{parentName:"tr",align:null},"Compare another object to the current instance for equality")))),(0,s.kt)("p",null,"One application of this is to build ",(0,s.kt)("inlineCode",{parentName:"p"},"equals")," method:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"public class Person {\n  private int age;\n\n  public boolean equals(Object o) {\n    Person person = (Person) o;\n    return age == person.age;\n  }\n}\n")),(0,s.kt)("p",null,"But if we use ",(0,s.kt)("inlineCode",{parentName:"p"},"equals")," with classes that aren't ",(0,s.kt)("inlineCode",{parentName:"p"},"Person"),", it can crash the program. To prevent that, use ",(0,s.kt)("inlineCode",{parentName:"p"},"instanceof"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"public class Person {\n  private int age;\n  public boolean equals(Object o) {\n    // -highlight-start\n    if (!(o instanceof Person))\n      return false;\n    // -highlight-end\n    Person person = (Person) o;\n    return age == person.age;\n  }\n}\n")),(0,s.kt)("h2",{id:"classes"},"Classes"),(0,s.kt)("p",null,"Class is a template for creating objects. While object is an instance of a class."),(0,s.kt)("p",null,"Classes are reference types, means class variable simply hold a reference."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"Student tu = new Student();  // age: 0\nStudent huy = new Student();  // age: 0\ntu.age += 10;\n\n// this is reference type (because both tu and huy are not primitive types)\n// both variables can reference to the same instance\nhuy = tu;\n\nhuy.age // 10\nhuy.age += 2\ntu.age // 12\n")),(0,s.kt)("h3",{id:"declare"},"Declare"),(0,s.kt)("p",null,"Class has fields & methods."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"// Name.java  //  same name of class\nclass Name {\n  int attribute;\n  Name() {  // constructor\n    atrribute = 0;\n  }\n  void Method() {}\n}\n")),(0,s.kt)("p",null,"Final fields need to be initialized when create objects."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"// this will get error from compiler\nclass Person {\n  // -error\n  final int age;\n  Person() { }  // to fix, we need to init it in constructor\n}\n")),(0,s.kt)("h3",{id:"usage"},"Usage"),(0,s.kt)("p",null,"Declare a variable of type of the class doesn't create the object, it just holds the reference."),(0,s.kt)("p",null,"To create object, use ",(0,s.kt)("inlineCode",{parentName:"p"},"new")," keyword."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"Student huytu = new Student();\n\n// it's actually doing 2 step\nStudent huytu;  // create variable hold the reference\nhuytu = new Student(); // create new object instance & reference\n")),(0,s.kt)("h2",{id:"access-modifier"},"Access Modifier"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Access modifier")," is used to achieve ",(0,s.kt)("strong",{parentName:"p"},"encapsulation"),". It controls class/member visibility."),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Modifier"),(0,s.kt)("th",{parentName:"tr",align:null},"Visibility"),(0,s.kt)("th",{parentName:"tr",align:null},"Usable on Classes"),(0,s.kt)("th",{parentName:"tr",align:null},"Usable on Members"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"No access modifier"),(0,s.kt)("td",{parentName:"tr",align:null},"Only within its own package (aslo called ",(0,s.kt)("strong",{parentName:"td"},"package private"),")"),(0,s.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,s.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"public")),(0,s.kt)("td",{parentName:"tr",align:null},"Everywhere"),(0,s.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,s.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"private")),(0,s.kt)("td",{parentName:"tr",align:null},"Only within the declaring class"),(0,s.kt)("td",{parentName:"tr",align:null},"\u274c*"),(0,s.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"protected")),(0,s.kt)("td",{parentName:"tr",align:null},"Only within its package and all subclasses"),(0,s.kt)("td",{parentName:"tr",align:null}),(0,s.kt)("td",{parentName:"tr",align:null})))),(0,s.kt)("p",null,"*",(0,s.kt)("em",{parentName:"p"},"In general, classes cannot be ",(0,s.kt)("inlineCode",{parentName:"em"},"private"),". There is an exception, that is ",(0,s.kt)("a",{parentName:"em",href:"#nested-classes"},"nested classes")),"."),(0,s.kt)("h2",{id:"non-access-modifier"},"Non-access Modifier"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"static")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"final")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"abstract")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"strictfp")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"synchronized"))),(0,s.kt)("h3",{id:"static-members"},"Static Members"),(0,s.kt)("p",null,"Static members are shared class-wide.\n",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mo",{parentName:"mrow"},"\u2192")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\rightarrow")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.3669em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"\u2192")))))," now associated with individual instance"),(0,s.kt)("p",null,"Declared using ",(0,s.kt)("inlineCode",{parentName:"p"},"static")," keyword (non-access modifier).\n",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mo",{parentName:"mrow"},"\u2192")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\rightarrow")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.3669em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"\u2192")))))," accessible using class name"),(0,s.kt)("h4",{id:"static-fields"},"Static Fields"),(0,s.kt)("p",null,"A value not associated to any instance. All instances access the same value."),(0,s.kt)("h4",{id:"static-methods"},"Static Methods"),(0,s.kt)("p",null,"Performs an action not tied to a specific instance. Has access to static members only."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"public class Flight {\n  private int passengers, seats = 150;\n  private static int allPassengers;\n\n  public static int getAllPassengers() {\n    return allPassengers;\n  }\n  public static void resetAllPassengers() {\n    allPassengers = 0;\n  }\n  public void add1Passenger() {\n    passsenger += 1;\n    allPassengers += 1;\n  }\n}\n")),(0,s.kt)("p",null,"Usage:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"Flight.resetAllPassengers();  // allPassengers: 0\n\nFlight a = new Flight();\na.add1Passenger();  // allPassengers: 1\nFlight b = new Flight();\nb.add1Passenger();  // allPassengers: 2\n\nFlight.getAllPassengers();  // 2\n")),(0,s.kt)("h4",{id:"static-import-statement"},"Static Import Statement"),(0,s.kt)("p",null,"Import statement allows a type name to be used without being package-qualified."),(0,s.kt)("p",null,"Static import statement is used with static methods and allows method name to be used without being class-qualified."),(0,s.kt)("p",null,"The code above will become like this:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"import static com.example.flightapp.Flight.resetAllPassenger;\nimport static com.example.flightapp.Flight.getAllPassengers;\n// or\nimport static com.example.flightapp.Flight.*;\n\n// -error\nFlight.resetAllPassengers();\n// -highlight\nresetAllPassengers();\n\n// -error\nFlight.getAllPassengers();\n// -highlight\ngetAllPassengers();\n")),(0,s.kt)("h4",{id:"static-initialization-blocks"},"Static Initialization Blocks"),(0,s.kt)("p",null,"It performs one-time type initialization:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"execute before type's first use"),(0,s.kt)("li",{parentName:"ul"},"has access to static members only")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"public class Flight {\n  private static int allPassengers, maxPassengers;\n\n  // -highlight-start\n  static {\n    // do initial things\n  }\n  // -highlight-end\n}\n")),(0,s.kt)("h2",{id:"nested-classes"},"Nested Classes"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'class Outer {\n   int num;\n   // inner class\n   private class Inner {\n      public void print() {\n         System.out.println("This is an inner class");\n      }\n   }\n   // Accessing he inner class from the method within\n   void display_Inner() {\n      Inner inner = new Inner();\n      inner.print();\n   }\n}\n\npublic class Main {\n   public static void main(String args[]) {\n      Outer outer = new Outer();  // outer first\n      Outer.Inner inner = outer.new Inner();  // then inner\n      outer.display_Inner();\n      inner.print();\n   }\n}\n')),(0,s.kt)("p",null,"A static inner class is a nested class which is a static member of the outer class. It can be accessed without instantiating the outer class, using other static members."))}m.isMDXComponent=!0},9389:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/file_io-a3cbd97e3b065a6fa44917f09783c291.jpg"}}]);