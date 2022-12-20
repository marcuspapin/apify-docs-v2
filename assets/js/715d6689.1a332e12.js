"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[7586],{3905:(e,t,r)=>{r.d(t,{Zo:()=>f,kt:()=>d});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=a.createContext({}),c=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},f=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,p=e.parentName,f=l(e,["components","mdxType","originalType","parentName"]),s=c(r),m=o,d=s["".concat(p,".").concat(m)]||s[m]||u[m]||n;return r?a.createElement(d,i(i({ref:t},f),{},{components:r})):a.createElement(d,i({ref:t},f))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,i=new Array(n);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<n;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},94743:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>f,contentTitle:()=>p,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>s});var a=r(87462),o=r(63366),n=(r(67294),r(3905)),i=["components"],l={title:"Introduction to Apify Platform",description:"Learn all about the Apify platform, all of the tools it offers, and how it can improve your overall development experience.",sidebar_position:7,category:"apify platform",slug:"/apify-platform"},p="[](#about-the-platform) Introduction to Apify Platform",c={unversionedId:"apify_platform",id:"apify_platform",title:"Introduction to Apify Platform",description:"Learn all about the Apify platform, all of the tools it offers, and how it can improve your overall development experience.",source:"@site/sources/academy/apify_platform.md",sourceDirName:".",slug:"/apify-platform",permalink:"/academy/apify-platform",draft:!1,tags:[],version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1671540496,formattedLastUpdatedAt:"Dec 20, 2022",sidebarPosition:7,frontMatter:{title:"Introduction to Apify Platform",description:"Learn all about the Apify platform, all of the tools it offers, and how it can improve your overall development experience.",sidebar_position:7,category:"apify platform",slug:"/apify-platform"},sidebar:"defaultSidebar",previous:{title:"Scraping paginated sites",permalink:"/academy/advanced-web-scraping/scraping-paginated-sites"},next:{title:"Getting started",permalink:"/academy/getting-started"}},f={},s=[{value:" Category outline",id:"-category-outline",level:2},{value:" First up",id:"-first-up",level:2}],u={toc:s};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"-introduction-to-apify-platform"},(0,n.kt)("a",{parentName:"h1",href:"#about-the-platform",target:null,rel:null})," Introduction to Apify Platform"),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"https://apify.com",target:"_blank",rel:"noopener"},"Apify platform")," was built to serve large-scale and high-performance web scraping and automation needs. It provides easy access to compute instances (",(0,n.kt)("a",{parentName:"p",href:"/academy/getting-started/actors",target:null,rel:null},"actors"),"), convenient request and result storages, proxies, scheduling, webhooks and more - all accessible through the ",(0,n.kt)("strong",{parentName:"p"},"Console")," web interface, ",(0,n.kt)("a",{parentName:"p",href:"https://docs.apify.com/api/v2",target:"_blank",rel:"noopener"},"Apify's API"),", or our ",(0,n.kt)("a",{parentName:"p",href:"https://docs.apify.com/apify-client-js",target:"_blank",rel:"noopener"},"JavaScript")," and ",(0,n.kt)("a",{parentName:"p",href:"https://docs.apify.com/apify-client-python",target:"_blank",rel:"noopener"},"Python")," API clients."),(0,n.kt)("h2",{id:"-category-outline"},(0,n.kt)("a",{parentName:"h2",href:"#this-category",target:null,rel:null})," Category outline"),(0,n.kt)("p",null,"In this category, you'll learn how to become an Apify platform developer from the ground up. From creating your first account, to developing actors, this is your one-stop-shop for understanding how the platform works, and how to work with it."),(0,n.kt)("h2",{id:"-first-up"},(0,n.kt)("a",{parentName:"h2",href:"#first",target:null,rel:null})," First up"),(0,n.kt)("p",null,"We'll start off this category light, by showing you how to create an Apify account and get everything ready for development with the platform. ",(0,n.kt)("a",{parentName:"p",href:"./getting_started.md",target:null,rel:null},"Let's go!")))}m.isMDXComponent=!0}}]);