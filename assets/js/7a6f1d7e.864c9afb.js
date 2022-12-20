"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[673],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),l=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(a),h=n,f=u["".concat(p,".").concat(h)]||u[h]||g[h]||i;return a?r.createElement(f,o(o({ref:t},c),{},{components:a})):r.createElement(f,o({ref:t},c))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=h;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:n,o[1]=s;for(var l=2;l<i;l++)o[l]=a[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},75127:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var r=a(87462),n=a(63366),i=(a(67294),a(3905)),o=["components"],s={title:"VI - Bypassing anti-scraping methods",description:"Learn about bypassing anti-scraping methods using proxies and proxy/session rotation together with Crawlee and the Apify SDK.",sidebar_position:6.6,slug:"/expert-scraping-with-apify/bypassing-anti-scraping"},p="[](#bypassing-anti-scraping-methods) Bypassing anti-scraping methods",l={unversionedId:"expert_scraping_with_apify/bypassing_anti_scraping",id:"expert_scraping_with_apify/bypassing_anti_scraping",title:"VI - Bypassing anti-scraping methods",description:"Learn about bypassing anti-scraping methods using proxies and proxy/session rotation together with Crawlee and the Apify SDK.",source:"@site/sources/academy/expert_scraping_with_apify/bypassing_anti_scraping.md",sourceDirName:"expert_scraping_with_apify",slug:"/expert-scraping-with-apify/bypassing-anti-scraping",permalink:"/academy/expert-scraping-with-apify/bypassing-anti-scraping",draft:!1,tags:[],version:"current",lastUpdatedBy:"Jind\u0159ich B\xe4r",lastUpdatedAt:1671536597,formattedLastUpdatedAt:"Dec 20, 2022",sidebarPosition:6.6,frontMatter:{title:"VI - Bypassing anti-scraping methods",description:"Learn about bypassing anti-scraping methods using proxies and proxy/session rotation together with Crawlee and the Apify SDK.",sidebar_position:6.6,slug:"/expert-scraping-with-apify/bypassing-anti-scraping"},sidebar:"defaultSidebar",previous:{title:"V - Migrations & maintaining state",permalink:"/academy/expert-scraping-with-apify/migrations-maintaining-state"},next:{title:"VII - Saving useful run statistics",permalink:"/academy/expert-scraping-with-apify/saving-useful-stats"}},c={},u=[{value:" Learning \ud83e\udde0",id:"-learning-",level:2},{value:" Knowledge check \ud83d\udcdd",id:"-knowledge-check-",level:2},{value:"Our task",id:"our-task",level:2},{value:" Next up",id:"-next-up",level:2}],g={toc:u};function h(e){var t=e.components,a=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"-bypassing-anti-scraping-methods"},(0,i.kt)("a",{parentName:"h1",href:"#bypassing-anti-scraping-methods",target:null,rel:null})," Bypassing anti-scraping methods"),(0,i.kt)("p",null,"Effectively bypassing anti-scraping software is one of the most crucial, but also one of the most difficult skills to master. The different types of ","[anti-scraping protections]","({{@link anti_scraping.md}}) can vary a lot on the web. Some websites aren't even protected at all, some require only moderate IP rotation, and some cannot even be scraped without using advanced techniques and workarounds. Additionally, because the web is evolving, anti-scraping techniques are also evolving and becoming more advanced."),(0,i.kt)("p",null,"It is generally quite difficult to recognize the anti-scraping protections a page may have when first inspecting a it, so it is important to thoroughly investigate a site prior to writing any lines of code, as anti-scraping measures can significantly change your approach as well as complicate the development process of an actor. As your skills expand, you will be able to spot anti-scraping measures quicker, and better evaluate the complexity of a new project."),(0,i.kt)("p",null,"You might have already noticed that we've been using the ",(0,i.kt)("strong",{parentName:"p"},"RESIDENTIAL")," proxy group in the ",(0,i.kt)("inlineCode",{parentName:"p"},"proxyConfiguration")," within our Amazon scraping actor. But what does that mean? This is a proxy group from ",(0,i.kt)("a",{parentName:"p",href:"https://apify.com/proxy",target:"_blank",rel:"noopener"},"Apify Proxy")," which has been preventing us from being blocked by Amazon this entire time. We'll be learning more about proxies and Apify Proxy in this lesson."),(0,i.kt)("h2",{id:"-learning-"},(0,i.kt)("a",{parentName:"h2",href:"#learning",target:null,rel:null})," Learning \ud83e\udde0"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Skim ",(0,i.kt)("a",{parentName:"li",href:"https://apify.com/proxy",target:"_blank",rel:"noopener"},"this page")," for a general idea of Apify Proxy."),(0,i.kt)("li",{parentName:"ul"},"Give the ",(0,i.kt)("a",{parentName:"li",href:"https://docs.apify.com/proxy#our-proxies",target:"_blank",rel:"noopener"},"proxy documentation")," a solid readover (feel free to skip most of the examples)."),(0,i.kt)("li",{parentName:"ul"},"Read about our ",(0,i.kt)("a",{parentName:"li",href:"https://help.apify.com/en/articles/2108625-free-trial-of-apify-proxy",target:"_blank",rel:"noopener"},"proxy trial"),"."),(0,i.kt)("li",{parentName:"ul"},"Check out ",(0,i.kt)("a",{parentName:"li",href:"https://help.apify.com/en/articles/1961361-several-tips-on-how-to-bypass-website-anti-scraping-protections",target:"_blank",rel:"noopener"},"this")," article about bypassing anti-scraping measures."),(0,i.kt)("li",{parentName:"ul"},"Gain a solid understanding of the ",(0,i.kt)("a",{parentName:"li",href:"https://crawlee.dev/api/core/class/SessionPool",target:"_blank",rel:"noopener"},"SessionPool"),"."),(0,i.kt)("li",{parentName:"ul"},"Look at a few actors on the ",(0,i.kt)("a",{parentName:"li",href:"https://apify.com/store",target:"_blank",rel:"noopener"},"Apify store"),". How are they utilizing proxies?")),(0,i.kt)("h2",{id:"-knowledge-check-"},(0,i.kt)("a",{parentName:"h2",href:"#quiz",target:null,rel:null})," Knowledge check \ud83d\udcdd"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"What are the different types of proxies that Apify proxy offers? What are the main differences between them?"),(0,i.kt)("li",{parentName:"ol"},"Which proxy groups do users get with the proxy trial? How long does the trial last?"),(0,i.kt)("li",{parentName:"ol"},"How can you prevent an error from occurring if one of the proxy groups that a user has is removed? What are the best practices for these scenarios?"),(0,i.kt)("li",{parentName:"ol"},"Does it make sense to rotate proxies when you are logged into a website?"),(0,i.kt)("li",{parentName:"ol"},"Construct a proxy URL that will select proxies ",(0,i.kt)("strong",{parentName:"li"},"only from the US"),"."),(0,i.kt)("li",{parentName:"ol"},"What do you need to do to rotate a proxy (one proxy usually has one IP)? How does this differ for CheerioCrawler and PuppeteerCrawler?"),(0,i.kt)("li",{parentName:"ol"},"Name a few different ways of how a website can prevent you from scraping it.")),(0,i.kt)("h2",{id:"our-task"},"Our task"),(0,i.kt)("p",null,"This time, we're going to build a trivial proxy-session manager for our Amazon scraping actor. A session should be used a maximum of 5 times before being rotated; however, if a request fails, the IP should be rotated immediately."),(0,i.kt)("p",null,"Additionally, the proxies used by our scraper should now only be from the US."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/academy/expert-scraping-with-apify/solutions/rotating-proxies",target:null,rel:null},(0,i.kt)("strong",{parentName:"a"},"Solution"))),(0,i.kt)("h2",{id:"-next-up"},(0,i.kt)("a",{parentName:"h2",href:"#next",target:null,rel:null})," Next up"),(0,i.kt)("p",null,"Up ",(0,i.kt)("a",{parentName:"p",href:"/academy/expert-scraping-with-apify/saving-useful-stats",target:null,rel:null},"next"),", we'll be learning about how to save useful stats about our run, which becomes more and more useful as a project scales."))}h.isMDXComponent=!0}}]);