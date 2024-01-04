"use strict";(self.webpackChunktu_website=self.webpackChunktu_website||[]).push([[623],{5900:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>o});var a=s(5893),i=s(1151);const t={sidebar_label:"oop",description:"object-oriented programming with Java features & examples",toc_max_heading_level:4},r="Object-oriented Programming",l={id:"learn/language/java/oop",title:"Object-oriented Programming",description:"object-oriented programming with Java features & examples",source:"@site/docs/learn/language/java/10-oop.mdx",sourceDirName:"learn/language/java",slug:"/learn/language/java/oop",permalink:"/my-blog/vi/docs/learn/language/java/oop",draft:!1,unlisted:!1,editUrl:"https://github.com/huytunguyenn/my-blog/tree/main/docs/learn/language/java/10-oop.mdx",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_label:"oop",description:"object-oriented programming with Java features & examples",toc_max_heading_level:4},sidebar:"docs",previous:{title:"classes & objects",permalink:"/my-blog/vi/docs/learn/language/java/classes-and-objects"},next:{title:"wrapper",permalink:"/my-blog/vi/docs/learn/language/java/wrapper-classes"}},c={},o=[{value:"Abstraction",id:"abstraction",level:2},{value:"Encapsulation",id:"encapsulation",level:2},{value:"Field Accessors &amp; Mutators",id:"field-accessors--mutators",level:3},{value:"Inheritance",id:"inheritance",level:2},{value:"Subclassing",id:"subclassing",level:3},{value:"Superclass",id:"superclass",level:3},{value:"Overriding",id:"overriding",level:3},{value:"Prevent Overriding",id:"prevent-overriding",level:3},{value:"Sealed Classes",id:"sealed-classes",level:3},{value:"Polymorphism",id:"polymorphism",level:2},{value:"Is-A Relationship",id:"is-a-relationship",level:3},{value:"Upcasting",id:"upcasting",level:3},{value:"Downcasting / <code>instanceof</code>",id:"downcasting--instanceof",level:3},{value:"Polymorphism by Inheritance",id:"polymorphism-by-inheritance",level:3},{value:"An example",id:"an-example",level:4},{value:"Abstract Classes",id:"abstract-classes",level:3},{value:"Interfaces",id:"interfaces",level:3},{value:"Limitations",id:"limitations",level:4},{value:"Tagging Interfaces",id:"tagging-interfaces",level:4},{value:"Best Practices",id:"best-practices",level:2},{value:"Working in Java",id:"working-in-java",level:2},{value:"SOLID principles",id:"solid-principles",level:2},{value:"Single Responsibility",id:"single-responsibility",level:3},{value:"Open-closed",id:"open-closed",level:3},{value:"Liskov Substitution",id:"liskov-substitution",level:3},{value:"Interface Segregation",id:"interface-segregation",level:3},{value:"Dependency Inversion",id:"dependency-inversion",level:3},{value:"Design Patterns",id:"design-patterns",level:2}];function d(e){const n={a:"a",admonition:"admonition",annotation:"annotation",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",math:"math",mdxAdmonitionTitle:"mdxAdmonitionTitle",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"object-oriented-programming",children:"Object-oriented Programming"}),"\n",(0,a.jsx)(n.p,{children:"4 main theoretical principles:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"abstraction, and encapsulation"}),"\n",(0,a.jsx)(n.li,{children:"polymorphism, and inheritance"}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"abstraction",children:"Abstraction"}),"\n",(0,a.jsxs)(n.p,{children:["A lot of programming is about ",(0,a.jsx)(n.strong,{children:"types"}),". A types can tell you:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"what the variable looks like (e.g. boolean is a simple flag)"}),"\n",(0,a.jsx)(n.li,{children:"what you can do with that variable (e.g. you cannot )"}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Java has had primitives type already, and you can define new type with OOP (type == class). ",(0,a.jsx)(n.strong,{children:"Defining new types"})," and ",(0,a.jsx)(n.strong,{children:"creating objects out of them"})," is called abstraction."]}),"\n",(0,a.jsxs)(n.p,{children:["Abstraction can also be achieved by encapsulation (",(0,a.jsx)(n.strong,{children:"hide details"}),"), so it ",(0,a.jsx)(n.strong,{children:"only shows interfaces"}),". See ",(0,a.jsx)(n.a,{href:"#field-accessors--mutators",children:"below"}),"."]}),"\n",(0,a.jsx)(n.admonition,{title:"a wise man once said",type:"note",children:(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"Abstraction can be thought of as a natural extension of encapsulation."})})}),"\n",(0,a.jsx)(n.h2,{id:"encapsulation",children:"Encapsulation"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Hiding information"})," inside the class is called encapsulation. It helps classes:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"easier to use: only care about interface, not the implementation"}),"\n",(0,a.jsx)(n.li,{children:"harder to misuse: protect object from inconsistent changes"}),"\n",(0,a.jsx)(n.li,{children:"easier to change: change the implementation without breaking clients"}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"field-accessors--mutators",children:"Field Accessors & Mutators"}),"\n",(0,a.jsxs)(n.p,{children:["You can hide information of class using ",(0,a.jsx)(n.a,{href:"/my-blog/vi/docs/learn/language/java/classes-and-objects#access-modifier",children:"Access Modifier"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"By making some members private, we split fields & methods into 2 groups:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"interface"}),": public members, means it's visible from the outside to use"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"implementation"}),": private members, contains internal details, we can easily change implementation without affect interface"]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Usually, we want to make fields private (so it cannot be normally directly accessed). But sometimes, we need to expose that (when encapsulation meets ",(0,a.jsx)(n.a,{href:"#inheritance",children:"inheritance"}),")"]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsx)(n.mrow,{children:(0,a.jsx)(n.mo,{children:"\u2192"})}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"\\rightarrow"})]})})}),(0,a.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"0.3669em"}}),(0,a.jsx)(n.span,{className:"mrel",children:"\u2192"})]})})]})," public/protected ",(0,a.jsx)(n.strong,{children:"getters & setters"})," for private fields"]}),"\n",(0,a.jsx)(n.h2,{id:"inheritance",children:"Inheritance"}),"\n",(0,a.jsxs)(n.p,{children:["Copy & paste code is a bad idea ",(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsx)(n.mrow,{children:(0,a.jsx)(n.mo,{children:"\u2192"})}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"\\rightarrow"})]})})}),(0,a.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"0.3669em"}}),(0,a.jsx)(n.span,{className:"mrel",children:"\u2192"})]})})]})," we should reuse the common logic and extract the unique logic into a separate class"]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsx)(n.mrow,{children:(0,a.jsx)(n.mo,{children:"\u2192"})}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"\\rightarrow"})]})})}),(0,a.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"0.3669em"}}),(0,a.jsx)(n.span,{className:"mrel",children:"\u2192"})]})})]})," make some classes ",(0,a.jsx)(n.em,{children:"inherits"})," another class"]}),"\n",(0,a.jsxs)(n.admonition,{type:"note",children:[(0,a.jsx)(n.mdxAdmonitionTitle,{children:(0,a.jsx)(n.strong,{children:"Summary"})}),(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Inheritance is (mostly) when you want to ",(0,a.jsx)(n.a,{href:"#upcasting",children:"upcasting"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:["Inheritance can be used to share code, but there are other better ways to do that (e.g. include a new field type in class a.k.a ",(0,a.jsx)(n.strong,{children:"delegation"}),")."]}),"\n"]})]}),"\n",(0,a.jsx)(n.h3,{id:"subclassing",children:"Subclassing"}),"\n",(0,a.jsxs)(n.p,{children:["Use ",(0,a.jsx)(n.code,{children:"extends"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"public class Student extends Person {\n  private final int age;\n  public Student(int age) { this.age = age; }\n  public int getAge() { return age; }\n}\n"})}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsxs)(n.p,{children:["Every class in Java inherits ",(0,a.jsx)(n.code,{children:"Object"})," class."]})}),"\n",(0,a.jsx)(n.h3,{id:"superclass",children:"Superclass"}),"\n",(0,a.jsx)(n.p,{children:"Constructors are not members, so they are not inherited by subclasses, but it can be invoked."}),"\n",(0,a.jsxs)(n.p,{children:["Constructor is meant to guarantee that objects are initialized correctly ",(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsx)(n.mrow,{children:(0,a.jsx)(n.mo,{children:"\u2192"})}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"\\rightarrow"})]})})}),(0,a.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"0.3669em"}}),(0,a.jsx)(n.span,{className:"mrel",children:"\u2192"})]})})]})," we have to call superclass constructor."]}),"\n",(0,a.jsxs)(n.p,{children:["Use ",(0,a.jsx)(n.code,{children:"super()"})," to call the superclass constructor."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"public class Student extends Person {\n  public Student(string name, int age) {\n    // -highlight\n    super(name);  // this must come first\n    this.age = age;\n  }\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"If the superclass constructor is default constructor (the constructor with no parameter), Java can automatically call it for us."})}),"\n",(0,a.jsx)(n.h3,{id:"overriding",children:"Overriding"}),"\n",(0,a.jsxs)(n.p,{children:["Override the methods from superclass. The code in subclass could be duplicated as well. To avoid that we can call method of superclass using ",(0,a.jsx)(n.code,{children:"super"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'class Person {\n  public String getAge(boolean uppercase) {\n    if (isAlive()) {\n      if (uppercase)\n        return this.age.toUpperCase();\n      else\n        return this.age;\n    }\n    return "";\n  }\n}\n\nclass Student {\n  @Override\n  public String getAge(boolean uppercase) {\n    // -error-start\n    // this still duplicates a lot\n    if (isAlive()) {\n      if (uppercase)\n        return "Student age: " + this.age.toUpperCase();\n      else\n        return "Student age: " + this.age;\n    }\n    return "";\n    // -error-end\n    // -highlight-start\n    // call super class instead\n    String age = super.getAge(uppercase);\n    if (age.isEmpty())\n      return "Student age: " + age;\n    else\n      return "Student age: " + age;\n    // -highlight-end\n  }\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Attempting to assign weaker access privileges"})}),"\n",(0,a.jsx)(n.p,{children:"Error occurs when you try to reduce the visibility of a method or variable in a subclass. This error occurs because the subclass cannot have a lower visibility than the superclass it is extending."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"public class Superclass {\n    protected void myMethod() { }\n}\n\npublic class Subclass extends Superclass {\n    // -error\n    private void myMethod() { }  // fix: public or protected or leave it\n    // make sense v\xec t\u1ef1 nhi\xean th\u1eb1ng n\xe0y chi\u1ebfm lu\xf4n c\xe1i h\xe0m n\xe0y l\xe0m private cho ri\xeang n\xf3 th\xec sao\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:"Another example:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"interface Philosopher {\n    void talk();\n}\n\npublic class Aristotle implements Philosopher {\n    @Override\n    // -error\n    protected void talk() { } // this must be public\n}\n"})}),"\n",(0,a.jsx)(n.h3,{id:"prevent-overriding",children:"Prevent Overriding"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"final"})," can be used with methods or classes. If a method is declared with ",(0,a.jsx)(n.code,{children:"final"}),", it means the method cannot be overridden in a subclass. The same with ",(0,a.jsx)(n.code,{children:"final"})," class, it cannot be inherited."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsxs)(n.em,{children:["Q: The question is why would you want to ",(0,a.jsx)(n.code,{children:"final"})," a method?"]})," ",(0,a.jsx)(n.strong,{children:"A:"})," To prevent bugs, looks at below example:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"class Parent {\n  Parent() {\n    someInitMethod();\n  }\n  protected void someInitMethod() {\n    // do esstential initializations\n  }\n}\nclass Child extends Parent {\n  /**\n   * subclass can refine someInitMethod() and cause bug\n   * if that method is private then it's okay (but here, it's protected)\n  **/\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["A good safety rule is if ",(0,a.jsxs)(n.strong,{children:["methods called by constructor should be either ",(0,a.jsx)(n.code,{children:"private"})," or ",(0,a.jsx)(n.code,{children:"final"})]}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"class Parent {\n  // -highlight\n  protected final void someInitMethod() { }\n}\n"})}),"\n",(0,a.jsx)(n.admonition,{type:"warning",children:(0,a.jsxs)(n.p,{children:["Don't overuse ",(0,a.jsx)(n.code,{children:"final"}),". The best way to use it is when you know what to do and prevent bugs."]})}),"\n",(0,a.jsx)(n.h3,{id:"sealed-classes",children:"Sealed Classes"}),"\n",(0,a.jsxs)(n.p,{children:["In Java 17. It can decide exactly which other classes inherit from it. All sealed class subclasses must either be ",(0,a.jsx)(n.code,{children:"final"}),", ",(0,a.jsx)(n.code,{children:"sealed"})," or ",(0,a.jsx)(n.code,{children:"non-sealed"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"public sealed class Person permits Student, Worker { }\n\n// subclass can be sealed (means it permitteed subclasses)\npublic sealed class Worker extends Person permits FullTimeWorker { }\n// or non-sealed (means it's just a regular class that you can inherit from)\npublic non-sealed class Student { }\n// or final\npublic final class Student extends Person { }\n\npublic non-sealed class FullTimeWorker extends Worker { }\n"})}),"\n",(0,a.jsx)(n.admonition,{type:"warning",children:(0,a.jsxs)(n.p,{children:["Don't overuse ",(0,a.jsx)(n.code,{children:"sealed"})," classes either."]})}),"\n",(0,a.jsx)(n.h2,{id:"polymorphism",children:"Polymorphism"}),"\n",(0,a.jsx)(n.admonition,{title:"not so funny story",type:"note",children:(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"Polymorphism means \u201cmany shapes\u201d in Greek."})})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"Read the below subsections first to understand polymorphism."})}),"\n",(0,a.jsxs)(n.admonition,{type:"note",children:[(0,a.jsx)(n.mdxAdmonitionTitle,{children:(0,a.jsx)(n.strong,{children:"Summary"})}),(0,a.jsx)(n.p,{children:"The reason why we do polymorphism & inheritance is to just about upcasting."}),(0,a.jsxs)(n.p,{children:["We design the hierarchy just to some point in the code, we can take object of subclass and cast it to a superclass (",(0,a.jsx)(n.a,{href:"#upcasting",children:"upcasting"}),")."]}),(0,a.jsxs)(n.p,{children:["Why we would want to upcast? Because we wrote the code that ",(0,a.jsx)(n.strong,{children:"talks to the superclass/interface"})," to make it easier of extension & maintenance, like this ",(0,a.jsx)(n.a,{href:"#an-example",children:"example"}),"."]})]}),"\n",(0,a.jsx)(n.h3,{id:"is-a-relationship",children:"Is-A Relationship"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"Object <|---- Animal <|---- Cat <---- Cat butter = new Cat();\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsxs)(n.em,{children:["Example: ",(0,a.jsx)(n.code,{children:"butter"})," is a special case of Cat and also a special case of Animal, and Object as well. The class inheritance is also described as the ",(0,a.jsx)(n.code,{children:"is-a"})," relationship."]})}),"\n",(0,a.jsxs)(n.p,{children:["Subclass can add stuff to superclass, maybe tweak it, but it ",(0,a.jsx)(n.strong,{children:"cannot take things away from superclass"}),'. That would violate this notion that "subclass ',(0,a.jsx)(n.code,{children:"is-a"}),' special case".']}),"\n",(0,a.jsx)(n.h3,{id:"upcasting",children:"Upcasting"}),"\n",(0,a.jsx)(n.p,{children:"Java creates object in the heap and return a reference. We usually take that reference and assign it to a variable, and we cannot assign to a different type variable. But we can assign to a superclass variable."}),"\n",(0,a.jsxs)(n.p,{children:["Casting means a type conversion. Upcasting is putting a ",(0,a.jsx)(n.strong,{children:"reference"})," into a variable whose type is a superclass of that reference ",(0,a.jsx)(n.em,{children:(0,a.jsx)(n.strong,{children:"(we're not changing the object from one type to another, we only effect on reference)"})}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'Student student = new Student();\n// -highlight\nPerson person = student;  // upcasting: cast this upper\nObject greetings = "Hello, world!";  // string is a subclass of Object\n'})}),"\n",(0,a.jsxs)(n.p,{children:["When upcasting, you lose the specific functionality, in other words, you ",(0,a.jsx)(n.strong,{children:"forget specific subclass"}),". Sounds like bad things, but it turns out the cool things in Java for ",(0,a.jsx)(n.a,{href:"#polymorphism",children:"polymorphism"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"// -error\nperson.goToSchool();  // you can't, this is a Student class method\n"})}),"\n",(0,a.jsxs)(n.h3,{id:"downcasting--instanceof",children:["Downcasting / ",(0,a.jsx)(n.code,{children:"instanceof"})]}),"\n",(0,a.jsxs)(n.p,{children:["Java cannot do downcasting automatically because it only has ability to forget about specific subclass (",(0,a.jsx)(n.a,{href:"#upcasting",children:"upcasting"}),"). We downcast by converting reference."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"Person person = new Student();\nStudent student = (Student)person;  // down cast Person type -> Student type\nstudent.goToSchool();  // now you can use Student method\n"})}),"\n",(0,a.jsxs)(n.p,{children:["What if we change: ",(0,a.jsx)(n.code,{children:"Person person = new Worker();"}),"? then, we'll get ",(0,a.jsx)(n.code,{children:"NullPointerException"})," followed by ",(0,a.jsx)(n.code,{children:"ClassCastException"}),"."]}),"\n",(0,a.jsxs)(n.admonition,{type:"warning",children:[(0,a.jsx)(n.p,{children:"Because ClassCastException & NullPointerException, we should:"}),(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["use ",(0,a.jsx)(n.code,{children:"instanceof"}),": checking before downcasting"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"avoid downcasting"}),": improve design to remove unnecessary type conversion"]}),"\n"]})]}),"\n",(0,a.jsx)(n.h3,{id:"polymorphism-by-inheritance",children:"Polymorphism by Inheritance"}),"\n",(0,a.jsx)(n.admonition,{title:"a wise man once said",type:"note",children:(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"Inheritance and polymorphism work together to make powerful weapons"})})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'Person person = new Student("Tu");\nperson.sleep();  // call sleep() of `Student` class, not `Person`\n'})}),"\n",(0,a.jsx)(n.h4,{id:"an-example",children:"An example"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"class Dashboard {\n  /**\n  * Works with whatever you pass to it\n  * It doesn't know and doesn't care what subclass it's dealing with\n  * It just talks to superclass. It allow we forgot the specific type\n  * -> future-proof, means no matter what new class you add to the hierarchy, code still works\n  **/\n  public void add(Alarm alarm) {\n    tool1.method(alarm.turnOn());\n    tool2.method(alarm.plug());\n    // ...\n  }\n}\n\npublic static void main(String[] args) {\n  Dashboard dashboard = new Dashboard();\n  // the dashboard works with any alarm, it talks with Alarm\n  dashboard.add(new NoisyAlarm(\"zzz\"));\n  dashboard.add(new TimeAlarm(100));\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["There are many examples of polymorphism in the core Java libraries. One of that is the ",(0,a.jsx)(n.code,{children:"System.out.print()"}),", the first ever thing we code when approaching Java."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'/**\n * System.out.println() take many param type, include Object type\n * Object is the root of every class\n * => println() can print anything\n * It turns out println() call toString() method of the passed-in object\n * -> so we only need to override toString() method\n**/\nclass Student {\n  @Override\n  public String toString() { return "I am student"; }\n}\npublic static void main(String[] args) {\n  Person person = new Student();\n  System.out.println(person);\n  // this make easier of extension of println()\n}\n'})}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsxs)(n.p,{children:["Not all polymorphism in Java is based on inheritance. Other ways is using ",(0,a.jsx)(n.code,{children:"abstract class"})," and ",(0,a.jsx)(n.code,{children:"interface"}),"."]})}),"\n",(0,a.jsx)(n.h3,{id:"abstract-classes",children:"Abstract Classes"}),"\n",(0,a.jsxs)(n.p,{children:["You cannot create an instance of an abstract class directly. But we can create its subclass and ",(0,a.jsx)(n.a,{href:"#upcasting",children:"upcast"})," it."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"public abstract class Person {\n  public abstract void walk(){ }\n}\npublic class Student extends Person {\n  public void walk(){ }\n}\n// main\n// -error-start\nPerson person = new Person();  // cannot create instance of abstract class\nperson.walk();\n// -error-end\nPerson person = new Student();\nperson.walk();\n"})}),"\n",(0,a.jsx)(n.p,{children:"A class inherits from abstract class must follow rule:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["if that class wants to be concrete (non-abstract), it must ",(0,a.jsx)(n.strong,{children:"provide an implementation for all its methods"})," (including those defined and those that inherits from its superclass)"]}),"\n",(0,a.jsx)(n.li,{children:"otherwise, if any method is still abstract, then the class itself must be abstract."}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsx)(n.mrow,{children:(0,a.jsx)(n.mo,{children:"\u2192"})}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"\\rightarrow"})]})})}),(0,a.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"0.3669em"}}),(0,a.jsx)(n.span,{className:"mrel",children:"\u2192"})]})})]})," abstract classes only make sense in context of upcasting for polymorphism"]}),"\n",(0,a.jsx)(n.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,a.jsxs)(n.p,{children:["The problem of abstract class is the ",(0,a.jsx)(n.em,{children:"updating the hierarchy"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"Student ----|> Person <|---- Worker\n\n> What if we need more method `exist`, `live`\n> -> create `Entity` and `Creature`\n> But you cannot inherit 2 classes\n\nEntity            Creature\n  \\                 \\\n  Creature          Entity\n    \\                 \\\n    Person            Person\n\n>  Here it is        But how about this?\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Interface came to resolve ",(0,a.jsx)(n.strong,{children:"one object, multiple roles"})," problem. They are like extreme abstract class:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.em,{children:"nearly"})," everything in ",(0,a.jsx)(n.code,{children:"interface"})," has to be ",(0,a.jsx)(n.code,{children:"abstract"}),", ",(0,a.jsx)(n.em,{children:"usually"}),", interface has ",(0,a.jsx)(n.strong,{children:"no field"})]}),"\n",(0,a.jsxs)(n.li,{children:["a class can only narrate from 1 superclass ",(0,a.jsxs)(n.em,{children:["(except class ",(0,a.jsx)(n.code,{children:"Object"}),")"]}),", but it can implement all the interfaces at once"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"public interface Entity {\n  public abstract void exist();\n  void exist();  // or we don't need to specify (they are abstract by default)\n}\n\npublic class Student extends Person implements Entity, Creature {\n  // implements all the methods\n  @Override\n  public void exist() { }\n}\n// if this is abstract class then no need to implement\npublic abstract class Person implements Entity, Creature {\n  // this class is abstract, duh!\n}\n"})}),"\n",(0,a.jsx)(n.h4,{id:"limitations",children:"Limitations"}),"\n",(0,a.jsx)(n.p,{children:"The point of interfaces exist because Java doesn't want to give you multiple inheritance* (it creates confusing edge cases, horrible hierarchy)."}),"\n",(0,a.jsx)(n.p,{children:"There are some limitations of interfaces:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"interface cannot inherit from a class (it can inherit an interface)"}),"\n",(0,a.jsx)(n.li,{children:"no constructor in interface"}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"fields"})," need to be ",(0,a.jsx)(n.code,{children:"public static final"}),", in other words, ",(0,a.jsx)(n.strong,{children:"global constant"})]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"methods"})," need to be ",(0,a.jsx)(n.code,{children:"public abstract"}),". But there are special cases that methods can be concrete:","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["static methods ",(0,a.jsx)(n.em,{children:"(since they have nothing to do with polymorphism)"})]}),"\n",(0,a.jsxs)(n.li,{children:["default methods** ",(0,a.jsx)(n.em,{children:"(methods supposed to be abstract, but they came with default implementation)"})]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"public interface Entity {\n  // we can override this or take the default\n  default boolean doSomething() { return true; }\n}\n"})}),"\n","(*)(**)* We don't have multiple inheritances, so we cannot put code in an interface, except that now we can* \ud83e\udee0 ",(0,a.jsx)(n.em,{children:"Having default method is make it more convenient by loosening inheritance a bit."})]}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"tagging-interfaces",children:"Tagging Interfaces"}),"\n",(0,a.jsx)(n.p,{children:"Interfaces that do not contain any methods or constants but are used to mark or tag a class with some special meaning or behavior."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"public interface Serializable { }\n// tag MyClass has been serialized so that we can put it in stream\npublic class MyClass implements Serializable { }\n"})}),"\n",(0,a.jsx)(n.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsx)(n.p,{children:"These are just guidelines! Not absolute rules."})}),"\n",(0,a.jsx)(n.p,{children:"Design guidelines:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"More private is better than less private"}),"\n",(0,a.jsxs)(n.li,{children:["If no need, keep it private ",(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsx)(n.mrow,{children:(0,a.jsx)(n.mo,{children:"\u2192"})}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"\\rightarrow"})]})})}),(0,a.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"0.3669em"}}),(0,a.jsx)(n.span,{className:"mrel",children:"\u2192"})]})})]})," keep interfaces small"]}),"\n",(0,a.jsx)(n.li,{children:"Encapsulated fields are good"}),"\n",(0,a.jsx)(n.li,{children:"Make fields private & only write needed setters"}),"\n",(0,a.jsx)(n.li,{children:"Final fields are also good"}),"\n",(0,a.jsx)(n.li,{children:"Make it final, make them less changeable (no surprises, no bugs). Field contains an immutable object is great (e.g. string)"}),"\n",(0,a.jsxs)(n.li,{children:["Avoid chains of ",(0,a.jsx)(n.code,{children:"instanceof"})," and downcasts: use polymorphism instead"]}),"\n",(0,a.jsxs)(n.li,{children:["Inheritance vs. Delegation: Inheritance is not always a good way to share code among classes ",(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsx)(n.mrow,{children:(0,a.jsx)(n.mo,{children:"\u2192"})}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"\\rightarrow"})]})})}),(0,a.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"0.3669em"}}),(0,a.jsx)(n.span,{className:"mrel",children:"\u2192"})]})})]})," prefer ",(0,a.jsx)(n.strong,{children:"delegation"}),", means create a new class/type to handle that for us."]}),"\n",(0,a.jsxs)(n.li,{children:["Don't overuse ",(0,a.jsx)(n.code,{children:"static"}),": it leads to procedural code"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"working-in-java",children:"Working in Java"}),"\n",(0,a.jsx)(n.p,{children:"Works the Inheritance in Java:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/my-blog/vi/docs/learn/language/java/advanced#working-with-inheritance",children:"Generics, Collection"})}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"solid-principles",children:"SOLID principles"}),"\n",(0,a.jsx)(n.h3,{id:"single-responsibility",children:"Single Responsibility"}),"\n",(0,a.jsx)(n.h3,{id:"open-closed",children:"Open-closed"}),"\n",(0,a.jsx)(n.h3,{id:"liskov-substitution",children:"Liskov Substitution"}),"\n",(0,a.jsx)(n.h3,{id:"interface-segregation",children:"Interface Segregation"}),"\n",(0,a.jsx)(n.h3,{id:"dependency-inversion",children:"Dependency Inversion"}),"\n",(0,a.jsx)(n.h2,{id:"design-patterns",children:"Design Patterns"})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>r});var a=s(7294);const i={},t=a.createContext(i);function r(e){const n=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);