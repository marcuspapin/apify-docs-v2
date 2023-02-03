"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[890],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),g=a,b=d["".concat(s,".").concat(g)]||d[g]||u[g]||o;return n?r.createElement(b,i(i({ref:t},p),{},{components:n})):r.createElement(b,i({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},83807:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>g,frontMatter:()=>c,metadata:()=>l,toc:()=>u});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],c={title:"Introduction",description:"Start learning about web scraping, web crawling, data collection, and popular tools to start developing your own scraper.",sidebar_position:1.1,category:"courses",slug:"/web-scraping-for-beginners/introduction"},s="Introduction",l={unversionedId:"webscraping/web_scraping_for_beginners/introduction",id:"webscraping/web_scraping_for_beginners/introduction",title:"Introduction",description:"Start learning about web scraping, web crawling, data collection, and popular tools to start developing your own scraper.",source:"@site/sources/academy/webscraping/web_scraping_for_beginners/introduction.md",sourceDirName:"webscraping/web_scraping_for_beginners",slug:"/web-scraping-for-beginners/introduction",permalink:"/academy/web-scraping-for-beginners/introduction",draft:!1,editUrl:"https://github.com/apify/apify-docs-v2/edit/master/sources/academy/webscraping/web_scraping_for_beginners/introduction.md",tags:[],version:"current",lastUpdatedBy:"Jind\u0159ich B\xe4r",lastUpdatedAt:1675435463,formattedLastUpdatedAt:"Feb 3, 2023",sidebarPosition:1.1,frontMatter:{title:"Introduction",description:"Start learning about web scraping, web crawling, data collection, and popular tools to start developing your own scraper.",sidebar_position:1.1,category:"courses",slug:"/web-scraping-for-beginners/introduction"},sidebar:"academy",previous:{title:"Web scraping for beginners",permalink:"/academy/web-scraping-for-beginners"},next:{title:"Basics of data collection",permalink:"/academy/web-scraping-for-beginners/data-collection"}},p={},u=[{value:"What is data collection?",id:"what-is-data-collection",level:2},{value:"What is crawling?",id:"what-is-crawling",level:2},{value:"What is web scraping?",id:"what-is-web-scraping",level:2},{value:"Next up",id:"next",level:2}],d={toc:u};function g(e){var t=e.components,c=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Start learning about web scraping, web crawling, data collection, and popular tools to start developing your own scraper.")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Web scraping or crawling? Data collection, mining, or extraction? You can find various definitions on the web. Let's agree on simple explanations that we will use throughout this beginner course on web scraping."),(0,o.kt)("h2",{id:"what-is-data-collection"},"What is data collection?"),(0,o.kt)("p",null,"For us, data collection is a process that takes a web page, like an Amazon product page, and collects useful information from the page, such as the product's name and price. Web pages are an unstructured data source and the goal of data collection is to make the information structured and readable to computers. The main sources of data on a web page are HTML documents and API calls, but also images, PDFs, and so on."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"product data collection from Amazon",src:n(39735).Z,width:"1205",height:"513"})),(0,o.kt)("h2",{id:"what-is-crawling"},"What is crawling?"),(0,o.kt)("p",null,"Where data collection focuses on a single page, web crawling (sometimes called spidering \ud83d\udd77) is all about movement between pages or websites. The purpose of crawling is to travel across the website to find pages with the information we want. Crawling and collection can happen simultaneously, while moving from page to page, or separately, where one scraper focuses solely on finding pages with data and another scraper collects the data. The main purpose of crawling is to collect URLs or other identifiers that can be used to move around."),(0,o.kt)("h2",{id:"what-is-web-scraping"},"What is web scraping?"),(0,o.kt)("p",null,"We use web scraping as a general term for crawling, collection and all other activities that have the purpose of converting unstructured data from the web to a structured format. In the advanced courses, you'll learn that modern web scraping is about much more than just HTML and URLs."),(0,o.kt)("h2",{id:"next"},"Next up"),(0,o.kt)("p",null,"In the ",(0,o.kt)("a",{parentName:"p",href:"/academy/web-scraping-for-beginners/data-collection",target:null,rel:null},"next lesson"),", you will learn about the basic building blocks of each web page. HTML, CSS and JavaScript."))}g.isMDXComponent=!0},39735:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/beginners-data-collection-2bb4d2e434080f9d29cb78c66c3a8ac2.png"}}]);