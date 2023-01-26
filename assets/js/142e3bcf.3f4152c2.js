"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[1573],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(a),m=r,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||l;return a?n.createElement(f,i(i({ref:t},c),{},{components:a})):n.createElement(f,i({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},69956:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>u,toc:()=>p});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),i=["components"],o={title:"Builds",description:"Apify's conventions for actor build numbers. Learn to use a specific version of your actor in a run, understand an actor's lifecycle and manage its cache.",slug:"/actors/development/builds"},s="[](#builds)Builds",u={unversionedId:"actors/development/builds",id:"actors/development/builds",title:"Builds",description:"Apify's conventions for actor build numbers. Learn to use a specific version of your actor in a run, understand an actor's lifecycle and manage its cache.",source:"@site/sources/platform/actors/development/builds.md",sourceDirName:"actors/development",slug:"/actors/development/builds",permalink:"/platform/actors/development/builds",draft:!1,tags:[],version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1674755822,formattedLastUpdatedAt:"Jan 26, 2023",frontMatter:{title:"Builds",description:"Apify's conventions for actor build numbers. Learn to use a specific version of your actor in a run, understand an actor's lifecycle and manage its cache.",slug:"/actors/development/builds"},sidebar:"docs",previous:{title:"Base Docker images",permalink:"/platform/actors/development/base-docker-images"},next:{title:"Continuous integration",permalink:"/platform/actors/development/continuous-integration"}},c={},p=[{value:"Tags",id:"tags",level:2},{value:"Cache",id:"cache",level:2},{value:"Lifecycle",id:"lifecycle",level:2},{value:"Sharing",id:"sharing",level:2}],d={toc:p};function m(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"builds"},(0,l.kt)("a",{parentName:"h1",href:"#builds",target:null,rel:null}),"Builds"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Apify's conventions for actor build numbers. Learn to use a specific version of your actor in a run, understand an actor's lifecycle and manage its cache.")),(0,l.kt)("hr",null),(0,l.kt)("p",null,"Before the actor can be run, it first needs to be built. The build effectively creates a snapshot of a specific version of the actor's settings such as the ",(0,l.kt)("a",{parentName:"p",href:"/platform/actors/development/source-code",target:null,rel:null},"Source code"),", and creates a Docker image that contains everything the actor needs for its run, including necessary NPM packages, web browsers, etc."),(0,l.kt)("p",null,"Each build is assigned a unique build number of the form ",(0,l.kt)("strong",{parentName:"p"},"MAJOR",".","MINOR",".","BUILD")," (e.g. ",(0,l.kt)("strong",{parentName:"p"},"1",".","2",".","345"),"), where ",(0,l.kt)("strong",{parentName:"p"},"MAJOR",".","MINOR")," corresponds to the actor version number (see ",(0,l.kt)("a",{parentName:"p",href:"/platform/actors/development/source-code",target:null,rel:null},"Versioning"),") and ",(0,l.kt)("strong",{parentName:"p"},"BUILD")," is an automatically-incremented number starting at ",(0,l.kt)("strong",{parentName:"p"},"1"),"."),(0,l.kt)("p",null,"By default, the build has a timeout of 300 seconds and consumes 4096 MB (2048 MB on the free plan) of memory from the user's memory limit. See the ",(0,l.kt)("a",{parentName:"p",href:"/platform/actors/running",target:null,rel:null},"Resource limits")," section for more details."),(0,l.kt)("h2",{id:"tags"},(0,l.kt)("a",{parentName:"h2",href:"#tags",target:null,rel:null}),"Tags"),(0,l.kt)("p",null,"When running the actor, the caller needs to specify which actor build should actually be used. To simplify this process, the builds can be associated with a tag such ",(0,l.kt)("strong",{parentName:"p"},"latest")," or ",(0,l.kt)("strong",{parentName:"p"},"beta"),", which can be used instead of the version number when running the actor. The tags are unique - only one build can be associated with a specific tag."),(0,l.kt)("p",null,"To set a tag for builds of a specific actor version, set the ",(0,l.kt)("strong",{parentName:"p"},"Build tag")," property. Whenever a new build of the version is successfully finished, it is automatically assigned the tag. By default, the builds are set the ",(0,l.kt)("strong",{parentName:"p"},"latest")," tag."),(0,l.kt)("h2",{id:"cache"},(0,l.kt)("a",{parentName:"h2",href:"#cache",target:null,rel:null}),"Cache"),(0,l.kt)("p",null,"By default, the build process pulls the latest copies of all necessary Docker images and builds each new layer of Docker image from scratch. To speed up the builds triggered via API you can add ",(0,l.kt)("strong",{parentName:"p"},"useCache=1")," parameter. See API reference for more details."),(0,l.kt)("h2",{id:"lifecycle"},(0,l.kt)("a",{parentName:"h2",href:"#lifecycle",target:null,rel:null}),"Lifecycle"),(0,l.kt)("p",null,"Each build starts with the initial status ",(0,l.kt)("strong",{parentName:"p"},"READY")," and goes through one or more transitional statuses to one of the terminal statuses."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Status"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"READY")),(0,l.kt)("td",{parentName:"tr",align:null},"initial"),(0,l.kt)("td",{parentName:"tr",align:null},"Started but not allocated to any worker yet")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"RUNNING")),(0,l.kt)("td",{parentName:"tr",align:null},"transitional"),(0,l.kt)("td",{parentName:"tr",align:null},"Executing on a worker")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"SUCCEEDED")),(0,l.kt)("td",{parentName:"tr",align:null},"terminal"),(0,l.kt)("td",{parentName:"tr",align:null},"Finished successfully")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"FAILED")),(0,l.kt)("td",{parentName:"tr",align:null},"terminal"),(0,l.kt)("td",{parentName:"tr",align:null},"Build failed")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"TIMING-OUT")),(0,l.kt)("td",{parentName:"tr",align:null},"transitional"),(0,l.kt)("td",{parentName:"tr",align:null},"Timing out now")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"TIMED-OUT")),(0,l.kt)("td",{parentName:"tr",align:null},"terminal"),(0,l.kt)("td",{parentName:"tr",align:null},"Timed out")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ABORTING")),(0,l.kt)("td",{parentName:"tr",align:null},"transitional"),(0,l.kt)("td",{parentName:"tr",align:null},"Being aborted by user")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ABORTED")),(0,l.kt)("td",{parentName:"tr",align:null},"terminal"),(0,l.kt)("td",{parentName:"tr",align:null},"Aborted by user")))),(0,l.kt)("h2",{id:"sharing"},"Sharing"),(0,l.kt)("p",null,"You can allow other Apify users to view your actor builds using the ",(0,l.kt)("a",{parentName:"p",href:"/platform/access-rights",target:null,rel:null},"access rights"),"."))}m.isMDXComponent=!0}}]);