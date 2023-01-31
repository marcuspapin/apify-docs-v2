"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[8169],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),h=c(a),d=n,f=h["".concat(s,".").concat(d)]||h[d]||u[d]||i;return a?r.createElement(f,l(l({ref:t},p),{},{components:a})):r.createElement(f,l({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var c=2;c<i;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},31685:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var r=a(87462),n=a(63366),i=(a(67294),a(3905)),l=["components"],o={title:"Firewalls",description:"Understand what a web-application firewall is, how they work, and the various common techniques for avoiding them altogether.",sidebar_position:4,slug:"/anti-scraping/techniques/firewalls"},s="Firewalls",c={unversionedId:"anti_scraping/techniques/firewalls",id:"anti_scraping/techniques/firewalls",title:"Firewalls",description:"Understand what a web-application firewall is, how they work, and the various common techniques for avoiding them altogether.",source:"@site/sources/academy/anti_scraping/techniques/firewalls.md",sourceDirName:"anti_scraping/techniques",slug:"/anti-scraping/techniques/firewalls",permalink:"/academy/anti-scraping/techniques/firewalls",draft:!1,tags:[],version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1675177066,formattedLastUpdatedAt:"Jan 31, 2023",sidebarPosition:4,frontMatter:{title:"Firewalls",description:"Understand what a web-application firewall is, how they work, and the various common techniques for avoiding them altogether.",sidebar_position:4,slug:"/anti-scraping/techniques/firewalls"}},p={},u=[{value:"How it works",id:"how-it-works",level:2},{value:"Bypassing web-application firewalls",id:"bypassing-firewalls",level:2},{value:"Next up",id:"next",level:2}],h={toc:u};function d(e){var t=e.components,o=(0,n.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"firewalls"},"Firewalls"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Understand what a web-application firewall is, how they work, and the various common techniques for avoiding them altogether.")),(0,i.kt)("hr",null),(0,i.kt)("p",null,"A web-application firewall (or ",(0,i.kt)("strong",{parentName:"p"},"WAF"),") is a tool for website admins which allows them to set various access rules for their visitors. The rules can vary on each website and are usually hard to detect; therefore, on sites using a WAF, you need to run a set of tests to test the rules and find out their limits."),(0,i.kt)("p",null,"One of the most common WAFs one can come across is the one from ",(0,i.kt)("a",{parentName:"p",href:"https://www.cloudflare.com",target:"_blank",rel:"noopener"},"Cloudflare"),". It allows setting a waiting screen that runs a few tests against the visitor to detect a genuine visitor or a bot. However, not all WAFs are that easy to detect."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Cloudflare waiting screen",src:a(68289).Z,width:"856",height:"480"})),(0,i.kt)("h2",{id:"how-it-works"},"How it works"),(0,i.kt)("p",null,"WAPs work on a similar premise as regular firewalls. Web admins define the rules, and the firewall executes them. As an example of how the WAF can work, we will take a look at Cloudflare's solution:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The visitor sends a request to the webpage."),(0,i.kt)("li",{parentName:"ol"},"Request is intercepted by the firewall."),(0,i.kt)("li",{parentName:"ol"},"The firewall decides if presenting a challenge (captcha) is necessary. If the user already solved a captcha in the past or nothing is suspicious, it will immediately forward the request to the application's server."),(0,i.kt)("li",{parentName:"ol"},"A captcha is presented which must be solved. Once it is solved, a ",(0,i.kt)("a",{parentName:"li",href:"/academy/concepts/http-cookies",target:null,rel:null},"cookie")," is stored in the visitor's browser."),(0,i.kt)("li",{parentName:"ol"},"The request is forwarded to the application's server.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Cloudflare WAP workflow",src:a(54248).Z,width:"661",height:"362"})),(0,i.kt)("p",null,"Since there are multiple providers, it is essential to say that the challenges are not always graphical and can be entirely server-side (without any JavaScript evaluation in the visitor browser)."),(0,i.kt)("h2",{id:"bypassing-firewalls"},"Bypassing web-application firewalls"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Using ",(0,i.kt)("a",{parentName:"li",href:"/academy/anti-scraping/mitigation/proxies",target:null,rel:null},"proxies"),"."),(0,i.kt)("li",{parentName:"ul"},"Mocking ",(0,i.kt)("a",{parentName:"li",href:"/academy/concepts/http-headers",target:null,rel:null},"headers"),"."),(0,i.kt)("li",{parentName:"ul"},"Overriding the browser's ",(0,i.kt)("a",{parentName:"li",href:"/academy/anti-scraping/techniques/fingerprinting",target:null,rel:null},"fingerprint")," (most effective)."),(0,i.kt)("li",{parentName:"ul"},"Farming the ",(0,i.kt)("a",{parentName:"li",href:"/academy/concepts/http-cookies",target:null,rel:null},"cookies")," from a website with a headless browser, then using the farmed cookies to do HTTP based scraping (most performant).")),(0,i.kt)("p",null,"As you likely already know, there is no solution that fits all. If you are struggling to get past a WAP provider, you can try using Firefox with Playwright."),(0,i.kt)("h2",{id:"next"},"Next up"),(0,i.kt)("p",null,"In the ",(0,i.kt)("a",{parentName:"p",href:"/academy/anti-scraping/techniques/captchas",target:null,rel:null},"next lesson"),", we'll be covering ",(0,i.kt)("strong",{parentName:"p"},"captchas"),", which were mentioned throughout this lesson. It's important to note that attempting to solve a captcha programmatically is the last resort - always try to avoid being presented the captcha in the first place by using the techniques mentioned in this lesson."))}d.isMDXComponent=!0},54248:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/cloudflare-graphic-12df6e1bc8a8b56528590d63412734b6.webp"},68289:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/cloudflare-bd22fffac9bd5e98e327247500da14cb.png"}}]);