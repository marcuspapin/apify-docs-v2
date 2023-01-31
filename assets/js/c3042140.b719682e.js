"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[340],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),g=o,m=u["".concat(l,".").concat(g)]||u[g]||d[g]||a;return n?r.createElement(m,s(s({ref:t},p),{},{components:n})):r.createElement(m,s({ref:t},p))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},51366:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),s=["components"],i={title:"Saving results to CSV",description:"Learn how to save the results of your scraper's collected data to a CSV file that can be opened in Excel, Google Sheets, or any other spreadsheets program.",sidebar_position:8,slug:"/web-scraping-for-beginners/data-collection/save-to-csv"},l="Saving results to CSV",c={unversionedId:"webscraping/web_scraping_for_beginners/data_collection/save_to_csv",id:"webscraping/web_scraping_for_beginners/data_collection/save_to_csv",title:"Saving results to CSV",description:"Learn how to save the results of your scraper's collected data to a CSV file that can be opened in Excel, Google Sheets, or any other spreadsheets program.",source:"@site/sources/academy/webscraping/web_scraping_for_beginners/data_collection/save_to_csv.md",sourceDirName:"webscraping/web_scraping_for_beginners/data_collection",slug:"/web-scraping-for-beginners/data-collection/save-to-csv",permalink:"/academy/web-scraping-for-beginners/data-collection/save-to-csv",draft:!1,tags:[],version:"current",lastUpdatedBy:"Jind\u0159ich B\xe4r",lastUpdatedAt:1675174133,formattedLastUpdatedAt:"Jan 31, 2023",sidebarPosition:8,frontMatter:{title:"Saving results to CSV",description:"Learn how to save the results of your scraper's collected data to a CSV file that can be opened in Excel, Google Sheets, or any other spreadsheets program.",sidebar_position:8,slug:"/web-scraping-for-beginners/data-collection/save-to-csv"},sidebar:"academy",previous:{title:"Node.js scraper - II",permalink:"/academy/web-scraping-for-beginners/data-collection/node-continued"},next:{title:"Basics of crawling",permalink:"/academy/web-scraping-for-beginners/crawling"}},p={},d=[{value:"Converting to CSV",id:"converting-to-csv",level:2},{value:"Writing the CSV to a file",id:"writing-to-file",level:2},{value:"Next up",id:"next",level:2}],u={toc:d};function g(e){var t=e.components,i=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"saving-to-csv"},"Saving results to CSV"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Learn how to save the results of your scraper's collected data to a CSV file that can be opened in Excel, Google Sheets, or any other spreadsheets program.")),(0,a.kt)("hr",null),(0,a.kt)("p",null,"In the last lesson, we were able collect data about all the on-sale products from ",(0,a.kt)("a",{parentName:"p",href:"https://demo-webstore.apify.org/",target:"_blank",rel:"noopener"},"our tutorial ",(0,a.kt)("strong",{parentName:"a"},"Fakestore")," website"),". That's great. But we ended up with results printed to the terminal, which is not very useful for further processing. In this lesson, we'll learn how to save that data into a CSV file that you can then open in Excel or Google Sheets."),(0,a.kt)("h2",{id:"converting-to-csv"},"Converting to CSV"),(0,a.kt)("p",null,"It might look like a big programming challenge to transform a JavaScript object into a CSV, but thanks to NPM, this is going to be a walk in the park. After googling ",(0,a.kt)("strong",{parentName:"p"},"json to csv npm")," we found that there's a library called ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/json2csv",target:"_blank",rel:"noopener"},(0,a.kt)("inlineCode",{parentName:"a"},"json2csv"))," that can convert a JavaScript object to CSV format with a single function call. ",(0,a.kt)("em",{parentName:"p"},"Perfect!")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"To install ",(0,a.kt)("inlineCode",{parentName:"p"},"json2csv"),", run ",(0,a.kt)("inlineCode",{parentName:"p"},"npm i json2csv")," in your project")),(0,a.kt)("p",null,"First, we need to import the ",(0,a.kt)("inlineCode",{parentName:"p"},"parse()")," function from the library."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { parse } from 'json2csv';\n")),(0,a.kt)("p",null,"Next, we need to parse the ",(0,a.kt)("inlineCode",{parentName:"p"},"results")," array from the previous lesson with the imported function."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const csv = parse(results);\n")),(0,a.kt)("p",null,"The full code including the earlier scraping part now looks like this."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// main.js\nimport { gotScraping } from 'got-scraping';\nimport cheerio from 'cheerio';\nimport { parse } from 'json2csv';\n\nconst response = await gotScraping('https://demo-webstore.apify.org/search/on-sale');\nconst html = response.body;\n\nconst $ = cheerio.load(html);\nconst products = $('a[href*=\"/product/\"]');\n\nconst results = [];\n\nfor (const product of products) {\n    const element = $(product);\n\n    const title = element.find('h3').text();\n    const price = element.find('div[class*=\"price\"]').text();\n\n    results.push({\n        title,\n        price,\n    });\n}\n\nconst csv = parse(results);\nconsole.log(csv)\n")),(0,a.kt)("p",null,"And here's our newly created CSV printed to the console after running the script."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Printing CSV data to terminal",src:n(67284).Z,width:"864",height:"890"})),(0,a.kt)("h2",{id:"writing-to-file"},"Writing the CSV to a file"),(0,a.kt)("p",null,"The final task that remains is to save our CSV formatted data to a file on our disk, so we can open it or send it to someone. For this, we don't need any extra NPM packages because functions for saving files are included in Node.js."),(0,a.kt)("p",null,"First, we import the ",(0,a.kt)("inlineCode",{parentName:"p"},"writeFileSync")," function from the ",(0,a.kt)("inlineCode",{parentName:"p"},"fs")," (file system) package."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { writeFileSync } from 'fs';\n")),(0,a.kt)("p",null,"and then call it with a file name and the CSV data."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"writeFileSync('products.csv', csv);\n")),(0,a.kt)("p",null,"When we complete the code, it looks like this."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// main.js\nimport { gotScraping } from 'got-scraping';\nimport cheerio from 'cheerio';\nimport { parse } from 'json2csv';\nimport { writeFileSync } from 'fs';\n\nconst response = await gotScraping('https://demo-webstore.apify.org/search/on-sale');\nconst html = response.body;\n\nconst $ = cheerio.load(html);\nconst products = $('a[href*=\"/product/\"]');\n\nconst results = [];\n\nfor (const product of products) {\n    const element = $(product);\n\n    const title = element.find('h3').text();\n    const price = element.find('div[class*=\"price\"]').text();\n\n    results.push({\n        title,\n        price,\n    });\n}\n\nconst csv = parse(results);\nwriteFileSync('products.csv', csv);\n")),(0,a.kt)("p",null,"Finally, after running it again, we will find the ",(0,a.kt)("strong",{parentName:"p"},"products.csv")," file in our project folder. And when we open it with Excel/Google Sheets \u2013 voila!"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Displaying CSV data in Google Sheets",src:n(59910).Z,width:"852",height:"840"})),(0,a.kt)("p",null,"This marks the end of the ",(0,a.kt)("strong",{parentName:"p"},"Basics of data collection")," section of Web scraping for beginners. If you enjoyed the course, give us a thumbs up down below and if you're eager to learn more..."),(0,a.kt)("h2",{id:"next"},"Next up"),(0,a.kt)("p",null,"Next up are the ",(0,a.kt)("a",{parentName:"p",href:"/academy/web-scraping-for-beginners/crawling",target:null,rel:null},(0,a.kt)("strong",{parentName:"a"},"Basics of crawling")),", where we will learn how to move between web pages and scrape data from all of them. We will build a scraper that first collects all the products on ",(0,a.kt)("a",{parentName:"p",href:"https://demo-webstore.apify.org/",target:"_blank",rel:"noopener"},"Fakestore"),", and then crawls each of them to scrape the data for each product separately."))}g.isMDXComponent=!0},59910:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/data-in-sheets-71d67cc7a3a4acd1173f7599733e9d67.png"},67284:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/terminal-csv-d42e8481cad6e48cf365e9e5cbd9375e.png"}}]);