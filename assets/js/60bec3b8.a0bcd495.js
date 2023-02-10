"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[7253],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,y=u["".concat(l,".").concat(m)]||u[m]||c[m]||o;return r?n.createElement(y,i(i({ref:t},d),{},{components:r})):n.createElement(y,i({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},38769:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],s={title:"Residential proxy",description:"Achieve a higher level of anonymity using IP addresses from human users. Access a wider pool of proxies and reduce blocking by websites' anti-scraping measures.",sidebar_position:10.4,slug:"/proxy/residential-proxy"},l="Residential proxy",p={unversionedId:"proxy/residential_proxy/index",id:"proxy/residential_proxy/index",title:"Residential proxy",description:"Achieve a higher level of anonymity using IP addresses from human users. Access a wider pool of proxies and reduce blocking by websites' anti-scraping measures.",source:"@site/sources/platform/proxy/residential_proxy/index.md",sourceDirName:"proxy/residential_proxy",slug:"/proxy/residential-proxy",permalink:"/platform/proxy/residential-proxy",draft:!1,editUrl:"https://github.com/apify/apify-docs-v2/edit/master/sources/platform/proxy/residential_proxy/index.md",tags:[],version:"current",lastUpdatedBy:"Jind\u0159ich B\xe4r",lastUpdatedAt:1676040579,formattedLastUpdatedAt:"Feb 10, 2023",sidebarPosition:10.4,frontMatter:{title:"Residential proxy",description:"Achieve a higher level of anonymity using IP addresses from human users. Access a wider pool of proxies and reduce blocking by websites' anti-scraping measures.",sidebar_position:10.4,slug:"/proxy/residential-proxy"},sidebar:"docs",previous:{title:"Examples",permalink:"/platform/proxy/datacenter-proxy/examples"},next:{title:"Tips and tricks",permalink:"/platform/proxy/residential-proxy/tips-and-tricks"}},d={},c=[{value:"Limitations",id:"limitations",level:2},{value:"Restricted residential proxy",id:"restricted-residential-proxy",level:3},{value:"Unrestricted residential proxy",id:"unrestricted-residential-proxy",level:3},{value:"Connecting to residential proxy",id:"connecting-to-residential-proxy",level:2},{value:"How to set a proxy group",id:"how-to-set-a-proxy-group",level:3},{value:"How to set a proxy country",id:"how-to-set-a-proxy-country",level:3},{value:"Username examples",id:"username-examples",level:3},{value:"Session persistence",id:"session-persistence",level:2}],u={toc:c};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"residential-proxy"},"Residential proxy"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Achieve a higher level of anonymity using IP addresses from human users. Access a wider pool of proxies and reduce blocking by websites' anti-scraping measures.")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Residential proxies use IP addresses assigned by Internet Service Providers to the homes and offices of actual users. Unlike ",(0,o.kt)("a",{parentName:"p",href:"/platform/proxy/datacenter-proxy",target:null,rel:null},"datacenter proxies"),", traffic from residential proxies is indistinguishable from that of legitimate users."),(0,o.kt)("p",null,"This solution allows you to access a larger pool of servers than datacenter proxy. This makes it a better option in cases when you need a large number of different IP addresses."),(0,o.kt)("p",null,"Residential proxies support ",(0,o.kt)("a",{parentName:"p",href:"/platform/proxy",target:null,rel:null},"IP address rotation")," and ",(0,o.kt)("a",{parentName:"p",href:"#session-persistence",target:null,rel:null},"sessions"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Pricing is based on data traffic"),". It is measured for each connection made and displayed on your ",(0,o.kt)("a",{parentName:"p",href:"https://console.apify.com",target:"_blank",rel:"noopener"},"dashboard")," in the Apify Console."),(0,o.kt)("h2",{id:"limitations"},"Limitations"),(0,o.kt)("p",null,"Apify provides 2 levels of residential proxy:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Level"),(0,o.kt)("th",{parentName:"tr",align:null},"Availability"),(0,o.kt)("th",{parentName:"tr",align:null},"Supported domains"),(0,o.kt)("th",{parentName:"tr",align:null},"Other limitations"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Restricted residential proxy"),(0,o.kt)("td",{parentName:"tr",align:null},"Every user"),(0,o.kt)("td",{parentName:"tr",align:null},">500 domains"),(0,o.kt)("td",{parentName:"tr",align:null},"Requires ",(0,o.kt)("a",{parentName:"td",href:"https://crypto.stanford.edu/ssl-mitm/",target:"_blank",rel:"noopener"},"man-in-the-middle")," access for the connection")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Unrestricted residential proxy"),(0,o.kt)("td",{parentName:"tr",align:null},"Enterprise level accounts"),(0,o.kt)("td",{parentName:"tr",align:null},"Entire web"),(0,o.kt)("td",{parentName:"tr",align:null},"None")))),(0,o.kt)("h3",{id:"restricted-residential-proxy"},"Restricted residential proxy"),(0,o.kt)("p",null,"Restricted residential proxy is available for all the users with some conditions."),(0,o.kt)("p",null,"Firstly, restricted residential proxy supports only certain domains and paths. The pool of 500 domains is increased every month and covers the most frequent use cases.\nAny traffic outside this pool of domains will go through ",(0,o.kt)("a",{parentName:"p",href:"/platform/proxy/datacenter-proxy",target:null,rel:null},"datacenter proxy"),"."),(0,o.kt)("p",null,"The second limitation is that restricted residential proxy uses the man-in-the-middle system to monitor traffic\nand activities and so requires acceptance of an ",(0,o.kt)("a",{parentName:"p",href:"https://apify.com/restricted-residential-proxy-cert.crt",target:"_blank",rel:"noopener"},"SSL certificate"),".\nThis is automatically handled by ",(0,o.kt)("a",{parentName:"p",href:"https://docs-v2.apify.com/sdk-js/",target:"_blank",rel:"noopener"},"Apify SDK")," and ",(0,o.kt)("a",{parentName:"p",href:"https://crawlee.dev/",target:"_blank",rel:"noopener"},"Crawlee")," for both Puppeteer and Playwright. To manually check if a connection is using a man-in-the-middle connection, ",(0,o.kt)("a",{parentName:"p",href:"http://proxy.apify.com",target:"_blank",rel:"noopener"},"head over to the Apify Proxy page"),"."),(0,o.kt)("h3",{id:"unrestricted-residential-proxy"},"Unrestricted residential proxy"),(0,o.kt)("p",null,"Unrestricted residential proxy neither limits the domains you can access nor requires a man-in-the-middle access to traffic.\nHowever, it's provided only to enterprise-level accounts on a per-request basis and under an additional contract."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://apify.com/contact",target:"_blank",rel:"noopener"},"Contact us")," if you would like to use the unrestricted residential proxy or for more information."),(0,o.kt)("h2",{id:"connecting-to-residential-proxy"},"Connecting to residential proxy"),(0,o.kt)("p",null,"Connecting to residential proxy works the same way as ",(0,o.kt)("a",{parentName:"p",href:"/platform/proxy/datacenter-proxy/examples",target:null,rel:null},"datacenter proxy"),", with two differences."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"groups")," ",(0,o.kt)("a",{parentName:"p",href:"/platform/proxy/connection-settings",target:null,rel:null},"username parameter")," should always specify ",(0,o.kt)("inlineCode",{parentName:"p"},"RESIDENTIAL"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"You can specify the country in which you want your proxies to be."))),(0,o.kt)("h3",{id:"how-to-set-a-proxy-group"},"How to set a proxy group"),(0,o.kt)("p",null,"When using ",(0,o.kt)("a",{parentName:"p",href:"/platform/proxy/datacenter-proxy/examples",target:null,rel:null},"standard libraries and languages"),", specify the ",(0,o.kt)("inlineCode",{parentName:"p"},"groups")," parameter in the ","[username]","({{@link proxy/connection_settings.md#username-parameters}}) as ",(0,o.kt)("inlineCode",{parentName:"p"},"groups-RESIDENTIAL"),"."),(0,o.kt)("p",null,"For example, your ",(0,o.kt)("strong",{parentName:"p"},"proxy URL")," when using the ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/got-scraping",target:"_blank",rel:"noopener"},"got-scraping")," JavaScript library will look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const proxyUrl = 'http://groups-RESIDENTIAL:<YOUR_PROXY_PASSWORD>@proxy.apify.com:8000';\n")),(0,o.kt)("p",null,"In the ",(0,o.kt)("a",{parentName:"p",href:"https://docs-v2.apify.com/sdk-js",target:"_blank",rel:"noopener"},"Apify SDK"),", you set the ",(0,o.kt)("strong",{parentName:"p"},"group")," in your ",(0,o.kt)("a",{parentName:"p",href:"https://docs-v2.apify.com/sdk-js/api/apify/interface/ProxyConfigurationOptions#groups",target:"_blank",rel:"noopener"},"proxy configuration"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { Actor } from 'apify';\n\nawait Actor.init();\n// ...\nconst proxyConfiguration = await Actor.createProxyConfiguration({\n    groups: ['RESIDENTIAL'],\n});\n// ...\nawait Actor.exit();\n")),(0,o.kt)("h3",{id:"how-to-set-a-proxy-country"},"How to set a proxy country"),(0,o.kt)("p",null,"When using ",(0,o.kt)("a",{parentName:"p",href:"/platform/proxy/datacenter-proxy/examples",target:null,rel:null},"standard libraries and languages"),", specify the ",(0,o.kt)("inlineCode",{parentName:"p"},"country")," parameter in the ","[username]","({{@link proxy/connection_settings.md#username-parameters}}) as ",(0,o.kt)("inlineCode",{parentName:"p"},"country-COUNTRY-CODE"),"."),(0,o.kt)("p",null,"For example, your ",(0,o.kt)("inlineCode",{parentName:"p"},"username")," parameter when using ",(0,o.kt)("a",{parentName:"p",href:"https://docs.python.org/3/",target:"_blank",rel:"noopener"},"Python 3")," will look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'username = "groups-RESIDENTIAL,session-my_session,country-JP"\n')),(0,o.kt)("p",null,"In the ",(0,o.kt)("a",{parentName:"p",href:"https://docs-v2.apify.com/sdk-js",target:"_blank",rel:"noopener"},"Apify SDK"),", you set the country in your ",(0,o.kt)("a",{parentName:"p",href:"https://docs-v2.apify.com/sdk-js/api/apify/interface/ProxyConfigurationOptions#countryCode",target:"_blank",rel:"noopener"},"proxy configuration")," using two-letter ",(0,o.kt)("a",{parentName:"p",href:"https://laendercode.net/en/2-letter-list.html",target:"_blank",rel:"noopener"},"country codes"),". Specify the groups as ",(0,o.kt)("inlineCode",{parentName:"p"},"RESIDENTIAL"),", then add a ",(0,o.kt)("inlineCode",{parentName:"p"},"countryCode")," parameter."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { Actor } from 'apify';\n\nawait Actor.init();\n// ...\nconst proxyConfiguration = await Actor.createProxyConfiguration({\n    groups: ['RESIDENTIAL'],\n    countryCode: 'FR',\n});\n// ...\nawait Actor.exit();\n")),(0,o.kt)("h3",{id:"username-examples"},"Username examples"),(0,o.kt)("p",null,"Use randomly allocated IP addresses from all available countries:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"groups-RESIDENTIAL\n")),(0,o.kt)("p",null,"A random proxy from the US:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"groups-RESIDENTIAL,country-US\n")),(0,o.kt)("p",null,"Set a session and select an IP address from the United States:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"groups-RESIDENTIAL,session-my_session_1,country-US\n")),(0,o.kt)("h2",{id:"session-persistence"},"Session persistence"),(0,o.kt)("p",null,"When using residential proxy with the ",(0,o.kt)("inlineCode",{parentName:"p"},"session")," ",(0,o.kt)("a",{parentName:"p",href:"/platform/proxy",target:null,rel:null},"parameter")," set in the ","[username]","({{@link proxy/connection_settings.md#username-parameters}}), a single IP address is assigned to the ",(0,o.kt)("strong",{parentName:"p"},"session ID")," provided after you make the first request."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Session IDs represent IP addresses. Therefore, you can manage the IP addresses you use by managing sessions.")," [",(0,o.kt)("a",{parentName:"p",href:"/platform/proxy",target:null,rel:null},"More info"),"]"),(0,o.kt)("p",null,"This IP/session ID combination is persisted for 1 minute. Each subsequent request resets the expiration time to 1 minute."),(0,o.kt)("p",null,"If the proxy server becomes unresponsive or the session expires, a new IP address is selected for the next request."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If you really need to persist the same session, you can try sending some data using that session (e.g. every 20 seconds) to keep it alive.",(0,o.kt)("br",null),"\nProviding the connection is not interrupted, this will let you keep the IP address for longer.")),(0,o.kt)("p",null,"To learn more about ",(0,o.kt)("a",{parentName:"p",href:"/platform/proxy",target:null,rel:null},"sessions")," and ","[IP address rotation]","({{@link proxy.md#ip-address-rotation}}), see the proxy ","[overview page]","({{@link proxy.md}})."))}m.isMDXComponent=!0}}]);