"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[4085],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>k});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),c=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=c(t.components);return a.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},f=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,s=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),f=c(n),k=r,h=f["".concat(s,".").concat(k)]||f[k]||u[k]||o;return n?a.createElement(h,i(i({ref:e},p),{},{components:n})):a.createElement(h,i({ref:e},p))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},33589:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>s,default:()=>k,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],l={title:"Slack",description:"Learn how to integrate your Apify actors with Slack. This article guides you from installation through to automating your whole workflow in Slack.",sidebar_position:11.2,slug:"/integrations/slack"},s="Slack integration",c={unversionedId:"integrations/slack",id:"integrations/slack",title:"Slack",description:"Learn how to integrate your Apify actors with Slack. This article guides you from installation through to automating your whole workflow in Slack.",source:"@site/sources/platform/integrations/slack.md",sourceDirName:"integrations",slug:"/integrations/slack",permalink:"/platform/integrations/slack",draft:!1,tags:[],version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1674755822,formattedLastUpdatedAt:"Jan 26, 2023",sidebarPosition:11.2,frontMatter:{title:"Slack",description:"Learn how to integrate your Apify actors with Slack. This article guides you from installation through to automating your whole workflow in Slack.",sidebar_position:11.2,slug:"/integrations/slack"},sidebar:"docs",previous:{title:"Ad-hoc webhooks",permalink:"/platform/integrations/webhooks/ad-hoc-webhooks"},next:{title:"Access rights",permalink:"/platform/access-rights"}},p={},u=[{value:"Get started",id:"get-started",level:2},{value:"Step 1: Set up the Slack integration",id:"step-one",level:2},{value:"Step 2: Give the Apify integration a trial run!",id:"step-two",level:2},{value:"Step 3: Start your run directly from Slack",id:"step-three",level:2}],f={toc:u};function k(t){var e=t.components,l=(0,r.Z)(t,i);return(0,o.kt)("wrapper",(0,a.Z)({},f,l,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"slack-integration"},"Slack integration"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Learn how to integrate your Apify actors with Slack. This article guides you from installation through to automating your whole workflow in Slack.")),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://slack.com/",target:"_blank",rel:"noopener"},"Slack")," allows you to install various services in your workspace in order to automate and centralize jobs. Apify is one of these services, and it allows you to run your Apify actors, be notified about their run status, and get your results, all without opening your browser."),(0,o.kt)("h2",{id:"get-started"},"Get started"),(0,o.kt)("p",null,"To use the Apify integration for Slack, you will need:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"An ",(0,o.kt)("a",{parentName:"li",href:"https://console.apify.com/",target:"_blank",rel:"noopener"},"Apify account"),"."),(0,o.kt)("li",{parentName:"ul"},"A Slack account (and workspace).")),(0,o.kt)("h2",{id:"step-one"},"Step 1: Set up the Slack integration"),(0,o.kt)("p",null,"You can find all integrations on an actor's or task's ",(0,o.kt)("strong",{parentName:"p"},"Integrations")," tab. For example, you can try using the ",(0,o.kt)("a",{parentName:"p",href:"https://console.apify.com/actors/aLTexEuCetoJNL9bL",target:"_blank",rel:"noopener"},"Google Shopping Scraper"),"."),(0,o.kt)("p",null,"Find the Slack integration, then click the ",(0,o.kt)("strong",{parentName:"p"},"Configure")," button. You will be prompted to log in with your Slack account and select your workspace in the ",(0,o.kt)("strong",{parentName:"p"},"Settings > Integrations")," window."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Integrations tab",src:n(8003).Z,width:"1194",height:"570"})),(0,o.kt)("p",null,"Then, head back to your task to finish the setup. Select what type of events you would like to be notified of (e.g., when a run is created, when a run succeeds, when a run fails, etc.), your workspace, and the channel you want to receive the notifications in (you can set up an ad-hoc channel for this test). In the ",(0,o.kt)("strong",{parentName:"p"},"Message")," field, you can see how the notification will look, or you can craft a new custom one."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Integration setup",src:n(76555).Z,width:"2000",height:"1260"})),(0,o.kt)("p",null,"Once you are done, click the ",(0,o.kt)("strong",{parentName:"p"},"Save")," button."),(0,o.kt)("h2",{id:"step-two"},"Step 2: Give the Apify integration a trial run!"),(0,o.kt)("p",null,"Click the ",(0,o.kt)("strong",{parentName:"p"},"Start")," button and head to the Slack channel you selected to see your first Apify integration notifications."),(0,o.kt)("h2",{id:"step-three"},"Step 3: Start your run directly from Slack"),(0,o.kt)("p",null,"You can now run the same actor or task directly from Slack by typing ",(0,o.kt)("inlineCode",{parentName:"p"},"/apify call [actor/task name]")," into the Slack message box."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Use Apify from Slack",src:n(93478).Z,width:"1362",height:"476"})),(0,o.kt)("p",null,"When an actor doesn\u2019t require you to fill in any input fields, you can run it by simply typing ",(0,o.kt)("inlineCode",{parentName:"p"},"/apify call [actor/task name]"),"."),(0,o.kt)("p",null,"You\u2019re all set! If you have any questions or need help, feel free to reach out to us on our ",(0,o.kt)("a",{parentName:"p",href:"https://discord.com/invite/jyEM2PRvMU",target:"_blank",rel:"noopener"},"Discord channel"),"."))}k.isMDXComponent=!0},8003:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/integrations-tab-ccd1902979bfea9812a6de7046ec6f04.png"},93478:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/slack-apify-message-6c772c8d007770c873bfdc0f4201e80e.png"},76555:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/slack-integration-setup-0b413d14c705608f5d6a73e0ee5b5e05.png"}}]);