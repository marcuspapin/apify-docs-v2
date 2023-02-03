"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[8408],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(a),d=r,m=c["".concat(s,".").concat(d)]||c[d]||h[d]||o;return a?n.createElement(m,l(l({ref:t},u),{},{components:a})):n.createElement(m,l({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},88959:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>h});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),l=["components"],i={title:"Run actor and retrieve data via API",description:"Learn how to run an actor/task via the Apify API, wait for the job to finish, and retrieve its output data. Your key to integrating actors with your projects.",sidebar_position:6,slug:"/tutorials/integrations/run-actor-and-retrieve-data-via-api"},s="Run an actor or task and retrieve data via API",p={unversionedId:"tutorials/run_actor_and_retrieve_data_via_api",id:"tutorials/run_actor_and_retrieve_data_via_api",title:"Run actor and retrieve data via API",description:"Learn how to run an actor/task via the Apify API, wait for the job to finish, and retrieve its output data. Your key to integrating actors with your projects.",source:"@site/sources/platform/tutorials/run_actor_and_retrieve_data_via_api.md",sourceDirName:"tutorials",slug:"/tutorials/integrations/run-actor-and-retrieve-data-via-api",permalink:"/platform/tutorials/integrations/run-actor-and-retrieve-data-via-api",draft:!1,editUrl:"https://github.com/apify/apify-docs-v2/edit/master/sources/platform/tutorials/run_actor_and_retrieve_data_via_api.md",tags:[],version:"current",lastUpdatedBy:"Jind\u0159ich B\xe4r",lastUpdatedAt:1675435463,formattedLastUpdatedAt:"Feb 3, 2023",sidebarPosition:6,frontMatter:{title:"Run actor and retrieve data via API",description:"Learn how to run an actor/task via the Apify API, wait for the job to finish, and retrieve its output data. Your key to integrating actors with your projects.",sidebar_position:6,slug:"/tutorials/integrations/run-actor-and-retrieve-data-via-api"},sidebar:"docs",previous:{title:"Use Apify from PHP",permalink:"/platform/tutorials/use-apify-from-php"},next:{title:"Web scraping 101",permalink:"/platform/web-scraping-101"}},u={},h=[{value:"Run an actor or task",id:"run-an-actor-or-task",level:2},{value:"Additional settings",id:"additional-settings",level:3},{value:"Input JSON",id:"input-json",level:3},{value:"Synchronous flow",id:"synchronous-flow",level:2},{value:"Synchronous runs with dataset output",id:"synchronous-runs-with-dataset-output",level:3},{value:"Synchronous runs with key-value store output",id:"synchronous-runs-with-key-value-store-output",level:3},{value:"Asynchronous flow",id:"asynchronous-flow",level:2},{value:"Wait for the run to finish",id:"wait-for-the-run-to-finish",level:3},{value:"<code>waitForFinish</code> parameter",id:"waitforfinish-parameter",level:4},{value:"Webhooks",id:"webhooks",level:4},{value:"Polling",id:"polling",level:4},{value:"Collecting the data",id:"collect-the-data",level:3},{value:"Retrieving a dataset",id:"retrieve-a-dataset",level:4},{value:"Retrieving a key-value store",id:"retrieve-a-key-value-store",level:4}],c={toc:h};function d(e){var t=e.components,i=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"run-an-actor-or-task-and-retrieve-data-via-api"},"Run an actor or task and retrieve data via API"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Learn how to run an actor/task via the Apify API, wait for the job to finish, and retrieve its output data. Your key to integrating actors with your projects.")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"The most popular way of ",(0,o.kt)("a",{parentName:"p",href:"https://help.apify.com/en/collections/1669767-integrating-with-apify",target:"_blank",rel:"noopener"},"integrating")," the Apify platform with an external project/application is by programmatically running an ",(0,o.kt)("a",{parentName:"p",href:"/platform/actors",target:null,rel:null},"actor")," or ",(0,o.kt)("a",{parentName:"p",href:"/platform/actors/tasks",target:null,rel:null},"task"),", waiting for it to complete its run, then collecting its data and using it within the project. Though this process sounds somewhat complicated, it's actually quite easy to do; however, due to the plethora of features offered on the Apify platform, new users may not be sure how exactly to implement this type of integration. So, let's dive in and see how you can do it."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Remember to check out our ",(0,o.kt)("a",{parentName:"p",href:"/api/v2",target:null,rel:null},"API documentation")," with examples in different languages and a live API console. We also recommend testing the API with a nice desktop client like ",(0,o.kt)("a",{parentName:"p",href:"https://www.getpostman.com/",target:"_blank",rel:"noopener"},"Postman")," or ",(0,o.kt)("a",{parentName:"p",href:"https://insomnia.rest",target:"_blank",rel:"noopener"},"Insomnia"),".")),(0,o.kt)("p",null,"There are 2 main ways of using the Apify API:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#synchronous-flow",target:null,rel:null},"Synchronously")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#asynchronous-flow",target:null,rel:null},"Asynchronously"))),(0,o.kt)("p",null,"If the actor being run via API takes 5 minutes or less to complete a typical run, it should be called ",(0,o.kt)("strong",{parentName:"p"},"synchronously"),". Otherwise, (if a typical run takes longer than 5 minutes), it should be called ",(0,o.kt)("strong",{parentName:"p"},"asynchronously"),"."),(0,o.kt)("h2",{id:"run-an-actor-or-task"},"Run an actor or task"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If you are unsure about the differences between an actor and task, you can read about them in the ",(0,o.kt)("a",{parentName:"p",href:"/platform/actors/tasks",target:null,rel:null},"tasks")," documentation. In brief, tasks are just pre-configured inputs for actors.")),(0,o.kt)("p",null,"The API endpoints and usage (for both sync and async) for ",(0,o.kt)("a",{parentName:"p",href:"/api/v2#/reference/actors/run-collection/run-actor",target:null,rel:null},"actors")," and ",(0,o.kt)("a",{parentName:"p",href:"/api/v2#/reference/actor-tasks/run-collection/run-task",target:null,rel:null},"tasks")," are essentially the same."),(0,o.kt)("p",null,"To run, or ",(0,o.kt)("strong",{parentName:"p"},"call"),", an actor/task, you will need a few things:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The name or ID of the actor/task. The name looks like ",(0,o.kt)("inlineCode",{parentName:"p"},"username~actorName")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"username~taskName"),". The ID can be retrieved on the ",(0,o.kt)("strong",{parentName:"p"},"Settings")," page of the actor/task.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Your ",(0,o.kt)("a",{parentName:"p",href:"/platform/tutorials/integrations",target:null,rel:null},"API token"),", which you can find on the ",(0,o.kt)("strong",{parentName:"p"},"Integrations")," page in the ",(0,o.kt)("a",{parentName:"p",href:"https://console.apify.com/account?tab=integrations",target:"_blank",rel:"noopener"},"Apify Console")," (make sure it does not get leaked anywhere!).")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Possibly an input, which is passed in JSON format as the request's ",(0,o.kt)("strong",{parentName:"p"},"body"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Some other optional settings if you'd like to change the default values (such as allocated memory or the build)."))),(0,o.kt)("p",null,"The URL for a ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/POST",target:"_blank",rel:"noopener"},"POST request")," to run an actor looks like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cURL"},"https://api.apify.com/v2/acts/ACTOR_NAME_OR_ID/runs?token=YOUR_TOKEN\n")),(0,o.kt)("p",null,"For tasks, we can just switch the path from ",(0,o.kt)("strong",{parentName:"p"},"acts")," to ",(0,o.kt)("strong",{parentName:"p"},"actor-tasks")," and keep the rest the same:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cURL"},"https://api.apify.com/v2/actor-tasks/TASK_NAME_OR_ID/runs?token=YOUR_TOKEN\n")),(0,o.kt)("p",null,"If we send a correct POST request to one of these endpoints, the actor/actor-task will start just as if we had pressed the ",(0,o.kt)("strong",{parentName:"p"},"Start")," button on the actor's page in the ",(0,o.kt)("a",{parentName:"p",href:"https://console.apify.com",target:"_blank",rel:"noopener"},"Apify Console"),"."),(0,o.kt)("h3",{id:"additional-settings"},"Additional settings"),(0,o.kt)("p",null,"We can also add settings for the actor (which will override the default settings) as additional query parameters. For example, if we wanted to change how much memory the actor's run should be allocated and which build to run, we could simply add the ",(0,o.kt)("inlineCode",{parentName:"p"},"memory")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"build")," parameters separated by ",(0,o.kt)("inlineCode",{parentName:"p"},"&"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cURL"},"https://api.apify.com/v2/acts/ACTOR_NAME_OR_ID/runs?token=YOUR_TOKEN&memory=8192&build=beta\n")),(0,o.kt)("p",null,"This works nearly identically for both actors and tasks; however, for tasks there is no reason to specify a ",(0,o.kt)("a",{parentName:"p",href:"/platform/actors/development/builds",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"build"))," parameter, as a task already has only one specific actor build which cannot be changed with query parameters."),(0,o.kt)("h3",{id:"input-json"},"Input JSON"),(0,o.kt)("p",null,"Most actors would not be much use if input could not be passed into them to change their behavior. Additionally, even though tasks already have specified input configurations, it is handy to have the ability to overwrite task inputs through the ",(0,o.kt)("strong",{parentName:"p"},"body")," of the POST request."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The input can technically be any ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON",target:"_blank",rel:"noopener"},"JSON object"),", and will vary depending on the actor being run. Ensure that you are familiar with the actor's input schema while writing the body of the request.")),(0,o.kt)("p",null,"Good actors have reasonable defaults for most input fields, so if you want to run one of the major actors from ",(0,o.kt)("a",{parentName:"p",href:"https://apify.com/store",target:"_blank",rel:"noopener"},"Apify Store"),", you usually do not need to provide all possible fields."),(0,o.kt)("p",null,"Via API, let's quickly try to run ",(0,o.kt)("a",{parentName:"p",href:"https://apify.com/apify/web-scraper",target:"_blank",rel:"noopener"},"Web Scraper"),", which is the most popular actor on the Apify Store at the moment. The full input with all possible fields is ",(0,o.kt)("a",{parentName:"p",href:"https://apify.com/apify/web-scraper?section=example-run",target:"_blank",rel:"noopener"},"pretty long and ugly"),", so we will not show it here. Because it has default values for most fields, we can provide a simple JSON input containing only the fields we'd like to customize. We will send a POST request to the endpoint below and add the JSON as the ",(0,o.kt)("strong",{parentName:"p"},"body")," of the request:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cURL"},"https://api.apify.com/v2/acts/apify~web-scraper/runs?token=YOUR_TOKEN\n")),(0,o.kt)("p",null,"Here is how it looks in ",(0,o.kt)("a",{parentName:"p",href:"https://www.getpostman.com/",target:"_blank",rel:"noopener"},"Postman"),":"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Run an actor via API in Postman",src:a(8343).Z,width:"1200",height:"536"})),(0,o.kt)("p",null,"If we press ",(0,o.kt)("strong",{parentName:"p"},"Send"),", it will immediately return some info about the run. The ",(0,o.kt)("inlineCode",{parentName:"p"},"status")," will be either ",(0,o.kt)("inlineCode",{parentName:"p"},"READY")," (which means that it is waiting to be allocated on a server) or ",(0,o.kt)("inlineCode",{parentName:"p"},"RUNNING")," (99% of cases)."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Actor run info in Postman",src:a(11535).Z,width:"1652",height:"763"})),(0,o.kt)("p",null,"We will later use this ",(0,o.kt)("strong",{parentName:"p"},"run info")," JSON to retrieve the run's output data. This info about the run can also be retrieved with another call to the ",(0,o.kt)("a",{parentName:"p",href:"https://apify.com/docs/api/v2#/reference/actors/run-object/get-run",target:"_blank",rel:"noopener"},(0,o.kt)("strong",{parentName:"a"},"Get run"))," endpoint."),(0,o.kt)("h2",{id:"synchronous-flow"},"Synchronous flow"),(0,o.kt)("p",null,"If each of your runs will last shorter than 5 minutes, you can use a single ",(0,o.kt)("a",{parentName:"p",href:"https://usergrid.apache.org/docs/introduction/async-vs-sync.html#synchronous",target:"_blank",rel:"noopener"},"synchronous endpoint"),". When running ",(0,o.kt)("strong",{parentName:"p"},"synchronously"),", the connection will be held for ",(0,o.kt)("em",{parentName:"p"},"up to")," 5 minutes."),(0,o.kt)("p",null,"If your synchronous run exceeds the 5-minute time limit, the response will be a run object containing information about the run and the status of ",(0,o.kt)("inlineCode",{parentName:"p"},"RUNNING"),". If that happens, you need to restart the run ",(0,o.kt)("a",{parentName:"p",href:"#asynchronous-flow",target:null,rel:null},"asynchronously")," and ",(0,o.kt)("a",{parentName:"p",href:"#wait-for-the-run-to-finish",target:null,rel:null},"wait for the run to finish"),"."),(0,o.kt)("h3",{id:"synchronous-runs-with-dataset-output"},"Synchronous runs with dataset output"),(0,o.kt)("p",null,"Most actor runs will store their data in the default ",(0,o.kt)("a",{parentName:"p",href:"/platform/storage/dataset",target:null,rel:null},"dataset"),". The Apify API provides ",(0,o.kt)("strong",{parentName:"p"},"run-sync-get-dataset-items")," endpoints for ",(0,o.kt)("a",{parentName:"p",href:"/api/v2#/reference/actors/run-actor-synchronously-and-get-dataset-items/run-actor-synchronously-with-input-and-get-dataset-items",target:null,rel:null},"actors")," and ",(0,o.kt)("a",{parentName:"p",href:"/api/v2#/reference/actor-tasks/run-task-synchronously-and-get-dataset-items/run-task-synchronously-and-get-dataset-items-(post)",target:null,rel:null},"tasks"),", which allow you to run an actor and receive the items from the default dataset once the run has completed."),(0,o.kt)("p",null,"Here is a simple Node.js example of calling a task via the API and logging the dataset items to the console:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Use your favorite HTTP client\nimport got from 'got';\n\n// Specify your API token\n// (find it at https://console.apify.com/account#/integrations)\nconst myToken = <YOUR_APIFY_TOKEN>;\n\n// Start apify/google-search-scraper actor\n// and pass some queries into the JSON body\nconst response = await got({\n    url: `https://api.apify.com/v2/acts/apify~google-search-scraper/run-sync-get-dataset-items?token=${myToken}`,\n    method: 'POST',\n    json: {\n        queries: 'web scraping\\nweb crawling'\n    },\n    responseType: 'json',\n});\n\nconst items = response.body;\n\n// Log each non-promoted search result for both queries\nitems.forEach((item) => {\n    const { nonPromotedSearchResults } = item;\n    nonPromotedSearchResults.forEach((result) => {\n        const { title, url, description } = result;\n        console.log(`${title}: ${url} --- ${description}`);\n    });\n});\n")),(0,o.kt)("h3",{id:"synchronous-runs-with-key-value-store-output"},"Synchronous runs with key-value store output"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/platform/storage/key-value-store",target:null,rel:null},"Key-value stores")," are useful for storing files like images, HTML snapshots, or JSON data. The Apify API provides ",(0,o.kt)("strong",{parentName:"p"},"run-sync")," endpoints for ",(0,o.kt)("a",{parentName:"p",href:"/api/v2#/reference/actors/run-actor-synchronously/with-input",target:null,rel:null},"actors")," and ",(0,o.kt)("a",{parentName:"p",href:"/api/v2#/reference/actor-tasks/run-task-synchronously/run-task-synchronously",target:null,rel:null},"tasks"),", which allow you to run a specific task and receive the output. By default, they return the ",(0,o.kt)("inlineCode",{parentName:"p"},"OUTPUT")," record from the default key-value store."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"For more detailed information, check the ",(0,o.kt)("a",{parentName:"p",href:"/api/v2#/reference/actors/run-actor-synchronously-and-get-dataset-items/run-actor-synchronously-with-input-and-get-dataset-items",target:null,rel:null},"API reference"),".")),(0,o.kt)("h2",{id:"asynchronous-flow"},"Asynchronous flow"),(0,o.kt)("p",null,"For runs longer than 5 minutes, the process consists of three steps:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#run-an-actor-or-task",target:null,rel:null},"Run the actor or task")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#wait-for-the-run-to-finish",target:null,rel:null},"Wait for the run to finish")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#collect-the-data",target:null,rel:null},"Collect the data"))),(0,o.kt)("h3",{id:"wait-for-the-run-to-finish"},"Wait for the run to finish"),(0,o.kt)("p",null,"There may be cases where we need to simply run the actor and go away. But in any kind of integration, we are usually interested in its output. We have three basic options for how to wait for the actor/task to finish."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#waitforfinish-parameter",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"waitForFinish")," parameter")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#webhooks",target:null,rel:null},"Webhooks")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#polling",target:null,rel:null},"Polling"))),(0,o.kt)("h4",{id:"waitforfinish-parameter"},(0,o.kt)("inlineCode",{parentName:"h4"},"waitForFinish")," parameter"),(0,o.kt)("p",null,"This solution is quite similar to the synchronous flow. To make the POST request wait, add the ",(0,o.kt)("inlineCode",{parentName:"p"},"waitForFinish")," parameter. It can have a value from ",(0,o.kt)("inlineCode",{parentName:"p"},"0")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"300"),", which is the maximum time in seconds to wait (the max value for ",(0,o.kt)("inlineCode",{parentName:"p"},"waitForFinish")," is 5 minutes). Knowing this, we can extend the example URL like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cURL"},"https://api.apify.com/v2/acts/apify~web-scraper/runs?token=YOUR_TOKEN&waitForFinish=300\n")),(0,o.kt)("p",null,"You can also use the ",(0,o.kt)("inlineCode",{parentName:"p"},"waitForFinish")," parameter with the ",(0,o.kt)("a",{parentName:"p",href:"/api/v2#/reference/actors/run-object/get-run",target:null,rel:null},(0,o.kt)("strong",{parentName:"a"},"GET Run")," endpoint")," to implement a smarter ",(0,o.kt)("a",{parentName:"p",href:"#polling",target:null,rel:null},"polling")," system."),(0,o.kt)("p",null,"Once again, the final response will be the ",(0,o.kt)("strong",{parentName:"p"},"run info object"),"; however, now its status should be ",(0,o.kt)("inlineCode",{parentName:"p"},"SUCCEEDED")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"FAILED"),". If the run exceeds the ",(0,o.kt)("inlineCode",{parentName:"p"},"waitForFinish")," duration, the status will still be ",(0,o.kt)("inlineCode",{parentName:"p"},"RUNNING"),"."),(0,o.kt)("h4",{id:"webhooks"},"Webhooks"),(0,o.kt)("p",null,"If you have a server, ",(0,o.kt)("a",{parentName:"p",href:"/platform/integrations/webhooks",target:null,rel:null},"webhooks")," are the most elegant and flexible solution for integrations with Apify. You can simply set up a webhook for any actor or task, and that webhook will send a POST request to your server after an ",(0,o.kt)("a",{parentName:"p",href:"/platform/integrations/webhooks/events",target:null,rel:null},"event")," has occurred."),(0,o.kt)("p",null,"Usually, this event is a successfully finished run, but you can also set a different webhook for failed runs, etc."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Webhook example",src:a(95834).Z,width:"1300",height:"842"})),(0,o.kt)("p",null,"The webhook will send you a pretty complicated ",(0,o.kt)("a",{parentName:"p",href:"/platform/integrations/webhooks/actions",target:null,rel:null},"JSON object"),", but usually you are only interested in the ",(0,o.kt)("inlineCode",{parentName:"p"},"resource")," object within the response, which is essentially just the ",(0,o.kt)("strong",{parentName:"p"},"run info")," JSON from the previous sections. We can leave the payload template as is as for our example use case, since it is what we need."),(0,o.kt)("p",null,"Once your server receives this request from the webhook, you know that the event happened, and you can ask for the complete data."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Don't forget to respond to the webhook with a ",(0,o.kt)("strong",{parentName:"p"},"200")," status code! Otherwise, it will ping you again.")),(0,o.kt)("h4",{id:"polling"},"Polling"),(0,o.kt)("p",null,"What if you don't have a server, and the run you'd like to do is much too long to use a synchronous call? In cases like these, periodic ",(0,o.kt)("strong",{parentName:"p"},"polling")," of the run's status is the solution."),(0,o.kt)("p",null,"When we run the actor with the ",(0,o.kt)("a",{parentName:"p",href:"#run-an-actor-or-task",target:null,rel:null},"usual API call")," shown above, we will be responded back with the ",(0,o.kt)("strong",{parentName:"p"},"run info")," object. From this JSON object, we can then extract the ID of the actor run that we just started from the ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," field. Then, we can set an interval that will poll the Apify API (let's say every 5 seconds) by calling the ",(0,o.kt)("a",{parentName:"p",href:"https://apify.com/docs/api/v2#/reference/actors/run-object/get-run",target:"_blank",rel:"noopener"},(0,o.kt)("strong",{parentName:"a"},"Get run"))," endpoint to retrieve the run's status."),(0,o.kt)("p",null,"Simply replace the ",(0,o.kt)("inlineCode",{parentName:"p"},"RUN_ID")," in the following URL with the ID you extracted earlier:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cURL"},"https://api.apify.com/v2/acts/ACTOR_NAME_OR_ID/runs/RUN_ID\n")),(0,o.kt)("p",null,"Once a status of ",(0,o.kt)("inlineCode",{parentName:"p"},"SUCCEEDED")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"FAILED")," has been received, we know the run has finished and can cancel the interval and finally ",(0,o.kt)("a",{parentName:"p",href:"#collect-the-data",target:null,rel:null},"collect the data"),"."),(0,o.kt)("h3",{id:"collect-the-data"},"Collecting the data"),(0,o.kt)("p",null,"Unless you used the ",(0,o.kt)("a",{parentName:"p",href:"#synchronous-flow",target:null,rel:null},"synchronous call")," mentioned above, you will have to make one additional request to the API to retrieve the data."),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"run info")," JSON also contains the IDs of the default ",(0,o.kt)("a",{parentName:"p",href:"/platform/storage/dataset",target:null,rel:null},"dataset")," and ",(0,o.kt)("a",{parentName:"p",href:"/platform/storage/key-value-store",target:null,rel:null},"key-value store")," that are allocated separately for each run, which is usually everything you need. The fields are called ",(0,o.kt)("inlineCode",{parentName:"p"},"defaultDatasetId")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"defaultKeyValueStoreId"),"."),(0,o.kt)("h4",{id:"retrieve-a-dataset"},"Retrieving a dataset"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If you are scraping products, or any list of items with similar fields, the ",(0,o.kt)("a",{parentName:"p",href:"/platform/storage/dataset",target:null,rel:null},"dataset")," should be your storage of choice. Don't forget though, that dataset items are immutable. This means that you can only add to the dataset, and not change the content that is already inside it.")),(0,o.kt)("p",null,"Retrieving the data from a dataset is simple. Just send a GET request to the ",(0,o.kt)("a",{parentName:"p",href:"/api/v2#/reference/datasets/item-collection/get-items",target:null,rel:null},(0,o.kt)("strong",{parentName:"a"},"Get items"))," endpoint and pass the ",(0,o.kt)("inlineCode",{parentName:"p"},"defaultDatasetId")," into the URL. For a GET request to the default dataset, no token is needed."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cURL"},"https://api.apify.com/v2/datasets/DATASET_ID/items\n")),(0,o.kt)("p",null,"By default, it will return the data in JSON format with some metadata. The actual data are in the ",(0,o.kt)("inlineCode",{parentName:"p"},"items")," array."),(0,o.kt)("p",null,"There are plenty of additional parameters that you can use. You can learn about them in the ",(0,o.kt)("a",{parentName:"p",href:"/api/v2#/reference/datasets/item-collection/get-items",target:null,rel:null},"documentation"),". We will only mention that you can pass a ",(0,o.kt)("inlineCode",{parentName:"p"},"format")," parameter that transforms the response into popular formats like CSV, XML, Excel, RSS, etc."),(0,o.kt)("p",null,"The items are paginated, which means you can ask only for a subset of the data. Specify this using the ",(0,o.kt)("inlineCode",{parentName:"p"},"limit")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"offset")," parameters. There is actually an overall limit of 250,000 items that the endpoint can return per request. To retrieve more, you will need to send more requests incrementing the ",(0,o.kt)("inlineCode",{parentName:"p"},"offset")," parameter."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cURL"},"https://api.apify.com/v2/datasets/DATASET_ID/items?format=csv&offset=250000\n")),(0,o.kt)("h4",{id:"retrieve-a-key-value-store"},"Retrieving a key-value store"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"/platform/storage/key-value-store",target:null,rel:null},"Key-value stores")," are mainly useful if you have a single output or any kind of files that cannot be ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify",target:"_blank",rel:"noopener"},"stringified")," (such as images or PDFs).")),(0,o.kt)("p",null,"When you want to retrieve something from a key-value store, the ",(0,o.kt)("inlineCode",{parentName:"p"},"defaultKeyValueStoreId")," is ",(0,o.kt)("em",{parentName:"p"},"not")," enough. You also need to know the name (or ",(0,o.kt)("strong",{parentName:"p"},"key"),") of the record you want to retrieve."),(0,o.kt)("p",null,"If you have a single output JSON, the convention is to return it as a record named ",(0,o.kt)("inlineCode",{parentName:"p"},"OUTPUT")," to the default key-value store. To retrieve the record's content, call the ",(0,o.kt)("a",{parentName:"p",href:"/api/v2#/reference/key-value-stores/record/get-record",target:null,rel:null},(0,o.kt)("strong",{parentName:"a"},"Get record"))," endpoint."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cURL"},"https://api.apify.com/v2/key-value-stores/STORE_ID/records/RECORD_KEY\n")),(0,o.kt)("p",null,"If you don't know the keys (names) of the records in advance, you can retrieve just the keys with the ",(0,o.kt)("a",{parentName:"p",href:"https://apify.com/docs/api/v2#/reference/key-value-stores/key-collection/get-list-of-keys",target:"_blank",rel:"noopener"},(0,o.kt)("strong",{parentName:"a"},"List keys"))," endpoint."),(0,o.kt)("p",null,"Keep in mind that you can get a maximum of 1000 keys per request, so you will need to paginate over the keys using the ",(0,o.kt)("inlineCode",{parentName:"p"},"exclusiveStartKey")," parameter if you have more than 1000 keys. To do this, after each call, take the last record key and provide it as the ",(0,o.kt)("inlineCode",{parentName:"p"},"exclusiveStartKey")," parameter. You can do this until you get 0 keys back."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cURL"},"https://api.apify.com/v2/key-value-stores/STORE_ID/keys?exclusiveStartKey=myLastRecordKey\n")))}d.isMDXComponent=!0},8343:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/run-actor-postman-b89097bdd92cf55096e73719086cb847.png"},11535:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/run-info-postman-0d11537cf5eeccf8a474cdeab4e8550d.png"},95834:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/webhook-8b2fcb569631f00cd1bcc8a6db263572.png"}}]);