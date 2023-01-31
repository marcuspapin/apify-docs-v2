"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[4693],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),l=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return a.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),m=l(r),h=n,d=m["".concat(i,".").concat(h)]||m[h]||c[h]||o;return r?a.createElement(d,s(s({ref:t},p),{},{components:r})):a.createElement(d,s({ref:t},p))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=m;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:n,s[1]=u;for(var l=2;l<o;l++)s[l]=r[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8584:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>h,frontMatter:()=>u,metadata:()=>l,toc:()=>c});var a=r(87462),n=r(63366),o=(r(67294),r(3905)),s=["components"],u={title:"Compute units and consumption",description:"Apify actors' platform resource usage is calculated in compute units. Find out what they are, how they work, and how you are charged for running actors.",sidebar_position:3,slug:"/actors/running/compute-units"},i="What is a compute unit?",l={unversionedId:"actors/running/compute_units",id:"actors/running/compute_units",title:"Compute units and consumption",description:"Apify actors' platform resource usage is calculated in compute units. Find out what they are, how they work, and how you are charged for running actors.",source:"@site/sources/platform/actors/running/compute_units.md",sourceDirName:"actors/running",slug:"/actors/running/compute-units",permalink:"/platform/actors/running/compute-units",draft:!1,tags:[],version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1675177066,formattedLastUpdatedAt:"Jan 31, 2023",sidebarPosition:3,frontMatter:{title:"Compute units and consumption",description:"Apify actors' platform resource usage is calculated in compute units. Find out what they are, how they work, and how you are charged for running actors.",sidebar_position:3,slug:"/actors/running/compute-units"},sidebar:"docs",previous:{title:"Memory and CPU",permalink:"/platform/actors/running/memory-and-cpu"},next:{title:"Tasks",permalink:"/platform/actors/tasks"}},p={},c=[{value:"How are CUs calculated?",id:"how-are-cus-calculated",level:2},{value:"How do we charge for CU usage?",id:"how-do-we-charge-for-cu-usage",level:2},{value:"Example use cases",id:"example-use-cases",level:2},{value:"Memory",id:"memory",level:3},{value:"Duration",id:"duration",level:3},{value:"What determines consumption",id:"what-determines-consumption",level:2},{value:"How to estimate consumption",id:"how-to-estimate-consumption",level:2}],m={toc:c};function h(e){var t=e.components,u=(0,n.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},m,u,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"what-is-a-compute-unit"},"What is a compute unit?"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Apify actors' platform resource usage is calculated in compute units. Find out what they are, how they work, and how you are charged for running actors.")),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"TL;DR: An ",(0,o.kt)("a",{parentName:"strong",href:"/platform/actors",target:null,rel:null},"actor")," running with 1 GB of ",(0,o.kt)("a",{parentName:"strong",href:"/platform/actors/running/memory-and-cpu",target:null,rel:null},"memory")," for one hour consumes 1 compute unit.")),(0,o.kt)("p",null,"A compute unit (CU) is the unit of measurement for the resources consumed by actor runs and builds. We charge you for using actors based on CU consumption."),(0,o.kt)("p",null,"For example, if you run an actor with 1GB of allocated memory for 1 hour, it will consume 1 CU. Depending on your ",(0,o.kt)("a",{parentName:"p",href:"https://apify.com/pricing/actors#how-does-the-platform-pricing-work",target:"_blank",rel:"noopener"},"subscription plan"),", this CU will cost you a certain amount of money."),(0,o.kt)("p",null,"You can see each actor run's exact CU usage under the ",(0,o.kt)("strong",{parentName:"p"},"Info")," tab in the run's details."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"An actor run&#39;s platform usage",src:r(95939).Z,width:"962",height:"316"})),(0,o.kt)("p",null,"You can ",(0,o.kt)("a",{parentName:"p",href:"https://console.apify.com/billing",target:"_blank",rel:"noopener"},"find a summary of your overall platform and CU usage")," in the ",(0,o.kt)("strong",{parentName:"p"},"Billing")," section of the Apify Console."),(0,o.kt)("h2",{id:"how-are-cus-calculated"},"How are CUs calculated?"),(0,o.kt)("p",null,"To calculate CUs, you need to multiply two factors:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Memory (GB) - Size of the allocated server for your actor or task run.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Duration (hours) - How long the server is used (actor or task run)."))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"1 GB memory x 1 hour = 1 CU.")),(0,o.kt)("h2",{id:"how-do-we-charge-for-cu-usage"},"How do we charge for CU usage?"),(0,o.kt)("p",null,"For running actors, you are charged for each CU you use. The amount charged depends on how many CUs you use, however the principle remains the same: 1 CU costs X amount of money. Each of our ",(0,o.kt)("a",{parentName:"p",href:"https://apify.com/pricing/actors#how-does-the-platform-pricing-work",target:"_blank",rel:"noopener"},"subscription plans")," has a different rate per CU."),(0,o.kt)("h2",{id:"example-use-cases"},"Example use cases"),(0,o.kt)("p",null,"All the use cases below (and many more) are measured with the same predictable unit - the CU."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Scraping 10 million pages with a one week-long scrape every month.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Running 50 parallel runs of quick scrapes at peak time.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Running a one-page scraper every 5 seconds.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"A complex system with many different actors integrated and producing high-value data combined from many sources.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Running an actor as a server."))),(0,o.kt)("h3",{id:"memory"},"Memory"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/platform/actors/running/memory-and-cpu",target:null,rel:null},"Memory")," determines the share of a server you are allocated. The number of MBs (megabytes) directly corresponds to RAM allocated. In addition, for each 4096 MB (4 GB) of RAM, you are allocated one CPU core (for 1024 MB (1 GB), you are allocated 25% of the CPU core, and so on)."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/platform/actors/running/memory-and-cpu",target:null,rel:null},"See our article on memory and CPU")," for more details.")),(0,o.kt)("h3",{id:"duration"},"Duration"),(0,o.kt)("p",null,"CUs are calculated in seconds. If you know the number of seconds your run took (or should take), you just need to convert that into hours to get a number that you can use for CU calculation."),(0,o.kt)("p",null,"For example, if your run took 6 minutes (360 seconds), you can use 0.1 (hours) as the second number to calculate CUs."),(0,o.kt)("h2",{id:"what-determines-consumption"},"What determines consumption"),(0,o.kt)("p",null,"The factors, in order of importance, are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Using a browser or plain HTTP"),": launching a browser (",(0,o.kt)("a",{parentName:"p",href:"https://pptr.dev/",target:"_blank",rel:"noopener"},"Puppeteer"),"/",(0,o.kt)("a",{parentName:"p",href:"https://playwright.dev/",target:"_blank",rel:"noopener"},"Playwright"),") is resource-intensive and slow. Working with plain HTML (",(0,o.kt)("a",{parentName:"p",href:"https://cheerio.js.org/",target:"_blank",rel:"noopener"},"Cheerio"),") can be up to ",(0,o.kt)("strong",{parentName:"p"},"20 times")," faster.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Run size and frequency"),": large runs can utilize full resource scaling and are not subjected to repeated actor start-ups (as opposed to many short runs). Always opt for larger batches, if possible.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Page type"),": heavy pages like Amazon or Facebook will take more time to load regardless whether you use a browser or Cheerio. Large pages can take up to ",(0,o.kt)("strong",{parentName:"p"},"3 times")," more resources to load and parse than average pages."))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Our ",(0,o.kt)("a",{parentName:"strong",href:"https://help.apify.com/en/articles/3470975-how-to-estimate-compute-unit-usage-for-your-project",target:"_blank",rel:"noopener"},"article on estimating consumption")," contains more details on what determines consumption.")),(0,o.kt)("h2",{id:"how-to-estimate-consumption"},"How to estimate consumption"),(0,o.kt)("p",null,"Most actors in ",(0,o.kt)("a",{parentName:"p",href:"https://apify.com/store",target:"_blank",rel:"noopener"},"Apify Store")," have some information in their README about how many CUs they consume per certain amount of data scraped."),(0,o.kt)("p",null,"If the actor doesn't have this information, or you want to use your own solution, just run your solution like you want to use it long term. Let's say that you want to scrape the data ",(0,o.kt)("strong",{parentName:"p"},"every hour for the whole month"),". You set up a reasonable memory allocation like 4096 MB and the whole run takes 15 minutes. That should consume 1 CU (4 ",(0,o.kt)("em",{parentName:"p"}," 0.25 = 1). Now, you just need to multiply that by the number of hours in the day and by the number of days in the month, and you get an estimated usage of 720 (1 ")," 24 * 30) CUs monthly."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://help.apify.com/en/articles/3470975-how-to-estimate-compute-unit-usage-for-your-project",target:"_blank",rel:"noopener"},"See our article on estimating consumption")," for more details.")))}h.isMDXComponent=!0},95939:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/actor-usage-85c40c78149de483510ea1b0b676d6f3.png"}}]);