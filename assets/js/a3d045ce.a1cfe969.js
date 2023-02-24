"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[6199],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),u=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(a),f=n,h=d["".concat(l,".").concat(f)]||d[f]||c[f]||s;return a?r.createElement(h,o(o({ref:t},p),{},{components:a})):r.createElement(h,o({ref:t},p))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,o=new Array(s);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var u=2;u<s;u++)o[u]=a[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},92255:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var r=a(87462),n=a(63366),s=(a(67294),a(3905)),o=["components"],i={title:"VII - Saving useful run statistics",description:"Understand how to save statistics about an actor's run, what types of statistics you can save, and why you might want to save them for a large-scale scraper.",sidebar_position:6.7,slug:"/expert-scraping-with-apify/saving-useful-stats"},l="Saving useful run statistics",u={unversionedId:"platform/expert_scraping_with_apify/saving_useful_stats",id:"platform/expert_scraping_with_apify/saving_useful_stats",title:"VII - Saving useful run statistics",description:"Understand how to save statistics about an actor's run, what types of statistics you can save, and why you might want to save them for a large-scale scraper.",source:"@site/sources/academy/platform/expert_scraping_with_apify/saving_useful_stats.md",sourceDirName:"platform/expert_scraping_with_apify",slug:"/expert-scraping-with-apify/saving-useful-stats",permalink:"/academy/expert-scraping-with-apify/saving-useful-stats",draft:!1,editUrl:"https://github.com/apify/apify-docs-v2/edit/master/sources/academy/platform/expert_scraping_with_apify/saving_useful_stats.md",tags:[],version:"current",lastUpdatedBy:"Jan \u010curn",lastUpdatedAt:1677248878,formattedLastUpdatedAt:"Feb 24, 2023",sidebarPosition:6.7,frontMatter:{title:"VII - Saving useful run statistics",description:"Understand how to save statistics about an actor's run, what types of statistics you can save, and why you might want to save them for a large-scale scraper.",sidebar_position:6.7,slug:"/expert-scraping-with-apify/saving-useful-stats"},sidebar:"academy",previous:{title:"VI - Bypassing anti-scraping methods",permalink:"/academy/expert-scraping-with-apify/bypassing-anti-scraping"},next:{title:"Solutions",permalink:"/academy/expert-scraping-with-apify/solutions"}},p={},c=[{value:"Learning \ud83e\udde0",id:"learning",level:2},{value:"Knowledge check \ud83d\udcdd",id:"quiz",level:2},{value:"Our task",id:"our-task",level:2},{value:"Wrap up",id:"wrap-up",level:2}],d={toc:c};function f(e){var t=e.components,a=(0,n.Z)(e,o);return(0,s.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"savings-useful-run-statistics"},"Saving useful run statistics"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Understand how to save statistics about an actor's run, what types of statistics you can save, and why you might want to save them for a large-scale scraper.")),(0,s.kt)("hr",null),(0,s.kt)("p",null,"Using Crawlee and the Apify SDK, we are now able to collect and format data coming directly from websites and save it into a Key-Value store or Dataset. This is great, but sometimes, we want to store some extra data about the run itself, or about each request. We might want to store some extra general run information separately from our results, or potentially include statistics about each request within its corresponding dataset item."),(0,s.kt)("p",null,"The types of values that are saved are totally up to you, but the most common are error scores, number of total saved items, number of request retries, number of captchas hit, etc. Storing these values is not always necessary, but can be valuable when debugging and maintaining an actor. As your projects scale, this will become more and more useful and important."),(0,s.kt)("h2",{id:"learning"},"Learning \ud83e\udde0"),(0,s.kt)("p",null,"Before moving on, give these valuable resources a quick lookover:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Refamiliarize with the various available data on the ",(0,s.kt)("a",{parentName:"li",href:"https://crawlee.dev/api/core/class/Request",target:"_blank",rel:"noopener"},"Request object"),"."),(0,s.kt)("li",{parentName:"ul"},"Learn about the ",(0,s.kt)("a",{parentName:"li",href:"https://crawlee.dev/api/browser-crawler/interface/BrowserCrawlerOptions#failedRequestHandler",target:"_blank",rel:"noopener"},(0,s.kt)("inlineCode",{parentName:"a"},"failedRequestHandler")," function"),"."),(0,s.kt)("li",{parentName:"ul"},"Understand how to use the ",(0,s.kt)("a",{parentName:"li",href:"https://crawlee.dev/api/browser-crawler/interface/BrowserCrawlerOptions#errorHandler",target:"_blank",rel:"noopener"},(0,s.kt)("inlineCode",{parentName:"a"},"errorHandler"))," function to handle request failures."),(0,s.kt)("li",{parentName:"ul"},"Ensure you are comfortable using ",(0,s.kt)("a",{parentName:"li",href:"https://docs.apify.com/sdk/js/docs/guides/data-storage#key-value-store",target:"_blank",rel:"noopener"},"key-value stores")," and ",(0,s.kt)("a",{parentName:"li",href:"https://docs.apify.com/sdk/js/docs/api/dataset#__docusaurus",target:"_blank",rel:"noopener"},"datasets"),", and understand the differences between the two storage types.")),(0,s.kt)("h2",{id:"quiz"},"Knowledge check \ud83d\udcdd"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Why might you want to store statistics about an actor's run (or a specific request)?"),(0,s.kt)("li",{parentName:"ol"},"In our Amazon scraper, we are trying to store the number of retries of a request once its data is pushed to the dataset. Where would you get this information? Where would you store it?"),(0,s.kt)("li",{parentName:"ol"},"We are building a new imaginary scraper for a website that sometimes displays captchas at unexpected times, rather than displaying the content we want. How would you keep a count of the total number of captchas hit for the entire run? Where would you store this data? Why?"),(0,s.kt)("li",{parentName:"ol"},"Is storing these types of values necessary for every single actor?"),(0,s.kt)("li",{parentName:"ol"},"What is the difference between the ",(0,s.kt)("inlineCode",{parentName:"li"},"failedRequestHandler")," and ",(0,s.kt)("inlineCode",{parentName:"li"},"errorHandler"),"?")),(0,s.kt)("h2",{id:"our-task"},"Our task"),(0,s.kt)("p",null,"In our Amazon actor, each dataset result must now have the following extra keys:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "dateHandled": "date-here", // the date + time at which the request was handled\n    "numberOfRetries": 4, // the number of retries of the request before running successfully\n    "currentPendingRequests": 24 // the current number of requests left pending in the request queue\n}\n')),(0,s.kt)("p",null,"Also, an object including these values should be persisted during the run in th Key-Value store and logged to the console every 10 seconds:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "errors": { // all of the errors for every request path\n        "some-site.com/products/123": [\n            "error1",\n            "error2"\n        ]\n    },\n    "totalSaved": 43 // total number of saved items throughout the entire run\n}\n')),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/academy/expert-scraping-with-apify/solutions/saving-stats",target:null,rel:null},(0,s.kt)("strong",{parentName:"a"},"Solution"))),(0,s.kt)("h2",{id:"wrap-up"},"Wrap up"),(0,s.kt)("p",null,"Wow, you've learned a whole lot in this course, so give yourself the pat on the back that you deserve! If you were able to follow along with this course, that means that you're officially an ",(0,s.kt)("strong",{parentName:"p"},"Apify pro"),", and that you're equipped with all of the knowledge and tools you need to build awesome scalable web-scrapers either for your own personal projects, or for the Apify platform."),(0,s.kt)("p",null,"Congratulations! \ud83c\udf89"))}f.isMDXComponent=!0}}]);