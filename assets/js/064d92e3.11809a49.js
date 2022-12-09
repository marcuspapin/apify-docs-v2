"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[2497],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>f});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=a.createContext({}),l=function(e){var r=a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=l(e.components);return a.createElement(s.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},d=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(t),f=n,h=d["".concat(s,".").concat(f)]||d[f]||u[f]||o;return t?a.createElement(h,i(i({ref:r},c),{},{components:t})):a.createElement(h,i({ref:r},c))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=d;var p={};for(var s in r)hasOwnProperty.call(r,s)&&(p[s]=r[s]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var l=2;l<o;l++)i[l]=t[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},78690:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>p,metadata:()=>l,toc:()=>u});var a=t(87462),n=t(63366),o=(t(67294),t(3905)),i=["components"],p={title:"Apify scrapers",description:"Discover Apify's ready-made web scraping and automation tools. Compare Web Scraper, Cheerio Scraper and Puppeteer Scraper to decide which is right for you.",sidebar_position:3.2,slug:"/tutorials/apify-scrapers"},s="Scraping with Apify",l={unversionedId:"tutorials/apify_scrapers/index",id:"tutorials/apify_scrapers/index",title:"Apify scrapers",description:"Discover Apify's ready-made web scraping and automation tools. Compare Web Scraper, Cheerio Scraper and Puppeteer Scraper to decide which is right for you.",source:"@site/sources/platform/tutorials/apify_scrapers/index.md",sourceDirName:"tutorials/apify_scrapers",slug:"/tutorials/apify-scrapers",permalink:"/platform/tutorials/apify-scrapers",draft:!1,tags:[],version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1670589074,formattedLastUpdatedAt:"Dec 9, 2022",sidebarPosition:3.2,frontMatter:{title:"Apify scrapers",description:"Discover Apify's ready-made web scraping and automation tools. Compare Web Scraper, Cheerio Scraper and Puppeteer Scraper to decide which is right for you.",sidebar_position:3.2,slug:"/tutorials/apify-scrapers"},sidebar:"defaultSidebar",previous:{title:"Quick start",permalink:"/platform/tutorials/quick-start"},next:{title:"Getting started with Apify scrapers",permalink:"/platform/tutorials/apify-scrapers/getting-started"}},c={},u=[{value:"Web Scraper",id:"web-scraper",level:2},{value:"Cheerio Scraper",id:"cheerio-scraper",level:2},{value:"Puppeteer Scraper",id:"puppeteer-scraper",level:2}],d={toc:u};function f(e){var r=e.components,t=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"scraping-with-apify"},"Scraping with Apify"),(0,o.kt)("p",null,"Scraping and crawling the web can be difficult and time-consuming without the right tools. That's why Apify provides ready-made solutions to crawl and scrape any website. They are based on our ",(0,o.kt)("a",{parentName:"p",href:"https://apify.com/actors",target:"_blank",rel:"noopener"},"actors"),", the ",(0,o.kt)("a",{parentName:"p",href:"https://sdk.apify.com",target:null,rel:null},"Apify SDK")," and ",(0,o.kt)("a",{parentName:"p",href:"https://crawlee.dev/",target:"_blank",rel:"noopener"},"Crawlee"),"."),(0,o.kt)("p",null,"Don't let the number of options confuse you. Unless you're really sure you need to use a specific tool, just go ahead and use ",(0,o.kt)("strong",{parentName:"p"},"Web Scraper")," (",(0,o.kt)("a",{parentName:"p",href:"/platform/tutorials/apify-scrapers/web-scraper",target:null,rel:null},"apify/web-scraper"),") only after you know your target websites well and need to optimize your scraper."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/platform/tutorials/apify-scrapers/getting-started",target:null,rel:null},"Visit the Scraper introduction tutorial to get started!")),(0,o.kt)("h2",{id:"web-scraper"},(0,o.kt)("a",{parentName:"h2",href:"#web-scraper",target:null,rel:null}),"Web Scraper"),(0,o.kt)("p",null,"Web Scraper is a ready-made solution for scraping the web using the Chrome browser. It takes away all the work necessary to set up a browser for crawling, controls the browser automatically and produces machine-readable results in several common formats."),(0,o.kt)("p",null,"Underneath, it uses the Puppeteer library to control the browser, but you don't need to worry about that. Using a simple web UI and a little of basic JavaScript, you can tweak it to serve almost any scraping need."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/platform/tutorials/apify-scrapers/web-scraper",target:null,rel:null},"Visit the Web Scraper tutorial to get started!")),(0,o.kt)("h2",{id:"cheerio-scraper"},(0,o.kt)("a",{parentName:"h2",href:"#cheerio-scraper",target:null,rel:null}),"Cheerio Scraper"),(0,o.kt)("p",null,"Cheerio Scraper is a ready-made solution for crawling the web using plain HTTP requests to retrieve HTML pages and then parsing and inspecting the HTML using the ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/cheerio",target:"_blank",rel:"noopener"},"cheerio")," library. It's blazing fast."),(0,o.kt)("p",null,"Cheerio is a server-side version of the popular jQuery library that does not run in the browser but instead constructs a DOM out of an HTML string and then provides the user an API to work with that DOM."),(0,o.kt)("p",null,"Cheerio Scraper is ideal for scraping websites that do not rely on client-side JavaScript to serve their content. It can be as much as 20 times faster than using a full-browser solution like Puppeteer."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/platform/tutorials/apify-scrapers/cheerio-scraper",target:null,rel:null},"Visit the Cheerio Scraper tutorial to get started!")),(0,o.kt)("h2",{id:"puppeteer-scraper"},(0,o.kt)("a",{parentName:"h2",href:"#puppeteer-scraper",target:null,rel:null}),"Puppeteer Scraper"),(0,o.kt)("p",null,"Puppeteer Scraper is the most powerful scraper tool in our arsenal (aside from developing your own actors). It uses the Puppeteer library to programmatically control a headless Chrome browser, and it can make it do almost anything. If using Web Scraper does not cut it, Puppeteer Scraper is what you need."),(0,o.kt)("p",null,"Puppeteer is a Node.js library, so knowledge of Node.js and its paradigms is expected when working with Puppeteer Scraper."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/platform/tutorials/apify-scrapers/puppeteer-scraper",target:null,rel:null},"Visit the Puppeteer Scraper tutorial to get started!")))}f.isMDXComponent=!0}}]);