"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[3074],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var o=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=o.createContext({}),m=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=m(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=m(r),d=a,h=c["".concat(l,".").concat(d)]||c[d]||u[d]||n;return r?o.createElement(h,s(s({ref:t},p),{},{components:r})):o.createElement(h,s({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,s=new Array(n);s[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var m=2;m<n;m++)s[m]=r[m];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}c.displayName="MDXCreateElement"},9306:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>m,toc:()=>u});var o=r(87462),a=r(63366),n=(r(67294),r(3905)),s=["components"],i={title:"Memory and CPU",description:"Learn about your actors' memory and processing power requirements, their relationship with Docker resources, and minimum requirements for different use cases.",sidebar_position:2,slug:"/actors/running/memory-and-cpu"},l="Memory and CPU",m={unversionedId:"actors/running/memory_and_cpu",id:"actors/running/memory_and_cpu",title:"Memory and CPU",description:"Learn about your actors' memory and processing power requirements, their relationship with Docker resources, and minimum requirements for different use cases.",source:"@site/sources/platform/actors/running/memory_and_cpu.md",sourceDirName:"actors/running",slug:"/actors/running/memory-and-cpu",permalink:"/platform/actors/running/memory-and-cpu",draft:!1,tags:[],version:"current",lastUpdatedBy:"Jind\u0159ich B\xe4r",lastUpdatedAt:1675420633,formattedLastUpdatedAt:"Feb 3, 2023",sidebarPosition:2,frontMatter:{title:"Memory and CPU",description:"Learn about your actors' memory and processing power requirements, their relationship with Docker resources, and minimum requirements for different use cases.",sidebar_position:2,slug:"/actors/running/memory-and-cpu"},sidebar:"docs",previous:{title:"Input",permalink:"/platform/actors/running/input"},next:{title:"Compute units and consumption",permalink:"/platform/actors/running/compute-units"}},p={},u=[{value:"Memory requirements",id:"memory-requirements",level:2},{value:"How much memory should you allocate?",id:"how-much-memory-should-you-allocate",level:2},{value:"Maximum memory",id:"maximum-memory",level:3},{value:"CPU usage spikes",id:"cpu-usage-spikes",level:2},{value:"Limits",id:"limits",level:2}],c={toc:u};function d(e){var t=e.components,i=(0,a.Z)(e,s);return(0,n.kt)("wrapper",(0,o.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"memory-and-cpu"},"Memory and CPU"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Learn about your actors' memory and processing power requirements, their relationship with Docker resources, and minimum requirements for different use cases.")),(0,n.kt)("hr",null),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/platform/actors",target:null,rel:null},"Actors")," run in\n",(0,n.kt)("a",{parentName:"p",href:"https://www.docker.com/resources/what-container",target:"_blank",rel:"noopener"},"Docker containers"),",\nwhich have a ",(0,n.kt)("a",{parentName:"p",href:"https://phoenixnap.com/kb/docker-memory-and-cpu-limit",target:"_blank",rel:"noopener"},"limited amount of resources"),'. When starting, the actor needs to be allocated a certain share of those resources, such as how much CPU "horsepower" it will be able to use.'),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Setting an actor&#39;s memory",src:r(58731).Z,width:"500",height:"293"})),(0,n.kt)("p",null,"By assigning an actor's ",(0,n.kt)("strong",{parentName:"p"},"memory")," capacity, you also assign it a proportional amount of ",(0,n.kt)("strong",{parentName:"p"},"CPU power"),". Every CPU core corresponds to 4 GB of memory. So, 512 MB = 1/8th of a core, 1 GB = 1/4 of core, 8 GB gives you 2 cores, and so on."),(0,n.kt)("p",null,"In addition to CPU power, the memory allocation also influences disk size, which amounts to 2x the allocated memory."),(0,n.kt)("h2",{id:"memory-requirements"},"Memory requirements"),(0,n.kt)("p",null,"Each use case has its own minimum memory requirements. The larger and more complex your project, the more memory/CPU power it will require. Some examples which have minimum requirements are:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Actors using ",(0,n.kt)("a",{parentName:"p",href:"https://pptr.dev/",target:"_blank",rel:"noopener"},"Puppeteer"),": at least 1GB of memory.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Large and complex sites like ",(0,n.kt)("a",{parentName:"p",href:"https://apify.com/drobnikj/crawler-google-places",target:"_blank",rel:"noopener"},"Google Maps"),": at least 4GB for optimal speed and ",(0,n.kt)("a",{parentName:"p",href:"https://crawlee.dev/api/core/class/AutoscaledPool#minConcurrency",target:"_blank",rel:"noopener"},"concurrency"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Working with a large amount of data in memory."))),(0,n.kt)("h2",{id:"how-much-memory-should-you-allocate"},"How much memory should you allocate?"),(0,n.kt)("p",null,"Actors built on top of the ",(0,n.kt)("a",{parentName:"p",href:"https://docs-v2.apify.com/sdk-js",target:"_blank",rel:"noopener"},"Apify SDK")," and ",(0,n.kt)("a",{parentName:"p",href:"https://crawlee.dev/",target:"_blank",rel:"noopener"},"Crawlee")," use autoscaling. This means that they will always run as efficiently as they can with the memory they have allocated. So, if you allocate 2 times more memory, the run should be 2 times faster and consume the same amount of compute units (1 ",(0,n.kt)("em",{parentName:"p"}," 1 = 0.5 ")," 2)."),(0,n.kt)("p",null,"A good middle ground to start is 4096 MB. If you need the results faster, increase the memory (bear in mind the ",(0,n.kt)("a",{parentName:"p",href:"#maximum-memory",target:null,rel:null},"next point"),", though). You can also try decreasing it to lower the pressure on the target site."),(0,n.kt)("p",null,"Autoscaling only applies to solutions that run multiple tasks (URLs) for at least 30 seconds. If you need to scrape just one URL or use actors like ",(0,n.kt)("a",{parentName:"p",href:"https://apify.com/lukaskrivka/google-sheets",target:"_blank",rel:"noopener"},"Google Sheets")," that do just a single isolated job, we recommend you lower the memory"),(0,n.kt)("h3",{id:"maximum-memory"},"Maximum memory"),(0,n.kt)("p",null,"Apify actors are most commonly written in ",(0,n.kt)("a",{parentName:"p",href:"https://nodejs.org/en/",target:"_blank",rel:"noopener"},"Node.js"),", which uses a ",(0,n.kt)("a",{parentName:"p",href:"https://betterprogramming.pub/is-node-js-really-single-threaded-7ea59bcc8d64",target:"_blank",rel:"noopener"},"single process thread"),". Unless you use external binaries such as the Chrome browser, Puppeteer, or other multi-threaded libraries you will not gain more CPU power from assigning your actor more than 4 GB of memory because Node.js cannot use more than 1 core."),(0,n.kt)("p",null,"In other words, giving a simple ",(0,n.kt)("a",{parentName:"p",href:"https://apify.com/apify/cheerio-scraper",target:"_blank",rel:"noopener"},"Cheerio-based crawler")," 16GB of memory (4 CPU cores) will not make it faster because these crawlers simply cannot use more than 1 CPU core."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"It is possible to ",(0,n.kt)("a",{parentName:"p",href:"https://dev.to/reevranj/multiple-threads-in-nodejs-how-and-what-s-new-b23",target:"_blank",rel:"noopener"},"use multiple threads in Node.js-based actor")," with some configuration. This can be useful if you need to offload a part of your workload.")),(0,n.kt)("h2",{id:"cpu-usage-spikes"},"CPU usage spikes"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"A usage spike on an actor&#39;s start-up",src:r(82183).Z,width:"1000",height:"657"})),(0,n.kt)("p",null,"Sometimes, you see the actor\u2019s CPU use go over 100%. This is not unusual. To help an actor start up faster, it is allocated a free CPU boost. For example, if an actor is assigned 1GB (25% of a core), it will temporarily be allowed to use 100% of the core, so it gets started quicker."),(0,n.kt)("h2",{id:"limits"},"Limits"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/platform/actors/limits",target:null,rel:null},"See the ",(0,n.kt)("strong",{parentName:"a"},"Limits")," page")," for information on actor memory and CPU limits."))}d.isMDXComponent=!0},82183:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/memory-cpu-usage-spike-4fcc3b31cdda7f7c59cc4e7ea4492d86.png"},58731:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/memory-settings-546e7c49b7c83eb4f5f2126150ed28e5.png"}}]);