"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[1014],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(a),h=o,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||s;return a?n.createElement(m,r(r({ref:t},c),{},{components:a})):n.createElement(m,r({ref:t},c))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=a.length,r=new Array(s);r[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var p=2;p<s;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},29912:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var n=a(87462),o=a(63366),s=(a(67294),a(3905)),r=["components"],i={title:"Postman",description:"Learn about Postman, a simple yet super valuable tool for testing requests and proxies when building scalable web scrapers.",sidebar_position:9.3,slug:"/tools/postman"},l="What is Postman?",p={unversionedId:"glossary/tools/postman",id:"glossary/tools/postman",title:"Postman",description:"Learn about Postman, a simple yet super valuable tool for testing requests and proxies when building scalable web scrapers.",source:"@site/sources/academy/glossary/tools/postman.md",sourceDirName:"glossary/tools",slug:"/tools/postman",permalink:"/academy/tools/postman",draft:!1,editUrl:"https://github.com/apify/apify-docs-v2/edit/master/sources/academy/glossary/tools/postman.md",tags:[],version:"current",lastUpdatedBy:"Vlad Frangu",lastUpdatedAt:1676463577,formattedLastUpdatedAt:"Feb 15, 2023",sidebarPosition:9.3,frontMatter:{title:"Postman",description:"Learn about Postman, a simple yet super valuable tool for testing requests and proxies when building scalable web scrapers.",sidebar_position:9.3,slug:"/tools/postman"},sidebar:"academy",previous:{title:"Insomnia",permalink:"/academy/tools/insomnia"},next:{title:"Proxyman",permalink:"/academy/tools/proxyman"}},c={},u=[{value:"Understanding the interface",id:"understanding-the-interface",level:2},{value:"Tabs",id:"tabs",level:3},{value:"Address bar",id:"address-bar",level:3},{value:"Request options",id:"request-options",level:3},{value:"Response",id:"response",level:3},{value:"Using and testing proxies",id:"using-proxies",level:2},{value:"Managing the cookies cache",id:"managing-cookies",level:2},{value:"Some alternatives to Postman",id:"alternatives",level:3}],d={toc:u};function h(e){var t=e.components,i=(0,o.Z)(e,r);return(0,s.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"what-is-postman"},"What is Postman?"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Learn about Postman, a simple yet super valuable tool for testing requests and proxies when building scalable web scrapers.")),(0,s.kt)("hr",null),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://www.postman.com/",target:"_blank",rel:"noopener"},"Postman")," is a powerful collaboration platform for API development and testing. For scraping use-cases, it's mainly used to test requests and proxies (such as checking the response body of a raw request, without loading any additional resources such as JavaScript or CSS). This tool can do much more than that, but we will not be discussing all of its capabilities here. Postman allows us to easily test requests with cookies, headers, and payloads so that we can be entirely sure what the response looks like for a request URL we plan to eventually use in a scraper."),(0,s.kt)("p",null,"The desktop app can be downloaded from its ",(0,s.kt)("a",{parentName:"p",href:"https://www.postman.com/downloads/",target:"_blank",rel:"noopener"},"official download page"),", or the web-app can be used with a simple signup - no download required. If this is your first time working with a tool like Postman, we recommend checking out their ",(0,s.kt)("a",{parentName:"p",href:"https://learning.postman.com/docs/getting-started/introduction/",target:"_blank",rel:"noopener"},"Getting Started guide"),"."),(0,s.kt)("h2",{id:"understanding-the-interface"},"Understanding the interface"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"A basic outline of Postman&#39;s interface",src:a(21628).Z,width:"2880",height:"1800"})),(0,s.kt)("p",null,"There are four main sections to get familiar when starting out with Postman:"),(0,s.kt)("h3",{id:"tabs"},"Tabs"),(0,s.kt)("p",null,"Multiple test endpoints/requests can be opened at one time, each of which will be held within its own tab."),(0,s.kt)("h3",{id:"address-bar"},"Address bar"),(0,s.kt)("p",null,"The section in which you select the type of request to send, the URL of the request, and of course, send the request with the ",(0,s.kt)("strong",{parentName:"p"},"Send Request")," button."),(0,s.kt)("h3",{id:"request-options"},"Request options"),(0,s.kt)("p",null,"This is a very useful section where you can view and edit structured query parameters, as well as specify any authorization parameters, headers, or payloads."),(0,s.kt)("h3",{id:"response"},"Response"),(0,s.kt)("p",null,"After sending a request, the response's body will be found here, along with its cookies and headers. The response body can be viewed in various formats - ",(0,s.kt)("strong",{parentName:"p"},"Pretty-Print"),", ",(0,s.kt)("strong",{parentName:"p"},"Raw"),", or ",(0,s.kt)("strong",{parentName:"p"},"Preview"),"."),(0,s.kt)("h2",{id:"using-proxies"},"Using and testing proxies"),(0,s.kt)("p",null,"In order to use a proxy, the proxy's server and configuration must be provided in the ",(0,s.kt)("strong",{parentName:"p"},"Proxy")," tab in Postman settings."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Proxy configuration in Postman settings",src:a(12039).Z,width:"1362",height:"1154"})),(0,s.kt)("p",null,"After configuring a proxy, the next request sent will attempt to use it. To switch off the proxy, its details don't need to be deleted. The ",(0,s.kt)("strong",{parentName:"p"},"Add a custom proxy configuration")," option in settings just needs to be un-ticked to disable it."),(0,s.kt)("h2",{id:"managing-cookies"},"Managing the cookies cache"),(0,s.kt)("p",null,"Postman keeps a cache of the cookies from all previous responses of a certain domain, which can be a blessing, but also a curse. Sometimes, you might notice that a request is going through just fine with Postman, but that your scraper is being blocked."),(0,s.kt)("p",null,"More often than not in these cases, the reason is because the endpoint being reached requires a valid ",(0,s.kt)("inlineCode",{parentName:"p"},"cookie")," header to be present when sending the request, and because of Postman's cache, it is sending a valid cookie within each request's headers, while your scraper is not. Another reason this may happen is because you are sending Postman requests without a proxy (using your local IP address), while your scraper is using a proxy that could potentially be getting blocked."),(0,s.kt)("p",null,"In order to check whether there are any cookies associated with a certain request are cached in Postman, click on the ",(0,s.kt)("strong",{parentName:"p"},"Cookies")," button in any opened request tab:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Button to view the cached cookies",src:a(61140).Z,width:"2054",height:"174"})),(0,s.kt)("p",null,"Clicking on this button opens a ",(0,s.kt)("strong",{parentName:"p"},"MANAGE COOKIES")," window, where a list of all cached cookies per domain can be seen. If we had been previously sending multiple requests to ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("a",{parentName:"strong",href:"https://github.com/apify",target:"_blank",rel:"noopener"},"https://github.com/apify")),', within this window we would be able to easily find cached cookies associated with github.com. Cookies can also be easily edited (to update some specific values), or deleted (to send a "clean" request without any cached data) here.'),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Managing cookies in Postman with the &quot;MANAGE COOKIES&quot; window",src:a(55591).Z,width:"1356",height:"1320"})),(0,s.kt)("h3",{id:"alternatives"},"Some alternatives to Postman"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://hoppscotch.io/",target:"_blank",rel:"noopener"},"Hoppscotch")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/academy/tools/insomnia",target:null,rel:null},"Insomnia")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://testfully.io/",target:"_blank",rel:"noopener"},"Testfully"))))}h.isMDXComponent=!0},61140:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/postman-cookies-button-25f42087846a7a0d29fdf088eeff5756.png"},21628:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/postman-interface-d0cd1626d8425c1081db491b5625ea06.png"},55591:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/postman-manage-cookies-5f057bee3fff880af0026b1caf8ecdf5.png"},12039:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/postman-proxy-d3a16a565dd112c68a1517a861e7fe00.png"}}]);