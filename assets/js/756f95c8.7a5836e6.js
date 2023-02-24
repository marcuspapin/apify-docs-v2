"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[4159],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=o.createContext({}),l=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return o.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),g=l(n),d=a,m=g["".concat(p,".").concat(d)]||g[d]||u[d]||r;return n?o.createElement(m,i(i({ref:t},c),{},{components:n})):o.createElement(m,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=g;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},82567:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var o=n(87462),a=n(63366),r=(n(67294),n(3905)),i=["components"],s={title:"Log into a website using Puppeteer",description:"Learn how to complete a website's authentication process using headless Chrome and Puppeteer. Automate the filling in of log in details and passwords.",sidebar_position:3.6,slug:"/tutorials/log-into-a-website-using-puppeteer"},p="Log into a website using Puppeteer",l={unversionedId:"tutorials/log_into_a_website_using_puppeteer",id:"tutorials/log_into_a_website_using_puppeteer",title:"Log into a website using Puppeteer",description:"Learn how to complete a website's authentication process using headless Chrome and Puppeteer. Automate the filling in of log in details and passwords.",source:"@site/sources/platform/tutorials/log_into_a_website_using_puppeteer.md",sourceDirName:"tutorials",slug:"/tutorials/log-into-a-website-using-puppeteer",permalink:"/platform/tutorials/log-into-a-website-using-puppeteer",draft:!1,editUrl:"https://github.com/apify/apify-docs-v2/edit/master/sources/platform/tutorials/log_into_a_website_using_puppeteer.md",tags:[],version:"current",lastUpdatedBy:"Jan \u010curn",lastUpdatedAt:1677248878,formattedLastUpdatedAt:"Feb 24, 2023",sidebarPosition:3.6,frontMatter:{title:"Log into a website using Puppeteer",description:"Learn how to complete a website's authentication process using headless Chrome and Puppeteer. Automate the filling in of log in details and passwords.",sidebar_position:3.6,slug:"/tutorials/log-into-a-website-using-puppeteer"},sidebar:"docs",previous:{title:"Scraping dynamic content",permalink:"/platform/tutorials/scraping-dynamic-content"},next:{title:"Log in by transferring cookies",permalink:"/platform/tutorials/log-in-by-transferring-cookies"}},c={},u=[{value:"Find the login form",id:"find-the-login-form",level:2},{value:"Code the actor to fill in details",id:"code-the-actor-to-fill-in-details",level:2},{value:"Save and reuse cookies",id:"save-and-reuse-cookies",level:2}],g={toc:u};function d(e){var t=e.components,s=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},g,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"log-into-a-website-using-puppeteer"},"Log into a website using Puppeteer"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Learn how to complete a website's authentication process using headless Chrome and Puppeteer. Automate the filling in of log in details and passwords.")),(0,r.kt)("hr",null),(0,r.kt)("p",null,"In this article, we demonstrate how you can easily scrape data from a page behind a login using an ",(0,r.kt)("a",{parentName:"p",href:"/platform/actors",target:null,rel:null},"Apify actor")," with ",(0,r.kt)("a",{parentName:"p",href:"https://pptr.dev/",target:"_blank",rel:"noopener"},"Puppeteer"),". For this example, we will use ",(0,r.kt)("a",{parentName:"p",href:"https://www.facebook.com/",target:"_blank",rel:"noopener"},"https://facebook.com"),"."),(0,r.kt)("h2",{id:"find-the-login-form"},"Find the login form"),(0,r.kt)("p",null,"First, let's find the ",(0,r.kt)("strong",{parentName:"p"},"login form")," and the ",(0,r.kt)("strong",{parentName:"p"},"submit")," button on the Facebook login page using Chrome's DevTools. Right-click on any of the elements in the form and choose ",(0,r.kt)("strong",{parentName:"p"},"Inspect"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Inspect Facebook login with DevTools",src:n(91689).Z,width:"1200",height:"905"})),(0,r.kt)("p",null,"We can see an HTML ",(0,r.kt)("strong",{parentName:"p"},"input")," element with the IDs ",(0,r.kt)("inlineCode",{parentName:"p"},"email")," for email and ",(0,r.kt)("inlineCode",{parentName:"p"},"pass")," for the password. The form submission button's ID is not very helpful, however we can see it is a ",(0,r.kt)("strong",{parentName:"p"},"button")," element with the name ",(0,r.kt)("inlineCode",{parentName:"p"},"login")," and type ",(0,r.kt)("inlineCode",{parentName:"p"},"submit"),". We will use its ID, which is ",(0,r.kt)("inlineCode",{parentName:"p"},"u_0_b"),"."),(0,r.kt)("h2",{id:"code-the-actor-to-fill-in-details"},"Code the actor to fill in details"),(0,r.kt)("p",null,"Our actor will use the Puppeteer API to fill in the ",(0,r.kt)("strong",{parentName:"p"},"username")," and ",(0,r.kt)("strong",{parentName:"p"},"password")," and click the ",(0,r.kt)("strong",{parentName:"p"},"submit")," button."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { Actor } from 'apify';\nimport { launchPuppeteer, log } from 'crawlee';\n\nawait Actor.init();\n\n// Get the username and password inputs\nconst input = await Actor.getInput();\n\nconst browser = await launchPuppeteer();\nconst page = await browser.newPage();\nawait page.goto('https://facebook.com');\n\n// Login\nawait page.type('#email', input.username);\nawait page.type('#pass', input.password);\nawait page.click('#u_0_b');\nawait page.waitForNavigation();\n\n// Get cookies\nconst cookies = await page.cookies();\n\n// Use cookies in another tab or browser\nconst page2 = await browser.newPage();\nawait page2.setCookie(...cookies);\n// Open the page as a logged-in user\nawait page2.goto('https://facebook.com');\n\nawait browser.close();\n\nlog.info('Done.');\n\nawait Actor.exit();\n")),(0,r.kt)("p",null,"Now, you can run the actor and pass the login credentials as an ",(0,r.kt)("a",{parentName:"p",href:"https://docs.apify.com/sdk/js/docs/examples/accept-user-input#docsNav",target:"_blank",rel:"noopener"},"input JSON object"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "username": "marge@example.com",\n    "password": "my secret password"\n}\n')),(0,r.kt)("h2",{id:"save-and-reuse-cookies"},"Save and reuse cookies"),(0,r.kt)("p",null,"For most pages, you need to save cookies and reuse then in following runs. You can avoid logging in for each run with the code below."),(0,r.kt)("p",null,"The example below uses a ",(0,r.kt)("a",{parentName:"p",href:"/platform/storage",target:null,rel:null},"named key-value store")," to save cookies for upcoming runs."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { Actor } from 'apify';\nimport { launchPuppeteer, log } from 'crawlee';\n\nawait Actor.init();\n\nconst loggedCheck = async (page) => {\n    try {\n        await page.waitForSelector('#bluebarRoot', { timeout: 10000 });\n        return true;\n    } catch(err) {\n        return false;\n    }\n};\n\n// Get the username and password inputs\nconst input = await Actor.getInput();\n\nconst fcbCacheStore = await Actor.openKeyValueStore('fcb-cache');\nconst cookiesStoreKey = input.username.replace('@', '(at)');\n\nconst browser = await launchPuppeteer();\nconst page = await browser.newPage();\n\nlet isLogged = false;\nlet userCookies = await fcbCacheStore.getValue(cookiesStoreKey);\nif (userCookies) {\n    log.info('Trying to use cached cookies...')\n    await page.setCookie(...userCookies);\n    await page.goto('https://facebook.com');\n    isLogged = await loggedCheck(page);\n}\n\nif (!isLogged) {\n    log.info(`Cookies from the cache didn't work. Try to log in.`);\n    await page.goto('https://facebook.com');\n    await page.type('#email', input.username);\n    await page.type('#pass', input.password);\n    await page.click('#u_0_b');\n    await page.waitForNavigation();\n    isLogged = await loggedCheck(page);\n}\n\nif (!isLogged) {\n    throw new Error('Incorrect username or password.')\n}\n\n// Get cookies and refresh them in store cache\nlog.info(`Saving new cookies to cache...`);\nconst cookies = await page.cookies();\nawait fcbCacheStore.setValue(cookiesStoreKey, cookies);\n\n// Use cookies in another tab or browser\nconst page2 = await browser.newPage();\nawait page2.setCookie(...cookies);\n// Opens thepage as a logged-in user\nawait page2.goto('https://facebook.com');\n\nawait browser.close();\n\nlog.info('Done.');\n\nawait Actor.exit();\n")))}d.isMDXComponent=!0},91689:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/facebook-login-cf6957736da0fc44807a4fc182454a98.png"}}]);