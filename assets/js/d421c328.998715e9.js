"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[5555],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(a),h=r,m=u["".concat(p,".").concat(h)]||u[h]||d[h]||i;return a?n.createElement(m,o(o({ref:t},c),{},{components:a})):n.createElement(m,o({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8574:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),o=["components"],l={title:"Apify client",description:"Interact with the Apify API in your code by using the apify-client package, which is available for both JavaScript and Python.",sidebar_position:5,slug:"/getting-started/apify-client"},p="[](#apify-client) Apify client",s={unversionedId:"getting_started/apify_client",id:"getting_started/apify_client",title:"Apify client",description:"Interact with the Apify API in your code by using the apify-client package, which is available for both JavaScript and Python.",source:"@site/sources/academy/getting_started/apify_client.md",sourceDirName:"getting_started",slug:"/getting-started/apify-client",permalink:"/academy/getting-started/apify-client",draft:!1,tags:[],version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1673462256,formattedLastUpdatedAt:"Jan 11, 2023",sidebarPosition:5,frontMatter:{title:"Apify client",description:"Interact with the Apify API in your code by using the apify-client package, which is available for both JavaScript and Python.",sidebar_position:5,slug:"/getting-started/apify-client"},sidebar:"defaultSidebar",previous:{title:"Apify API",permalink:"/academy/getting-started/apify-api"},next:{title:"Deploying your code",permalink:"/academy/deploying-your-code"}},c={},d=[{value:" Installing and importing",id:"-installing-and-importing",level:2},{value:" Running an actor",id:"-running-an-actor",level:2},{value:" Collecting dataset items",id:"-collecting-dataset-items",level:2},{value:" Updating an actor",id:"-updating-an-actor",level:2},{value:" Overview",id:"-overview",level:2},{value:" Next up",id:"-next-up",level:2}],u={toc:d};function h(e){var t=e.components,l=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"-apify-client"},(0,i.kt)("a",{parentName:"h1",href:"#apify-client",target:null,rel:null})," Apify client"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Interact with the Apify API in your code by using the apify-client package, which is available for both JavaScript and Python.")),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Now that you've gotten your toes wet with interacting with the Apify API through raw HTTP requests, you're ready to become familiar with the ",(0,i.kt)("strong",{parentName:"p"},"Apify client"),", which is a package available for both JavaScript and Python that allows you to interact with the API in your code without  explicitly needing to make any GET or POST requests."),(0,i.kt)("p",null,"This lesson will provide code examples for both Node.js and Python, so regardless of the language you are using, you can follow along!"),(0,i.kt)("h2",{id:"-installing-and-importing"},(0,i.kt)("a",{parentName:"h2",href:"#installing-and-importing",target:null,rel:null})," Installing and importing"),(0,i.kt)("p",null,"If you are going to use the client in Node.js, use this command within one of your projects to install the package through NPM:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"npm install apify-client\n")),(0,i.kt)("p",null,"In Python, you can install it from PyPI with this command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"pip install apify-client\n")),(0,i.kt)("p",null,"After installing the package, let's make a file named ",(0,i.kt)("strong",{parentName:"p"},"client")," and import the Apify client like so:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-marked-tabs"},'<marked-tab header="Node.js" lang="javascript">\n// client.js\nimport { ApifyClient } from \'apify-client\';\n</marked-tab>\n<marked-tab header="Python" lang="python">\n# client.py\nfrom apify_client import ApifyClient\n</marked-tab>\n')),(0,i.kt)("h2",{id:"-running-an-actor"},(0,i.kt)("a",{parentName:"h2",href:"#running-an-actor",target:null,rel:null})," Running an actor"),(0,i.kt)("p",null,"In the last lesson, we ran the ",(0,i.kt)("strong",{parentName:"p"},"adding-actor")," and retrieved its dataset items. That's exactly what we're going to do now; however, by using the Apify client instead."),(0,i.kt)("p",null,"Before we can use the client though, we must create a new instance of the ",(0,i.kt)("inlineCode",{parentName:"p"},"ApifyClient")," class and pass it our API token from the ",(0,i.kt)("a",{parentName:"p",href:"https://console.apify.com/account?tab=integrations&asrc=developers_portal",target:"_blank",rel:"noopener"},(0,i.kt)("strong",{parentName:"a"},"Integrations")," page")," on the Apify Console:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-marked-tabs"},'<marked-tab header="Node.js" lang="javascript">\nconst client = new ApifyClient({\n    token: \'YOUR_TOKEN\',\n});\n</marked-tab>\n<marked-tab header="Python" lang="python">\nclient = ApifyClient(token=\'YOUR_TOKEN\')\n</marked-tab>\n')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"If you are planning on publishing your code to a public Github/Gitlab repository or anywhere else online, be sure to set your API token as en environment variable, and never hardcode it directly into your script.")),(0,i.kt)("p",null,"Now that we've got our instance, we can point to an actor using the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.apify.com/apify-client-js#apifyclient-actor",target:"_blank",rel:"noopener"},(0,i.kt)("inlineCode",{parentName:"a"},"client.actor()"))," function, then call the actor with some input with the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.apify.com/apify-client-js#actorclient-call",target:"_blank",rel:"noopener"},(0,i.kt)("inlineCode",{parentName:"a"},".call()"))," function - the first parameter of which is the input for the actor."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-marked-tabs"},"<marked-tab header=\"Node.js\" lang=\"javascript\">\nconst run = await client.actor('YOUR_USERNAME/adding-actor').call({\n    num1: 4,\n    num2: 2,\n});\n</marked-tab>\n<marked-tab header=\"Python\" lang=\"python\">\nrun = client.actor('YOUR_USERNAME/adding-actor').call(run_input={\n    'num1': 4,\n    'num2': 2\n})\n</marked-tab>\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Learn more about the ",(0,i.kt)("inlineCode",{parentName:"p"},".call()")," function ",(0,i.kt)("a",{parentName:"p",href:"https://docs.apify.com/apify-client-js#actorclient-call",target:"_blank",rel:"noopener"},"here"),".")),(0,i.kt)("h2",{id:"-collecting-dataset-items"},(0,i.kt)("a",{parentName:"h2",href:"#collecting-dataset-items",target:null,rel:null})," Collecting dataset items"),(0,i.kt)("p",null,"Once an actor's run has completed, it will return a ",(0,i.kt)("strong",{parentName:"p"},"run info")," object that looks something like this:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Run info object",src:a(36041).Z,width:"576",height:"612"})),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"run")," variable we created in the last section points to the ",(0,i.kt)("strong",{parentName:"p"},"run info")," object of the run we created with the ",(0,i.kt)("inlineCode",{parentName:"p"},".call()")," function, which means that through this variable, we can access the run's ",(0,i.kt)("inlineCode",{parentName:"p"},"defaultDatasetId"),". This ID can then be passed into the ",(0,i.kt)("inlineCode",{parentName:"p"},"client.dataset()")," function."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-marked-tabs"},'<marked-tab header="Node.js" lang="javascript">\nconst dataset = client.dataset(run[\'defaultDatasetId\'])\n</marked-tab>\n<marked-tab header="Python" lang="python">\ndataset = client.dataset(run[\'defaultDatasetId\'])\n</marked-tab>\n')),(0,i.kt)("p",null,"Finally, we can collect the items in the dataset by using the ",(0,i.kt)("strong",{parentName:"p"},"list items")," function, then log them to the console."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-marked-tabs"},'<marked-tab header="Node.js" lang="javascript">\nconst { items } = await dataset.listItems();\n\nconsole.log(items);\n</marked-tab>\n<marked-tab header="Python" lang="python">\nitems = dataset.list_items().items\n\nprint(items)\n</marked-tab>\n')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Notice that in the JavaScript example, we had to convert the ",(0,i.kt)("inlineCode",{parentName:"p"},"items")," to a ",(0,i.kt)("a",{parentName:"p",href:"https://nodejs.org/api/buffer.html",target:"_blank",rel:"noopener"},(0,i.kt)("inlineCode",{parentName:"a"},"Buffer")),", then convert the Buffer to a string and parse it. This is because ",(0,i.kt)("inlineCode",{parentName:"p"},"dataset.downloadItems()")," returns a buffer.")),(0,i.kt)("p",null,"The final code for running the actor and collecting its dataset items looks like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-marked-tabs"},"<marked-tab header=\"Node.js\" lang=\"javascript\">\n// client.js\nimport { ApifyClient } from 'apify-client';\n\nconst client = new ApifyClient({\n    token: 'YOUR_TOKEN',\n});\n\nconst run = await client.actor('YOUR_USERNAME/adding-actor').call({\n    num1: 4,\n    num2: 2,\n});\n\nconst dataset = client.dataset(run['defaultDatasetId'])\n\nconst { items } = await dataset.listItems();\n\nconsole.log(items);\n</marked-tab>\n<marked-tab header=\"Python\" lang=\"python\">\n# client.py\nfrom apify_client import ApifyClient\n\nclient = ApifyClient(token='YOUR_TOKEN')\n\nactor = client.actor('YOUR_USERNAME/adding-actor').call(run_input={\n    'num1': 4,\n    'num2': 2\n})\n\ndataset = client.dataset(run['defaultDatasetId'])\n\nitems = dataset.list_items().items\n\nprint(items)\n</marked-tab>\n")),(0,i.kt)("h2",{id:"-updating-an-actor"},(0,i.kt)("a",{parentName:"h2",href:"#updating-actor",target:null,rel:null})," Updating an actor"),(0,i.kt)("p",null,"If you check the ",(0,i.kt)("strong",{parentName:"p"},"Settings")," tab within your ",(0,i.kt)("strong",{parentName:"p"},"adding-actor"),", you'll notice that the default memory being allocated to the actor is ",(0,i.kt)("strong",{parentName:"p"},"2048 MB"),". This is a bit overkill considering the fact that the actor is only adding two numbers together - ",(0,i.kt)("strong",{parentName:"p"},"256 MB")," would be much more reasonable. Also, we can safely say that the run should never take more than 20 seconds (even this is a generous number), and that the default of 3600 seconds is also overkill."),(0,i.kt)("p",null,"Let's change these two actor settings via the Apify client using the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.apify.com/apify-client-js#actorclient-update",target:"_blank",rel:"noopener"},(0,i.kt)("inlineCode",{parentName:"a"},"actor.update()"))," function. This function will call the ",(0,i.kt)("strong",{parentName:"p"},"update actor")," endpoint, which can take ",(0,i.kt)("inlineCode",{parentName:"p"},"defaultRunOptions")," as an input property. You can find the shape of the ",(0,i.kt)("inlineCode",{parentName:"p"},"defaultRunOptions")," in the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.apify.com/api/v2#/reference/actors/actor-object/update-actor",target:"_blank",rel:"noopener"},"API documentation"),". Perfect!"),(0,i.kt)("p",null,"First, we'll create a pointer to our actor, similar to as before (except this time, we won't be using ",(0,i.kt)("inlineCode",{parentName:"p"},".call()")," at the end):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-marked-tabs"},'<marked-tab header="Node.js" lang="javascript">\nconst actor = client.actor(\'YOUR_USERNAME/adding-actor\')\n</marked-tab>\n<marked-tab header="Python" lang="python">\nactor = client.actor(\'YOUR_USERNAME/adding-actor\')\n</marked-tab>\n')),(0,i.kt)("p",null,"Then, we'll just call the ",(0,i.kt)("inlineCode",{parentName:"p"},".update()")," method on the ",(0,i.kt)("inlineCode",{parentName:"p"},"actor")," variable we created and pass in our new ",(0,i.kt)("strong",{parentName:"p"},"default run options"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-marked-tabs"},'<marked-tab header="Node.js" lang="javascript">\nawait actor.update({\n    defaultRunOptions: {\n        build: \'latest\',\n        memoryMbytes: 256,\n        timeoutSecs: 20,\n    },\n});\n</marked-tab>\n<marked-tab header="Python" lang="python">\nactor.update(default_run_build=\'latest\', default_run_memory_mbytes=256, default_run_timeout_secs=20)\n</marked-tab>\n')),(0,i.kt)("p",null,"After running the code, go back to the ",(0,i.kt)("strong",{parentName:"p"},"Settings")," page of ",(0,i.kt)("strong",{parentName:"p"},"adding-actor"),". If your default options now look like this, then it worked!:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"New run defaults",src:a(49842).Z,width:"1726",height:"704"})),(0,i.kt)("h2",{id:"-overview"},(0,i.kt)("a",{parentName:"h2",href:"#overview",target:null,rel:null})," Overview"),(0,i.kt)("p",null,"There is so much more you can do with the Apify client than just running actors, updating actors, and collecting dataset items. The purpose of this lesson was just to get you comfortable with using the client in your own projects, as it is the absolute best developer tool for integrating the Apify platform with an external system."),(0,i.kt)("p",null,"For a more in-depth understanding of the Apify API client, give these a quick lookover:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.apify.com/apify-client-js",target:"_blank",rel:"noopener"},"API client for JavaScript")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.apify.com/apify-client-python",target:"_blank",rel:"noopener"},"API client for Python"))),(0,i.kt)("h2",{id:"-next-up"},(0,i.kt)("a",{parentName:"h2",href:"#next",target:null,rel:null})," Next up"),(0,i.kt)("p",null,"Now that you're familiar and a bit more comfortable with the Apify platform, you're ready to start deploying your code to Apify! In the ",(0,i.kt)("a",{parentName:"p",href:"/academy/deploying-your-code",target:null,rel:null},"next section"),", you'll learn how to take any project written in any programming language and turn it into an actor."))}h.isMDXComponent=!0},49842:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/new-defaults-5c654ba15fa6e919e518c56a49e6463e.webp"},36041:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/run-info-a0a7508da0b52ba2ea4b541e84ce6950.webp"}}]);