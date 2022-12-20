"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[7853],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>w});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(a),d=n,w=m["".concat(l,".").concat(d)]||m[d]||u[d]||s;return a?r.createElement(w,o(o({ref:t},c),{},{components:a})):r.createElement(w,o({ref:t},c))}));function w(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,o=new Array(s);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[m]="string"==typeof e?e:n,o[1]=i;for(var p=2;p<s;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},50556:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>m});var r=a(87462),n=a(63366),s=(a(67294),a(3905)),o=["components"],i={title:"How to scrape from sitemaps",description:"The sitemap.xml file is a jackpot for every web scraper developer. Take advantage of this and learn an easier way to extract data from websites using Crawlee.",sidebar_position:14.7,slug:"/node-js/scraping-from-sitemaps"},l="[](#scraping-with-sitemaps) How to scrape from sitemaps",p={unversionedId:"node_js/scraping_from_sitemaps",id:"node_js/scraping_from_sitemaps",title:"How to scrape from sitemaps",description:"The sitemap.xml file is a jackpot for every web scraper developer. Take advantage of this and learn an easier way to extract data from websites using Crawlee.",source:"@site/sources/academy/node_js/scraping_from_sitemaps.md",sourceDirName:"node_js",slug:"/node-js/scraping-from-sitemaps",permalink:"/academy/node-js/scraping-from-sitemaps",draft:!1,tags:[],version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1671540496,formattedLastUpdatedAt:"Dec 20, 2022",sidebarPosition:14.7,frontMatter:{title:"How to scrape from sitemaps",description:"The sitemap.xml file is a jackpot for every web scraper developer. Take advantage of this and learn an easier way to extract data from websites using Crawlee.",sidebar_position:14.7,slug:"/node-js/scraping-from-sitemaps"},sidebar:"defaultSidebar",previous:{title:"How to optimize and speed up your web scraper",permalink:"/academy/node-js/optimizing-scrapers"},next:{title:"How to scrape sites with a shadow DOM",permalink:"/academy/node-js/scraping-shadow-doms"}},c={},m=[{value:" Analyzing the sitemap",id:"-analyzing-the-sitemap",level:2},{value:" Scraping the sitemap in Crawlee",id:"-scraping-the-sitemap-in-crawlee",level:2},{value:" Full code",id:"-full-code",level:2}],u={toc:m};function d(e){var t=e.components,a=(0,n.Z)(e,o);return(0,s.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"-how-to-scrape-from-sitemaps"},(0,s.kt)("a",{parentName:"h1",href:"#scraping-with-sitemaps",target:null,rel:null})," How to scrape from sitemaps"),(0,s.kt)("p",null,"Let's say we want to scrape a database of craft beers (",(0,s.kt)("a",{parentName:"p",href:"https://brewbound.com",target:"_blank",rel:"noopener"},"brewbound.com"),") before summer starts. If we are lucky, the website will contain a sitemap at ",(0,s.kt)("a",{parentName:"p",href:"https://www.brewbound.com/sitemap.xml",target:"_blank",rel:"noopener"},"https://www.brewbound.com/sitemap.xml"),"."),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Check out ",(0,s.kt)("a",{parentName:"p",href:"https://apify.com/vaclavrut/sitemap-sniffer",target:"_blank",rel:"noopener"},"Sitemap Sniffer"),", which can discover sitemaps in hidden locations!")),(0,s.kt)("h2",{id:"-analyzing-the-sitemap"},(0,s.kt)("a",{parentName:"h2",href:"#analyzing-the-sitemap",target:null,rel:null})," Analyzing the sitemap"),(0,s.kt)("p",null,"The sitemap is usually located at the path ",(0,s.kt)("strong",{parentName:"p"},"/sitemap.xml"),". It is always worth trying that URL, as it is rarely linked anywhere on the site. It usually contains a list of all pages in ",(0,s.kt)("a",{parentName:"p",href:"https://www.w3.org/standards/xml/core",target:"_blank",rel:"noopener"},"XML format"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-XML"},'<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n    <url>\n        <loc>http://www.brewbound.com/advertise</loc>\n        <lastmod>2015-03-19</lastmod>\n        <changefreq>daily</changefreq>\n    </url>\n    <url>\n    ...\n')),(0,s.kt)("p",null,"The URLs of breweries take this form:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},"http://www.brewbound.com/breweries/[BREWERY_NAME]\n")),(0,s.kt)("p",null,"And the URLs of craft beers look like this:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},"http://www.brewbound.com/breweries/[BREWERY_NAME]/[BEER_NAME]\n")),(0,s.kt)("p",null,"They can be matched using the following regular expression:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-regexp"},"http(s)?:\\/\\/www\\.brewbound\\.com\\/breweries\\/[^\\/]+\\/[^\\/<]+\n")),(0,s.kt)("p",null,"Note the two parts of the regular expression ",(0,s.kt)("inlineCode",{parentName:"p"},"[^\\/<]")," containing the ",(0,s.kt)("inlineCode",{parentName:"p"},"<")," symbol. This is because we want to exclude the ",(0,s.kt)("inlineCode",{parentName:"p"},"</loc>")," tag, which closes each URL."),(0,s.kt)("h2",{id:"-scraping-the-sitemap-in-crawlee"},(0,s.kt)("a",{parentName:"h2",href:"#scraping-the-sitemap",target:null,rel:null})," Scraping the sitemap in Crawlee"),(0,s.kt)("p",null,"If you're scraping sitemaps (or anything else, really), ",(0,s.kt)("a",{parentName:"p",href:"https://crawlee.dev",target:"_blank",rel:"noopener"},"Crawlee")," is perfect for the job."),(0,s.kt)("p",null,"First, let's add the beer URLs from the sitemap to the ",(0,s.kt)("a",{parentName:"p",href:"https://crawlee.dev/api/core/class/RequestList",target:"_blank",rel:"noopener"},(0,s.kt)("inlineCode",{parentName:"a"},"RequestList"))," using our regular expression to match only the (craft!!) beer URLs and not pages of breweries, contact page, etc."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const requestList = await RequestList.open(null, [{\n    requestsFromUrl: 'https://www.brewbound.com/sitemap.xml',\n    regex: /http(s)?:\\/\\/www\\.brewbound\\.com\\/breweries\\/[^\\/<]+\\/[^\\/<]+/gm,\n}]);\n")),(0,s.kt)("p",null,"Now, let's use ",(0,s.kt)("a",{parentName:"p",href:"https://crawlee.dev/api/puppeteer-crawler/class/PuppeteerCrawler",target:"_blank",rel:"noopener"},(0,s.kt)("inlineCode",{parentName:"a"},"PuppeteerCrawler"))," to scrape the created ",(0,s.kt)("inlineCode",{parentName:"p"},"RequestList")," with ",(0,s.kt)("a",{parentName:"p",href:"https://pptr.dev/",target:"_blank",rel:"noopener"},"Puppeteer")," and push it to the final dataset."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const crawler = new PuppeteerCrawler({\n    requestList,\n    async requestHandler({ page }) {\n        const beerPage = await page.evaluate(() => {\n            return document.getElementsByClassName('productreviews').length;\n        });\n        if (!beerPage) return;\n\n        const data = await page.evaluate(() => {\n            const title = document.getElementsByTagName('h1')[0].innerText;\n            const [brewery, beer] = title.split(':');\n            const description = document.getElementsByClassName('productreviews')[0].innerText;\n\n            return { brewery, beer, description };\n        });\n\n        await Dataset.pushData(data);\n    },\n});\n")),(0,s.kt)("h2",{id:"-full-code"},(0,s.kt)("a",{parentName:"h2",href:"#full-code",target:null,rel:null})," Full code"),(0,s.kt)("p",null,"If we create a new actor using the code below on the ",(0,s.kt)("a",{parentName:"p",href:"/academy/apify-platform",target:null,rel:null},"Apify platform"),", it returns a nicely formatted spreadsheet containing a list of breweries with their beers with descriptions."),(0,s.kt)("p",null,"Make sure to use the ",(0,s.kt)("strong",{parentName:"p"},"apify/actor-node-puppeteer-chrome")," image for your Dockerfile, otherwise the run will fail."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"import { Dataset, RequestList, PuppeteerCrawler } from 'crawlee';\n\nconst requestList = await RequestList.open(null, [{\n    requestsFromUrl: 'https://www.brewbound.com/sitemap.xml',\n    regex: /http(s)?:\\/\\/www\\.brewbound\\.com\\/breweries\\/[^\\/<]+\\/[^\\/<]+/gm,\n}]);\n\nconst crawler = new PuppeteerCrawler({\n    requestList,\n    async requestHandler({ page }) {\n        const beerPage = await page.evaluate(() => {\n            return document.getElementsByClassName('productreviews').length;\n        });\n        if (!beerPage) return;\n\n        const data = await page.evaluate(() => {\n            const title = document.getElementsByTagName('h1')[0].innerText;\n            const [brewery, beer] = title.split(':');\n            const description = document.getElementsByClassName('productreviews')[0].innerText;\n\n            return { brewery, beer, description };\n        });\n\n        await Dataset.pushData(data);\n    },\n});\n\nawait crawler.run();\n")))}d.isMDXComponent=!0}}]);