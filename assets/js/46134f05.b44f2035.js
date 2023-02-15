"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[9773],{3905:(t,e,o)=>{o.d(e,{Zo:()=>u,kt:()=>f});var a=o(67294);function n(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function r(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,a)}return o}function i(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?r(Object(o),!0).forEach((function(e){n(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function s(t,e){if(null==t)return{};var o,a,n=function(t,e){if(null==t)return{};var o,a,n={},r=Object.keys(t);for(a=0;a<r.length;a++)o=r[a],e.indexOf(o)>=0||(n[o]=t[o]);return n}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)o=r[a],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(n[o]=t[o])}return n}var l=a.createContext({}),p=function(t){var e=a.useContext(l),o=e;return t&&(o="function"==typeof t?t(e):i(i({},e),t)),o},u=function(t){var e=p(t.components);return a.createElement(l.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var o=t.components,n=t.mdxType,r=t.originalType,l=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),m=p(o),f=n,d=m["".concat(l,".").concat(f)]||m[f]||c[f]||r;return o?a.createElement(d,i(i({ref:e},u),{},{components:o})):a.createElement(d,i({ref:e},u))}));function f(t,e){var o=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var r=o.length,i=new Array(r);i[0]=m;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:n,i[1]=s;for(var p=2;p<r;p++)i[p]=o[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}m.displayName="MDXCreateElement"},95581:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>u,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var a=o(87462),n=o(63366),r=(o(67294),o(3905)),i=["components"],s={title:"Monitoring",description:"Learn how to check the performance of your actors, tasks and storages. Validate your data and receive notifications when your jobs succeed or fail.",sidebar_position:6,category:"guides",slug:"/monitoring"},l="What is monitoring?",p={unversionedId:"monitoring/index",id:"monitoring/index",title:"Monitoring",description:"Learn how to check the performance of your actors, tasks and storages. Validate your data and receive notifications when your jobs succeed or fail.",source:"@site/sources/platform/monitoring/index.md",sourceDirName:"monitoring",slug:"/monitoring",permalink:"/platform/monitoring",draft:!1,editUrl:"https://github.com/apify/apify-docs-v2/edit/master/sources/platform/monitoring/index.md",tags:[],version:"current",lastUpdatedBy:"Vlad Frangu",lastUpdatedAt:1676463577,formattedLastUpdatedAt:"Feb 15, 2023",sidebarPosition:6,frontMatter:{title:"Monitoring",description:"Learn how to check the performance of your actors, tasks and storages. Validate your data and receive notifications when your jobs succeed or fail.",sidebar_position:6,category:"guides",slug:"/monitoring"},sidebar:"docs",previous:{title:"Tips and tricks",permalink:"/platform/robotic-process-automation/tips-and-tricks"},next:{title:"Actor or task run failure",permalink:"/platform/monitoring/actor-or-task-run-failure"}},u={},c=[{value:"What can I gain from monitoring?",id:"what-can-i-gain-from-monitoring",level:2},{value:"What is the Apify monitoring suite?",id:"what-is-the-apify-monitoring-suite",level:2},{value:"How does it work?",id:"how-does-it-work",level:2},{value:"How much does it cost?",id:"how-much-does-it-cost",level:2},{value:"How can I set up monitoring?",id:"how-can-i-set-up-monitoring",level:2},{value:"How do I turn it off or make changes?",id:"how-do-i-turn-it-off-or-make-changes",level:2},{value:"Add the monitoring suite to your account",id:"add-the-monitoring-suite-to-your-account",level:3},{value:"Notifications",id:"notifications",level:2},{value:"Example of a failed run",id:"example-of-a-failed-run",level:3}],m={toc:c};function f(t){var e=t.components,s=(0,n.Z)(t,i);return(0,r.kt)("wrapper",(0,a.Z)({},m,s,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"what-is-monitoring"},"What is monitoring?"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Learn how to check the performance of your actors, tasks and storages. Validate your data and receive notifications when your jobs succeed or fail.")),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Monitoring allows you to track and observe how software works. It enables you to measure and compare your programs' performance over time, and to be notified when something goes wrong."),(0,r.kt)("p",null,"You can use data you gain from monitoring to optimize your software and maximize its potential."),(0,r.kt)("h2",{id:"what-can-i-gain-from-monitoring"},"What can I gain from monitoring?"),(0,r.kt)("p",null,"In essence, monitoring gives you more time. It allows you to automate processes that are complicated or tedious if you have to do them manually."),(0,r.kt)("p",null,"If you are ",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=BsidLZKdYWQ",target:"_blank",rel:"noopener"},"scraping your competitor's website")," every day, you have already automated a part of the process. With monitoring, you can save even more time and ensure all your results are usable even before you need them."),(0,r.kt)("p",null,"And if the scraping job fails, you will receive a notification, so there will be no unpleasant surprises."),(0,r.kt)("h2",{id:"what-is-the-apify-monitoring-suite"},"What is the Apify monitoring suite?"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://apify.com/apify/monitoring",target:"_blank",rel:"noopener"},"monitoring suite")," is a collection of ",(0,r.kt)("a",{parentName:"p",href:"/platform/actors",target:null,rel:null},"Apify actors")," that allows you to automate the monitoring of jobs you have running on the ",(0,r.kt)("a",{parentName:"p",href:"https://apify.com",target:"_blank",rel:"noopener"},"Apify platform"),"."),(0,r.kt)("p",null,"You can use it to monitor anything from a single actor to complex projects spanning multiple actors, ",(0,r.kt)("a",{parentName:"p",href:"/platform/actors/tasks",target:null,rel:null},"tasks")," or ",(0,r.kt)("a",{parentName:"p",href:"/platform/storage",target:null,rel:null},"storages"),"."),(0,r.kt)("h2",{id:"how-does-it-work"},"How does it work?"),(0,r.kt)("p",null,"The monitoring suite is made up of a system of actors: ",(0,r.kt)("strong",{parentName:"p"},"checkers")," and ",(0,r.kt)("strong",{parentName:"p"},"reporters"),". Based on your configuration, the suite will create ",(0,r.kt)("a",{parentName:"p",href:"/platform/schedules",target:null,rel:null},"schedules")," and ",(0,r.kt)("a",{parentName:"p",href:"/platform/integrations/webhooks",target:null,rel:null},"webhooks")," under your account and use those to run these actors."),(0,r.kt)("p",null,"As the names suggest, the checkers make sure your data is up to standard. Reporters create visualizations of how your actors perform over time and send ",(0,r.kt)("a",{parentName:"p",href:"#notifications",target:null,rel:null},"notifications")," about failed runs."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Monitoring dashboard",src:o(53459).Z,width:"1500",height:"734"})),(0,r.kt)("h2",{id:"how-much-does-it-cost"},"How much does it cost?"),(0,r.kt)("p",null,"You can use the monitoring suite ",(0,r.kt)("strong",{parentName:"p"},"free of charge"),", but under the hood, it is a system of actors that consume ",(0,r.kt)("a",{parentName:"p",href:"https://help.apify.com/en/articles/3490384-what-is-a-compute-unit",target:"_blank",rel:"noopener"},"compute units")," (CUs). We have tried our best to make it as efficient as possible."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Medium projects (single monitoring configuration with 5-20 daily running monitored tasks or actors) should consume around ",(0,r.kt)("strong",{parentName:"li"},"10 CUs per month"),"."),(0,r.kt)("li",{parentName:"ul"},"Bigger projects (more monitoring configurations with more than 20 daily running tasks or actors) can exceed ",(0,r.kt)("strong",{parentName:"li"},"50 CUs+ per month"),".")),(0,r.kt)("h2",{id:"how-can-i-set-up-monitoring"},"How can I set up monitoring?"),(0,r.kt)("p",null,"We currently have video tutorials for setting up monitoring and adding data validation."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=bLVk5dkFA7Y",target:"_blank",rel:"noopener"},"Set up monitoring"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=Yha8X4cLtw8",target:"_blank",rel:"noopener"},"Add data validation"),"."))),(0,r.kt)("p",null,"We also have written tutorials for the following use cases."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/platform/monitoring/actor-or-task-run-failure",target:null,rel:null},"Monitor actor or task runs for failure"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/platform/monitoring/check-data-quality",target:null,rel:null},"Checking product-based data for correct format and duplicates"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/platform/monitoring/monitor-shared-datasets",target:null,rel:null},"Monitoring shared datasets"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/platform/monitoring/monitor-multiple-tasks",target:null,rel:null},"Monitoring multiple actors or tasks")))),(0,r.kt)("h2",{id:"how-do-i-turn-it-off-or-make-changes"},"How do I turn it off or make changes?"),(0,r.kt)("p",null,"To turn off a monitoring task, simply run it with the ",(0,r.kt)("strong",{parentName:"p"},"Mode")," (in the task's ",(0,r.kt)("strong",{parentName:"p"},"Input")," section) set to ",(0,r.kt)("strong",{parentName:"p"},"Delete configuration"),". It will clean up all its resources and turn off all monitoring activity. You will no longer receive ",(0,r.kt)("a",{parentName:"p",href:"#notifications",target:null,rel:null},"notifications"),"."),(0,r.kt)("p",null,"To make any changes to an existing configuration, choose the ",(0,r.kt)("strong",{parentName:"p"},"Update configuration")," mode in the task's ",(0,r.kt)("strong",{parentName:"p"},"Input"),", make your changes and run the monitoring suite task again."),(0,r.kt)("h3",{id:"add-the-monitoring-suite-to-your-account"},"Add the monitoring suite to your account"),(0,r.kt)("p",null,"On the monitoring suite's ",(0,r.kt)("a",{parentName:"p",href:"https://apify.com/apify/monitoring",target:"_blank",rel:"noopener"},"page")," in ",(0,r.kt)("a",{parentName:"p",href:"https://apify.com/store",target:"_blank",rel:"noopener"},"Apify Store"),", click the ",(0,r.kt)("strong",{parentName:"p"},"Try for free")," button. This will take you to the ",(0,r.kt)("a",{parentName:"p",href:"https://console.apify.com",target:"_blank",rel:"noopener"},"Apify Console"),", add the suite to your ",(0,r.kt)("a",{parentName:"p",href:"https://console.apify.com/actors",target:"_blank",rel:"noopener"},"list of actors")," and create a new ",(0,r.kt)("a",{parentName:"p",href:"/platform/actors/tasks",target:null,rel:null},"task"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Monitoring actor in Apify Store",src:o(41543).Z,width:"2502",height:"568"})),(0,r.kt)("h2",{id:"notifications"},"Notifications"),(0,r.kt)("p",null,"The suite will send notifications to the ",(0,r.kt)("a",{parentName:"p",href:"https://console.apify.com/account",target:"_blank",rel:"noopener"},"email address associated with your account")," by default."),(0,r.kt)("p",null,"You can disable email notifications or change the email address in a task ",(0,r.kt)("strong",{parentName:"p"},"Input"),"'s ",(0,r.kt)("strong",{parentName:"p"},"Email notifications")," section."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Customize notifications",src:o(9326).Z,width:"1620",height:"634"})),(0,r.kt)("p",null,"If you use ",(0,r.kt)("a",{parentName:"p",href:"https://slack.com/",target:"_blank",rel:"noopener"},"Slack"),", we suggest using Slack notifications instead of email. More details and setup instructions ",(0,r.kt)("a",{parentName:"p",href:"https://apify.com/apify/monitoring#notifications",target:"_blank",rel:"noopener"},"here"),"."),(0,r.kt)("h3",{id:"example-of-a-failed-run"},"Example of a failed run"),(0,r.kt)("p",null,"Below is an example of an email notification for a task run that did not return enough results."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Failed run example",src:o(80613).Z,width:"1686",height:"828"})),(0,r.kt)("p",null,"To see what went wrong, click on the ",(0,r.kt)("strong",{parentName:"p"},"time")," next to ",(0,r.kt)("strong",{parentName:"p"},"Actor run")," to open your task's ",(0,r.kt)("strong",{parentName:"p"},"Runs")," dashboard. When you click on ",(0,r.kt)("strong",{parentName:"p"},"Details"),", you'll find a detailed monitoring report in JSON format."))}f.isMDXComponent=!0},9326:(t,e,o)=>{o.d(e,{Z:()=>a});const a=o.p+"assets/images/customize-notifications-fd44d9277a57589a043a0fa684bfec3c.png"},53459:(t,e,o)=>{o.d(e,{Z:()=>a});const a=o.p+"assets/images/monitoring-dashboard-f81e95339d49ce041c06ce33b7826b8e.png"},41543:(t,e,o)=>{o.d(e,{Z:()=>a});const a=o.p+"assets/images/monitoring-in-store-3fe4472a930229a13ea92e6f60f63471.png"},80613:(t,e,o)=>{o.d(e,{Z:()=>a});const a=o.p+"assets/images/puppies-failed-run-1b83b815f31a17842f6b948076c05c2b.png"}}]);