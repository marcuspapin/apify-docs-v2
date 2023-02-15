"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[5625],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),g=l(n),d=a,h=g["".concat(p,".").concat(d)]||g[d]||u[d]||o;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=g;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},70535:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],s={title:"Using proxies",description:"Learn how to use and automagically rotate proxies in your scrapers by using Crawlee, and a bit about how to easily obtain pools of proxies.",sidebar_position:2,slug:"/anti-scraping/mitigation/using-proxies"},p="Using proxies",l={unversionedId:"webscraping/anti_scraping/mitigation/using_proxies",id:"webscraping/anti_scraping/mitigation/using_proxies",title:"Using proxies",description:"Learn how to use and automagically rotate proxies in your scrapers by using Crawlee, and a bit about how to easily obtain pools of proxies.",source:"@site/sources/academy/webscraping/anti_scraping/mitigation/using_proxies.md",sourceDirName:"webscraping/anti_scraping/mitigation",slug:"/anti-scraping/mitigation/using-proxies",permalink:"/academy/anti-scraping/mitigation/using-proxies",draft:!1,editUrl:"https://github.com/apify/apify-docs-v2/edit/master/sources/academy/webscraping/anti_scraping/mitigation/using_proxies.md",tags:[],version:"current",lastUpdatedBy:"Vlad Frangu",lastUpdatedAt:1676463577,formattedLastUpdatedAt:"Feb 15, 2023",sidebarPosition:2,frontMatter:{title:"Using proxies",description:"Learn how to use and automagically rotate proxies in your scrapers by using Crawlee, and a bit about how to easily obtain pools of proxies.",sidebar_position:2,slug:"/anti-scraping/mitigation/using-proxies"},sidebar:"academy",previous:{title:"Proxies",permalink:"/academy/anti-scraping/mitigation/proxies"},next:{title:"Generating fingerprints",permalink:"/academy/anti-scraping/mitigation/generating-fingerprints"}},c={},u=[{value:"Implementing proxies in a scraper",id:"implementing-proxies",level:2},{value:"A bit about debugging proxies",id:"debugging-proxies",level:2},{value:"Higher level proxy scraping",id:"higher-level-proxy-scraping",level:2},{value:"Next up",id:"next",level:2}],g={toc:u};function d(e){var t=e.components,s=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},g,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"using-proxies"},"Using proxies"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Learn how to use and automagically rotate proxies in your scrapers by using Crawlee, and a bit about how to easily obtain pools of proxies.")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"In the ",(0,o.kt)("a",{parentName:"p",href:"/academy/web-scraping-for-beginners/crawling/pro-scraping",target:null,rel:null},(0,o.kt)("strong",{parentName:"a"},"Web scraping for beginners"))," course, we learned about the power of Crawlee, and how it can streamline the development process of web crawlers. You've already seen how powerful the ",(0,o.kt)("inlineCode",{parentName:"p"},"crawlee")," package is; however, what you've been exposed to thus far is only the tip of the iceberg."),(0,o.kt)("p",null,"Because proxies are so widely used in the scraping world, Crawlee as been equipped with features which make it easy to implement them in an effective way. One of the main functionalities that comes baked into Crawlee is proxy rotation, which is when each request is sent through a different proxy from a proxy pool."),(0,o.kt)("h2",{id:"implementing-proxies"},"Implementing proxies in a scraper"),(0,o.kt)("p",null,"Let's borrow some scraper code from the end of the ",(0,o.kt)("a",{parentName:"p",href:"/academy/web-scraping-for-beginners/crawling/pro-scraping",target:null,rel:null},"pro-scraping")," lesson in our ",(0,o.kt)("strong",{parentName:"p"},"Web Scraping for Beginners")," course and paste it into a new file called ",(0,o.kt)("strong",{parentName:"p"},"proxies.js"),". This code enqueues all of the product links on ",(0,o.kt)("a",{parentName:"p",href:"https://demo-webstore.apify.org",target:"_blank",rel:"noopener"},"demo-webstore.apify.org"),"'s on-sale page, then makes a request to each product page and scrapes data about each one:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// crawlee.js\nimport { CheerioCrawler, Dataset } from 'crawlee';\n\nconst crawler = new CheerioCrawler({\n    requestHandler: async ({ $, request, enqueueLinks }) => {\n        if (request.label === 'START') {\n            await enqueueLinks({\n                selector: 'a[href*=\"/product/\"]'\n            });\n\n            // When on the START page, we don't want to\n            // extract any data after we extract the links.\n            return;\n        }\n\n        // We copied and pasted the extraction code\n        // from the previous lesson\n        const title = $('h3').text().trim();\n        const price = $('h3 + div').text().trim();\n        const description = $('div[class*=\"Text_body\"]').text().trim();\n\n        // Instead of saving the data to a variable,\n        // we immediately save everything to a file.\n        await Dataset.pushData({\n            title,\n            description,\n            price,\n        });\n    },\n});\n\nawait crawler.addRequests([{\n    url: 'https://demo-webstore.apify.org/search/on-sale',\n    // By labeling the Request, we can very easily\n    // identify it later in the requestHandler.\n    label: 'START',\n}]);\n\nawait crawler.run();\n")),(0,o.kt)("p",null,"In order to implement a proxy pool, we will first need some proxies. We'll quickly use the free ",(0,o.kt)("a",{parentName:"p",href:"https://apify.com/mstephen190/proxy-scraper",target:"_blank",rel:"noopener"},"proxy scraper")," on the Apify platform to get our hands on some quality proxies. Next, we'll need to set up a ",(0,o.kt)("a",{parentName:"p",href:"https://crawlee.dev/api/core/class/ProxyConfiguration",target:"_blank",rel:"noopener"},(0,o.kt)("inlineCode",{parentName:"a"},"ProxyConfiguration"))," and configure it with our custom proxies, like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { ProxyConfiguration } from 'crawlee';\n\nconst proxyConfiguration = new ProxyConfiguration({\n    proxyUrls: ['http://45.42.177.37:3128', 'http://43.128.166.24:59394', 'http://51.79.49.178:3128'],\n});\n")),(0,o.kt)("p",null,"Awesome, so there's our proxy pool! Usually, a proxy pool is much larger than this; however, a three proxie pool is total fine for tutorial purposes. Finally, we can pass the ",(0,o.kt)("inlineCode",{parentName:"p"},"proxyConfiguration")," into our crawler's options:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const crawler = new CheerioCrawler({\n    proxyConfiguration,\n    requestHandler: async ({ $, request, enqueueLinks }) => {\n        if (request.label === 'START') {\n            await enqueueLinks({\n                selector: 'a[href*=\"/product/\"]',\n            });\n            return;\n        }\n\n        const title = $('h3').text().trim();\n        const price = $('h3 + div').text().trim();\n        const description = $('div[class*=\"Text_body\"]').text().trim();\n\n        await Dataset.pushData({\n            title,\n            description,\n            price,\n        });\n    },\n});\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note that if you run this code, it may not work, as the proxies could potentially be down/non-operating at the time you are going through this course.")),(0,o.kt)("p",null,"That's it! The crawler will now automatically rotate through the proxies we provided in the ",(0,o.kt)("inlineCode",{parentName:"p"},"proxyUrls")," option."),(0,o.kt)("h2",{id:"debugging-proxies"},"A bit about debugging proxies"),(0,o.kt)("p",null,"At the time of writing, our above scraper utilizing our custom proxy pool is working just fine. But how can we check that the scraper is for sure using the proxies we provided it, and more importantly, how can we debug proxies within our scraper? Luckily, within the same ",(0,o.kt)("inlineCode",{parentName:"p"},"context")," object we've been destructuring ",(0,o.kt)("inlineCode",{parentName:"p"},"$")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"request")," out of, there is a ",(0,o.kt)("inlineCode",{parentName:"p"},"proxyInfo")," key as well. ",(0,o.kt)("inlineCode",{parentName:"p"},"proxyInfo")," is an object which includes useful data about the proxy which was used to make the request."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const crawler = new CheerioCrawler({\n    proxyConfiguration,\n    // Destructure "proxyInfo" from the "context" object\n    handlePageFunction: async ({ $, request, proxyInfo }) => {\n        // Log its value\n        console.log(proxyInfo)\n        // ...\n        // ...\n    },\n});\n')),(0,o.kt)("p",null,"After modifying your code to log ",(0,o.kt)("inlineCode",{parentName:"p"},"proxyInfo")," to the console and running the scraper, you're going to see some logs which look like this:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"proxyInfo being logged by the scraper",src:n(99707).Z,width:"530",height:"508"})),(0,o.kt)("p",null,"These logs confirm that our proxies are being used and rotated successfully by Crawlee, and can also be used to debug slow or broken proxies."),(0,o.kt)("h2",{id:"higher-level-proxy-scraping"},"Higher level proxy scraping"),(0,o.kt)("p",null,"Though we will discuss it more in-depth in future courses, it is still important to mention that Crawlee has integrated support for the Apify SDK, which supports ",(0,o.kt)("a",{parentName:"p",href:"https://apify.com/proxy",target:"_blank",rel:"noopener"},"Apify Proxy")," - a service that provides access to pools of both residential and datacenter IP addresses. A ",(0,o.kt)("inlineCode",{parentName:"p"},"proxyConfiguration")," using Apify Proxy might look something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { Actor } from 'apify';\n\nconst proxyConfiguration = await  Actor.createProxyConfiguration({\n    countryCode: 'US'\n});\n")),(0,o.kt)("p",null,"Notice that we didn't provide it a list of proxy URLs. This is because the ",(0,o.kt)("inlineCode",{parentName:"p"},"SHADER")," group already serves as our proxy pool (courtesy of Apify Proxy)."),(0,o.kt)("h2",{id:"next"},"Next up"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/academy/anti-scraping/mitigation/generating-fingerprints",target:null,rel:null},"Next up"),", we'll be checking out how to use two NPM packages to generate and inject ",(0,o.kt)("a",{parentName:"p",href:"/academy/anti-scraping/techniques/fingerprinting",target:null,rel:null},"browser fingerprints"),"."))}d.isMDXComponent=!0},99707:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/proxy-info-logs-edb7e733aab82acb15258e9d44ba8a64.png"}}]);