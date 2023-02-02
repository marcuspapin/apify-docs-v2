"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[4784],{3905:(t,e,r)=>{r.d(e,{Zo:()=>c,kt:()=>h});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},o=Object.keys(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var l=a.createContext({}),s=function(t){var e=a.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},c=function(t){var e=s(t.components);return a.createElement(l.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,o=t.originalType,l=t.parentName,c=p(t,["components","mdxType","originalType","parentName"]),d=s(r),h=n,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||o;return r?a.createElement(m,i(i({ref:e},c),{},{components:r})):a.createElement(m,i({ref:e},c))}));function h(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=r.length,i=new Array(o);i[0]=d;var p={};for(var l in e)hasOwnProperty.call(e,l)&&(p[l]=e[l]);p.originalType=t,p.mdxType="string"==typeof t?t:n,i[1]=p;for(var s=2;s<o;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},99237:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>p,metadata:()=>s,toc:()=>u});var a=r(87462),n=r(63366),o=(r(67294),r(3905)),i=["components"],p={title:"Quick start",description:"Learn how to run any actor in Apify Store or create your own. A step-by-step guide through your first steps on the Apify platform.",sidebar_position:3.1,slug:"/tutorials/quick-start"},l="Quick start",s={unversionedId:"tutorials/quick_start",id:"tutorials/quick_start",title:"Quick start",description:"Learn how to run any actor in Apify Store or create your own. A step-by-step guide through your first steps on the Apify platform.",source:"@site/sources/platform/tutorials/quick_start.md",sourceDirName:"tutorials",slug:"/tutorials/quick-start",permalink:"/platform/tutorials/quick-start",draft:!1,tags:[],version:"current",lastUpdatedBy:"Jind\u0159ich B\xe4r",lastUpdatedAt:1675342799,formattedLastUpdatedAt:"Feb 2, 2023",sidebarPosition:3.1,frontMatter:{title:"Quick start",description:"Learn how to run any actor in Apify Store or create your own. A step-by-step guide through your first steps on the Apify platform.",sidebar_position:3.1,slug:"/tutorials/quick-start"},sidebar:"docs",previous:{title:"Tutorials",permalink:"/platform/tutorials"},next:{title:"Apify scrapers",permalink:"/platform/tutorials/apify-scrapers"}},c={},u=[{value:"Run an actor",id:"run-an-actor",level:2},{value:"Create an actor",id:"create-an-actor",level:2},{value:"Accepting input",id:"accepting-input",level:3},{value:"Building more advanced actors",id:"building-more-advanced-actors",level:3},{value:"What&#39;s next?",id:"whats-next",level:2}],d={toc:u};function h(t){var e=t.components,p=(0,n.Z)(t,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,p,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"quick-start"},"Quick start"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Learn how to run any actor in Apify Store or create your own. A step-by-step guide through your first steps on the Apify platform.")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"This article shows you the very basics of using the Apify platform. It shows you the principles of running any actor in Apify Store and the first steps of building an actor using the in-app code editor."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"You will need an Apify account to complete this tutorial. If you don't have one, ",(0,o.kt)("a",{parentName:"strong",href:"https://console.apify.com/sign-up",target:"_blank",rel:"noopener"},"complete the sign-up process")," first.")),(0,o.kt)("h2",{id:"run-an-actor"},"Run an actor"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"1.")," Navigate to ",(0,o.kt)("a",{parentName:"p",href:"https://console.apify.com/store",target:"_blank",rel:"noopener"},"Apify Store")," and pick any actor you like the look of. We'll pick the ",(0,o.kt)("a",{parentName:"p",href:"https://console.apify.com/actors/nFJndFXA5zjCTuudP#/information/latest/readme",target:"_blank",rel:"noopener"},"Google Search Results Scraper"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Apify store",src:r(26757).Z,width:"2116",height:"1468"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"2.")," On the actor's page, head over to the ",(0,o.kt)("strong",{parentName:"p"},"Input")," tab."),(0,o.kt)("p",null,"Don't be put off by all the boxes - the actor is pre-configured to run without any extra input. Just click the ",(0,o.kt)("strong",{parentName:"p"},"Start")," button in the bottom-left corner."),(0,o.kt)("p",null,"Alternatively, you can play around with the settings to make the results more interesting for you."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Actor input view",src:r(652).Z,width:"1648",height:"1334"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"3.")," Wait for the actor to run..."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"4.")," Get your results!"),(0,o.kt)("p",null,"Click on the flashing ",(0,o.kt)("strong",{parentName:"p"},"Results")," button."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Actor successful run view",src:r(86233).Z,width:"2206",height:"266"})),(0,o.kt)("p",null,"Then, choose which format you want your data in and check it out."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Choose the data format",src:r(79438).Z,width:"1500",height:"639"})),(0,o.kt)("p",null,"Here is a preview of the actor's output as a table."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Dataset preview",src:r(60949).Z,width:"1400",height:"377"})),(0,o.kt)("h2",{id:"create-an-actor"},"Create an actor"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"1.")," ",(0,o.kt)("a",{parentName:"p",href:"https://console.apify.com/actors",target:"_blank",rel:"noopener"},"Go to the ",(0,o.kt)("strong",{parentName:"a"},"Actors")," section")," in the Apify Console and click on the ",(0,o.kt)("strong",{parentName:"p"},"Create new")," button."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Create a new actor",src:r(12765).Z,width:"1500",height:"711"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"2.")," Go to the ",(0,o.kt)("strong",{parentName:"p"},"Source")," tab and paste the Node.js code below into the ",(0,o.kt)("strong",{parentName:"p"},"Source code")," editor."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { Actor } from 'apify';\n\nawait Actor.init();\n\nconsole.log('Hello world from Actor!');\n\nawait Actor.exit();\n")),(0,o.kt)("p",null,"Click ",(0,o.kt)("strong",{parentName:"p"},"Save"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"3.")," Click ",(0,o.kt)("strong",{parentName:"p"},"Build")," in the ",(0,o.kt)("strong",{parentName:"p"},"Developer console")," below to build your actor. After the build is finished, click ",(0,o.kt)("strong",{parentName:"p"},"\u25b7 Start")," to run your actor. After the run is finished, you should see something like:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Apify actor run log",src:r(42905).Z,width:"1642",height:"196"})),(0,o.kt)("p",null,"Congratulations, you have successfully created and run your first actor!"),(0,o.kt)("h3",{id:"accepting-input"},"Accepting input"),(0,o.kt)("p",null,"Let's try something little more advanced. We will enable the actor to accept input and generate output (for more details, ",(0,o.kt)("a",{parentName:"p",href:"/platform/actors/running/input",target:null,rel:null},"see the Input article"),")."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"1.")," Paste the code below into the ",(0,o.kt)("strong",{parentName:"p"},"Source code")," editor."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { Actor } from 'apify';\n\nawait Actor.init();\n\n// Get input and print it\nconst input = await Actor.getInput();\nconsole.log('My input:');\nconsole.dir(input);\n\nawait Actor.exit();\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"2.")," Save your actor by clicking ",(0,o.kt)("strong",{parentName:"p"},"Save")," and then rebuild it by clicking ",(0,o.kt)("strong",{parentName:"p"},"Build"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"3.")," After the build is finished, go to the ",(0,o.kt)("strong",{parentName:"p"},"Developer console")," and set the ",(0,o.kt)("strong",{parentName:"p"},"Input")," to:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{ "hello": 123 }\n')),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Apify actor run log",src:r(47992).Z,width:"1666",height:"698"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"4.")," Click ",(0,o.kt)("strong",{parentName:"p"},"\u25b7 Start"),". When the run finishes, you will see something like:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Apify actor run log",src:r(52934).Z,width:"1793",height:"352"})),(0,o.kt)("p",null,"Excellent, you have just created your first actor that accepts input and logs output! Now you can start adding some magic."),(0,o.kt)("p",null,"You can program an Apify actor to do anything one can do in the browser, from sending emails to processing vast amounts of data. For examples and inspiration, ",(0,o.kt)("a",{parentName:"p",href:"https://apify.com/store",target:"_blank",rel:"noopener"},"visit Apify Store"),"."),(0,o.kt)("h3",{id:"building-more-advanced-actors"},"Building more advanced actors"),(0,o.kt)("p",null,"The above actor (and many others) uses the ",(0,o.kt)("inlineCode",{parentName:"p"},"apify")," ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/apify",target:"_blank",rel:"noopener"},"NPM package"),", which simplifies the development of actors. The Apify SDK has tutorials on how you can ",(0,o.kt)("a",{parentName:"p",href:"https://docs-v2.apify.com/sdk-js/docs/guides/getting-started",target:"_blank",rel:"noopener"},"get started"),". Also make sure to check out ",(0,o.kt)("a",{parentName:"p",href:"https://crawlee.dev/",target:"_blank",rel:"noopener"},(0,o.kt)("inlineCode",{parentName:"a"},"Crawlee"))," - the library containing crawling and scraping-related tools, which previously were a part of Apify SDK."),(0,o.kt)("p",null,"If you are building your own actors, you'll probably prefer to host the source code on Git. To do that, follow these steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create a new Git repository."),(0,o.kt)("li",{parentName:"ol"},"Copy the boilerplate actor code from the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apify/actor-quick-start",target:"_blank",rel:"noopener"},"apify/quick-start")," actor."),(0,o.kt)("li",{parentName:"ol"},"Set ",(0,o.kt)("strong",{parentName:"li"},"Source type")," to ",(0,o.kt)("strong",{parentName:"li"},"Git repository")," for your actor in the app."),(0,o.kt)("li",{parentName:"ol"},"Paste the Git repo link to ",(0,o.kt)("strong",{parentName:"li"},"Git URL"),", save changes and build your actor."),(0,o.kt)("li",{parentName:"ol"},"That's it, now you can develop your actor locally on your computer and run it in the Apify cloud!")),(0,o.kt)("p",null,"For more information, see the ",(0,o.kt)("a",{parentName:"p",href:"/platform/actors/development/source-code",target:null,rel:null},"Git repository")," section."),(0,o.kt)("h2",{id:"whats-next"},"What's next?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Try some other actors from ",(0,o.kt)("a",{parentName:"li",href:"https://apify.com/store",target:"_blank",rel:"noopener"},"Apify Store"),"."),(0,o.kt)("li",{parentName:"ul"},"Learn to use our main scrapers: ",(0,o.kt)("a",{parentName:"li",href:"/platform/tutorials/apify-scrapers/web-scraper",target:null,rel:null},"Web Scraper"),", ",(0,o.kt)("a",{parentName:"li",href:"/platform/tutorials/apify-scrapers/cheerio-scraper",target:null,rel:null},"Cheerio Scraper"),", and ",(0,o.kt)("a",{parentName:"li",href:"/platform/tutorials/apify-scrapers/puppeteer-scraper",target:null,rel:null},"Puppeteer Scraper"),"."),(0,o.kt)("li",{parentName:"ul"},"Learn more about using actors and the Apify platform: ",(0,o.kt)("a",{parentName:"li",href:"/platform/actors/tasks",target:null,rel:null},"tasks"),", ",(0,o.kt)("a",{parentName:"li",href:"/platform/storage",target:null,rel:null},"storages"),", and ",(0,o.kt)("a",{parentName:"li",href:"/platform/proxy",target:null,rel:null},"proxies"),"."),(0,o.kt)("li",{parentName:"ul"},"Set up the ",(0,o.kt)("a",{parentName:"li",href:"https://docs-v2.apify.com/sdk-js/docs/guides/getting-started",target:"_blank",rel:"noopener"},(0,o.kt)("inlineCode",{parentName:"a"},"apify"))," and ",(0,o.kt)("a",{parentName:"li",href:"https://crawlee.dev/docs/quick-start",target:"_blank",rel:"noopener"},(0,o.kt)("inlineCode",{parentName:"a"},"crawlee"))," packages on your computer, and build your own actors with the Apify SDK and Crawlee.")))}h.isMDXComponent=!0},652:(t,e,r)=>{r.d(e,{Z:()=>a});const a=r.p+"assets/images/actor-input-view-9631c223f9833d8878cf290788b4ee29.png"},60949:(t,e,r)=>{r.d(e,{Z:()=>a});const a=r.p+"assets/images/actor-run-dataset-9f95dab57df00e3519a19243b3536ac8.png"},79438:(t,e,r)=>{r.d(e,{Z:()=>a});const a=r.p+"assets/images/actor-run-results-0b7814997101d35bf6125b089e86e417.png"},86233:(t,e,r)=>{r.d(e,{Z:()=>a});const a=r.p+"assets/images/actor-run-view-90ad2ae83e9bd60db57bc8b863219020.png"},26757:(t,e,r)=>{r.d(e,{Z:()=>a});const a=r.p+"assets/images/apify-store-e91c9c29ae248521651009bb77045d5f.png"},47992:(t,e,r)=>{r.d(e,{Z:()=>a});const a=r.p+"assets/images/create-actor-set-input-35c0b2bcf65214d08535217076a43174.png"},12765:(t,e,r)=>{r.d(e,{Z:()=>a});const a=r.p+"assets/images/create-actor-bed6f385aad91e219498d6172aff3b20.png"},52934:(t,e,r)=>{r.d(e,{Z:()=>a});const a=r.p+"assets/images/run-log-2-ec4a1ec83e2990a878a52515601edbcb.png"},42905:(t,e,r)=>{r.d(e,{Z:()=>a});const a=r.p+"assets/images/run-log-6514f9cfa646c162d70149ffa6e606f6.png"}}]);