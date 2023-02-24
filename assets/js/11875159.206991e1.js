"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[7598],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(r),f=n,d=m["".concat(p,".").concat(f)]||m[f]||c[f]||l;return r?a.createElement(d,o(o({ref:t},u),{},{components:r})):a.createElement(d,o({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},69377:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=r(87462),n=r(63366),l=(r(67294),r(3905)),o=["components"],i={title:"Actors",description:"Learn how to develop, run and share serverless cloud programs. Create your own web scraping and automation tools and publish them on the Apify platform.",sidebar_position:7,category:"platform",slug:"/actors"},p="Actors",s={unversionedId:"actors/index",id:"actors/index",title:"Actors",description:"Learn how to develop, run and share serverless cloud programs. Create your own web scraping and automation tools and publish them on the Apify platform.",source:"@site/sources/platform/actors/index.md",sourceDirName:"actors",slug:"/actors",permalink:"/platform/actors",draft:!1,editUrl:"https://github.com/apify/apify-docs-v2/edit/master/sources/platform/actors/index.md",tags:[],version:"current",lastUpdatedBy:"Jan \u010curn",lastUpdatedAt:1677248878,formattedLastUpdatedAt:"Feb 24, 2023",sidebarPosition:7,frontMatter:{title:"Actors",description:"Learn how to develop, run and share serverless cloud programs. Create your own web scraping and automation tools and publish them on the Apify platform.",sidebar_position:7,category:"platform",slug:"/actors"},sidebar:"docs",previous:{title:"Monitor multiple tasks",permalink:"/platform/monitoring/monitor-multiple-tasks"},next:{title:"Running actors",permalink:"/platform/actors/running"}},u={},c=[{value:"Section overview",id:"section-overview",level:2},{value:"Public, private, and paid actors",id:"public-private-and-paid-actors",level:2}],m={toc:c};function f(e){var t=e.components,r=(0,n.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"actors"},"Actors"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Learn how to develop, run and share serverless cloud programs. Create your own web scraping and automation tools and publish them on the Apify platform.")),(0,l.kt)("hr",null),(0,l.kt)("p",null,"Actors are serverless cloud programs that can do almost anything a human can do in a web browser. They can do anything from small tasks like filling in forms or unsubscribing from online services, all the way up to scraping and processing vast numbers of web pages."),(0,l.kt)("p",null,"You can use actors ",(0,l.kt)("a",{parentName:"p",href:"https://console.apify.com/actors",target:"_blank",rel:"noopener"},"manually in the Apify Console"),", using ",(0,l.kt)("a",{parentName:"p",href:"/api/v2",target:null,rel:null},"API")," or ",(0,l.kt)("a",{parentName:"p",href:"/platform/schedules",target:null,rel:null},"scheduler"),". You can easily ",(0,l.kt)("a",{parentName:"p",href:"/platform/integrations",target:null,rel:null},"integrate them with other apps")," and share your actors with other Apify users via our ",(0,l.kt)("a",{parentName:"p",href:"/platform/access-rights",target:null,rel:null},"access rights")," system."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"New to Apify? ",(0,l.kt)("a",{parentName:"p",href:"/platform/tutorials/quick-start",target:null,rel:null},"Try actors with our ",(0,l.kt)("strong",{parentName:"a"},"quick start")," tutorial"),".")),(0,l.kt)("p",null,"A single isolated actor consists of source code and various settings. You can think of an actor as a cloud app or service that runs on the Apify platform. The run of an actor is not limited to the lifetime of a single HTTP transaction. It can run for as long as necessary, even forever."),(0,l.kt)("h2",{id:"section-overview"},"Section overview"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/platform/actors/running",target:null,rel:null},"Running"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/platform/actors/running/input",target:null,rel:null},"Input")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/platform/actors/running/memory-and-cpu",target:null,rel:null},"Memory and CPU")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/platform/actors/running/compute-units",target:null,rel:null},"Compute units and consumption")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/platform/actors/tasks",target:null,rel:null},"Tasks")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/platform/actors/development",target:null,rel:null},"Development"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/platform/actors/development/base-docker-images",target:null,rel:null},"Base Docker images")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/platform/actors/development/builds",target:null,rel:null},"Builds")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/platform/actors/development/continuous-integration",target:null,rel:null},"Continuous integration")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/platform/actors/development/environment-variables",target:null,rel:null},"Environment variables")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/platform/actors/development/input-schema",target:null,rel:null},"Input schema")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/platform/actors/development/secret-input",target:null,rel:null},"Secret input")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/platform/actors/development/source-code",target:null,rel:null},"Source code")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/platform/actors/development/state-persistence",target:null,rel:null},"State persistence")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/platform/actors/development/testing-and-maintenance",target:null,rel:null},"Testing and maintenance")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/platform/actors/paid-actors",target:null,rel:null},"Paid actors")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/platform/actors/publishing",target:null,rel:null},"Publishing")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/academy/get-most-of-actors/naming-your-actor",target:null,rel:null},"Naming your actor")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/academy/get-most-of-actors/seo-and-promotion",target:null,rel:null},"SEO and promotion")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/platform/actors/security",target:null,rel:null},"Security")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/platform/actors/limits",target:null,rel:null},"Limits")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/platform/actors/examples",target:null,rel:null},"Examples"))),(0,l.kt)("h2",{id:"public-private-and-paid-actors"},"Public, private, and paid actors"),(0,l.kt)("p",null,"Actors can be public (free or ",(0,l.kt)("a",{parentName:"p",href:"/platform/actors/paid-actors",target:null,rel:null},"paid"),") or private. Private actors are yours to use and keep, and no one will see them if you don't want them to. Public actors are ",(0,l.kt)("a",{parentName:"p",href:"/platform/actors/publishing",target:null,rel:null},"available to everyone")," in ",(0,l.kt)("a",{parentName:"p",href:"https://apify.com/store",target:"_blank",rel:"noopener"},"Apify Store"),". You can make them free to use, or you can ",(0,l.kt)("a",{parentName:"p",href:"https://blog.apify.com/make-regular-passive-income-developing-web-automation-actors-b0392278d085/",target:"_blank",rel:"noopener"},"charge for them"),"."))}f.isMDXComponent=!0}}]);