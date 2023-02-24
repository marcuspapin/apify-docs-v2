"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[3642],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(f,i(i({ref:t},s),{},{components:n})):a.createElement(f,i({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},78946:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],l={title:"Output schema",description:"Learn how to generate an appealing Overview table interface to preview your actor results in real time on the Apify Platform.",sidebar_position:3,slug:"/deploying-your-code/output-schema"},p="Output schema",c={unversionedId:"platform/deploying_your_code/output_schema",id:"platform/deploying_your_code/output_schema",title:"Output schema",description:"Learn how to generate an appealing Overview table interface to preview your actor results in real time on the Apify Platform.",source:"@site/sources/academy/platform/deploying_your_code/output_schema.md",sourceDirName:"platform/deploying_your_code",slug:"/deploying-your-code/output-schema",permalink:"/academy/deploying-your-code/output-schema",draft:!1,editUrl:"https://github.com/apify/apify-docs-v2/edit/master/sources/academy/platform/deploying_your_code/output_schema.md",tags:[],version:"current",lastUpdatedBy:"Jan \u010curn",lastUpdatedAt:1677248878,formattedLastUpdatedAt:"Feb 24, 2023",sidebarPosition:3,frontMatter:{title:"Output schema",description:"Learn how to generate an appealing Overview table interface to preview your actor results in real time on the Apify Platform.",sidebar_position:3,slug:"/deploying-your-code/output-schema"},sidebar:"academy",previous:{title:"Input schema",permalink:"/academy/deploying-your-code/input-schema"},next:{title:"Dockerfile",permalink:"/academy/deploying-your-code/docker-file"}},s={},u=[{value:"Implementation",id:"implementation",level:2},{value:"Final result",id:"final-result",level:2},{value:"Next up",id:"next",level:2}],m={toc:u};function d(e){var t=e.components,l=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"output-schema"},"Output schema"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Learn how to generate an appealing Overview table interface to preview your actor results in real time on the Apify Platform.")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"The Output schema generates an interface that enables users to instantly preview their actor results in real time."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Output Schema",src:n(44091).Z,width:"2544",height:"1466"})),(0,o.kt)("p",null,"In this quick tutorial, you will learn how to set up an output tab for your own actor."),(0,o.kt)("h2",{id:"implementation"},"Implementation"),(0,o.kt)("p",null,"Firstly, create a ",(0,o.kt)("inlineCode",{parentName:"p"},".actor")," folder in the root of your actor's source code. Then, create a ",(0,o.kt)("inlineCode",{parentName:"p"},"actor.json")," file in this folder, after which you'll have .actor/actor.json."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:".actor/actor.json",src:n(15678).Z,width:"642",height:"706"})),(0,o.kt)("p",null,"Next, copy-paste the following template code into your ",(0,o.kt)("inlineCode",{parentName:"p"},"actor.json")," file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "actorSpecification": 1,\n    "name": "___ENTER_ACTOR_NAME____",\n    "title": "___ENTER_ACTOR_TITLE____",\n    "version": "1.0.0",\n    "storages": {\n        "dataset": {\n            "actorSpecification": 1,\n            "views": {\n                "overview": {\n                    "title": "Overview",\n                    "transformation": {\n                        "fields": [\n                            "___EXAMPLE_NUMERIC_FIELD___",\n                            "___EXAMPLE_PICTURE_URL_FIELD___",\n                            "___EXAMPLE_LINK_URL_FIELD___",\n                            "___EXAMPLE_TEXT_FIELD___",\n                            "___EXAMPLE_BOOLEAN_FIELD___"\n                        ]\n                    },\n                    "display": {\n                        "component": "table",\n                        "properties": {\n                            "___EXAMPLE_NUMERIC_FIELD___": {\n                                "label": "ID",\n                                "format": "number"\n                            },\n                            "___EXAMPLE_PICTURE_URL_FIELD___": {\n                                "format": "image"\n                            },\n                            "___EXAMPLE_LINK_URL_FIELD___": {\n                                "label": "Clickable link",\n                                "format": "link"\n                            }\n                        }\n                    }\n                }\n            }\n        }\n    }\n}\n')),(0,o.kt)("p",null,"To configure the output schema, simply replace the fields in the template with the relevant fields to you actor."),(0,o.kt)("p",null,"For reference, you can use the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/PerVillalva/zappos-scraper-actor/blob/main/.actor/actor.json",target:"_blank",rel:"noopener"},"Zappos Scraper source code")," as an example of how the final implementation of the output tab should look like in a live actor."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "actorSpecification": 1,\n    "name": "zappos-scraper",\n    "title": "Zappos Scraper",\n    "description": "",\n    "version": "1.0.0",\n    "storages": {\n        "dataset": {\n            "actorSpecification": 1,\n            "title": "Zappos.com Dataset",\n            "description": "",\n            "views": {\n                "products": {\n                    "title": "Overview",\n                    "description": "It can take about one minute until the first results are available.",\n                    "transformation": {\n                        "fields": [\n                            "imgUrl",\n                            "brand",\n                            "name",\n                            "SKU",\n                            "inStock",\n                            "onSale",\n                            "price",\n                            "url"\n                        ]\n                    },\n                    "display": {\n                        "component": "table",\n                        "properties": {\n                            "imgUrl": {\n                                "label": "Product image",\n                                "format": "image"\n                            },\n                            "url": {\n                                "label": "Link",\n                                "format": "link"\n                            },\n                            "brand": {\n                                "format": "text"\n                            },\n                            "name": {\n                                "format": "text"\n                            },\n                            "SKU": {\n                                "format": "text"\n                            },\n                            "inStock": {\n                                "format": "boolean"\n                            },\n                            "onSale": {\n                                "format": "boolean"\n                            },\n                            "price": {\n                                "format": "text"\n                            }\n                        }\n                    }\n                }\n            }\n        }\n    }\n}\n')),(0,o.kt)("p",null,"Note that the fields specified in the output schema should match the object keys of your resulting dataset."),(0,o.kt)("p",null,"Also, if your desired label has the same name as the defined object key, then you don't need to specify a label name. The schema will, by default, show a capitalized version of the key and even split camel case into separate words and capitalize all of them."),(0,o.kt)("p",null,"So, the matching object for the Zappos Scraper shown in the example above will look something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const results = {\n        url: request.loadedUrl,\n        imgUrl: $('#stage button[data-media=\"image\"] img[itemprop=\"image\"]').attr('src');,\n        brand: $('span[itemprop=\"brand\"]').text().trim(),\n        name: $('meta[itemprop=\"name\"]').attr('content');,\n        SKU: $('*[itemprop~=\"sku\"]').text().trim(),\n        inStock: !request.url.includes('oosRedirected=true'),\n        onSale: !$('div[itemprop=\"offers\"]').text().includes('OFF'),\n        price: $('span[itemprop=\"price\"]').text(),\n    };\n")),(0,o.kt)("h2",{id:"final-result"},"Final result"),(0,o.kt)("p",null,"Great! Now that everything is set up, it's time to run the actor and admire your actor's brand new output tab."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Need some extra guidance? Visit the ",(0,o.kt)("a",{parentName:"p",href:"/platform/actors/development/output-schema",target:null,rel:null},"output schema documentation")," for more detailed information about how to implement this feature.")),(0,o.kt)("p",null,"A few seconds after running the actor, you should see the actors results being displayed in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Overview")," table."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Output table overview",src:n(31629).Z,width:"2540",height:"1396"})),(0,o.kt)("h2",{id:"next"},"Next up"),(0,o.kt)("p",null,"In the ",(0,o.kt)("a",{parentName:"p",href:"/academy/deploying-your-code/docker-file",target:null,rel:null},"next lesson"),", we'll learn about a very important file that is required for our project to run on the Apify platform - the Dockerfile."))}d.isMDXComponent=!0},15678:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/actor-json-example-7f3c312c187b9f6f86879594a769f35f.webp"},44091:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/output-schema-example-7ee3cd47cd88503178c55f148cbe0417.webp"},31629:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/output-schema-final-example-0beffd41c710a5438a8fe1c4a72f0f07.webp"}}]);