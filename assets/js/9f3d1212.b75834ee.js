"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[8543],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var o=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=o.createContext({}),l=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),h=l(r),d=a,g=h["".concat(c,".").concat(d)]||h[d]||u[d]||n;return r?o.createElement(g,s(s({ref:t},p),{},{components:r})):o.createElement(g,s({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,s=new Array(n);s[0]=h;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<n;l++)s[l]=r[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}h.displayName="MDXCreateElement"},93185:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var o=r(87462),a=r(63366),n=(r(67294),r(3905)),s=["components"],i={title:"How to choose the right scraper for the job",description:"Learn basic web scraping concepts to help you analyze a website and choose the best scraper for your particular use case.",sidebar_position:14.3,slug:"/node-js/choosing-the-right-scraper"},c="How to choose the right scraper for the job",l={unversionedId:"tutorials/node_js/choosing_the_right_scraper",id:"tutorials/node_js/choosing_the_right_scraper",title:"How to choose the right scraper for the job",description:"Learn basic web scraping concepts to help you analyze a website and choose the best scraper for your particular use case.",source:"@site/sources/academy/tutorials/node_js/choosing_the_right_scraper.md",sourceDirName:"tutorials/node_js",slug:"/node-js/choosing-the-right-scraper",permalink:"/academy/node-js/choosing-the-right-scraper",draft:!1,tags:[],version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1674755822,formattedLastUpdatedAt:"Jan 26, 2023",sidebarPosition:14.3,frontMatter:{title:"How to choose the right scraper for the job",description:"Learn basic web scraping concepts to help you analyze a website and choose the best scraper for your particular use case.",sidebar_position:14.3,slug:"/node-js/choosing-the-right-scraper"},sidebar:"academy",previous:{title:"How to optimize Puppeteer by caching responses",permalink:"/academy/node-js/caching-responses-in-puppeteer"},next:{title:"How to scrape from dynamic pages",permalink:"/academy/node-js/dealing-with-dynamic-pages"}},p={},u=[{value:"Performance",id:"performance",level:2},{value:"Dynamic pages &amp; blocking",id:"dynamic-pages",level:2},{value:"Making the choice",id:"making-the-choice",level:2}],h={toc:u};function d(e){var t=e.components,r=(0,a.Z)(e,s);return(0,n.kt)("wrapper",(0,o.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"choosing-the-right-scraper"},"How to choose the right scraper for the job"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Learn basic web scraping concepts to help you analyze a website and choose the best scraper for your particular use case.")),(0,n.kt)("hr",null),(0,n.kt)("p",null,"There are two main ways you can proceed with building your crawler:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Using plain HTTP requests."),(0,n.kt)("li",{parentName:"ol"},"Using an automated browser.")),(0,n.kt)("p",null,"We will briefly go through the pros and cons of both, and also will cover the basic steps on how to determine which one should you go with."),(0,n.kt)("h2",{id:"performance"},"Performance"),(0,n.kt)("p",null,"First, let's discuss performance. Plain HTTP request-based scraping will ",(0,n.kt)("strong",{parentName:"p"},"always")," be faster than browser-based scraping. When using plain requests, the page's HTML is not rendered, no JavaScript is executed, no images are loaded, etc. Also, there's no memory used by the browser, and there are no CPU-hungry operations."),(0,n.kt)("p",null,"If it were only a question of performance, you'd of course use request-based scraping every time; however, it's unfortunately not that simple."),(0,n.kt)("h2",{id:"dynamic-pages"},"Dynamic pages & blocking"),(0,n.kt)("p",null,"Some websites do not load any data without a browser, as they need to execute some scripts to show it (these are known as ",(0,n.kt)("a",{parentName:"p",href:"/academy/node-js/dealing-with-dynamic-pages",target:null,rel:null},"dynamic pages"),", it is very easy for it to distinguish between a real user and a bot (crawler) and block access."),(0,n.kt)("h2",{id:"making-the-choice"},"Making the choice"),(0,n.kt)("p",null,"When choosing which scraper to use, we would suggest first checking whether the website works without JavaScript or not. Probably the easiest way to do so is to use the ",(0,n.kt)("a",{parentName:"p",href:"/academy/tools/quick-javascript-switcher",target:null,rel:null},"Quick Javascript Switcher")," or try to sending a few requests programmatically. If the data is there and you're not blocked straight away, a request-based scraper is probably the way to go."),(0,n.kt)("p",null,'It also depends of course on whether you need to fill in some data (like a username and password) or select a location (such as entering zip code manually). Tasks where interacting with the page is absolutely necessary cannot be done using plain HTTP scraping, and require headless browsers. In some cases, you might also decide to use a browser-based solution in order to better blend in with the rest of the "regular" traffic coming from real users.'))}d.isMDXComponent=!0}}]);