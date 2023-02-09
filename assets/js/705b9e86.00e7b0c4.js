"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[577],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),l=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),f=l(r),y=n,d=f["".concat(s,".").concat(y)]||f[y]||c[y]||i;return r?o.createElement(d,a(a({ref:t},u),{},{components:r})):o.createElement(d,a({ref:t},u))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=f;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:n,a[1]=p;for(var l=2;l<i;l++)a[l]=r[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"},54580:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>y,frontMatter:()=>p,metadata:()=>l,toc:()=>c});var o=r(87462),n=r(63366),i=(r(67294),r(3905)),a=["components"],p={title:"Troubleshooting",description:"Useful tips for debugging applications that use Apify Proxy. Check the status of your proxies and view information about the client IP address.",sidebar_position:10.6,slug:"/proxy/troubleshooting"},s="Troubleshooting",l={unversionedId:"proxy/troubleshooting",id:"proxy/troubleshooting",title:"Troubleshooting",description:"Useful tips for debugging applications that use Apify Proxy. Check the status of your proxies and view information about the client IP address.",source:"@site/sources/platform/proxy/troubleshooting.md",sourceDirName:"proxy",slug:"/proxy/troubleshooting",permalink:"/platform/proxy/troubleshooting",draft:!1,editUrl:"https://github.com/apify/apify-docs-v2/edit/master/sources/platform/proxy/troubleshooting.md",tags:[],version:"current",lastUpdatedBy:"Jind\u0159ich B\xe4r",lastUpdatedAt:1675932804,formattedLastUpdatedAt:"Feb 9, 2023",sidebarPosition:10.6,frontMatter:{title:"Troubleshooting",description:"Useful tips for debugging applications that use Apify Proxy. Check the status of your proxies and view information about the client IP address.",sidebar_position:10.6,slug:"/proxy/troubleshooting"},sidebar:"docs",previous:{title:"Examples",permalink:"/platform/proxy/google-serp-proxy/examples"},next:{title:"Integrations",permalink:"/platform/tutorials/integrations"}},u={},c=[],f={toc:c};function y(e){var t=e.components,p=(0,n.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},f,p,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"troubleshooting"},"Troubleshooting"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Useful tips for debugging applications that use Apify Proxy. Check the status of your proxies and view information about the client IP address.")),(0,i.kt)("hr",null),(0,i.kt)("p",null,"To view your connection status to ",(0,i.kt)("a",{parentName:"p",href:"https://apify.com/proxy",target:"_blank",rel:"noopener"},"Apify Proxy"),", open the URL below in the browser using the proxy:"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"http://proxy.apify.com/",target:"_blank",rel:"noopener"},"http://proxy.apify.com/")),(0,i.kt)("p",null,"If the proxy connection is working, the page should look something like this:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Apify proxy status page",src:r(22445).Z,width:"1300",height:"752"})),(0,i.kt)("p",null,"To test that your requests are proxied and IP addresses are being ",(0,i.kt)("a",{parentName:"p",href:"/platform/web-scraping-101/anti-scraping-techniques",target:null,rel:null},"rotated")," correctly, open the following API endpoint via the proxy. It shows information about the client IP address."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://api.apify.com/v2/browser-info/",target:"_blank",rel:"noopener"},"https://api.apify.com/v2/browser-info/")))}y.isMDXComponent=!0},22445:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/proxy-status-6ea6ff237ab297936618fcb2c52a58e4.png"}}]);