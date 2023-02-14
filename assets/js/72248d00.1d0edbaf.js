"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[6229],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),g=r,h=d["".concat(l,".").concat(g)]||d[g]||c[g]||o;return n?a.createElement(h,s(s({ref:t},p),{},{components:n})):a.createElement(h,s({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var u=2;u<o;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},40385:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>m,frontMatter:()=>u,metadata:()=>c,toc:()=>g});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),s=n(74866),i=n(85162),l=["components"],u={title:"IV - Reading & intercepting requests",description:"You can use DevTools, but did you know that you can do all the same stuff (plus more) programmatically? Read and intercept requests in Puppeteer/Playwright.",sidebar_position:2.4,slug:"/puppeteer-playwright/reading-intercepting-requests"},p="Reading & intercepting requests",c={unversionedId:"webscraping/puppeteer_playwright/reading_intercepting_requests",id:"webscraping/puppeteer_playwright/reading_intercepting_requests",title:"IV - Reading & intercepting requests",description:"You can use DevTools, but did you know that you can do all the same stuff (plus more) programmatically? Read and intercept requests in Puppeteer/Playwright.",source:"@site/sources/academy/webscraping/puppeteer_playwright/reading_intercepting_requests.md",sourceDirName:"webscraping/puppeteer_playwright",slug:"/puppeteer-playwright/reading-intercepting-requests",permalink:"/academy/puppeteer-playwright/reading-intercepting-requests",draft:!1,editUrl:"https://github.com/apify/apify-docs-v2/edit/master/sources/academy/webscraping/puppeteer_playwright/reading_intercepting_requests.md",tags:[],version:"current",lastUpdatedBy:"Jind\u0159ich B\xe4r",lastUpdatedAt:1676377646,formattedLastUpdatedAt:"Feb 14, 2023",sidebarPosition:2.4,frontMatter:{title:"IV - Reading & intercepting requests",description:"You can use DevTools, but did you know that you can do all the same stuff (plus more) programmatically? Read and intercept requests in Puppeteer/Playwright.",sidebar_position:2.4,slug:"/puppeteer-playwright/reading-intercepting-requests"},sidebar:"academy",previous:{title:"Extracting data",permalink:"/academy/puppeteer-playwright/executing-scripts/collecting-data"},next:{title:"V - Using proxies",permalink:"/academy/puppeteer-playwright/proxies"}},d={},g=[{value:"Reading requests",id:"reading-requests",level:2},{value:"Reading responses",id:"reading-responses",level:2},{value:"Intercepting requests",id:"intercepting-requests",level:2},{value:"Blocking resources",id:"blocking-resources",level:3},{value:"Quick note about resource blocking",id:"quick-note",level:4},{value:"Modifying the request",id:"modifyng-the-request",level:3},{value:"Next up",id:"next",level:2}],h={toc:g};function m(e){var t=e.components,u=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},h,u,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"reading-intercepting-requests"},"Reading & intercepting requests"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"You can use DevTools, but did you know that you can do all the same stuff (plus more) programmatically? Read and intercept requests in Puppeteer/Playwright.")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"On any website that serves up images, makes ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest",target:"_blank",rel:"noopener"},"XMLHttpRequests"),", or fetches content in some other way, you can see those requests (and their responses) in the ",(0,o.kt)("a",{parentName:"p",href:"/academy/api-scraping/general-api-scraping/locating-and-learning",target:null,rel:null},(0,o.kt)("strong",{parentName:"a"},"Network")," tab")," of your browser's DevTools. Lots of data about the request can be found there, such as the headers, payload, and response body."),(0,o.kt)("p",null,"In Playwright and Puppeteer, it is also possible to read (and even intercept) requests being made on the page - programmatically. This is very useful for things like reading dynamic headers, saving API responses, blocking certain resources, and much more."),(0,o.kt)("p",null,"During this lesson, we'll be using ",(0,o.kt)("a",{parentName:"p",href:"https://soundcloud.com/tiesto/following",target:"_blank",rel:"noopener"},"Ti\xebsto's following list")," on SoundCloud to demonstrate request/response reading and interception. Here's our basic setup for opening the page:"),(0,o.kt)(s.Z,{groupId:"main",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"Playwright",label:"Playwright",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { chromium } from 'playwright';\n\nconst browser = await chromium.launch({ headless: false });\nconst page = await browser.newPage();\n\n// Our code will go here\n\nawait page.goto('https://soundcloud.com/tiesto/following');\n\nawait page.waitForTimeout(10000);\nawait browser.close();\n\n"))),(0,o.kt)(i.Z,{value:"Puppeteer",label:"Puppeteer",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import puppeteer from 'puppeteer';\n\nconst browser = await puppeteer.launch({ headless: false });\nconst page = await browser.newPage();\n\n// Our code will go here\n\nawait page.goto('https://soundcloud.com/tiesto/following');\n\nawait page.waitForTimeout(10000);\nawait browser.close();\n\n")))),(0,o.kt)("h2",{id:"reading-requests"},"Reading requests"),(0,o.kt)("p",null,"We can use the ",(0,o.kt)("a",{parentName:"p",href:"https://pptr.dev/#?product=Puppeteer&version=v14.0.0&show=api-event-close",target:"_blank",rel:"noopener"},(0,o.kt)("inlineCode",{parentName:"a"},"page.on()"))," function to listen for the ",(0,o.kt)("strong",{parentName:"p"},"request")," event, passing in a callback function. The first parameter of the passed in callback function is an object representing the request."),(0,o.kt)("p",null,"Upon visiting Ti\xebsto's following page, we can see in the ",(0,o.kt)("strong",{parentName:"p"},"Network")," tab that a request is made to fetch all of the users which he is following."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Request to grab Ti\xebsto&#39;s following list",src:n(85342).Z,width:"1536",height:"382"})),(0,o.kt)("p",null,"Let's go ahead and listen for this request in our code:"),(0,o.kt)(s.Z,{groupId:"main",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"Playwright",label:"Playwright",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// Listen for all requests\npage.on('request', (req) => {\n    // If the URL doesn't include our keyword, ignore it\n    if (!req.url().includes('followings')) return;\n\n    console.log('Request for followers was made!')\n});\n\n"))),(0,o.kt)(i.Z,{value:"Puppeteer",label:"Puppeteer",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// Listen for all requests\npage.on('request', (req) => {\n    // If the URL doesn't include our keyword, ignore it\n    if (!req.url().includes('followings')) return;\n\n    console.log('Request for followers was made!')\n});\n\n")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note that you should always define any request reading/interception code prior to calling the ",(0,o.kt)("inlineCode",{parentName:"p"},"page.goto()")," function.")),(0,o.kt)("p",null,"Cool! So now when we run our code, we'll see this logged to the console:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"Request for followers was made!\n")),(0,o.kt)("p",null,"This request includes some useful query parameters, namely the ",(0,o.kt)("inlineCode",{parentName:"p"},"client_id"),". Let's go ahead and grab these values from the request URL and print them to the console:"),(0,o.kt)(s.Z,{groupId:"main",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"Playwright",label:"Playwright",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { chromium } from 'playwright';\n\nconst browser = await chromium.launch({ headless: false });\nconst page = await browser.newPage();\n\n// Listen for all requests\npage.on('request', (req) => {\n    // If the URL doesn't include our keyword, ignore it\n    if (!req.url().includes('followings')) return;\n\n    // Convert the request URL into a URL object\n    const url = new URL(req.url());\n\n    // Print the search parameters in object form\n    console.log(Object.fromEntries(url.searchParams));\n});\n\nawait page.goto('https://soundcloud.com/tiesto/following');\n\nawait page.waitForTimeout(10000);\nawait browser.close();\n\n"))),(0,o.kt)(i.Z,{value:"Puppeteer",label:"Puppeteer",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import puppeteer from 'puppeteer';\n\nconst browser = await puppeteer.launch({ headless: false });\nconst page = await browser.newPage();\n\n// Listen for all requests\npage.on('request', (req) => {\n    // If the URL doesn't include our keyword, ignore it\n    if (!req.url().includes('followings')) return;\n\n    // Convert the request URL into a URL object\n    const url = new URL(req.url());\n\n    // Print the search parameters in object form\n    console.log(Object.fromEntries(url.searchParams));\n});\n\nawait page.goto('https://soundcloud.com/tiesto/following');\n\nawait page.waitForTimeout(10000);\nawait browser.close();\n\n")))),(0,o.kt)("p",null,"After running this code, we can see this logged to the console:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"{\n  client_id: 'llCGDUjKpxUslgO1yEce7Zh95PXE78Bo',\n  limit: '12',\n  offset: '0',\n  linked_partitioning: '1',\n  app_version: '1652347025',\n  app_locale: 'en'\n}\n")),(0,o.kt)("h2",{id:"reading-responses"},"Reading responses"),(0,o.kt)("p",null,"Listening for and reading responses is very similar to reading requests. The only difference is that we need to listen for the ",(0,o.kt)("strong",{parentName:"p"},"response")," event instead of ",(0,o.kt)("strong",{parentName:"p"},"request"),". Additionally, the object passed into the callback function represents the response instead of the request."),(0,o.kt)("p",null,"This time, instead of grabbing the query parameters of the request URL, let's grab hold of the response body and print it to the console in JSON format:"),(0,o.kt)(s.Z,{groupId:"main",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"Playwright",label:"Playwright",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// Notice that the callback function is now async\npage.on('response', async (res) => {\n    if (!res.request().url().includes('followings')) return;\n\n    // Grab the response body in JSON format\n    try {\n        const json = await res.json();\n        console.log(json);\n    } catch (err) {\n        console.error('Response wasn't JSON or failed to parse response.')\n    }\n});\n\n"))),(0,o.kt)(i.Z,{value:"Puppeteer",label:"Puppeteer",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// Notice that the callback function is now async\npage.on('response', async (res) => {\n    if (!res.request().url().includes('followings')) return;\n\n    // Grab the response body in JSON format\n    try {\n        const json = await res.json();\n        console.log(json);\n    } catch (err) {\n        console.error('Response wasn't JSON or failed to parse response.')\n    }\n});\n\n")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Take notice of our usage of a ",(0,o.kt)("inlineCode",{parentName:"p"},"try...catch")," block. This is because if the response is not JSON, the ",(0,o.kt)("inlineCode",{parentName:"p"},"res.json()")," function will fail and throw an error, which we must handle to prevent any unexpected crashes.")),(0,o.kt)("p",null,"Upon running this code, we'll see the API response logged into the console:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"API response in console",src:n(28702).Z,width:"1546",height:"1186"})),(0,o.kt)("h2",{id:"intercepting-requests"},"Intercepting requests"),(0,o.kt)("p",null,"One of the most popular ways of speeding up website loading in Puppeteer and Playwright is by blocking certain resources from loading. These resources are usually CSS files, images, and other miscellaneous resources that aren't super necessary (mainly because the computer doesn't have eyes - it doesn't care how the website looks!)."),(0,o.kt)("p",null,"In Puppeteer, we must first enable request interception with the ",(0,o.kt)("inlineCode",{parentName:"p"},"page.setRequestInterception()")," function. Then, we can check whether or not the request's resource ends with one of our blocked extensions. If so, we'll abort the request. Otherwise, we'll let it continue. All of this logic will still be within the ",(0,o.kt)("inlineCode",{parentName:"p"},"page.on()")," method."),(0,o.kt)("p",null,"With Playwright, request interception is a bit different. We use the ",(0,o.kt)("a",{parentName:"p",href:"https://playwright.dev/docs/api/class-page#page-route",target:"_blank",rel:"noopener"},(0,o.kt)("inlineCode",{parentName:"a"},"page.route()"))," function instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"page.on()"),", passing in a string, regular expression, or a function that will match the URL of the request we'd like to read from. The second parameter is also a callback function, but with the ",(0,o.kt)("a",{parentName:"p",href:"https://playwright.dev/docs/api/class-route",target:"_blank",rel:"noopener"},(0,o.kt)("strong",{parentName:"a"},"Route"))," object passed into it instead."),(0,o.kt)("h3",{id:"blocking-resources"},"Blocking resources"),(0,o.kt)("p",null,"We'll first create an array of some file extensions that we'd like to block:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const blockedExtensions = ['.png', '.css', '.jpg', '.jpeg', '.pdf', '.svg'];\n")),(0,o.kt)("p",null,"Then, we'll ",(0,o.kt)("inlineCode",{parentName:"p"},"abort()")," all requests that end with any of these extensions."),(0,o.kt)(s.Z,{groupId:"main",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"Playwright",label:"Playwright",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { chromium } from 'playwright';\n\nconst browser = await chromium.launch({ headless: false });\nconst page = await browser.newPage();\n\nconst blockedExtensions = ['.png', '.css', '.jpg', '.jpeg', '.pdf', '.svg'];\n\n// Only listen for requests with one of our blocked extensions\n// Abort all matching requests\npage.route(`**/*{${blockedExtensions.join(',')}}`, async (route) => route.abort());\n\nawait page.goto('https://soundcloud.com/tiesto/following');\n\nawait page.waitForTimeout(10000);\nawait browser.close();\n\n"))),(0,o.kt)(i.Z,{value:"Puppeteer",label:"Puppeteer",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import puppeteer from 'puppeteer';\n\nconst browser = await puppeteer.launch({ headless: false });\nconst page = await browser.newPage();\n\nconst blockedExtensions = ['.png', '.css', '.jpg', '.jpeg', '.pdf', '.svg'];\n\n// Enable request interception (skipping this step will result in an error)\nawait page.setRequestInterception(true);\n\n// Listen for all requests\npage.on('request', async (req) => {\n    // If the request ends in a blocked extension, abort the request\n    if (blockedExtensions.some((str) => req.url().endsWith(str))) return req.abort();\n    // Otherwise, continue\n    await req.continue();\n});\n\nawait page.goto('https://soundcloud.com/tiesto/following');\n\nawait page.waitForTimeout(10000);\nawait browser.close();\n\n")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"You can also use ",(0,o.kt)("inlineCode",{parentName:"p"},"request.resourceType()")," to grab the resource type.")),(0,o.kt)("p",null,"Here's what we see when we run this logic:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"SoundCloud with no CSS or image resources loaded",src:n(49565).Z,width:"2522",height:"1126"})),(0,o.kt)("p",null,"This confirms that we've successfully blocked the CSS and image resources from loading."),(0,o.kt)("h4",{id:"quick-note"},"Quick note about resource blocking"),(0,o.kt)("p",null,"Something ",(0,o.kt)("strong",{parentName:"p"},"very")," important to note is that by using request interception, the browser's cache is turned ",(0,o.kt)("strong",{parentName:"p"},"off"),". This means that resources on websites that would normally be cached (and pulled from the cache instead on the next request for those resources) will not be cached, which can have varying negative effects on performance, especially when making many requests to the same domain, which is very common in web scraping. You can learn how to solve this problem in ",(0,o.kt)("a",{parentName:"p",href:"/academy/node-js/caching-responses-in-puppeteer",target:null,rel:null},"this short tutorial")),(0,o.kt)("p",null,"To block resources, it is better to use a CDP (Chrome DevTools Protocol) Session (",(0,o.kt)("a",{parentName:"p",href:"https://playwright.dev/docs/api/class-cdpsession",target:"_blank",rel:"noopener"},"Playwright"),"/",(0,o.kt)("a",{parentName:"p",href:"https://pptr.dev/#?product=Puppeteer&version=v14.1.0&show=api-class-cdpsession",target:"_blank",rel:"noopener"},"Puppeteer"),") to set the blocked URLs. Here is an implementation that achieves the same goal as our above example above; however, the browser's cache remains enabled."),(0,o.kt)(s.Z,{groupId:"main",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"Playwright",label:"Playwright",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// Note, you can't use CDP session in other browsers!\n// Only in Chromium.\nimport { chromium } from 'playwright';\n\nconst browser = await chromium.launch({ headless: false });\nconst page = await browser.newPage();\n\n// Define our blocked extensions\nconst blockedExtensions = ['.png', '.css', '.jpg', '.jpeg', '.pdf', '.svg'];\n\n// Use CDP session to block resources\nconst client = await page.context().newCDPSession();\nawait client.send('Network.setBlockedURLs', { urls: blockedExtensions });\n\nawait page.goto('https://soundcloud.com/tiesto/following');\n\nawait page.waitForTimeout(10000);\nawait browser.close();\n\n"))),(0,o.kt)(i.Z,{value:"Puppeteer",label:"Puppeteer",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import puppeteer from 'puppeteer';\n\nconst browser = await puppeteer.launch({ headless: false });\nconst page = await browser.newPage();\n\n// Define our blocked extensions\nconst blockedExtensions = ['.png', '.css', '.jpg', '.jpeg', '.pdf', '.svg'];\n\n// Use CDP session to block resources\nawait page.client().send('Network.setBlockedURLs', { urls: blockedExtensions });\n\nawait page.goto('https://soundcloud.com/tiesto/following');\n\nawait page.waitForTimeout(10000);\nawait browser.close();\n\n")))),(0,o.kt)("h3",{id:"modifyng-the-request"},"Modifying the request"),(0,o.kt)("p",null,"There's much more to intercepting requests than just aborting them though. We can change the payload, headers, query parameters, and even the base URL."),(0,o.kt)("p",null,"Let's go ahead and intercept and modify the initial request we fire off with the ",(0,o.kt)("inlineCode",{parentName:"p"},"page.goto()")," by making it go to ",(0,o.kt)("a",{parentName:"p",href:"https://soundcloud.com/mestomusic",target:"_blank",rel:"noopener"},"Mesto's following page")," instead."),(0,o.kt)(s.Z,{groupId:"main",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"Playwright",label:"Playwright",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { chromium } from 'playwright';\n\nconst browser = await chromium.launch({ headless: false });\nconst page = await browser.newPage();\n\n// Only listen for requests matching this regular expression\npage.route(/soundcloud.com\\/tiesto/, async (route) => {\n    // Continue  the route, but replace \"tiesto\" in the URL with \"mestomusic\"\n    return route.continue({ url: route.request().url().replace('tiesto', 'mestomusic') });\n});\n\nawait page.goto('https://soundcloud.com/tiesto/following');\n\nawait page.waitForTimeout(10000);\nawait browser.close();\n\n"))),(0,o.kt)(i.Z,{value:"Puppeteer",label:"Puppeteer",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import puppeteer from 'puppeteer';\n\nconst browser = await puppeteer.launch({ headless: false });\nconst page = await browser.newPage();\n\nawait page.setRequestInterception(true);\n\n// Listen for all requests\npage.on('request', async (req) => {\n    // If it doesn't match, continue the route normally\n    if (!/soundcloud.com\\/tiesto/.test(req.url())) return req.continue();\n    // Otherwise, continue  the route, but replace \"tiesto\"\n    // in the URL with \"mestomusic\"\n    await req.continue({ url: req.url().replace('tiesto', 'mestomusic') });\n});\n\nawait page.goto('https://soundcloud.com/tiesto/following');\n\nawait page.waitForTimeout(10000);\nawait browser.close();\n\n")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note that this ",(0,o.kt)("strong",{parentName:"p"},"is not")," a redirect, because Ti\xebsto's page was never even visited. The request was changed before it was even fulfilled.")),(0,o.kt)("p",null,"Here's what we see when we run ",(0,o.kt)("inlineCode",{parentName:"p"},"node index.js"),":"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Request intercepted and sent to Mesto&#39;s page instead",src:n(56666).Z,width:"1264",height:"1138"})),(0,o.kt)("h2",{id:"next"},"Next up"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"/academy/puppeteer-playwright/proxies",target:null,rel:null},"next lesson")," will teach you how to use proxies in Playwright and Puppeteer in order to avoid blocking or appear as if you are requesting from a different location."))}m.isMDXComponent=!0},85162:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(67294),r=n(86010);const o="tabItem_Ymn6";function s(e){var t=e.children,n=e.hidden,s=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,s),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>q});var a=n(87462),r=n(67294),o=n(86010),s=n(12466),i=n(16550),l=n(91980),u=n(67392),p=n(50012);function c(e){return function(e){return r.Children.map(e,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function d(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:c(n);return function(e){var t=(0,u.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function g(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function h(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,o=(0,i.k6)(),s=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:a});return[(0,l._X)(s),(0,r.useCallback)((function(e){if(s){var t=new URLSearchParams(o.location.search);t.set(s,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[s,o])]}function m(e){var t,n,a,o,s=e.defaultValue,i=e.queryString,l=void 0!==i&&i,u=e.groupId,c=d(e),m=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!g({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var r=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:s,tabValues:c})})),f=m[0],w=m[1],b=h({queryString:l,groupId:u}),k=b[0],y=b[1],v=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),n=(0,p.Nk)(t),a=n[0],o=n[1],[a,(0,r.useCallback)((function(e){t&&o.set(e)}),[t,o])]),q=v[0],N=v[1],T=function(){var e=null!=k?k:q;return g({value:e,tabValues:c})?e:null}();return(0,r.useEffect)((function(){T&&w(T)}),[T]),{selectedValue:f,selectValue:(0,r.useCallback)((function(e){if(!g({value:e,tabValues:c}))throw new Error("Can't select invalid tab value="+e);w(e),y(e),N(e)}),[y,N,c]),tabValues:c}}var f=n(72389);const w="tabList__CuJ",b="tabItem_LNqP";function k(e){var t=e.className,n=e.block,i=e.selectedValue,l=e.selectValue,u=e.tabValues,p=[],c=(0,s.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,n=p.indexOf(t),a=u[n].value;a!==i&&(c(t),l(a))},g=function(e){var t,n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var a,r=p.indexOf(e.currentTarget)+1;n=null!=(a=p[r])?a:p[0];break;case"ArrowLeft":var o,s=p.indexOf(e.currentTarget)-1;n=null!=(o=p[s])?o:p[p.length-1]}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((function(e){var t=e.value,n=e.label,s=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:function(e){return p.push(e)},onKeyDown:g,onClick:d},s,{className:(0,o.Z)("tabs__item",b,null==s?void 0:s.className,{"tabs__item--active":i===t})}),null!=n?n:t)})))}function y(e){var t=e.lazy,n=e.children,a=e.selectedValue;if(t){var o=n.find((function(e){return e.props.value===a}));return o?(0,r.cloneElement)(o,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})})))}function v(e){var t=m(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",w)},r.createElement(k,(0,a.Z)({},e,t)),r.createElement(y,(0,a.Z)({},e,t)))}function q(e){var t=(0,f.Z)();return r.createElement(v,(0,a.Z)({key:String(t)},e))}},28702:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/api-response-tiesto-dafcb582f617c9ceae890c19b8faa6c4.png"},56666:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/mesto-following-69c24904379152a5aea6cf5d6c61d4d0.webp"},85342:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/tiesto-request-e84745c5eb8edc0ec84bfeea4472ae7a.png"},49565:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/ugly-soundcloud-28eb2e994a6aca46ad03a97b7102f066.png"}}]);