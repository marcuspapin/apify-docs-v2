"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[1893],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return a?n.createElement(g,s(s({ref:t},c),{},{components:a})):n.createElement(g,s({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},67696:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),s=["components"],i={title:"III - Using storage & creating tasks",description:"Follow along with step-by-step instructions on how to complete the task outlined in the previous lesson. Use different storage types, and create a task.",sidebar_position:3,slug:"/expert-scraping-with-apify/solutions/using-storage-creating-tasks"},l="Using storage & creating tasks",p={unversionedId:"platform/expert_scraping_with_apify/solutions/using_storage_creating_tasks",id:"platform/expert_scraping_with_apify/solutions/using_storage_creating_tasks",title:"III - Using storage & creating tasks",description:"Follow along with step-by-step instructions on how to complete the task outlined in the previous lesson. Use different storage types, and create a task.",source:"@site/sources/academy/platform/expert_scraping_with_apify/solutions/using_storage_creating_tasks.md",sourceDirName:"platform/expert_scraping_with_apify/solutions",slug:"/expert-scraping-with-apify/solutions/using-storage-creating-tasks",permalink:"/academy/expert-scraping-with-apify/solutions/using-storage-creating-tasks",draft:!1,editUrl:"https://github.com/apify/apify-docs-v2/edit/master/sources/academy/platform/expert_scraping_with_apify/solutions/using_storage_creating_tasks.md",tags:[],version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1676050498,formattedLastUpdatedAt:"Feb 10, 2023",sidebarPosition:3,frontMatter:{title:"III - Using storage & creating tasks",description:"Follow along with step-by-step instructions on how to complete the task outlined in the previous lesson. Use different storage types, and create a task.",sidebar_position:3,slug:"/expert-scraping-with-apify/solutions/using-storage-creating-tasks"},sidebar:"academy",previous:{title:"II - Managing source",permalink:"/academy/expert-scraping-with-apify/solutions/managing-source"},next:{title:"IV - Using the Apify API & JavaScript client",permalink:"/academy/expert-scraping-with-apify/solutions/using-api-and-client"}},c={},u=[{value:"Using a named dataset",id:"using-named-dataset",level:2},{value:"Using a key-value store",id:"using-key-value-store",level:2},{value:"Code check-in",id:"code-check-in",level:2},{value:"Creating a task (It&#39;s easy!)",id:"creating-task",level:2},{value:"Quiz answers \ud83d\udcdd",id:"quiz-answers",level:2},{value:"Wrap up",id:"wrap-up",level:2}],d={toc:u};function m(e){var t=e.components,i=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"using-storage-creating-tasks"},"Using storage & creating tasks"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Follow along with step-by-step instructions on how to complete the task outlined in the previous lesson. Use different storage types, and create a task.")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Last lesson, our task was outlined for us. In this lesson, we'll be completing that task by making our Amazon actor push to a ",(0,o.kt)("strong",{parentName:"p"},"named dataset")," and use the ",(0,o.kt)("strong",{parentName:"p"},"default key-value store")," to store the cheapest item found by the scraper. Finally, we'll create a task for the actor back on the Apify platform."),(0,o.kt)("h2",{id:"using-named-dataset"},"Using a named dataset"),(0,o.kt)("p",null,"Something important to understand is that, in the Apify SDK, when you use ",(0,o.kt)("inlineCode",{parentName:"p"},"Actor.pushData()"),", the data will always be pushed to the default dataset. To open up a named dataset, we'll use the ",(0,o.kt)("inlineCode",{parentName:"p"},"Actor.openDataset()")," function:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// main.js\n// ...\n\nawait Actor.init()\n\nconst { keyword } = await Actor.getInput();\n\n// Open a dataset with a custom named based on the\n// keyword which was inputted by the user\nconst dataset = await Actor.openDataset(`amazon-offers-${keyword.replace(' ', '-')}`);\n// ...\n")),(0,o.kt)("p",null,"If we remember correctly, we are pushing data to the dataset in the ",(0,o.kt)("inlineCode",{parentName:"p"},"labels.OFFERS")," handler we created in ",(0,o.kt)("strong",{parentName:"p"},"routes.js"),". Let's export the ",(0,o.kt)("inlineCode",{parentName:"p"},"dataset")," variable pointing to our named dataset so we can import it in ",(0,o.kt)("strong",{parentName:"p"},"routes.js")," and use it in the handler:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"export const dataset = await Actor.openDataset(`amazon-offers-${keyword.replace(' ', '-')}`);\n")),(0,o.kt)("p",null,"Finally, let's modify the function to use the new ",(0,o.kt)("inlineCode",{parentName:"p"},"dataset")," variable rather than the ",(0,o.kt)("inlineCode",{parentName:"p"},"Actor")," class:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Import the dataset pointer\nimport { dataset } from './main.js';\n\n// ...\n\nrouter.addHandler(labels.OFFERS, async ({ $, request }) => {\n    const { data } = request.userData;\n\n    for (const offer of $('#aod-offer')) {\n        const element = $(offer);\n\n        // Replace \"Actor\" with \"dataset\"\n        await dataset.pushData({\n            ...data,\n            sellerName: element.find('div[id*=\"soldBy\"] a[aria-label]').text().trim(),\n            offer: element.find('.a-price .a-offscreen').text().trim(),\n        });\n    }\n});\n")),(0,o.kt)("p",null,"That's it! Now, our actor will push its data to a dataset named ",(0,o.kt)("strong",{parentName:"p"},"amazon-offers-KEYWORD"),"!"),(0,o.kt)("h2",{id:"using-key-value-store"},"Using a key-value store"),(0,o.kt)("p",null,"We now want to store the cheapest item in the default key-value store under a key named ",(0,o.kt)("strong",{parentName:"p"},"CHEAPEST-ITEM"),". The most efficient and practical way of doing this is by filtering through all of the new named dataset's items and pushing the cheapest one to the store."),(0,o.kt)("p",null,"Let's add the following code to the bottom of the actor, after ",(0,o.kt)("strong",{parentName:"p"},"Crawl finished.")," is logged to the console:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'// ...\n\nconst cheapest = items.reduce((prev, curr) => {\n    // If there is no previous offer price, or the previous is more\n    // expensive, set the cheapest to our current item\n    if (!prev?.offer || +prev.offer.slice(1) > +curr.offer.slice(1)) return curr;\n    // Otherwise, keep our previous item\n    return prev;\n});\n\n// Set the "CHEAPEST-ITEM" key in the key-value store to be the\n// newly discovered cheapest item\nawait Actor.setValue(CHEAPEST_ITEM, cheapest);\n\nawait Actor.exit();\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If you start receiving a linting error after adding the following code to your  ",(0,o.kt)("strong",{parentName:"p"},"main.js")," file, add ",(0,o.kt)("inlineCode",{parentName:"p"},'"parserOptions": { "ecmaVersion": "latest" }')," to the ",(0,o.kt)("strong",{parentName:"p"},".eslintrc")," file in the root directory of your project.")),(0,o.kt)("p",null,"You might have noticed that we are using a variable instead of a string for the key name in the key-value store. This is because we're using an exported variable from ",(0,o.kt)("strong",{parentName:"p"},"constants.js")," (which is best practice, as discussed in the ",(0,o.kt)("a",{parentName:"p",href:"/academy/web-scraping-for-beginners/challenge/modularity",target:null,rel:null},(0,o.kt)("strong",{parentName:"a"},"modularity")),") lesson back in the ",(0,o.kt)("strong",{parentName:"p"},"Web scraping for beginners")," course. Here is what our ",(0,o.kt)("strong",{parentName:"p"},"constants.js")," file looks like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// constants.js\nexport const BASE_URL = 'https://www.amazon.com';\n\nexport const OFFERS_URL = (asin) => `${BASE_URL}/gp/aod/ajax/ref=auto_load_aod?asin=${asin}&pc=dp`;\n\nexport const labels = {\n    START: 'START',\n    PRODUCT: 'PRODUCT',\n    OFFERS: 'OFFERS',\n};\n\nexport const CHEAPEST_ITEM = 'CHEAPEST-ITEM';\n")),(0,o.kt)("h2",{id:"code-check-in"},"Code check-in"),(0,o.kt)("p",null,"Just to ensure we're all on the same page, here is what the ",(0,o.kt)("strong",{parentName:"p"},"main.js")," file looks like now:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// main.js\nimport { Actor } from 'apify';\nimport { CheerioCrawler, log } from '@crawlee/cheerio';\n\nimport { router } from './routes.js';\nimport { BASE_URL, CHEAPEST_ITEM } from './constants';\n\nawait Actor.init();\n\nconst { keyword } = await Actor.getInput();\n\nexport const dataset = await Actor.openDataset(`amazon-offers-${keyword.replace(' ', '-')}`);\n\nconst proxyConfiguration = await Actor.createProxyConfiguration({\n    groups: ['RESIDENTIAL'],\n});\n\nconst crawler = new Actor.CheerioCrawler({\n    proxyConfiguration,\n    useSessionPool: true,\n    maxConcurrency: 50,\n    requestHandler: router,\n});\n\nawait crawler.addRequests([\n    {\n        url: `${BASE_URL}/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=${keyword}`,\n        label: 'START',\n        userData: {\n            keyword,\n        },\n    },\n])\n\nlog.info('Starting the crawl.');\nawait crawler.run();\nlog.info('Crawl finished.');\n\nconst { items } = await dataset.getData();\n\nconst cheapest = items.reduce((prev, curr) => {\n    if (!prev?.offer) return curr;\n    if (+prev.offer.slice(1) > +curr.offer.slice(1)) return curr;\n    return prev;\n});\n\nawait Actor.setValue(CHEAPEST_ITEM, cheapest);\n\nawait Actor.exit();\n")),(0,o.kt)("p",null,"And here is ",(0,o.kt)("strong",{parentName:"p"},"routes.js"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// routes.js\nimport { dataset } from './main.js';\nimport { BASE_URL, OFFERS_URL, labels } from './constants';\nimport { createCheerioRouter } from '@crawlee/cheerio';\n\nexport const router = createCheerioRouter();\n\nrouter.addHandler(labels.START, async ({ $, crawler, request }) => {\n    const { keyword } = request.userData;\n\n    const products = $('div > div[data-asin]:not([data-asin=\"\"])');\n\n    for (const product of products) {\n        const element = $(product);\n        const titleElement = $(element.find('.a-text-normal[href]'));\n\n        const url = `${BASE_URL}${titleElement.attr('href')}`;\n\n        await crawler.addRequests([{\n            url,\n            label: labels.PRODUCT,\n            userData: {\n                data: {\n                    title: titleElement.first().text().trim(),\n                    asin: element.attr('data-asin'),\n                    itemUrl: url,\n                    keyword,\n                },\n            },\n        }]);\n    }\n});\n\nrouter.addHandler(labels.PRODUCT, async ({ $, crawler, request }) => {\n    const { data } = request.userData;\n\n    const element = $('div#productDescription');\n\n    await crawler.addRequests([{\n        url: OFFERS_URL(data.asin),\n        label: labels.OFFERS,\n        userData: {\n            data: {\n                ...data,\n                description: element.text().trim(),\n            },\n        },\n    }]);\n});\n\nrouter.addHandler(labels.OFFERS, async ({ $, request }) => {\n    const { data } = request.userData;\n\n    for (const offer of $('#aod-offer')) {\n        const element = $(offer);\n\n        await dataset.pushData({\n            ...data,\n            sellerName: element.find('div[id*=\"soldBy\"] a[aria-label]').text().trim(),\n            offer: element.find('.a-price .a-offscreen').text().trim(),\n        });\n    }\n});\n")),(0,o.kt)("p",null,"Don't forget to push your changes to Github using ",(0,o.kt)("inlineCode",{parentName:"p"},"git push origin MAIN_BRANCH_NAME")," to see them on the Apify platform!"),(0,o.kt)("h2",{id:"creating-task"},"Creating a task (It's easy!)"),(0,o.kt)("p",null,"Back on the platform, on your actor's page, you can see a button in the top right hand corner that says ",(0,o.kt)("strong",{parentName:"p"},"Create new task"),":"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Create new task button",src:a(30265).Z,width:"796",height:"140"})),(0,o.kt)("p",null,"Then, configure the task to use ",(0,o.kt)("strong",{parentName:"p"},"google pixel")," as a keyword and click ",(0,o.kt)("strong",{parentName:"p"},"Save"),"."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"You can also add a custom name and description for the task in the ",(0,o.kt)("strong",{parentName:"p"},"Settings")," tab!")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Creating a task",src:a(92598).Z,width:"1396",height:"376"})),(0,o.kt)("p",null,"After saving it, you'll be able to see the newly created task in the ",(0,o.kt)("strong",{parentName:"p"},"Tasks")," tab on the Apify Console. Go ahead and run it. Did it work?"),(0,o.kt)("h2",{id:"quiz-answers"},"Quiz answers \ud83d\udcdd"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Q: What is the relationship between actors and tasks?")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"A:")," Tasks are pre-configured runs of actors. The configurations of an actor can be saved as a task so that it doesn't have to be manually configured every single time."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Q: What are the differences between default (unnamed) and named storage? Which one would you use for everyday usage?")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"A:")," Unnamed storage is persisted for only 7 days, while named storage is persisted indefinitely. For everyday usage, it is best to use default unnamed storages unless the data should explicitly be persisted for more than 7 days."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"With named storages, it's easier to verify that you're using the correct store, as they can be referred to by name rather than by an ID.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Q: What is data retention, and how does it work for all types of storages (default and named)?")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"A:")," Default/unnamed storages expire after 7 days unless otherwise specified. Named storages are retained indefinitely."),(0,o.kt)("h2",{id:"wrap-up"},"Wrap up"),(0,o.kt)("p",null,"You've learned how to use the different storage options available on with Apify, the two different types of storages, as well as how to create tasks for actors."))}m.isMDXComponent=!0},30265:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/webp;base64,UklGRnoOAABXRUJQVlA4IG4OAACwXgCdASocA4wAPqlQok0mJKMip5Jo4MAVCWVu4WhA5uwvN4X14I2UZ+75pptO6+bv7z249/viV9EZ5WW/q41JvlP2n/af2D27fyff38WNQX8m/mP+T3tEAH5//Xv+J4iurF3x9gD+aeFx4b9AD9T+hV9Welf6h/9n+W+Bj9gB4us7U991ivloiaM6CVXfZy0RNGdBKrvs5aImjOf86pJeVl8Vp0jRmZmZmZmZmZlxnRcZ8n/fLvm2cEgf7vWL3rKL2J6WBHUuUO6x6BkTdi/0QCMg5ikED/FrlhEq34ycYf5vFqxFNQedMy4zpz3wBIvrYzJq0Vl7S8M8zer4L1vJWg0EVH//2WIA5ILzdhJ8N4KnAM+Dz8MuOxPxYO7CS0ywcZo5tWYVaksIX2p0rw/eG6LUv8ynHysjHMKd8UCbbBNTxOUZu8hRjhFkzsQlUg042SdM8PpFymn4RqLQ3LnvxsvviLwxuzTKsoUdc79DKcU0+GDEX/PFEf4cE8MbdkPLDRJMzLF3VAuFCCtS8VTnJAehbeXb2cpuNQFdw00mtvk8rfHI6EFf0+L5JKVHMq0lJbEE/V/MfCVOn3K3BsoNBBYp8lb9CFSoT3g2BbDl5Qzol6AFOzG/pqVwGyYJPJ9+NYzBzVpi0oG/vkLwxrMCd92R5P/YGUGcK0cY5ojGh5crh8oKTyZaWAQAXG6JtWgamaNrPLkSmrZ0xRDVTjji7RFlxc7bO4EjDehKjjV8ON9ciJ9PH1HnEETBrZWwvJmg82i1YFicDP1ZfRRT5oR+exGZvV8KtAPyKciNTkgsRmbeSvtVA0ZeAXGhF6cvA1d2ZrzAfihjJ+nOgxe9ZRexaUHH/2sas8b46qdvaNiLXEVmDVubFpQcf/crxjx25uJFrGJ3OLklkJ8DiJ3OQarlcQf7+w7GX/8piwwxGdBKrvs5aImjOglV3u7NjxhboCvoxS38MyLekr5QOSRp3d3yexGZvV8KtFZe0vDPM3q+D06RozMzMzMzMzMzMtgAAP79HEJ72u3MQaeyk6LVvEchT0anbxEVWRuE7dxv6//JUywFDWUVzMee2Ec+iECLAP0vaQ6tX2j70w9KfU1QNwKH4x2vbwPfwwOc5dk7jI8Tr9zgBAYV2SRzJX1q0bWcbxXA5wPnc4G1I2ogAUudHcyYo+6KpbdsUfdFUtu2KPuiqW3bFH3RVLbtij7oqlt2xR91U05t1c7uGbZGa2xRMkS0YBxPLG3FHWbozZNwXdv3vic/7/kHfH+ZRVKKtJWATN//NEEVzGRAAABx2g3NClY+hKYBdEXJHoPLL8B9snvAUwZrj+J5H7iSaj/FtGqFop/f1qrEgSwrJ+n7aNnoo4WK85bHe2jZ530aK1S+98XNgYOD05tr0oGSC9KBk0KVxRhkJcnQXdWONFkJJGS7S4rakTgW2MLwXC20uXNEF6oy0j42rwkePWAMr+uC2jmpqByPj5GK35haQIL1RlqpDFEwsS8AC8Saccd2zf3t7otEmAAAAD6DjB0V99QOYw0JYTPrOJnFZ4u6RM2qTAA1UwZ2keQeRgSszpQVGeMELTgYYXSv3UA6EwVm1a4SX6q/rYev1HOwz4Z034mRg55LHlc7dkNwhGt36tsKwNBY1AVQqgHYHWC2bstDJOw/5qWeb8uBNTdTnELITc7G+kKOrXurZdj+LHJXdVW4PQQT4sGKefsMTjffVf08unFHF/V0Bgcz5igjQK4/0+WTr1LhVUMEhcFDow+XU5dCXGkjttmBv+j1YL7+55SQ8ri2U3QweTIK3w+1FTsxld0w4lOX7w1rOlFlIlxwtjfm0kgHUVMK2ke7jSY29q090qN3h1oggPAzMilt7pv1RQdtV8lRdmMry3Di99/35B4fNM0tmVVHjVY8nfc47snTJ09gc0Mhwqj/w/rWLM7ninuCAfljHFCKpRODOl8CkEB4OOq9cBPz7BbjiooY2PVojyjvP4OmI+Daj7RtTAOprxpBD4N6xTyJBOLUmFycmjhL7lgQxaHbOBvvKRKJqmHNii+W7KcY71RcEhmfnKb8/5GlghMGkBrUZCLrenSPb5OFnnb+KOYXgtqjXdF128b7XQvUXaRzId46NYplO0eR2XhOn7yNqdIxZqGgBpjcuSXaDupdY+KnQHyoJ28zANk7To1FymQkJ/qgysTZjHIrYU+JRbzT7c7lGZ4kYubNdTB3ftJBACs9AZly6dnA+u0NQSwjnD10cmQNi/4kmlOEBM/5ESmCrMraUrv2zyV9otLAoy0rAHyyfltyLrhzzm3XfaqG7PEXNnMRNP6gG+kueKbekHuNE897MOnXEQ+92Z4nAsyunP8JJyO7QnD3/G7jBFTAkwH0qDS5gWqSzq8Xlf46KswoMrBpgnVYm9i4uauhyTqGDMYbORdMUsCkxHVFxKXFq4zF/KNPOmSAyiYTxnVNTrsa4kSF+eAdsXub78/8FlRzLyqQ/8XSCrPeNCPStTxMPEKK/gZCRlxg0z5CrokNyVxkDOVKg/WE2FiaTGjsyiC66q6knzzS2edsAM8d3G6B2u3Pnrn1g+8RflBTDHuA0DWnpHfQRGpQ33tSokvIyR3BLOMnLQdPmuDiHlzD64dx1WTLc+c7Td2TLEuRSrjCSc/Yg/yFj5JCqcqo/4Arhul4m14zCBNuTKClnj+N757usXdhmq4k9flH6XzJMRZZ0qz+hGujJJDgDaUVPRf4RyeymA4EDc6Xvg5O0ikyr8jhOi97Cr10vdzvO9TS+XtlumgL9jWJjGBRp5hXWUUHOZr3AfeYruZ8eOdLR+6+31c2aqe62kqxznkQpaGAAbnjych2i6Bs9otrOlt9RhEzll5tlGVspyVAA6D3gmjzxOmTtT0CCeFQlYvIq37e2/Nlx9JdS59kWC9C2uv8r8uw1NHOQGgNpk+LeB4xl5Pty+djDH8cOXtG/c1+zk6X6Jp5eLYhK1SZP/Wt6FswWaU4vW3y5+qTlEKBaNtL84aRa+OZhWqA6ivn14mJ5pjz3e4O67q6ero7WAncEZ07nVCAeaYCNl0biarRaQvobnbJKxzpH90Fjzue8JhR4DRoNqAu0PE214/L1uJCPgUdtB2PII/iUZXVZqwpMSBrm0wQuZsQZCKH7Wcr5T1HawHE9ffB0s1bgF1+g8o9p69l2jf/BIvoarxx52EMxXIdQ5ZCCjhzjqHhVPGmu4whMAn9/JKzw5rClOoe0WO8CKBlbNnXTXphIvWsSo3aWNKv8Z3F+uJQHMIUbzWnr9pFgvkTSUHOAWnTpVjhJmICFotLbc95fc1CAwqwxJPi9+rlxeeXWTmHNHnVoVC26RoQIYJIWabd/ESJgtEcFWMw5aMF3GUhL/qWKeUR481UnGp68Z2yz2rVjNzwK9+yoSx6US2jLMHcZHTJ4AX8zJhGDlfMyUDv1mfHUCu+kq6aYGeY85fNCakaql9H0wAAyuaNEQHUKJWgBG009AHdMRmSXwE5rSnhAmsIvIFnGeunpczu5IRVroymN2YwgC+i8NeOMWsUKqXQC9ozUPVVTP6lwcID/MxL3g7RDOKbb3LoKbn/4c2cF1UH0+ZgOI15wFYMOL73NQWVLEeAGDerWCeKfaZp+BdCAhG8VvOzQZMVDqridx2o9urqTatdK4myuzr4YbKsXV/pzZQKA1/UbPB7mC84ap5MQQt5txR1Fv/QHCQVCOJu50lcUnncIwoJy4pWcho9PlyYy/khZTPPNkkM947kZaQBhnzeZOCG3QjL9DWLPoboRZM1b08cGgP/UWBb4ifdx8qZUlG7FAAKodFYXk3DQ2+wyd4icdp57Q5ko3JNKlzlM9gquvy5WKPnIqDxiwz/enF/RLgVpa2j0rJWRTmtVt5KaJ6U3ETAIVICFn3Dr0lDZ0uRGUu/dKbzqXrQrjhCC8NLn++c7hNhSM824p8MEYGKzwXkiNT2I3Ntf88Kdhs1YbllplAlTOYEsN+zPS9M4stAi4pKvTjSepUxr0/TTxXZVRbHeMEn2Xs4OPVqj4tyCYtm4nQajPtJOVHXizIOJJ9VF5hLYkP9CxoWhOMnaSzVFnu+Fyie3XNA3mu1TURhr6QHD1+1dzKQeZHh2ngk/qDEd+TFT1b1Pzt0HD+sodWEm2zFdLmo19rDqmh1kZpWwjlzDUMmzNzeaaGdR8l5ozLbwAWUAmLLMp73it6cmVYFq89DIvVY38ACK3Jpk23olHWn9KUDdaNGEy/+FAR1FkjiaTGXJ6unMWW1H6Fz58OutvZWKtaGMRVWCmnh7qeYCeMX0uwOlyIhhrVR/o8kKDRrDG883HLFYq7moBqpuEPWS/rKbgmJu2wvkmbo9loL4a/RmWwY9cw7ACXABYstss+d/i+NQes3UYi1rbdYz3O0RyaPUPf4R64gH2ecs06cU9eV6W8JkKtIKPGIepVXfXefQjftDVNNFIS2eP5Gw3qYMDFX4hMPrhNNbsna1IrhiDzsR6WYWNxiMgMpU8ZSS+HEV2v7GyERWhYTXqPbMVGWPRRB1gWDNFRF4JItYiOg9hDqPt/Buhylm99MffZ+I+prLlc4eAE0LgRKf4yIz+RV9wGzXtx9J5BvweR/Y+TBjRoGWAgSs++0rVlOvpd4q6Yqun0zb+IVZgKlXEGVkXQa34mhsxosmqUSdxCOzLzyZVdA20odQeOHUJIRVgjUwVxeKpWRZI2XlYaYgYFc91R5uBvFsK2WEpIFHNpCY61FNkkHZ2BAMFwkW1cQXlJVc9tSUaMt6+3mT8FeAVyegGUGC777MPj9/HcPzX7nNgfxVUzbdA3OrFagWqXcWb1hsMbHAe1nokjk4xWtZ8HP1ZHG5xSISxCGWdIHm9l3c9V5lYWvOTJ00cTqTGTM88Qv6/wkvz4t/yj9x/80GaRv3eIoYUgSJf0WQAAAAKZgAABiAAAAAAAA"},92598:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/creating-task-c0a9593000de94ac3062d9dbc1381dbd.png"}}]);