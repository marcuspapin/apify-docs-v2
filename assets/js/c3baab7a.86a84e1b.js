"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[7096],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),h=c(n),u=o,m=h["".concat(s,".").concat(u)]||h[u]||p[u]||l;return n?a.createElement(m,r(r({ref:t},d),{},{components:n})):a.createElement(m,r({ref:t},d))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,r=new Array(l);r[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var c=2;c<l;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},57888:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var a=n(87462),o=n(63366),l=(n(67294),n(3905)),r=["components"],i={title:"Browser DevTools - II",description:"Learn how to use browser DevTools, CSS selectors, and JavaScript via the DevTools console to extract data from a website.",sidebar_position:2,slug:"/web-scraping-for-beginners/data-collection/using-devtools"},s="Data extraction with DevTools",c={unversionedId:"webscraping/web_scraping_for_beginners/data_extraction/using_devtools",id:"webscraping/web_scraping_for_beginners/data_extraction/using_devtools",title:"Browser DevTools - II",description:"Learn how to use browser DevTools, CSS selectors, and JavaScript via the DevTools console to extract data from a website.",source:"@site/sources/academy/webscraping/web_scraping_for_beginners/data_extraction/using_devtools.md",sourceDirName:"webscraping/web_scraping_for_beginners/data_extraction",slug:"/web-scraping-for-beginners/data-collection/using-devtools",permalink:"/academy/web-scraping-for-beginners/data-collection/using-devtools",draft:!1,editUrl:"https://github.com/apify/apify-docs-v2/edit/master/sources/academy/webscraping/web_scraping_for_beginners/data_extraction/using_devtools.md",tags:[],version:"current",lastUpdatedBy:"Jind\u0159ich B\xe4r",lastUpdatedAt:1676377646,formattedLastUpdatedAt:"Feb 14, 2023",sidebarPosition:2,frontMatter:{title:"Browser DevTools - II",description:"Learn how to use browser DevTools, CSS selectors, and JavaScript via the DevTools console to extract data from a website.",sidebar_position:2,slug:"/web-scraping-for-beginners/data-collection/using-devtools"},sidebar:"academy",previous:{title:"Browser DevTools - I",permalink:"/academy/web-scraping-for-beginners/data-collection/browser-devtools"},next:{title:"Browser DevTools - III",permalink:"/academy/web-scraping-for-beginners/data-collection/devtools-continued"}},d={},p=[{value:"Getting structured data from HTML",id:"getting-structured-data",level:2},{value:"Selecting elements in Console",id:"selecting-elements",level:2},{value:"How to choose good selectors",id:"choose-good-selectors",level:2},{value:"Extracting data from elements",id:"extraction-from-elements",level:2},{value:"Finding child elements",id:"finding-child-elements",level:3},{value:"Selecting child elements",id:"selecting-child-elements",level:3},{value:"Cleaning extracted data",id:"cleaning-extracted-data",level:3},{value:"Next up",id:"next",level:2}],h={toc:p};function u(e){var t=e.components,i=(0,o.Z)(e,r);return(0,l.kt)("wrapper",(0,a.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"devtools-data-extraction"},"Data extraction with DevTools"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Learn how to use browser DevTools, CSS selectors, and JavaScript via the DevTools console to extract data from a website.")),(0,l.kt)("hr",null),(0,l.kt)("p",null,"With the knowledge of the basics of DevTools and we can finally try doing something more practical - extracting data from a website. Let's try collecting the on-sale products from the ",(0,l.kt)("a",{parentName:"p",href:"https://warehouse-theme-metal.myshopify.com/",target:"_blank",rel:"noopener"},"Warehouse store"),". We will use ",(0,l.kt)("a",{parentName:"p",href:"/academy/concepts/css-selectors",target:null,rel:null},"CSS selectors"),", JavaScript, and DevTools to achieve this task."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Why use a Shopify demo and not a real e-commerce store like Amazon?")," Because real websites are usually bulkier, littered with promotions, and they change very often. Many have multiple versions of pages, and you never know in advance which one you will get. It will be important to learn how to deal with these challenges in the future, but for this beginner course, we want to have a light and stable environment."),(0,l.kt)("p",{parentName:"blockquote"},"Some other courses use so-called scraping playgrounds or sandboxes. Those are websites made solely for the purpose of learning scraping. We find those too dumbed down and not representative of real websites. The Shopify demo is a full-featured, real-world website.")),(0,l.kt)("h2",{id:"getting-structured-data"},"Getting structured data from HTML"),(0,l.kt)("p",null,"When you open up the ",(0,l.kt)("a",{parentName:"p",href:"https://warehouse-theme-metal.myshopify.com/collections/sales",target:"_blank",rel:"noopener"},"Sales section of Warehouse"),", you'll see that there's a grid of products on the page with names and pictures of products. We will learn how to extract all this information."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Warehouse store with DevTools open",src:n(70).Z,width:"3382",height:"2258"})),(0,l.kt)("p",null,"Open DevTools and select the name of the ",(0,l.kt)("strong",{parentName:"p"},"Sony SACS9 Active Subwoofer"),". When you click on it, it will get highlighted in the Elements tab."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Selecting an element with DevTools",src:n(89930).Z,width:"1874",height:"1198"})),(0,l.kt)("p",null,"Great, you have selected the element which contains the name of the subwoofer. Now we want to find all the elements that contain all the information about this subwoofer. Price, number of reviews, image and so on. We will use the ",(0,l.kt)("strong",{parentName:"p"},"Elements")," tab to do that. You can hover over the elements in the Elements tab, and they will get highlighted on the page as you move the mouse."),(0,l.kt)("p",null,"Start from the previously selected element with the subwoofer's name and move your mouse up, hovering over each element, until you find the one that highlights the entire product card. Alternatively, you can press the up arrow a few times to get the same result."),(0,l.kt)("p",null,"The element that contains all the information about the subwoofer is called a ",(0,l.kt)("strong",{parentName:"p"},"parent element"),", and all the nested elements, including the subwoofer's name, price and so on, are ",(0,l.kt)("strong",{parentName:"p"},"child elements"),"."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Selecting an element with hover",src:n(76648).Z,width:"1714",height:"1372"})),(0,l.kt)("p",null,"Now that we know how the parent element looks like, we can extract its data, including the data of its children. Notice that the element has a ",(0,l.kt)("inlineCode",{parentName:"p"},"class")," attribute with multiple values like ",(0,l.kt)("inlineCode",{parentName:"p"},"product-item")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"product-item--vertical"),". Let's use those classes in the Console to extract data."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Class attribute in DevTools",src:n(75546).Z,width:"1509",height:"588"})),(0,l.kt)("h2",{id:"selecting-elements"},"Selecting elements in Console"),(0,l.kt)("p",null,"We know how to find an element manually using the DevTools, but that's not very useful for automated scraping. We need to tell the computer how to find it as well. We can do that using JavaScript and CSS selectors. The function to do that is called ",(0,l.kt)("a",{parentName:"p",href:"/academy/concepts/querying-css-selectors",target:null,rel:null},(0,l.kt)("inlineCode",{parentName:"a"},"document.querySelector()"))," and it will find the first element in the page's HTML matching the provided ",(0,l.kt)("a",{parentName:"p",href:"/academy/concepts/css-selectors",target:null,rel:null},"CSS selector"),"."),(0,l.kt)("p",null,"For example ",(0,l.kt)("inlineCode",{parentName:"p"},"document.querySelector('div')")," will find the first ",(0,l.kt)("inlineCode",{parentName:"p"},"<div>")," element. And ",(0,l.kt)("inlineCode",{parentName:"p"},"document.querySelector('.my-class')")," (notice the period ",(0,l.kt)("inlineCode",{parentName:"p"},"."),") will find the first element with the class ",(0,l.kt)("inlineCode",{parentName:"p"},"my-class"),", such as ",(0,l.kt)("inlineCode",{parentName:"p"},'<div class="my-class">')," or ",(0,l.kt)("inlineCode",{parentName:"p"},'<p class="my-class">'),"."),(0,l.kt)("p",null,"You can also combine selectors. ",(0,l.kt)("inlineCode",{parentName:"p"},"document.querySelector('p.my-class')")," will find all ",(0,l.kt)("inlineCode",{parentName:"p"},'<p class="my-class">')," elements, but no ",(0,l.kt)("inlineCode",{parentName:"p"},'<div class="my-class">'),"."),(0,l.kt)("p",null,"Let's try to use ",(0,l.kt)("inlineCode",{parentName:"p"},"document.querySelector()")," to find the ",(0,l.kt)("strong",{parentName:"p"},"Sony subwoofer"),". Earlier we mentioned that the parent element of the subwoofer had, among others, the ",(0,l.kt)("inlineCode",{parentName:"p"},"product-item")," class. We can use the class to look up the element. Copy or type (don't miss the period ",(0,l.kt)("inlineCode",{parentName:"p"},".")," in ",(0,l.kt)("inlineCode",{parentName:"p"},".product-item"),") the following function into the Console and press Enter."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"document.querySelector('.product-item');\n")),(0,l.kt)("p",null,"It will produce a result like this, but it ",(0,l.kt)("strong",{parentName:"p"},"won't be")," the Sony subwoofer."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Query a selector with JavaScript",src:n(23791).Z,width:"1654",height:"542"})),(0,l.kt)("p",null,"When we look more closely by hovering over the result in the Console, we find that instead of the Sony subwoofer, we found a JBL Flip speaker. Why? Because earlier we explained that ",(0,l.kt)("inlineCode",{parentName:"p"},"document.querySelector('.product-item')")," finds the ",(0,l.kt)("strong",{parentName:"p"},"first element")," with the ",(0,l.kt)("inlineCode",{parentName:"p"},"product-item")," class, and the JBL speaker is the first product in the list."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Hover over a query result",src:n(15191).Z,width:"2508",height:"1624"})),(0,l.kt)("p",null,"We need a different function: ",(0,l.kt)("a",{parentName:"p",href:"/academy/concepts/querying-css-selectors",target:null,rel:null},(0,l.kt)("inlineCode",{parentName:"a"},"document.querySelectorAll()"))," (notice the ",(0,l.kt)("inlineCode",{parentName:"p"},"All")," at the end). This function does not find only the first element, but all the elements that match the provided selector."),(0,l.kt)("p",null,"Run the following function in the Console:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"document.querySelectorAll('.product-item');\n")),(0,l.kt)("p",null,"It will return a ",(0,l.kt)("inlineCode",{parentName:"p"},"NodeList")," (a type of array) with many results. Expand the results by clicking the small arrow button and then hover over the third (number 2, indexing starts at 0) element in the list. You'll find that it's the Sony subwoofer we're looking for."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Hover over a query result",src:n(49884).Z,width:"1946",height:"1734"})),(0,l.kt)("p",null,"Naturally, this is the method we use mostly in web scraping, because we're usually interested in scraping all the products from a page, not just a single product."),(0,l.kt)("h2",{id:"choose-good-selectors"},"How to choose good selectors"),(0,l.kt)("p",null,"There are always multiple ways to select an element using CSS selectors. Try to choose selectors that are ",(0,l.kt)("strong",{parentName:"p"},"simple"),", ",(0,l.kt)("strong",{parentName:"p"},"human-readable"),", ",(0,l.kt)("strong",{parentName:"p"},"unique")," and ",(0,l.kt)("strong",{parentName:"p"},"semantically connected")," to the data. Selectors that meet these criteria are sometimes called ",(0,l.kt)("strong",{parentName:"p"},"resilient selectors"),", because they're the most reliable and least likely to change with website updates. If you can, avoid randomly generated attributes like ",(0,l.kt)("inlineCode",{parentName:"p"},'class="F4jsL8"'),". They change often and without warning."),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"product-item")," class is simple, human-readable, and semantically connected with the data. The subwoofer is one of the products. A product item. Those are strong signals that this is a good selector. It's also sufficiently unique in the website's context. If the selector was only an ",(0,l.kt)("inlineCode",{parentName:"p"},"item"),", for example, there would be a higher chance that the website's developers would add this class to something unrelated. Like an advertisement. And it could break your extraction code."),(0,l.kt)("h2",{id:"extraction-from-elements"},"Extracting data from elements"),(0,l.kt)("p",null,"Now that we found the element, we can start poking into it to extract data. First, let's save the element to a variable so that we can work with it repeatedly."),(0,l.kt)("p",null,"Run the commands in the Console:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const products = document.querySelectorAll('.product-item');\nconst subwoofer = products[2];\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"If you're wondering what an array is or what ",(0,l.kt)("inlineCode",{parentName:"p"},"products[2]")," means, learn more in ",(0,l.kt)("a",{parentName:"p",href:"https://javascript.info/array",target:"_blank",rel:"noopener"},"this tutorial on JavaScript arrays"),".")),(0,l.kt)("p",null,"Now that we have the subwoofer saved into a variable, run another command in the Console to print its text:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"subwoofer.textContent\n")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Print text content of parent element",src:n(13915).Z,width:"1700",height:"858"})),(0,l.kt)("p",null,"As you can see, we were able to extract information about the subwoofer, but the format is still not very useful - there's a lot of content that we don't need. For further processing (ex. in a spreadsheet), we would like to have each piece of data as a separate field (column). To do that, we will look at the HTML structure in more detail."),(0,l.kt)("h3",{id:"finding-child-elements"},"Finding child elements"),(0,l.kt)("p",null,"In the ",(0,l.kt)("a",{parentName:"p",href:"#getting-structured-data-from-html",target:null,rel:null},"Getting structured data from HTML")," section, we were browsing the elements in the ",(0,l.kt)("strong",{parentName:"p"},"Elements")," tab to find the element that contains all the data. We can use the same approach to find the individual data points as well."),(0,l.kt)("p",null,"Start from the element that contains all data: ",(0,l.kt)("inlineCode",{parentName:"p"},'<div class="product-item...">')," Then inspect all the elements nested within this element. You'll discover that:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"the product's name is an ",(0,l.kt)("inlineCode",{parentName:"li"},"<a>")," element with the class ",(0,l.kt)("inlineCode",{parentName:"li"},"product-item__title"),", and"),(0,l.kt)("li",{parentName:"ul"},"the price is held inside a ",(0,l.kt)("inlineCode",{parentName:"li"},"<span>")," with the class ",(0,l.kt)("inlineCode",{parentName:"li"},"price"),". Note that there are two prices. The sale price and the regular price. We want the sale price.")),(0,l.kt)("p",null,"We will use this knowledge soon to extract the data."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Finding child elements in Elements tab",src:n(8090).Z,width:"2358",height:"1156"})),(0,l.kt)("h3",{id:"selecting-child-elements"},"Selecting child elements"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"document.querySelector()")," function looks for a specific element in the whole HTML ",(0,l.kt)("inlineCode",{parentName:"p"},"document"),", so if we called it with ",(0,l.kt)("inlineCode",{parentName:"p"},"h3"),", it would find the first ",(0,l.kt)("inlineCode",{parentName:"p"},"<h3>")," node in the ",(0,l.kt)("inlineCode",{parentName:"p"},"document"),". But we can replace the ",(0,l.kt)("inlineCode",{parentName:"p"},"document")," with any other parent element and the function will limit its search to child elements of the chosen parent."),(0,l.kt)("p",null,"Earlier we selected the parent element of the Sony subwoofer and saved it to a variable called ",(0,l.kt)("inlineCode",{parentName:"p"},"subwoofer"),". Let's use this variable to search inside the subwoofer element and find the product's name and price."),(0,l.kt)("p",null,"Run two commands in the Console. The first will find the element with the subwoofer's name and save it to a variable called ",(0,l.kt)("inlineCode",{parentName:"p"},"title"),". The second will extract the name and print it."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const title = subwoofer.querySelector('a.product-item__title');\ntitle.textContent\n")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Extract product title",src:n(82557).Z,width:"1586",height:"718"})),(0,l.kt)("p",null,"Great! We found a way how to programmatically extract the name of the product. We're getting somewhere."),(0,l.kt)("p",null,"Next, run the following two commands in the Console."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const price = subwoofer.querySelector('span.price');\nprice.textContent\n")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Extract product price",src:n(57519).Z,width:"1686",height:"864"})),(0,l.kt)("p",null,"It worked, but the price was not alone in the result. We extracted it together with some extra text. This is very common in web scraping. Sometimes it's not possible to easily separate the data we need by element selection alone, and we have to clean the data using other methods."),(0,l.kt)("h3",{id:"cleaning-extracted-data"},"Cleaning extracted data"),(0,l.kt)("p",null,"There are two approaches to cleaning the data. It's useful to know both, because often one of them is feasible to use and the other isn't."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Remove the elements that add noise to your data from the selection. Then extract the pre-cleaned data."),(0,l.kt)("li",{parentName:"ol"},"Extract the data with noise. Use regular expressions or other text manipulation techniques to parse the data and keep only the parts we're interested in.")),(0,l.kt)("p",null,"First, let's look at ",(0,l.kt)("strong",{parentName:"p"},"removing the noise before extraction"),". When you look closely at the element that contains the price, you'll see that it includes another ",(0,l.kt)("inlineCode",{parentName:"p"},"<span>")," element with the text ",(0,l.kt)("strong",{parentName:"p"},"Sale price"),". This ",(0,l.kt)("inlineCode",{parentName:"p"},"<span>")," is what adds noise to our data, and we have to get rid of it."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Noise in element selection",src:n(73027).Z,width:"1312",height:"490"})),(0,l.kt)("p",null,"When we call ",(0,l.kt)("inlineCode",{parentName:"p"},"subwoofer.querySelector('span.price')")," it selects the whole ",(0,l.kt)("inlineCode",{parentName:"p"},'<span class="price ...:>')," element. Unfortunately, it also includes the ",(0,l.kt)("inlineCode",{parentName:"p"},'<span class="visually-hidden">')," element that we're not interested in."),(0,l.kt)("p",null,"We can, however, use JavaScript to get only the actual text of the selected element, without any child elements. Run this command in the Console:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"price.childNodes[2].nodeValue\n")),(0,l.kt)("p",null,"Why the third child node? Because the first one represents the empty space before ",(0,l.kt)("inlineCode",{parentName:"p"},'<span class="visually-hidden"'),", the second is the noise ",(0,l.kt)("inlineCode",{parentName:"p"},"<span>")," itself and the third one is the price. In any case, we were able to extract the clean price."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Clean price selection",src:n(42801).Z,width:"938",height:"452"})),(0,l.kt)("p",null,"The second option we have is to ",(0,l.kt)("strong",{parentName:"p"},"take the noisy price data and clean it with string manipulation"),". The data looks like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\\n                Sale price$158.00\n")),(0,l.kt)("p",null,"There are numerous ways how we could approach this. Let's try a very naive solution:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"price.textContent.split('$')[1]\n")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Split price from noise",src:n(58115).Z,width:"972",height:"438"})),(0,l.kt)("p",null,"And there you go. Notice that this time we extracted the price without the ",(0,l.kt)("inlineCode",{parentName:"p"},"$")," dollar sign. This could be desirable, because we wanted to convert the price from a string to a number, or not, depending on individual circumstances of the scraping project."),(0,l.kt)("p",null,"So which method to choose? Neither is the perfect solution. The first method could easily break if the website's developers change the structure of the ",(0,l.kt)("inlineCode",{parentName:"p"},"<span>")," elements and the price will no longer be in the third position - a very small change that can happen at any moment."),(0,l.kt)("p",null,"The second method seems more reliable, but only until the website adds prices in other currency or decides to replace ",(0,l.kt)("inlineCode",{parentName:"p"},"$")," with ",(0,l.kt)("inlineCode",{parentName:"p"},"USD"),". It's up to you, the scraping developer to decide which of the methods will be more resilient on the website you scrape."),(0,l.kt)("p",null,"In production, we would probably use a regular expression like the following, or a specialized library for parsing prices from strings, but for this tutorial, we'll keep it simple."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"price.textContent.match(/((\\d+,?)+.?(\\d+)?)/)[0]\n")),(0,l.kt)("h2",{id:"next"},"Next up"),(0,l.kt)("p",null,"This concludes our lesson on extracting and cleaning data using DevTools. Using CSS selectors, we were able to find the HTML element that contains data about our favorite Sony subwoofer and then extract the data. In the ",(0,l.kt)("a",{parentName:"p",href:"/academy/web-scraping-for-beginners/data-collection/devtools-continued",target:null,rel:null},"next lesson"),", we will learn how to extract information not only about the subwoofer, but about all the products on the page."))}u.isMDXComponent=!0},42801:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/devtools-clean-price-8411206ba8f39485d232cb7c1e5d066a.png"},73027:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/devtools-cleaning-noise-d6f3a7365fa9d2306086e00d8cd7fa88.png"},75546:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/devtools-collection-class-0c9aab05cfd98e0e534e0c9adbac28da.png"},76648:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/devtools-collection-product-hover-dd23c141bea5f9739410eaa06e83ee80.png"},89930:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/devtools-collection-product-name-49124d4c5af086ac2577f349e1ffd989.png"},49884:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/devtools-collection-query-all-8d4bc26a48292f70f45bd4fe99fbbb0a.png"},15191:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/devtools-collection-query-hover-06b6ee753dee883803dc079bf2abecf1.png"},23791:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/devtools-collection-query-9f650202d95e659b6124adfc5bc1754d.png"},70:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/devtools-collection-warehouse-9ab5f52429a865e8965f889abd5e2180.png"},57519:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/devtools-extract-product-price-b6f83ca557a4c83972c75b78631df80e.png"},82557:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/devtools-extract-product-title-b1934c7e0566336835fad2001dd126b7.png"},8090:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/devtools-find-child-elements-c503170e9925d6e564f97317bf7503b6.png"},13915:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/devtools-print-parent-text-1e295ece2af49af7bd9cf50aba9d2868.png"},58115:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/devtools-split-price-f86125408dc6f5ad844bb3d154931bc6.png"}}]);