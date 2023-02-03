"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[7288],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(a),m=r,h=u["".concat(i,".").concat(m)]||u[m]||c[m]||l;return a?n.createElement(h,s(s({ref:t},d),{},{components:a})):n.createElement(h,s({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,s=new Array(l);s[0]=u;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var p=2;p<l;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},66602:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),s=["components"],o={title:"Dataset",description:"Store and export web scraping, crawling or data processing job results. Learn how to access and manage datasets in Apify Console or via API.",sidebar_position:9.1,slug:"/storage/dataset"},i="Dataset",p={unversionedId:"storage/dataset",id:"storage/dataset",title:"Dataset",description:"Store and export web scraping, crawling or data processing job results. Learn how to access and manage datasets in Apify Console or via API.",source:"@site/sources/platform/storage/dataset.md",sourceDirName:"storage",slug:"/storage/dataset",permalink:"/platform/storage/dataset",draft:!1,tags:[],version:"current",lastUpdatedBy:"Jind\u0159ich B\xe4r",lastUpdatedAt:1675420633,formattedLastUpdatedAt:"Feb 3, 2023",sidebarPosition:9.1,frontMatter:{title:"Dataset",description:"Store and export web scraping, crawling or data processing job results. Learn how to access and manage datasets in Apify Console or via API.",sidebar_position:9.1,slug:"/storage/dataset"},sidebar:"docs",previous:{title:"Storage",permalink:"/platform/storage"},next:{title:"Key-value store",permalink:"/platform/storage/key-value-store"}},d={},c=[{value:"Basic usage",id:"basic-usage",level:2},{value:"Apify Console",id:"apify-console",level:3},{value:"Apify SDK",id:"apify-sdk",level:3},{value:"JavaScript API client",id:"javascript-api-client",level:3},{value:"Python API client",id:"python-api-client",level:3},{value:"Apify API",id:"apify-api",level:3},{value:"Hidden fields",id:"hidden-fields",level:2},{value:"XML format extension",id:"xml-format-extension",level:2},{value:"Sharing",id:"sharing",level:2},{value:"Sharing datasets between runs",id:"sharing-datasets-between-runs",level:3},{value:"Limits",id:"limits",level:2},{value:"Rate limiting",id:"rate-limiting",level:3}],u={toc:c};function m(e){var t=e.components,o=(0,r.Z)(e,s);return(0,l.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"dataset"},"Dataset"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Store and export web scraping, crawling or data processing job results. Learn how to access and manage datasets in Apify Console or via API.")),(0,l.kt)("hr",null),(0,l.kt)("p",null,"Dataset storage enables you to sequentially save and retrieve data. Each actor run is assigned its own dataset, which is created when the first item is stored to it."),(0,l.kt)("p",null,"Datasets usually contain results from web scraping, crawling or data processing jobs. The data can be visualized as a table where each object is a row and its attributes are the columns. The data can be exported in JSON, CSV, XML, RSS, Excel or HTML formats."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Named datasets are retained indefinitely. ",(0,l.kt)("br",null),"\nUnnamed datasets expire after 7 days unless otherwise specified. ",(0,l.kt)("br",null),"\n",(0,l.kt)("a",{parentName:"p",href:"/platform/storage",target:null,rel:null},"Learn about named and unnamed datasets."))),(0,l.kt)("p",null,"Dataset storage is ",(0,l.kt)("strong",{parentName:"p"},"append-only")," - data can only be added and cannot be changed or deleted."),(0,l.kt)("h2",{id:"basic-usage"},"Basic usage"),(0,l.kt)("p",null,"There are five ways to access your datasets:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://console.apify.com/storage?tab=datasets",target:"_blank",rel:"noopener"},"Apify Console")," - provides an easy-to-understand interface [",(0,l.kt)("a",{parentName:"li",href:"#apify-console",target:null,rel:null},"details"),"]."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs-v2.apify.com/sdk-js/docs/guides/result-storage#dataset",target:"_blank",rel:"noopener"},"Apify SDK")," - when building your own Apify actor [",(0,l.kt)("a",{parentName:"li",href:"#apify-sdk",target:null,rel:null},"details"),"]."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/apify-client-js#datasetclient",target:null,rel:null},"JavaScript API client")," - to access your datasets from any Node.js application [",(0,l.kt)("a",{parentName:"li",href:"#javascript-api-client",target:null,rel:null},"details"),"]."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/apify-client-python#datasetclient",target:null,rel:null},"Python API client")," - to access your datasets from any Python application [",(0,l.kt)("a",{parentName:"li",href:"#python-api-client",target:null,rel:null},"details"),"]."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/api/v2#/reference/datasets",target:null,rel:null},"Apify API")," - for accessing your datasets programmatically [",(0,l.kt)("a",{parentName:"li",href:"#apify-api",target:null,rel:null},"details"),"].")),(0,l.kt)("h3",{id:"apify-console"},"Apify Console"),(0,l.kt)("p",null,"In ",(0,l.kt)("a",{parentName:"p",href:"https://console.apify.com",target:"_blank",rel:"noopener"},"Apify Console"),", you can view your datasets in the ",(0,l.kt)("a",{parentName:"p",href:"https://console.apify.com/storage",target:"_blank",rel:"noopener"},"Storage")," section under the ",(0,l.kt)("a",{parentName:"p",href:"https://console.apify.com/storage?tab=datasets",target:"_blank",rel:"noopener"},"Datasets")," tab."),(0,l.kt)("p",null,"Only named datasets are displayed by default. Select the ",(0,l.kt)("strong",{parentName:"p"},"Include unnamed datasets")," checkbox to display all of your datasets."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Datasets in app",src:a(81437).Z,width:"1978",height:"1116"})),(0,l.kt)("p",null,"To view or download a dataset in the above-mentioned formats, click on its ",(0,l.kt)("strong",{parentName:"p"},"Dataset ID"),". Under the ",(0,l.kt)("strong",{parentName:"p"},"Settings")," tab, you can update the dataset's name (and, in turn, its ",(0,l.kt)("a",{parentName:"p",href:"/platform/storage",target:null,rel:null},"retention period"),") and\n",(0,l.kt)("a",{parentName:"p",href:"/platform/access-rights",target:null,rel:null},"access rights"),". Click on the ",(0,l.kt)("inlineCode",{parentName:"p"},"API")," button to view and test the dataset's ",(0,l.kt)("a",{parentName:"p",href:"/api/v2#/reference/datasets",target:null,rel:null},"API endpoints"),"."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Datasets detail view",src:a(74133).Z,width:"1984",height:"1530"})),(0,l.kt)("h3",{id:"apify-sdk"},"Apify SDK"),(0,l.kt)("p",null,"If you are building an ",(0,l.kt)("a",{parentName:"p",href:"/platform/actors",target:null,rel:null},"Apify actor"),", you will be using the ",(0,l.kt)("a",{parentName:"p",href:"https://docs-v2.apify.com/sdk-js",target:"_blank",rel:"noopener"},"Apify SDK"),".\nIn the ",(0,l.kt)("a",{parentName:"p",href:"https://docs-v2.apify.com/sdk-js/docs/guides/result-storage#dataset",target:"_blank",rel:"noopener"},"Apify SDK"),", the dataset is represented by the\n",(0,l.kt)("a",{parentName:"p",href:"https://docs-v2.apify.com/sdk-js/api/apify/class/Dataset",target:"_blank",rel:"noopener"},(0,l.kt)("inlineCode",{parentName:"a"},"Dataset"))," class."),(0,l.kt)("p",null,"You can use the ",(0,l.kt)("inlineCode",{parentName:"p"},"Dataset")," class to specify whether your data is stored locally or in the Apify cloud, push data to datasets of your choice using the ",(0,l.kt)("a",{parentName:"p",href:"https://docs-v2.apify.com/sdk-js/api/apify/class/Dataset#pushData",target:"_blank",rel:"noopener"},(0,l.kt)("inlineCode",{parentName:"a"},"pushData()"))," method. You could also use other methods such as ",(0,l.kt)("a",{parentName:"p",href:"https://docs-v2.apify.com/sdk-js/api/apify/class/Dataset#getData",target:"_blank",rel:"noopener"},(0,l.kt)("inlineCode",{parentName:"a"},"getData()")),", ",(0,l.kt)("a",{parentName:"p",href:"https://docs-v2.apify.com/sdk-js/api/apify/class/Dataset#map",target:"_blank",rel:"noopener"},(0,l.kt)("inlineCode",{parentName:"a"},"map()"))," and ",(0,l.kt)("a",{parentName:"p",href:"https://docs-v2.apify.com/sdk-js/api/apify/class/Dataset#reduce",target:"_blank",rel:"noopener"},(0,l.kt)("inlineCode",{parentName:"a"},"reduce()")),", see ",(0,l.kt)("a",{parentName:"p",href:"https://docs-v2.apify.com/sdk-js/docs/examples/map-and-reduce",target:"_blank",rel:"noopener"},"example"),"."),(0,l.kt)("p",null,"If you have chosen to store your dataset locally, you can find it in the location below."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"{APIFY_LOCAL_STORAGE_DIR}/datasets/{DATASET_ID}/{INDEX}.json\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"DATASET_ID")," refers to the dataset's ",(0,l.kt)("strong",{parentName:"p"},"name")," or ",(0,l.kt)("strong",{parentName:"p"},"ID"),". The default dataset will be stored in the ",(0,l.kt)("strong",{parentName:"p"},"default")," directory."),(0,l.kt)("p",null,"To add data to the default dataset, you can use the example below:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// Import the Apify SDK into your project\nimport { Actor } from 'apify';\n\nawait Actor.init();\n// ...\n\n// Add one item to the default dataset\nawait Actor.pushData({ foo: 'bar' });\n\n// Add multiple items to the default dataset\nawait Actor.pushData([{ foo: 'hotel' }, { foo: 'cafe' }]);\n\n// ...\nawait Actor.exit();\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Make sure to use the ",(0,l.kt)("inlineCode",{parentName:"p"},"await")," keyword when calling ",(0,l.kt)("inlineCode",{parentName:"p"},"pushData()"),", otherwise the actor process might finish before the data are stored.")),(0,l.kt)("p",null,"If you want to use something other than the default dataset, e.g. a dataset that you share between actors or between actor runs, you can use the ",(0,l.kt)("a",{parentName:"p",href:"https://docs-v2.apify.com/sdk-js/api/apify/class/Actor#openDataset",target:"_blank",rel:"noopener"},"Actor.openDataset()")," method."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import { Actor } from 'apify';\n\nawait Actor.init();\n// ...\n\n// Save a named dataset to a variable\nconst dataset = await Actor.openDataset('some-name');\n\n// Add data to the named dataset\nawait dataset.pushData({ foo: 'bar' });\n\n// ...\nawait Actor.exit();\n")),(0,l.kt)("p",null,"When using the ",(0,l.kt)("a",{parentName:"p",href:"https://docs-v2.apify.com/sdk-js/api/apify/class/Dataset#getData",target:"_blank",rel:"noopener"},(0,l.kt)("inlineCode",{parentName:"a"},"getData()"))," method, you can specify the data you retrieve using the ",(0,l.kt)("inlineCode",{parentName:"p"},"fields")," option. It should be an array of field names (strings) that will be included in the results. To include all the results, exclude the ",(0,l.kt)("inlineCode",{parentName:"p"},"fields")," parameter."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import { Actor } from 'apify';\n\nawait Actor.init();\n// ...\n\nconst dataset = await Actor.openDataset();\n\n// Only get the 'hotel' and 'cafe' fields\nconst hotelAndCafeData = await dataset.getData({\n    fields: ['hotel', 'cafe'],\n});\n\n// ...\nawait Actor.exit();\n")),(0,l.kt)("p",null,"See the ",(0,l.kt)("a",{parentName:"p",href:"https://docs-v2.apify.com/sdk-js/docs/guides/result-storage#dataset",target:"_blank",rel:"noopener"},"SDK documentation")," and the ",(0,l.kt)("inlineCode",{parentName:"p"},"Dataset")," class's ",(0,l.kt)("a",{parentName:"p",href:"https://docs-v2.apify.com/sdk-js/api/apify/class/Dataset",target:"_blank",rel:"noopener"},"API reference")," for details on managing datasets with the Apify SDK."),(0,l.kt)("h3",{id:"javascript-api-client"},"JavaScript API client"),(0,l.kt)("p",null,"Apify's ",(0,l.kt)("a",{parentName:"p",href:"/apify-client-js#datasetclient",target:null,rel:null},"JavaScript API client")," (",(0,l.kt)("inlineCode",{parentName:"p"},"apify-client"),") allows you to access your datasets from any Node.js application, whether it is running on the Apify platform or elsewhere."),(0,l.kt)("p",null,"After importing and initiating the client, you can save each dataset to a variable for easier access."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const myDatasetClient = apifyClient.dataset('jane-doe/my-dataset');\n")),(0,l.kt)("p",null,"You can then use that variable to ",(0,l.kt)("a",{parentName:"p",href:"/apify-client-js#datasetclient",target:null,rel:null},"access the dataset's items and manage it"),"."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"When using the ",(0,l.kt)("a",{parentName:"p",href:"/apify-client-js#datasetclient-listitems",target:null,rel:null},(0,l.kt)("inlineCode",{parentName:"a"},".listItems()"))," method, if you mention the same field name in the ",(0,l.kt)("inlineCode",{parentName:"p"},"field")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"omit")," parameters, the ",(0,l.kt)("inlineCode",{parentName:"p"},"omit")," parameter will prevail and the field will not be returned.")),(0,l.kt)("p",null,"See the ",(0,l.kt)("a",{parentName:"p",href:"/apify-client-js#datasetclient",target:null,rel:null},"JavaScript API client documentation")," for ",(0,l.kt)("a",{parentName:"p",href:"/apify-client-js#quick-start",target:null,rel:null},"help with setup")," and more details."),(0,l.kt)("h3",{id:"python-api-client"},"Python API client"),(0,l.kt)("p",null,"Apify's ",(0,l.kt)("a",{parentName:"p",href:"/apify-client-python#datasetclient",target:null,rel:null},"Python API client")," (",(0,l.kt)("inlineCode",{parentName:"p"},"apify-client"),") allows you to access your datasets from any Python application, whether it is running on the Apify platform or elsewhere."),(0,l.kt)("p",null,"After importing and initiating the client, you can save each dataset to a variable for easier access."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"my_dataset_client = apify_client.dataset('jane-doe/my-dataset')\n")),(0,l.kt)("p",null,"You can then use that variable to ",(0,l.kt)("a",{parentName:"p",href:"/apify-client-python#datasetclient",target:null,rel:null},"access the dataset's items and manage it"),"."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"When using the ",(0,l.kt)("a",{parentName:"p",href:"/apify-client-python#datasetclient-list_items",target:null,rel:null},(0,l.kt)("inlineCode",{parentName:"a"},".list_items()"))," method, if you mention the same field name in the ",(0,l.kt)("inlineCode",{parentName:"p"},"field")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"omit")," parameters, the ",(0,l.kt)("inlineCode",{parentName:"p"},"omit")," parameter will prevail and the field will not be returned.")),(0,l.kt)("p",null,"See the ",(0,l.kt)("a",{parentName:"p",href:"/apify-client-python#datasetclient",target:null,rel:null},"Python API client documentation")," for ",(0,l.kt)("a",{parentName:"p",href:"/apify-client-python#quick-start",target:null,rel:null},"help with setup")," and more details."),(0,l.kt)("h3",{id:"apify-api"},"Apify API"),(0,l.kt)("p",null,"The ",(0,l.kt)("a",{parentName:"p",href:"/api/v2#/reference/datasets",target:null,rel:null},"Apify API")," allows you to access your datasets programmatically using ",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods",target:"_blank",rel:"noopener"},"HTTP requests")," and easily share your crawling results."),(0,l.kt)("p",null,"If you are accessing your datasets using the ",(0,l.kt)("strong",{parentName:"p"},"username~store-name")," ",(0,l.kt)("a",{parentName:"p",href:"/platform/storage",target:null,rel:null},"store ID format"),", you will need to use your ","[secret API token]","({{@link integrations.md#api-token}}). You can find the token (and your user ID) on the ",(0,l.kt)("a",{parentName:"p",href:"https://console.apify.com/account#/integrations",target:"_blank",rel:"noopener"},"Integrations")," page of your Apify account."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"When providing your API authentication token, we recommend using the request's ",(0,l.kt)("inlineCode",{parentName:"p"},"Authorization")," header, rather than the URL. (",(0,l.kt)("a",{parentName:"p",href:"#introduction/authentication",target:null,rel:null},"More info"),").")),(0,l.kt)("p",null,"To ",(0,l.kt)("strong",{parentName:"p"},"get a list of your datasets"),", send a GET request to the ",(0,l.kt)("a",{parentName:"p",href:"/api/v2#/reference/datasets/get-list-of-datasets",target:null,rel:null},"Get list of datasets")," endpoint."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"https://api.apify.com/v2/datasets\n")),(0,l.kt)("p",null,"To ",(0,l.kt)("strong",{parentName:"p"},"get information about a dataset")," such as its creation time and ",(0,l.kt)("strong",{parentName:"p"},"item count"),", send a GET request to the ",(0,l.kt)("a",{parentName:"p",href:"/api/v2#/reference/datasets/dataset/get-dataset",target:null,rel:null},"Get dataset")," endpoint."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"https://api.apify.com/v2/datasets/{DATASET_ID}\n")),(0,l.kt)("p",null,"To ",(0,l.kt)("strong",{parentName:"p"},"view a dataset's data"),", send a GET request to the\n",(0,l.kt)("a",{parentName:"p",href:"/api/v2#/reference/datasets/item-collection/get-items",target:null,rel:null},"Get dataset items")," Apify API endpoint."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"https://api.apify.com/v2/datasets/{DATASET_ID}/items\n")),(0,l.kt)("p",null,"You can ",(0,l.kt)("strong",{parentName:"p"},"specify which data are exported")," by adding a comma-separated list of fields to the ",(0,l.kt)("strong",{parentName:"p"},"fields")," query parameter. Likewise, you can also omit certain fields using the ",(0,l.kt)("strong",{parentName:"p"},"omit")," parameter."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"If you both specify and omit the same field in a request, the "),"omit",(0,l.kt)("strong",{parentName:"p"}," parameter will prevail and the field will not be returned.")),(0,l.kt)("p",null,"In addition, you can set the format in which you retrieve the data using the ",(0,l.kt)("strong",{parentName:"p"},"?format=")," parameter. The available formats are ",(0,l.kt)("strong",{parentName:"p"},"json"),", ",(0,l.kt)("strong",{parentName:"p"},"jsonl"),", ",(0,l.kt)("strong",{parentName:"p"},"csv"),", ",(0,l.kt)("strong",{parentName:"p"},"html"),", ",(0,l.kt)("strong",{parentName:"p"},"xlsx"),", ",(0,l.kt)("strong",{parentName:"p"},"xml")," and ",(0,l.kt)("strong",{parentName:"p"},"rss"),". The default value is ",(0,l.kt)("strong",{parentName:"p"},"json"),"."),(0,l.kt)("p",null,"To retrieve the ",(0,l.kt)("strong",{parentName:"p"},"hotel")," and ",(0,l.kt)("strong",{parentName:"p"},"cafe")," fields, you would send your GET request to the URL below."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"https://api.apify.com/v2/datasets/{DATASET_ID}/items?format=json&fields=hotel%2Ccafe\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Instead of commas, you will need to use the ",(0,l.kt)("inlineCode",{parentName:"p"},"%2C")," code, which represents ",(0,l.kt)("inlineCode",{parentName:"p"},",")," in URL encoding.",(0,l.kt)("br",null),"\nLearn more about URL encoding ",(0,l.kt)("a",{parentName:"p",href:"https://www.url-encode-decode.com",target:"_blank",rel:"noopener"},"here"),".")),(0,l.kt)("p",null,"To ",(0,l.kt)("strong",{parentName:"p"},"add data to a dataset"),", send a POST request, with a JSON object containing the data you want to add as the payload to the ",(0,l.kt)("a",{parentName:"p",href:"/api/v2#/reference/datasets/item-collection/put-items",target:null,rel:null},"Put items")," endpoint."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"https://api.apify.com/v2/datasets/{DATASET_ID}/items\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Pushing data to dataset via API is limited to ",(0,l.kt)("strong",{parentName:"p"},"200")," requests per second to prevent our servers from being overloaded.")),(0,l.kt)("p",null,"Example payload:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "foo": "bar"\n    },\n    {\n        "foo": "hotel"\n    },\n    {\n        "foo": "cafe"\n    }\n]\n')),(0,l.kt)("p",null,"See the ",(0,l.kt)("a",{parentName:"p",href:"/api/v2#/reference/datasets",target:null,rel:null},"API documentation")," for a detailed breakdown of each API endpoint."),(0,l.kt)("h2",{id:"hidden-fields"},"Hidden fields"),(0,l.kt)("p",null,"Top-level fields starting with the ",(0,l.kt)("inlineCode",{parentName:"p"},"#")," character are considered hidden.\nThese fields may be easily omitted when downloading the data from a dataset by providing the ",(0,l.kt)("strong",{parentName:"p"},"skipHidden=1")," or ",(0,l.kt)("strong",{parentName:"p"},"clean=1")," query parameters. This provides a convenient way to store debug information that should not appear in the final dataset."),(0,l.kt)("p",null,"Below is an example of a dataset record containing hidden fields with an HTTP response and error."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "url": "https://example.com",\n    "title": "Example page",\n    "data": {\n        "foo": "bar"\n    },\n    "#error": null,\n    "#response": {\n        "statusCode": 201\n    }\n}\n')),(0,l.kt)("p",null,'Data without hidden fields are called "clean" and can be downloaded from ',(0,l.kt)("a",{parentName:"p",href:"https://console.apify.com/storage?tab=datasets",target:"_blank",rel:"noopener"},"Apify Console"),' using the "Clean items" link or via API using the ',(0,l.kt)("strong",{parentName:"p"},"clean=true")," or ",(0,l.kt)("strong",{parentName:"p"},"clean=1")," ",(0,l.kt)("a",{parentName:"p",href:"/api/v2#/reference/datasets/item-collection/get-items",target:null,rel:null},"URL parameters"),"."),(0,l.kt)("h2",{id:"xml-format-extension"},"XML format extension"),(0,l.kt)("p",null,"When you export results to XML or RSS formats, object property names become XML tags, while the corresponding values become the tags' children."),(0,l.kt)("p",null,"For example, the JavaScript object:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    name: "Rashida Jones",\n    address: [\n        {\n            type: "home",\n            street: "21st",\n            city: "Chicago",\n        },\n        {\n            type: "office",\n            street: null,\n            city: null,\n        }\n    ]\n}\n')),(0,l.kt)("p",null,"becomes the following XML snippet:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<name>Rashida Jones</name>\n<address>\n    <type>home</type>\n    <street>21st</street>\n    <city>Chicago</city>\n</address>\n<address>\n    <type>office</type>\n    <street/>\n    <city/>\n</address>\n")),(0,l.kt)("p",null,"If the JavaScript object contains a property named ",(0,l.kt)("inlineCode",{parentName:"p"},"@"),", its sub-properties are exported as attributes of the parent XML element. If the parent XML element does not have any child elements, its value is taken from a JavaScript object property named ",(0,l.kt)("inlineCode",{parentName:"p"},"#"),"."),(0,l.kt)("p",null,"For example, the following JavaScript object:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "address": [{\n        "@": {\n            "type": "home",\n        },\n        "street": "21st",\n        "city": "Chicago",\n    },\n    {\n        "@": {\n            "type": "office",\n        },\n        "#": "unknown",\n    }]\n}\n')),(0,l.kt)("p",null,"will be transformed to the following XML snippet:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},'<address type="home">\n    <street>21st</street>\n    <city>Chicago</city>\n</address>\n<address type="office">unknown</address>\n')),(0,l.kt)("p",null,"This feature is also useful when customizing your RSS feeds generated for various websites."),(0,l.kt)("p",null,"By default, the whole result is wrapped in an ",(0,l.kt)("inlineCode",{parentName:"p"},"<items/>")," element, while each page object is contained in an ",(0,l.kt)("inlineCode",{parentName:"p"},"<item/>")," element. You can change this using the ",(0,l.kt)("inlineCode",{parentName:"p"},"xmlRoot")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"xmlRow")," URL parameters when GETting your data."),(0,l.kt)("h2",{id:"sharing"},"Sharing"),(0,l.kt)("p",null,"You can invite other Apify users to view or modify your datasets using the ",(0,l.kt)("a",{parentName:"p",href:"/platform/access-rights",target:null,rel:null},"access rights")," system. See the ",(0,l.kt)("a",{parentName:"p",href:"/platform/access-rights/list-of-permissions",target:null,rel:null},"full list of permissions"),"."),(0,l.kt)("h3",{id:"sharing-datasets-between-runs"},"Sharing datasets between runs"),(0,l.kt)("p",null,"You can access a dataset from any ",(0,l.kt)("a",{parentName:"p",href:"/platform/actors",target:null,rel:null},"actor")," or ",(0,l.kt)("a",{parentName:"p",href:"/platform/actors/tasks",target:null,rel:null},"task")," run as long as you know its ",(0,l.kt)("strong",{parentName:"p"},"name")," or ",(0,l.kt)("strong",{parentName:"p"},"ID"),"."),(0,l.kt)("p",null,"To access a dataset from another run using the Apify SDK, open it using the ",(0,l.kt)("a",{parentName:"p",href:"https://docs-v2.apify.com/sdk-js/api/apify/class/Actor#openDataset",target:"_blank",rel:"noopener"},(0,l.kt)("inlineCode",{parentName:"a"},"Actor.openDataset(datasetIdOrName)"))," method like you would do with any other dataset."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const otherDataset = await Actor.openDataset('old-dataset');\n")),(0,l.kt)("p",null,"In the ",(0,l.kt)("a",{parentName:"p",href:"/apify-client-js",target:null,rel:null},"JavaScript API client"),", you can access a dataset using ",(0,l.kt)("a",{parentName:"p",href:"/apify-client-js#datasetclient",target:null,rel:null},"its client"),". Once you've opened the dataset, read its contents and add new data like you would do with a dataset from your current run."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const otherDatasetClient = apifyClient.dataset('jane-doe/old-dataset');\n")),(0,l.kt)("p",null,"Likewise, in the ",(0,l.kt)("a",{parentName:"p",href:"/apify-client-python",target:null,rel:null},"Python API client"),", you can access a dataset using ",(0,l.kt)("a",{parentName:"p",href:"/apify-client-python#datasetclient",target:null,rel:null},"its client"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"other_dataset_client = apify_client.dataset('jane-doe/old-dataset')\n")),(0,l.kt)("p",null,"The same applies for the ",(0,l.kt)("a",{parentName:"p",href:"#apify-api",target:null,rel:null},"Apify API")," - you can use ",(0,l.kt)("a",{parentName:"p",href:"#apify-api",target:null,rel:null},"the same endpoints")," as you would normally do."),(0,l.kt)("p",null,"See the ",(0,l.kt)("a",{parentName:"p",href:"/platform/storage#sharing-storages-between-runs",target:null,rel:null},"Storage overview")," for details on sharing storages between runs."),(0,l.kt)("h2",{id:"limits"},"Limits"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Tabulated data storage formats (the ones that display the data in columns), such as HTML, CSV, and EXCEL, have a maximum limit of ",(0,l.kt)("strong",{parentName:"p"},"3000")," columns. All data that do not fit into this limit will not be retrieved.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"When using the ",(0,l.kt)("inlineCode",{parentName:"p"},"pushData()")," method, the size of the data is limited by the receiving API. Therefore, ",(0,l.kt)("inlineCode",{parentName:"p"},"pushData()")," will only allow objects whose JSON representation is smaller than ",(0,l.kt)("strong",{parentName:"p"},"9MB"),". When an array is passed, none of the included objects may be larger than 9MB, however the array itself may be of any size.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Dataset names can be up to 63 characters long."))),(0,l.kt)("h3",{id:"rate-limiting"},"Rate limiting"),(0,l.kt)("p",null,"When pushing data to a dataset via ",(0,l.kt)("a",{parentName:"p",href:"/api/v2#/reference/datasets/item-collection/put-items",target:null,rel:null},"API"),", the request rate is limited to ",(0,l.kt)("strong",{parentName:"p"},"200")," per second per dataset. This helps protect Apify servers from being overloaded."),(0,l.kt)("p",null,"All other dataset API ",(0,l.kt)("a",{parentName:"p",href:"/api/v2#/reference/datasets",target:null,rel:null},"endpoints")," are limited to ",(0,l.kt)("strong",{parentName:"p"},"30")," requests per second per dataset."),(0,l.kt)("p",null,"See the ",(0,l.kt)("a",{parentName:"p",href:"/api/v2#/introduction/rate-limiting",target:null,rel:null},"API documentation")," for details and to learn what to do if you exceed the rate limit."))}m.isMDXComponent=!0},81437:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/datasets-app-05558fd1f2bf066a2667219908ede0f4.png"},74133:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/datasets-detail-be01fcddc541e34333cbc08d937717c6.png"}}]);