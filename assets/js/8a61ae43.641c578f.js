"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[5933],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>h});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(t),u=i,h=d["".concat(s,".").concat(u)]||d[u]||g[u]||a;return t?r.createElement(h,l(l({ref:n},p),{},{components:t})):r.createElement(h,l({ref:n},p))}));function h(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=u;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[d]="string"==typeof e?e:i,l[1]=o;for(var c=2;c<a;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3959:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var r=t(87462),i=t(63366),a=(t(67294),t(3905)),l=["components"],o={title:"Finding links",description:"Learn what a link looks like in HTML and how to find and collect their URLs when web scraping using both DevTools and Node.js.",sidebar_position:2,slug:"/web-scraping-for-beginners/crawling/finding-links"},s="[](#finding-links) Finding links",c={unversionedId:"web_scraping_for_beginners/crawling/finding_links",id:"web_scraping_for_beginners/crawling/finding_links",title:"Finding links",description:"Learn what a link looks like in HTML and how to find and collect their URLs when web scraping using both DevTools and Node.js.",source:"@site/sources/academy/web_scraping_for_beginners/crawling/finding_links.md",sourceDirName:"web_scraping_for_beginners/crawling",slug:"/web-scraping-for-beginners/crawling/finding-links",permalink:"/academy/web-scraping-for-beginners/crawling/finding-links",draft:!1,tags:[],version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1671540496,formattedLastUpdatedAt:"Dec 20, 2022",sidebarPosition:2,frontMatter:{title:"Finding links",description:"Learn what a link looks like in HTML and how to find and collect their URLs when web scraping using both DevTools and Node.js.",sidebar_position:2,slug:"/web-scraping-for-beginners/crawling/finding-links"},sidebar:"defaultSidebar",previous:{title:"Recap! - Data collection",permalink:"/academy/web-scraping-for-beginners/crawling/recap-collection-basics"},next:{title:"Filtering links",permalink:"/academy/web-scraping-for-beginners/crawling/filtering-links"}},p={},d=[{value:" Collecting links \ud83d\udd17",id:"-collecting-links-",level:2},{value:" Collecting links in Node.js",id:"-collecting-links-in-nodejs",level:2},{value:" Next Up",id:"-next-up",level:2}],g={toc:d};function u(e){var n=e.components,t=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"-finding-links"},(0,a.kt)("a",{parentName:"h1",href:"#finding-links",target:null,rel:null})," Finding links"),(0,a.kt)("p",null,"There are many kinds of links on the internet, which we'll cover in the advanced Academy courses. For now, let's think of links as ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a",target:"_blank",rel:"noopener"},"HTML anchor elements")," with ",(0,a.kt)("inlineCode",{parentName:"p"},"<a>")," tags. A typical link looks like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-HTML"},'<a href="https://example.com">This is a link to example.com</a>\n')),(0,a.kt)("p",null,'On a webpage, the link above will look like this: "',(0,a.kt)("a",{href:"https://example.com",target:"_blank",rel:"noopener noreferrer"},"This is a link to example.com"),'". When you click it, your browser will navigate to the URL in the ',(0,a.kt)("inlineCode",{parentName:"p"},"<a>")," tag's ",(0,a.kt)("inlineCode",{parentName:"p"},"href")," attribute (",(0,a.kt)("inlineCode",{parentName:"p"},"https://example.com"),")."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"href")," means ",(0,a.kt)("strong",{parentName:"p"},"H"),"ypertext ",(0,a.kt)("strong",{parentName:"p"},"REF"),"erence. You don't need to remember this - just know that ",(0,a.kt)("inlineCode",{parentName:"p"},"href")," typically means some sort of link.")),(0,a.kt)("h2",{id:"-collecting-links-"},(0,a.kt)("a",{parentName:"h2",href:"#collecting-links",target:null,rel:null})," Collecting links \ud83d\udd17"),(0,a.kt)("p",null,"So, if a link is just an HTML element, and the URL is just an attribute, this means that we can collect links exactly the same way as we collected data.\ud83d\udca1 Easy!"),(0,a.kt)("p",null,"To test this theory in the browser, we can try running the following code in our DevTools console on any website."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// Select all the <a> elements.\nconst links = document.querySelectorAll('a');\n// For each of the links...\nfor (const link of links) {\n    // get the value of its 'href' attribute...\n    const url = link.href;\n    // and print it to console.\n    console.log(url);\n}\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Boom"))," \ud83d\udca5, all the links from the website have now been printed to the console. Unless you were on example.com, it's usually a lot of links. By doing this, we can get a first-hand look at how interconnected the web really is."),(0,a.kt)("h2",{id:"-collecting-links-in-nodejs"},(0,a.kt)("a",{parentName:"h2",href:"#collecting-links-in-node",target:null,rel:null})," Collecting links in Node.js"),(0,a.kt)("p",null,"DevTools is a fun playground, but Node.js is way more useful. Let's create a new file in our project called ",(0,a.kt)("strong",{parentName:"p"},"crawler.js")," and start adding some basic crawling code. We'll start with the same boilerplate as with our original scraper, but this time, we'll download the HTML of ",(0,a.kt)("a",{parentName:"p",href:"https://demo-webstore.apify.org/",target:"_blank",rel:"noopener"},"the demo site's main page"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// crawler.js\nimport { gotScraping } from 'got-scraping';\nimport cheerio from 'cheerio';\n\n// This time we open main page\nconst response = await gotScraping('https://demo-webstore.apify.org/');\nconst html = response.body;\n\nconst $ = cheerio.load(html);\n\nconst links = $('a');\n\nfor (const link of links) {\n    const url = $(link).attr('href');\n    console.log(url);\n}\n")),(0,a.kt)("p",null,"Aside from importing libraries and downloading HTML, we loaded the HTML into Cheerio and then used it to retrieve all the ",(0,a.kt)("inlineCode",{parentName:"p"},"<a>")," elements. After that, we iterated over the collected links and printed their ",(0,a.kt)("inlineCode",{parentName:"p"},"href")," attributes, which we accessed using the ",(0,a.kt)("a",{parentName:"p",href:"https://api.jquery.com/attr/",target:"_blank",rel:"noopener"},(0,a.kt)("inlineCode",{parentName:"a"},".attr()"))," function. Remember, Cheerio functions are exactly the same as they are in jQuery."),(0,a.kt)("h2",{id:"-next-up"},(0,a.kt)("a",{parentName:"h2",href:"#next",target:null,rel:null})," Next Up"),(0,a.kt)("p",null,"After running the code, you will see quite a lot of links in the terminal. Some of them may look weird because they don't start with the regular ",(0,a.kt)("strong",{parentName:"p"},"https://")," protocol. We'll learn what to do with them in the ",(0,a.kt)("a",{parentName:"p",href:"/academy/web-scraping-for-beginners/crawling/filtering-links",target:null,rel:null},"next lesson"),"."))}u.isMDXComponent=!0}}]);