"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[7051],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(a),m=n,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return a?r.createElement(h,o(o({ref:t},c),{},{components:a})):r.createElement(h,o({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},24097:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>p,toc:()=>u});var r=a(87462),n=a(63366),i=(a(67294),a(3905)),o=["components"],s={title:"Proxies",description:"Learn all about proxies, how they work, and how they can be leveraged in a scraper to avoid blocking and other anti-scraping tactics.",sidebar_position:1,slug:"/anti-scraping/mitigation/proxies"},l="Proxies",p={unversionedId:"webscraping/anti_scraping/mitigation/proxies",id:"webscraping/anti_scraping/mitigation/proxies",title:"Proxies",description:"Learn all about proxies, how they work, and how they can be leveraged in a scraper to avoid blocking and other anti-scraping tactics.",source:"@site/sources/academy/webscraping/anti_scraping/mitigation/proxies.md",sourceDirName:"webscraping/anti_scraping/mitigation",slug:"/anti-scraping/mitigation/proxies",permalink:"/academy/anti-scraping/mitigation/proxies",draft:!1,editUrl:"https://github.com/apify/apify-docs-v2/edit/master/sources/academy/webscraping/anti_scraping/mitigation/proxies.md",tags:[],version:"current",lastUpdatedBy:"Jind\u0159ich B\xe4r",lastUpdatedAt:1676377646,formattedLastUpdatedAt:"Feb 14, 2023",sidebarPosition:1,frontMatter:{title:"Proxies",description:"Learn all about proxies, how they work, and how they can be leveraged in a scraper to avoid blocking and other anti-scraping tactics.",sidebar_position:1,slug:"/anti-scraping/mitigation/proxies"},sidebar:"academy",previous:{title:"Mitigation",permalink:"/academy/anti-scraping/mitigation"},next:{title:"Using proxies",permalink:"/academy/anti-scraping/mitigation/using-proxies"}},c={},u=[{value:"A bit about proxy links",id:"understanding-proxy-links",level:2},{value:"Proxy rotation",id:"proxy-rotation",level:2},{value:"Next up",id:"next",level:2}],d={toc:u};function m(e){var t=e.components,a=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"about-proxies"},"Proxies"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Learn all about proxies, how they work, and how they can be leveraged in a scraper to avoid blocking and other anti-scraping tactics.")),(0,i.kt)("hr",null),(0,i.kt)("p",null,"A proxy server provides a gateway between users and the internet, to be more specific in our case - between the crawler and the target website."),(0,i.kt)("p",null,"Many websites have ",(0,i.kt)("a",{parentName:"p",href:"/academy/anti-scraping/techniques/rate-limiting",target:null,rel:null},"rate-limiting")," set up, which is when a website ",(0,i.kt)("strong",{parentName:"p"},"limits")," the ",(0,i.kt)("strong",{parentName:"p"},"rate")," at which requests can be sent from a single IP address. In cases when a higher number of requests is expected for the crawler - using a proxy is essential to let the crawler run as smoothly as possible and avoid being blocked."),(0,i.kt)("p",null,"There are a few factors that determine the quality of a proxy IP:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"How many users share the same proxy IP address?"),(0,i.kt)("li",{parentName:"ul"},"How did the previous user use (or overuse) the proxy?"),(0,i.kt)("li",{parentName:"ul"},'How long was the proxy left to "heal" before it was resold?'),(0,i.kt)("li",{parentName:"ul"},"What is the quality of the underlying server of the proxy? (latency)")),(0,i.kt)("p",null,'Although IP quality is still the most important factor when it comes to using proxies and avoiding anti-scraping measures, nowadays it\'s not just about avoiding rate-limiting, which brings new challenges for scrapers that can no longer just rely on simple IP rotation. Anti-scraping software providers, such as CloudFlare, have global databases of "suspicious" IP addresses. If you are unlucky, your newly bought IP might be blocked even before you use it. If the previous owners overused it, it might have already been marked as suspicious in many databases, or even (very likely) was blocked altogether. If you care about the quality of your IPs, use them as a real user, and any website will have a hard time banning them completely.'),(0,i.kt)("p",null,"Fixing rate-limiting issues is only the tip of the iceberg of what proxies can do for your scrapers, though. By implementing proxies properly, you can successfully avoid the majority of anti-scraping measures listed in the ",(0,i.kt)("a",{parentName:"p",href:"/academy/anti-scraping",target:null,rel:null},"previous lesson"),"."),(0,i.kt)("h2",{id:"understanding-proxy-links"},"A bit about proxy links"),(0,i.kt)("p",null,"When using proxies in your crawlers, you'll most likely be using them in a format that looks like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"http://proxy.example.com:8080\n")),(0,i.kt)("p",null,"This link is separated into two main components: the ",(0,i.kt)("strong",{parentName:"p"},"host"),", and the ",(0,i.kt)("strong",{parentName:"p"},"port"),". In our case, our hostname is ",(0,i.kt)("inlineCode",{parentName:"p"},"http://proxy.example.com"),", and our port is ",(0,i.kt)("inlineCode",{parentName:"p"},"8080"),". Sometimes, a proxy might use an IP address as the host, such as ",(0,i.kt)("inlineCode",{parentName:"p"},"103.130.104.33"),"."),(0,i.kt)("p",null,"If authentication (a username and a password) is required, the format will look a bit different:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"http://USERNAME:PASSWORD@proxy.example.com:8080\n")),(0,i.kt)("h2",{id:"proxy-rotation"},"Proxy rotation"),(0,i.kt)("p",null,'Web scrapers can implement a method called "proxy rotation" to ',(0,i.kt)("strong",{parentName:"p"},"rotate")," the IP addresses they use to access websites. Each request can be assigned a different IP address, which makes it appear as if they are all coming from different users in different location. This greatly enhances performance, and is a major factor when it comes to making a web scraper appear more human."),(0,i.kt)("h2",{id:"next"},"Next up"),(0,i.kt)("p",null,"Proxies are one of the most important things to understand when it comes to mitigating anti-scraping techniques in a scraper. Now that you're familiar with what they are, the next lesson will be teaching you how to configure your crawler in Crawlee to use and automatically rotate proxies. ",(0,i.kt)("a",{parentName:"p",href:"/academy/anti-scraping/mitigation/using-proxies",target:null,rel:null},"Let's get right into it!")))}m.isMDXComponent=!0}}]);