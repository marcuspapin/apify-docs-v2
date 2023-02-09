"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[430],{3905:(e,t,s)=>{s.d(t,{Zo:()=>c,kt:()=>u});var a=s(67294);function r(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function n(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,a)}return s}function i(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?n(Object(s),!0).forEach((function(t){r(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):n(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function o(e,t){if(null==e)return{};var s,a,r=function(e,t){if(null==e)return{};var s,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)s=n[a],t.indexOf(s)>=0||(r[s]=e[s]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)s=n[a],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(r[s]=e[s])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),s=t;return e&&(s="function"==typeof e?e(t):i(i({},t),e)),s},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var s=e.components,r=e.mdxType,n=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),h=p(s),u=r,g=h["".concat(l,".").concat(u)]||h[u]||d[u]||n;return s?a.createElement(g,i(i({ref:t},c),{},{components:s})):a.createElement(g,i({ref:t},c))}));function u(e,t){var s=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=s.length,i=new Array(n);i[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<n;p++)i[p]=s[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,s)}h.displayName="MDXCreateElement"},5232:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>d});var a=s(87462),r=s(63366),n=(s(67294),s(3905)),i=["components"],o={title:"Anti-scraping techniques and how to bypass them",menuTitle:"Anti-scraping techniques",description:"Explore anti web scraping, and methods used to bypass blocking, such as IP address rotation and proxies, emulated browser signatures, shared sessions, etc.",sidebar_position:4.2,slug:"/web-scraping-101/anti-scraping-techniques"},l="Anti-scraping techniques",p={unversionedId:"web_scraping_101/anti_scraping_techniques",id:"web_scraping_101/anti_scraping_techniques",title:"Anti-scraping techniques and how to bypass them",description:"Explore anti web scraping, and methods used to bypass blocking, such as IP address rotation and proxies, emulated browser signatures, shared sessions, etc.",source:"@site/sources/platform/web_scraping_101/anti_scraping_techniques.md",sourceDirName:"web_scraping_101",slug:"/web-scraping-101/anti-scraping-techniques",permalink:"/platform/web-scraping-101/anti-scraping-techniques",draft:!1,editUrl:"https://github.com/apify/apify-docs-v2/edit/master/sources/platform/web_scraping_101/anti_scraping_techniques.md",tags:[],version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1675941697,formattedLastUpdatedAt:"Feb 9, 2023",sidebarPosition:4.2,frontMatter:{title:"Anti-scraping techniques and how to bypass them",menuTitle:"Anti-scraping techniques",description:"Explore anti web scraping, and methods used to bypass blocking, such as IP address rotation and proxies, emulated browser signatures, shared sessions, etc.",sidebar_position:4.2,slug:"/web-scraping-101/anti-scraping-techniques"},sidebar:"docs",previous:{title:"Web scraping techniques",permalink:"/platform/web-scraping-101/web-scraping-techniques"},next:{title:"Robotic process automation",permalink:"/platform/robotic-process-automation"}},c={},d=[{value:"IP address-based blocking",id:"ip-address-based-blocking",level:2},{value:"Bypassing IP address-based blocking",id:"bypassing-ip-address-based-blocking",level:3},{value:"IP rate limiting",id:"ip-rate-limiting",level:2},{value:"Bypassing IP rate limiting",id:"bypassing-ip-rate-limiting",level:3},{value:"HTTP request analysis",id:"http-request-analysis",level:2},{value:"Bypassing HTTP request analysis",id:"bypassing-http-request-analysis",level:3},{value:"User behavior analysis",id:"user-behavior-analysis",level:2},{value:"Browser fingerprinting",id:"browser-fingerprinting",level:2},{value:"Combinations of the above techniques",id:"combinations-of-the-above-techniques",level:2},{value:"Reducing blocking with shared IP address emulation",id:"reducing-blocking-with-shared-ip-address-emulation",level:2},{value:"Comparing ways of bypassing scraping protection",id:"comparing-ways-of-bypassing-scraping-protection",level:2}],h={toc:d};function u(e){var t=e.components,s=(0,r.Z)(e,i);return(0,n.kt)("wrapper",(0,a.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"anti-scraping-techniques-and-how-to-bypass-them"},"Anti-scraping techniques"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Explore anti web scraping, and methods used to bypass blocking, such as IP address rotation and proxies, emulated browser signatures, shared sessions, etc.")),(0,n.kt)("hr",null),(0,n.kt)("p",null,"Many websites use anti-scraping techniques to block web scraping bots. Our research shows that there are a number of methods deployed in the field to bypass these defenses."),(0,n.kt)("p",null,"In many cases, we found that very simple changes in approach are commonly used. For example, if a site is blocking based on IP address, switching between different addresses is effective. If a website is analyzing behavior, making that behavior as human-like as possible will confuse the anti-scraping system. If these simpler options fail, there are more complex methods available, such as ",(0,n.kt)("a",{parentName:"p",href:"https://dev.to/apify/bypassing-web-scraping-protection-get-the-most-out-of-your-proxies-with-shared-ip-address-emulation-291c",target:"_blank",rel:"noopener"},"shared IP address emulation")," (also known as ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Session_multiplexing",target:"_blank",rel:"noopener"},"session multiplexing"),")."),(0,n.kt)("h2",{id:"ip-address-based-blocking"},"IP address-based blocking"),(0,n.kt)("p",null,"A popular option some websites use is blocking access based on the IP range your address belongs to. This kind of protection aims to reduce the amount of non-human traffic. For instance, websites will deny access to ",(0,n.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/general/latest/gr/aws-ip-ranges.html",target:"_blank",rel:"noopener"},"ranges of Amazon Web Services's IP addresses")," and other commonly known ranges."),(0,n.kt)("h3",{id:"bypassing-ip-address-based-blocking"},"Bypassing IP address-based blocking"),(0,n.kt)("p",null,"We found that web scraping can work around IP address-based blocking by rotating the IP addresses from which they send the requests to target websites. This can be done by using a pool of ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Proxy_server",target:"_blank",rel:"noopener"},"proxy servers")," by assigning each request another proxy server from the pool and thus making it look like a request coming from another user. The proxies can be selected either randomly or in round-robin fashion."),(0,n.kt)("p",null,"This method's effectiveness depends on various factors, such as the number of web pages that are being scraped, the sophistication of the scraping protection and the number and type of proxies. If too many requests are sent from a single proxy in too short a period of time, the proxy might get \u201cburned\u201d, which means all further requests from it are blocked."),(0,n.kt)("p",null,"Our research determined that, for successful large-scale scraping activities, it is essential to have a sufficient pool of proxies and to time the workload to maximize the scraping throughput while burning proxies."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/platform/proxy",target:null,rel:null},"Apify Proxy")," enables you to enhance your data throughput and access websites from any geographical location by using an extensive pool of datacenter and residential proxies."),(0,n.kt)("h2",{id:"ip-rate-limiting"},"IP rate limiting"),(0,n.kt)("p",null,"When crawling a website, a web scraping bot will typically send many more requests from a single IP address than a human user could generate over the same period. Websites can easily monitor how many requests they receive from a single IP address. If the number of requests exceeds a certain limit, websites can block that IP address or require a ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/CAPTCHA",target:"_blank",rel:"noopener"},"CAPTCHA")," test."),(0,n.kt)("h3",{id:"bypassing-ip-rate-limiting"},"Bypassing IP rate limiting"),(0,n.kt)("p",null,"We found that two ways are used to work around rate limiting. One method is to limit how many pages on a single site are scraped concurrently, with delays possibly even being intentionally introduced (after reaching the original limit). The other method is to use proxy servers and rotate IP addresses after a certain number of requests."),(0,n.kt)("p",null,"Apify actors are designed to reduce the workload on websites being scraped. To lower the concurrency when using the ",(0,n.kt)("a",{parentName:"p",href:"https://docs-v2.apify.com/sdk-js/",target:"_blank",rel:"noopener"},"Apify SDK")," and ",(0,n.kt)("a",{parentName:"p",href:"https://crawlee.dev/api/basic-crawler/interface/BasicCrawlerOptions#maxConcurrency",target:"_blank",rel:"noopener"},"Crawlee"),", just pass the ",(0,n.kt)("inlineCode",{parentName:"p"},"maxConcurrency")," option to your crawler's setup. If you use actors from ",(0,n.kt)("a",{parentName:"p",href:"https://apify.com/store",target:"_blank",rel:"noopener"},"Apify Store"),", you can usually set the maximum concurrency in the actor's input."),(0,n.kt)("h2",{id:"http-request-analysis"},"HTTP request analysis"),(0,n.kt)("p",null,"Each HTTP request sent from a client to a web server contains a lot of hidden information such as\n",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers",target:"_blank",rel:"noopener"},"HTTP headers"),", client IP address,\n",(0,n.kt)("a",{parentName:"p",href:"https://www.websecurity.digicert.com/security-topics/what-is-ssl-tls-https",target:"_blank",rel:"noopener"},"SSL/TLS")," version or a list of supported\n",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Cipher_suite",target:"_blank",rel:"noopener"},"TLS ciphers"),". Even the structure of the HTTP request itself, e.g. the order of the HTTP headers, can tell whether the request comes from a real web browser or a script."),(0,n.kt)("p",null,"Websites can check for these signals and block requests that do not have the signature of a known web browser or show a CAPTCHA. Our research shows that this kind of protection is commonly bypassed by the use of only plain HTTP requests, because the protection does not collect any window attributes or evaluate any JavaScript code."),(0,n.kt)("h3",{id:"bypassing-http-request-analysis"},"Bypassing HTTP request analysis"),(0,n.kt)("p",null,"A straightforward method frequently used to circumvent HTTP request analysis is to use a real web browser, such as ",(0,n.kt)("a",{parentName:"p",href:"https://developers.google.com/web/updates/2017/04/headless-chrome",target:"_blank",rel:"noopener"},"headless Chrome"),", to emulate browser HTTP signatures. However, this is inefficient, as web browsers consume a lot of system resources and are generally slow."),(0,n.kt)("p",null,"A more efficient method used is to emulate browser HTTP request signatures even when using a low-level HTTP request library. This makes the scripted HTTP request look like a real web browser, but is much faster and more efficient. Note that we found that this method only works in situations where the page content is served directly in the first HTML response and not loaded later using ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Ajax_(programming)",target:"_blank",rel:"noopener"},"AJAX"),"."),(0,n.kt)("p",null,"To test this, we used ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apify/got-scraping",target:"_blank",rel:"noopener"},"got-scraping"),", which is sending browser-like requests out of the box."),(0,n.kt)("h2",{id:"user-behavior-analysis"},"User behavior analysis"),(0,n.kt)("p",null,"Rather than analyzing and reacting to client requests in real time, websites can collect user behavior data over longer periods and then react to it only when sufficient information is available."),(0,n.kt)("p",null,"Such data can contain the order in which pages are visited, how long the user stays on each page, mouse movements or even how fast forms are filled in. If enough evidence indicates that the user\u2019s behavior is not human, websites can block the client IP address or serve a CAPTCHA."),(0,n.kt)("h2",{id:"browser-fingerprinting"},"Browser fingerprinting"),(0,n.kt)("p",null,"Websites can also use various techniques to test whether a client's web browser is being used by a human user or a robot, and even identify repeated visits of the same web browser. This is known as ",(0,n.kt)("a",{parentName:"p",href:"https://pixelprivacy.com/resources/browser-fingerprinting/",target:"_blank",rel:"noopener"},"browser fingerprinting"),", and it can range from very primitive JavaScript challenges to state-of-the-art browser integrity tests and behavioral analyses."),(0,n.kt)("p",null,"The tests look for things like information about your browser type and version, operating system, installed browser extensions, available fonts, timezone, among others. Combined, all this information forms a browser's \u201cfingerprint\u201d."),(0,n.kt)("p",null,"While this information may seem quite generic, ",(0,n.kt)("a",{parentName:"p",href:"https://panopticlick.eff.org/",target:"_blank",rel:"noopener"},"Panopticlick")," found that on average only ",(0,n.kt)("a",{parentName:"p",href:"https://panopticlick.eff.org/static/browser-uniqueness.pdf",target:"_blank",rel:"noopener"},"1 in 286,777")," browsers will have the same fingerprint as you."),(0,n.kt)("h2",{id:"combinations-of-the-above-techniques"},"Combinations of the above techniques"),(0,n.kt)("p",null,"To make things complicated, websites often employ various scraping protection combinations such as IP address-based blocking and HTTP request analysis."),(0,n.kt)("h2",{id:"reducing-blocking-with-shared-ip-address-emulation"},"Reducing blocking with shared IP address emulation"),(0,n.kt)("p",null,"IP address rotation and emulation of browser HTTP signatures can be effective for many web scraping tasks, but large-scale crawls will get blocked. Using more proxies is a solution to this, but that can be expensive."),(0,n.kt)("p",null,"Shared IP address emulation can dramatically extend the effectiveness of scraping and multiply the number of pages that can be fetched. The technique relies on websites knowing that many different users can be behind a single IP address."),(0,n.kt)("p",null,"For example, requests from mobile devices are usually only routed through a handful of IP addresses, while users behind a single corporate firewall might all have a single IP address. By emulating and managing these user sessions per IP address, we found that it is possible to prevent websites from aggressive blocking."),(0,n.kt)("p",null,"To make it work, a single user session has to always be routed via the same IP address. A website can identify such user sessions based on cookies, authentication tokens or a browser HTTP signature/fingerprint."),(0,n.kt)("p",null,"Our research into this was assisted by the ",(0,n.kt)("a",{parentName:"p",href:"https://docs-v2.apify.com/sdk-js",target:"_blank",rel:"noopener"},"Crawlee"),"'s ",(0,n.kt)("a",{parentName:"p",href:"https://crawlee.dev/api/core/class/SessionPool",target:"_blank",rel:"noopener"},(0,n.kt)("inlineCode",{parentName:"a"},"SessionPool"))," class. This can be added to other Apify tools such as ",(0,n.kt)("a",{parentName:"p",href:"/platform/actors",target:null,rel:null},"actors")," or ",(0,n.kt)("a",{parentName:"p",href:"/platform/proxy",target:null,rel:null},"proxy"),", but it also works outside the Apify ecosystem."),(0,n.kt)("h2",{id:"comparing-ways-of-bypassing-scraping-protection"},"Comparing ways of bypassing scraping protection"),(0,n.kt)("p",null,"In a ",(0,n.kt)("a",{parentName:"p",href:"https://dev.to/apify/bypassing-web-scraping-protection-get-the-most-out-of-your-proxies-with-shared-ip-address-emulation-291c",target:"_blank",rel:"noopener"},"recent experiment"),", we found session emulation to be at least twice as effective as plain ",(0,n.kt)("a",{parentName:"p",href:"#bypassing-ip-address-based-blocking",target:null,rel:null},"IP address rotation"),"."))}u.isMDXComponent=!0}}]);