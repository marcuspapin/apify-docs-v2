"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[6141],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>w});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(a),w=n,d=m["".concat(l,".").concat(w)]||m[w]||u[w]||s;return a?r.createElement(d,i(i({ref:t},c),{},{components:a})):r.createElement(d,i({ref:t},c))}));function w(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,i=new Array(s);i[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var p=2;p<s;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},84064:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>w,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var r=a(87462),n=a(63366),s=(a(67294),a(3905)),i=["components"],o={title:"Scrape websites using the sitemap",description:"The sitemap.xml file is a jackpot for every web scraper. Take advantage of this and learn a much easier way to extract data from websites using the Apify SDK.",sidebar_position:3.9,slug:"/tutorials/scrape-websites-using-the-sitemap"},l="Scrape websites using the sitemap",p={unversionedId:"tutorials/scrape_websites_using_the_sitemap",id:"tutorials/scrape_websites_using_the_sitemap",title:"Scrape websites using the sitemap",description:"The sitemap.xml file is a jackpot for every web scraper. Take advantage of this and learn a much easier way to extract data from websites using the Apify SDK.",source:"@site/sources/platform/tutorials/scrape_websites_using_the_sitemap.md",sourceDirName:"tutorials",slug:"/tutorials/scrape-websites-using-the-sitemap",permalink:"/platform/tutorials/scrape-websites-using-the-sitemap",draft:!1,tags:[],version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1673462256,formattedLastUpdatedAt:"Jan 11, 2023",sidebarPosition:3.9,frontMatter:{title:"Scrape websites using the sitemap",description:"The sitemap.xml file is a jackpot for every web scraper. Take advantage of this and learn a much easier way to extract data from websites using the Apify SDK.",sidebar_position:3.9,slug:"/tutorials/scrape-websites-using-the-sitemap"},sidebar:"docs",previous:{title:"Crawl URLs from a Google Sheet",permalink:"/platform/tutorials/crawl-urls-from-a-google-sheet"},next:{title:"How to analyze pages and fix errors",permalink:"/platform/tutorials/analyze-pages-and-fix-errors"}},c={},u=[{value:" The sitemap",id:"-the-sitemap",level:2},{value:" Using the sitemap in Apify SDK and Crawlee",id:"-using-the-sitemap-in-apify-sdk-and-crawlee",level:2},{value:" Full code example",id:"-full-code-example",level:2}],m={toc:u};function w(e){var t=e.components,a=(0,n.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"scrape-websites-using-the-sitemap"},"Scrape websites using the sitemap"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"The sitemap.xml file is a jackpot for every web scraper. Take advantage of this and learn a much easier way to extract data from websites using the Apify SDK.")),(0,s.kt)("hr",null),(0,s.kt)("p",null,"Let's say we want to scrape a database of craft beers (",(0,s.kt)("a",{parentName:"p",href:"https://www.brewbound.com",target:"_blank",rel:"noopener"},"brewbound.com"),") before summer starts. If we are lucky, the website will contain a sitemap at ",(0,s.kt)("a",{parentName:"p",href:"https://www.brewbound.com/sitemap.xml",target:"_blank",rel:"noopener"},"https://www.brewbound.com/sitemap.xml"),"."),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Check out ",(0,s.kt)("a",{parentName:"p",href:"https://apify.com/vaclavrut/sitemap-sniffer",target:"_blank",rel:"noopener"},"Sitemap Sniffer")," tool, which can discover sitemaps in hidden locations.")),(0,s.kt)("h2",{id:"-the-sitemap"},(0,s.kt)("a",{parentName:"h2",href:"#the-sitemap",target:null,rel:null})," The sitemap"),(0,s.kt)("p",null,"The sitemap is usually located at the path ",(0,s.kt)("inlineCode",{parentName:"p"},"/sitemap.xml"),". It is always worth trying that URL, as it is rarely linked anywhere on the site. It usually contains a list of all pages in ",(0,s.kt)("a",{parentName:"p",href:"https://www.w3.org/standards/xml/core",target:"_blank",rel:"noopener"},"XML format"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n    <url>\n        <loc>http://www.brewbound.com/advertise</loc>\n        <lastmod>2015-03-19</lastmod>\n        <changefreq>daily</changefreq>\n    </url>\n    <url>\n    ...\n')),(0,s.kt)("p",null,"The URLs of breweries are in the form"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cURL"},"http://www.brewbound.com/breweries/[BREWERY_NAME]\n")),(0,s.kt)("p",null,"and the URLs of craft beers are in the form"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cURL"},"http://www.brewbound.com/breweries/[BREWERY_NAME]/[BEER_NAME]\n")),(0,s.kt)("p",null,"They can be matched with the following regular expression (regex)."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cURL"},"/http(s)?:\\/\\/www\\.brewbound\\.com\\/breweries\\/[^\\/]+\\/[^\\/<]+/gm\n")),(0,s.kt)("p",null,"Note the two parts of the regular expression ",(0,s.kt)("inlineCode",{parentName:"p"},"[^\\/<]")," containing ",(0,s.kt)("inlineCode",{parentName:"p"},"<"),". This is because we want to exclude the ",(0,s.kt)("inlineCode",{parentName:"p"},"</loc>")," tag, which closes each URL."),(0,s.kt)("h2",{id:"-using-the-sitemap-in-apify-sdk-and-crawlee"},(0,s.kt)("a",{parentName:"h2",href:"#using-the-sitemap-in-apify-sdk",target:null,rel:null})," Using the sitemap in Apify SDK and Crawlee"),(0,s.kt)("p",null,"Our ",(0,s.kt)("a",{parentName:"p",href:"https://crawlee.dev/",target:"_blank",rel:"noopener"},"web scraping and automation library")," is well-suited for scraping with sitemaps."),(0,s.kt)("p",null,"First, let's import the beer URLs from the sitemap to ",(0,s.kt)("a",{parentName:"p",href:"https://crawlee.dev/api/core/class/RequestList",target:"_blank",rel:"noopener"},"RequestList")," using our regular expression to match only the (craft!) beer URLs and not pages of breweries, contact page, etc."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const requestList = await RequestList.open(null, [{\n    requestsFromUrl: 'https://www.brewbound.com/sitemap.xml',\n    regex: /http(s)?:\\/\\/www\\.brewbound\\.com\\/breweries\\/[^\\/<]+\\/[^\\/<]+/gm,\n}]);\n")),(0,s.kt)("p",null,"Now, let's use ",(0,s.kt)("a",{parentName:"p",href:"https://crawlee.dev/api/puppeteer-crawler/class/PuppeteerCrawler",target:"_blank",rel:"noopener"},"PuppeteerCrawler")," to scrape the created ",(0,s.kt)("a",{parentName:"p",href:"hhttps://crawlee.dev/api/core/class/RequestList",target:"_blank",rel:"noopener"},"RequestList")," with ",(0,s.kt)("a",{parentName:"p",href:"https://pptr.dev",target:"_blank",rel:"noopener"},"Puppeteer")," and push it to the final dataset."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const crawler = new PuppeteerCrawler({\n    requestList,\n    async requestHandler({ page }) {\n        const beerPage = await page.evaluate(() => {\n            return document.getElementsByClassName('productreviews').length;\n        });\n        if (!beerPage) return;\n\n        const data = await page.evaluate(() => {\n            const title = document.getElementsByTagName('h1')[0].innerText;\n            const [brewery, beer] = title.split(':');\n            const description = document.getElementsByClassName('productreviews')[0].innerText;\n\n            return { brewery, beer, description };\n        });\n\n        await Actor.pushData(data);\n    },\n});\n")),(0,s.kt)("h2",{id:"-full-code-example"},(0,s.kt)("a",{parentName:"h2",href:"#full-code-example",target:null,rel:null})," Full code example"),(0,s.kt)("p",null,"If we create a new actor using the code below on the ",(0,s.kt)("a",{parentName:"p",href:"https://console.apify.com/actors",target:"_blank",rel:"noopener"},"Apify platform"),", it returns a nicely formatted spreadsheet containing a list of breweries with their beers and descriptions."),(0,s.kt)("p",null,"Make sure to use the ",(0,s.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/apify/actor-node-puppeteer-chrome",target:"_blank",rel:"noopener"},(0,s.kt)("inlineCode",{parentName:"a"},"apify/actor-node-puppeteer-chrome"))," ",(0,s.kt)("a",{parentName:"p",href:"/platform/actors/development/base-docker-images",target:null,rel:null},"image")," for your Dockerfile, otherwise the run will fail."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"import { Actor } from 'apify';\nimport { RequestList, PuppeteerCrawler } from 'crawlee';\n\nawait Actor.init();\n\nconst requestList = await RequestList.open(null, [{\n    requestsFromUrl: 'https://www.brewbound.com/sitemap.xml',\n    regex: /http(s)?:\\/\\/www\\.brewbound\\.com\\/breweries\\/[^\\/<]+\\/[^\\/<]+/gm,\n}]);\n\nconst crawler = new PuppeteerCrawler({\n    requestList,\n    async requestHandler({ page }) {\n        const beerPage = await page.evaluate(() => {\n            return document.getElementsByClassName('productreviews').length;\n        });\n        if (!beerPage) return;\n\n        const data = await page.evaluate(() => {\n            const title = document.getElementsByTagName('h1')[0].innerText;\n            const [brewery, beer] = title.split(':');\n            const description = document.getElementsByClassName('productreviews')[0].innerText;\n\n            return { brewery, beer, description };\n        });\n\n        await Actor.pushData(data);\n    },\n});\n\nawait crawler.run();\n\nawait Actor.exit();\n")))}w.isMDXComponent=!0}}]);