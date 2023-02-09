"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[2487],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(a),h=r,g=d["".concat(l,".").concat(h)]||d[h]||c[h]||o;return a?n.createElement(g,s(s({ref:t},u),{},{components:a})):n.createElement(g,s({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},10499:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),s=["components"],i={title:"How to analyze and fix errors when scraping a website",description:"Learn how to deal with random crashes in your web-scraping and automation jobs. Find out the essentials of debugging and fixing problems in your crawlers.",sidebar_position:14.1,slug:"/node-js/analyzing-pages-and-fixing-errors"},l="How to analyze and fix errors when scraping a website",p={unversionedId:"tutorials/node_js/analyzing_pages_and_fixing_errors",id:"tutorials/node_js/analyzing_pages_and_fixing_errors",title:"How to analyze and fix errors when scraping a website",description:"Learn how to deal with random crashes in your web-scraping and automation jobs. Find out the essentials of debugging and fixing problems in your crawlers.",source:"@site/sources/academy/tutorials/node_js/analyzing_pages_and_fixing_errors.md",sourceDirName:"tutorials/node_js",slug:"/node-js/analyzing-pages-and-fixing-errors",permalink:"/academy/node-js/analyzing-pages-and-fixing-errors",draft:!1,editUrl:"https://github.com/apify/apify-docs-v2/edit/master/sources/academy/tutorials/node_js/analyzing_pages_and_fixing_errors.md",tags:[],version:"current",lastUpdatedBy:"Jind\u0159ich B\xe4r",lastUpdatedAt:1675932804,formattedLastUpdatedAt:"Feb 9, 2023",sidebarPosition:14.1,frontMatter:{title:"How to analyze and fix errors when scraping a website",description:"Learn how to deal with random crashes in your web-scraping and automation jobs. Find out the essentials of debugging and fixing problems in your crawlers.",sidebar_position:14.1,slug:"/node-js/analyzing-pages-and-fixing-errors"},sidebar:"academy",previous:{title:"Node.js tutorials",permalink:"/academy/node-js"},next:{title:"How to optimize Puppeteer by caching responses",permalink:"/academy/node-js/caching-responses-in-puppeteer"}},u={},c=[{value:"Possible causes",id:"possible-causes",level:2},{value:"Diagnosing/analyzing the issue",id:"issue-analysis",level:2},{value:"Logging",id:"logging",level:3},{value:"Logging errors",id:"logging-errors",level:4},{value:"Saving snapshots",id:"saving-snapshots",level:3},{value:"When to save snapshots",id:"when-to-save-snapshots",level:4},{value:"Error reporting",id:"error-reporting",level:3},{value:"With the Apify SDK",id:"with-the-apify-sdk",level:2}],d={toc:c};function h(e){var t=e.components,a=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"scraping-with-sitemaps"},"How to analyze and fix errors when scraping a website"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Learn how to deal with random crashes in your web-scraping and automation jobs. Find out the essentials of debugging and fixing problems in your crawlers.")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Debugging is absolutely essential in programming. Even if you don't call yourself a programmer, having basic debugging skills will make building crawlers easier. It will also help you safe money by allowing you to avoid hiring an expensive developer to solve your issue for you."),(0,o.kt)("p",null,"This quick lesson covers the absolute basics by discussing some of the most common problems and the simplest tools for analyzing and fixing them."),(0,o.kt)("h2",{id:"possible-causes"},"Possible causes"),(0,o.kt)("p",null,"It is often tricky to see the full scope of what can go wrong. We assume once the code is set up correctly, it will keep working. Unfortunately, that is rarely true in the realm of web scraping and automation."),(0,o.kt)("p",null,"Websites change, they introduce new ",(0,o.kt)("a",{parentName:"p",href:"/academy/anti-scraping",target:null,rel:null},"anti-scraping technologies"),", programming tools change and, in addition, people make mistakes."),(0,o.kt)("p",null,"Here are the most common reasons your working solution may break."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The website changes its layout or ",(0,o.kt)("a",{parentName:"li",href:"https://www.datafeedwatch.com/academy/data-feed",target:"_blank",rel:"noopener"},"data feed"),"."),(0,o.kt)("li",{parentName:"ul"},"A site's layout changes depending on location or uses ",(0,o.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=XDoKXaGrUxE&feature=youtu.be",target:"_blank",rel:"noopener"},"A/B testing"),"."),(0,o.kt)("li",{parentName:"ul"},"A page starts to block you (recognizes you as a bot)."),(0,o.kt)("li",{parentName:"ul"},"The website ",(0,o.kt)("a",{parentName:"li",href:"/academy/node-js/dealing-with-dynamic-pages",target:null,rel:null},"loads its data later dynamically"),", so the code works only sometimes, if you are slow or lucky enough."),(0,o.kt)("li",{parentName:"ul"},"You made a mistake when updating your code."),(0,o.kt)("li",{parentName:"ul"},"Your ",(0,o.kt)("a",{parentName:"li",href:"/academy/anti-scraping/mitigation/proxies",target:null,rel:null},"proxies")," aren't working."),(0,o.kt)("li",{parentName:"ul"},"You have upgraded your ",(0,o.kt)("a",{parentName:"li",href:"https://www.quora.com/What-is-a-dependency-in-coding",target:"_blank",rel:"noopener"},"dependencies")," (other software that your software relies upon), and the new versions no longer work (this is harder to debug).")),(0,o.kt)("h2",{id:"issue-analysis"},"Diagnosing/analyzing the issue"),(0,o.kt)("p",null,"Web scraping and automation are very specific types of programming. It is not possible to rely on specialized debugging tools, since the code does not output the same results every time. However, there are still many ways to diagnose issues in a crawler."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Many issues are edge cases, which occur in just one of a thousand pages or are time-dependent. Because of this, you cannot rely only on ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Deterministic_algorithm",target:"_blank",rel:"noopener"},"determinism"),".")),(0,o.kt)("h3",{id:"logging"},"Logging"),(0,o.kt)("p",null,"Logging is an essential tool for any programmer. When used correctly, they help you capture a surprising amount of information. Here are some general rules for logging:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Usually, ",(0,o.kt)("strong",{parentName:"li"},"many logs")," is better than ",(0,o.kt)("strong",{parentName:"li"},"no logs")," at all."),(0,o.kt)("li",{parentName:"ul"},"Putting more information into one line, rather than logging multiple short lines, helps reduce the overall log size."),(0,o.kt)("li",{parentName:"ul"},"Focus on numbers. Log how many items you extract from a page, etc."),(0,o.kt)("li",{parentName:"ul"},"Structure your logs and use the same structure in all your logs."),(0,o.kt)("li",{parentName:"ul"},"Append the current page's URL to each log. This lets you immediately open that page and review it.")),(0,o.kt)("p",null,"Here's an example of what a structured log message might look like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"[CATEGORY]: Products: 20, Unique products: 4, Next page: true --- https://apify.com/store\n")),(0,o.kt)("p",null,"The log begins with the ",(0,o.kt)("strong",{parentName:"p"},"page type"),". Usually, we use labels such as ",(0,o.kt)("strong",{parentName:"p"},"[","CATEGORY","]")," and ",(0,o.kt)("strong",{parentName:"p"},"[","DETAIL","]"),". Then, we log important numbers and other information. Finally, we add the page's URL, so we can check if the log is correct."),(0,o.kt)("h4",{id:"logging-errors"},"Logging errors"),(0,o.kt)("p",null,"Errors require a different approach because, if your code crashes, your usual logs will not be called. Instead, exception handlers will print the error, but these are usually ugly messages with a ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Stack_trace",target:"_blank",rel:"noopener"},"stack trace")," that only the experts will understand."),(0,o.kt)("p",null,"You can overcome this by adding ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch",target:"_blank",rel:"noopener"},"try/catch blocks")," into your code. In the catch block, explain what happened and re-throw the error (so the request is automatically retried)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"try {\n    // Sensitive code block\n    // ...\n} catch (error) {\n    // You know where the code crashed so you can explain here\n    throw new Error('Request failed during login with an error', { cause: error });\n}\n")),(0,o.kt)("p",null,"Read more information about logging and error handling in our developer ",(0,o.kt)("a",{parentName:"p",href:"/academy/web-scraping-for-beginners/best-practices",target:null,rel:null},"best practices")," section."),(0,o.kt)("h3",{id:"saving-snapshots"},"Saving snapshots"),(0,o.kt)("p",null,"By snapshots, we mean ",(0,o.kt)("strong",{parentName:"p"},"screenshots")," if you use a ",(0,o.kt)("a",{parentName:"p",href:"/academy/puppeteer-playwright",target:null,rel:null},"browser with Puppeteer/Playwright")," and HTML saved into a ",(0,o.kt)("a",{parentName:"p",href:"https://crawlee.dev/api/core/class/KeyValueStore",target:"_blank",rel:"noopener"},"key-value store")," that you can easily display in your own browser. Snapshots are useful throughout your code but especially important in error handling."),(0,o.kt)("p",null,"Note that an error can happen only in a few pages out of a thousand and look completely random. There is not much you can do other than save and analyze a snapshot."),(0,o.kt)("p",null,"Snapshots can tell you if:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A website has changed its layout. This can also mean A/B testing or different content for different locations."),(0,o.kt)("li",{parentName:"ul"},"You have been blocked \u2013 you open a ",(0,o.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/CAPTCHA",target:"_blank",rel:"noopener"},"CAPTCHA")," or an ",(0,o.kt)("strong",{parentName:"li"},"Access Denied")," page."),(0,o.kt)("li",{parentName:"ul"},"Data load later dynamically \u2013 the page is empty."),(0,o.kt)("li",{parentName:"ul"},"The page was redirected \u2013 the content is different.")),(0,o.kt)("p",null,"You can learn how to take snapshots in Puppeteer or Playwright in ",(0,o.kt)("a",{parentName:"p",href:"/academy/puppeteer-playwright/page/page-methods",target:null,rel:null},"this short lesson")),(0,o.kt)("h4",{id:"when-to-save-snapshots"},"When to save snapshots"),(0,o.kt)("p",null,"The most common approach is to save on error. We can enhance our previous try/catch block like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { puppeteerUtils } from 'crawlee';\n\n// ...\n// storeId is ID of current key value store, where we save snapshots\nconst storeId = Actor.getEnv().defaultKeyValueStoreId;\ntry {\n    // Sensitive code block\n    // ...\n} catch (error) {\n    // Change the way you save it depending on what tool you use\n    const randomNumber = Math.random();\n    const key = `ERROR-LOGIN-${randomNumber}`;\n    await puppeteerUtils.saveSnapshot(page, { key });\n    const screenshotLink = `https://api.apify.com/v2/key-value-stores/${storeId}/records/${key}.jpg`\n\n    // You know where the code crashed so you can explain here\n    throw new Error('Request failed during login with an error', { cause: error });\n}\n// ...\n")),(0,o.kt)("p",null,"To make the error snapshot descriptive, we name it ",(0,o.kt)("strong",{parentName:"p"},"ERROR-LOGIN"),". We add a random number so the next ",(0,o.kt)("strong",{parentName:"p"},"ERROR-LOGIN"),"s would not overwrite this one and we can see all the snapshots. If you can use an ID of some sort, it is even better."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Beware:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The snapshot's ",(0,o.kt)("strong",{parentName:"li"},"name")," (key) can only contain letter, number, dot and dash characters. Other characters will cause an error, which makes the random number a safe pick."),(0,o.kt)("li",{parentName:"ul"},"Do not overdo the snapshots. Once you get out of the testing phase, limit them to critical places. Saving snapshots uses resources.")),(0,o.kt)("h3",{id:"error-reporting"},"Error reporting"),(0,o.kt)("p",null,"Logging and snapshotting are great tools but once you reach a certain run size, it may be hard to read through them all. For a large project, it is handy to create a more sophisticated reporting system. For example, let's just look at simple ",(0,o.kt)("strong",{parentName:"p"},"dataset")," reporting."),(0,o.kt)("h2",{id:"with-the-apify-sdk"},"With the Apify SDK"),(0,o.kt)("p",null,"This example extends our snapshot solution above by creating a ",(0,o.kt)("a",{parentName:"p",href:"/platform/storage#named-and-unnamed-storages",target:null,rel:null},"named dataset")," (named datasets have infinite retention), where we will accumulate error reports. Those reports will explain what happened and will link to a saved snapshot, so we can do a quick visual check."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { Actor } from 'apify';\nimport { puppeteerUtils } from 'crawlee';\n\nawait Actor.init();\n// ...\n// Let's create reporting dataset\n// If you already have one, this will continue adding to it\nconst reportingDataset = await Actor.openDataset('REPORTING');\n\n// storeId is ID of current key-value store, where we save snapshots\nconst storeId = Actor.getEnv().defaultKeyValueStoreId;\n\n// We can also capture actor and run IDs\n// to have easy access in the reporting dataset\nconst { actorId, actorRunId } = Actor.getEnv();\nconst linkToRun = `https://console.apify.com/actors/actorId#/runs/actorRunId`;\n\ntry {\n    // Sensitive code block\n    // ...\n} catch (error) {\n    // Change the way you save it depending on what tool you use\n    const randomNumber = Math.random();\n    const key = `ERROR-LOGIN-${randomNumber}`;\n    await puppeteerUtils.saveSnapshot(page, { key });\n\n    const screenshotLink = `https://api.apify.com/v2/key-value-stores/${storeId}/records/${key}.jpg?disableRedirect=true`;\n\n    // We create a report object\n    const report = {\n        errorType: 'login',\n        errorMessage: error.toString(),\n\n        // You will have to adjust the keys if you save them in a non-standard way\n        htmlSnapshot: `https://api.apify.com/v2/key-value-stores/${storeId}/records/${key}.html?disableRedirect=true`,\n        screenshot: screenshotLink,\n        run: linkToRun,\n    };\n\n    // And we push the report\n    await reportingDataset.pushData(report);\n\n    // You know where the code crashed so you can explain here\n    throw new Error('Request failed during login with an error', { cause: error });\n}\n// ...\nawait Actor.exit();\n")))}h.isMDXComponent=!0}}]);