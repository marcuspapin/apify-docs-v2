"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[7771],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(a),g=r,h=d["".concat(c,".").concat(g)]||d[g]||u[g]||o;return a?n.createElement(h,l(l({ref:t},p),{},{components:a})):n.createElement(h,l({ref:t},p))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},25882:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>g,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),l=["components"],i={title:"Collecting data",description:"Learn how to collect data from a page with evaluate functions, then how to safely collect it by using a second library called Cheerio.",sidebar_position:2,slug:"/puppeteer-playwright/executing-scripts/collecting-data"},c="[](#collecting-data) Collecting data",s={unversionedId:"puppeteer_playwright/executing_scripts/collecting_data",id:"puppeteer_playwright/executing_scripts/collecting_data",title:"Collecting data",description:"Learn how to collect data from a page with evaluate functions, then how to safely collect it by using a second library called Cheerio.",source:"@site/sources/academy/puppeteer_playwright/executing_scripts/collecting_data.md",sourceDirName:"puppeteer_playwright/executing_scripts",slug:"/puppeteer-playwright/executing-scripts/collecting-data",permalink:"/academy/puppeteer-playwright/executing-scripts/collecting-data",draft:!1,tags:[],version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1673462256,formattedLastUpdatedAt:"Jan 11, 2023",sidebarPosition:2,frontMatter:{title:"Collecting data",description:"Learn how to collect data from a page with evaluate functions, then how to safely collect it by using a second library called Cheerio.",sidebar_position:2,slug:"/puppeteer-playwright/executing-scripts/collecting-data"},sidebar:"defaultSidebar",previous:{title:"Injecting scripts",permalink:"/academy/puppeteer-playwright/executing-scripts/injecting-code"},next:{title:"IV - Reading & intercepting requests",permalink:"/academy/puppeteer-playwright/reading-intercepting-requests"}},p={},u=[{value:"Setup",id:"setup",level:2},{value:" Collecting in the browser context",id:"-collecting-in-the-browser-context",level:2},{value:" Using jQuery",id:"-using-jquery",level:2},{value:" Parsing in the Node.js context",id:"-parsing-in-the-nodejs-context",level:2},{value:"Final code",id:"final-code",level:2},{value:" Next up",id:"-next-up",level:2}],d={toc:u};function g(e){var t=e.components,i=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"-collecting-data"},(0,o.kt)("a",{parentName:"h1",href:"#collecting-data",target:null,rel:null})," Collecting data"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Learn how to collect data from a page with evaluate functions, then how to safely collect it by using a second library called Cheerio.")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Now that we know how to execute scripts on a page, we're ready to learn a bit about ",(0,o.kt)("a",{parentName:"p",href:"/academy/web-scraping-for-beginners/data-collection",target:null,rel:null},"data collection"),". In this lesson, we'll be scraping all of the on-sale products from our ",(0,o.kt)("a",{parentName:"p",href:"https://demo-webstore.apify.org/search/on-sale",target:"_blank",rel:"noopener"},"Fakestore")," website."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Most data collection cases involve looping through a list of items of some sort.")),(0,o.kt)("p",null,"There are two main ways to collect data with Playwright and Puppeteer:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Directly in ",(0,o.kt)("inlineCode",{parentName:"li"},"page.evaluate()")," and other evaluate functions such as ",(0,o.kt)("inlineCode",{parentName:"li"},"page.$$eval()"),"."),(0,o.kt)("li",{parentName:"ol"},"In the Node.js context using a parsing library such as ",(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/cheerio",target:"_blank",rel:"noopener"},"Cheerio"))),(0,o.kt)("h2",{id:"setup"},"Setup"),(0,o.kt)("p",null,"Here is the base set up for our code, upon which we'll be building off of in this lesson:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-marked-tabs"},"<marked-tab header=\"Playwright\" lang=\"javascript\">\nimport { chromium } from 'playwright';\n\nconst browser = await chromium.launch({ headless: false });\nconst page = await browser.newPage();\n\nawait page.goto('https://demo-webstore.apify.org/search/on-sale');\n\n// code will go here\n\nawait page.waitForTimeout(10000)\n\nawait browser.close();\n</marked-tab>\n<marked-tab header=\"Puppeteer\" lang=\"javascript\">\nimport puppeteer from 'puppeteer';\n\nconst browser = await puppeteer.launch({ headless: false });\nconst page = await browser.newPage();\n\nawait page.goto('https://demo-webstore.apify.org/search/on-sale');\n\n// code will go here\n\nawait page.waitForTimeout(10000)\n\nawait browser.close();\n</marked-tab>\n")),(0,o.kt)("h2",{id:"-collecting-in-the-browser-context"},(0,o.kt)("a",{parentName:"h2",href:"#collecting-in-page-evaluate",target:null,rel:null})," Collecting in the browser context"),(0,o.kt)("p",null,"Whatever is returned from the callback function in ",(0,o.kt)("inlineCode",{parentName:"p"},"page.evaluate()")," will be returned by the evaluate function, which means that we can set it to a variable like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const products = await page.evaluate(() => { foo: 'bar' });\n\nconsole.log(products) // -> { foo: 'bar' }\n")),(0,o.kt)("p",null,"We'll be returning a bunch of product objects from this function, which will be accessible back in our Node.js context after the promise has resolved. Let's now go ahead and write some data collection code to collect each product:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const products = await page.evaluate(() => {\n    const productCards = Array.from(document.querySelectorAll('a[class*=\"ProductCard_root\"]'));\n\n    return productCards.map((element) => {\n        const name = element.querySelector('h3[class*=\"ProductCard_name\"]').textContent;\n        const price = element.querySelector('div[class*=\"ProductCard_price\"]').textContent;\n\n        return {\n            name,\n            price,\n        };\n    });\n});\n\nconsole.log(products);\n")),(0,o.kt)("p",null,"When we run this code, we see this logged to our console:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Products logged to the console",src:a(19121).Z,width:"1002",height:"434"})),(0,o.kt)("h2",{id:"-using-jquery"},(0,o.kt)("a",{parentName:"h2",href:"#using-jquery",target:null,rel:null})," Using jQuery"),(0,o.kt)("p",null,"Working with document.querySelector is cumbersome and quite verbose, but with the ",(0,o.kt)("inlineCode",{parentName:"p"},"page.addScriptTag()")," function and the latest ",(0,o.kt)("a",{parentName:"p",href:"https://releases.jquery.com/",target:"_blank",rel:"noopener"},"jQuery CDN link"),", we can inject jQuery into the current page to gain access to its syntactical sweetness:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"await page.addScriptTag({ url: 'https://code.jquery.com/jquery-3.6.0.min.js' });\n")),(0,o.kt)("p",null,"This function will literally append a ",(0,o.kt)("inlineCode",{parentName:"p"},"<script>")," tag to the ",(0,o.kt)("inlineCode",{parentName:"p"},"<head>")," element of the current page, allowing access to jQuery's API when using ",(0,o.kt)("inlineCode",{parentName:"p"},"page.evaluate()")," to run code in the browser context."),(0,o.kt)("p",null,"Now, since we're able to use jQuery, let's translate our vanilla JavaScript code within the ",(0,o.kt)("inlineCode",{parentName:"p"},"page.evaluate()")," function to jQuery:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"await page.addScriptTag({ url: 'https://code.jquery.com/jquery-3.6.0.min.js' });\n\nconst products = await page.evaluate(() => {\n        const productCards = Array.from($('a[class*=\"ProductCard_root\"]'))\n\n        return productCards.map((element) => {\n        const card = $(element);\n\n        const name = card.find('h3[class*=\"ProductCard_name\"]').text();\n        const price = card.find('div[class*=\"ProductCard_price\"]').text();\n\n        return {\n            name,\n            price,\n        };\n    });\n});\n\nconsole.log(products);\n")),(0,o.kt)("p",null,"This will output the same exact result as the code in the previous section."),(0,o.kt)("h2",{id:"-parsing-in-the-nodejs-context"},(0,o.kt)("a",{parentName:"h2",href:"#parsing-in-node-context",target:null,rel:null})," Parsing in the Node.js context"),(0,o.kt)("p",null,"One of the most popular parsing libraries for Node.js is ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/cheerio",target:"_blank",rel:"noopener"},"Cheerio"),", which can be used in tandem with Playwright and Puppeteer. It is extremely beneficial to parse the page's HTML in the Node.js context for a number of reasons:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You can easily port the code between headless browser data collection and plain HTTP data collection"),(0,o.kt)("li",{parentName:"ul"},"You don't have to worry in which context you're working (which can sometimes be confusing)"),(0,o.kt)("li",{parentName:"ul"},"Errors are easier to handle when running in the base Node.js context")),(0,o.kt)("p",null,"To install it, we can run the following command within your project's directory:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npm install cheerio\n")),(0,o.kt)("p",null,"Then, we'll import the ",(0,o.kt)("inlineCode",{parentName:"p"},"load")," function like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { load } from 'cheerio';\n")),(0,o.kt)("p",null,"Finally, we can create a ",(0,o.kt)("inlineCode",{parentName:"p"},"Cheerio")," object based on our page's current content like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const $ = load(await page.content());\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"It's important to note that this ",(0,o.kt)("inlineCode",{parentName:"p"},"$")," object is static. If any content on the page changes, the ",(0,o.kt)("inlineCode",{parentName:"p"},"$")," variable will not automatically be updated. It will need to be re-declared or re-defined.")),(0,o.kt)("p",null,"Here's our full code so far:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-marked-tabs"},"<marked-tab header=\"Playwright\" lang=\"javascript\">\nimport { chromium } from 'playwright';\nimport { load } from 'cheerio';\n\nconst browser = await chromium.launch({ headless: false });\nconst page = await browser.newPage();\n\nawait page.goto('https://demo-webstore.apify.org/search/on-sale');\n\nconst $ = load(await page.content());\n\n// code will go here\n\nawait browser.close();\n</marked-tab>\n<marked-tab header=\"Puppeteer\" lang=\"javascript\">\nimport puppeteer from 'puppeteer';\nimport { load } from 'cheerio';\n\nconst browser = await puppeteer.launch({ headless: false });\nconst page = await browser.newPage();\n\nawait page.goto('https://demo-webstore.apify.org/search/on-sale');\n\nconst $ = load(await page.content());\n\n// code will go here\n\nawait browser.close();\n</marked-tab>\n")),(0,o.kt)("p",null,"Now, to loop through all of the products, we'll make use of the ",(0,o.kt)("inlineCode",{parentName:"p"},"$")," object and loop through them while safely in the server-side context rather than running the code in the browser. Notice that this code is nearly exactly the same as the jQuery code above - it is just not running inside of a ",(0,o.kt)("inlineCode",{parentName:"p"},"page.evaluate()")," in the browser context."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const $ = load(await page.content());\n\nconst productCards = Array.from($('a[class*=\"ProductCard_root\"]'))\n\nconst products = productCards.map((element) => {\n    const card = $(element);\n\n    const name = card.find('h3[class*=\"ProductCard_name\"]').text();\n    const price = card.find('div[class*=\"ProductCard_price\"]').text();\n\n    return {\n        name,\n        price,\n    };\n});\n\nconsole.log(products);\n")),(0,o.kt)("h2",{id:"final-code"},"Final code"),(0,o.kt)("p",null,"Here's what our final optimized code looks like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-marked-tabs"},"<marked-tab header=\"Playwright\" lang=\"javascript\">\nimport { chromium } from 'playwright';\nimport { load } from 'cheerio';\n\nconst browser = await chromium.launch({ headless: false });\nconst page = await browser.newPage();\n\nawait page.goto('https://demo-webstore.apify.org/search/on-sale');\n\nconst $ = load(await page.content());\n\nconst productCards = Array.from($('a[class*=\"ProductCard_root\"]'))\n\nconst products = productCards.map((element) => {\n    const card = $(element);\n\n    const name = card.find('h3[class*=\"ProductCard_name\"]').text();\n    const price = card.find('div[class*=\"ProductCard_price\"]').text();\n\n    return {\n        name,\n        price,\n    };\n});\n\nconsole.log(products);\n\nawait browser.close();\n</marked-tab>\n<marked-tab header=\"Puppeteer\" lang=\"javascript\">\nimport puppeteer from 'puppeteer';\nimport { load } from 'cheerio';\n\nconst browser = await puppeteer.launch({ headless: false });\nconst page = await browser.newPage();\n\nawait page.goto('https://demo-webstore.apify.org/search/on-sale');\n\nconst $ = load(await page.content());\n\nconst productCards = Array.from($('a[class*=\"ProductCard_root\"]'))\n\nconst products = productCards.map((element) => {\n    const card = $(element);\n\n    const name = card.find('h3[class*=\"ProductCard_name\"]').text();\n    const price = card.find('div[class*=\"ProductCard_price\"]').text();\n\n    return {\n        name,\n        price,\n    };\n});\n\nconsole.log(products);\n\nawait browser.close();\n</marked-tab>\n")),(0,o.kt)("h2",{id:"-next-up"},(0,o.kt)("a",{parentName:"h2",href:"#next",target:null,rel:null})," Next up"),(0,o.kt)("p",null,"Our ",(0,o.kt)("a",{parentName:"p",href:"/academy/puppeteer-playwright/reading-intercepting-requests",target:null,rel:null},"next lesson")," will be discussing something super cool - request interception and reading data from requests and responses. It's just like using DevTools, except programmatically!"))}g.isMDXComponent=!0},19121:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/log-products-aa46a8b2836e1e8648a22747d2c3fc11.webp"}}]);