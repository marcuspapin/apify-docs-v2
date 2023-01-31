"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[1946],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),h=a,m=d["".concat(l,".").concat(h)]||d[h]||c[h]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},32666:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],s={title:"Input schema",description:"Learn how to generate a user interface on the platform for your actor's input with a single file - the INPUT_SCHEMA.json file.",sidebar_position:2,slug:"/deploying-your-code/input-schema"},l="Input schema",p={unversionedId:"platform/deploying_your_code/input_schema",id:"platform/deploying_your_code/input_schema",title:"Input schema",description:"Learn how to generate a user interface on the platform for your actor's input with a single file - the INPUT_SCHEMA.json file.",source:"@site/sources/academy/platform/deploying_your_code/input_schema.md",sourceDirName:"platform/deploying_your_code",slug:"/deploying-your-code/input-schema",permalink:"/academy/deploying-your-code/input-schema",draft:!1,tags:[],version:"current",lastUpdatedBy:"Jind\u0159ich B\xe4r",lastUpdatedAt:1675174133,formattedLastUpdatedAt:"Jan 31, 2023",sidebarPosition:2,frontMatter:{title:"Input schema",description:"Learn how to generate a user interface on the platform for your actor's input with a single file - the INPUT_SCHEMA.json file.",sidebar_position:2,slug:"/deploying-your-code/input-schema"},sidebar:"academy",previous:{title:"Inputs & outputs",permalink:"/academy/deploying-your-code/inputs-outputs"},next:{title:"Output schema",permalink:"/academy/deploying-your-code/output-schema"}},u={},c=[{value:"Schema title &amp; description",id:"title-and-description",level:2},{value:"Properties",id:"properties",level:2},{value:"Property types &amp; editor types",id:"property-types",level:2},{value:"Required fields",id:"required-fields",level:2},{value:"Final thoughts",id:"final-thoughts",level:2},{value:"Next up",id:"next",level:2}],d={toc:c};function h(e){var t=e.components,s=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"input-schema"},"Input schema"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Learn how to generate a user interface on the platform for your actor's input with a single file - the INPUT_SCHEMA.json file.")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Though writing an ",(0,o.kt)("a",{parentName:"p",href:"/platform/actors/development/input-schema",target:null,rel:null},"input schema")," for an actor is not a required step, it is most definitely an ideal one. The Apify platform will read the ",(0,o.kt)("strong",{parentName:"p"},"INPUT_SCHEMA.json")," file within the root of your project and generate a user interface for entering input into your actor, which makes it significantly easier for non-developers (and even developers) to configure and understand the inputs your actor can receive. Because of this, we'll be writing an input schema for our example actor."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Without an input schema, the users of our actor will have to provide the input in JSON format, which can be problematic for those who are not familiar with JSON.")),(0,o.kt)("h2",{id:"title-and-description"},"Schema title & description"),(0,o.kt)("p",null,"In the root of our project, we'll create a file named ",(0,o.kt)("strong",{parentName:"p"},"INPUT_SCHEMA.json")," and start writing the first part of the schema."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "title": "Adding actor input",\n    "description": "Add all values in list of numbers with an arbitrary length.",\n    "type": "object",\n    "schemaVersion": 1,\n}\n')),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"title")," and ",(0,o.kt)("strong",{parentName:"p"},"description")," simply describe what the input schema is for, and a bit about what the actor itself does."),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("p",null,"In order to define all of the properties our actor is expecting, we must include them within an object with a key of ",(0,o.kt)("strong",{parentName:"p"},"properties"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "title": "Adding actor input",\n    "description": "Add all values in list of numbers with an arbitrary length.",\n    "type": "object",\n    "schemaVersion": 1,\n    "properties": {\n        "numbers": {\n            "title": "Number list",\n            "description": "The list of numbers to add up.",\n        }\n    },\n}\n')),(0,o.kt)("p",null,"Each property's key corresponds to the name we're expecting within our code, while the ",(0,o.kt)("strong",{parentName:"p"},"title")," and ",(0,o.kt)("strong",{parentName:"p"},"description")," are what the user will see when configuring input on the platform."),(0,o.kt)("h2",{id:"property-types"},"Property types & editor types"),(0,o.kt)("p",null,"Within our new ",(0,o.kt)("strong",{parentName:"p"},"numbers")," property, there are two more fields we must specify. Firstly, we must let the platform know that we're expecting an array of numbers with the ",(0,o.kt)("strong",{parentName:"p"},"type")," field. Then, we should also instruct Apify on which UI component to render for this input property. In our case, we have an array of numbers, which means we should use the ",(0,o.kt)("strong",{parentName:"p"},"json")," editor type that we discovered in the ",(0,o.kt)("a",{parentName:"p",href:"/platform/actors/development/input-schema#array",target:null,rel:null},'"array" section')," of the input schema documentation. We could also use ",(0,o.kt)("strong",{parentName:"p"},"stringList"),", but then we'd have to parse out the numbers from the strings."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "title": "Adding actor input",\n    "description": "Add all values in list of numbers with an arbitrary length.",\n    "type": "object",\n    "schemaVersion": 1,\n    "properties": {\n        "numbers": {\n            "title": "Number list",\n            "description": "The list of numbers to add up.",\n            "type": "array",\n            "editor": "json"\n        }\n    },\n}\n')),(0,o.kt)("h2",{id:"required-fields"},"Required fields"),(0,o.kt)("p",null,"The great thing about building an input schema is that it will automatically validate your inputs based on their type, maximum value, minimum value, etc. Sometimes, you want to ensure that the user will always provide input for certain fields, as they are crucial to the actor's run. This can be done by using the ",(0,o.kt)("strong",{parentName:"p"},"required")," field, and passing in the names of the fields you'd like to require."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "title": "Adding actor input",\n    "description": "Add all values in list of numbers with an arbitrary length.",\n    "type": "object",\n    "schemaVersion": 1,\n    "properties": {\n        "numbers": {\n            "title": "Number list",\n            "description": "The list of numbers to add up.",\n            "type": "array",\n            "editor": "json"\n        }\n    },\n    "required": ["numbers"]\n}\n')),(0,o.kt)("p",null,"For our case, we've made the ",(0,o.kt)("strong",{parentName:"p"},"numbers")," field required, as it is crucial to our actor's run."),(0,o.kt)("h2",{id:"final-thoughts"},"Final thoughts"),(0,o.kt)("p",null,"Here is what the input schema we wrote will render on the platform:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Rendered UI from input schema",src:n(54296).Z,width:"1542",height:"800"})),(0,o.kt)("p",null,"Later on, we'll be building more complex input schemas, as well as discussing how to write quality input schemas that allow the user to easily understand the actor and not become overwhelmed."),(0,o.kt)("p",null,"It is not expected to memorize all of the fields that properties can take, or the different editor types available, which is why it's always good to reference the ",(0,o.kt)("a",{parentName:"p",href:"/platform/actors/development/input-schema",target:null,rel:null},"input schema documentation")," when writing a schema."),(0,o.kt)("h2",{id:"next"},"Next up"),(0,o.kt)("p",null,"In the ",(0,o.kt)("a",{parentName:"p",href:"/academy/deploying-your-code/output-schema",target:null,rel:null},"next lesson"),", we'll learn how to generate an appealing Overview table to display our actor's results in real time, so users can get immediate feedback about the data being extracted."))}h.isMDXComponent=!0},54296:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/rendered-ui-74b1f9f74dce9ba83249f733716a0745.png"}}]);