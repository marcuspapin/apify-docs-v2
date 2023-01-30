"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[9898],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),h=o,f=u["".concat(l,".").concat(h)]||u[h]||d[h]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},59560:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],s={title:"Node.js scraper - II",description:"Continue learning how to create a web scraper with Node.js and Cheerio. Learn how to parse HTML and print the results of the data your scraper has collected.",sidebar_position:7,slug:"/web-scraping-for-beginners/data-collection/node-continued"},l="Finish Node.js scraper",c={unversionedId:"webscraping/web_scraping_for_beginners/data_collection/node_continued",id:"webscraping/web_scraping_for_beginners/data_collection/node_continued",title:"Node.js scraper - II",description:"Continue learning how to create a web scraper with Node.js and Cheerio. Learn how to parse HTML and print the results of the data your scraper has collected.",source:"@site/sources/academy/webscraping/web_scraping_for_beginners/data_collection/node_continued.md",sourceDirName:"webscraping/web_scraping_for_beginners/data_collection",slug:"/web-scraping-for-beginners/data-collection/node-continued",permalink:"/academy/web-scraping-for-beginners/data-collection/node-continued",draft:!1,tags:[],version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1675095521,formattedLastUpdatedAt:"Jan 30, 2023",sidebarPosition:7,frontMatter:{title:"Node.js scraper - II",description:"Continue learning how to create a web scraper with Node.js and Cheerio. Learn how to parse HTML and print the results of the data your scraper has collected.",sidebar_position:7,slug:"/web-scraping-for-beginners/data-collection/node-continued"},sidebar:"academy",previous:{title:"Node.js scraper - I",permalink:"/academy/web-scraping-for-beginners/data-collection/node-js-scraper"},next:{title:"Saving results to CSV",permalink:"/academy/web-scraping-for-beginners/data-collection/save-to-csv"}},p={},d=[{value:"Querying data with Cheerio",id:"querying-with-cheerio",level:2},{value:"Collecting final data",id:"collecting-data",level:2}],u={toc:d};function h(e){var t=e.components,s=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"finish-scraper"},"Finish Node.js scraper"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Continue learning how to create a web scraper with Node.js and Cheerio. Learn how to parse HTML and print the results of the data your scraper has collected.")),(0,a.kt)("hr",null),(0,a.kt)("p",null,"In the first part of the Node.js tutorial we downloaded the HTML of our ",(0,a.kt)("a",{parentName:"p",href:"https://demo-webstore.apify.org/search/on-sale",target:"_blank",rel:"noopener"},"tutorial e-commerce site")," and parsed it with Cheerio. Now, we will replicate the collection logic from the ",(0,a.kt)("a",{parentName:"p",href:"/academy/web-scraping-for-beginners/data-collection/using-devtools",target:null,rel:null},"Collecting Data with DevTools")," lessons and finish our scraper."),(0,a.kt)("h2",{id:"querying-with-cheerio"},"Querying data with Cheerio"),(0,a.kt)("p",null,"As a reminder, the data we need for each product on the page is available in each ",(0,a.kt)("inlineCode",{parentName:"p"},'a[href*="/product/"]')," element."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Selecting an element from the Elements tab",src:n(7483).Z,width:"2056",height:"1192"})),(0,a.kt)("p",null,"To get all the elements with that CSS selector using Cheerio, we call the ",(0,a.kt)("inlineCode",{parentName:"p"},"$")," function with the selector."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"$('a[href*=\"/product/\"]');\n")),(0,a.kt)("p",null,"We will use the same approach as in the previous DevTools lessons. Using a ",(0,a.kt)("inlineCode",{parentName:"p"},"for..of")," loop we will iterate over the array of products we saved in the ",(0,a.kt)("inlineCode",{parentName:"p"},"products")," variable. The code is a little different from DevTools, because we're using Node.js and Cheerio instead of a browser's native DOM manipulation functions."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// main.js\nimport { gotScraping } from 'got-scraping';\nimport cheerio from 'cheerio';\n\nconst response = await gotScraping('https://demo-webstore.apify.org/search/on-sale');\nconst html = response.body;\n\nconst $ = cheerio.load(html);\nconst products = $('a[href*=\"/product/\"]');\n\nfor (const product of products) {\n    const element = $(product);\n\n    console.log(element.text());\n}\n")),(0,a.kt)("p",null,"After you run this script, you should see data of all the 32 products printed in your terminal. Don't forget about the ",(0,a.kt)("inlineCode",{parentName:"p"},"const element = $(product);")," line. Without wrapping each ",(0,a.kt)("inlineCode",{parentName:"p"},"product")," with ",(0,a.kt)("inlineCode",{parentName:"p"},"$()"),", we wouldn't be able to call the ",(0,a.kt)("inlineCode",{parentName:"p"},".text()")," function on it."),(0,a.kt)("h2",{id:"collecting-data"},"Collecting final data"),(0,a.kt)("p",null,"Now, we just need to repeat the process from the DevTools modules and add individual data point collection to the loop. From those lessons, we know that each of our product container ",(0,a.kt)("inlineCode",{parentName:"p"},"<a>")," tags includes an ",(0,a.kt)("inlineCode",{parentName:"p"},"<h3>")," element including the title, and a ",(0,a.kt)("inlineCode",{parentName:"p"},"<div>")," price element matching the selector ",(0,a.kt)("inlineCode",{parentName:"p"},'div[class*="price"]'),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Finding child elements in Elements tab",src:n(76575).Z,width:"1756",height:"672"})),(0,a.kt)("p",null,"We will loop over all the ",(0,a.kt)("inlineCode",{parentName:"p"},"products")," and collect the data points from each of them using the ",(0,a.kt)("inlineCode",{parentName:"p"},"for..of")," loop. For reference, this is the code from the DevTools lesson, where we collected the data ",(0,a.kt)("strong",{parentName:"p"},"using a browser"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// This code will only work in the browser, and NOT in Node.js\nconst results = [];\n\nfor (const product of products) {\n    const title = product.querySelector('h3').textContent.trim();\n    const price = product.querySelector('div[class*=\"price\"]').textContent.trim();\n\n    results.push({\n        title,\n        price,\n    });\n};\n\nconsole.log(results);\n")),(0,a.kt)("p",null,"And this is how the code will look like when using ",(0,a.kt)("strong",{parentName:"p"},"Node.js and Cheerio"),". Similar, right?!"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const results = [];\n\nfor (const product of products) {\n    const element = $(product);\n\n    const title = element.find('h3').text();\n    const price = element.find('div[class*=\"price\"]').text();\n\n    results.push({\n        title,\n        price,\n    })\n}\n\nconsole.log(results);\n")),(0,a.kt)("p",null,"The main difference is that we used the ",(0,a.kt)("a",{parentName:"p",href:"https://api.jquery.com/find/",target:"_blank",rel:"noopener"},(0,a.kt)("inlineCode",{parentName:"a"},".find()"))," function to select our ",(0,a.kt)("inlineCode",{parentName:"p"},"h3")," and ",(0,a.kt)("inlineCode",{parentName:"p"},'div[class*="price"]')," elements. If you find the differences confusing, don't worry about it. It will begin to feel very natural after a bit of practice. The final scraper code looks like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// main.js\nimport { gotScraping } from 'got-scraping';\nimport cheerio from 'cheerio';\n\nconst response = await gotScraping('https://demo-webstore.apify.org/search/on-sale');\nconst html = response.body;\n\nconst $ = cheerio.load(html);\nconst products = $('a[href*=\"/product/\"]');\n\nconst results = [];\n\nfor (const product of products) {\n    const element = $(product);\n\n    const title = element.find('h3').text();\n    const price = element.find('div[class*=\"price\"]').text();\n\n    results.push({\n        title,\n        price,\n    });\n}\n\nconsole.log(results);\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Printing all products&#39; data to terminal",src:n(89195).Z,width:"1098",height:"856"})),(0,a.kt)("p",null,"If you were able to get here, run the code, get results and also understand everything, you can give yourself a pat on the back and congratulate yourself on completing the ",(0,a.kt)("strong",{parentName:"p"},"Basics of data collection")," section of the Web scraping for beginners course. Great job! \ud83d\udc4f\ud83c\udf89"),(0,a.kt)("h1",{id:"next"},"Next up"),(0,a.kt)("p",null,"While we were able to collect the data, it's not very useful to have those printed to the console. In the ",(0,a.kt)("a",{parentName:"p",href:"/academy/web-scraping-for-beginners/data-collection/save-to-csv",target:null,rel:null},"next, bonus lesson"),", we will learn how to convert the data to a CSV and save it to a file."))}h.isMDXComponent=!0},76575:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/find-child-elements-852900a399981a52085a40a884f9cac3.png"},7483:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/selecting-container-element-c12da7ec308ac1c8976c1bbd939a3768.png"},89195:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/terminal-all-products-data-516e34f3e87814636db868b01217bc6e.png"}}]);