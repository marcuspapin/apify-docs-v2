"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[3712],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(n),m=i,g=c["".concat(s,".").concat(m)]||c[m]||h[m]||r;return n?a.createElement(g,l(l({ref:t},u),{},{components:n})):a.createElement(g,l({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},12767:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>h});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),l=["components"],o={title:"Scrape paginated sites",description:"Learn how to extract all of a website's listings even if they limit the number of results pages. See code examples for setting up your scraper.",sidebar_position:3.91,slug:"/tutorials/scrape-paginated-sites"},s="How to scrape websites with limited pagination",p={unversionedId:"tutorials/scrape_paginated_sites",id:"tutorials/scrape_paginated_sites",title:"Scrape paginated sites",description:"Learn how to extract all of a website's listings even if they limit the number of results pages. See code examples for setting up your scraper.",source:"@site/sources/platform/tutorials/scrape_paginated_sites.md",sourceDirName:"tutorials",slug:"/tutorials/scrape-paginated-sites",permalink:"/platform/tutorials/scrape-paginated-sites",draft:!1,tags:[],version:"current",lastUpdatedBy:"Jind\u0159ich B\xe4r",lastUpdatedAt:1675174133,formattedLastUpdatedAt:"Jan 31, 2023",sidebarPosition:3.91,frontMatter:{title:"Scrape paginated sites",description:"Learn how to extract all of a website's listings even if they limit the number of results pages. See code examples for setting up your scraper.",sidebar_position:3.91,slug:"/tutorials/scrape-paginated-sites"},sidebar:"docs",previous:{title:"How to analyze pages and fix errors",permalink:"/platform/tutorials/analyze-pages-and-fix-errors"},next:{title:"Scrape data using Python",permalink:"/platform/tutorials/scrape-data-using-python"}},u={},h=[{value:"How to overcome the limit",id:"how-to-overcome-the-limit",level:2},{value:"Going deeper into subcategories",id:"going-deeper-into-subcategories",level:3},{value:"Using filters",id:"using-filters",level:3},{value:"Using filter ranges",id:"using-filter-ranges",level:3},{value:"Splitting pages with range filters",id:"splitting-pages-with-range-filters",level:2},{value:"The algorithm",id:"the-algorithm",level:3},{value:"Special cases to look for",id:"special-cases-to-look-for",level:3},{value:"Can the ranges overlap?",id:"can-the-ranges-overlap",level:4},{value:"Can a listing have more values?",id:"can-a-listing-have-more-values",level:4},{value:"How is the range passed to the URL?",id:"how-is-the-range-passed-to-the-url",level:4},{value:"Does the website show the number of products for each filtered page?",id:"does-the-website-show-the-number-of-products-for-each-filtered-page",level:4},{value:"How to handle (open) ends of the range",id:"how-to-handle-open-ends-of-the-range",level:4},{value:"Can the range exceed the limit on a single value?",id:"can-the-range-exceed-the-limit-on-a-single-value",level:4},{value:"Implementing a range filter",id:"implementing-a-range-filter",level:3},{value:"Define and enqueue pivot ranges",id:"define-and-enqueue-pivot-ranges",level:4},{value:"Define the logic for the <code>FILTER</code> page",id:"define-the-logic-for-the-filter-page",level:4},{value:"Split price filters",id:"split-price-filters",level:4},{value:"Enqueue the filters",id:"enqueue-the-filters",level:4},{value:"Summary",id:"summary",level:2}],c={toc:h};function m(e){var t=e.components,o=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"how-to-scrape-websites-with-limited-pagination"},"How to scrape websites with limited pagination"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Learn how to extract all of a website's listings even if they limit the number of results pages. See code examples for setting up your scraper.")),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Limited pagination is a common practice on e-commerce sites and is becoming more popular over time. It makes sense: a real user will never want to look through more than 200 pages of results \u2013 only bots love unlimited pagination. Fortunately, there are ways to overcome this limit while keeping our code clean and generic."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Pagination in on Google search results page",src:n(6521).Z,width:"532",height:"187"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"In a rush? Skip the tutorial and get the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/metalwarrior665/apify-utils/tree/master/examples/crawler-with-filters",target:"_blank",rel:"noopener"},"full code example"),".")),(0,r.kt)("h2",{id:"how-to-overcome-the-limit"},"How to overcome the limit"),(0,r.kt)("p",null,"Websites usually limit the pagination of a single (sub)category to somewhere between 1,000 to 20,000 listings. The site might have over a million listings in total. Without a proven algorithm, it will be very manual and almost impossible to scrape all listings."),(0,r.kt)("p",null,"We will first look at a couple ideas that don't work so well and then present the ",(0,r.kt)("a",{parentName:"p",href:"#using-filter-ranges",target:null,rel:null},"final robust solution"),"."),(0,r.kt)("h3",{id:"going-deeper-into-subcategories"},"Going deeper into subcategories"),(0,r.kt)("p",null,"This is usually the first solution that comes to mind. You traverse the smallest subcategories and hope that those are below the pagination limits. Unfortunately, there are two big problems with this approach:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Any subcategory might be bigger than the pagination limit."),(0,r.kt)("li",{parentName:"ol"},"Some listings from the parent category might not be present in any subcategory.")),(0,r.kt)("p",null,"While you can often manually test if the second problem is true on the site, the first problem is a hard blocker. You might be just lucky, and it may work on this site but usually, traversing subcategories is just not enough. It can be used as a first step of the solution but not as the solution itself."),(0,r.kt)("h3",{id:"using-filters"},"Using filters"),(0,r.kt)("p",null,"Most websites also provide a way for the user to select search filters. These allow a more granular level of search than categories and can be combined with them. Common filters allow you to select a ",(0,r.kt)("strong",{parentName:"p"},"color"),", ",(0,r.kt)("strong",{parentName:"p"},"size"),", ",(0,r.kt)("strong",{parentName:"p"},"location")," and similar attributes."),(0,r.kt)("p",null,"At first, it might seem as an easy solution. Enqueue all possible filter combinations and that should be so granular that it will never hit a pagination limit. Unfortunately, this solution is still far from good."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"There is no guarantee that some products don't slip through the chosen filter combinations."),(0,r.kt)("li",{parentName:"ol"},"The resulting split might be too granular and end up having too many tiny paginations with many duplicate products. This leads to scraping a lot more pages than necessary and makes analytics much harder.")),(0,r.kt)("h3",{id:"using-filter-ranges"},"Using filter ranges"),(0,r.kt)("p",null,"The best option is to use only a specific type of filter that can be used as a range. The most common one is ",(0,r.kt)("strong",{parentName:"p"},"price range")," but there may be others like the apartment size, etc. You can split the pagination pages to only contain listings within that range, e.g. products costing between $10 and $20."),(0,r.kt)("p",null,"This has several benefits:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"All listings can eventually be found in a range."),(0,r.kt)("li",{parentName:"ol"},"The ranges do not overlap, so we scrape the smallest possible number of pages and avoid duplicate listings."),(0,r.kt)("li",{parentName:"ol"},"Ranges can be controlled by a generic algorithm that is simple to re-use for different sites.")),(0,r.kt)("h2",{id:"splitting-pages-with-range-filters"},"Splitting pages with range filters"),(0,r.kt)("p",null,"In the previous section, we analyzed different options to split the pages to overcome the pagination limit. We have chosen range filters as the most reliable way to do that. In this section, we will discuss a generic algorithm to work with ranges, look at a few special cases and then write an example crawler."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"An example of range filters on a website",src:n(91169).Z,width:"800",height:"269"})),(0,r.kt)("h3",{id:"the-algorithm"},"The algorithm"),(0,r.kt)("p",null,"The core algorithm is simple and can be used on any (even overlapping) range. This is a simplified presentation, we will discuss the details later."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"We choose a few pivot ranges with a similar number of products and enqueue them. For example, ",(0,r.kt)("strong",{parentName:"li"},"$0-$10"),", ",(0,r.kt)("strong",{parentName:"li"},"$100-$1000"),", ",(0,r.kt)("strong",{parentName:"li"},"$1000-$10000"),", ",(0,r.kt)("strong",{parentName:"li"},"$10000-"),"."),(0,r.kt)("li",{parentName:"ol"},"For each range, we open the page and check if the listings are below the limit. If yes, we continue to step 3. If not, we split the filter in half, e.g. ",(0,r.kt)("strong",{parentName:"li"},"$0-$10")," to ",(0,r.kt)("strong",{parentName:"li"},"$0-$5")," and ",(0,r.kt)("strong",{parentName:"li"},"$5-$10")," and enqueue those again. We recursively repeat step ",(0,r.kt)("strong",{parentName:"li"},"2")," for each range as long as needed."),(0,r.kt)("li",{parentName:"ol"},"We now have a pagination URL that is below the limit, we enqueue it under a pagination label and start enqueuing products.")),(0,r.kt)("p",null,"Because the algorithm is recursive, we don't need to think about how big the final ranges should be, the algorithm will find them over time."),(0,r.kt)("h3",{id:"special-cases-to-look-for"},"Special cases to look for"),(0,r.kt)("p",null,"We have the base algorithm, but before we start coding, let's answer a few questions to get more insight."),(0,r.kt)("h4",{id:"can-the-ranges-overlap"},"Can the ranges overlap?"),(0,r.kt)("p",null,"Some sites will allow you to construct non-overlapping ranges. For example, you can set the ranges with cents, e.g. ",(0,r.kt)("strong",{parentName:"p"},"$0-$4.99"),", ",(0,r.kt)("strong",{parentName:"p"},"$5-$9.99"),", etc. If that is possible, create the pivot ranges this way, too."),(0,r.kt)("p",null,"Non-overlapping ranges should remove the possibility of duplicate products (unless a ",(0,r.kt)("a",{parentName:"p",href:"#can-a-listing-have-more-values",target:null,rel:null},"listing has multiple values"),") and the lowest number of pages."),(0,r.kt)("p",null,"If the website supports only overlapping ranges (e.g. ",(0,r.kt)("strong",{parentName:"p"},"$0-$5"),", ",(0,r.kt)("strong",{parentName:"p"},"$5-10"),"), it is not a big problem. Only a small portion of the listings will be duplicates, and they can be removed using a ",(0,r.kt)("a",{parentName:"p",href:"/platform/storage/request-queue",target:null,rel:null},"request queue"),"."),(0,r.kt)("h4",{id:"can-a-listing-have-more-values"},"Can a listing have more values?"),(0,r.kt)("p",null,"In rare cases, a listing can have more than one value that you are filtering in a range. A typical example is ",(0,r.kt)("a",{parentName:"p",href:"https://amazon.com",target:"_blank",rel:"noopener"},"amazon.com"),", where each product has several offers and those offers have different prices. If any of those offers is within the range, the product is shown."),(0,r.kt)("p",null,"There is no easy way to get around this but the price range split works even with duplicate listings, just use a ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set",target:"_blank",rel:"noopener"},"JS set")," or request queue to deduplicate them."),(0,r.kt)("h4",{id:"how-is-the-range-passed-to-the-url"},"How is the range passed to the URL?"),(0,r.kt)("p",null,"In the easiest case, you can pass the range directly in the page's URL. For example, ",(0,r.kt)("inlineCode",{parentName:"p"},"<https://mysite.com/products?price=0-10>"),". Sometimes, you will need to do some query composition because the price range might be encoded together with more information into a single parameter."),(0,r.kt)("p",null,"Some sites don't have page URLs with filters and instead load the filtered products via ",(0,r.kt)("a",{parentName:"p",href:"/platform/web-scraping-101/web-scraping-techniques#xhrs",target:null,rel:null},"XHRs"),". Those can be GET or POST requests with various ",(0,r.kt)("strong",{parentName:"p"},"URL")," and ",(0,r.kt)("strong",{parentName:"p"},"payload")," syntax."),(0,r.kt)("p",null,"The nice thing here is that if you get to understand how their internal API works, you can have it return more products per page or extract full product details just from this single request."),(0,r.kt)("p",null,"In addition, XHRs are smaller and faster than loading an HTML page. On the other hand, you should not overly abuse them (with setting overly large limits), as this can expose you."),(0,r.kt)("h4",{id:"does-the-website-show-the-number-of-products-for-each-filtered-page"},"Does the website show the number of products for each filtered page?"),(0,r.kt)("p",null,"If it does, it is a nice bonus. It gives us an easy way to check if we are over or below the pagination limit and helps with analytics."),(0,r.kt)("p",null,"If it doesn't, we have to find a different way to check if the number of listings is within a limit. One option is to go to the last allowed page of the pagination. If that page is still full products, we can assume the filter is over the limit."),(0,r.kt)("h4",{id:"how-to-handle-open-ends-of-the-range"},"How to handle (open) ends of the range"),(0,r.kt)("p",null,"Logically, every full (price) range starts at 0 and ends at infinity. But the way this is encoded will differ on each site. The end of the price range can be either closed (0) or open (infinity). Open ranges require special handling when you split them (we will get to that)."),(0,r.kt)("p",null,"Most sites will let you start with 0 (there might be exceptions, where you will have make the start open), so we can use just that. The high end is more complicated. Because you don't know the biggest price, it is best to leave it open and handle it specially. Internally you can just assign ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," to the value."),(0,r.kt)("p",null,"Here are few examples of a query parameter with an open and closed high-end range:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Open: ",(0,r.kt)("inlineCode",{parentName:"li"},"p:100-")," (higher than 100), Closed: ",(0,r.kt)("inlineCode",{parentName:"li"},"p:100-200")," (between 100 and 200)"),(0,r.kt)("li",{parentName:"ul"},"Open: ",(0,r.kt)("inlineCode",{parentName:"li"},"min_price=100"),", Closed: ",(0,r.kt)("inlineCode",{parentName:"li"},"min_price=100&max_price=200"))),(0,r.kt)("h4",{id:"can-the-range-exceed-the-limit-on-a-single-value"},"Can the range exceed the limit on a single value?"),(0,r.kt)("p",null,"In very rare cases, a site will have so many listings that a single value (e.g. ",(0,r.kt)("strong",{parentName:"p"},"$100")," or ",(0,r.kt)("strong",{parentName:"p"},"$4.99"),") will include a number of listings over the limit. ",(0,r.kt)("a",{parentName:"p",href:"#the-algorithm",target:null,rel:null},"The basic algorithm")," will recurse until the ",(0,r.kt)("strong",{parentName:"p"},"min")," value equals the ",(0,r.kt)("strong",{parentName:"p"},"max")," value and then stop because it cannot split that single value anymore."),(0,r.kt)("p",null,"In this rare case, you will need to add another range or other filters to combine it to get an even deeper split."),(0,r.kt)("h3",{id:"implementing-a-range-filter"},"Implementing a range filter"),(0,r.kt)("p",null,"This section shows a simple code example implementing our solution for an imaginary website. Writing a real solution will bring up more complex problems but the previous section should prepare you for some of them."),(0,r.kt)("p",null,"First, let's define our imaginary site:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"It has a single ",(0,r.kt)("inlineCode",{parentName:"li"},"/products")," path that contains all the products that we want to scrape."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Max")," pagination limit is ",(0,r.kt)("strong",{parentName:"li"},"1000"),"."),(0,r.kt)("li",{parentName:"ul"},"The site contains over a million products."),(0,r.kt)("li",{parentName:"ul"},"It allows for filtering over a price range with query parameters ",(0,r.kt)("inlineCode",{parentName:"li"},"min_price")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"max_price"),"."),(0,r.kt)("li",{parentName:"ul"},"If ",(0,r.kt)("inlineCode",{parentName:"li"},"min_price")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"max_price")," are not defined, it opens that end of the range (all products up to or all products over that)."),(0,r.kt)("li",{parentName:"ul"},"The site allows to specify the price in cents."),(0,r.kt)("li",{parentName:"ul"},"Pagination is done via ",(0,r.kt)("inlineCode",{parentName:"li"},"page")," query parameter.")),(0,r.kt)("h4",{id:"define-and-enqueue-pivot-ranges"},"Define and enqueue pivot ranges"),(0,r.kt)("p",null,"This step is not necessary but it is useful. The algorithm doesn't start with splitting over too large or too small values."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { Actor } from 'apify';\nimport { CheerioCrawler } from 'crawlee';\n\nawait Actor.init();\n\nconst MAX_PRODUCTS_PAGINATION = 1000;\n\n// These is just an example, choose what makes sense for your site\nconst PIVOT_PRICE_RANGES = [\n    { min: 0, max: 9.99 },\n    { min: 10, max: 99.99 },\n    { min: 100, max: 999.99 },\n    { min: 1000, max: 9999.99 },\n    { min: 10000, max: null }, // open-ended\n];\n\n// Let's create a helper function for creating the filter URLs, you can move those to a utils.js file\nconst createFilterUrl = ({ min, max }) => {\n    const minString = `min_price=${min}`;\n    // We don't want to pass the parameter at all if it is null (open-ended)\n    const maxString = max ? `&max_price=${max}` : '';\n    return `https://www.mysite.com/products?${minString}${maxString}`;\n};\n\n// And another helper for getting filters back from the URL, we could also pass them in userData\nconst getFiltersFromUrl = (url) => {\n    const min = Number(url.match(/min_price=([0-9.]+)/)[1]);\n    // Max price might be empty\n    const maxMatch = url.match(/max_price=([0-9.]+)/);\n    const max = maxMatch ? Number(maxMatch[1]) : null;\n    return { min, max };\n}\n\n// Actor setup things here\nconst crawler = new CheerioCrawler({\n    async requestHandler(context) {\n        // ...\n    },\n});\n\n// Let's create the pivot requests\nconst initialRequests = [];\nfor (const { min, max } of PIVOT_PRICE_RANGES) {\n    initialRequests.push({\n        url: createFilterUrl({ min, max }),\n        label: 'FILTER',\n    });\n}\n// Let's start the crawl\nawait crawler.run(initialRequests);\n\nawait Actor.exit();\n")),(0,r.kt)("h4",{id:"define-the-logic-for-the-filter-page"},"Define the logic for the ",(0,r.kt)("inlineCode",{parentName:"h4"},"FILTER")," page"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { CheerioCrawler } from 'crawlee';\n\n// Doesn't matter what Crawler class we choose\nconst crawler = new CheerioCrawler({\n    // Crawler options here\n    // ...\n    async requestHandler({ request, $ }) {\n        const { label } = request;\n        if (label === 'FILTER') {\n            // Of course, change the selectors and make it more robust\n            const numberOfProducts = Number($('.product-count').text());\n\n            // The filter is either good enough of we have to split it\n            if (numberOfProducts <= MAX_PRODUCTS_PAGINATION) {\n                // We just pass the URL for scraping, we could optimize it so the page is not opened again\n                await crawler.addRequests([{\n                    url: `${request.url}&page=1`,\n                    userData: { label: 'PAGINATION' },\n                }]);\n            } else {\n                // Here we have to split the filter\n                // To be continued...\n            }\n        }\n        if (label === 'PAGINATION') {\n            // We know we are under the limit here\n            // Enqueue next page as long as possible\n            // Enqueue or scrape products normally\n        }\n    }\n});\n")),(0,r.kt)("h4",{id:"split-price-filters"},"Split price filters"),(0,r.kt)("p",null,"We have the base of the crawler set up. The last part we are missing is the price filter splitting. Let's use a generic function for this. We can place it into the ",(0,r.kt)("inlineCode",{parentName:"p"},"utils.js")," file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// utils.js\nexport function splitFilter(filter) {\n    const { min, max } = filter;\n    // Don't forget that max can be null and we have to handle that situation\n    if (max && min > max) {\n        throw new Error(`WRONG FILTER - min(${min}) is greater than max(${max})`);\n    }\n\n    // We crate a middle value for the split. If max in null, we will use double min as the middle value\n    const middle = max\n        ? min + Math.floor((max - min) / 2)\n        : min * 2;\n\n    // We have to do the Math.max and Math.min to prevent having min > max\n    const filterMin = {\n        min,\n        max: Math.max(middle, min),\n    };\n    const filterMax = {\n        min: max ? Math.min(middle + 1, max) : middle + 1,\n        max,\n    };\n    // We return 2 new filters\n    return [filterMin, filterMax];\n}\n")),(0,r.kt)("h4",{id:"enqueue-the-filters"},"Enqueue the filters"),(0,r.kt)("p",null,"Let's finish the crawler now. This code example will go inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"else")," block of the previous crawler example."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const { min, max } = getFiltersFromUrl(request.url);\n// Our generic splitFilter function doesn't account for decimal values so we will have to convert to cents and back to dollars\nconst newFilters = splitFilter({ min: min * 100, max: max * 100 });\n\n// And we just enqueue those 2 new filters so the process will recursively repeat until all pages get to the PAGINATION phase\nconst requestsToEnqueue = [];\nfor (const filter of newFilters) {\n    requestsToEnqueue.push({\n        // Remember that we have to convert back from cents to dollars\n        url: createFilterUrl({ min: filter.min / 100, max: filter.max / 100 }),\n        label: 'FILTER',\n    });\n}\n\nawait crawler.addRequests(requestsToEnqueue);\n")),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,"And that's it. We have an elegant and simple solution for a complicated problem. In a real project, you would want to make this a bit more robust, ",(0,r.kt)("a",{parentName:"p",href:"/platform/tutorials/analyze-pages-and-fix-errors",target:null,rel:null},"use logs"),", and save analytics data. This will let you know what filters you went through and how many products each of them had."),(0,r.kt)("p",null,"Check out the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/metalwarrior665/apify-utils/tree/master/examples/crawler-with-filters",target:"_blank",rel:"noopener"},"full code example"),"."))}m.isMDXComponent=!0},91169:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/pagination-filters-ad8028367191ccc8ad1c7835e3f21067.png"},6521:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,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"}}]);