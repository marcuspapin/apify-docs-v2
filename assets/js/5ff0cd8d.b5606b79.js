"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[4129],{3905:(t,e,r)=>{r.d(e,{Zo:()=>u,kt:()=>d});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},l=Object.keys(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var m=a.createContext({}),s=function(t){var e=a.useContext(m),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},u=function(t){var e=s(t.components);return a.createElement(m.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,l=t.originalType,m=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),c=s(r),d=n,k=c["".concat(m,".").concat(d)]||c[d]||p[d]||l;return r?a.createElement(k,i(i({ref:e},u),{},{components:r})):a.createElement(k,i({ref:e},u))}));function d(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=r.length,i=new Array(l);i[0]=c;var o={};for(var m in e)hasOwnProperty.call(e,m)&&(o[m]=e[m]);o.originalType=t,o.mdxType="string"==typeof t?t:n,i[1]=o;for(var s=2;s<l;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},91752:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>u,contentTitle:()=>m,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=r(87462),n=r(63366),l=(r(67294),r(3905)),i=["components"],o={title:"Limits",description:"Learn the Apify platform's resource capability and limitations such as max memory, disk size and number of actors/tasks per user or schedule.",sidebar_position:7.8,slug:"/actors/limits"},m="Limits",s={unversionedId:"actors/limits",id:"actors/limits",title:"Limits",description:"Learn the Apify platform's resource capability and limitations such as max memory, disk size and number of actors/tasks per user or schedule.",source:"@site/sources/platform/actors/limits.md",sourceDirName:"actors",slug:"/actors/limits",permalink:"/platform/actors/limits",draft:!1,editUrl:"https://github.com/apify/apify-docs-v2/edit/master/sources/platform/actors/limits.md",tags:[],version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1675954665,formattedLastUpdatedAt:"Feb 9, 2023",sidebarPosition:7.8,frontMatter:{title:"Limits",description:"Learn the Apify platform's resource capability and limitations such as max memory, disk size and number of actors/tasks per user or schedule.",sidebar_position:7.8,slug:"/actors/limits"},sidebar:"docs",previous:{title:"Security",permalink:"/platform/actors/security"},next:{title:"Examples",permalink:"/platform/actors/examples"}},u={},p=[{value:"Actor limits",id:"actor-limits",level:2},{value:"Platform limits",id:"platform-limits",level:2}],c={toc:p};function d(t){var e=t.components,r=(0,n.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"limits"},"Limits"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Learn the Apify platform's resource capability and limitations such as max memory, disk size and number of actors/tasks per user or schedule.")),(0,l.kt)("hr",null),(0,l.kt)("p",null,"The tables below demonstrate the Apify platform's default resource limits."),(0,l.kt)("p",null,"If needed, the limits shown below can be increased on paid accounts. For details, contact us on ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"mailto:hello@apify.com",target:"_blank",rel:"noopener"},"hello@apify.com"))," or using the chat icon in the bottom-right corner."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Maximum combined memory of all running jobs."),(0,l.kt)("li",{parentName:"ul"},"Maximum number of actors per user."),(0,l.kt)("li",{parentName:"ul"},"Maximum number of tasks per user.")),(0,l.kt)("h2",{id:"actor-limits"},"Actor limits"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Build memory size"),(0,l.kt)("td",{parentName:"tr",align:null},"4,096 MB (2,048 MB on the free plan)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Run minimum memory"),(0,l.kt)("td",{parentName:"tr",align:null},"128 MB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Run maximum memory"),(0,l.kt)("td",{parentName:"tr",align:null},"32,768 MB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Maximum combined memory of all running jobs ",(0,l.kt)("br",null),"(Free plan)"),(0,l.kt)("td",{parentName:"tr",align:null},"4,096 MB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Maximum combined memory of all running jobs ",(0,l.kt)("br",null),"(Personal plan)"),(0,l.kt)("td",{parentName:"tr",align:null},"32,768 MB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Maximum combined memory of all running jobs ",(0,l.kt)("br",null),"(Team plan)"),(0,l.kt)("td",{parentName:"tr",align:null},"131,072 MB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Build timeout"),(0,l.kt)("td",{parentName:"tr",align:null},"1800 secs")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Build/run disk size"),(0,l.kt)("td",{parentName:"tr",align:null},"2x job memory limit")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Memory per CPU core"),(0,l.kt)("td",{parentName:"tr",align:null},"4,096 MB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Build/run maximum log size"),(0,l.kt)("td",{parentName:"tr",align:null},"10,485,760 characters")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Maximum number of dataset columns for xlsx format"),(0,l.kt)("td",{parentName:"tr",align:null},"2,000 columns")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Maximum size of input schema for a task/actor"),(0,l.kt)("td",{parentName:"tr",align:null},"100 kB")))),(0,l.kt)("h2",{id:"platform-limits"},"Platform limits"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Maximum number of actors per user"),(0,l.kt)("td",{parentName:"tr",align:null},"100")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Maximum number of tasks per user"),(0,l.kt)("td",{parentName:"tr",align:null},"1000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Maximum number of schedules per user"),(0,l.kt)("td",{parentName:"tr",align:null},"100")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Maximum number of webhooks per user"),(0,l.kt)("td",{parentName:"tr",align:null},"100")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Maximum number of concurrent actor runs per user for free accounts"),(0,l.kt)("td",{parentName:"tr",align:null},"25")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Maximum number of concurrent actor runs per user for paid accounts"),(0,l.kt)("td",{parentName:"tr",align:null},"250")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Maximum number of actors per schedule"),(0,l.kt)("td",{parentName:"tr",align:null},"10")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Maximum number of tasks per schedule"),(0,l.kt)("td",{parentName:"tr",align:null},"10")))))}d.isMDXComponent=!0}}]);