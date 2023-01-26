"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[3238],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),g=n,m=u["".concat(l,".").concat(g)]||u[g]||d[g]||o;return r?a.createElement(m,i(i({ref:t},c),{},{components:r})):a.createElement(m,i({ref:t},c))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},73620:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>g,frontMatter:()=>s,metadata:()=>p,toc:()=>d});var a=r(87462),n=r(63366),o=(r(67294),r(3905)),i=["components"],s={title:"Project setup",description:"Create a new project with NPM and Node.js. Install necessary libraries, and test that everything works before starting the next modules.",sidebar_position:5,slug:"/web-scraping-for-beginners/data-collection/project-setup"},l="Setting up your project",p={unversionedId:"webscraping/web_scraping_for_beginners/data_collection/project_setup",id:"webscraping/web_scraping_for_beginners/data_collection/project_setup",title:"Project setup",description:"Create a new project with NPM and Node.js. Install necessary libraries, and test that everything works before starting the next modules.",source:"@site/sources/academy/webscraping/web_scraping_for_beginners/data_collection/project_setup.md",sourceDirName:"webscraping/web_scraping_for_beginners/data_collection",slug:"/web-scraping-for-beginners/data-collection/project-setup",permalink:"/academy/web-scraping-for-beginners/data-collection/project-setup",draft:!1,tags:[],version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1674755822,formattedLastUpdatedAt:"Jan 26, 2023",sidebarPosition:5,frontMatter:{title:"Project setup",description:"Create a new project with NPM and Node.js. Install necessary libraries, and test that everything works before starting the next modules.",sidebar_position:5,slug:"/web-scraping-for-beginners/data-collection/project-setup"},sidebar:"academy",previous:{title:"Computer preparation",permalink:"/academy/web-scraping-for-beginners/data-collection/computer-preparation"},next:{title:"Node.js scraper - I",permalink:"/academy/web-scraping-for-beginners/data-collection/node-js-scraper"}},c={},d=[{value:"Creating a new project with NPM",id:"creating-a-project",level:2},{value:"Use modern JavaScript",id:"modern-javascript",level:3},{value:"Installing necessary libraries",id:"install-libraries",level:2},{value:"Test everything",id:"testing",level:2},{value:"Next up",id:"next",level:2}],u={toc:d};function g(e){var t=e.components,s=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"setting-up"},"Setting up your project"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Create a new project with NPM and Node.js. Install necessary libraries, and test that everything works before starting the next modules.")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"When you open a website in a browser, the browser first downloads the page's initial HTML. To do the same thing with Node.js, we will install a program - an NPM module - to help us with it. NPM modules are installed using ",(0,o.kt)("inlineCode",{parentName:"p"},"npm"),", which is another program, automatically installed with Node.js."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/",target:"_blank",rel:"noopener"},"NPM")," has a huge collection of open-source libraries for Node.js. You can (and you should) utilize it to save time and tap into the amazing open-source community around JavaScript and Node.js.")),(0,o.kt)("h2",{id:"creating-a-project"},"Creating a new project with NPM"),(0,o.kt)("p",null,"Before we can install NPM modules, we need to create an NPM project. To do that, you can create a new directory or use the one that you already have open in VSCode (you can delete the ",(0,o.kt)("strong",{parentName:"p"},"hello.js")," file now) and from that directory run this command in your terminal:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npm init -y\n")),(0,o.kt)("p",null,"It will set up an empty NPM project for you and create a file called ",(0,o.kt)("strong",{parentName:"p"},"package.json"),". This is a very important file in Node.js programming as it contains information about the project."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"NPM init with VSCode",src:r(2963).Z,width:"2128",height:"1382"})),(0,o.kt)("h3",{id:"modern-javascript"},"Use modern JavaScript"),(0,o.kt)("p",null,"Node.js and NPM support two types of projects, let's call them legacy and modern. For backwards compatibility, the legacy version is used by default. To switch to the modern version, open your ",(0,o.kt)("strong",{parentName:"p"},"package.json")," and add this line to the end of the JSON object. Don't forget to add a comma to the end of the previous line \ud83d\ude09"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},'"type": "module"\n')),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Update package.json with VSCode",src:r(54644).Z,width:"1018",height:"710"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If you want to learn more about JSON and its syntax, we recommend ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON",target:"_blank",rel:"noopener"},"this tutorial on MDN"),".")),(0,o.kt)("h2",{id:"install-libraries"},"Installing necessary libraries"),(0,o.kt)("p",null,"Now that we have a project set up, we can install NPM modules into the project. We will do that and install libraries that will help us very easily download and process websites' HTML. In the project directory, run the following command, which will install two libraries into your project. ",(0,o.kt)("strong",{parentName:"p"},"got-scraping")," and Cheerio."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npm install got-scraping cheerio\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/apify/got-scraping",target:"_blank",rel:"noopener"},(0,o.kt)("strong",{parentName:"a"},"got-scraping"))," is a library that's made especially for scraping and downloading page's HTML. It's based on the very popular ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/sindresorhus/got",target:"_blank",rel:"noopener"},(0,o.kt)("strong",{parentName:"a"},"got")," library"),", which means any features of ",(0,o.kt)("strong",{parentName:"p"},"got")," are also available in ",(0,o.kt)("strong",{parentName:"p"},"got-scraping"),". More precisely, ",(0,o.kt)("strong",{parentName:"p"},"got")," and ",(0,o.kt)("strong",{parentName:"p"},"got-scraping")," are HTTP clients. To learn more about HTTP, ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP",target:"_blank",rel:"noopener"},"visit this MDN tutorial"),"."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/cheeriojs/cheerio",target:"_blank",rel:"noopener"},"Cheerio")," is a very popular Node.js library for parsing (processing) HTML. It is a replica of probably the most popular JavaScript library of all time - ",(0,o.kt)("a",{parentName:"p",href:"https://jquery.com/",target:"_blank",rel:"noopener"},"jQuery"),". We can't use jQuery in Node.js because it only works in the browser, so we replace it with Cheerio, which is exactly the same."),(0,o.kt)("h2",{id:"testing"},"Test everything"),(0,o.kt)("p",null,"With the libraries installed, create a new file in the project's folder called ",(0,o.kt)("strong",{parentName:"p"},"main.js"),". This is where we will put all our code. Before we start scraping, though, let's do a simple check that everything installed correctly. Inside ",(0,o.kt)("strong",{parentName:"p"},"main.js")," add this piece of code."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import gotScraping from 'got-scraping';\nimport cheerio from 'cheerio';\n\nconsole.log('it works!');\n")),(0,o.kt)("p",null,"Those ",(0,o.kt)("inlineCode",{parentName:"p"},"import")," statements tell Node.js that it should give you access to the ",(0,o.kt)("strong",{parentName:"p"},"got-scraping")," library under the ",(0,o.kt)("inlineCode",{parentName:"p"},"gotScraping")," variable and the Cheerio library under the ",(0,o.kt)("inlineCode",{parentName:"p"},"cheerio")," variable. Now run this command in your terminal:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"node main.js\n")),(0,o.kt)("p",null,"If you see ",(0,o.kt)("strong",{parentName:"p"},"it works!")," printed in your terminal, great job! You set up everything correctly. If you see an error that says ",(0,o.kt)("strong",{parentName:"p"},"Cannot use import statement outside a module"),", go back to the ",(0,o.kt)("a",{parentName:"p",href:"#modern-javascript",target:null,rel:null},"Use modern JavaScript")," paragraph and add the ",(0,o.kt)("inlineCode",{parentName:"p"},"type")," property to your ",(0,o.kt)("strong",{parentName:"p"},"package.json"),". If you see a different error, try copying and pasting it into Google, and you'll find a solution soon."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Test your setup with VSCode",src:r(77147).Z,width:"2140",height:"1392"})),(0,o.kt)("h2",{id:"next"},"Next up"),(0,o.kt)("p",null,"With the project set up, the ",(0,o.kt)("a",{parentName:"p",href:"/academy/web-scraping-for-beginners/data-collection/node-js-scraper",target:null,rel:null},"next lesson")," will show you how to use ",(0,o.kt)("strong",{parentName:"p"},"got-scraping")," to download the website's HTML and collect data from it with Cheerio."))}g.isMDXComponent=!0},2963:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/vscode-npm-init-58b2691b022a3c76a97f3554e8ac948c.png"},77147:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/vscode-test-setup-c6648f6d7bc8155c650d7e5295ffbdc3.png"},54644:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/vscode-type-module-83889b7bec3af22732b6b2f592973a03.png"}}]);