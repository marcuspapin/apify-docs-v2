"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[9745],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>m});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(o),m=r,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return o?n.createElement(h,l(l({ref:t},c),{},{components:o})):n.createElement(h,l({ref:t},c))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,l=new Array(a);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<a;p++)l[p]=o[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},39866:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var n=o(87462),r=o(63366),a=(o(67294),o(3905)),l=["components"],i={title:"Browser DevTools - III",description:"Continue learning how to extract data from a website using browser DevTools, CSS selectors, and JavaScript via the DevTools console.",sidebar_position:3,slug:"/web-scraping-for-beginners/data-collection/devtools-continued"},s="Finish with DevTools",p={unversionedId:"webscraping/web_scraping_for_beginners/data_extraction/devtools_continued",id:"webscraping/web_scraping_for_beginners/data_extraction/devtools_continued",title:"Browser DevTools - III",description:"Continue learning how to extract data from a website using browser DevTools, CSS selectors, and JavaScript via the DevTools console.",source:"@site/sources/academy/webscraping/web_scraping_for_beginners/data_extraction/devtools_continued.md",sourceDirName:"webscraping/web_scraping_for_beginners/data_extraction",slug:"/web-scraping-for-beginners/data-collection/devtools-continued",permalink:"/academy/web-scraping-for-beginners/data-collection/devtools-continued",draft:!1,editUrl:"https://github.com/apify/apify-docs-v2/edit/master/sources/academy/webscraping/web_scraping_for_beginners/data_extraction/devtools_continued.md",tags:[],version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1675963489,formattedLastUpdatedAt:"Feb 9, 2023",sidebarPosition:3,frontMatter:{title:"Browser DevTools - III",description:"Continue learning how to extract data from a website using browser DevTools, CSS selectors, and JavaScript via the DevTools console.",sidebar_position:3,slug:"/web-scraping-for-beginners/data-collection/devtools-continued"},sidebar:"academy",previous:{title:"Browser DevTools - II",permalink:"/academy/web-scraping-for-beginners/data-collection/using-devtools"},next:{title:"Computer preparation",permalink:"/academy/web-scraping-for-beginners/data-collection/computer-preparation"}},c={},u=[{value:"Find all product elements",id:"find-all-products",level:2},{value:"Looping over elements",id:"looping-over-elements",level:2},{value:"Extracting more data",id:"extracting-data-in-loop",level:2},{value:"Summary",id:"summary",level:2},{value:"Next up",id:"next",level:2}],d={toc:u};function m(e){var t=e.components,i=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"finish-devtools"},"Finish with DevTools"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Continue learning how to extract data from a website using browser DevTools, CSS selectors, and JavaScript via the DevTools console.")),(0,a.kt)("hr",null),(0,a.kt)("p",null,"In the previous parts of the DevTools tutorial, we were able to extract information about a single product from the Sales collection of the ",(0,a.kt)("a",{parentName:"p",href:"https://warehouse-theme-metal.myshopify.com/collections/sales",target:"_blank",rel:"noopener"},"Warehouse store"),". If you missed the previous lessons, please go through them to understand the basic concepts. You don't need any of the code from there, though. We will start from scratch."),(0,a.kt)("h2",{id:"find-all-products"},"Find all product elements"),(0,a.kt)("p",null,"First, we will use the ",(0,a.kt)("inlineCode",{parentName:"p"},"querySelectorAll()")," function from the previous lessons to get a list of all the product elements."),(0,a.kt)("p",null,"Run this command in your Console:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const products = document.querySelectorAll('.product-item');\nproducts.length\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"length")," property of ",(0,a.kt)("inlineCode",{parentName:"p"},"products")," tells us how many products we have in the list. It says ",(0,a.kt)("strong",{parentName:"p"},"24")," and if you count the number of products on the page, you'll find that it's correct. Good, that means our CSS selector is working perfectly to get all the products."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Print all products",src:o(13146).Z,width:"1714",height:"682"})),(0,a.kt)("h2",{id:"looping-over-elements"},"Looping over elements"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration",target:"_blank",rel:"noopener"},"Visit this tutorial")," if you need to refresh the concept of loops in programming.")),(0,a.kt)("p",null,"Now, we will loop over each product and print their titles. We will use a so-called ",(0,a.kt)("inlineCode",{parentName:"p"},"for..of")," loop to do it. It is a simple loop that iterates through all items of an array."),(0,a.kt)("p",null,"Run the following command in the Console. Some notes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"a.product-item__title")," selector and the extraction code comes from the previous lesson."),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"console.log()")," function prints the results to the Console."),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"trim()")," function makes sure there are no useless whitespace characters around our data.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"for (const product of products) {\n    const titleElement = product.querySelector('a.product-item__title');\n    const title = titleElement.textContent.trim();\n    console.log(title);\n}\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of",target:"_blank",rel:"noopener"},"Learn more")," about the ",(0,a.kt)("inlineCode",{parentName:"p"},"for..of")," loop.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Print all products&#39; text",src:o(21981).Z,width:"2018",height:"1266"})),(0,a.kt)("h2",{id:"extracting-data-in-loop"},"Extracting more data"),(0,a.kt)("p",null,"We will add the price extraction from the previous lesson to the loop. And we will also save all the data to an array so that we can easily work with it. Run this in the Console:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"results.push()")," function takes its argument and pushes (adds) it to the ",(0,a.kt)("inlineCode",{parentName:"p"},"results")," array. ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push",target:"_blank",rel:"noopener"},"Learn more about it here"),".")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const results = [];\n\nfor (const product of products) {\n    const titleElement = product.querySelector('a.product-item__title');\n    const title = titleElement.textContent.trim();\n\n    const priceElement = product.querySelector('span.price');\n    const price = priceElement.childNodes[2].nodeValue.trim();\n\n    results.push({ title, price });\n}\n")),(0,a.kt)("p",null,"After running the code, you'll see ",(0,a.kt)("strong",{parentName:"p"},"24")," printed to the Console. That's because the ",(0,a.kt)("inlineCode",{parentName:"p"},"results")," array includes 24 products."),(0,a.kt)("p",null,"Now, run this command in the Console to print all the products:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"console.log(results);\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Print all products&#39; data",src:o(23245).Z,width:"2052",height:"1302"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"You may notice that some prices include the word ",(0,a.kt)("strong",{parentName:"p"},"From"),", indicating that the price is not final. If you wanted to process this data further, you would want to remove this from the price and instead save this information to another field.")),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,"Let's recap the web scraping process. First, we used DevTools to ",(0,a.kt)("strong",{parentName:"p"},"find the element")," that holds data about a single product. Then, inside this ",(0,a.kt)("strong",{parentName:"p"},"parent")," element we ",(0,a.kt)("strong",{parentName:"p"},"found child elements")," that contained the data (title, price) we were looking for."),(0,a.kt)("p",null,"Second, we used the ",(0,a.kt)("inlineCode",{parentName:"p"},"document.querySelector()")," function and its ",(0,a.kt)("inlineCode",{parentName:"p"},"All")," variant to ",(0,a.kt)("strong",{parentName:"p"},"find the data programmatically"),", using their ",(0,a.kt)("strong",{parentName:"p"},"CSS selectors"),"."),(0,a.kt)("p",null,"And third, we wrapped this data extraction logic in a ",(0,a.kt)("strong",{parentName:"p"},"loop")," to automatically find the data not only for a single product, but for ",(0,a.kt)("strong",{parentName:"p"},"all the products")," on the page. \ud83c\udf89"),(0,a.kt)("h2",{id:"next"},"Next up"),(0,a.kt)("p",null,"And that's it! With a bit of trial and error, you will be able to extract data from any webpage that's loaded in your browser. This is a useful skill on its own. It will save you time copy-pasting stuff when you need data for a project."),(0,a.kt)("p",null,"More importantly though, it taught you the basics to start programming your own scrapers. In the ",(0,a.kt)("a",{parentName:"p",href:"/academy/web-scraping-for-beginners/data-collection/computer-preparation",target:null,rel:null},"next lessons"),", we will teach you how to create your own web data extraction script using JavaScript and Node.js."))}m.isMDXComponent=!0},13146:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/devtools-count-products-d590f5142b901919a0c31b50df5b0538.png"},23245:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/devtools-print-all-products-79895abb91e05c4de5321f849b084bbf.png"},21981:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/devtools-product-titles-707d5bbdd367173c973801350f61e859.png"}}]);