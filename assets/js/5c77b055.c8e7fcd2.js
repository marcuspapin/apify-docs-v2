"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[8305],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),h=r,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||a;return n?o.createElement(m,i(i({ref:t},p),{},{components:n})):o.createElement(m,i({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},80143:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var o=n(87462),r=n(63366),a=(n(67294),n(3905)),i=["components"],s={title:"Node.js scraper - II",description:"Continue learning how to create a web scraper with Node.js and Cheerio. Learn how to parse HTML and print the results of the data your scraper has collected.",sidebar_position:7,slug:"/web-scraping-for-beginners/data-collection/node-continued"},l="Finish Node.js scraper",c={unversionedId:"webscraping/web_scraping_for_beginners/data_extraction/node_continued",id:"webscraping/web_scraping_for_beginners/data_extraction/node_continued",title:"Node.js scraper - II",description:"Continue learning how to create a web scraper with Node.js and Cheerio. Learn how to parse HTML and print the results of the data your scraper has collected.",source:"@site/sources/academy/webscraping/web_scraping_for_beginners/data_extraction/node_continued.md",sourceDirName:"webscraping/web_scraping_for_beginners/data_extraction",slug:"/web-scraping-for-beginners/data-collection/node-continued",permalink:"/academy/web-scraping-for-beginners/data-collection/node-continued",draft:!1,editUrl:"https://github.com/apify/apify-docs-v2/edit/master/sources/academy/webscraping/web_scraping_for_beginners/data_extraction/node_continued.md",tags:[],version:"current",lastUpdatedBy:"Jind\u0159ich B\xe4r",lastUpdatedAt:1676040579,formattedLastUpdatedAt:"Feb 10, 2023",sidebarPosition:7,frontMatter:{title:"Node.js scraper - II",description:"Continue learning how to create a web scraper with Node.js and Cheerio. Learn how to parse HTML and print the results of the data your scraper has collected.",sidebar_position:7,slug:"/web-scraping-for-beginners/data-collection/node-continued"},sidebar:"academy",previous:{title:"Node.js scraper - I",permalink:"/academy/web-scraping-for-beginners/data-collection/node-js-scraper"},next:{title:"Saving results to CSV",permalink:"/academy/web-scraping-for-beginners/data-collection/save-to-csv"}},p={},d=[{value:"Querying data with Cheerio",id:"querying-with-cheerio",level:2},{value:"Extracting product data",id:"extracting-data",level:2}],u={toc:d};function h(e){var t=e.components,s=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"finish-scraper"},"Finish Node.js scraper"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Continue learning how to create a web scraper with Node.js and Cheerio. Learn how to parse HTML and print the results of the data your scraper has collected.")),(0,a.kt)("hr",null),(0,a.kt)("p",null,"In the first part of the Node.js tutorial we downloaded the HTML of our ",(0,a.kt)("a",{parentName:"p",href:"https://warehouse-theme-metal.myshopify.com/collections/sales",target:"_blank",rel:"noopener"},"Warehouse store")," and parsed it with Cheerio. Now, we will replicate the extraction logic from the ",(0,a.kt)("a",{parentName:"p",href:"/academy/web-scraping-for-beginners/data-collection/using-devtools",target:null,rel:null},"Extracting Data with DevTools")," lessons and finish our scraper."),(0,a.kt)("h2",{id:"querying-with-cheerio"},"Querying data with Cheerio"),(0,a.kt)("p",null,"As a reminder, the data we need for each product on the page is available in the elements that have the ",(0,a.kt)("inlineCode",{parentName:"p"},"product-item")," class attribute."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Selecting an element from the Elements tab",src:n(75546).Z,width:"1509",height:"588"})),(0,a.kt)("p",null,"To get all the elements with that class using Cheerio, we call the ",(0,a.kt)("inlineCode",{parentName:"p"},"$")," function with the appropriate CSS selector. Same as we would with the ",(0,a.kt)("inlineCode",{parentName:"p"},"document.querySelectorAll()")," function."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// In browser DevTools Console\nconst products = document.querySelectorAll('.product-item');\n\n// In Node.js with Cheerio\nconst products = $('.product-item');\n")),(0,a.kt)("p",null,"We will use the same approach as in the previous DevTools lessons. Using a ",(0,a.kt)("inlineCode",{parentName:"p"},"for..of")," loop we will iterate over the list of products we saved in the ",(0,a.kt)("inlineCode",{parentName:"p"},"products")," variable. The code is a little different from DevTools, because we're using Node.js and Cheerio instead of a browser's native DOM manipulation functions, but the principle is exactly the same."),(0,a.kt)("p",null,"Replace the code in your ",(0,a.kt)("strong",{parentName:"p"},"main.js")," with the following, and run it with ",(0,a.kt)("inlineCode",{parentName:"p"},"node main.js")," in your terminal."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// main.js\nimport { gotScraping } from 'got-scraping';\nimport cheerio from 'cheerio';\n\nconst storeUrl = 'https://warehouse-theme-metal.myshopify.com/collections/sales';\n\n// Download HTML with Got Scraping\nconst response = await gotScraping(storeUrl);\nconst html = response.body;\n\n// Parse HTML with Cheerio\nconst $ = cheerio.load(html);\n\n// Find all products on the page\nconst products = $('.product-item');\n\n// Loop through all the products\n// and print their text to terminal\nfor (const product of products) {\n    const productElement = $(product);\n    const productText = productElement.text();\n\n    console.log(productText);\n}\n")),(0,a.kt)("p",null,"After you run this script, you will see data of all the 24 products printed in your terminal. The output will be messy, but that's ok. Next, we will clean it."),(0,a.kt)("h2",{id:"extracting-data"},"Extracting product data"),(0,a.kt)("p",null,"To clean the output, we need to repeat the process from the DevTools lessons and add individual data point extraction to the loop. From those lessons, we know that each of our product cards includes an ",(0,a.kt)("inlineCode",{parentName:"p"},'<a class="product-item__title ...">')," element which holds the product's title, and a ",(0,a.kt)("inlineCode",{parentName:"p"},'<span class="price ...">')," element which includes the product's price."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Finding child elements in Elements tab",src:n(8090).Z,width:"2358",height:"1156"})),(0,a.kt)("p",null,"We will loop over all the ",(0,a.kt)("inlineCode",{parentName:"p"},"products")," and extract the data points from each of them using the ",(0,a.kt)("inlineCode",{parentName:"p"},"for..of")," loop. For reference, this a part of the code from the DevTools lesson, where we collected the data using the browser ",(0,a.kt)("strong",{parentName:"p"},"DevTools Console"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// This code will only work in the browser, and NOT in Node.js\nconst results = [];\n\nfor (const product of products) {\n    const titleElement = product.querySelector('a.product-item__title');\n    const title = titleElement.textContent.trim();\n\n    const priceElement = subwoofer.querySelector('span.price');\n    const price = priceElement.childNodes[2].nodeValue.trim();\n\n    results.push({ title, price });\n}\n")),(0,a.kt)("p",null,"And this snippet shows the same piece of code when using ",(0,a.kt)("strong",{parentName:"p"},"Node.js and Cheerio"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const results = [];\n\nfor (const product of products) {\n    const titleElement = $(product).find('a.product-item__title');\n    const title = titleElement.text().trim();\n\n    const priceElement = $(product).find('span.price');\n    const price = priceElement.contents()[2].nodeValue.trim();\n\n    results.push({ title, price });\n}\n")),(0,a.kt)("p",null,"The main difference is that we used the ",(0,a.kt)("a",{parentName:"p",href:"https://cheerio.js.org/classes/Cheerio.html#find",target:"_blank",rel:"noopener"},(0,a.kt)("inlineCode",{parentName:"a"},".find()"))," function to select the title and price elements and also the ",(0,a.kt)("inlineCode",{parentName:"p"},".contents()")," function instead of the ",(0,a.kt)("inlineCode",{parentName:"p"},"childNodes")," attribute. If you find the differences confusing, don't worry about it. It will begin to feel very natural after a bit of practice."),(0,a.kt)("p",null,"The final scraper code looks like this. Replace the code in your ",(0,a.kt)("strong",{parentName:"p"},"main.js")," file with this code and run it using ",(0,a.kt)("inlineCode",{parentName:"p"},"node main.js")," in your terminal."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// main.js\nimport { gotScraping } from 'got-scraping';\nimport cheerio from 'cheerio';\n\nconst storeUrl = 'https://warehouse-theme-metal.myshopify.com/collections/sales';\n\n// Download HTML with Got Scraping\nconst response = await gotScraping(storeUrl);\nconst html = response.body;\n\n// Parse HTML with Cheerio\nconst $ = cheerio.load(html);\n\n// Find all products on the page\nconst products = $('.product-item');\n\nconst results = [];\nfor (const product of products) {\n    const titleElement = $(product).find('a.product-item__title');\n    const title = titleElement.text().trim();\n\n    const priceElement = $(product).find('span.price');\n    const price = priceElement.contents()[2].nodeValue.trim();\n\n    results.push({ title, price });\n}\n\nconsole.log(results);\n")),(0,a.kt)("p",null,"After running the code, you will see this output in your terminal:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},"[\n  {\n    title: 'JBL Flip 4 Waterproof Portable Bluetooth Speaker',\n    price: '$74.95'\n  },\n  {\n    title: 'Sony XBR-950G BRAVIA 4K HDR Ultra HD TV',\n    price: 'From $1,398.00'\n  },\n  { title: 'Sony SACS9 10\" Active Subwoofer', price: '$158.00' },\n  { title: 'Sony PS-HX500 Hi-Res USB Turntable', price: '$398.00' },\n  {\n    title: 'Klipsch R-120SW Powerful Detailed Home Speaker - Unit',\n    price: '$324.00'\n  },\n\n...\n")),(0,a.kt)("p",null,"Congratulations! You completed the ",(0,a.kt)("strong",{parentName:"p"},"Basics of data extraction")," section of the Web scraping for beginners course. A quick recap of what you learned:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The basic terminology around web scraping, crawling, HTML, CSS and JavaScript."),(0,a.kt)("li",{parentName:"ol"},"How to use browser DevTools and Console to inspect web pages and manipulate them using CSS and JavaScript."),(0,a.kt)("li",{parentName:"ol"},"How to install Node.js and set up your computer for building scrapers."),(0,a.kt)("li",{parentName:"ol"},"How to download a website's HTML using Got Scraping and then parse it using Cheerio to extract valuable data.")),(0,a.kt)("p",null,"Great job! \ud83d\udc4f\ud83c\udf89"),(0,a.kt)("h1",{id:"next"},"Next up"),(0,a.kt)("p",null,"What's next? While we were able to extract the data, it's not super useful to have it printed to the terminal. In the ",(0,a.kt)("a",{parentName:"p",href:"/academy/web-scraping-for-beginners/data-collection/save-to-csv",target:null,rel:null},"next, bonus lesson"),", we will learn how to convert the data to a CSV and save it to a file."))}h.isMDXComponent=!0},75546:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/devtools-collection-class-0c9aab05cfd98e0e534e0c9adbac28da.png"},8090:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/devtools-find-child-elements-c503170e9925d6e564f97317bf7503b6.png"}}]);