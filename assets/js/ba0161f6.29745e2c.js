"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[9620],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var r=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(a),h=o,d=m["".concat(l,".").concat(h)]||m[h]||u[h]||n;return a?r.createElement(d,i(i({ref:t},c),{},{components:a})):r.createElement(d,i({ref:t},c))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<n;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},91156:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>p,toc:()=>u});var r=a(87462),o=a(63366),n=(a(67294),a(3905)),i=["components"],s={title:"How to optimize and speed up your web scraper",description:"We all want our scrapers to run as cost-effective as possible. Learn how to think about performance in the context of web scraping and automation.",sidebar_position:14.6,slug:"/node-js/optimizing-scrapers"},l="How to optimize and speed up your web scraper",p={unversionedId:"tutorials/node_js/optimizing_scrapers",id:"tutorials/node_js/optimizing_scrapers",title:"How to optimize and speed up your web scraper",description:"We all want our scrapers to run as cost-effective as possible. Learn how to think about performance in the context of web scraping and automation.",source:"@site/sources/academy/tutorials/node_js/optimizing_scrapers.md",sourceDirName:"tutorials/node_js",slug:"/node-js/optimizing-scrapers",permalink:"/academy/node-js/optimizing-scrapers",draft:!1,tags:[],version:"current",lastUpdatedBy:"Jind\u0159ich B\xe4r",lastUpdatedAt:1675342799,formattedLastUpdatedAt:"Feb 2, 2023",sidebarPosition:14.6,frontMatter:{title:"How to optimize and speed up your web scraper",description:"We all want our scrapers to run as cost-effective as possible. Learn how to think about performance in the context of web scraping and automation.",sidebar_position:14.6,slug:"/node-js/optimizing-scrapers"},sidebar:"academy",previous:{title:"How to scrape hidden JavaScript objects in HTML",permalink:"/academy/node-js/js-in-html"},next:{title:"How to scrape from sitemaps",permalink:"/academy/node-js/scraping-from-sitemaps"}},c={},u=[{value:"Game development analogy",id:"analogy",level:2},{value:"Back to scrapers",id:"back-to-scrapers",level:2}],m={toc:u};function h(e){var t=e.components,a=(0,o.Z)(e,i);return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"optimizing-scrapers"},"How to optimize and speed up your web scraper"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"We all want our scrapers to run as cost-effective as possible. Learn how to think about performance in the context of web scraping and automation.")),(0,n.kt)("hr",null),(0,n.kt)("p",null,"Especially if you are running your scrapers on ",(0,n.kt)("a",{parentName:"p",href:"https://apify.com",target:"_blank",rel:"noopener"},"Apify"),", performance is directly related to your wallet (or rather bank account). The slower and heavier your program is, the more proxy bandwidth, storage, ",(0,n.kt)("a",{parentName:"p",href:"https://help.apify.com/en/articles/3490384-what-is-a-compute-unit",target:"_blank",rel:"noopener"},"compute units")," and higher ",(0,n.kt)("a",{parentName:"p",href:"https://apify.com/pricing",target:"_blank",rel:"noopener"},"subscription plan")," you'll need."),(0,n.kt)("p",null,"The goal of optimization is simple: Make the code run as fast possible and use the least resources possible. On Apify, the resources are memory and CPU usage (don't forget that the more memory you allocate to a run, the bigger share of CPU you get - proportionally). Memory alone should never be a bottleneck though. If it is, that means either a bug (memory leak) or bad architecture of the program (you need to split the computation to smaller parts). So in the rest of this article, we will focus only on optimizing CPU usage. You allocate more memory only to get more power from the CPU."),(0,n.kt)("p",null,"There is one more thing. Optimization has its own cost: development time. You should always think about how much time you're able to spend on it and if it's worth it."),(0,n.kt)("p",null,"Before we dive into the practical side of things, lets diverge with an analogy to help us think about the performance of scrapers."),(0,n.kt)("h2",{id:"analogy"},"Game development analogy"),(0,n.kt)("p",null,"Modern games are extremely complicated beasts. Every frame (usually 60 times a second), the game has to calculate the physics of the world, run AI, user input, and render everything into a beautiful scene. You can imagine that running all of that every 16 ms in a complicated game is a developer's nightmare. That's why a significant portion of game development is spent on optimizations. Every little waste matters."),(0,n.kt)("p",null,"This is mainly true in the programming heart of the game - the engine. The engine is responsible for the heavy lifting of performance critical parts like physics, animation, AI, and rendering. Once the engine is built, you can design the game on top of it. You can add different spells, conversation chains, items, animations etc. to make your game cool. Those extra things may not run every frame and don't need to be optimized as heavily as the engine itself."),(0,n.kt)("p",null,"Now, if you want to build your own game and you are not a C/C++ veteran with a team, you will likely use an existing engine (like Unreal or Unity) and focus on the design of the game environment itself. Unless you go crazy, the game will likely run just fine since those engines have already been optimized for you. Your job is to choose an appropriate engine and use it well."),(0,n.kt)("h2",{id:"back-to-scrapers"},"Back to scrapers"),(0,n.kt)("p",null,"What are the engines of the scraping world? A ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/puppeteer/puppeteer/blob/master/docs/api.md",target:"_blank",rel:"noopener"},"browser"),", an ",(0,n.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@apify/http-request",target:"_blank",rel:"noopener"},"HTTP library"),", an ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/cheeriojs/cheerio",target:"_blank",rel:"noopener"},"HTML parser"),", and a ",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse",target:"_blank",rel:"noopener"},"JSON parser"),". The CPU spends more than 99% of its workload in these libraries. As with engines, you are not likely gonna write these from scratch - instead you'll use something like ",(0,n.kt)("a",{parentName:"p",href:"https://crawlee.dev",target:"_blank",rel:"noopener"},"Crawlee")," that handles a lot of the overheads for you."),(0,n.kt)("p",null,"It is about how you use these tools. The small amount of code you write in your ",(0,n.kt)("a",{parentName:"p",href:"https://crawlee.dev/api/http-crawler/interface/HttpCrawlerOptions#requestHandler",target:"_blank",rel:"noopener"},(0,n.kt)("inlineCode",{parentName:"a"},"requestHandler"))," is absolutely insignificant compared to what is running inside these tools. In other words, it doesn't matter how many functions you call or how many variables you extract. If you want to optimize your scrapers, you need to choose the lightweight option from the tools and use it as little as possible. A crawler scraping only JSON API can be as much as 200 times faster/cheaper than a browser based solution."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Ranking of the tools from the most efficient to the least:")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"JSON API")," (HTTP call + JSON parse) - Scraping an API (public or internal) is the best option. The response is usually smaller than the HTML page and the data are already structured and cheap to parse. Usable for about 30% of websites."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Pure HTML")," (HTTP call + HTML parse) -  All data is on the main single HTML page. Often the HTML contains script and JSON data that are rich and nicely structured. Some pages can be quite big and the parsing is slower than for JSON. But it is still 10-20 times faster than a browser. Usable for about 90% of websites."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Browser")," (hundreds of HTTP calls, script execution, rendering) - Browsers are huge beasts. They do so much work to allow for smooth human interaction which makes them really inefficient for scraping. Use a browser only if it helps you bypass anti-scraping protection or you need to interact with the page.")))}h.isMDXComponent=!0}}]);