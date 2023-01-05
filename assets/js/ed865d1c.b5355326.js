"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[3556],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=o.createContext({}),c=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,h=m["".concat(i,".").concat(d)]||m[d]||u[d]||r;return n?o.createElement(h,l(l({ref:t},p),{},{components:n})):o.createElement(h,l({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var c=2;c<r;c++)l[c]=n[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85738:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var o=n(87462),a=n(63366),r=(n(67294),n(3905)),l=["components"],s={title:"Browser DevTools - I",description:"Learn about browser DevTools, a valuable tool in the world of web scraping , and how you can use them to collect data from a website.",sidebar_position:1,slug:"/web-scraping-for-beginners/data-collection/browser-devtools"},i="[](#devtools) Browser DevTools",c={unversionedId:"web_scraping_for_beginners/data_collection/browser_devtools",id:"web_scraping_for_beginners/data_collection/browser_devtools",title:"Browser DevTools - I",description:"Learn about browser DevTools, a valuable tool in the world of web scraping , and how you can use them to collect data from a website.",source:"@site/sources/academy/web_scraping_for_beginners/data_collection/browser_devtools.md",sourceDirName:"web_scraping_for_beginners/data_collection",slug:"/web-scraping-for-beginners/data-collection/browser-devtools",permalink:"/academy/web-scraping-for-beginners/data-collection/browser-devtools",draft:!1,tags:[],version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1672928875,formattedLastUpdatedAt:"Jan 5, 2023",sidebarPosition:1,frontMatter:{title:"Browser DevTools - I",description:"Learn about browser DevTools, a valuable tool in the world of web scraping , and how you can use them to collect data from a website.",sidebar_position:1,slug:"/web-scraping-for-beginners/data-collection/browser-devtools"},sidebar:"defaultSidebar",previous:{title:"Basics of data collection",permalink:"/academy/web-scraping-for-beginners/data-collection"},next:{title:"Browser DevTools - II",permalink:"/academy/web-scraping-for-beginners/data-collection/using-devtools"}},p={},u=[{value:" Elements tab",id:"-elements-tab",level:2},{value:" Selecting an element",id:"-selecting-an-element",level:2},{value:" Interacting with an element",id:"-interacting-with-an-element",level:2},{value:" Next up",id:"-next-up",level:2}],m={toc:u};function d(e){var t=e.components,s=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,o.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"-browser-devtools"},(0,r.kt)("a",{parentName:"h1",href:"#devtools",target:null,rel:null})," Browser DevTools"),(0,r.kt)("p",null,"Even though DevTools stands for developer tools, everyone can use them to inspect a website. Each major browser has their own DevTools. We will use Chrome DevTools as an example, but the advice is applicable to any browser, as the tools are extremely similar. To open Chrome DevTools, press ",(0,r.kt)("strong",{parentName:"p"},"F12")," or right-click anywhere in the page and choose ",(0,r.kt)("strong",{parentName:"p"},"Inspect"),"."),(0,r.kt)("h2",{id:"-elements-tab"},(0,r.kt)("a",{parentName:"h2",href:"#elements-tab",target:null,rel:null})," Elements tab"),(0,r.kt)("p",null,"When you first open Chrome DevTools, you will start on the Elements tab (In Firefox it's called the ",(0,r.kt)("strong",{parentName:"p"},"Inspector"),"). You can use this tab to inspect the page's HTML on the left hand side, and its CSS on the right. The items in the HTML view are called ",(0,r.kt)("strong",{parentName:"p"},"elements")," or ",(0,r.kt)("strong",{parentName:"p"},"nodes"),". Each element is enclosed in an HTML tag. For example ",(0,r.kt)("inlineCode",{parentName:"p"},"<div>"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"<p>"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"<span>")," are all tags. When you add something inside of those tags, like ",(0,r.kt)("inlineCode",{parentName:"p"},"<p>Hello!</p>")," you create an element. You can also see elements inside other elements in the ",(0,r.kt)("strong",{parentName:"p"},"Elements")," tab. This is called nesting, and it gives the page its structure."),(0,r.kt)("p",null,"At the bottom, there's the ",(0,r.kt)("strong",{parentName:"p"},"JavaScript console"),", which is a powerful tool which can be used to manipulate the website. If the console is not there, you can press ",(0,r.kt)("strong",{parentName:"p"},"ESC")," to toggle it. All of this might look super complicated at first, but don't worry, there's no need to understand everything just yet - we'll be walking you through all the important things you need to know."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Chrome DevTools with elements tab and console",src:n(46024).Z,width:"2748",height:"1938"})),(0,r.kt)("h2",{id:"-selecting-an-element"},(0,r.kt)("a",{parentName:"h2",href:"#selecting-an-element",target:null,rel:null})," Selecting an element"),(0,r.kt)("p",null,"In the top left corner of DevTools, there's a little arrow icon with a square. When you click it and hover your mouse over some of the website's content, DevTools will show you information about the HTML element being hovered over. When you click the element, it will be selected in the ",(0,r.kt)("strong",{parentName:"p"},"Elements")," tab, which allows for further inspection of the node and its content."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Chrome DevTools element selection hover effect",src:n(6865).Z,width:"1178",height:"860"})),(0,r.kt)("h2",{id:"-interacting-with-an-element"},(0,r.kt)("a",{parentName:"h2",href:"#interacting-with-elements",target:null,rel:null})," Interacting with an element"),(0,r.kt)("p",null,"After you select an element, you can right-click the highlighted element in the Elements tab to show a menu with available actions. For now, select ",(0,r.kt)("strong",{parentName:"p"},"Store as global variable")," (",(0,r.kt)("strong",{parentName:"p"},"Use in Console")," in Firefox). You'll see that a new variable called ",(0,r.kt)("inlineCode",{parentName:"p"},"temp1")," (",(0,r.kt)("inlineCode",{parentName:"p"},"temp0")," in Firefox) appeared in your DevTools Console. You can now use the console to access the element's properties using JavaScript."),(0,r.kt)("p",null,"For example, if you wanted to scrape the text in the element, you could use the ",(0,r.kt)("inlineCode",{parentName:"p"},"textContent")," property to get it. The following command will get the text of your ",(0,r.kt)("inlineCode",{parentName:"p"},"temp1")," element and print it to the console using the ",(0,r.kt)("inlineCode",{parentName:"p"},"console.log()")," function."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"console.log(temp1.textContent);\n")),(0,r.kt)("p",null,"You can also get the HTML of the element using this command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"console.log(temp1.outerHTML);\n")),(0,r.kt)("p",null,"And you could even change the text of the element, if you wanted to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"temp1.textContent = 'Hello!';\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Chrome DevTools JavaScript command execution",src:n(5863).Z,width:"1326",height:"972"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"You can interact with the page in many more ways using the Console. If you want to dive deeper we recommend this ",(0,r.kt)("a",{parentName:"p",href:"https://javascript.info/document",target:"_blank",rel:"noopener"},"tutorial on documents"),". A web page in a browser is called a document.")),(0,r.kt)("h2",{id:"-next-up"},(0,r.kt)("a",{parentName:"h2",href:"#next",target:null,rel:null})," Next up"),(0,r.kt)("p",null,"In this lesson, we learned the absolute basics of interaction with a page using the DevTools. In the ",(0,r.kt)("a",{parentName:"p",href:"/academy/web-scraping-for-beginners/data-collection/using-devtools",target:null,rel:null},"next lesson"),", you will learn how to extract data from it. We will collect data about the on-sale products on ",(0,r.kt)("a",{parentName:"p",href:"https://demo-webstore.apify.org",target:"_blank",rel:"noopener"},"this e-commerce website"),". This isn't a real website, just a demo site for the Academy which uses the latest technologies that a real-world modern e-commerce web-application would use."))}d.isMDXComponent=!0},5863:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/basic-console-commands-1c4eedcd0f745d8d5f60b0cb83b3eeae.webp"},46024:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/browser-devtools-2f9cce6ccee1f0150c5eee52a38607ca.webp"},6865:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/hover-effect-389f0a8c79a98ec86b77da2af1ccbbb2.webp"}}]);