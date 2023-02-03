"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[4966],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(a),g=o,f=u["".concat(l,".").concat(g)]||u[g]||d[g]||r;return a?n.createElement(f,s(s({ref:t},p),{},{components:a})):n.createElement(f,s({ref:t},p))}));function g(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,s=new Array(r);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<r;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},62220:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var n=a(87462),o=a(63366),r=(a(67294),a(3905)),s=["components"],i={title:"Processing data",description:"Learn how to process the data you scraped using the Crawlee library and how to convert JSON files to Excel using the Apify API.",sidebar_position:9,slug:"/web-scraping-for-beginners/crawling/processing-data"},l="Processing data",c={unversionedId:"webscraping/web_scraping_for_beginners/crawling/processing_data",id:"webscraping/web_scraping_for_beginners/crawling/processing_data",title:"Processing data",description:"Learn how to process the data you scraped using the Crawlee library and how to convert JSON files to Excel using the Apify API.",source:"@site/sources/academy/webscraping/web_scraping_for_beginners/crawling/processing_data.md",sourceDirName:"webscraping/web_scraping_for_beginners/crawling",slug:"/web-scraping-for-beginners/crawling/processing-data",permalink:"/academy/web-scraping-for-beginners/crawling/processing-data",draft:!1,editUrl:"https://github.com/apify/apify-docs-v2/edit/master/sources/academy/webscraping/web_scraping_for_beginners/crawling/processing_data.md",tags:[],version:"current",lastUpdatedBy:"Jind\u0159ich B\xe4r",lastUpdatedAt:1675435463,formattedLastUpdatedAt:"Feb 3, 2023",sidebarPosition:9,frontMatter:{title:"Processing data",description:"Learn how to process the data you scraped using the Crawlee library and how to convert JSON files to Excel using the Apify API.",sidebar_position:9,slug:"/web-scraping-for-beginners/crawling/processing-data"},sidebar:"academy",previous:{title:"Headless browsers",permalink:"/academy/web-scraping-for-beginners/crawling/headless-browser"},next:{title:"Challenge",permalink:"/academy/web-scraping-for-beginners/challenge"}},p={},d=[{value:"Loading dataset data",id:"loading-data",level:2},{value:"Filtering data",id:"filtering-data",level:2},{value:"Converting the dataset to Excel",id:"converting-to-excel",level:2},{value:"Getting an Apify token",id:"get-apify-token",level:3},{value:"Uploading your dataset to Apify",id:"upload-dataset",level:3},{value:"Download and save the Excel file",id:"download-to-excel",level:3},{value:"Next up",id:"next",level:2}],u={toc:d};function g(e){var t=e.components,i=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"processing-data"},"Processing data"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Learn how to process the data you scraped using the Crawlee library and how to convert JSON files to Excel using the Apify API.")),(0,r.kt)("hr",null),(0,r.kt)("p",null,"From the previous lessons, we know two things:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"We can use ",(0,r.kt)("inlineCode",{parentName:"li"},"Dataset.pushData()")," to save data to the default dataset."),(0,r.kt)("li",{parentName:"ol"},"The default dataset files are saved in the ",(0,r.kt)("strong",{parentName:"li"},"storage/datasets/default")," folder.")),(0,r.kt)("p",null,"But when we look inside the folder, we see that there's A LOT of files, and we don't want to work with those manually. Fortunately, we can use the dataset itself to process the data."),(0,r.kt)("h2",{id:"loading-data"},"Loading dataset data"),(0,r.kt)("p",null,"To access the default dataset, we can use the  ",(0,r.kt)("a",{parentName:"p",href:"https://crawlee.dev/api/types/interface/Dataset",target:"_blank",rel:"noopener"},(0,r.kt)("inlineCode",{parentName:"a"},"Dataset"))," class exported from ",(0,r.kt)("inlineCode",{parentName:"p"},"crawlee"),". We can then easily work with all the items in the dataset. Let's put the processing into a separate file in our project called ",(0,r.kt)("strong",{parentName:"p"},"dataset.js"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// dataset.js\nimport { Dataset, Configuration } from 'crawlee';\n\n// Crawlee automatically deletes data from its previous runs.\n// We can turn this off by setting 'purgeOnStart' to false.\n// If we did not do this, we would have no data to process.\n// This is a temporary workaround, and we'll add a better interface soon.\nConfiguration.getGlobalConfig().set('purgeOnStart', false);\n\nconst dataset = await Dataset.open();\n\nconst { items } = await dataset.getData();\nconsole.log(items.length);\n")),(0,r.kt)("p",null,"When we ran this code, having the results from our previous lessons in the ",(0,r.kt)("strong",{parentName:"p"},"storage")," folder, it printed ",(0,r.kt)("strong",{parentName:"p"},"32")," for us. Your number may differ."),(0,r.kt)("h2",{id:"filtering-data"},"Filtering data"),(0,r.kt)("p",null,"Let's say we wanted to print the title for each product that is more expensive than $50. We'll also keep track of the products by price, and find out the most expensive one. There are no specific functions to do that, so we'll use plain JavaScript."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// dataset.js\nimport { Dataset, Configuration } from 'crawlee';\n\nConfiguration.getGlobalConfig().set('purgeOnStart', false);\n\nconst { items } = await Dataset.getData();\n\nlet mostExpensive;\n\nconsole.log('All items over $50 USD:');\nfor (const { title, price } of items) {\n    // Use a regular expression to filter out the\n    // non-number and non-decimal characters\n    const numPrice = Number(price.replace(/[^0-9.]/g, ''));\n    if (numPrice > 50) console.table({ title, price });\n    if (numPrice > mostExpensive.price) mostExpensive = { title, price };\n}\n\nconsole.log('Most expensive product:');\nconsole.table(mostExpensive);\n")),(0,r.kt)("p",null,"In our case, the most expensive product was the Macbook Pro. Surprising? Heh, not really \ud83d\ude05"),(0,r.kt)("h2",{id:"converting-to-excel"},"Converting the dataset to Excel"),(0,r.kt)("p",null,"We promised that you won't need an Apify account for anything in this course, and it's true. You can use the skills learned in the ",(0,r.kt)("a",{parentName:"p",href:"/academy/web-scraping-for-beginners/data-collection/save-to-csv",target:null,rel:null},"Save to CSV lesson")," to save the dataset to a CSV. Just use the loading code from above, plug it in there and then open the CSV in Excel. However, we really want to show you this neat trick. It won't cost you anything, and it's a cool and fast way to convert datasets to any format."),(0,r.kt)("h3",{id:"get-apify-token"},"Getting an Apify token"),(0,r.kt)("p",null,"First, you need a free Apify account. To get one, head to the ",(0,r.kt)("a",{parentName:"p",href:"https://console.apify.com/sign-up?asrc=developers_portal",target:"_blank",rel:"noopener"},"sign-up form")," and complete the process. Once you have created the account and verified your email, go to the ",(0,r.kt)("a",{parentName:"p",href:"https://console.apify.com/account#/integrations",target:"_blank",rel:"noopener"},"integration settings"),", where you can copy your personal API token. This will give you access to the Apify API."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"copy personal API token in Apify console",src:a(63367).Z,width:"976",height:"796"})),(0,r.kt)("h3",{id:"upload-dataset"},"Uploading your dataset to Apify"),(0,r.kt)("p",null,"Now that you have a token, you can upload your local dataset to the Apify platform. It's super easy with the ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/apify-client",target:"_blank",rel:"noopener"},(0,r.kt)("inlineCode",{parentName:"a"},"apify-client"))," NPM package. Let's reuse some of our earlier code and add more."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// dataset.js\nimport { Dataset, Configuration } from 'crawlee';\nimport { ApifyClient } from 'apify-client';\n\nConfiguration.getGlobalConfig().set('purgeOnStart', false);\n\nconst { items } = await Dataset.getData();\n\n// We will use the Apify API client to access the Apify API.\nconst apifyClient = new ApifyClient({\n    token: 'YOUR_API_TOKEN', // Paste your API token here.\n});\n\nconsole.log('Creating a new dataset on the Apify platform');\nconst remoteDataset = await apifyClient.datasets().getOrCreate();\nconst datasetClient = apifyClient.dataset(remoteDataset.id);\n\nconsole.log('Uploading dataset items to the newly created dataset');\nawait datasetClient.pushItems(items);\n")),(0,r.kt)("h3",{id:"download-to-excel"},"Download and save the Excel file"),(0,r.kt)("p",null,"When we have the dataset uploaded on the Apify platform, we can easily download it in any format including JSON, CSV, Excel and others."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"console.log('Downloading an Excel file and saving it to disk');\nconst xlsx = await datasetClient.downloadItems('xlsx');\nwriteFileSync('dataset.xlsx', xlsx);\n")),(0,r.kt)("p",null,"The full code, to do this in one go, looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// dataset.js\nimport { Dataset, Configuration } from 'crawlee';\nimport { ApifyClient } from 'apify-client';\nimport { writeFileSync } from 'fs';\n\nConfiguration.getGlobalConfig().set('purgeOnStart', false);\n\nconst { items } = await Dataset.getData();\n\nconst apifyClient = new ApifyClient({\n    token: 'YOUR_API_TOKEN', // Paste your API token here.\n});\n\nconsole.log('Creating a new dataset on the Apify platform');\nconst remoteDataset = await apifyClient.datasets().getOrCreate();\nconst datasetClient = apifyClient.dataset(remoteDataset.id);\n\nconsole.log('Uploading dataset items to the newly created dataset');\nawait datasetClient.pushItems(items);\n\nconsole.log('Downloading an Excel file and saving it to disk');\nconst xlsx = await datasetClient.downloadItems('xlsx');\nwriteFileSync('dataset.xlsx', xlsx);\n")),(0,r.kt)("p",null,"It doesn't even have to be a dataset created by Crawlee. You can use this method to convert any JSON array to a CSV, XLSX, and so on."),(0,r.kt)("h2",{id:"next"},"Next up"),(0,r.kt)("p",null,"And this is it for the ",(0,r.kt)("a",{parentName:"p",href:"/academy/web-scraping-for-beginners/crawling",target:null,rel:null},(0,r.kt)("strong",{parentName:"a"},"Basics of crawling"))," section of the ",(0,r.kt)("a",{parentName:"p",href:"/academy/web-scraping-for-beginners",target:null,rel:null},(0,r.kt)("strong",{parentName:"a"},"Web scraping for beginners"))," course. But that's not all! If you're feeling up for it, test your knowledge of the methods and concepts you learned in this course by moving forward with the ",(0,r.kt)("a",{parentName:"p",href:"/academy/web-scraping-for-beginners/challenge",target:null,rel:null},(0,r.kt)("strong",{parentName:"a"},"challenge")),"!"))}g.isMDXComponent=!0},63367:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/api-token-80baf708e821ea07001c4d057cdfc22e.png"}}]);