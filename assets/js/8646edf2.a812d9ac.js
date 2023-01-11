"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[432],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>h});var n=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(o),h=a,g=d["".concat(l,".").concat(h)]||d[h]||u[h]||r;return o?n.createElement(g,i(i({ref:t},p),{},{components:o})):n.createElement(g,i({ref:t},p))}));function h(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<r;c++)i[c]=o[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},18667:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var n=o(87462),a=o(63366),r=(o(67294),o(3905)),i=["components"],s={title:"Geolocation",description:"Learn about the geolocation techniques to determine where requests are coming from, and a bit about how to avoid being blocked based on geolocation.",sidebar_position:3,slug:"/anti-scraping/techniques/geolocation"},l="[](#geolocation) Geolocation",c={unversionedId:"anti_scraping/techniques/geolocation",id:"anti_scraping/techniques/geolocation",title:"Geolocation",description:"Learn about the geolocation techniques to determine where requests are coming from, and a bit about how to avoid being blocked based on geolocation.",source:"@site/sources/academy/anti_scraping/techniques/geolocation.md",sourceDirName:"anti_scraping/techniques",slug:"/anti-scraping/techniques/geolocation",permalink:"/academy/anti-scraping/techniques/geolocation",draft:!1,tags:[],version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1673462256,formattedLastUpdatedAt:"Jan 11, 2023",sidebarPosition:3,frontMatter:{title:"Geolocation",description:"Learn about the geolocation techniques to determine where requests are coming from, and a bit about how to avoid being blocked based on geolocation.",sidebar_position:3,slug:"/anti-scraping/techniques/geolocation"},sidebar:"defaultSidebar",previous:{title:"Fingerprinting",permalink:"/academy/anti-scraping/techniques/fingerprinting"},next:{title:"Firewalls",permalink:"/academy/anti-scraping/techniques/firewalls"}},p={},u=[{value:" Cookies &amp; headers",id:"-cookies--headers",level:2},{value:" IP address",id:"-ip-address",level:2},{value:" Override/emulate geolocation when using a browser-based scraper",id:"-overrideemulate-geolocation-when-using-a-browser-based-scraper",level:2}],d={toc:u};function h(e){var t=e.components,o=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"-geolocation"},(0,r.kt)("a",{parentName:"h1",href:"#geolocation",target:null,rel:null})," Geolocation"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Learn about the geolocation techniques to determine where requests are coming from, and a bit about how to avoid being blocked based on geolocation.")),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Geolocation is yet another way websites can detect and block access or show limited data. Other than by using the ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API",target:"_blank",rel:"noopener"},"Geolocation API")," (which requires user permission in order to receive location data), there two main ways that websites geolocate a user (or bot) visiting it."),(0,r.kt)("h2",{id:"-cookies--headers"},(0,r.kt)("a",{parentName:"h2",href:"#cookies-headers",target:null,rel:null})," Cookies & headers"),(0,r.kt)("p",null,"Certain websites might use certain location-specific/language-specific ",(0,r.kt)("a",{parentName:"p",href:"/academy/concepts/http-headers",target:null,rel:null},"headers")," to geolocate a user. Some examples of these headers are ",(0,r.kt)("inlineCode",{parentName:"p"},"Accept-Language")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"CloudFront-Viewer-Country")," (which is a custom HTTP header from ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-cloudfront-headers.html",target:"_blank",rel:"noopener"},"CloudFront"),")."),(0,r.kt)("p",null,"On targets which are just utilizing cookies and headers to identify the location from which a request is coming from, it is pretty straightforward to make requests which appear they are coming from somewhere else."),(0,r.kt)("h2",{id:"-ip-address"},(0,r.kt)("a",{parentName:"h2",href:"#ip-address",target:null,rel:null})," IP address"),(0,r.kt)("p",null,"The oldest (and still most common) way of geolocating is based on the IP address used to make the request. Sometimes, country-specific sites block themselves from being accessed from any other country (some Chinese, Indian, Israeli, and Japanese websites do this)."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/academy/anti-scraping/mitigation/proxies",target:null,rel:null},"Proxies"),"."),(0,r.kt)("h2",{id:"-overrideemulate-geolocation-when-using-a-browser-based-scraper"},(0,r.kt)("a",{parentName:"h2",href:"#override-emulate-geolocation",target:null,rel:null})," Override/emulate geolocation when using a browser-based scraper"),(0,r.kt)("p",null,"When using ",(0,r.kt)("a",{parentName:"p",href:"https://pptr.dev/#?product=Puppeteer&show=api-pagesetgeolocationoptions",target:"_blank",rel:"noopener"},"Puppeteer"),", you can emulate the geolocation with the ",(0,r.kt)("inlineCode",{parentName:"p"},"page.setGeolocation()")," function."),(0,r.kt)("p",null,"In ",(0,r.kt)("a",{parentName:"p",href:"https://playwright.dev/docs/api/class-browsercontext#browsercontextsetgeolocationgeolocation",target:"_blank",rel:"noopener"},"Playwright"),", geolocation can be emulated by using ",(0,r.kt)("inlineCode",{parentName:"p"},"browserContext.setGeolocation()"),"."),(0,r.kt)("p",null,"Overriding browser geolocation should be used in tandem with a proper proxy corresponding to the emulated geolocation. You would still likely get blocked if you, for example, used a German proxy with the overridden location set to Japan."))}h.isMDXComponent=!0}}]);