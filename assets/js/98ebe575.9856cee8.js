"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[4511],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>h});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(t),h=o,g=d["".concat(s,".").concat(h)]||d[h]||u[h]||a;return t?n.createElement(g,i(i({ref:r},p),{},{components:t})):n.createElement(g,i({ref:r},p))}));function h(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},57710:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var n=t(87462),o=t(63366),a=(t(67294),t(3905)),i=["components"],l={title:"Your first crawl",description:"Learn how to crawl the web using Node.js, Cheerio and an HTTP client. Collect URLs from pages and use them to visit more websites.",sidebar_position:5,slug:"/web-scraping-for-beginners/crawling/first-crawl"},s="[](#your-first-crawl) Your first crawl",c={unversionedId:"web_scraping_for_beginners/crawling/first_crawl",id:"web_scraping_for_beginners/crawling/first_crawl",title:"Your first crawl",description:"Learn how to crawl the web using Node.js, Cheerio and an HTTP client. Collect URLs from pages and use them to visit more websites.",source:"@site/sources/academy/web_scraping_for_beginners/crawling/first_crawl.md",sourceDirName:"web_scraping_for_beginners/crawling",slug:"/web-scraping-for-beginners/crawling/first-crawl",permalink:"/academy/web-scraping-for-beginners/crawling/first-crawl",draft:!1,tags:[],version:"current",lastUpdatedBy:"Jind\u0159ich B\xe4r",lastUpdatedAt:1672923705,formattedLastUpdatedAt:"Jan 5, 2023",sidebarPosition:5,frontMatter:{title:"Your first crawl",description:"Learn how to crawl the web using Node.js, Cheerio and an HTTP client. Collect URLs from pages and use them to visit more websites.",sidebar_position:5,slug:"/web-scraping-for-beginners/crawling/first-crawl"},sidebar:"defaultSidebar",previous:{title:"Relative URLs",permalink:"/academy/web-scraping-for-beginners/crawling/relative-urls"},next:{title:"Scraping data",permalink:"/academy/web-scraping-for-beginners/crawling/scraping-the-data"}},p={},u=[{value:" Processing URLs",id:"-processing-urls",level:2},{value:" Handling errors",id:"-handling-errors",level:2},{value:" Next up",id:"-next-up",level:2}],d={toc:u};function h(e){var r=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"-your-first-crawl"},(0,a.kt)("a",{parentName:"h1",href:"#your-first-crawl",target:null,rel:null})," Your first crawl"),(0,a.kt)("p",null,"In the previous lessons, we learned what crawling is and how to collect URLs from a page's HTML. The only thing that remains is to write the code - so let's get right to it!"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"If the code starts to look too complex for you, don't worry. We're showing it for educational purposes, so that you can learn how crawling works. Near the end of this module, we'll show you a much easier and faster way to crawl, using a specialized scraping library. If you want, you can skip the details and ",(0,a.kt)("a",{parentName:"p",href:"/academy/web-scraping-for-beginners/crawling/pro-scraping",target:null,rel:null},"go there now"),".")),(0,a.kt)("h2",{id:"-processing-urls"},(0,a.kt)("a",{parentName:"h2",href:"#processing-urls",target:null,rel:null})," Processing URLs"),(0,a.kt)("p",null,"In the previous lessons, we collected and filtered all the URLs pointing to individual products on our beloved ",(0,a.kt)("a",{parentName:"p",href:"https://demo-webstore.apify.org/",target:"_blank",rel:"noopener"},"demo e-commerce site"),". To crawl the URLs, we can't print them to the console, but rather we need to save them for future use. Once we do that, we must take this list of URLs and download the HTML of each of the pages. See the comments for changes and additions to the code."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// crawler.js\nimport { gotScraping } from 'got-scraping';\nimport cheerio from 'cheerio';\n\nconst WEBSITE_URL = 'https://demo-webstore.apify.org/';\n\nconst response = await gotScraping('https://demo-webstore.apify.org/');\nconst html = response.body;\n\nconst $ = cheerio.load(html);\n\nconst productLinks = $('a[href*=\"/product/\"]');\n\n// Prepare an empty array for our product Urls\nconst productsToScrape = [];\n\nfor (const link of productLinks) {\n    const relativeUrl = $(link).attr('href');\n    const absoluteUrl = new URL(relativeUrl, WEBSITE_URL);\n\n    // add each product link to our array\n    productsToScrape.push(absoluteUrl.href);\n}\n\n// Loop over the stored URLs to process each\n// product page individually\nfor (const link of productsToScrape) {\n    // Download HTML.\n    const productResponse = await gotScraping(link);\n    const productHTML = productResponse.body;\n\n    // Load into Cheerio to test the HTML.\n    // We use $$ to avoid confusion with $ variable above.\n    const $$ = cheerio.load(productHTML);\n\n    // Extract the product's title from the <h3> tag\n    const productPageTitle = $$('h3').text();\n\n    // Print the title to the terminal to see\n    // whether we downloaded the correct HTML.\n    console.log(productPageTitle);\n}\n")),(0,a.kt)("p",null,"If you run the crawler from your terminal, it should print the titles."),(0,a.kt)("h2",{id:"-handling-errors"},(0,a.kt)("a",{parentName:"h2",href:"#handling-errors",target:null,rel:null})," Handling errors"),(0,a.kt)("p",null,"The code above is correct, but it's not robust. If something goes wrong, it will crash. That something could be a network error, an internet connection error, or just that one of the websites you're trying to reach could simply be experiencing problems at that moment. Hitting any error like that would cause our current crawler to stop entirely, which means we would lose all the data it had collected so far."),(0,a.kt)("p",null,"In programming, you handle errors by catching them and then doing some action. Typically, printing information that the error occurred and/or retrying."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The scraping library we'll ",(0,a.kt)("a",{parentName:"p",href:"/academy/web-scraping-for-beginners/crawling/pro-scraping",target:null,rel:null},"show you later")," will handle errors and retries automatically for you.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// crawler.js\nimport { gotScraping } from 'got-scraping';\nimport cheerio from 'cheerio';\n\nconst WEBSITE_URL = 'https://demo-webstore.apify.org/';\n\nconst response = await gotScraping('https://demo-webstore.apify.org/');\nconst html = response.body;\nconst $ = cheerio.load(html);\n\nconst productLinks = $('a[href*=\"/product/\"]');\n\nconst productsToScrape = [];\nfor (const link of productLinks) {\n    const relativeUrl = $(link).attr('href');\n    const absoluteUrl = new URL(relativeUrl, WEBSITE_URL);\n    productsToScrape.push(absoluteUrl.href);\n}\n\nfor (const link of productsToScrape) {\n    // Everything else is exactly the same.\n    // We only wrapped the code in try/catch blocks.\n    // The try block passes all errors into the catch block.\n    // So, instead of crashing the crawler, they can be handled.\n    try {\n        // The try block attempts to execute our code\n        const productResponse = await gotScraping(link);\n        const productHTML = productResponse.body;\n        const $$ = cheerio.load(productHTML);\n        const productPageTitle = $$('h3').text();\n        console.log(productPageTitle);\n    } catch (error) {\n        // In the catch block, we handle errors.\n        // This time, we will just print\n        // the error message and the url.\n        console.error(error.message, link)\n    }\n}\n")),(0,a.kt)("p",null,"At the time of writing, none of the links have failed; however, in your crawling endeavors, you will surely hit a few errors \ud83d\ude09. The important thing is that the crawler no longer crashes if an error does in fact occur, and that it was able to download the HTML from each product's link."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"If you thought that the crawl was taking too long to complete, the ",(0,a.kt)("a",{parentName:"p",href:"/academy/web-scraping-for-beginners/crawling/pro-scraping",target:null,rel:null},"scraping library")," we keep referring to will help once again. It automatically parallelizes the downloads and processing of HTML, which leads to significant speed improvements.")),(0,a.kt)("h2",{id:"-next-up"},(0,a.kt)("a",{parentName:"h2",href:"#next",target:null,rel:null})," Next up"),(0,a.kt)("p",null,"In the ",(0,a.kt)("a",{parentName:"p",href:"/academy/web-scraping-for-beginners/crawling/scraping-the-data",target:null,rel:null},"next lesson")," section and applying it to all of the product pages."))}h.isMDXComponent=!0}}]);