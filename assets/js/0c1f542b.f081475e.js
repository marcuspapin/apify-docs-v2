"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[2331],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(r),f=i,y=u["".concat(p,".").concat(f)]||u[f]||d[f]||a;return r?n.createElement(y,o(o({ref:t},c),{},{components:r})):n.createElement(y,o({ref:t},c))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},57031:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>f,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var n=r(87462),i=r(63366),a=(r(67294),r(3905)),o=["components"],s={title:"Tips and tricks",description:"Helpful tips for using your application with Apify's residential proxies. Control traffic, deal with interrupted connections and manage expenses.",slug:"/proxy/residential-proxy/tips-and-tricks"},p="Tips and tricks",l={unversionedId:"proxy/residential_proxy/tips_and_tricks",id:"proxy/residential_proxy/tips_and_tricks",title:"Tips and tricks",description:"Helpful tips for using your application with Apify's residential proxies. Control traffic, deal with interrupted connections and manage expenses.",source:"@site/sources/platform/proxy/residential_proxy/tips_and_tricks.md",sourceDirName:"proxy/residential_proxy",slug:"/proxy/residential-proxy/tips-and-tricks",permalink:"/platform/proxy/residential-proxy/tips-and-tricks",draft:!1,editUrl:"https://github.com/apify/apify-docs-v2/edit/master/sources/platform/proxy/residential_proxy/tips_and_tricks.md",tags:[],version:"current",lastUpdatedBy:"Jan \u010curn",lastUpdatedAt:1677248878,formattedLastUpdatedAt:"Feb 24, 2023",frontMatter:{title:"Tips and tricks",description:"Helpful tips for using your application with Apify's residential proxies. Control traffic, deal with interrupted connections and manage expenses.",slug:"/proxy/residential-proxy/tips-and-tricks"},sidebar:"docs",previous:{title:"Residential proxy",permalink:"/platform/proxy/residential-proxy"},next:{title:"Google SERP proxy",permalink:"/platform/proxy/google-serp-proxy"}},c={},d=[{value:"Control traffic used by automated browsers",id:"control-traffic-used-by-automated-browsers",level:2},{value:"Connected proxy speed variation",id:"connected-proxy-speed-variation",level:2},{value:"Connection interruptions",id:"connection-interruptions",level:2}],u={toc:d};function f(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"tips-and-tricks"},"Tips and tricks"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Helpful tips for using your application with Apify's residential proxies. Control traffic, deal with interrupted connections and manage expenses.")),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/platform/proxy/residential-proxy",target:null,rel:null},"Residential")," proxies are less predictable than ",(0,a.kt)("a",{parentName:"p",href:"/platform/proxy/datacenter-proxy",target:null,rel:null},"datacenter")," proxies and are priced differently (by number of IPs vs traffic used). Because of this, there are some important things to consider before using residential proxy in your solutions."),(0,a.kt)("h2",{id:"control-traffic-used-by-automated-browsers"},"Control traffic used by automated browsers"),(0,a.kt)("p",null,"Residential proxy is priced by data traffic used. Thus, it's easy to quickly use up all your prepaid traffic. In particular, when accessing websites with large files loaded on every page."),(0,a.kt)("p",null,"To reduce your traffic use, we recommend using the ",(0,a.kt)("inlineCode",{parentName:"p"},"blockRequests()")," function of ",(0,a.kt)("a",{parentName:"p",href:"https://crawlee.dev/api/playwright-crawler/namespace/playwrightUtils#blockRequests",target:"_blank",rel:"noopener"},(0,a.kt)("inlineCode",{parentName:"a"},"playwrightUtils")),"/",(0,a.kt)("a",{parentName:"p",href:"https://crawlee.dev/api/puppeteer-crawler/namespace/puppeteerUtils#blockRequests",target:"_blank",rel:"noopener"},(0,a.kt)("inlineCode",{parentName:"a"},"puppeteerUtils"))," (depending on the library used)."),(0,a.kt)("h2",{id:"connected-proxy-speed-variation"},"Connected proxy speed variation"),(0,a.kt)("p",null,"Each host on the residential proxy network uses a different device. They have different network speeds and different latencies. This means that requests made with one ",(0,a.kt)("a",{parentName:"p",href:"/platform/proxy",target:null,rel:null},"session")," can be extremely fast, while another request with a different session can be extremely slow. The difference can range from a few milliseconds to a few seconds."),(0,a.kt)("p",null,"If your solution requires quickly loaded content, the best option is to set a ",(0,a.kt)("a",{parentName:"p",href:"/platform/proxy",target:null,rel:null},"session"),", try a small request and see if the response time is acceptable. If it is, you can use this session for other requests. Otherwise, repeat the attempt with a different session."),(0,a.kt)("h2",{id:"connection-interruptions"},"Connection interruptions"),(0,a.kt)("p",null,"While sessions are persistent, they can be destroyed at any time if the host devices are turned off or disconnected."),(0,a.kt)("p",null,"For this problem there is no easy solution. One option is to not use residential proxy for larger requests (and use ",(0,a.kt)("a",{parentName:"p",href:"/platform/proxy/datacenter-proxy",target:null,rel:null},"datacenter")," proxy instead). If you have no other choice, expect that interruptions might happen and write your solution with this in mind."))}f.isMDXComponent=!0}}]);