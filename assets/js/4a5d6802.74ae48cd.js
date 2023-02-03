"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[7300],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>m});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),p=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},d=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),c=p(n),m=r,f=c["".concat(s,".").concat(m)]||c[m]||u[m]||i;return n?a.createElement(f,l(l({ref:e},d),{},{components:n})):a.createElement(f,l({ref:e},d))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},71717:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=["components"],o={title:"Output schema",description:"Output schema is designed to help actor developers present the results to actor users in an attractive and comprehensive output UI.",slug:"/actors/development/output-schema"},s="Actor output schema",p={unversionedId:"actors/development/output_schema",id:"actors/development/output_schema",title:"Output schema",description:"Output schema is designed to help actor developers present the results to actor users in an attractive and comprehensive output UI.",source:"@site/sources/platform/actors/development/output_schema.md",sourceDirName:"actors/development",slug:"/actors/development/output-schema",permalink:"/platform/actors/development/output-schema",draft:!1,tags:[],version:"current",lastUpdatedBy:"Jind\u0159ich B\xe4r",lastUpdatedAt:1675420633,formattedLastUpdatedAt:"Feb 3, 2023",frontMatter:{title:"Output schema",description:"Output schema is designed to help actor developers present the results to actor users in an attractive and comprehensive output UI.",slug:"/actors/development/output-schema"},sidebar:"docs",previous:{title:"Input schema",permalink:"/platform/actors/development/input-schema"},next:{title:"Secret input",permalink:"/platform/actors/development/secret-input"}},d={},u=[{value:"Specification version 1",id:"specification-version-1",level:2},{value:"How to organize files in the .actor folder: two options",id:"how-to-organize-files-in-the-actor-folder-two-options",level:2},{value:"Basic Template",id:"basic-template",level:2},{value:"Example with inline comments",id:"example-with-inline-comments",level:2},{value:"Nested structures",id:"nested-structures",level:3},{value:"Dataset schema structure definitions",id:"dataset-schema-structure-definitions",level:2},{value:"DatasetSchema object definition",id:"datasetschema-object-definition",level:3},{value:"DatasetView object definition",id:"datasetview-object-definition",level:3},{value:"ViewTransformation object definition",id:"viewtransformation-object-definition",level:3},{value:"ViewDisplay object definition",id:"viewdisplay-object-definition",level:3},{value:"ViewDisplayProperty object definition",id:"viewdisplayproperty-object-definition",level:3}],c={toc:u};function m(t){var e=t.components,o=(0,r.Z)(t,l);return(0,i.kt)("wrapper",(0,a.Z)({},c,o,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"actor-output-schema"},"Actor output schema"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Output schema is designed to help actor developers present the results to actor users in an attractive and comprehensive output UI.")),(0,i.kt)("hr",null),(0,i.kt)("p",null," It is recommended to show the most important fields in a curated Overview visualization configured using output schema specification, while all available fields are automatically available in the \u201cAll fields\u201d view."),(0,i.kt)("p",null,"In the future, output schema will also help with strict output data format validation, which will make integrations more solid and easier to set up."),(0,i.kt)("h2",{id:"specification-version-1"},"Specification version 1"),(0,i.kt)("p",null,"An actor's output schema defines the structure and both API and visual representation of data produced by an actor. Output configuration files have to be located in the ",(0,i.kt)("inlineCode",{parentName:"p"},".actor")," folder in the actor's root directory."),(0,i.kt)("h2",{id:"how-to-organize-files-in-the-actor-folder-two-options"},"How to organize files in the .actor folder: two options"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"A)")," all config options are being set in a ",(0,i.kt)("strong",{parentName:"p"},".actor/actor.json")," file, e.g.:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'//file: .actor/actor.json\n{\n    "actorSpecification": 1,\n    "name": "this-is-book-library-scraper",\n    "title": "Book Library scraper",\n    "version": "1.0.0",\n    "storages": {\n        "dataset": {\n            "actorSpecification": 1,\n            "fields": {},\n            "views": {\n                "overview": {\n                    "title": "Overview",\n                    "transformation": {},\n                    "display": {}\n                }\n            }\n        }\n    }\n}\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"B)")," ",(0,i.kt)("strong",{parentName:"p"},".actor/actor.json")," links to other sub-config files in the same folder, e.g.:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'//file: .actor/actor.json\n{\n    "actorSpecification": 1,\n    "name": "this-is-book-library-scraper",\n    "title": "Book Library scraper",\n    "version": "1.0.0",\n    "storages": {\n        "dataset": "./dataset_schema.json"\n    }\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'//file: .actor/dataset_schema.json\n{\n    "actorSpecification": 1,\n    "fields": {},\n    "views": {\n        "overview": {\n            "title": "Overview",\n            "transformation": {},\n            "display": {}\n        }\n    }\n}\n')),(0,i.kt)("p",null,"Both options are valid. The user can choose based on their own needs."),(0,i.kt)("h2",{id:"basic-template"},"Basic Template"),(0,i.kt)("p",null,"Imagine there is an actor that calls ",(0,i.kt)("inlineCode",{parentName:"p"},"Actor.pushData()")," to store data into dataset e.g."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'//file: main.js\nimport { Actor } from \'apify\';\n// Initialize the Apify SDK\nawait Actor.init();\n\n/**\n * Actor code\n */\nawait Actor.pushData({\n    "___EXAMPLE_NUMERIC_FIELD___": 10,\n    "___EXAMPLE_PICTURE_URL_FIELD___": "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png",\n    "___EXAMPLE_LINK_URL_FIELD___": "https://google.com",\n    "___EXAMPLE_TEXT_FIELD___": "Google",\n    "___EXAMPLE_BOOLEAN_FIELD___": true,\n    "___EXAMPLE_DATE_FIELD___": new Date(),\n    "___EXAMPLE_ARRAY_FIELD___": [\'#hello\', "#world"],\n    "___EXAMPLE_OBJECT_FIELD___": {},\n})\n\n// Exit successfully\nawait Actor.exit();\n')),(0,i.kt)("p",null,"Let\u2019s say we are going to use a single file to set up an actor\u2019s output tab UI. The following template can be used as a ",(0,i.kt)("inlineCode",{parentName:"p"},".actor/actor.json")," configuration."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'//file: .actor/actor.json\n{\n    "actorSpecification": 1,\n    "name": "___ENTER_ACTOR_NAME____",\n    "title": "___ENTER_ACTOR_TITLE____",\n    "version": "1.0.0",\n    "storages": {\n        "dataset": {\n            "actorSpecification": 1,\n            "views": {\n                "overview": {\n                    "title": "Overview",\n                    "transformation": {\n                        "fields": [\n                            "___EXAMPLE_PICTURE_URL_FIELD___",\n                            "___EXAMPLE_LINK_URL_FIELD___",\n                            "___EXAMPLE_TEXT_FIELD___",\n                            "___EXAMPLE_BOOLEAN_FIELD___",\n                            "___EXAMPLE_ARRAY_FIELD___",\n                            "___EXAMPLE_OBJECT_FIELD___",\n                            "___EXAMPLE_DATE_FIELD___",\n                            "___EXAMPLE_NUMERIC_FIELD___"\n                        ]\n                    },\n                    "display": {\n                        "component": "table",\n                        "properties": {\n                            "___EXAMPLE_PICTURE_URL_FIELD___": {\n                                "label": "Image",\n                                "format": "image"\n                            },\n                            "___EXAMPLE_LINK_URL_FIELD___": {\n                                "label": "Link",\n                                "format": "link"\n                            },\n                            "___EXAMPLE_TEXT_FIELD___": {\n                                "label": "Text",\n                                "format": "text"\n                            },\n                            "___EXAMPLE_BOOLEAN_FIELD___": {\n                                "label": "Boolean",\n                                "format": "boolean"\n                            },\n                            "___EXAMPLE_ARRAY_FIELD___": {\n                                "label": "Array",\n                                "format": "array"\n                            },\n                            "___EXAMPLE_OBJECT_FIELD___": {\n                                "label": "Object",\n                                "format": "object"\n                            },\n                            "___EXAMPLE_DATE_FIELD___": {\n                                "label": "Date",\n                                "format": "date"\n                            },\n                            "___EXAMPLE_NUMERIC_FIELD___": {\n                                "label": "Number",\n                                "format": "number"\n                            }\n                        }\n                    }\n                }\n            }\n        }\n    }\n}\n')),(0,i.kt)("p",null,"The template above defines the configuration for the default dataset output view. Under the ",(0,i.kt)("strong",{parentName:"p"},"views")," property, there is one view with the title ",(0,i.kt)("strong",{parentName:"p"},"Overview"),". The view configuration consists of two basic steps: 1) set up how to fetch the data, aka ",(0,i.kt)("strong",{parentName:"p"},"transformation,")," and 2) set up how to ",(0,i.kt)("strong",{parentName:"p"},"display")," the data fetched in step 1). The default behaviour is that the Output tab UI table will display ",(0,i.kt)("strong",{parentName:"p"},"all the fields")," from ",(0,i.kt)("inlineCode",{parentName:"p"},"transformation.fields")," ",(0,i.kt)("strong",{parentName:"p"},"in that same order"),". So, theoretically, there should be no need to set up ",(0,i.kt)("inlineCode",{parentName:"p"},"[**display.properties**](http://display.properties)")," at all. However, it can be customized in case it is visually worth setting up some specific display format or column labels. The customization is carried out by using one of the ",(0,i.kt)("inlineCode",{parentName:"p"},"transformation.fields")," names inside ",(0,i.kt)("inlineCode",{parentName:"p"},"display.properties")," and overriding either the label or the format, as demonstrated in the basic template above."),(0,i.kt)("p",null,"A 2-step configuration (transform & display) was implemented to provide a way to fetch data in the format presented in both API and UI consistently. Consistency between API data and UI data is crucial for actor end-users for them to experience the same results in both API and UI. Thus for the best end-user experience, we recommend overriding as few display properties as possible."),(0,i.kt)("p",null,"Example of an actor output UI generated using basic template:\n",(0,i.kt)("img",{alt:"Output tab UI",src:n(87892).Z,width:"2914",height:"1310"})),(0,i.kt)("h2",{id:"example-with-inline-comments"},"Example with inline comments"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'//file: .actor/actor.json\n{\n    "actorSpecification": 1,                //mandatory\n    "name": "this-is-book-library-scraper", //mandatory, unique name of an actor\n    "title": "Book Library scraper",        //mandatory, the human readable name of an actor\n    "version": "1.0.0",                     //mandatory\n    "storages": {                           //mandatory\n        "dataset": {                        //mandatory\n            "actorSpecification": 1,        //mandatory\n            "fields": {},                   //mandatory, but it can be an empty object for now\n            "views": {                      //mandatory\n                "overview": {               //mandatory, but it does not have to be "overview", one can choose any name, multiple views are possible within views object\n                    "title": "Overview",    //mandatory, one can choose any other title\n                    "transformation": {     //mandatory\n                        "fields": [         //mandatory, fields property supports basic JSONPath selectors\n                            "isbn",         //important, an order of fields in this array matches the order of columns in visualisation UI\n                            "picture",\n                            "title",\n                            "buyOnlineUrl",\n                            "author",\n                            "longBookDescription",\n                            "anObjectWithDeepStructure.pageCount",\n                            "anObjectWithDeepStructure.buyOnlineUrl",\n                            "anObjectWithDeepStructure.isRead",\n                            "anObjectWithDeepStructure.lastReadTime",\n                            "anArray",\n                            "anObject"\n                        ],\n                        "flatten": [        //optional, flattened objects are easily available for as display.properties keys\n                            "anObjectWithDeepStructure"\n                        ]\n                    },\n                    "display": {                      //mandatory\n                        "component": "table",         //mandatory\n                        "properties": {               //mandatory\n                            "isbn": {                 //optional, use transformation.fields values there as keys\n                                "label": "ISBN",      //optional, define "label" only in case you would like to overide the basic field name capitalisation in table UI\n                                // "format": "text"   //optional, "text" format is default, use only in case you would like to overide the default format settings\n                            },\n                            "picture": {\n                                "label": "Cover",\n                                "format": "image"     //optional, in this case the format is overriden to show "image" instead of image link "text". "image" format only works with .jpeg, .png or other image format urls.\n                            },\n                            // "title": {             //does not have to be specified, default behaviour will show the field correctly\n                            //    "label": "Title",\n                            //    "format": "text"\n                            // },\n                            "buyOnlineUrl": {\n                                "label": "URL",\n                                "format": "link"\n                            },\n                            // "author": {\n                            //     "label": "Author",\n                            //     "format": "text"\n                            // },\n                            "longBookDescription": {\n                                "label": "Description"\n                            },\n                            "anObjectWithDeepStructure.pageCount": {   //use "." for sub-keys of flattened objects\n                                "label": "# pages",\n                                "format": "number"\n                            },\n                            "anObjectWithDeepStructure.isRead": {\n                                "label": "Have been read?",\n                                "format": "boolean"\n                            },\n                            "anObjectWithDeepStructure.lastReadTime": {\n                                "label": "Last read time",\n                                "format": "date"\n                            },\n                            "anObjectExample": {\n                                "label": "Some Object"\n                            },\n                            "anArrayExample": {\n                                "label": "Some Array"\n                            }\n                        }\n                    }\n                }\n            }\n        }\n    }\n}\n')),(0,i.kt)("h3",{id:"nested-structures"},"Nested structures"),(0,i.kt)("p",null,"The most frequently used data formats present the data in a tabular format (Output tab table, Excel, CSV). In case an actor produces nested JSON structures, there is a need to transform the nested data into a flat tabular format. There are three ways to flatten the data:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"1)")," use ",(0,i.kt)("inlineCode",{parentName:"p"},"transformation.flatten")," to flatten the nested structure of specified fields. Flatten transforms the nested object into a flat structure. e.g. with ",(0,i.kt)("inlineCode",{parentName:"p"},"flatten:[\u201dfoo\u201d]"),", the object ",(0,i.kt)("inlineCode",{parentName:"p"},"{\u201dfoo\u201d:{\u201dbar\u201d:\u201dhello\u201d}}")," is turned into ",(0,i.kt)("inlineCode",{parentName:"p"},"{\u2019foo.bar\u201d:\u201dhello\u201d}"),". Once the structure is flattened, it is necessary to use the flattened property name in both ",(0,i.kt)("inlineCode",{parentName:"p"},"transformation.fields")," and ",(0,i.kt)("a",{parentName:"p",href:"http://display.properties",target:"_blank",rel:"noopener"},(0,i.kt)("inlineCode",{parentName:"a"},"display.properties")),", otherwise, fields might not be fetched or configured properly in the UI visualization.\n",(0,i.kt)("strong",{parentName:"p"},"2)")," use ",(0,i.kt)("inlineCode",{parentName:"p"},"transformation.unwind")," to deconstruct the nested children into parent objects.\n",(0,i.kt)("strong",{parentName:"p"},"3)")," change the output structure in an actor from nested to flat before the results are saved in the dataset."),(0,i.kt)("h2",{id:"dataset-schema-structure-definitions"},"Dataset schema structure definitions"),(0,i.kt)("h3",{id:"datasetschema-object-definition"},"DatasetSchema object definition"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"actorSpecification"),(0,i.kt)("td",{parentName:"tr",align:null},"integer"),(0,i.kt)("td",{parentName:"tr",align:null},"true"),(0,i.kt)("td",{parentName:"tr",align:null},"Specifies the version of dataset schema ",(0,i.kt)("br",null),"structure document. ",(0,i.kt)("br",null),"Currently only version 1 is available.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"fields"),(0,i.kt)("td",{parentName:"tr",align:null},"JSONSchema compatible object"),(0,i.kt)("td",{parentName:"tr",align:null},"true"),(0,i.kt)("td",{parentName:"tr",align:null},"Schema of one dataset object. ",(0,i.kt)("br",null),"Use JsonSchema Draft 2020-12 or ",(0,i.kt)("br",null),"other compatible formats.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"views"),(0,i.kt)("td",{parentName:"tr",align:null},"DatasetView object"),(0,i.kt)("td",{parentName:"tr",align:null},"true"),(0,i.kt)("td",{parentName:"tr",align:null},"An object with a description of an API ",(0,i.kt)("br",null),"and UI views.")))),(0,i.kt)("h3",{id:"datasetview-object-definition"},"DatasetView object definition"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"title"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"true"),(0,i.kt)("td",{parentName:"tr",align:null},"The title is visible in UI in the Output tab ",(0,i.kt)("br",null),"as well as in the API.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"description"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"false"),(0,i.kt)("td",{parentName:"tr",align:null},"The description is only available in the API response. ",(0,i.kt)("br",null),"The usage of this field is optional.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"transformation"),(0,i.kt)("td",{parentName:"tr",align:null},"ViewTransformation object"),(0,i.kt)("td",{parentName:"tr",align:null},"true"),(0,i.kt)("td",{parentName:"tr",align:null},"The definition of data transformation ",(0,i.kt)("br",null),"is applied when dataset data are loaded from ",(0,i.kt)("br",null),"Dataset API.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"display"),(0,i.kt)("td",{parentName:"tr",align:null},"ViewDisplay object"),(0,i.kt)("td",{parentName:"tr",align:null},"true"),(0,i.kt)("td",{parentName:"tr",align:null},"The definition of Output tab UI visualization.")))),(0,i.kt)("h3",{id:"viewtransformation-object-definition"},"ViewTransformation object definition"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"fields"),(0,i.kt)("td",{parentName:"tr",align:null},"string[]"),(0,i.kt)("td",{parentName:"tr",align:null},"true"),(0,i.kt)("td",{parentName:"tr",align:null},"Selects fields that are going to be presented in the output. ",(0,i.kt)("br",null),"The order of fields matches the order of columns ",(0,i.kt)("br",null),"in visualization UI. In case the fields value ",(0,i.kt)("br",null),"is missing, it will be presented as \u201cundefined\u201d in the UI.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"unwind"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"false"),(0,i.kt)("td",{parentName:"tr",align:null},"Deconstructs nested children into parent object, ",(0,i.kt)("br",null),"e.g.: with unwind:","[\u201dfoo\u201d]",", the object ",(0,i.kt)("inlineCode",{parentName:"td"},"{\u201dfoo\u201d:{\u201dbar\u201d:\u201dhello\u201d}}"),"  ",(0,i.kt)("br",null)," is turned into ",(0,i.kt)("inlineCode",{parentName:"td"},"{\u2019bar\u201d:\u201dhello\u201d}"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"flatten"),(0,i.kt)("td",{parentName:"tr",align:null},"string[]"),(0,i.kt)("td",{parentName:"tr",align:null},"false"),(0,i.kt)("td",{parentName:"tr",align:null},"Transforms nested object into flat structure. ",(0,i.kt)("br",null),"eg: with flatten:","[\u201dfoo\u201d]"," the object ",(0,i.kt)("inlineCode",{parentName:"td"},"{\u201dfoo\u201d:{\u201dbar\u201d:\u201dhello\u201d}}")," ",(0,i.kt)("br",null)," is turned into ",(0,i.kt)("inlineCode",{parentName:"td"},"{\u2019foo.bar\u201d:\u201dhello\u201d}"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"omit"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"false"),(0,i.kt)("td",{parentName:"tr",align:null},"Removes the specified fields from the output. ",(0,i.kt)("br",null),"Nested fields names can be used there as well.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"limit"),(0,i.kt)("td",{parentName:"tr",align:null},"integer"),(0,i.kt)("td",{parentName:"tr",align:null},"false"),(0,i.kt)("td",{parentName:"tr",align:null},"The maximum number of results returned. ",(0,i.kt)("br",null),"Default is all results.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"desc"),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"false"),(0,i.kt)("td",{parentName:"tr",align:null},"By default, results are sorted in ascending based ",(0,i.kt)("br",null),"on the write event into the dataset. desc:true param ",(0,i.kt)("br",null),"will return the newest writes to the dataset first.")))),(0,i.kt)("h3",{id:"viewdisplay-object-definition"},"ViewDisplay object definition"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"component"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"true"),(0,i.kt)("td",{parentName:"tr",align:null},"Only component \u201ctable\u201d is available.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"properties"),(0,i.kt)("td",{parentName:"tr",align:null},"Object"),(0,i.kt)("td",{parentName:"tr",align:null},"false"),(0,i.kt)("td",{parentName:"tr",align:null},"Object with keys matching the ",(0,i.kt)("inlineCode",{parentName:"td"},"transformation.fields")," ",(0,i.kt)("br",null)," and ViewDisplayProperty as values. In case properties are not set ",(0,i.kt)("br",null),"the table will be rendered automatically with fields formatted as Strings, ",(0,i.kt)("br",null),"Arrays or Objects.")))),(0,i.kt)("h3",{id:"viewdisplayproperty-object-definition"},"ViewDisplayProperty object definition"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"label"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"false"),(0,i.kt)("td",{parentName:"tr",align:null},"In case the data are visualized as in Table view. ",(0,i.kt)("br",null),"The label will be visible table column\u2019s header.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"format"),(0,i.kt)("td",{parentName:"tr",align:null},"enum(text, number, date, link, ",(0,i.kt)("br",null),"boolean, image, array, object)"),(0,i.kt)("td",{parentName:"tr",align:null},"false"),(0,i.kt)("td",{parentName:"tr",align:null},"Describes how output data values are formatted ",(0,i.kt)("br",null),"in order to be rendered in the output tab UI.")))))}m.isMDXComponent=!0},87892:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/output-schema-example-42bf91c1c1f39834fad5bbedf209acaa.png"}}]);