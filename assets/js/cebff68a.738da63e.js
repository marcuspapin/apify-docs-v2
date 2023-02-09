"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[6176],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=p(a),d=r,g=h["".concat(l,".").concat(d)]||h[d]||u[d]||o;return a?n.createElement(g,i(i({ref:t},c),{},{components:a})):n.createElement(g,i({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},53059:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>p,toc:()=>u});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),i=["components"],s={title:"I - Integrating webhooks",description:"Learn how to integrate webhooks into your actors. Webhooks are a super powerful tool, and can be used to do almost anything!",sidebar_position:1,slug:"/expert-scraping-with-apify/solutions/integrating-webhooks"},l="Integrating webhooks",p={unversionedId:"platform/expert_scraping_with_apify/solutions/integrating_webhooks",id:"platform/expert_scraping_with_apify/solutions/integrating_webhooks",title:"I - Integrating webhooks",description:"Learn how to integrate webhooks into your actors. Webhooks are a super powerful tool, and can be used to do almost anything!",source:"@site/sources/academy/platform/expert_scraping_with_apify/solutions/integrating_webhooks.md",sourceDirName:"platform/expert_scraping_with_apify/solutions",slug:"/expert-scraping-with-apify/solutions/integrating-webhooks",permalink:"/academy/expert-scraping-with-apify/solutions/integrating-webhooks",draft:!1,editUrl:"https://github.com/apify/apify-docs-v2/edit/master/sources/academy/platform/expert_scraping_with_apify/solutions/integrating_webhooks.md",tags:[],version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1675963489,formattedLastUpdatedAt:"Feb 9, 2023",sidebarPosition:1,frontMatter:{title:"I - Integrating webhooks",description:"Learn how to integrate webhooks into your actors. Webhooks are a super powerful tool, and can be used to do almost anything!",sidebar_position:1,slug:"/expert-scraping-with-apify/solutions/integrating-webhooks"},sidebar:"academy",previous:{title:"Solutions",permalink:"/academy/expert-scraping-with-apify/solutions"},next:{title:"II - Managing source",permalink:"/academy/expert-scraping-with-apify/solutions/managing-source"}},c={},u=[{value:"Building the new actor",id:"building-the-new-actor",level:2},{value:"Setting up the webhook",id:"setting-up-the-webhook",level:2},{value:"Making sure it worked",id:"checking-the-webhook",level:2},{value:"Quiz answers \ud83d\udcdd",id:"quiz-answers",level:2},{value:"Wrap up",id:"wrap-up",level:2}],h={toc:u};function d(e){var t=e.components,s=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"integrating-webhooks"},"Integrating webhooks"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Learn how to integrate webhooks into your actors. Webhooks are a super powerful tool, and can be used to do almost anything!")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"In this lesson we'll be writing a new actor and integrating it with our beloved Amazon scraping actor. First, we'll navigate to the same directory our ",(0,o.kt)("strong",{parentName:"p"},"demo-actor")," folder lives, and run ",(0,o.kt)("inlineCode",{parentName:"p"},"apify create filter-actor")," ",(0,o.kt)("em",{parentName:"p"},"(once again, you can name the actor whatever you want, but for this lesson, we'll be calling the new actor ",(0,o.kt)("strong",{parentName:"em"},"filter-actor"),")"),". When prompted for which type of boilerplate to start out with, select ",(0,o.kt)("strong",{parentName:"p"},"Empty"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Selecting an empty template to start with",src:a(48395).Z,width:"1128",height:"290"})),(0,o.kt)("p",null,"Cool! Now, we're ready to get started."),(0,o.kt)("h2",{id:"building-the-new-actor"},"Building the new actor"),(0,o.kt)("p",null,"First of all, we should clear out any of the boilerplate code within ",(0,o.kt)("strong",{parentName:"p"},"main.js")," to get a clean slate:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// main.js\nimport { Actor } from 'apify';\n\nawait Actor.init();\n\n// ...\n\nawait Actor.exit();\n")),(0,o.kt)("p",null,"We'll be passing the ID of the Amazon actor's default dataset along to the new actor, so we can expect that as an input:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const { datasetId } = await Actor.getInput();\nconst dataset = await Actor.openDataset(datasetId);\n// ...\n")),(0,o.kt)("p",null,"Next, we'll grab hold of the dataset's items with the ",(0,o.kt)("inlineCode",{parentName:"p"},"dataset.getData()")," function:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const { items } = await dataset.getData();\n")),(0,o.kt)("p",null,"There are a few different methods that can be used to achieve the goal output of this actor, but using the ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce",target:"_blank",rel:"noopener"},(0,o.kt)("inlineCode",{parentName:"a"},"Array.reduce()"))," is the most concise:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const filtered = items.reduce((acc, curr) => {\n    // Grab the price of the item matching our current\n    // item's ASIN in the map. If it doesn't exist, set\n    // \"prevPrice\" to null\n    const prevPrice = acc?.[curr.asin] ? +acc[curr.asin].offer.slice(1) : null;\n\n    // Grab the price of our current offer\n    const price = +curr.offer.slice(1);\n\n    // If the item doesn't yet exist in the map, add it.\n    // Or, if the current offer's price is less than the\n    // saved one, replace the saved one\n    if (!acc[curr.asin] || prevPrice > price) acc[curr.asin] = curr;\n\n    // Return the map\n    return acc;\n}, {});\n")),(0,o.kt)("p",null,"The results should be an array, so finally, we can take the map we just created and push an array of all of its values to the actor's default dataset:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"await Actor.pushData(Object.values(filtered));\n")),(0,o.kt)("p",null,"Our final code looks like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { Actor } from 'apify';\n\nawait Actor.init();\n\nconst { datasetId } = await Actor.getInput();\nconst dataset = await Actor.openDataset(datasetId);\n\nconst { items } = await dataset.getData();\n\nconst filtered = items.reduce((acc, curr) => {\n    const prevPrice = acc?.[curr.asin] ? +acc[curr.asin].offer.slice(1) : null;\n    const price = +curr.offer.slice(1);\n\n    if (!acc[curr.asin] || prevPrice > price) acc[curr.asin] = curr;\n\n    return acc;\n}, {});\n\nawait Actor.pushData(Object.values(filtered));\n\nawait Actor.exit();\n")),(0,o.kt)("p",null,"Cool! But ",(0,o.kt)("strong",{parentName:"p"},"wait"),", don't forget to configure the ",(0,o.kt)("strong",{parentName:"p"},"INPUT_SCHEMA.json")," file as well! It's not necessary to do this step, as we'll be calling the actor through Apify's API within a webhook, but it's still good to get into the habit of writing quality input schemas that describe the input values your actors are expecting."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "title": "Amazon Filter Actor",\n    "type": "object",\n    "schemaVersion": 1,\n    "properties": {\n        "datasetId": {\n            "title": "Dataset ID",\n            "type": "string",\n            "description": "Enter the ID of the dataset.",\n            "editor": "textfield"\n        }\n    },\n    "required": ["datasetId"]\n}\n')),(0,o.kt)("p",null,"Now we're done, and we can push it up to the Apify platform with the ",(0,o.kt)("inlineCode",{parentName:"p"},"apify push")," command."),(0,o.kt)("h2",{id:"setting-up-the-webhook"},"Setting up the webhook"),(0,o.kt)("p",null,"Since we'll be calling the actor via the ",(0,o.kt)("a",{parentName:"p",href:"/platform/tutorials/integrations/run-actor-and-retrieve-data-via-api#run-an-actor-or-task",target:null,rel:null},"Apify API"),", we'll need to grab hold of the ID of the actor we just created and pushed to the platform. The ID is always accessible through the ",(0,o.kt)("strong",{parentName:"p"},"Settings")," page of the actor."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Actor ID in actor settings",src:a(82782).Z,width:"1492",height:"1300"})),(0,o.kt)("p",null,"With this ",(0,o.kt)("inlineCode",{parentName:"p"},"actorId"),", and our ",(0,o.kt)("inlineCode",{parentName:"p"},"token"),", which is retrievable through ",(0,o.kt)("strong",{parentName:"p"},"Settings > Integrations")," on the Apify Console, we can construct a link which will call the actor:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"https://api.apify.com/v2/acts/Yk1bieximsduYDydP/runs?token=YOUR_TOKEN_HERE\n")),(0,o.kt)("p",null,"We can also use our username and the name of the actor like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"https://api.apify.com/v2/acts/USERNAME~filter-actor/runs?token=YOUR_TOKEN_HERE\n")),(0,o.kt)("p",null,"Whichever one you choose is totally up to preference."),(0,o.kt)("p",null,"Next, within the actor, we will click the ",(0,o.kt)("strong",{parentName:"p"},"Integrations")," tab and choose ",(0,o.kt)("strong",{parentName:"p"},"Webhook"),", then fill out the details to look like this:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Configuring a webhook",src:a(72454).Z,width:"1552",height:"876"})),(0,o.kt)("p",null,"We have chosen to run the webhook once the actor has succeeded, which means that its default dataset will surely be populated. Since the filtering actor is expecting the default dataset ID of the Amazon actor, we use the ",(0,o.kt)("inlineCode",{parentName:"p"},"resource")," variable to grab hold of the ",(0,o.kt)("inlineCode",{parentName:"p"},"defaultDatasetId"),"."),(0,o.kt)("p",null,"Click ",(0,o.kt)("strong",{parentName:"p"},"Save"),", then run the Amazon ",(0,o.kt)("strong",{parentName:"p"},"demo-actor")," again."),(0,o.kt)("h2",{id:"checking-the-webhook"},"Making sure it worked"),(0,o.kt)("p",null,"If everything worked, then at the end of the ",(0,o.kt)("strong",{parentName:"p"},"demo-actor"),"'s run, we should see this within the ",(0,o.kt)("strong",{parentName:"p"},"Integrations")," tab:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Webhook succeeded",src:a(1801).Z,width:"1702",height:"124"})),(0,o.kt)("p",null,"Additionally, we should be able to see that our ",(0,o.kt)("strong",{parentName:"p"},"filter-actor")," was run, and have access to its dataset:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Dataset preview",src:a(78664).Z,width:"2016",height:"1160"})),(0,o.kt)("h2",{id:"quiz-answers"},"Quiz answers \ud83d\udcdd"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Q: How do you allocate more CPU for an actor's run?")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"A:")," On the platform, more memory can be allocated in the actor's input configuration, and the default allocated CPU can be changed in the actor's ",(0,o.kt)("strong",{parentName:"p"},"Settings")," tab. When running locally, you can used the ",(0,o.kt)("strong",{parentName:"p"},"APIFY_MEMORY_MBYTES")," environment variable to set allocated CPU. 4GB is equal to 1 CPU core on the Apify platform."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Q: Within itself, can you get the exact time that an actor was started?")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"A:")," Yes. The time the actor was started can be retrieved through the ",(0,o.kt)("inlineCode",{parentName:"p"},"startedAt")," property from the ",(0,o.kt)("inlineCode",{parentName:"p"},"Actor.getEnv()")," function, or directly from ",(0,o.kt)("inlineCode",{parentName:"p"},"process.env.APIFY_STARTED_AT")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Q: What are the types of default storages connected to an actor's run?")),(0,o.kt)("p",null,"Every actor's run is given a default key-value store and a default dataset. The default key value store by default has the ",(0,o.kt)("inlineCode",{parentName:"p"},"INPUT")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"OUTPUT")," keys. The actor's request queue is also stored."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Q: Can you change the allocated memory of an actor while it's running?")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"A:")," Not while it's running. You'd need to stop it and run a new one. However, there is an option to soft abort an actor, then resurrect then run with a different memory configuration."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Q: How can you run an actor with Puppeteer on the Apify platform with headless mode set to ",(0,o.kt)("inlineCode",{parentName:"strong"},"false"),"?")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"A:")," This can be done by using the ",(0,o.kt)("inlineCode",{parentName:"p"},"actor-node-puppeteer-chrome")," Docker image and making sure that ",(0,o.kt)("inlineCode",{parentName:"p"},"launchContext.launchOptions.headless")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"PuppeteerCrawlerOptions")," is set to ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,o.kt)("h2",{id:"wrap-up"},"Wrap up"),(0,o.kt)("p",null,"See that?! Integrating webhooks is a piece of cake on the Apify platform! You'll soon discover that the platform factors away a lot of complex things and allows you to focus on what's most important - developing and releasing actors."))}d.isMDXComponent=!0},82782:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/actor-settings-babfc12dc5223fb45baf14312ea944c7.webp"},72454:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/adding-webhook-bc3bf8e1601ac7975dd68e9d1940d660.webp"},78664:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/dataset-preview-711de106446452a93cc8c15675d77a4d.png"},48395:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/select-empty-e351352cc516f35ed2682ead8244c46b.webp"},1801:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/webhook-succeeded-f95ddb172f63747d28dc72e5cdbb9c21.png"}}]);