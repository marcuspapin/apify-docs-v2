"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[8479],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=s,y=d["".concat(l,".").concat(m)]||d[m]||c[m]||r;return n?a.createElement(y,i(i({ref:t},p),{},{components:n})):a.createElement(y,i({ref:t},p))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,i=new Array(r);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:s,i[1]=o;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},80186:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>u,toc:()=>c});var a=n(87462),s=n(63366),r=(n(67294),n(3905)),i=["components"],o={title:"Enums",description:'Learn how to easily define, use, and manage constant values using a cool feature called "enums" that TypeScript brings to the table.',sidebar_position:7.4,slug:"/switching-to-typescript/enums"},l="[](#enums) Enums!",u={unversionedId:"switching_to_typescript/enums",id:"switching_to_typescript/enums",title:"Enums",description:'Learn how to easily define, use, and manage constant values using a cool feature called "enums" that TypeScript brings to the table.',source:"@site/sources/academy/switching_to_typescript/enums.md",sourceDirName:"switching_to_typescript",slug:"/switching-to-typescript/enums",permalink:"/academy/switching-to-typescript/enums",draft:!1,tags:[],version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1673462256,formattedLastUpdatedAt:"Jan 11, 2023",sidebarPosition:7.4,frontMatter:{title:"Enums",description:'Learn how to easily define, use, and manage constant values using a cool feature called "enums" that TypeScript brings to the table.',sidebar_position:7.4,slug:"/switching-to-typescript/enums"},sidebar:"defaultSidebar",previous:{title:"Using types - II",permalink:"/academy/switching-to-typescript/using-types-continued"},next:{title:"Type aliases & function types",permalink:"/academy/switching-to-typescript/type-aliases"}},p={},c=[{value:" Let&#39;s talk about constants",id:"-lets-talk-about-constants",level:2},{value:" Creating enums",id:"-creating-enums",level:2},{value:" Using enums",id:"-using-enums",level:2},{value:" Using enums as types",id:"-using-enums-as-types",level:2},{value:" Next up",id:"-next-up",level:2}],d={toc:c};function m(e){var t=e.components,o=(0,s.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"-enums"},(0,r.kt)("a",{parentName:"h1",href:"#enums",target:null,rel:null})," Enums!"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},'Learn how to easily define, use, and manage constant values using a cool feature called "enums" that TypeScript brings to the table.')),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Enums are a nice feature offered by TypeScript that can be used to create automatically enumerated global constant identifiers that can also be used as custom types. We've dedicated an entire lesson to enums because they're a new feature brought into JavaScript by TypeScript, and because they can be quite useful in certain projects."),(0,r.kt)("h2",{id:"-lets-talk-about-constants"},(0,r.kt)("a",{parentName:"h2",href:"#lets-talk-about-constants",target:null,rel:null})," Let's talk about constants"),(0,r.kt)("p",null,"If you've followed along with any of the more advanced courses in the Apify academy, or at least read the ",(0,r.kt)("a",{parentName:"p",href:"/academy/web-scraping-for-beginners/best-practices",target:null,rel:null},"Best practices")," lesson in the ",(0,r.kt)("strong",{parentName:"p"},"Web scraping for beginners")," course, you'll definitely be familiar with the idea of constant variables. In a nutshell, we create constant variables for values that will never change, and will likely used in multiple places. The naming convention for constants is ",(0,r.kt)("strong",{parentName:"p"},"ALL_CAPS_AND_UNDERSCORED"),"."),(0,r.kt)("p",null,"Here's an object of constant values that we've prepared for use within our project."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const fileExtensions = {\n    JAVASCRIPT: '.js',\n    TYPESCRIPT: '.ts',\n    RUST: '.rs',\n    PYTHON: '.py',\n};\n")),(0,r.kt)("p",null,"No problem, this will totally work; however, the issue is that TypeScript doesn't know what these values are - it infers them to just be strings. We can solve this by adding a type annotation with a custom type definition:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// Since TypeScript infers these values to be just strings,\n// we have to create a type definition telling it that these\n// properties hold super specific strings.\nconst fileExtensions: {\n    JAVASCRIPT: '.js';\n    TYPESCRIPT: '.ts';\n    RUST: '.rs';\n    PYTHON: '.py';\n// Define the object's values\n} = {\n    JAVASCRIPT: '.js',\n    TYPESCRIPT: '.ts',\n    RUST: '.rs',\n    PYTHON: '.py',\n};\n\n// Or, we can just do this\nconst fileExtensions = {\n    JAVASCRIPT: '.js',\n    TYPESCRIPT: '.ts',\n    RUST: '.rs',\n    PYTHON: '.py',\n} as const;\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Using an actual concrete value such as ",(0,r.kt)("inlineCode",{parentName:"p"},"'.js'")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"24")," or something else instead of a type name is called a ",(0,r.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/literal-types.html",target:"_blank",rel:"noopener"},"literal type"),".")),(0,r.kt)("p",null,"And now we'll create a variable with a hacky custom type that points to the values in the ",(0,r.kt)("inlineCode",{parentName:"p"},"fileExtensions")," object:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"TypeScript autofilling the values of the fileExtensions object",src:n(69826).Z,width:"1032",height:"288"})),(0,r.kt)("p",null,"Because of the custom type definition for ",(0,r.kt)("inlineCode",{parentName:"p"},"fileExtensions")," and the type annotation used for the ",(0,r.kt)("inlineCode",{parentName:"p"},"values")," variable, we are getting some autofill for the variable, and the variable can only be set to values within the ",(0,r.kt)("inlineCode",{parentName:"p"},"fileExtensions")," object. Though this implementation works, TypeScript offers a unique new feature called ",(0,r.kt)("strong",{parentName:"p"},"enums")," that was designed just for these use cases."),(0,r.kt)("h2",{id:"-creating-enums"},(0,r.kt)("a",{parentName:"h2",href:"#creating-enums",target:null,rel:null})," Creating enums"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/enums.html",target:"_blank",rel:"noopener"},(0,r.kt)("inlineCode",{parentName:"a"},"enum"))," keyword is a new keyword brought to us by TypeScript that allows us the same functionality we implemented in the above section, plus more. To create one, simply use the keyword followed by the name you'd like to use (the naming convention is generally ",(0,r.kt)("strong",{parentName:"p"},"CapitalizeEachFirstLetterAndSingular"),")."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"enum FileExtension {\n    // Use an \"=\" sign instead of a \":\"\n    JAVASCRIPT = '.js',\n    TYPESCRIPT = '.ts',\n    RUST = '.rs',\n    PYTHON = '.py',\n}\n")),(0,r.kt)("h2",{id:"-using-enums"},(0,r.kt)("a",{parentName:"h2",href:"#using-enums",target:null,rel:null})," Using enums"),(0,r.kt)("p",null,"Using enums is straightforward. Simply use dot notation as you normally would with a regular object."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"enum FileExtension {\n    JAVASCRIPT = '.js',\n    TYPESCRIPT = '.ts',\n    RUST = '.rs',\n    PYTHON = '.py',\n}\n\nconst value = FileExtension.JAVASCRIPT;\n\nconsole.log(value) // => \".js\"\n")),(0,r.kt)("h2",{id:"-using-enums-as-types"},(0,r.kt)("a",{parentName:"h2",href:"#using-enums-as-types",target:null,rel:null})," Using enums as types"),(0,r.kt)("p",null,"The nice thing about enums is that they can be used directly in type annotations as somewhat of a custom type. Observe this function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const createFileName = (name: string, extension: string) => {\n    return name + extension;\n};\n")),(0,r.kt)("p",null,"We can restrict ",(0,r.kt)("inlineCode",{parentName:"p"},"extension")," so that it can only be a value in the enum by replacing ",(0,r.kt)("inlineCode",{parentName:"p"},"extension: string")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"extension: FileExtension"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"enum FileExtension {\n    JAVASCRIPT = '.js',\n    TYPESCRIPT = '.ts',\n    RUST = '.rs',\n    PYTHON = '.py',\n}\n\nconst createFileName = (name: string, extension: FileExtension) => {\n    return name + extension;\n};\n\n// Call the function and use the enum to populate the second parameter\nconst fileName = createFileName('hello', FileExtension.TYPESCRIPT);\n\nconsole.log(fileName);\n")),(0,r.kt)("p",null,"We don't get autocomplete, but the ",(0,r.kt)("inlineCode",{parentName:"p"},"extension")," parameter is now restricted to the values defined in the ",(0,r.kt)("inlineCode",{parentName:"p"},"FileExtension")," enum."),(0,r.kt)("h2",{id:"-next-up"},(0,r.kt)("a",{parentName:"h2",href:"#next",target:null,rel:null})," Next up"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"enum")," keyword is just the tip of the iceberg of the exclusive features TypeScript has to offer. Let's now ",(0,r.kt)("a",{parentName:"p",href:"/academy/switching-to-typescript/type-aliases",target:null,rel:null},"learn about")," type aliases (custom types!) with the ",(0,r.kt)("inlineCode",{parentName:"p"},"type")," keyword."))}m.isMDXComponent=!0},69826:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/webp;base64,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"}}]);