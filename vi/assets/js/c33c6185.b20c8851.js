"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8552],{3905:(e,a,t)=>{t.d(a,{Zo:()=>o,kt:()=>N});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function m(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=n.createContext({}),p=function(e){var a=n.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},o=function(e){var a=p(e.components);return n.createElement(i.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},k=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,o=m(e,["components","mdxType","originalType","parentName"]),k=p(t),N=r,d=k["".concat(i,".").concat(N)]||k[N]||c[N]||s;return t?n.createElement(d,l(l({ref:a},o),{},{components:t})):n.createElement(d,l({ref:a},o))}));function N(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var s=t.length,l=new Array(s);l[0]=k;var m={};for(var i in a)hasOwnProperty.call(a,i)&&(m[i]=a[i]);m.originalType=e,m.mdxType="string"==typeof e?e:r,l[1]=m;for(var p=2;p<s;p++)l[p]=t[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}k.displayName="MDXCreateElement"},3324:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>s,metadata:()=>m,toc:()=>p});var n=t(7462),r=(t(7294),t(3905));const s={sidebar_label:"collections"},l="Collections",m={unversionedId:"learn/language/java/collections",id:"learn/language/java/collections",title:"Collections",description:"Arrays",source:"@site/docs/learn/language/java/6-collections.mdx",sourceDirName:"learn/language/java",slug:"/learn/language/java/collections",permalink:"/my-blog/vi/docs/learn/language/java/collections",draft:!1,editUrl:"https://github.com/huytunguyenn/my-blog/tree/main/docs/learn/language/java/6-collections.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_label:"collections"},sidebar:"docs",previous:{title:"logic & statements",permalink:"/my-blog/vi/docs/learn/language/java/logic-statements"},next:{title:"methods",permalink:"/my-blog/vi/docs/learn/language/java/functions-methods"}},i={},p=[{value:"Arrays",id:"arrays",level:2},{value:"Problems",id:"problems",level:3},{value:"Collection of Collections",id:"collection-of-collections",level:2},{value:"What to use?",id:"what-to-use",level:3},{value:"Common behaviors",id:"common-behaviors",level:3},{value:"Lists",id:"lists",level:2},{value:"Key Features",id:"key-features",level:3},{value:"Basic get/set",id:"basic-getset",level:4},{value:"Static Factory Methods",id:"static-factory-methods",level:4},{value:"Lookup &amp; Split",id:"lookup--split",level:4},{value:"Sorting",id:"sorting",level:4},{value:"Implementations",id:"implementations",level:3},{value:"ArrayList",id:"arraylist",level:4},{value:"LinkedList",id:"linkedlist",level:4},{value:"Performance Comparison",id:"performance-comparison",level:3},{value:"Maps",id:"maps",level:2},{value:"Key Features",id:"key-features-1",level:3},{value:"Views",id:"views",level:4},{value:"Immutable Map Factories",id:"immutable-map-factories",level:4},{value:"Implementations",id:"implementations-1",level:3},{value:"HashMap",id:"hashmap",level:4},{value:"TreeMap",id:"treemap",level:4},{value:"Java Streams",id:"java-streams",level:2},{value:"Collection Operations &amp; Factories",id:"collection-operations--factories",level:2},{value:"Sets (Collection with Uniqueness)",id:"sets-collection-with-uniqueness",level:2}],o={toc:p};function c(e){let{components:a,...s}=e;return(0,r.kt)("wrapper",(0,n.Z)({},o,s,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"collections"},"Collections"),(0,r.kt)("h2",{id:"arrays"},"Arrays"),(0,r.kt)("p",null,"Arrays provide an ordered collection of elements. They're ",(0,r.kt)("strong",{parentName:"p"},"immutable"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"float[] theVals = new float[3];\nfloat[] theVals = { 10.0f, 20.0f, 15.0f };\n")),(0,r.kt)("p",null,"In Java, array variables are references. See more at ",(0,r.kt)("a",{parentName:"p",href:"/my-blog/vi/docs/learn/language/java/data-types#reference-types"},"References")," to learn more."),(0,r.kt)("h3",{id:"problems"},"Problems"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'private static Product[] add(Product product, Product[] array){\n  int length = array.length;\n  var newArray = Arrays.copyOf(array, length + 1);\n  newArray[length] = product;\n  return newArray;\n}\nvar door = new Product("Wooden Door", 35);\nvar floorPanel = new Product("Floor Panel", 25);\nvar window = new Product("Glass Window", 10);\n\n// Create\nProduct[] products = { door, floorPanel };\n// 1. Print - horrible format\n// highlight\nSystem.out.println(products);\n// -highlight\nSystem.out.println(Arrays.toString(products));\n// 2. Add - complex code\n// -error\nproducts[2] = window;  // array is immutable\n// -highlight\nproducts = add(window, products);\n// 3. Duplicates - no way\n// highlight\nproducts = add(window, products);\n')),(0,r.kt)("p",null,"Array is also ",(0,r.kt)("strong",{parentName:"p"},"covariant"),". So we'd better not using it. Read more at this ",(0,r.kt)("a",{parentName:"p",href:"/my-blog/vi/docs/learn/language/java/advanced#working-with-inheritance"},"example"),"."),(0,r.kt)("h2",{id:"collection-of-collections"},"Collection of Collections"),(0,r.kt)("p",null,"Each collection has more than 2 different components."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Interfaces"),(0,r.kt)("th",{parentName:"tr",align:null},"Implementation"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Multiple data structures"),(0,r.kt)("td",{parentName:"tr",align:null},"Specific data structures")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Functional characteristics (behavior)"),(0,r.kt)("td",{parentName:"tr",align:null},"Performance characteristics")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Prefer as ",(0,r.kt)("strong",{parentName:"td"},"variable type")),(0,r.kt)("td",{parentName:"tr",align:null},"Concrete and instantiable")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Often has a popular implementation"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"collections&#39; components",src:t(9067).Z,width:"994",height:"512"})),(0,r.kt)("h3",{id:"what-to-use"},"What to use?"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"collection decision tree",src:t(9395).Z,width:"1024",height:"556"})),(0,r.kt)("h3",{id:"common-behaviors"},"Common behaviors"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"size()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"isEmpty()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"add()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"addAll()"),": like ",(0,r.kt)("inlineCode",{parentName:"li"},"add")," but for many"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"remove(element)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"removeAll(collection)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"retainAll(collection)"),": retain: gi\u1eef l\u1ea1i"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"contains(element)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"containsAll(collection)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"clear()"))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Collection")," extends ",(0,r.kt)("inlineCode",{parentName:"p"},"Iterable")," (like ",(0,r.kt)("inlineCode",{parentName:"p"},"Iterator"),")."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Collection<Product> products = new ArrayList<>();\nproducts.add(door);\nproducts.add(floorPanel);\nproducts.add(window);\n\n// -error-start\nfor (var product : products) {\n  products.remove(product);   // you cannot modify when loop like this\n}\n// -error-end\n// -highlight\nproducts.removeIf(product -> product.weight() > 20);\n\n// -highlight-start\n// use iterator to remove products.\nIterator<Product> iterator = products.iterator();\nwhile (iterator.hasNext()) {\n  final Product product = iterator.next();\n  if (product.weight() > 20) {\n    iterator.remove();\n  }\n}\n// -highlight-end\n")),(0,r.kt)("p",null,"These methods pass in a ",(0,r.kt)("a",{parentName:"p",href:"/my-blog/vi/docs/learn/language/java/advanced#lambda-expressions-1"},"lambda expression")," that implements some common ",(0,r.kt)("a",{parentName:"p",href:"/my-blog/vi/docs/learn/language/java/advanced#standard-functional-interfaces"},"functional interface"),"."),(0,r.kt)("h2",{id:"lists"},"Lists"),(0,r.kt)("p",null,"List are collections with ",(0,r.kt)("strong",{parentName:"p"},"iteration order"),". Every element in the list has an index."),(0,r.kt)("h3",{id:"key-features"},"Key Features"),(0,r.kt)("h4",{id:"basic-getset"},"Basic get/set"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"void add(int index, E e)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"E get(int index)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"E remove(int index)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"E set(int index, E element)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"boolean addAll(int index, Collection c)"))),(0,r.kt)("h4",{id:"static-factory-methods"},"Static Factory Methods"),(0,r.kt)("p",null,"Creates ",(0,r.kt)("strong",{parentName:"p"},"unmodifiable")," List instance"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"List<E> of()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"List<E> of(E e1, E e2)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"List<E> of (E ... elements)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"List<E> copyOf(Collection<E>)"),": this is a shallow copy (just copies values)")),(0,r.kt)("p",null,"Overloads for 0-10 arguments. For > 10 args, there's ",(0,r.kt)("a",{parentName:"p",href:"/my-blog/vi/docs/learn/language/java/advanced#varargs"},"varargs constructor"),"."),(0,r.kt)("h4",{id:"lookup--split"},"Lookup & Split"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"int indexOf(Object o)"),": return ",(0,r.kt)("inlineCode",{parentName:"li"},"-1")," if not found"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"int lastIndexOf(Object o)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"List subList(int fromIndex, int toIndex)"),": this is a view, modifying the view also modifies the backing list itself")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Modifying a ",(0,r.kt)("strong",{parentName:"p"},"view")," also affects on the backing one.")),(0,r.kt)("h4",{id:"sorting"},"Sorting"),(0,r.kt)("p",null,"Java use TimSort-based algorithm"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"list.sort(Comparator<? Super E> comparator)"),": comparator defines sort order")),(0,r.kt)("p",null,"A Comparator is an interface in Java that defines sort order."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// define Comparator\nimport java.util.Comparator;\npublic static final Comparator<Product> BY_WEIGHT = Comparator.comparingInt(Product::weight);\n/**\nimplements\npublic interface Comparator<T> {\n  int compare(T o1, T o2);\n}\n**/\nproducts.sort(Product.BY_WEIGHT);\n")),(0,r.kt)("h3",{id:"implementations"},"Implementations"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"Avoid ",(0,r.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"List")," legacy implementations"),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"avoid")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Vector"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Stack"),", they're synchronized.")),(0,r.kt)("h4",{id:"arraylist"},"ArrayList"),(0,r.kt)("admonition",{title:"How it works",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"There is a ",(0,r.kt)("em",{parentName:"p"},"backing array"),", where there's many space to add, remove, etc. Most of the time, JDK start with an empty backing array.\nWhen you add first element, it grows to the default initial collection size (10)."),(0,r.kt)("p",{parentName:"admonition"},"Once you run out of 10 elements, it starts to ",(0,r.kt)("em",{parentName:"p"},"doubling")," in size.")),(0,r.kt)("p",null,"This is good general purpose implementation, use as default. CPU cache sympathetic."),(0,r.kt)("h4",{id:"linkedlist"},"LinkedList"),(0,r.kt)("p",null,"Has head nodes and tail nodes, they could be the same and pointer at each of them. ",(0,r.kt)("inlineCode",{parentName:"p"},"LinkedList")," in Java is doubly linked list (c\xf3 h\u01b0\u1edbng ng\u01b0\u1ee3c l\u1ea1i)."),(0,r.kt)("p",null,"Most of the time, worse performance. Only good when adding elements at start, adding/remove a lot."),(0,r.kt)("h3",{id:"performance-comparison"},"Performance Comparison"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"get"),(0,r.kt)("th",{parentName:"tr",align:null},"add"),(0,r.kt)("th",{parentName:"tr",align:null},"contains"),(0,r.kt)("th",{parentName:"tr",align:null},"remove"),(0,r.kt)("th",{parentName:"tr",align:null},"next"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ArrayList")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{parentName:"td",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"O"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mn",{parentName:"mrow"},"1"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(1)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord"},"1"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")")))))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{parentName:"td",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"O"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mi",{parentName:"mrow"},"N"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(N)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10903em"}},"N"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")")))))," doubling strategy, copy & expand the list",(0,r.kt)("br",null),(0,r.kt)("span",{parentName:"td",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\u03a9"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mn",{parentName:"mrow"},"1"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\Omega(1)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"\u03a9"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord"},"1"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")")))))," with larger array"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{parentName:"td",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"O"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mi",{parentName:"mrow"},"N"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(N)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10903em"}},"N"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")")))))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{parentName:"td",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"O"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mi",{parentName:"mrow"},"N"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(N)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10903em"}},"N"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")")))))," delete head"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{parentName:"td",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"O"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mn",{parentName:"mrow"},"1"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(1)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord"},"1"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")"))))))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"LinkedList")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{parentName:"td",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"O"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mi",{parentName:"mrow"},"N"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(N)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10903em"}},"N"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")")))))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{parentName:"td",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"O"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mn",{parentName:"mrow"},"1"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(1)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord"},"1"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")")))))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{parentName:"td",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"O"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mi",{parentName:"mrow"},"N"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(N)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10903em"}},"N"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")")))))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{parentName:"td",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"O"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mi",{parentName:"mrow"},"N"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(N)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10903em"}},"N"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")")))))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{parentName:"td",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"O"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mn",{parentName:"mrow"},"1"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(1)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord"},"1"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")"))))))))),(0,r.kt)("h2",{id:"maps"},"Maps"),(0,r.kt)("p",null,"Maps are collections of ",(0,r.kt)("strong",{parentName:"p"},"pairs"),", like dictionaries. Key -> Value. Key are unique."),(0,r.kt)("p",null,"Map is better because it helps you not to deal with lookup loop so much. ",(0,r.kt)("inlineCode",{parentName:"p"},"Map")," is the only collections that don't extend or implement the ",(0,r.kt)("inlineCode",{parentName:"p"},"Collection")," interface."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},'Java use "map" terms instead of "dictionary", but it\'s actually a class in JDK & it predates the original Java collection API & kind of deprecated at this time. So ',(0,r.kt)("strong",{parentName:"p"},"don't use it"),".")),(0,r.kt)("h3",{id:"key-features-1"},"Key Features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"V put(K key, V value)"),": return previous value associated with the key, if no, return null"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"void putAll(Map<? extends K, ? extends V> values)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"get(Object key)"),": if no, return null"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"boolean constainsKey(Object key)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"boolean constainsValue(Object value)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"V remove(Object key)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"void clear()"))),(0,r.kt)("p",null,"*",(0,r.kt)("em",{parentName:"p"},"Use Object type rather than K key generic: if you have a local variable that is type of Object and has a string in it, you can use that variable without introducing additional cast to a specific key type")),(0,r.kt)("h4",{id:"views"},"Views"),(0,r.kt)("p",null,"Modify it also modify backing map. All below return a view."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"var ids = map.keySet();")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"var values = map.values();")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"var entries = map.entrySet();"),": entry represents a <K, V> pair. We cannot add element to entry set, but we can remove")),(0,r.kt)("h4",{id:"immutable-map-factories"},"Immutable Map Factories"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'Map.Entry<String, Integer> entry = Map.entry("Richard", 38);  // individual key/value pairs\nMap<String, Integer> personToAge = Map.of("Richard", 38);  // up to 10 value specific overload Factories\npersonToAge = Map.ofEntries(Map.entry("Richard", 38));  // for > 10 varargs factory takes entry objects\nMap<String, Integer> copy = Map.copyOf(personToAge);  // immutable copies of existing Map\n')),(0,r.kt)("h3",{id:"implementations-1"},"Implementations"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"HashMap")," allows null keys & values. ",(0,r.kt)("inlineCode",{parentName:"p"},"TreeMap")," allows null values, but not keys."),(0,r.kt)("h4",{id:"hashmap"},"HashMap"),(0,r.kt)("h4",{id:"treemap"},"TreeMap"),(0,r.kt)("h2",{id:"java-streams"},"Java Streams"),(0,r.kt)("p",null,"Stream with no side effect at Capturing Local Variables"),(0,r.kt)("h2",{id:"collection-operations--factories"},"Collection Operations & Factories"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"#static-factory-methods"},"here"),"\n",(0,r.kt)("a",{parentName:"p",href:"#immutable-map-factories"},"here2")),(0,r.kt)("h2",{id:"sets-collection-with-uniqueness"},"Sets (Collection with Uniqueness)"))}c.isMDXComponent=!0},9395:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/collection-decision-tree-34a5a4c92093dd313d35e6c1673e10ab.png"},9067:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/collections-component-46f58113170db8f8d237a384f74b7944.png"}}]);