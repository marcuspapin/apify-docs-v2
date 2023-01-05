"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[3074],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var o=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=o.createContext({}),m=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=m(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=m(r),d=a,h=p["".concat(l,".").concat(d)]||p[d]||c[d]||n;return r?o.createElement(h,s(s({ref:t},u),{},{components:r})):o.createElement(h,s({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,s=new Array(n);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var m=2;m<n;m++)s[m]=r[m];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}p.displayName="MDXCreateElement"},9306:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>m,toc:()=>c});var o=r(87462),a=r(63366),n=(r(67294),r(3905)),s=["components"],i={title:"Memory and CPU",description:"Learn about your actors' memory and processing power requirements, their relationship with Docker resources, and minimum requirements for different use cases.",sidebar_position:2,slug:"/actors/running/memory-and-cpu"},l="Memory and CPU",m={unversionedId:"actors/running/memory_and_cpu",id:"actors/running/memory_and_cpu",title:"Memory and CPU",description:"Learn about your actors' memory and processing power requirements, their relationship with Docker resources, and minimum requirements for different use cases.",source:"@site/sources/platform/actors/running/memory_and_cpu.md",sourceDirName:"actors/running",slug:"/actors/running/memory-and-cpu",permalink:"/platform/actors/running/memory-and-cpu",draft:!1,tags:[],version:"current",lastUpdatedBy:"Jind\u0159ich B\xe4r",lastUpdatedAt:1672923705,formattedLastUpdatedAt:"Jan 5, 2023",sidebarPosition:2,frontMatter:{title:"Memory and CPU",description:"Learn about your actors' memory and processing power requirements, their relationship with Docker resources, and minimum requirements for different use cases.",sidebar_position:2,slug:"/actors/running/memory-and-cpu"},sidebar:"docs",previous:{title:"Input",permalink:"/platform/actors/running/input"},next:{title:"Compute units and consumption",permalink:"/platform/actors/running/compute-units"}},u={},c=[{value:"Memory requirements",id:"memory-requirements",level:2},{value:"How much memory should you allocate?",id:"how-much-memory-should-you-allocate",level:2},{value:"Maximum memory",id:"maximum-memory",level:3},{value:"CPU usage spikes",id:"cpu-usage-spikes",level:2},{value:"Limits",id:"limits",level:2}],p={toc:c};function d(e){var t=e.components,i=(0,a.Z)(e,s);return(0,n.kt)("wrapper",(0,o.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"memory-and-cpu"},"Memory and CPU"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/platform/actors",target:null,rel:null},"Actors")," run in\n",(0,n.kt)("a",{parentName:"p",href:"https://www.docker.com/resources/what-container",target:"_blank",rel:"noopener"},"Docker containers"),",\nwhich have a ",(0,n.kt)("a",{parentName:"p",href:"https://phoenixnap.com/kb/docker-memory-and-cpu-limit",target:"_blank",rel:"noopener"},"limited amount of resources"),'. When starting, the actor needs to be allocated a certain share of those resources, such as how much CPU "horsepower" it will be able to use.'),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Setting an actor&#39;s memory",src:r(60795).Z,width:"500",height:"293"})),(0,n.kt)("p",null,"By assigning an actor's ",(0,n.kt)("strong",{parentName:"p"},"memory")," capacity, you also assign it a proportional amount of ",(0,n.kt)("strong",{parentName:"p"},"CPU power"),". Every CPU core corresponds to 4 GB of memory. So, 512 MB = 1/8th of a core, 1 GB = 1/4 of core, 8 GB gives you 2 cores, and so on."),(0,n.kt)("p",null,"In addition to CPU power, the memory allocation also influences disk size, which amounts to 2x the allocated memory."),(0,n.kt)("h2",{id:"memory-requirements"},"Memory requirements"),(0,n.kt)("p",null,"Each use case has its own minimum memory requirements. The larger and more complex your project, the more memory/CPU power it will require. Some examples which have minimum requirements are:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Actors using ",(0,n.kt)("a",{parentName:"p",href:"https://pptr.dev/",target:"_blank",rel:"noopener"},"Puppeteer"),": at least 1GB of memory.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Large and complex sites like ",(0,n.kt)("a",{parentName:"p",href:"https://apify.com/drobnikj/crawler-google-places",target:"_blank",rel:"noopener"},"Google Maps"),": at least 4GB for optimal speed and ",(0,n.kt)("a",{parentName:"p",href:"https://crawlee.dev/api/core/class/AutoscaledPool#minConcurrency",target:"_blank",rel:"noopener"},"concurrency"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Working with a large amount of data in memory."))),(0,n.kt)("h2",{id:"how-much-memory-should-you-allocate"},"How much memory should you allocate?"),(0,n.kt)("p",null,"Actors built on top of the ",(0,n.kt)("a",{parentName:"p",href:"https://sdk.apify.com",target:null,rel:null},"Apify SDK")," and ",(0,n.kt)("a",{parentName:"p",href:"https://crawlee.dev/",target:"_blank",rel:"noopener"},"Crawlee")," use autoscaling. This means that they will always run as efficiently as they can with the memory they have allocated. So, if you allocate 2 times more memory, the run should be 2 times faster and consume the same amount of compute units (1 ",(0,n.kt)("em",{parentName:"p"}," 1 = 0.5 ")," 2)."),(0,n.kt)("p",null,"A good middle ground to start is 4096 MB. If you need the results faster, increase the memory (bear in mind the ",(0,n.kt)("a",{parentName:"p",href:"#maximum-memory",target:null,rel:null},"next point"),", though). You can also try decreasing it to lower the pressure on the target site."),(0,n.kt)("p",null,"Autoscaling only applies to solutions that run multiple tasks (URLs) for at least 30 seconds. If you need to scrape just one URL or use actors like ",(0,n.kt)("a",{parentName:"p",href:"https://apify.com/lukaskrivka/google-sheets",target:"_blank",rel:"noopener"},"Google Sheets")," that do just a single isolated job, we recommend you lower the memory"),(0,n.kt)("h3",{id:"maximum-memory"},"Maximum memory"),(0,n.kt)("p",null,"Apify actors are most commonly written in ",(0,n.kt)("a",{parentName:"p",href:"https://nodejs.org/en/",target:"_blank",rel:"noopener"},"Node.js"),", which uses a ",(0,n.kt)("a",{parentName:"p",href:"https://betterprogramming.pub/is-node-js-really-single-threaded-7ea59bcc8d64",target:"_blank",rel:"noopener"},"single process thread"),". Unless you use external binaries such as the Chrome browser, Puppeteer, or other multi-threaded libraries you will not gain more CPU power from assigning your actor more than 4 GB of memory because Node.js cannot use more than 1 core."),(0,n.kt)("p",null,"In other words, giving a simple ",(0,n.kt)("a",{parentName:"p",href:"https://apify.com/apify/cheerio-scraper",target:"_blank",rel:"noopener"},"Cheerio-based crawler")," 16GB of memory (4 CPU cores) will not make it faster because these crawlers simply cannot use more than 1 CPU core."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"It is possible to ",(0,n.kt)("a",{parentName:"p",href:"https://dev.to/reevranj/multiple-threads-in-nodejs-how-and-what-s-new-b23",target:"_blank",rel:"noopener"},"use multiple threads in Node.js-based actor")," with some configuration. This can be useful if you need to offload a part of your workload.")),(0,n.kt)("h2",{id:"cpu-usage-spikes"},"CPU usage spikes"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"A usage spike on an actor&#39;s start-up",src:r(93779).Z,width:"1000",height:"657"})),(0,n.kt)("p",null,"Sometimes, you see the actor\u2019s CPU use go over 100%. This is not unusual. To help an actor start up faster, it is allocated a free CPU boost. For example, if an actor is assigned 1GB (25% of a core), it will temporarily be allowed to use 100% of the core, so it gets started quicker."),(0,n.kt)("h2",{id:"limits"},"Limits"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/platform/actors/limits",target:null,rel:null},"See the ",(0,n.kt)("strong",{parentName:"a"},"Limits")," page")," for information on actor memory and CPU limits."))}d.isMDXComponent=!0},93779:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/memory-cpu-usage-spike-bce4537f85fe7eb10f6e8fa9fbb72bdb.webp"},60795:(e,t,r)=>{r.d(t,{Z:()=>o});const o="data:image/webp;base64,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"}}]);