"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[9147],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),l=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):A(A({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,o=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),c=l(n),g=i,h=c["".concat(o,".").concat(g)]||c[g]||u[g]||s;return n?a.createElement(h,A(A({ref:t},p),{},{components:n})):a.createElement(h,A({ref:t},p))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,A=new Array(s);A[0]=c;var r={};for(var o in t)hasOwnProperty.call(t,o)&&(r[o]=t[o]);r.originalType=e,r.mdxType="string"==typeof e?e:i,A[1]=r;for(var l=2;l<s;l++)A[l]=n[l];return a.createElement.apply(null,A)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},50834:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>g,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var a=n(87462),i=n(63366),s=(n(67294),n(3905)),A=["components"],r={title:"Enums",description:'Learn how to easily define, use, and manage constant values using a cool feature called "enums" that TypeScript brings to the table.',sidebar_position:7.4,slug:"/switching-to-typescript/enums"},o="Enums!",l={unversionedId:"webscraping/switching_to_typescript/enums",id:"webscraping/switching_to_typescript/enums",title:"Enums",description:'Learn how to easily define, use, and manage constant values using a cool feature called "enums" that TypeScript brings to the table.',source:"@site/sources/academy/webscraping/switching_to_typescript/enums.md",sourceDirName:"webscraping/switching_to_typescript",slug:"/switching-to-typescript/enums",permalink:"/academy/switching-to-typescript/enums",draft:!1,tags:[],version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1675177066,formattedLastUpdatedAt:"Jan 31, 2023",sidebarPosition:7.4,frontMatter:{title:"Enums",description:'Learn how to easily define, use, and manage constant values using a cool feature called "enums" that TypeScript brings to the table.',sidebar_position:7.4,slug:"/switching-to-typescript/enums"},sidebar:"academy",previous:{title:"Using types - II",permalink:"/academy/switching-to-typescript/using-types-continued"},next:{title:"Type aliases & function types",permalink:"/academy/switching-to-typescript/type-aliases"}},p={},u=[{value:"Let&#39;s talk about constants",id:"lets-talk-about-constants",level:2},{value:"Creating enums",id:"creating-enums",level:2},{value:"Using enums",id:"using-enums",level:2},{value:"Using enums as types",id:"using-enums-as-types",level:2},{value:"Next up",id:"next",level:2}],c={toc:u};function g(e){var t=e.components,r=(0,i.Z)(e,A);return(0,s.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"enums"},"Enums!"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},'Learn how to easily define, use, and manage constant values using a cool feature called "enums" that TypeScript brings to the table.')),(0,s.kt)("hr",null),(0,s.kt)("p",null,"Enums are a nice feature offered by TypeScript that can be used to create automatically enumerated global constant identifiers that can also be used as custom types. We've dedicated an entire lesson to enums because they're a new feature brought into JavaScript by TypeScript, and because they can be quite useful in certain projects."),(0,s.kt)("h2",{id:"lets-talk-about-constants"},"Let's talk about constants"),(0,s.kt)("p",null,"If you've followed along with any of the more advanced courses in the Apify academy, or at least read the ",(0,s.kt)("a",{parentName:"p",href:"/academy/web-scraping-for-beginners/best-practices",target:null,rel:null},"Best practices")," lesson in the ",(0,s.kt)("strong",{parentName:"p"},"Web scraping for beginners")," course, you'll definitely be familiar with the idea of constant variables. In a nutshell, we create constant variables for values that will never change, and will likely used in multiple places. The naming convention for constants is ",(0,s.kt)("strong",{parentName:"p"},"ALL_CAPS_AND_UNDERSCORED"),"."),(0,s.kt)("p",null,"Here's an object of constant values that we've prepared for use within our project."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"const fileExtensions = {\n    JAVASCRIPT: '.js',\n    TYPESCRIPT: '.ts',\n    RUST: '.rs',\n    PYTHON: '.py',\n};\n")),(0,s.kt)("p",null,"No problem, this will totally work; however, the issue is that TypeScript doesn't know what these values are - it infers them to just be strings. We can solve this by adding a type annotation with a custom type definition:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"// Since TypeScript infers these values to be just strings,\n// we have to create a type definition telling it that these\n// properties hold super specific strings.\nconst fileExtensions: {\n    JAVASCRIPT: '.js';\n    TYPESCRIPT: '.ts';\n    RUST: '.rs';\n    PYTHON: '.py';\n// Define the object's values\n} = {\n    JAVASCRIPT: '.js',\n    TYPESCRIPT: '.ts',\n    RUST: '.rs',\n    PYTHON: '.py',\n};\n\n// Or, we can just do this\nconst fileExtensions = {\n    JAVASCRIPT: '.js',\n    TYPESCRIPT: '.ts',\n    RUST: '.rs',\n    PYTHON: '.py',\n} as const;\n")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Using an actual concrete value such as ",(0,s.kt)("inlineCode",{parentName:"p"},"'.js'")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"24")," or something else instead of a type name is called a ",(0,s.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/literal-types.html",target:"_blank",rel:"noopener"},"literal type"),".")),(0,s.kt)("p",null,"And now we'll create a variable with a hacky custom type that points to the values in the ",(0,s.kt)("inlineCode",{parentName:"p"},"fileExtensions")," object:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"TypeScript autofilling the values of the fileExtensions object",src:n(13729).Z,width:"1032",height:"288"})),(0,s.kt)("p",null,"Because of the custom type definition for ",(0,s.kt)("inlineCode",{parentName:"p"},"fileExtensions")," and the type annotation used for the ",(0,s.kt)("inlineCode",{parentName:"p"},"values")," variable, we are getting some autofill for the variable, and the variable can only be set to values within the ",(0,s.kt)("inlineCode",{parentName:"p"},"fileExtensions")," object. Though this implementation works, TypeScript offers a unique new feature called ",(0,s.kt)("strong",{parentName:"p"},"enums")," that was designed just for these use cases."),(0,s.kt)("h2",{id:"creating-enums"},"Creating enums"),(0,s.kt)("p",null,"The ",(0,s.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/enums.html",target:"_blank",rel:"noopener"},(0,s.kt)("inlineCode",{parentName:"a"},"enum"))," keyword is a new keyword brought to us by TypeScript that allows us the same functionality we implemented in the above section, plus more. To create one, simply use the keyword followed by the name you'd like to use (the naming convention is generally ",(0,s.kt)("strong",{parentName:"p"},"CapitalizeEachFirstLetterAndSingular"),")."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"enum FileExtension {\n    // Use an \"=\" sign instead of a \":\"\n    JAVASCRIPT = '.js',\n    TYPESCRIPT = '.ts',\n    RUST = '.rs',\n    PYTHON = '.py',\n}\n")),(0,s.kt)("h2",{id:"using-enums"},"Using enums"),(0,s.kt)("p",null,"Using enums is straightforward. Simply use dot notation as you normally would with a regular object."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"enum FileExtension {\n    JAVASCRIPT = '.js',\n    TYPESCRIPT = '.ts',\n    RUST = '.rs',\n    PYTHON = '.py',\n}\n\nconst value = FileExtension.JAVASCRIPT;\n\nconsole.log(value) // => \".js\"\n")),(0,s.kt)("h2",{id:"using-enums-as-types"},"Using enums as types"),(0,s.kt)("p",null,"The nice thing about enums is that they can be used directly in type annotations as somewhat of a custom type. Observe this function:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"const createFileName = (name: string, extension: string) => {\n    return name + extension;\n};\n")),(0,s.kt)("p",null,"We can restrict ",(0,s.kt)("inlineCode",{parentName:"p"},"extension")," so that it can only be a value in the enum by replacing ",(0,s.kt)("inlineCode",{parentName:"p"},"extension: string")," with ",(0,s.kt)("inlineCode",{parentName:"p"},"extension: FileExtension"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"enum FileExtension {\n    JAVASCRIPT = '.js',\n    TYPESCRIPT = '.ts',\n    RUST = '.rs',\n    PYTHON = '.py',\n}\n\nconst createFileName = (name: string, extension: FileExtension) => {\n    return name + extension;\n};\n\n// Call the function and use the enum to populate the second parameter\nconst fileName = createFileName('hello', FileExtension.TYPESCRIPT);\n\nconsole.log(fileName);\n")),(0,s.kt)("p",null,"We don't get autocomplete, but the ",(0,s.kt)("inlineCode",{parentName:"p"},"extension")," parameter is now restricted to the values defined in the ",(0,s.kt)("inlineCode",{parentName:"p"},"FileExtension")," enum."),(0,s.kt)("h2",{id:"next"},"Next up"),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"enum")," keyword is just the tip of the iceberg of the exclusive features TypeScript has to offer. Let's now ",(0,s.kt)("a",{parentName:"p",href:"/academy/switching-to-typescript/type-aliases",target:null,rel:null},"learn about")," type aliases (custom types!) with the ",(0,s.kt)("inlineCode",{parentName:"p"},"type")," keyword."))}g.isMDXComponent=!0},13729:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,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"}}]);