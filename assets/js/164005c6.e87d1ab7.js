"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[5195],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),i=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=i(a),h=n,m=d["".concat(c,".").concat(h)]||d[h]||u[h]||o;return a?r.createElement(m,s(s({ref:t},p),{},{components:a})):r.createElement(m,s({ref:t},p))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,s[1]=l;for(var i=2;i<o;i++)s[i]=a[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},34978:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var r=a(87462),n=a(63366),o=(a(67294),a(3905)),s=["components"],l={title:"Cache data to improve performance",description:"Learn how to make your scrapers more efficient by storing repeated page data. Avoid re-scraping pages and reduce your data extraction costs.",sidebar_position:3.8,slug:"/tutorials/cache-data-to-improve-performance"},c="Improve performance by caching repeated page data",i={unversionedId:"tutorials/cache_data_to_improve_performance",id:"tutorials/cache_data_to_improve_performance",title:"Cache data to improve performance",description:"Learn how to make your scrapers more efficient by storing repeated page data. Avoid re-scraping pages and reduce your data extraction costs.",source:"@site/sources/platform/tutorials/cache_data_to_improve_performance.md",sourceDirName:"tutorials",slug:"/tutorials/cache-data-to-improve-performance",permalink:"/platform/tutorials/cache-data-to-improve-performance",draft:!1,editUrl:"https://github.com/apify/apify-docs-v2/edit/master/sources/platform/tutorials/cache_data_to_improve_performance.md",tags:[],version:"current",lastUpdatedBy:"Jan \u010curn",lastUpdatedAt:1677248878,formattedLastUpdatedAt:"Feb 24, 2023",sidebarPosition:3.8,frontMatter:{title:"Cache data to improve performance",description:"Learn how to make your scrapers more efficient by storing repeated page data. Avoid re-scraping pages and reduce your data extraction costs.",sidebar_position:3.8,slug:"/tutorials/cache-data-to-improve-performance"},sidebar:"docs",previous:{title:"Log in by transferring cookies",permalink:"/platform/tutorials/log-in-by-transferring-cookies"},next:{title:"Crawl URLs from a Google Sheet",permalink:"/platform/tutorials/crawl-urls-from-a-google-sheet"}},p={},u=[{value:"How to cache data inside an actor",id:"how-to-cache-data-inside-an-actor",level:2},{value:"Persisting cache to the key-value store",id:"persisting-cache-to-the-key-value-store",level:3},{value:"How to use caching in an e-commerce project",id:"how-to-use-caching-in-an-e-commerce-project",level:2},{value:"Cache structure",id:"cache-structure",level:3},{value:"Crawler example",id:"crawler-example",level:3}],d={toc:u};function h(e){var t=e.components,a=(0,n.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"improve-performance-by-caching-repeated-page-data"},"Improve performance by caching repeated page data"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Learn how to make your scrapers more efficient by storing repeated page data. Avoid re-scraping pages and reduce your data extraction costs.")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Opening a page is by far the most expensive operation a scraper does. Each request has to use a precious IP address to route the traffic, then download a large HTML document (and a lot of other resources, if you use a browser) over the network (and pay for data transfer), and finally spend CPU time on parsing that HTML. Compared to that, the code you write inside the scraper itself is essentially free."),(0,o.kt)("p",null,"If you want to reduce your scraping costs, not re-scraping certain pages is one of the best ways to do that. The number of use cases where this is possible might be quite low, but you should always look for and take advantage of such situations. In this article, we will go through one typical scraping scenario and apply caching in a simple and effective way."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"In a rush? Skip the tutorial and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/metalwarrior665/apify-utils/blob/master/examples/caching-page-data.js",target:"_blank",rel:"noopener"},"see the full code example"),".")),(0,o.kt)("h2",{id:"how-to-cache-data-inside-an-actor"},"How to cache data inside an actor"),(0,o.kt)("p",null,"Thanks to JavaScript's dynamic nature, we can store arbitrary data in a single object and easily manipulate it in place."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const cache = {\n    data1: 'my-data',\n    data2: {\n        myKey: 'my=data',\n    },\n};\n\n// We can easily add things to an object\ncache.data3 = 'my-new-data'\n// We can remove things from an object\ndelete cache.data1\n// And we can update the object\ncache.data2.myNewKey = 'my-new-data'\n")),(0,o.kt)("p",null,"Because ",(0,o.kt)("a",{parentName:"p",href:"https://www.freecodecamp.org/news/how-to-get-a-grip-on-reference-vs-value-in-javascript-cba3f86da223/",target:"_blank",rel:"noopener"},"all objects in JavaScript are just references"),", we can cheaply pass them to other functions and read or modify them there."),(0,o.kt)("h3",{id:"persisting-cache-to-the-key-value-store"},"Persisting cache to the key-value store"),(0,o.kt)("p",null,"The cache lives only in memory. This is the easiest and fastest way to use a cache. One disadvantage is that if the actor run ",(0,o.kt)("a",{parentName:"p",href:"/platform/actors/development/state-persistence",target:null,rel:null},"migrates to a new server"),", is aborted or crashes, we lose the cached data. That is not a tragedy but repopulating the cache will waste some resources. Fortunately, this has a simple solution in actors: we can persist arbitrary data into the ",(0,o.kt)("a",{parentName:"p",href:"/platform/storage/key-value-store",target:null,rel:null},"key-value store"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { Actor } from 'apify';\n\nawait Actor.init();\n\n// This is a common idiom: we first check if we already have cached data in the store\n// If we do, it means the run was already restarted and we restore the cache\n// If we don't, we just initialize the cache to an empty object\nconst cache = (await Actor.getValue('CACHE')) || {};\n\n// Now, we set up the persistence. You can choose between 'migrating' and 'persistState' events\n// 'migrating' only saves on migration, so it is a little \"cheaper\"\n// 'persistState' is usually preferred, it will also help if you abort the actor\nActor.on('persistState', async () => {\n    await Actor.setValue('CACHE', cache);\n});\n// We have secured the persistence and can now pass on the cache and use it like we want\n\nawait Actor.exit();\n")),(0,o.kt)("p",null,"Another advantage of persisting data is that you can open the key-value store and check what they look like at any time."),(0,o.kt)("h2",{id:"how-to-use-caching-in-an-e-commerce-project"},"How to use caching in an e-commerce project"),(0,o.kt)("p",null,"Now we have covered the base theory, so we can look into applying caching to help us avoid re-scraping pages. This approach is very helpful with e-commerce marketplaces. Let's define our imaginary example project:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"We need to scrape all products from an imaginary ",(0,o.kt)("inlineCode",{parentName:"li"},"https://marketplace.com")," website."),(0,o.kt)("li",{parentName:"ul"},"Each product is offered by one seller and the product page links to the seller page."),(0,o.kt)("li",{parentName:"ul"},"Each product row we scrape should contain all info about the product and its seller."),(0,o.kt)("li",{parentName:"ul"},"A single seller usually sells about 100 products.")),(0,o.kt)("p",null,"Let's also define the URLs:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Products are available on ",(0,o.kt)("inlineCode",{parentName:"li"},"https://marketplace.com/product/productId"),"."),(0,o.kt)("li",{parentName:"ul"},"Sellers are available on ",(0,o.kt)("inlineCode",{parentName:"li"},"https://marketplace.com/seller/sellerId"),".")),(0,o.kt)("h3",{id:"cache-structure"},"Cache structure"),(0,o.kt)("p",null,"You might have already realized how we can utilize the cache. Because a seller can sell more than one product, with a naive approach, we would just re-scrape the seller page for each of their products. This is wasteful. Instead, we can store all the data we scrape from the seller page to our cache. If we encounter the seller's product again, we can get the seller data straight from the cache."),(0,o.kt)("p",null,"Our cache will be an object where the ",(0,o.kt)("strong",{parentName:"p"},"keys")," will be the seller IDs (imagine a numerical ID) and the ",(0,o.kt)("strong",{parentName:"p"},"values")," will be seller data."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "545345": {\n        "sellerId": "545345",\n        "sellerName": "Jane Doe",\n        "sellerRating": 3.5,\n        "sellerNumberOfReviews": 345,\n        "sellerNumberOfFollowers": 32,\n        "sellerProductsSold": 1560\n    },\n    "423423": {\n        "sellerId": "423423",\n        "sellerName": "Martin Smith",\n        "sellerRating": 4.2,\n        "sellerNumberOfReviews": 23,\n        "sellerNumberOfFollowers": 2,\n        "sellerProductsSold": 132\n    }\n}\n')),(0,o.kt)("h3",{id:"crawler-example"},"Crawler example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { Actor } from 'apify';\nimport { CheerioCrawler } from 'crawlee';\n\n// Let's imagine we defined the extractor functions in the extractors.js file\nimport { extractProductData, extractSellerData } from './extractors.js';\n\nawait Actor.init();\n\nconst cache = (await Actor.getValue('CACHE')) || {};\n\nActor.on('persistState', async () => {\n    await Actor.setValue('CACHE', cache);\n});\n\n// Other crawler setup\n// ...\n\n// It doesn't matter what crawler class we choose\nconst crawler = new CheerioCrawler({\n    // Other crawler options\n    // ...\n    async requestHandler({ request, $ }) {\n        const { label } = request;\n        if (label === 'START') {\n            // Enqueue categories etc...\n        } else if (label === 'CATEGORY') {\n            // Enqueue products and paginate...\n        } else if (label === 'PRODUCT') {\n            // Here is where our example begins\n            const productData = extractProductData($);\n            const sellerId = $('#seller-id').text().trim();\n\n            // We have all we need from the product page\n            // Now we check the cache if we already scraped this seller\n            if (cache[sellerId]) {\n                // If yes, we just merge the data and we are done\n                const result = {\n                    ...productData,\n                    ...cache[sellerId],\n                };\n                await Actor.pushData(result);\n            } else {\n                // If the cache doesn't have this seller, we have to go to their page\n                await crawler.addRequests([{\n                    url: `https://marketplace.com/seller/${sellerId}`,\n                    label: 'SELLER',\n                    userData: {\n                        // We also have to pass the product data along\n                        // so we can merge and push them from the seller page\n                        productData,\n                    },\n                }]);\n            }\n        } else if (label === 'SELLER') {\n            // And finally we handle the seller page\n            // We scrape the seller data\n            const sellerData = extractSellerData($);\n\n            // We populate the cache so we can access all of this seller's other products from there\n            cache[sellerData.sellerId] = sellerData;\n\n            // We merge seller and product data and push\n            const result = {\n                ...request.userData.productData,\n                ...sellerData,\n            };\n            await Actor.pushData(result);\n        }\n    },\n});\n\nawait crawler.run([{\n    url: 'https://marketplace.com',\n    userData: { label: 'START' },\n}]);\n\nawait Actor.exit();\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/metalwarrior665/apify-utils/blob/master/examples/caching-page-data.js",target:"_blank",rel:"noopener"},"See the full code example"),"."))}h.isMDXComponent=!0}}]);