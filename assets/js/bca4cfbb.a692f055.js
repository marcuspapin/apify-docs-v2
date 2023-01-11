"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[5261],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),g=a,m=d["".concat(s,".").concat(g)]||d[g]||u[g]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},48134:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={title:"Initializing & setting up",description:"When you collect links from a web page, you often end up with a lot of irrelevant URLs. Learn how to filter the links to only keep the ones you need.",sidebar_position:1,slug:"/web-scraping-for-beginners/challenge/initializing-and-setting-up"},s="Initialization & setting up",p={unversionedId:"web_scraping_for_beginners/challenge/initializing_and_setting_up",id:"web_scraping_for_beginners/challenge/initializing_and_setting_up",title:"Initializing & setting up",description:"When you collect links from a web page, you often end up with a lot of irrelevant URLs. Learn how to filter the links to only keep the ones you need.",source:"@site/sources/academy/web_scraping_for_beginners/challenge/initializing_and_setting_up.md",sourceDirName:"web_scraping_for_beginners/challenge",slug:"/web-scraping-for-beginners/challenge/initializing-and-setting-up",permalink:"/academy/web-scraping-for-beginners/challenge/initializing-and-setting-up",draft:!1,tags:[],version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1673462256,formattedLastUpdatedAt:"Jan 11, 2023",sidebarPosition:1,frontMatter:{title:"Initializing & setting up",description:"When you collect links from a web page, you often end up with a lot of irrelevant URLs. Learn how to filter the links to only keep the ones you need.",sidebar_position:1,slug:"/web-scraping-for-beginners/challenge/initializing-and-setting-up"},sidebar:"defaultSidebar",previous:{title:"Challenge",permalink:"/academy/web-scraping-for-beginners/challenge"},next:{title:"Modularity",permalink:"/academy/web-scraping-for-beginners/challenge/modularity"}},c={},u=[{value:" Next up",id:"-next-up",level:2}],d={toc:u};function g(e){var t=e.components,l=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"initialization--setting-up"},"Initialization & setting up"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"When you collect links from a web page, you often end up with a lot of irrelevant URLs. Learn how to filter the links to only keep the ones you need.")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"The Crawlee CLI makes it extremely easy for us to set up a project in Crawlee and hit the ground running. Navigate to the directory you'd like your project's folder to live, then open up a terminal instance and run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npx crawlee create amazon-crawler\n")),(0,o.kt)("p",null,"Once you run this command, you'll get prompted into a menu which you can navigate using your arrow keys. Each of these options will generate different boilerplate code when selected. We're going to work with CheerioCrawler today, so we'll select the ",(0,o.kt)("strong",{parentName:"p"},"CheerioCrawler template project")," template, then press ",(0,o.kt)("strong",{parentName:"p"},"Enter"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Crawlee CLI &quot;create&quot; command",src:n(12254).Z,width:"832",height:"258"})),(0,o.kt)("p",null,"Once it's completed, open up the ",(0,o.kt)("strong",{parentName:"p"},"amazon-crawler")," folder that was generated by the ",(0,o.kt)("inlineCode",{parentName:"p"},"npx crawlee create")," command. We're going to modify the ",(0,o.kt)("strong",{parentName:"p"},"main.js")," boilerplate to fit our needs:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// main.js\nimport { CheerioCrawler, KeyValueStore, log } from 'crawlee';\nimport { router } from './routes.js';\n\n// Grab our keyword from the input\nconst { keyword } = await KeyValueStore.getInput();\n\nconst crawler = new CheerioCrawler({\n    requestHandler: router,\n});\n\n\nlog.info('Starting the crawl.');\nawait crawler.run([{\n    // Turn the keyword into a link we can make a request with\n    url: `https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=${keyword}`,\n    label: 'START',\n    userData: {\n        keyword,\n    },    \n}]);\nlog.info('Crawl finished.');\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// routes.js\nimport { createCheerioRouter } from 'crawlee';\n\nexport const router = createCheerioRouter();\n\nrouter.addDefaultHandler(({ log }) => {\n    log.info('Route reached.')\n});\n")),(0,o.kt)("p",null,"Finally, we'll add the following input file to ",(0,o.kt)("strong",{parentName:"p"},"INPUT.json")," in the project's root directory (next to ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules")," and others)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "keyword": "iphone"\n}\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This is how we'll be inputting data into our scraper from now on. Don't worry though, from now on, we'll only need  to work in the ",(0,o.kt)("strong",{parentName:"p"},"main.js")," and ",(0,o.kt)("strong",{parentName:"p"},"routes.js")," files!")),(0,o.kt)("h2",{id:"-next-up"},(0,o.kt)("a",{parentName:"h2",href:"#next",target:null,rel:null})," Next up"),(0,o.kt)("p",null,"Cool! We're ready. But ",(0,o.kt)("a",{parentName:"p",href:"/academy/web-scraping-for-beginners/challenge/modularity",target:null,rel:null},"let's discuss a bit about modularity")," before moving forward!"))}g.isMDXComponent=!0},12254:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/crawlee-create-deefd68bf45b46bec4d0b0e50ad3068d.webp"}}]);