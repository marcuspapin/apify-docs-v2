"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[4170],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(r),m=o,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||a;return r?n.createElement(f,s(s({ref:t},u),{},{components:r})):n.createElement(f,s({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var p=2;p<a;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},54192:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),s=["components"],i={title:"Proxy",description:"Learn to anonymously access websites in scraping/automation jobs. Improve data outputs and efficiency of bots, and access websites from various geographies.",sidebar_position:10,category:"platform",slug:"/proxy"},l="[](./proxy) Proxy",p={unversionedId:"proxy/index",id:"proxy/index",title:"Proxy",description:"Learn to anonymously access websites in scraping/automation jobs. Improve data outputs and efficiency of bots, and access websites from various geographies.",source:"@site/sources/platform/proxy/index.md",sourceDirName:"proxy",slug:"/proxy",permalink:"/platform/proxy",draft:!1,tags:[],version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1670588658,formattedLastUpdatedAt:"Dec 9, 2022",sidebarPosition:10,frontMatter:{title:"Proxy",description:"Learn to anonymously access websites in scraping/automation jobs. Improve data outputs and efficiency of bots, and access websites from various geographies.",sidebar_position:10,category:"platform",slug:"/proxy"},sidebar:"defaultSidebar",previous:{title:"Request queue",permalink:"/platform/storage/request-queue"},next:{title:"Connection settings",permalink:"/platform/proxy/connection-settings"}},u={},c=[{value:" Our proxies",id:"-our-proxies",level:2},{value:"Using your own proxies",id:"using-your-own-proxies",level:2},{value:" Custom proxies in console",id:"-custom-proxies-in-console",level:3},{value:" Custom proxies in SDK",id:"-custom-proxies-in-sdk",level:3},{value:" IP address rotation",id:"-ip-address-rotation",level:2},{value:" Sessions",id:"-sessions",level:2},{value:" Session persistence",id:"-session-persistence",level:3},{value:" Dead proxies",id:"-dead-proxies",level:2}],d={toc:c};function m(e){var t=e.components,i=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"-proxy"},(0,a.kt)("a",{parentName:"h1",href:"./proxy",target:null,rel:null})," Proxy"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://apify.com/proxy",target:"_blank",rel:"noopener"},"Apify Proxy")," allows you to change your IP address when web scraping to reduce the chance of being ",(0,a.kt)("a",{parentName:"p",href:"/platform/web-scraping-101/anti-scraping-techniques",target:null,rel:null},"blocked")," because of your geographical location."),(0,a.kt)("p",null,"You can use proxies in your ",(0,a.kt)("a",{parentName:"p",href:"../../academy/getting_started/actors.md",target:null,rel:null},"actors")," or any other application that supports HTTP, HTTPS, and FTP protocols. Apify Proxy monitors the health of your IP pool and intelligently ",(0,a.kt)("a",{parentName:"p",href:"#ip-address-rotation",target:null,rel:null},"rotates addresses")," to prevent IP address-based blocking."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"You can view your proxy settings and password on the ",(0,a.kt)("a",{parentName:"strong",href:"https://console.apify.com/proxy",target:"_blank",rel:"noopener"},"Proxy")," page in the Apify Console.")),(0,a.kt)("h2",{id:"-our-proxies"},(0,a.kt)("a",{parentName:"h2",href:"#our-proxies",target:null,rel:null})," Our proxies"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"./datacenter_proxy.md",target:null,rel:null},"Datacenter proxy"),"]"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"./residential_proxy.md",target:null,rel:null},"Residential proxy"),"]"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"./google_serp_proxy.md",target:null,rel:null},"Google SERP proxy"),"]"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"For pricing information, visit ",(0,a.kt)("a",{parentName:"strong",href:"https://apify.com/proxy",target:"_blank",rel:"noopener"},"apify.com/proxy"),".")),(0,a.kt)("h2",{id:"using-your-own-proxies"},"Using your own proxies"),(0,a.kt)("p",null,"In addition to our proxies, you can use your own both in Apify Console and SDK."),(0,a.kt)("h3",{id:"-custom-proxies-in-console"},(0,a.kt)("a",{parentName:"h3",href:"#console",target:null,rel:null})," Custom proxies in console"),(0,a.kt)("p",null,"To use your own proxies with Apify Console, in your actor's ",(0,a.kt)("strong",{parentName:"p"},"Input and options")," tab, scroll down and open the ",(0,a.kt)("strong",{parentName:"p"},"Proxy and browser configuration")," section. Enter your proxy URLs, and you're good to go."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Using custom proxy in Apify Console",src:r(82912).Z,width:"817",height:"251"})),(0,a.kt)("h3",{id:"-custom-proxies-in-sdk"},(0,a.kt)("a",{parentName:"h3",href:"#SDK",target:null,rel:null})," Custom proxies in SDK"),(0,a.kt)("p",null,"In the Apify SDK, use the ",(0,a.kt)("inlineCode",{parentName:"p"},"proxyConfiguration.newUrl(sessionId)")," command to add your custom proxy URLs to the proxy configuration. See the ",(0,a.kt)("a",{parentName:"p",href:"https://sdk.apify.com/api/apify/class/ProxyConfiguration#newUrl",target:null,rel:null},"SDK docs")," for more details."),(0,a.kt)("h2",{id:"-ip-address-rotation"},(0,a.kt)("a",{parentName:"h2",href:"#ip-address-rotation",target:null,rel:null})," IP address rotation"),(0,a.kt)("p",null,"Web scrapers can rotate the IP addresses they use to access websites. They assign each request a different IP address, which makes it appear like they are all coming from different users. This greatly enhances performance and data throughout."),(0,a.kt)("p",null,"Depending on whether you use a ",(0,a.kt)("a",{parentName:"p",href:"https://apify.com/apify/web-scraper",target:"_blank",rel:"noopener"},"browser")," or ",(0,a.kt)("a",{parentName:"p",href:"https://apify.com/apify/cheerio-scraper",target:"_blank",rel:"noopener"},"HTTP requests")," for your scraping jobs, IP address rotation works differently."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Browser \u2013 a different IP address is used for each browser."),(0,a.kt)("li",{parentName:"ul"},"HTTP request \u2013 a different IP address is used for each request.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"You can use ",(0,a.kt)("a",{parentName:"strong",href:"#sessions",target:null,rel:null},"sessions")," to manage how you rotate and ",(0,a.kt)("a",{parentName:"strong",href:"#session-persistence",target:null,rel:null},"persist")," IP addresses.")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/platform/web-scraping-101/anti-scraping-techniques",target:null,rel:null},"Click here")," to learn more about IP address rotation and our findings on how blocking works."),(0,a.kt)("h2",{id:"-sessions"},(0,a.kt)("a",{parentName:"h2",href:"#sessions",target:null,rel:null})," Sessions"),(0,a.kt)("p",null,"Sessions allow you to use the same IP address for multiple connections."),(0,a.kt)("p",null,"To set a new session, pass the ",(0,a.kt)("a",{parentName:"p",href:"/platform/proxy/connection-settings",target:null,rel:null},(0,a.kt)("inlineCode",{parentName:"a"},"session")),", pass that same session ID in the username field."),(0,a.kt)("p",null,"The created session will store information such as cookies and can be used to generate ",(0,a.kt)("a",{parentName:"p",href:"https://pixelprivacy.com/resources/browser-fingerprinting/",target:"_blank",rel:"noopener"},"browser fingerprints"),". You can also assign custom user data such as authorization tokens and specific headers."),(0,a.kt)("p",null,"Sessions are available for ",(0,a.kt)("a",{parentName:"p",href:"./datacenter_proxy.md",target:null,rel:null},"datacenter")," proxies."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"This parameter is optional"),". By default, each proxied request is assigned a randomly picked least used IP address."),(0,a.kt)("h3",{id:"-session-persistence"},(0,a.kt)("a",{parentName:"h3",href:"#session-persistence",target:null,rel:null})," Session persistence"),(0,a.kt)("p",null,"You can persist your sessions (use the same IP address) by setting the ",(0,a.kt)("inlineCode",{parentName:"p"},"session")," parameter in the ",(0,a.kt)("inlineCode",{parentName:"p"},"username")," ",(0,a.kt)("a",{parentName:"p",href:"/platform/proxy/connection-settings",target:null,rel:null},"field"),". This assigns a single IP address to a ",(0,a.kt)("strong",{parentName:"p"},"session ID")," after you make the first request."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Session IDs represent IP addresses. Therefore, you can manage the IP addresses you use by managing sessions.")," In cases where you need to keep the same session (e.g. when you need to log in to a website), it is best to keep the same proxy. By assigning an IP address to a ",(0,a.kt)("strong",{parentName:"p"},"session ID"),", you can use that IP for every request you make."),(0,a.kt)("p",null,"For datacenter proxies, a session persists for ",(0,a.kt)("strong",{parentName:"p"},"26 hours")," (",(0,a.kt)("a",{parentName:"p",href:"./datacenter_proxy.md",target:null,rel:null},"more info"),"). Using a session resets its expiry timer."),(0,a.kt)("p",null,"Google SERP proxies do not support sessions."),(0,a.kt)("h2",{id:"-dead-proxies"},(0,a.kt)("a",{parentName:"h2",href:"#dead-proxies",target:null,rel:null})," Dead proxies"),(0,a.kt)("p",null,"Our health check performs an HTTP and HTTPS request with each proxy server every few hours. If a server fails both requests 3 times in a row, it's marked as dead and all user sessions with this server are discarded."),(0,a.kt)("p",null,"Banned proxies are not considered dead, since they become usable after a while."))}m.isMDXComponent=!0},82912:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/proxy-custom-3fa0ba6561715d61ba54764987e9b026.webp"}}]);