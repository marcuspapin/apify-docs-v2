"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[30],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||s;return n?a.createElement(h,r(r({ref:t},c),{},{components:n})):a.createElement(h,r({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,r=new Array(s);r[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var p=2;p<s;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},71787:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var a=n(87462),o=n(63366),s=(n(67294),n(3905)),r=["components"],i={title:"Insomnia",description:"Learn about Insomnia, a simple yet super valuable tool for testing requests and proxies when building scalable web scrapers.",sidebar_position:9.2,slug:"/tools/insomnia"},l="What is Insomnia?",p={unversionedId:"glossary/tools/insomnia",id:"glossary/tools/insomnia",title:"Insomnia",description:"Learn about Insomnia, a simple yet super valuable tool for testing requests and proxies when building scalable web scrapers.",source:"@site/sources/academy/glossary/tools/insomnia.md",sourceDirName:"glossary/tools",slug:"/tools/insomnia",permalink:"/academy/tools/insomnia",draft:!1,tags:[],version:"current",lastUpdatedBy:"Jind\u0159ich B\xe4r",lastUpdatedAt:1675342799,formattedLastUpdatedAt:"Feb 2, 2023",sidebarPosition:9.2,frontMatter:{title:"Insomnia",description:"Learn about Insomnia, a simple yet super valuable tool for testing requests and proxies when building scalable web scrapers.",sidebar_position:9.2,slug:"/tools/insomnia"},sidebar:"academy",previous:{title:"The Apify CLI",permalink:"/academy/tools/apify-cli"},next:{title:"Postman",permalink:"/academy/tools/postman"}},c={},u=[{value:"The Insomnia interface",id:"insomnia-interface",level:2},{value:"List of requests",id:"list-of-requests",level:3},{value:"Address bar",id:"address-bar",level:3},{value:"Request options",id:"request-options",level:3},{value:"Response",id:"response",level:3},{value:"Request timeline",id:"request-timeline",level:2},{value:"Using proxies in Insomnia",id:"using-proxies",level:2},{value:"Managing the cookies cache",id:"managing-cookies-cache",level:2},{value:"So, Postman or Insomnia?",id:"postman-or-insomnia",level:2}],d={toc:u};function m(e){var t=e.components,i=(0,o.Z)(e,r);return(0,s.kt)("wrapper",(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"what-is-insomnia"},"What is Insomnia?"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Learn about Insomnia, a simple yet super valuable tool for testing requests and proxies when building scalable web scrapers.")),(0,s.kt)("hr",null),(0,s.kt)("p",null,"Despite its name, the ",(0,s.kt)("a",{parentName:"p",href:"https://insomnia.rest/download",target:"_blank",rel:"noopener"},"Insomnia")," desktop application has absolutely nothing to do with having a lack of sleep. Rather, it is a tool to build and test APIs. If you've already read about ",(0,s.kt)("a",{parentName:"p",href:"/academy/tools/postman",target:null,rel:null},"Postman"),", you already know what Insomnia can be used for, as they both do practically the same exact things. There are some small differences between them, though. Like Postman, Insomnia allows you to send requests with specific headers and cookies, to add a request payload, etc. One difference is that Insomnia also allows you to see the whole timeline of the request."),(0,s.kt)("p",null,"Insomnia can be downloaded from its ",(0,s.kt)("a",{parentName:"p",href:"https://insomnia.rest/download",target:"_blank",rel:"noopener"},"official website"),", and its features can be read about in the ",(0,s.kt)("a",{parentName:"p",href:"https://docs.insomnia.rest/",target:"_blank",rel:"noopener"},"official documentation"),"."),(0,s.kt)("h2",{id:"insomnia-interface"},"The Insomnia interface"),(0,s.kt)("p",null,"After opening the app, you'll first need to create a new request. After creating the request, you'll see an interface that looks like this:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Insomnia interface",src:n(44111).Z,width:"1860",height:"1160"})),(0,s.kt)("p",null,"Let's break down the main sections:"),(0,s.kt)("h3",{id:"list-of-requests"},"List of requests"),(0,s.kt)("p",null,"You can configure multiple request with a custom payload, headers, cookies, parameters, etc. They are automatically saved in the list of requests until deleted."),(0,s.kt)("h3",{id:"address-bar"},"Address bar"),(0,s.kt)("p",null,"The place where you select the type of request to send (",(0,s.kt)("strong",{parentName:"p"},"GET"),", ",(0,s.kt)("strong",{parentName:"p"},"POST"),", ",(0,s.kt)("strong",{parentName:"p"},"PUT"),", ",(0,s.kt)("strong",{parentName:"p"},"DELETE"),", etc.), specify the URI of the request, and send the request with the ",(0,s.kt)("strong",{parentName:"p"},"Send")," button."),(0,s.kt)("h3",{id:"request-options"},"Request options"),(0,s.kt)("p",null,"Here, you can add a request payload, specify authorization parameters, add query parameters, and attach headers to the request."),(0,s.kt)("h3",{id:"response"},"Response"),(0,s.kt)("p",null,"Where the response body is displayed after the request has been sent. Like in Postman, the request can be viewed in preview mode, pretty-printed, or in its raw form. This section also has the ",(0,s.kt)("strong",{parentName:"p"},"Headers")," and ",(0,s.kt)("strong",{parentName:"p"},"Cookies")," tabs, which respectively show the request headers and cookies."),(0,s.kt)("h2",{id:"request-timeline"},"Request timeline"),(0,s.kt)("p",null,"The one feature of Insomnia that separates it from Postman is the ",(0,s.kt)("strong",{parentName:"p"},"Timeline"),"."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Request timeline",src:n(55516).Z,width:"958",height:"1064"})),(0,s.kt)("p",null,"This feature allows you to see information about the request that is not present in the response body."),(0,s.kt)("h2",{id:"using-proxies"},"Using proxies in Insomnia"),(0,s.kt)("p",null,"In order to use a proxy, you need to specify the proxy's parameters in Insomnia's preferences. In preferences, scroll down to the ",(0,s.kt)("strong",{parentName:"p"},"HTTP Network Proxy")," section under the ",(0,s.kt)("strong",{parentName:"p"},"General")," tab and specify the full proxy URL there:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Configuring a proxy",src:n(7592).Z,width:"1546",height:"468"})),(0,s.kt)("h2",{id:"managing-cookies-cache"},"Managing the cookies cache"),(0,s.kt)("p",null,"Insomnia keeps the cookies for the requests you have already sent before. This might result in you receiving a difference response within your scraper from what you're receiving in Insomnia, as a necessary cookie is not present in the request sent by the scraper. To check whether or not some cookies associated with a certain request have been cached, click on the ",(0,s.kt)("strong",{parentName:"p"},"Cookies")," button at top of the list of requests:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Click on the &quot;Cookies&quot; button",src:n(98612).Z,width:"1592",height:"162"})),(0,s.kt)("p",null,"This'll bring up the ",(0,s.kt)("strong",{parentName:"p"},"Manage cookies")," window, where all cached cookies can be viewed, edited, or deleted."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"The &quot;Manage Cookies&quot; tab",src:n(3217).Z,width:"1654",height:"1005"})),(0,s.kt)("h2",{id:"postman-or-insomnia"},"So, Postman or Insomnia?"),(0,s.kt)("p",null,"The application you choose to use is completely up to personal preference, and will not affect your development workflow. If viewing timelines of the requests you send is important to you, then you should go with Insomnia; however, if that doesn't matter, just choose the one that has the most intuitive interface for you."))}m.isMDXComponent=!0},98612:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/insomnia-cookies-4cf492e7c0821caccb4cc924559a83f9.png"},44111:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/insomnia-interface-14180b5b3c84aa372912fb89e8be83a5.webp"},3217:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/insomnia-manage-cookies-528d1043cfbf9fcde0597a5f0c251aa1.webp"},7592:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/insomnia-proxy-1cacb438369ed0cb8054b86acb5a716f.png"},55516:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/insomnia-timeline-58b56a8082eddc1b4c750384ce6b0354.webp"}}]);