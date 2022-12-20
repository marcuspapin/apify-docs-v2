"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[9523],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),d=a,h=c["".concat(s,".").concat(d)]||c[d]||m[d]||o;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},17607:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={title:"Running actors",description:"Start an actor from the Apify Console or via API. Learn about actor lifecycles, how to specify settings and version, provide input and resurrect finished runs.",menuTitle:"Running",sidebar_position:7.1,slug:"/actors/running"},s="Running",u={unversionedId:"actors/running/index",id:"actors/running/index",title:"Running actors",description:"Start an actor from the Apify Console or via API. Learn about actor lifecycles, how to specify settings and version, provide input and resurrect finished runs.",source:"@site/sources/platform/actors/running/index.md",sourceDirName:"actors/running",slug:"/actors/running",permalink:"/platform/actors/running",draft:!1,tags:[],version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1671540496,formattedLastUpdatedAt:"Dec 20, 2022",sidebarPosition:7.1,frontMatter:{title:"Running actors",description:"Start an actor from the Apify Console or via API. Learn about actor lifecycles, how to specify settings and version, provide input and resurrect finished runs.",menuTitle:"Running",sidebar_position:7.1,slug:"/actors/running"},sidebar:"defaultSidebar",previous:{title:"Actors",permalink:"/platform/actors"},next:{title:"Input",permalink:"/platform/actors/running/input"}},p={},c=[{value:"Resource limits",id:"resource-limits",level:2},{value:"Lifecycle",id:"lifecycle",level:2},{value:"Aborting runs",id:"aborting-runs",level:2},{value:"Resurrection of finished run",id:"resurrection-of-finished-run",level:2},{value:"Container web server",id:"container-web-server",level:2},{value:"Data retention",id:"data-retention",level:2},{value:"Sharing",id:"sharing",level:2}],m={toc:c};function d(e){var t=e.components,l=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"running"},"Running"),(0,o.kt)("p",null,"You can start an Apify actor in a number of ways. One option is to start an actor from its page in ",(0,o.kt)("a",{parentName:"p",href:"https://console.apify.com/actors",target:"_blank",rel:"noopener"},"Apify Console"),":"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Apify developer console",src:n(85493).Z,width:"1838",height:"1296"})),(0,o.kt)("p",null,"You can specify options such as ",(0,o.kt)("a",{parentName:"p",href:"/platform/actors/development/builds",target:null,rel:null},"build")," for your actor run."),(0,o.kt)("table",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"Build"),(0,o.kt)("td",null,"Tag or number of the build to run (e.g. **latest** or **1.2.34**).")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"Timeout"),(0,o.kt)("td",null,"Timeout for the actor run in seconds. Zero value means there is no timeout.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"Memory"),(0,o.kt)("td",null,"Amount of memory allocated for the actor run, in megabytes."))),(0,o.kt)("p",null,"Actors can also be invoked using the Apify API, by sending an HTTP POST request to the ",(0,o.kt)("a",{parentName:"p",href:"/api/v2/#/reference/actors/run-collection/run-actor",target:null,rel:null},"Run actor")," endpoint, such as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"https://api.apify.com/v2/acts/apify~hello-world/runs?token=<YOUR_API_TOKEN>\n")),(0,o.kt)("p",null,"An actor's input and its content type can be passed as a payload of the POST request and additional options can be specified using URL query parameters. For more details, see the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.apify.com/api/v2/#/reference/actors/run-collection/run-actor",target:"_blank",rel:"noopener"},"Run actor")," section in the API reference."),(0,o.kt)("p",null,"Actors can also be invoked programmatically from other actors:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"JavaScript: using the ",(0,o.kt)("a",{parentName:"li",href:"https://sdk.apify.com/api/apify/class/Actor#call",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"call()"))," function of ",(0,o.kt)("a",{parentName:"li",href:"https://sdk.apify.com/api/apify/class/Actor",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"Actor"))," class provided by the ",(0,o.kt)("a",{parentName:"li",href:"https://sdk.apify.com/",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"apify"))," NPM package."),(0,o.kt)("li",{parentName:"ul"},"Python: using the ",(0,o.kt)("a",{parentName:"li",href:"https://docs.apify.com/apify-client-python#actorclient-call",target:"_blank",rel:"noopener"},(0,o.kt)("inlineCode",{parentName:"a"},"call()"))," function provided by the ",(0,o.kt)("a",{parentName:"li",href:"https://docs.apify.com/apify-client-python",target:"_blank",rel:"noopener"},(0,o.kt)("inlineCode",{parentName:"a"},"apify-client"))," Python package.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-marked-tabs"},"\n<marked-tab header=\"NodeJS\" lang=\"javascript\">\nimport { Actor } from 'apify';\n\nawait Actor.init();\n// ...\nconst run = await Actor.call('apify/hello-world', {\n    message: 'Hello!',\n});\nconsole.dir(run.output);\n// ...\nawait Actor.exit();\n</marked-tab>\n\n\n<marked-tab header=\"Python\" lang=\"python\">\n\nrun = apify_client.actor('apify/hello-world').call(run_input={ 'message': 'Hello!' })\nprint(run['id'])\n\n</marked-tab>\n\n")),(0,o.kt)("p",null,"The newly started actor runs under the same user account as the initial actor and therefore all resources consumed are charged to the same user account. This allows more complex actors to be built using simpler actors built and owned by other users."),(0,o.kt)("p",null,"Internally, the ",(0,o.kt)("inlineCode",{parentName:"p"},"call()")," function takes the user's API token from the ",(0,o.kt)("inlineCode",{parentName:"p"},"APIFY_TOKEN")," environment variable, then it invokes the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.apify.com/api/v2/#/reference/actors/run-collection/run-actor",target:"_blank",rel:"noopener"},"Run actor")," API endpoint, waits for the actor to finish and reads its output using the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.apify.com/api/v2/#/reference/key-value-stores/record/get-record",target:"_blank",rel:"noopener"},"Get record")," API endpoint."),(0,o.kt)("h2",{id:"resource-limits"},"Resource limits"),(0,o.kt)("p",null,"Actors run inside a Docker container whose resources are limited. When invoking the actor, the caller has to specify the amount of memory allocated for the actor. The amount of memory can be set to a power of 2 with a minimum of 128 MB, i.e., 256 MB, 512 MB, 1024 MB, 2048 MB, ..., 32768 MB."),(0,o.kt)("p",null,"Additionally, each user has a certain total limit of memory for running actors. The sum of memory allocated for all running actors and builds needs to fit into this limit, otherwise the user cannot start a new actor. For more details, see ",(0,o.kt)("a",{parentName:"p",href:"/platform/actors/limits",target:null,rel:null},"Limits"),"."),(0,o.kt)("p",null,"The share of CPU is computed automatically from the memory as follows: for each 4096 MB of memory, the actor gets 1 full CPU core. For other amounts of memory the number of CPU cores is computed fractionally. For example, an actor with 1024 MB of memory will have a 1/4 share of a CPU core."),(0,o.kt)("p",null,"The actor has hard disk space limited by twice the amount of memory. For example, an actor with 1024 MB of memory will have 2048 MB of disk available."),(0,o.kt)("h2",{id:"lifecycle"},"Lifecycle"),(0,o.kt)("p",null,"Each run starts with the initial status ",(0,o.kt)("strong",{parentName:"p"},"READY")," and goes through one or more transitional statuses to one of the terminal statuses."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Status"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"READY"),(0,o.kt)("td",{parentName:"tr",align:null},"initial"),(0,o.kt)("td",{parentName:"tr",align:null},"Started but not allocated to any worker yet")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"RUNNING"),(0,o.kt)("td",{parentName:"tr",align:null},"transitional"),(0,o.kt)("td",{parentName:"tr",align:null},"Executing on a worker")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"SUCCEEDED"),(0,o.kt)("td",{parentName:"tr",align:null},"terminal"),(0,o.kt)("td",{parentName:"tr",align:null},"Finished successfully")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"FAILED"),(0,o.kt)("td",{parentName:"tr",align:null},"terminal"),(0,o.kt)("td",{parentName:"tr",align:null},"Run failed")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"TIMING-OUT"),(0,o.kt)("td",{parentName:"tr",align:null},"transitional"),(0,o.kt)("td",{parentName:"tr",align:null},"Timing out now")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"TIMED-OUT"),(0,o.kt)("td",{parentName:"tr",align:null},"terminal"),(0,o.kt)("td",{parentName:"tr",align:null},"Timed out")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"ABORTING"),(0,o.kt)("td",{parentName:"tr",align:null},"transitional"),(0,o.kt)("td",{parentName:"tr",align:null},"Being aborted by user")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"ABORTED"),(0,o.kt)("td",{parentName:"tr",align:null},"terminal"),(0,o.kt)("td",{parentName:"tr",align:null},"Aborted by user")))),(0,o.kt)("h2",{id:"aborting-runs"},"Aborting runs"),(0,o.kt)("p",null,"You can abort runs with the statuses ",(0,o.kt)("strong",{parentName:"p"},"READY"),", ",(0,o.kt)("strong",{parentName:"p"},"RUNNING"),", or ",(0,o.kt)("strong",{parentName:"p"},"TIMING-OUT")," in two ways:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Abort run - immediately abort the actor run. This is the default option."),(0,o.kt)("li",{parentName:"ul"},"Gracefully abort run - the actor run receives a signal about aborting via the ",(0,o.kt)("inlineCode",{parentName:"li"},"aborting")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"persistState")," events and is force-aborted after 30 seconds. This is helpful in cases where you plan to resurrect the run later because it saves the actor's state. When resurrected, the actor can re-start where it left off.")),(0,o.kt)("p",null,"You can abort a run in the Apify Console using the ",(0,o.kt)("strong",{parentName:"p"},"Abort")," button or via API using the ",(0,o.kt)("a",{parentName:"p",href:"/api/v2#/reference/actor-runs/abort-run/abort-run",target:null,rel:null},"Abort run")," endpoint."),(0,o.kt)("h2",{id:"resurrection-of-finished-run"},"Resurrection of finished run"),(0,o.kt)("p",null,"Any actor run in terminal state, i.e. run with status ",(0,o.kt)("strong",{parentName:"p"},"FINISHED"),", ",(0,o.kt)("strong",{parentName:"p"},"FAILED"),", ",(0,o.kt)("strong",{parentName:"p"},"ABORTED")," and ",(0,o.kt)("strong",{parentName:"p"},"TIMED-OUT"),", might be resurrected back to a ",(0,o.kt)("strong",{parentName:"p"},"RUNNING")," state. This is helpful in many cases, for example when the timeout for actor run was too low or in case of an unexpected error."),(0,o.kt)("p",null,"The whole process of resurrection looks as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Run status will be updated to ",(0,o.kt)("strong",{parentName:"li"},"RUNNING")," and its container will be restarted with the same storages (the same behavior as when the run gets migrated to the new server)."),(0,o.kt)("li",{parentName:"ul"},"Updated duration will include the time when actor was not running. This does not affect compute units consumption."),(0,o.kt)("li",{parentName:"ul"},"Timeout will be counted from the point when this actor run was resurrected.")),(0,o.kt)("p",null,"Resurrection can be performed in Apify Console using the ",(0,o.kt)("strong",{parentName:"p"},"resurrect")," button or via API using the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.apify.com/api/v2#/reference/actors/resurrect-run",target:"_blank",rel:"noopener"},"Resurrect run")," API endpoint."),(0,o.kt)("h2",{id:"container-web-server"},"Container web server"),(0,o.kt)("p",null,"Each actor run is assigned a unique hard-to-guess URL (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"kmdo7wpzlshygi.runs.apify.net"),"), which enables HTTP access to an optional web server running inside the actor run's Docker container. The URL is available in the following places:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"In the web application, on the actor run details page as the ",(0,o.kt)("strong",{parentName:"li"},"Container URL")," field."),(0,o.kt)("li",{parentName:"ul"},"In the API as the ",(0,o.kt)("inlineCode",{parentName:"li"},"containerUrl")," property of the ",(0,o.kt)("a",{parentName:"li",href:"https://docs.apify.com/api/v2#/reference/actors/run-object/get-run",target:"_blank",rel:"noopener"},"Run object"),"."),(0,o.kt)("li",{parentName:"ul"},"In the actor run's container as the ",(0,o.kt)("strong",{parentName:"li"},"APIFY_CONTAINER_URL")," environment variable.")),(0,o.kt)("p",null,"The web server running inside the container must listen at the port defined by the ",(0,o.kt)("inlineCode",{parentName:"p"},"APIFY_CONTAINER_PORT")," environment variable (typically 4321). If you want to use another port, simply define the ",(0,o.kt)("strong",{parentName:"p"},"APIFY_CONTAINER_PORT")," environment variable with the desired port number in your actor version configuration - see ",(0,o.kt)("a",{parentName:"p",href:"/platform/actors/development/source-code",target:null,rel:null},"Custom environment variable")," for details."),(0,o.kt)("p",null,"The following example demonstrates how to start a simple web server in your actor:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { Actor } from 'apify';\nimport express from 'express';\n\nawait Actor.init();\n\nconst app = express();\nconst port = process.env.APIFY_CONTAINER_PORT;\n\napp.get('/', (req, res) => {\n    res.send('Hello World!');\n});\n\napp.listen(port, () => console.log(`Web server is listening\n    and can be accessed at\n    ${process.env.APIFY_CONTAINER_URL}!`));\n\n// Let the actor run for an hour.\nawait new Promise((r) => setTimeout(r, 60 * 60 * 1000));\n\nawait Actor.exit();\n")),(0,o.kt)("h2",{id:"data-retention"},"Data retention"),(0,o.kt)("p",null,"An actor run is deleted along with its default storages (key-value store, dataset, request queue) after a data retention period which is based on your ",(0,o.kt)("a",{parentName:"p",href:"https://apify.com/pricing",target:"_blank",rel:"noopener"},"subscription plan"),"."),(0,o.kt)("h2",{id:"sharing"},"Sharing"),(0,o.kt)("p",null,"You can share your actor runs with other Apify users via the ","[access rights]","({{@link access_rights.md}}) system. ","[See the full list of permissions]","({{@link access_rights/list_of_permissions.md}})."))}d.isMDXComponent=!0},85493:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/actor-console-077d4d5eb3721c3ba710c3602d36ba88.webp"}}]);