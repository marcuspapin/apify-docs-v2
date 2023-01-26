"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[6956],{3905:(e,r,a)=>{a.d(r,{Zo:()=>p,kt:()=>w});var t=a(67294);function n(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function s(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?s(Object(a),!0).forEach((function(r){n(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function i(e,r){if(null==e)return{};var a,t,n=function(e,r){if(null==e)return{};var a,t,n={},s=Object.keys(e);for(t=0;t<s.length;t++)a=s[t],r.indexOf(a)>=0||(n[a]=e[a]);return n}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)a=s[t],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=t.createContext({}),c=function(e){var r=t.useContext(l),a=r;return e&&(a="function"==typeof e?e(r):o(o({},r),e)),a},p=function(e){var r=c(e.components);return t.createElement(l.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},h=t.forwardRef((function(e,r){var a=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),h=c(a),w=n,u=h["".concat(l,".").concat(w)]||h[w]||d[w]||s;return a?t.createElement(u,o(o({ref:r},p),{},{components:a})):t.createElement(u,o({ref:r},p))}));function w(e,r){var a=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var s=a.length,o=new Array(s);o[0]=h;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var c=2;c<s;c++)o[c]=a[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}h.displayName="MDXCreateElement"},15164:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>p,contentTitle:()=>l,default:()=>w,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var t=a(87462),n=a(63366),s=(a(67294),a(3905)),o=["components"],i={title:"Headless browsers",description:"Learn how to scrape the web with a headless browser using only a few lines of code. Chrome, Firefox, Safari, Edge - all are supported.",sidebar_position:8,slug:"/web-scraping-for-beginners/crawling/headless-browser"},l="Headless browsers",c={unversionedId:"webscraping/web_scraping_for_beginners/crawling/headless_browser",id:"webscraping/web_scraping_for_beginners/crawling/headless_browser",title:"Headless browsers",description:"Learn how to scrape the web with a headless browser using only a few lines of code. Chrome, Firefox, Safari, Edge - all are supported.",source:"@site/sources/academy/webscraping/web_scraping_for_beginners/crawling/headless_browser.md",sourceDirName:"webscraping/web_scraping_for_beginners/crawling",slug:"/web-scraping-for-beginners/crawling/headless-browser",permalink:"/academy/web-scraping-for-beginners/crawling/headless-browser",draft:!1,tags:[],version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1674755822,formattedLastUpdatedAt:"Jan 26, 2023",sidebarPosition:8,frontMatter:{title:"Headless browsers",description:"Learn how to scrape the web with a headless browser using only a few lines of code. Chrome, Firefox, Safari, Edge - all are supported.",sidebar_position:8,slug:"/web-scraping-for-beginners/crawling/headless-browser"},sidebar:"academy",previous:{title:"Professional scraping",permalink:"/academy/web-scraping-for-beginners/crawling/pro-scraping"},next:{title:"Processing data",permalink:"/academy/web-scraping-for-beginners/crawling/processing-data"}},p={},d=[{value:"Building a Playwright scraper",id:"playwright-scraper",level:2},{value:"Running in headless mode",id:"running-headless",level:2},{value:"Environment variable",id:"headless-env-var",level:3},{value:"Scraper code",id:"headless-code",level:3},{value:"Next up",id:"next",level:2}],h={toc:d};function w(e){var r=e.components,a=(0,n.Z)(e,o);return(0,s.kt)("wrapper",(0,t.Z)({},h,a,{components:r,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"headless-browser"},"Headless browsers"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Learn how to scrape the web with a headless browser using only a few lines of code. Chrome, Firefox, Safari, Edge - all are supported.")),(0,s.kt)("hr",null),(0,s.kt)("p",null,"A headless browser is simply a browser that runs without a user interface (UI). This means that it's normally controlled by automated scripts. Headless browsers are very popular in scraping because they can help you render JavaScript or programmatically behave like a human user to prevent blocking. The two most popular libraries for controlling headless browsers are ",(0,s.kt)("a",{parentName:"p",href:"https://pptr.dev/",target:"_blank",rel:"noopener"},"Puppeteer")," and ",(0,s.kt)("a",{parentName:"p",href:"https://playwright.dev/",target:"_blank",rel:"noopener"},"Playwright"),". ",(0,s.kt)("strong",{parentName:"p"},"Crawlee")," supports both."),(0,s.kt)("h2",{id:"playwright-scraper"},"Building a Playwright scraper"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"We'll be focusing on Playwright today, as it was developed by the same team that created Puppeteer, and it is newer with more features and better documentation.")),(0,s.kt)("p",null,"Building a Playwright scraper with Crawlee is extremely easy. To show you how easy it really is, we'll reuse the Cheerio scraper code from the previous lesson. By changing only a few lines of code, we'll turn it into a full headless scraper."),(0,s.kt)("p",null,"First, we must not forget to install Playwright into our project."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"npm install playwright\n")),(0,s.kt)("p",null,"After Playwright installs, we can proceed with updating the scraper code. As always, the comments describe changes in the code. Everything else is the same as before."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// crawlee.js\nimport { PlaywrightCrawler, Dataset } from 'crawlee';\n// Don't forget to import cheerio, we will need it later.\nimport cheerio from 'cheerio';\n\n// Replace CheerioCrawler with PlaywrightCrawler\nconst crawler = new PlaywrightCrawler({\n    requestHandler: async ({ page, request, enqueueLinks }) => {\n        // Here, we extract the HTML from the browser and parse\n        // it with Cheerio. Thanks to that we can use exactly\n        // the same code as before, when using CheerioCrawler.\n        const $ = cheerio.load(await page.content());\n\n        if (request.userData.label === 'START') {\n            await enqueueLinks({\n                selector: 'a[href*=\"/product/\"]',\n                baseUrl: new URL(request.url).origin,\n            });\n\n            // When on the START page, we don't want to\n            // extract any data after we extract the links.\n            return;\n        }\n\n        // We copied and pasted the extraction code\n        // from the previous lesson\n        const title = $('h3').text().trim();\n        const price = $('h3 + div').text().trim();\n        const description = $('div[class*=\"Text_body\"]').text().trim();\n\n        // Because we're using a browser, we can now access\n        // dynamically loaded data. Our target site has\n        // dynamically loaded images.\n        const imageRelative = $('img[alt=\"Product Image\"]').attr('src');\n        const base = new URL(request.url).origin;\n        const image = new URL(imageRelative, base).href;\n\n        // Instead of saving the data to a variable,\n        // we immediately save everything to a file.\n        await Dataset.pushData({\n            title,\n            description,\n            price,\n            image,\n        });\n    },\n});\n\nawait crawler.addRequests([{\n    url: 'https://demo-webstore.apify.org/search/on-sale',\n    // By labeling the Request, we can very easily\n    // identify it later in the requestHandler.\n    userData: {\n        label: 'START',\n    },\n}]);\n\nawait crawler.run();\n")),(0,s.kt)("p",null,"Yup, that's it. To quickly recap, we added 2 lines and changed 1 line of code to transform our crawler from a static HTTP request crawler to a headless-browser crawler. The scraper now runs exactly the same as before, but using a full Chromium browser instead of plain HTTP requests and Cheerio. This is a taste of the true power of Crawlee."),(0,s.kt)("p",null,"Notice that we are also scraping a new piece of data - ",(0,s.kt)("inlineCode",{parentName:"p"},"image"),". We were unable to access this content before with Cheerio, as it is dynamically loaded in. If you're confused about the differences between PlaywrightCrawler/PuppeteerCrawler and CheerioCrawler, and why one might choose one over the other, give ",(0,s.kt)("a",{parentName:"p",href:"https://blog.apify.com/what-is-a-dynamic-page/",target:"_blank",rel:"noopener"},"this short article")," about dynamic pages a quick read-over."),(0,s.kt)("p",null,"Using Playwright in combination with Cheerio like this is only one of many ways how you can utilize Playwright (and Puppeteer) with Crawlee. In the advanced courses of the Academy, we will go deeper into using headless browsers for scraping and web automation (RPA) use-cases."),(0,s.kt)("h2",{id:"running-headless"},"Running in headless mode"),(0,s.kt)("p",null,"We said that headless browsers didn't have a UI, but while scraping with the above scraper code, we're sure your screen was full of browser tabs. That's because in Crawlee, browsers run ",(0,s.kt)("strong",{parentName:"p"},"headful")," (with a UI) by default. This is useful for debugging and seeing what's going on in the browser. Once the scraper is complete, we switch it to ",(0,s.kt)("strong",{parentName:"p"},"headless")," mode using one of two methods:"),(0,s.kt)("h3",{id:"headless-env-var"},"Environment variable"),(0,s.kt)("p",null,"This is the programmer's preferred solution, because you don't have to change the source code to change the behavior. All you need to do is set the ",(0,s.kt)("a",{parentName:"p",href:"https://crawlee.dev/docs/guides/configuration#crawlee_headless",target:"_blank",rel:"noopener"},(0,s.kt)("inlineCode",{parentName:"a"},"CRAWLEE_HEADLESS=1"))," environment variable when running your scraper, and it will automatically run headless. For example like this:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-marked-tabs"},'<marked-tab header="MacOS/Linux" lang="shell">\nCRAWLEE_HEADLESS=1 node crawlee.js\n</marked-tab>\n<marked-tab header="Windows CMD" lang="shell">\nset CRAWLEE_HEADLESS=1 && node crawlee.js\n</marked-tab>\n<marked-tab header="Windows Powershell" lang="shell">\n$env:CRAWLEE_HEADLESS=1; & node crawlee.js\n</marked-tab>\n')),(0,s.kt)("h3",{id:"headless-code"},"Scraper code"),(0,s.kt)("p",null,"If you always want the scraper to run headless, it might be better to hardcode it in the source. To do that, we need to access ",(0,s.kt)("a",{parentName:"p",href:"https://playwright.dev/docs/api/class-browsertype#browser-type-launch-option-headless",target:"_blank",rel:"noopener"},"Playwright's launch options"),". In Crawlee we can do that ",(0,s.kt)("a",{parentName:"p",href:"https://crawlee.dev/api/playwright-crawler/interface/PlaywrightLaunchContext",target:"_blank",rel:"noopener"},"in the ",(0,s.kt)("inlineCode",{parentName:"a"},"PlaywrightCrawler")," constructor"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const crawler = new PlaywrightCrawler({\n    launchContext: {\n        launchOptions: {\n            headless: true, // setting headless in code\n        },\n    },\n    requestHandler: async ({ page, request }) => {\n        // ...\n    },\n    // ...\n});\n")),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://crawlee.dev/api/puppeteer-crawler/class/PuppeteerCrawler#launchContext",target:"_blank",rel:"noopener"},(0,s.kt)("inlineCode",{parentName:"a"},"launchContext"))," and ",(0,s.kt)("a",{parentName:"p",href:"https://playwright.dev/docs/api/class-browsertype#browser-type-launch",target:"_blank",rel:"noopener"},(0,s.kt)("inlineCode",{parentName:"a"},"launchOptions"))," give you control over launching browsers with Crawlee."),(0,s.kt)("h2",{id:"next"},"Next up"),(0,s.kt)("p",null,"We learned how to scrape with Cheerio and Playwright, but how do we process the scraped data? Let's learn that in the ",(0,s.kt)("a",{parentName:"p",href:"/academy/web-scraping-for-beginners/crawling/processing-data",target:null,rel:null},"next lesson"),"."))}w.isMDXComponent=!0}}]);