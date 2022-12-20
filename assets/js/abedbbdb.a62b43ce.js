"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[5937],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,g=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},94082:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>p,toc:()=>u});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],s={title:"Modularity",description:"Before you build your first web scraper with Crawlee, it is important to understand the concept of modularity in programming.",sidebar_position:2,slug:"/web-scraping-for-beginners/challenge/modularity"},l="Modularity",p={unversionedId:"web_scraping_for_beginners/challenge/modularity",id:"web_scraping_for_beginners/challenge/modularity",title:"Modularity",description:"Before you build your first web scraper with Crawlee, it is important to understand the concept of modularity in programming.",source:"@site/sources/academy/web_scraping_for_beginners/challenge/modularity.md",sourceDirName:"web_scraping_for_beginners/challenge",slug:"/web-scraping-for-beginners/challenge/modularity",permalink:"/academy/web-scraping-for-beginners/challenge/modularity",draft:!1,tags:[],version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1671540496,formattedLastUpdatedAt:"Dec 20, 2022",sidebarPosition:2,frontMatter:{title:"Modularity",description:"Before you build your first web scraper with Crawlee, it is important to understand the concept of modularity in programming.",sidebar_position:2,slug:"/web-scraping-for-beginners/challenge/modularity"},sidebar:"defaultSidebar",previous:{title:"Initializing & setting up",permalink:"/academy/web-scraping-for-beginners/challenge/initializing-and-setting-up"},next:{title:"Scraping Amazon",permalink:"/academy/web-scraping-for-beginners/challenge/scraping-amazon"}},c={},u=[{value:" Next up",id:"-next-up",level:2}],d={toc:u};function m(e){var t=e.components,s=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"modularity"},"Modularity"),(0,o.kt)("p",null,"Now that we've gotten our first request going, the first challenge is going to be selecting all of the resulting products on the page. Back in the browser, we'll use the DevTools hover tool to inspect a product."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Result products",src:n(55064).Z,width:"1974",height:"827"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Bingo!")," Each product seems to have a ",(0,o.kt)("inlineCode",{parentName:"p"},"data-asin")," attribute, which includes the ASIN (product ID) data we want. Now, we can select each of these elements with this selector: ",(0,o.kt)("inlineCode",{parentName:"p"},'div > div[data-asin]:not([data-asin=""])'),". Then, we'll scrape some data about each product, and push a request to the main product page so we can grab hold of the description."),(0,o.kt)("p",null,"But, before we start scraping, let's pause to talk a bit about the important concept of ",(0,o.kt)("strong",{parentName:"p"},"modularity"),". You may have noticed the ",(0,o.kt)("strong",{parentName:"p"},"src")," folder inside of your project, which by default has a ",(0,o.kt)("strong",{parentName:"p"},"routes.js")," file in it. We're going to use this to create modularized functions which can then be conditionally executed by our crawler."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// routes.js\nimport { createCheerioRouter } from 'crawlee';\nimport { BASE_URL } from './constants.js';\n\nexport const router = createCheerioRouter();\n\nrouter.addDefaultHandler(({ log }) => {\n    log.info('Route reached.');\n});\n\n// Add a handler to our router to handle requests with the 'START' label\nrouter.addHandler('START', async ({ $, crawler, request }) => {\n    const { keyword } = request.userData;\n\n    const products = $('div > div[data-asin]:not([data-asin=\"\"])');\n\n    // loop through the resulting products\n    for (const product of products) {\n        const element = $(product);\n        const titleElement = $(element.find('.a-text-normal[href]'));\n\n        const url = `${BASE_URL}${titleElement.attr('href')}`;\n\n        // scrape some data from each and to a request\n        // to the crawler for its page\n        await crawler.addRequests([{\n            url,\n            label: 'PRODUCT',\n            userData: {\n                // Pass the scraped data about the product to the next\n                // request so that it can be used there\n                data: {\n                    title: titleElement.first().text().trim(),\n                    asin: element.attr('data-asin'),\n                    itemUrl: url,\n                    keyword,\n                },\n            },\n        }]);\n    }\n});\n\nrouter.addHandler('PRODUCT', ({ log }) => log.info('on a product page!'));\n")),(0,o.kt)("p",null,"Also notice that we are importing ",(0,o.kt)("inlineCode",{parentName:"p"},"BASE_URL")," from ",(0,o.kt)("strong",{parentName:"p"},"constants.js"),". Here is what that file looks like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// constants.js\nexport const BASE_URL = 'https://www.amazon.com';\n")),(0,o.kt)("p",null,"And here is what our ",(0,o.kt)("strong",{parentName:"p"},"main.js")," file currently looks like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// main.js\nimport { CheerioCrawler, log } from 'crawlee';\nimport { router } from './routes.js';\nimport { BASE_URL } from './constants.js';\n\nconst { keyword = 'iphone' } = (await KeyValueStore.getInput()) ?? {};\n\nconst crawler = new CheerioCrawler({\n    requestHandler: router,\n});\n\nawait crawler.addRequests([\n    {\n        // Use BASE_URL here instead\n        url: `${BASE_URL}/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=${keyword}`,\n        label: 'START',\n        userData: {\n            keyword,\n        },\n    },\n])\n\nlog.info('Starting the crawl.');\nawait crawler.run();\nlog.info('Crawl finished.');\n")),(0,o.kt)("p",null,"One of the main reasons we ",(0,o.kt)("strong",{parentName:"p"},"modularize")," our code is to prevent massive and difficult to read files by separating concerns into separate files. In our ",(0,o.kt)("strong",{parentName:"p"},"main.js")," file, we're  handling the initialization, configuration, and running of our crawler. In ",(0,o.kt)("strong",{parentName:"p"},"routes.js"),", we determine how the crawler should handle different routes, and in ",(0,o.kt)("strong",{parentName:"p"},"consts.js")," we define non-changing values that will be used throughout the project."),(0,o.kt)("p",null,"Organized code makes everyone happy, including you - the one developing the scraper! Spaghetti is super awesome, ",(0,o.kt)("a",{parentName:"p",href:"https://www.urbandictionary.com/define.php?term=spaghetti+code",target:"_blank",rel:"noopener"},"but not when it comes to programming")," \ud83c\udf5d"),(0,o.kt)("p",null,"This can even be optimized further by putting our ",(0,o.kt)("inlineCode",{parentName:"p"},"label")," items into ",(0,o.kt)("strong",{parentName:"p"},"constants.js"),", like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// constants.js\nexport const BASE_URL = 'https://www.amazon.com';\n\nexport const labels = {\n    START: 'START',\n    PRODUCT: 'PRODUCT',\n    OFFERS: 'OFFERS',\n};\n")),(0,o.kt)("p",null,"Then, the labels can be used by importing ",(0,o.kt)("inlineCode",{parentName:"p"},"labels")," and accessing ",(0,o.kt)("inlineCode",{parentName:"p"},"labels.START"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"labels.PRODUCT"),", or ",(0,o.kt)("inlineCode",{parentName:"p"},"labels.OFFERS"),"."),(0,o.kt)("p",null,"This is not necessary, but it is best practice, as it can prevent dumb typos that can cause nasty bugs \ud83d\udc1e For the rest of this lesson, all of the examples using labels will be using the imported versions."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If you haven't already read the ",(0,o.kt)("strong",{parentName:"p"},"Best practices")," lesson in the ",(0,o.kt)("strong",{parentName:"p"},"Web scraping for beginners")," course, please ",(0,o.kt)("a",{parentName:"p",href:"/academy/web-scraping-for-beginners/best-practices",target:null,rel:null},"give it a read"),".")),(0,o.kt)("h2",{id:"-next-up"},(0,o.kt)("a",{parentName:"h2",href:"#next",target:null,rel:null})," Next up"),(0,o.kt)("p",null,"Now that we've gotten that out of the way, we can finally continue with our Amazon scraper. ",(0,o.kt)("a",{parentName:"p",href:"/academy/web-scraping-for-beginners/challenge/scraping-amazon",target:null,rel:null},"Let's do it"),"!"))}m.isMDXComponent=!0},55064:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/result-items-3364de03b1e49d2083945c8b52bb8fde.webp"}}]);