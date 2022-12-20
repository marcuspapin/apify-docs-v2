"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[9880],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(a),c=r,h=u["".concat(l,".").concat(c)]||u[c]||m[c]||o;return a?n.createElement(h,i(i({ref:t},d),{},{components:a})):n.createElement(h,i({ref:t},d))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},17934:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>c,frontMatter:()=>s,metadata:()=>p,toc:()=>u});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),i=["components"],s={title:"Monitor shared datasets",description:"A step-by-step monitoring tutorial that shows you how to monitor and ensure consistency in named datasets which aggregate data from multiple actors or tasks.",sidebar_position:6.3,category:"guides",slug:"/monitoring/monitor-shared-datasets"},l="[](#monitor-shared-named-datasets) Monitor shared named datasets",p={unversionedId:"monitoring/monitor_shared_datasets",id:"monitoring/monitor_shared_datasets",title:"Monitor shared datasets",description:"A step-by-step monitoring tutorial that shows you how to monitor and ensure consistency in named datasets which aggregate data from multiple actors or tasks.",source:"@site/sources/platform/monitoring/monitor_shared_datasets.md",sourceDirName:"monitoring",slug:"/monitoring/monitor-shared-datasets",permalink:"/platform/monitoring/monitor-shared-datasets",draft:!1,tags:[],version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1671540496,formattedLastUpdatedAt:"Dec 20, 2022",sidebarPosition:6.3,frontMatter:{title:"Monitor shared datasets",description:"A step-by-step monitoring tutorial that shows you how to monitor and ensure consistency in named datasets which aggregate data from multiple actors or tasks.",sidebar_position:6.3,category:"guides",slug:"/monitoring/monitor-shared-datasets"},sidebar:"defaultSidebar",previous:{title:"Check data quality",permalink:"/platform/monitoring/check-data-quality"},next:{title:"Monitor multiple tasks",permalink:"/platform/monitoring/monitor-multiple-tasks"}},d={},u=[{value:" Use case",id:"-use-case",level:2},{value:" Create a new monitoring task",id:"-create-a-new-monitoring-task",level:2},{value:" Monitoring configuration",id:"-monitoring-configuration",level:2},{value:" Validate data",id:"-validate-data",level:2},{value:" Check for duplicates",id:"-check-for-duplicates",level:2},{value:" Set up data visualization",id:"-set-up-data-visualization",level:2}],m={toc:u};function c(e){var t=e.components,s=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"-monitor-shared-named-datasets"},(0,o.kt)("a",{parentName:"h1",href:"#monitor-shared-named-datasets",target:null,rel:null})," Monitor shared named datasets"),(0,o.kt)("p",null,"This example walks you through setting up ",(0,o.kt)("a",{parentName:"p",href:"https://apify.com/apify/monitoring",target:"_blank",rel:"noopener"},"monitoring")," for a ",(0,o.kt)("a",{parentName:"p",href:"../storage/dataset.md",target:null,rel:null},"dataset")," add data."),(0,o.kt)("h2",{id:"-use-case"},(0,o.kt)("a",{parentName:"h2",href:"#use-case",target:null,rel:null})," Use case"),(0,o.kt)("p",null,"You have two or more ",(0,o.kt)("a",{parentName:"p",href:"../../academy/getting_started/actors.md",target:null,rel:null},"actors"),"."),(0,o.kt)("p",null,"You need:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Data to always be in the ",(0,o.kt)("a",{parentName:"li",href:"#validate-data",target:null,rel:null},"correct format"),"."),(0,o.kt)("li",{parentName:"ul"},"Alerts if items are ",(0,o.kt)("a",{parentName:"li",href:"#check-for-duplicates",target:null,rel:null},"duplicated"),"."),(0,o.kt)("li",{parentName:"ul"},"[Notification]","({{@link monitoring.md#notifications}}) when your scheduled run finishes successfully."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#set-up-data-visualization",target:null,rel:null},"Data visualization")," on a simple dashboard.")),(0,o.kt)("p",null,"For this use case, we will imagine you want to scrape fresh jokes from two websites and ",(0,o.kt)("a",{parentName:"p",href:"../storage/dataset.md",target:null,rel:null},"store them in a single named dataset")," daily."),(0,o.kt)("p",null,"You created two tasks from ",(0,o.kt)("strong",{parentName:"p"},"Web Scraper")," (",(0,o.kt)("a",{parentName:"p",href:"https://apify.com/apify/web-scraper",target:"_blank",rel:"noopener"},"apify/web-scraper"),") and set them to save the results in the desired dataset. Next, you need to test (validate/verify) your data to make sure it fits your needs. To avoid creating separate software that will do this, you can use our ",(0,o.kt)("a",{parentName:"p",href:"https://apify.com/apify/monitoring",target:"_blank",rel:"noopener"},"monitoring suite"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Joke tasks",src:a(11661).Z,width:"2050",height:"488"})),(0,o.kt)("p",null,"Each of the above tasks handles a different website. After the tasks finish successfully, they call the monitoring actor using a ","[webhook]","({{@link integrations/webhooks.md}}) that handles the data aggregation."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Joke schedule",src:a(67310).Z,width:"1800",height:"738"})),(0,o.kt)("p",null,"The two extraction tasks are ",(0,o.kt)("a",{parentName:"p",href:"/platform/schedules",target:null,rel:null},"scheduled")," to run every day using the ",(0,o.kt)("inlineCode",{parentName:"p"},"@daily")," ",(0,o.kt)("a",{parentName:"p",href:"https://crontab.guru",target:"_blank",rel:"noopener"},"cron")," expression. They produce a new named dataset each day. The ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Naming_convention_(programming)",target:"_blank",rel:"noopener"},"naming convention")," for the dataset is ",(0,o.kt)("inlineCode",{parentName:"p"},"DAILY-JOKES-<DateOfTheDay>"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Joke storage",src:a(56628).Z,width:"1500",height:"633"})),(0,o.kt)("p",null,"Now, to the monitoring part. For this tutorial, let's skip the monitoring of the tasks and jump right to the dataset."),(0,o.kt)("h2",{id:"-create-a-new-monitoring-task"},(0,o.kt)("a",{parentName:"h2",href:"#create-a-new-monitoring-task",target:null,rel:null})," Create a new monitoring task"),(0,o.kt)("p",null,"If you haven't already, ","[add the monitoring suite to your account]","({{@link monitoring.md#add-the-monitoring-suite-to-your-account}})."),(0,o.kt)("p",null,"If you have already added the task, under its ",(0,o.kt)("strong",{parentName:"p"},"Settings")," tab, give it a name. For example, ",(0,o.kt)("strong",{parentName:"p"},"monitoring-jokes"),"."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"We recommend prefixing your monitoring task names with ",(0,o.kt)("strong",{parentName:"p"},"monitoring-")," so you could identify them easier.")),(0,o.kt)("p",null,"Next, we will configure the monitoring suite."),(0,o.kt)("h2",{id:"-monitoring-configuration"},(0,o.kt)("a",{parentName:"h2",href:"#monitoring-configuration",target:null,rel:null})," Monitoring configuration"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Under your task's ",(0,o.kt)("strong",{parentName:"p"},"Input")," tab, set the ",(0,o.kt)("strong",{parentName:"p"},"Mode")," dropdown to ",(0,o.kt)("strong",{parentName:"p"},"Create configuration"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Next, open the ",(0,o.kt)("strong",{parentName:"p"},"What you want to monitor")," section. Give the monitoring suite a name in the ",(0,o.kt)("strong",{parentName:"p"},"Monitoring suite name")," field, e.g. ",(0,o.kt)("strong",{parentName:"p"},"daily-jokes"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the ",(0,o.kt)("strong",{parentName:"p"},"Type of target:")," dropdown, select ",(0,o.kt)("strong",{parentName:"p"},"Dataset"),", since you will be monitoring a shared dataset.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Target name patterns")," should be the name of your dataset, ",(0,o.kt)("strong",{parentName:"p"},"DAILY-JOKES"),". If you want to use a more strict pattern, you can use ",(0,o.kt)("strong",{parentName:"p"},"^DAILY-JOKES"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select the ",(0,o.kt)("strong",{parentName:"p"},"Notify me whenever actor/task does not succeed")," option to receive a report when a run finishes unsuccessfully."))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Each of your monitoring suites must have a unique name.")),(0,o.kt)("p",null,"Your configuration will look like this:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Monitoring configuration",src:a(70006).Z,width:"1500",height:"730"})),(0,o.kt)("h2",{id:"-validate-data"},(0,o.kt)("a",{parentName:"h2",href:"#validate-data",target:null,rel:null})," Validate data"),(0,o.kt)("p",null,"Now, let's ensure that your jokes are in the correct form. Each joke's dataset item should contain a ",(0,o.kt)("inlineCode",{parentName:"p"},"title")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"text"),". Both values should be ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String",target:"_blank",rel:"noopener"},"strings"),"."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open the ",(0,o.kt)("strong",{parentName:"p"},"Validating by a schema")," section and select the ",(0,o.kt)("strong",{parentName:"p"},"Enable schema validation")," option.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the ",(0,o.kt)("strong",{parentName:"p"},"Validation options")," field, create an ",(0,o.kt)("a",{parentName:"p",href:"https://javascript.info/object",target:"_blank",rel:"noopener"},"object")," containing a ",(0,o.kt)("inlineCode",{parentName:"p"},"schema")," key. As its value, set an object specifying the format of each of the properties you want to validate.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Make sure you set ",(0,o.kt)("strong",{parentName:"p"},"Validation frequency")," to something other than ",(0,o.kt)("strong",{parentName:"p"},"Per run")," because datasets don't have runs. You can use ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/darkeyedevelopers/natural-cron.js",target:"_blank",rel:"noopener"},"natural language cron expressions"),", so in this instance, you can set frequency to ",(0,o.kt)("strong",{parentName:"p"},"Every day at noon"),"."))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Monitoring dashboard configuration - validate",src:a(72460).Z,width:"1500",height:"811"})),(0,o.kt)("p",null,"The monitoring suite uses the ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/ow",target:"_blank",rel:"noopener"},"ow")," library for type validation. Make sure to import the library using ",(0,o.kt)("inlineCode",{parentName:"p"},"/* global ow */"),"."),(0,o.kt)("h2",{id:"-check-for-duplicates"},(0,o.kt)("a",{parentName:"h2",href:"#check-for-duplicates",target:null,rel:null})," Check for duplicates"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the ",(0,o.kt)("strong",{parentName:"p"},"Check for duplicates")," section, select the ",(0,o.kt)("strong",{parentName:"p"},"Enable duplicate items check")," option.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Set the first ",(0,o.kt)("strong",{parentName:"p"},"Unique keys")," field to ",(0,o.kt)("inlineCode",{parentName:"p"},"title"),". Click ",(0,o.kt)("strong",{parentName:"p"},"Add")," and set the second field to ",(0,o.kt)("inlineCode",{parentName:"p"},"text"),". This will ensure that the titles and jokes are unique.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Just like with validation frequency, set the ",(0,o.kt)("strong",{parentName:"p"},"Check frequency")," to something other than ",(0,o.kt)("strong",{parentName:"p"},"Per run")," (check step 3 for tips)."))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Monitoring duplication configuration",src:a(22982).Z,width:"1500",height:"906"})),(0,o.kt)("h2",{id:"-set-up-data-visualization"},(0,o.kt)("a",{parentName:"h2",href:"#set-up-data-visualization",target:null,rel:null})," Set up data visualization"),(0,o.kt)("p",null,"You can configure data visualization in the ",(0,o.kt)("strong",{parentName:"p"},"Statistics dashboard")," section. To enable it, check the ",(0,o.kt)("strong",{parentName:"p"},"Enable dashboard")," option."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Enable monitoring dashboard",src:a(89528).Z,width:"1632",height:"528"})))}c.isMDXComponent=!0},89528:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/enable-dashboard-a4a5e9861ab5378505fcdf39a159695d.webp"},22982:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/joke-duplicates-960bff6332d503441001f231a932f541.webp"},70006:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/joke-monitoring-config-ec1d2d728424e19a2ee115de28dc2f21.webp"},67310:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/joke-schedule-154bf9c09a855706e421ba66e746256c.webp"},11661:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/joke-scraper-tasks-c2ebdbaf57078681208e124a40db978a.webp"},56628:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/joke-storage-420be95b33dd3d02728ec4e5144ccb2a.webp"},72460:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/joke-validate-schema-25af9a7761f4c7877f843ab33995ddb7.webp"}}]);