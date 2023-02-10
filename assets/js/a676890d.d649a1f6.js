"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[6780],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),p=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),g=p(r),f=n,m=g["".concat(l,".").concat(f)]||g[f]||u[f]||a;return r?o.createElement(m,i(i({ref:t},c),{},{components:r})):o.createElement(m,i({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}g.displayName="MDXCreateElement"},32790:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>p,toc:()=>u});var o=r(87462),n=r(63366),a=(r(67294),r(3905)),i=["components"],s={title:"Log in by transferring cookies",description:"Learn how to transfer cookies from your web browser to your crawlers. Log into websites when web scraping or automating tasks using your existing logins.",sidebar_position:3.7,slug:"/tutorials/log-in-by-transferring-cookies"},l="Log in by transferring cookies",p={unversionedId:"tutorials/log_in_by_transferring_cookies",id:"tutorials/log_in_by_transferring_cookies",title:"Log in by transferring cookies",description:"Learn how to transfer cookies from your web browser to your crawlers. Log into websites when web scraping or automating tasks using your existing logins.",source:"@site/sources/platform/tutorials/log_in_by_transferring_cookies.md",sourceDirName:"tutorials",slug:"/tutorials/log-in-by-transferring-cookies",permalink:"/platform/tutorials/log-in-by-transferring-cookies",draft:!1,editUrl:"https://github.com/apify/apify-docs-v2/edit/master/sources/platform/tutorials/log_in_by_transferring_cookies.md",tags:[],version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1676050498,formattedLastUpdatedAt:"Feb 10, 2023",sidebarPosition:3.7,frontMatter:{title:"Log in by transferring cookies",description:"Learn how to transfer cookies from your web browser to your crawlers. Log into websites when web scraping or automating tasks using your existing logins.",sidebar_position:3.7,slug:"/tutorials/log-in-by-transferring-cookies"},sidebar:"docs",previous:{title:"Log into a website using Puppeteer",permalink:"/platform/tutorials/log-into-a-website-using-puppeteer"},next:{title:"Cache data to improve performance",permalink:"/platform/tutorials/cache-data-to-improve-performance"}},c={},u=[{value:"Install a cookie editor",id:"install-a-cookie-editor",level:2},{value:"Export your cookies",id:"export-your-cookies",level:2},{value:"Pass cookies to Web Scraper",id:"pass-cookies-to-web-scraper",level:2}],g={toc:u};function f(e){var t=e.components,s=(0,n.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},g,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"log-in-by-transferring-cookies"},"Log in by transferring cookies"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Learn how to transfer cookies from your web browser to your crawlers. Log into websites when web scraping or automating tasks using your existing logins.")),(0,a.kt)("hr",null),(0,a.kt)("p",null,"To crawl websites that require a login, you can transfer cookies from your web browser directly into ",(0,a.kt)("a",{parentName:"p",href:"/platform/actors",target:null,rel:null},"Apify actors")," such as ",(0,a.kt)("strong",{parentName:"p"},"Web Scraper")," (",(0,a.kt)("a",{parentName:"p",href:"https://apify.com/apify/web-scraper",target:"_blank",rel:"noopener"},"apify/web-scraper"),"), ",(0,a.kt)("strong",{parentName:"p"},"Puppeteer Scraper")," (",(0,a.kt)("a",{parentName:"p",href:"https://apify.com/apify/puppeteer-scraper",target:"_blank",rel:"noopener"},"apify/puppeteer-scraper"),") and ",(0,a.kt)("strong",{parentName:"p"},"Instagram Scraper")," (",(0,a.kt)("a",{parentName:"p",href:"https://apify.com/jaroslavhejlek/instagram-scraper",target:"_blank",rel:"noopener"},"jaroslavhejlek/instagram-scraper"),")."),(0,a.kt)("p",null,"This is the quickest and simplest solution, however there are others that may be more reliable. For example, you can also ",(0,a.kt)("a",{parentName:"p",href:"/platform/tutorials/log-into-a-website-using-puppeteer",target:null,rel:null},"fill in the login form directly in the code"),"."),(0,a.kt)("h2",{id:"install-a-cookie-editor"},"Install a cookie editor"),(0,a.kt)("p",null,"First, install a browser extension like ",(0,a.kt)("a",{parentName:"p",href:"https://chrome.google.com/webstore/detail/editthiscookie/fngmhnnpilhplaeedifhccceomclgfbg",target:"_blank",rel:"noopener"},"EditThisCookie"),". After installation, go to the website you'd like to crawl and log in using your credentials."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Inspect Facebook login with DevTools",src:r(80633).Z,width:"880",height:"164"})),(0,a.kt)("h2",{id:"export-your-cookies"},"Export your cookies"),(0,a.kt)("p",null,"Click the ",(0,a.kt)("strong",{parentName:"p"},"EditThisCookie")," button next to your URL and click ",(0,a.kt)("strong",{parentName:"p"},"Export"),". Cookies will be copied to your clipboard as a ",(0,a.kt)("strong",{parentName:"p"},"JSON array"),", which is compatible with the cookie format used by ",(0,a.kt)("a",{parentName:"p",href:"https://pptr.dev",target:"_blank",rel:"noopener"},"Puppeteer"),"/",(0,a.kt)("a",{parentName:"p",href:"https://developers.google.com/web/updates/2017/04/headless-chrome",target:"_blank",rel:"noopener"},"Headless Chrome")," (the headless browser we use for crawling)."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Export your cookies",src:r(34310).Z,width:"900",height:"614"})),(0,a.kt)("h2",{id:"pass-cookies-to-web-scraper"},"Pass cookies to Web Scraper"),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"Initial cookies")," field is in the ",(0,a.kt)("strong",{parentName:"p"},"Proxy and browser configuration")," tab in Web Scraper's ",(0,a.kt)("strong",{parentName:"p"},"Input")," section. Paste the cookies into the field."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Web scraper input tab",src:r(27579).Z,width:"1400",height:"1063"})),(0,a.kt)("p",null,"And that's it! When you run the scraper, it will start already logged-in. Note that if the cookies are short-lived, this might not work, and you will need to ",(0,a.kt)("a",{parentName:"p",href:"/platform/tutorials/log-into-a-website-using-puppeteer",target:null,rel:null},"implement login in your code"),"."))}f.isMDXComponent=!0},80633:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/edit-this-cookie-1a2613b93941dfba4046627f4713d738.png"},34310:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/open-edit-this-cookie-8c392fa4c87c837ec2516d26f34b9d85.png"},27579:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/web-scraper-input-cb7c5ea60ba633b402f5afff45f0f362.png"}}]);