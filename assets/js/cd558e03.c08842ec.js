"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[1019],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),g=p(t),d=a,m=g["".concat(s,".").concat(d)]||g[d]||u[d]||o;return t?r.createElement(m,i(i({ref:n},c),{},{components:t})):r.createElement(m,i({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=g;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},5109:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),i=["components"],l={title:"Initializing & setting up",description:"When you collect links from a web page, you often end up with a lot of irrelevant URLs. Learn how to filter the links to only keep the ones you need.",sidebar_position:1,slug:"/web-scraping-for-beginners/challenge/initializing-and-setting-up"},s="Initialization & setting up",p={unversionedId:"webscraping/web_scraping_for_beginners/challenge/initializing_and_setting_up",id:"webscraping/web_scraping_for_beginners/challenge/initializing_and_setting_up",title:"Initializing & setting up",description:"When you collect links from a web page, you often end up with a lot of irrelevant URLs. Learn how to filter the links to only keep the ones you need.",source:"@site/sources/academy/webscraping/web_scraping_for_beginners/challenge/initializing_and_setting_up.md",sourceDirName:"webscraping/web_scraping_for_beginners/challenge",slug:"/web-scraping-for-beginners/challenge/initializing-and-setting-up",permalink:"/academy/web-scraping-for-beginners/challenge/initializing-and-setting-up",draft:!1,tags:[],version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1675095521,formattedLastUpdatedAt:"Jan 30, 2023",sidebarPosition:1,frontMatter:{title:"Initializing & setting up",description:"When you collect links from a web page, you often end up with a lot of irrelevant URLs. Learn how to filter the links to only keep the ones you need.",sidebar_position:1,slug:"/web-scraping-for-beginners/challenge/initializing-and-setting-up"},sidebar:"academy",previous:{title:"Challenge",permalink:"/academy/web-scraping-for-beginners/challenge"},next:{title:"Modularity",permalink:"/academy/web-scraping-for-beginners/challenge/modularity"}},c={},u=[{value:"Next up",id:"next",level:2}],g={toc:u};function d(e){var n=e.components,l=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},g,l,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"initialization--setting-up"},"Initialization & setting up"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"When you collect links from a web page, you often end up with a lot of irrelevant URLs. Learn how to filter the links to only keep the ones you need.")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"The Crawlee CLI makes it extremely easy for us to set up a project in Crawlee and hit the ground running. Navigate to the directory you'd like your project's folder to live, then open up a terminal instance and run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npx crawlee create amazon-crawler\n")),(0,o.kt)("p",null,"Once you run this command, you'll get prompted into a menu which you can navigate using your arrow keys. Each of these options will generate different boilerplate code when selected. We're going to work with CheerioCrawler today, so we'll select the ",(0,o.kt)("strong",{parentName:"p"},"CheerioCrawler template project")," template, then press ",(0,o.kt)("strong",{parentName:"p"},"Enter"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Crawlee CLI &quot;create&quot; command",src:t(13724).Z,width:"832",height:"258"})),(0,o.kt)("p",null,"Once it's completed, open up the ",(0,o.kt)("strong",{parentName:"p"},"amazon-crawler")," folder that was generated by the ",(0,o.kt)("inlineCode",{parentName:"p"},"npx crawlee create")," command. We're going to modify the ",(0,o.kt)("strong",{parentName:"p"},"main.js")," boilerplate to fit our needs:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// main.js\nimport { CheerioCrawler, KeyValueStore, log } from 'crawlee';\nimport { router } from './routes.js';\n\n// Grab our keyword from the input\nconst { keyword } = await KeyValueStore.getInput();\n\nconst crawler = new CheerioCrawler({\n    requestHandler: router,\n});\n\n\nlog.info('Starting the crawl.');\nawait crawler.run([{\n    // Turn the keyword into a link we can make a request with\n    url: `https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=${keyword}`,\n    label: 'START',\n    userData: {\n        keyword,\n    },    \n}]);\nlog.info('Crawl finished.');\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// routes.js\nimport { createCheerioRouter } from 'crawlee';\n\nexport const router = createCheerioRouter();\n\nrouter.addDefaultHandler(({ log }) => {\n    log.info('Route reached.')\n});\n")),(0,o.kt)("p",null,"Finally, we'll add the following input file to ",(0,o.kt)("strong",{parentName:"p"},"INPUT.json")," in the project's root directory (next to ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules")," and others)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "keyword": "iphone"\n}\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This is how we'll be inputting data into our scraper from now on. Don't worry though, from now on, we'll only need  to work in the ",(0,o.kt)("strong",{parentName:"p"},"main.js")," and ",(0,o.kt)("strong",{parentName:"p"},"routes.js")," files!")),(0,o.kt)("h2",{id:"next"},"Next up"),(0,o.kt)("p",null,"Cool! We're ready. But ",(0,o.kt)("a",{parentName:"p",href:"/academy/web-scraping-for-beginners/challenge/modularity",target:null,rel:null},"let's discuss a bit about modularity")," before moving forward!"))}d.isMDXComponent=!0},13724:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/crawlee-create-2f29a900f2ab57f734d05c25cc37feed.png"}}]);