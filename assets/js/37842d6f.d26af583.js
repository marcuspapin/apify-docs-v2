"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[2830],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(n),h=o,m=u["".concat(s,".").concat(h)]||u[h]||p[h]||l;return n?a.createElement(m,r(r({ref:t},d),{},{components:n})):a.createElement(m,r({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,r=new Array(l);r[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var c=2;c<l;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},81938:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var a=n(87462),o=n(63366),l=(n(67294),n(3905)),r=["components"],i={title:"Browser DevTools - II",description:"Learn how to use browser DevTools, CSS selectors, and JavaScript via the DevTools console to collect data from a website.",sidebar_position:2,slug:"/web-scraping-for-beginners/data-collection/using-devtools"},s="Data collection with DevTools",c={unversionedId:"webscraping/web_scraping_for_beginners/data_collection/using_devtools",id:"webscraping/web_scraping_for_beginners/data_collection/using_devtools",title:"Browser DevTools - II",description:"Learn how to use browser DevTools, CSS selectors, and JavaScript via the DevTools console to collect data from a website.",source:"@site/sources/academy/webscraping/web_scraping_for_beginners/data_collection/using_devtools.md",sourceDirName:"webscraping/web_scraping_for_beginners/data_collection",slug:"/web-scraping-for-beginners/data-collection/using-devtools",permalink:"/academy/web-scraping-for-beginners/data-collection/using-devtools",draft:!1,editUrl:"https://github.com/apify/apify-docs-v2/edit/master/sources/academy/webscraping/web_scraping_for_beginners/data_collection/using_devtools.md",tags:[],version:"current",lastUpdatedBy:"Jind\u0159ich B\xe4r",lastUpdatedAt:1675932804,formattedLastUpdatedAt:"Feb 9, 2023",sidebarPosition:2,frontMatter:{title:"Browser DevTools - II",description:"Learn how to use browser DevTools, CSS selectors, and JavaScript via the DevTools console to collect data from a website.",sidebar_position:2,slug:"/web-scraping-for-beginners/data-collection/using-devtools"},sidebar:"academy",previous:{title:"Browser DevTools - I",permalink:"/academy/web-scraping-for-beginners/data-collection/browser-devtools"},next:{title:"Browser DevTools - III",permalink:"/academy/web-scraping-for-beginners/data-collection/devtools-continued"}},d={},p=[{value:"Getting structured data from HTML",id:"getting-structured-data",level:2},{value:"Selecting elements with JavaScript",id:"selecting-elements",level:2},{value:"Collecting data from elements",id:"collecting-from-elements",level:2},{value:"Selecting child elements",id:"selecting-child-elements",level:3},{value:"Collecting data",id:"collecting-data",level:3},{value:"Next up",id:"next",level:2}],u={toc:p};function h(e){var t=e.components,i=(0,o.Z)(e,r);return(0,l.kt)("wrapper",(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"devtools-data-collection"},"Data collection with DevTools"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Learn how to use browser DevTools, CSS selectors, and JavaScript via the DevTools console to collect data from a website.")),(0,l.kt)("hr",null),(0,l.kt)("p",null,"We know the basics of HTML, CSS, JavaScript and DevTools and we can finally try doing something more practical - collecting data from a website. Let's try collecting the on-sale products from ",(0,l.kt)("a",{parentName:"p",href:"https://demo-webstore.apify.org/",target:"_blank",rel:"noopener"},"this fake e-commerce website"),". We will use CSS selectors, JavaScript, and DevTools to achieve this task."),(0,l.kt)("h2",{id:"getting-structured-data"},"Getting structured data from HTML"),(0,l.kt)("p",null,"When you open up the ",(0,l.kt)("a",{parentName:"p",href:"https://demo-webstore.apify.org/search/on-sale",target:"_blank",rel:"noopener"},"on-sale section of Fakestore"),", you'll see that there's a grid of products on the page with names and pictures of products. We will now learn how to collect all this information. Open DevTools and select the first product with the selector tool."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Selecting an element with DevTools",src:n(50344).Z,width:"1966",height:"820"})),(0,l.kt)("p",null,"Now you know where to find the name of one of the products in the page's HTML, but we want to find all information about this product. To do that, in the ",(0,l.kt)("strong",{parentName:"p"},"Elements")," tab, hover over the elements above the one you just found, until you find the element that contains all the data about the selected product. Alternatively, you can press the up arrow a few times to get the same result."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Selecting an element from the Elements tab",src:n(7483).Z,width:"2056",height:"1192"})),(0,l.kt)("p",null,"This element is the parent element of all the nested (child) elements, and we can find it using JavaScript and collect the data. Notice that the element has an ",(0,l.kt)("inlineCode",{parentName:"p"},"aria-label")," attribute, as well as multiple ",(0,l.kt)("inlineCode",{parentName:"p"},"class")," attributes. This is where CSS selectors become handy, because we can use them to select an element with a specific class."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Websites change and the structure or their HTML or the CSS selectors can become outdated. We'll try our best to keep this course updated, but if you find that what you see on the website doesn't match this guide exactly, don't worry. Everything will work exactly the same. You will only have to use whatever you see on your screen and not in the screenshots here.")),(0,l.kt)("h2",{id:"selecting-elements"},"Selecting elements with JavaScript"),(0,l.kt)("p",null,"We know how to find an element manually using the DevTools, but for automated scraping, we need to tell the computer how to find it as well. We can do that using JavaScript and CSS selectors."),(0,l.kt)("p",null,"The function to do that is called ",(0,l.kt)("inlineCode",{parentName:"p"},"document.querySelector('some-selector')")," and it will find the first element in the page's HTML matching the provided CSS selector. For example ",(0,l.kt)("inlineCode",{parentName:"p"},"document.querySelector('div')")," will find the first ",(0,l.kt)("inlineCode",{parentName:"p"},"<div>")," element. And ",(0,l.kt)("inlineCode",{parentName:"p"},"document.querySelector('p.my-class')")," will find the first ",(0,l.kt)("inlineCode",{parentName:"p"},"<p>")," element with the class ",(0,l.kt)("inlineCode",{parentName:"p"},"my-class"),"."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"You can find available CSS selectors and their syntax on the ",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors",target:"_blank",rel:"noopener"},"MDN CSS Selectors page"),".")),(0,l.kt)("p",null,"At the time of writing, the HTML element that contained all the data we wanted had an ",(0,l.kt)("inlineCode",{parentName:"p"},"<a>")," tag and a ",(0,l.kt)("inlineCode",{parentName:"p"},"animated fadeIn")," class, plus an ",(0,l.kt)("inlineCode",{parentName:"p"},"aria-label")," attribute. This actually means that there were two classes applied to the element - ",(0,l.kt)("inlineCode",{parentName:"p"},"animated")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"fadeIn"),". Neither of these seem reliable classes to go off of; however, each element also includes an ",(0,l.kt)("inlineCode",{parentName:"p"},"href")," attribute which includes ",(0,l.kt)("inlineCode",{parentName:"p"},"/product/"),", which we can use to our advantage."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"document.querySelector('a[aria-label][href*=\"/product/\"]');\n")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Query a selector with JavaScript",src:n(57159).Z,width:"948",height:"186"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"There are always multiple ways to select an element using CSS selectors. We always try to choose the one that seems the most reliable, precise, and unlikely to change with website updates. For example the ",(0,l.kt)("inlineCode",{parentName:"p"},"href")," attribute can be assumed to always include ",(0,l.kt)("inlineCode",{parentName:"p"},"/products/"),", as this is the path to view a specific product.")),(0,l.kt)("h2",{id:"collecting-from-elements"},"Collecting data from elements"),(0,l.kt)("p",null,"Now that we found the element, we can start poking into it to collect data. First, let's save the element to a variable so that we can work with it repeatedly and then print its text content to the console."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const product = document.querySelector('a[href*=\"/product/\"]');\nconsole.log(product.textContent);\n")),(0,l.kt)("p",null,"Here, we are using a special selector. Normally, if you use a selector like ",(0,l.kt)("inlineCode",{parentName:"p"},"a[href]"),", all ",(0,l.kt)("inlineCode",{parentName:"p"},"<a>")," tags with a ",(0,l.kt)("inlineCode",{parentName:"p"},"href")," attribute will be matched. By adding an ",(0,l.kt)("inlineCode",{parentName:"p"},"=")," and a value (",(0,l.kt)("inlineCode",{parentName:"p"},'a[href="something"]'),"), you match all ",(0,l.kt)("inlineCode",{parentName:"p"},"<a>")," elements with the exact ",(0,l.kt)("inlineCode",{parentName:"p"},"href")," value specified. Using the ",(0,l.kt)("inlineCode",{parentName:"p"},"*")," before the ",(0,l.kt)("inlineCode",{parentName:"p"},"=")," allows us to match any elements where the ",(0,l.kt)("inlineCode",{parentName:"p"},"href")," attribute ",(0,l.kt)("strong",{parentName:"p"},"includes")," the specified value, rather than strictly equals it. There are many ",(0,l.kt)("inlineCode",{parentName:"p"},"<a>")," tags on our page, but we only want the ones that lead to a path including ",(0,l.kt)("inlineCode",{parentName:"p"},"/product/"),", which is why we've chosen to use this selector."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Print text content of an element",src:n(36281).Z,width:"936",height:"718"})),(0,l.kt)("p",null,"As you can see, we were able to collect the data, but the format is still not very useful - there's a whole lot of weird data there that we probably don't need. For further processing (ex. in a spreadsheet), we would like to have each piece of data as a separate field (column). To do that, we will look at the HTML structure in more detail."),(0,l.kt)("h3",{id:"selecting-child-elements"},"Selecting child elements"),(0,l.kt)("p",null,"In the ",(0,l.kt)("a",{parentName:"p",href:"#getting-structured-data-from-html",target:null,rel:null},"Getting structured data from HTML")," section, we were hovering over the elements in the ",(0,l.kt)("strong",{parentName:"p"},"Elements")," tab to find the element that contains all the data. We can use that to find the individual data points as well. After a bit more inspection, we discover that the product's title is a ",(0,l.kt)("inlineCode",{parentName:"p"},"<span>")," tag with a parent ",(0,l.kt)("inlineCode",{parentName:"p"},"<h3>")," element, and the price is held inside a ",(0,l.kt)("inlineCode",{parentName:"p"},"<div>")," with a ",(0,l.kt)("inlineCode",{parentName:"p"},"class")," attribute including the keyword of ",(0,l.kt)("strong",{parentName:"p"},"price"),"."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Don't forget that the selectors may have changed, but the general principle of finding them will always be the same. Use what you see on your screen.")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Finding child elements in Elements tab",src:n(76575).Z,width:"1756",height:"672"})),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"document.querySelector()")," function looks for a specific element in the whole HTML ",(0,l.kt)("inlineCode",{parentName:"p"},"document"),", so if we called it with ",(0,l.kt)("inlineCode",{parentName:"p"},"h3"),", it would find the first ",(0,l.kt)("inlineCode",{parentName:"p"},"<h3>")," node in the ",(0,l.kt)("inlineCode",{parentName:"p"},"document"),". Luckily we can also use this function to look for elements within an element."),(0,l.kt)("p",null,"There's a similar function called ",(0,l.kt)("a",{parentName:"p",href:"https://javascript.info/searching-elements-dom#querySelectorAll",target:"_blank",rel:"noopener"},(0,l.kt)("inlineCode",{parentName:"a"},"querySelectorAll()"))," that returns collection of all the elements matching the selector - not just the first one. We will use this function to grab all the elements holding our sought after data."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Learn more about ",(0,l.kt)("inlineCode",{parentName:"p"},"Arrays")," in ",(0,l.kt)("a",{parentName:"p",href:"https://javascript.info/array",target:"_blank",rel:"noopener"},"this tutorial"),".")),(0,l.kt)("p",null,"Let's find the parent element of all of the products, which matches the selector ",(0,l.kt)("inlineCode",{parentName:"p"},"div.grid.gap-6"),", select it with ",(0,l.kt)("inlineCode",{parentName:"p"},"document.querySelector()"),", then find all of the product elements."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const grid = document.querySelector('div.grid.gap-6');\n\nconst products = grid.querySelectorAll('a[href*=\"/product/\"]')\n\nconsole.log(products);\n")),(0,l.kt)("p",null,"There are 32 products on the page, so if we've done this correctly, a list of 32 product elements should be logged to the console."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"List child elements with JavaScript",src:n(11829).Z,width:"934",height:"1324"})),(0,l.kt)("h3",{id:"collecting-data"},"Collecting data"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"products")," array now contains all the elements we need, and we can access each one's data individually. Let's save the title and price of the first product into an ",(0,l.kt)("a",{parentName:"p",href:"https://javascript.info/object",target:"_blank",rel:"noopener"},"object"),". Those of you who know JavaScript will know that this is not the prettiest code ever written, but it is beginner-friendly and that's important here. We will also use the ",(0,l.kt)("inlineCode",{parentName:"p"},".trim()")," function to remove unnecessary whitespace from the results."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const result = {\n    title: products[0].querySelector('h3').textContent.trim(),\n    price: products[0].querySelector('div[class*=\"price\"]').textContent.trim(),\n};\n\nconsole.log(result);\n")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Print collected data to the Console",src:n(69864).Z,width:"938",height:"288"})),(0,l.kt)("p",null,"If you were able to get the same result in your browser console, congratulations! You successfully collected your first data. If not, don't worry and review your code carefully. You'll crush the bug soon enough."),(0,l.kt)("h2",{id:"next"},"Next up"),(0,l.kt)("p",null,"We have learned how to collect information about a few products from an e-commerce website. In the ",(0,l.kt)("a",{parentName:"p",href:"/academy/web-scraping-for-beginners/data-collection/devtools-continued",target:null,rel:null},"next lesson"),", we will learn how to collect all of them."))}h.isMDXComponent=!0},76575:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/find-child-elements-852900a399981a52085a40a884f9cac3.png"},11829:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/list-child-elements-8361a53daa0ee41be8cf3b55cf21d7d5.png"},69864:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/print-product-data-b0043321402a2746578d09a3a6ceedb9.png"},36281:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/print-text-content-d6d92f6b1610a5d65c30b31771b8b001.png"},57159:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/query-selector-cbfbae65cd640b4a7107b933cacd2d37.png"},7483:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/selecting-container-element-c12da7ec308ac1c8976c1bbd939a3768.png"},50344:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/selecting-first-website-4157d1f3d83f4a0fab3820d513dde443.png"}}]);