"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[6579],{3905:(t,e,a)=>{a.d(e,{Zo:()=>c,kt:()=>d});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var l=n.createContext({}),p=function(t){var e=n.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},c=function(t){var e=p(t.components);return n.createElement(l.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,l=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),m=p(a),d=r,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return a?n.createElement(h,o(o({ref:e},c),{},{components:a})):n.createElement(h,o({ref:e},c))}));function d(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,o=new Array(i);o[0]=m;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:r,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},7053:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>p,toc:()=>u});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),o=["components"],s={title:"V - Migrations & maintaining state",description:"Learn about what actor migrations are and how to handle them properly so that state is not lost and it can safely be resurrected.",sidebar_position:6.5,slug:"/expert-scraping-with-apify/migrations-maintaining-state"},l="Migrations & maintaining state",p={unversionedId:"platform/expert_scraping_with_apify/migrations_maintaining_state",id:"platform/expert_scraping_with_apify/migrations_maintaining_state",title:"V - Migrations & maintaining state",description:"Learn about what actor migrations are and how to handle them properly so that state is not lost and it can safely be resurrected.",source:"@site/sources/academy/platform/expert_scraping_with_apify/migrations_maintaining_state.md",sourceDirName:"platform/expert_scraping_with_apify",slug:"/expert-scraping-with-apify/migrations-maintaining-state",permalink:"/academy/expert-scraping-with-apify/migrations-maintaining-state",draft:!1,editUrl:"https://github.com/apify/apify-docs-v2/edit/master/sources/academy/platform/expert_scraping_with_apify/migrations_maintaining_state.md",tags:[],version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1675963489,formattedLastUpdatedAt:"Feb 9, 2023",sidebarPosition:6.5,frontMatter:{title:"V - Migrations & maintaining state",description:"Learn about what actor migrations are and how to handle them properly so that state is not lost and it can safely be resurrected.",sidebar_position:6.5,slug:"/expert-scraping-with-apify/migrations-maintaining-state"},sidebar:"academy",previous:{title:"IV - Apify API & client",permalink:"/academy/expert-scraping-with-apify/apify-api-and-client"},next:{title:"VI - Bypassing anti-scraping methods",permalink:"/academy/expert-scraping-with-apify/bypassing-anti-scraping"}},c={},u=[{value:"Learning \ud83e\udde0",id:"learning",level:2},{value:"Knowledge check \ud83d\udcdd",id:"quiz",level:2},{value:"Our task",id:"our-task",level:2},{value:"Next up",id:"next",level:2}],m={toc:u};function d(t){var e=t.components,a=(0,r.Z)(t,o);return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"migrations-maintaining-state"},"Migrations & maintaining state"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Learn about what actor migrations are and how to handle them properly so that state is not lost and it can safely be resurrected.")),(0,i.kt)("hr",null),(0,i.kt)("p",null,"We already know that actors are basically just Docker containers that can be run on any server. This means that they can be allocated anywhere there is space available, making them very efficient. Unfortunately, there is one big caveat: actors move - a lot. When an actor moves, it is called a ",(0,i.kt)("strong",{parentName:"p"},"migration"),"."),(0,i.kt)("p",null,"On migration, the process inside of an actor is completely restarted and everything in its memory is lost, meaning that any values stored within variables or classes are lost."),(0,i.kt)("p",null,'When a migration happens, you want to do a so-called "state transition", which means saving any data you care about so the actor can continue right where it left off before the migration.'),(0,i.kt)("h2",{id:"learning"},"Learning \ud83e\udde0"),(0,i.kt)("p",null,"Read this ",(0,i.kt)("a",{parentName:"p",href:"/platform/actors/development/state-persistence",target:null,rel:null},"article")," on migrations and dealing with state transitions."),(0,i.kt)("p",null,"Before moving forward, read about actor ",(0,i.kt)("a",{parentName:"p",href:"https://docs-v2.apify.com/sdk-js/docs/api/apify#apifyevents",target:"_blank",rel:"noopener"},"events")," and how to listen for them."),(0,i.kt)("h2",{id:"quiz"},"Knowledge check \ud83d\udcdd"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Actors have an option the ",(0,i.kt)("strong",{parentName:"li"},"Settings")," tab to ",(0,i.kt)("strong",{parentName:"li"},"Restart on error"),". Would you use this feature for regular actors? When would you use this feature?"),(0,i.kt)("li",{parentName:"ol"},"Migrations happen randomly, but by ",(0,i.kt)("a",{parentName:"li",href:"/platform/actors/running#aborting-runs",target:null,rel:null},"aborting ",(0,i.kt)("strong",{parentName:"a"},"gracefully")),", you can simulate a similar situation. Try this out on the platform and observe what happens. What changes occur, and what remains the same for the restarted actor's run?"),(0,i.kt)("li",{parentName:"ol"},"Why don't you (usually) need to add any special migration handling code for a standard crawling/scraping actor? Are there any features in the Crawlee/Apify SDK that handle this under the hood?"),(0,i.kt)("li",{parentName:"ol"},"How can you intercept the migration event? How much time do you have after this event happens and before the actor migrates?"),(0,i.kt)("li",{parentName:"ol"},"When would you persist data to the default key-value store instead of to a named key-value store?")),(0,i.kt)("h2",{id:"our-task"},"Our task"),(0,i.kt)("p",null,"Once again returning to our Amazon ",(0,i.kt)("strong",{parentName:"p"},"demo-actor"),", let's say that we need to store an object in memory (as a variable) containing all of the scraped ASINs as keys and the number of offers scraped from each ASIN as values. The object should follow this format:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "B079ZJ1BPR": 3,\n    "B07D4R4258": 21\n}\n')),(0,i.kt)("p",null,"Every 10 seconds, we should log the most up-to-date version of this object to the console. Additionally, the object should be able to solve actor migrations, which means that even if the actor were to migrate, its data would not be lost upon resurrection."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/academy/expert-scraping-with-apify/solutions/handling-migrations",target:null,rel:null},(0,i.kt)("strong",{parentName:"a"},"Solution"))),(0,i.kt)("h2",{id:"next"},"Next up"),(0,i.kt)("p",null,"You might have already noticed that we've been using the ",(0,i.kt)("strong",{parentName:"p"},"RESIDENTIAL")," proxy group in the ",(0,i.kt)("inlineCode",{parentName:"p"},"proxyConfiguration")," within our Amazon scraping actor. But what does that mean? Learn why we've used this group, about proxies, and about avoiding anti-scraping measures in the ",(0,i.kt)("a",{parentName:"p",href:"/academy/expert-scraping-with-apify/bypassing-anti-scraping",target:null,rel:null},"next lesson"),"."))}d.isMDXComponent=!0}}]);