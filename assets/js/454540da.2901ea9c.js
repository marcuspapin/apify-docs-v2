"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[1025],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=c(n),u=r,m=h["".concat(l,".").concat(u)]||h[u]||d[u]||i;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},64386:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],s={title:"How to scrape hidden JavaScript objects in HTML",description:'Learn about "hidden" data found within the JavaScript of certain pages, which can increase the scraper reliability and improve your development experience.',sidebar_position:14.5,slug:"/node-js/js-in-html"},l="How to scrape hidden JavaScript objects in HTML",c={unversionedId:"tutorials/node_js/js_in_html",id:"tutorials/node_js/js_in_html",title:"How to scrape hidden JavaScript objects in HTML",description:'Learn about "hidden" data found within the JavaScript of certain pages, which can increase the scraper reliability and improve your development experience.',source:"@site/sources/academy/tutorials/node_js/js_in_html.md",sourceDirName:"tutorials/node_js",slug:"/node-js/js-in-html",permalink:"/academy/node-js/js-in-html",draft:!1,tags:[],version:"current",lastUpdatedBy:"Jind\u0159ich B\xe4r",lastUpdatedAt:1675342799,formattedLastUpdatedAt:"Feb 2, 2023",sidebarPosition:14.5,frontMatter:{title:"How to scrape hidden JavaScript objects in HTML",description:'Learn about "hidden" data found within the JavaScript of certain pages, which can increase the scraper reliability and improve your development experience.',sidebar_position:14.5,slug:"/node-js/js-in-html"},sidebar:"academy",previous:{title:"How to scrape from dynamic pages",permalink:"/academy/node-js/dealing-with-dynamic-pages"},next:{title:"How to optimize and speed up your web scraper",permalink:"/academy/node-js/optimizing-scrapers"}},p={},d=[{value:"Locating JSON objects within script tags",id:"locating-json-in-html",level:2},{value:"Parsing",id:"parsing-objects",level:2},{value:"1. Parsing them directly from the HTML",id:"1-parsing-them-directly-from-the-html",level:3},{value:"2. Retrieving them within the context of the browser",id:"2-retrieving-them-within-the-context-of-the-browser",level:3}],h={toc:d};function u(e){var t=e.components,s=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"what-is-js-in-html"},"How to scrape hidden JavaScript objects in HTML"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},'Learn about "hidden" data found within the JavaScript of certain pages, which can increase the scraper reliability and improve your development experience.')),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Depending on the technology the target website is using, the data to be collected not only can be found within HTML elements, but also in a JSON format within ",(0,i.kt)("inlineCode",{parentName:"p"},"<script>")," tags in the DOM."),(0,i.kt)("p",null,"The advantages of using these objects instead of parsing the HTML are that parsing JSON is much simpler, and more reliable than parsing HTML elements. They are much less likely to change, while the CSS selectors are prone to updates and re-namings every time the website is updated."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Note:")," In this tutorial, we'll be using ",(0,i.kt)("a",{parentName:"p",href:"https://soundcloud.com",target:"_blank",rel:"noopener"},"SoundCloud's website")," as an example target, but the techniques described here can be applied to any site.")),(0,i.kt)("h2",{id:"locating-json-in-html"},"Locating JSON objects within script tags"),(0,i.kt)("p",null,"Using our DevTools, we can inspect our ",(0,i.kt)("a",{parentName:"p",href:"https://soundcloud.com/tiesto/tracks",target:"_blank",rel:"noopener"},"target page"),", or right click the page and click ",(0,i.kt)("strong",{parentName:"p"},"View Page Source")," to see the DOM. Next, we'll find a value on the page that we can predict would be in a potential API response. For our page, we'll use the ",(0,i.kt)("strong",{parentName:"p"},"Tracks")," count of ",(0,i.kt)("inlineCode",{parentName:"p"},"845"),". On the ",(0,i.kt)("strong",{parentName:"p"},"View Page Source")," page, we'll do ",(0,i.kt)("strong",{parentName:"p"},"\u2318")," + ",(0,i.kt)("strong",{parentName:"p"},"F")," and type in this value, which will show all matches for it within the DOM. This method can expose ",(0,i.kt)("inlineCode",{parentName:"p"},"<script>")," tag objects which hold the target data."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Find the value within the DOM using CMD + F",src:n(60464).Z,width:"2938",height:"1850"})),(0,i.kt)("p",null,"These data objects will usually be attached to the window object (often prefixed with two underscores - ",(0,i.kt)("inlineCode",{parentName:"p"},"__"),"). When scrolling to the beginning of the script tag on our ",(0,i.kt)("strong",{parentName:"p"},"View Page Source")," page, we see that the name of our target object is ",(0,i.kt)("inlineCode",{parentName:"p"},"__sc_hydration"),". Heading back to DevTools and typing this into the console, the object is displayed."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"View the target data in the window object using the console in DevTools",src:n(60836).Z,width:"1717",height:"1244"})),(0,i.kt)("h2",{id:"parsing-objects"},"Parsing"),(0,i.kt)("p",null,"There are two ways to go about obtaining these objects to be used and manipulated in JavaScript code:"),(0,i.kt)("h3",{id:"1-parsing-them-directly-from-the-html"},"1. Parsing them directly from the HTML"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// same as \"document.querySelector('html').innerHTML\"\nconst html = $.html()\n\nconst string = html.split('window.__sc_hydration = ')[1].split(';<\/script>')[0]\n\nconst data = JSON.parse(string)\n\nconsole.log(data)\n")),(0,i.kt)("h3",{id:"2-retrieving-them-within-the-context-of-the-browser"},"2. Retrieving them within the context of the browser"),(0,i.kt)("p",null,"Tools like ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/puppeteer/puppeteer",target:"_blank",rel:"noopener"},"Puppeteer")," allow us to run code within the context in the browser, as well as return things out of these functions and use the data back in the Node.js context."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const data = await page.evaluate(() => window.__sc_hydration)\n\nconsole.log(data)\n")),(0,i.kt)("p",null,"Which of these methods you use totally depends on the type of crawler you are using. Grabbing the data directly from the ",(0,i.kt)("inlineCode",{parentName:"p"},"window")," object within the context of the browser using Puppeteer is of course the most reliable solution; however, it is less performant than making a static HTTP request and parsing the object directly from the downloaded HTML."))}u.isMDXComponent=!0},60464:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/view-845-77582d897496190ac1b44e2eb4364273.png"},60836:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/view-object-in-window-b9e1031f84b636d9038ecf8a4f6b394d.png"}}]);