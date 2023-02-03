"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[5333],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(a),h=r,m=c["".concat(s,".").concat(h)]||c[h]||u[h]||o;return a?n.createElement(m,i(i({ref:t},p),{},{components:a})):n.createElement(m,i({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},45662:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),i=["components"],l={title:"Actions",description:"Send notifications when specific events occur in your actor (task) run or build. Dynamically add data to the notification payload when sending the notification.",sidebar_position:2,slug:"/integrations/webhooks/actions"},s="Actions",d={unversionedId:"integrations/webhooks/actions",id:"integrations/webhooks/actions",title:"Actions",description:"Send notifications when specific events occur in your actor (task) run or build. Dynamically add data to the notification payload when sending the notification.",source:"@site/sources/platform/integrations/webhooks/actions.md",sourceDirName:"integrations/webhooks",slug:"/integrations/webhooks/actions",permalink:"/platform/integrations/webhooks/actions",draft:!1,tags:[],version:"current",lastUpdatedBy:"Jind\u0159ich B\xe4r",lastUpdatedAt:1675420633,formattedLastUpdatedAt:"Feb 3, 2023",sidebarPosition:2,frontMatter:{title:"Actions",description:"Send notifications when specific events occur in your actor (task) run or build. Dynamically add data to the notification payload when sending the notification.",sidebar_position:2,slug:"/integrations/webhooks/actions"},sidebar:"docs",previous:{title:"Events",permalink:"/platform/integrations/webhooks/events"},next:{title:"Ad-hoc webhooks",permalink:"/platform/integrations/webhooks/ad-hoc-webhooks"}},p={},u=[{value:"HTTP request",id:"http-request",level:2},{value:"Payload template",id:"payload-template",level:3},{value:"Default payload template",id:"default-payload-template",level:4},{value:"Default payload example",id:"default-payload-example",level:4},{value:"Payload template example",id:"payload-template-example",level:4},{value:"Available variables",id:"available-variables",level:3},{value:"Resource",id:"resource",level:4}],c={toc:u};function h(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"actions"},"Actions"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Send notifications when specific events occur in your actor (task) run or build. Dynamically add data to the notification payload when sending the notification.")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Currently, the only available action is to send an HTTP POST request to a URL specified in the webhook. New actions will come later."),(0,o.kt)("h2",{id:"http-request"},"HTTP request"),(0,o.kt)("p",null,"This action sends an HTTP POST request to the provided URL with a JSON payload. The payload is defined using a payload template, a JSON-like syntax that extends JSON with the use of variables enclosed in double curly braces ",(0,o.kt)("inlineCode",{parentName:"p"},"{{variable}}"),". This enables the payload to be dynamically injected with data at the time when the webhook is triggered."),(0,o.kt)("p",null,"The response to the POST request must have an HTTP status code in the ",(0,o.kt)("inlineCode",{parentName:"p"},"2XX")," range. Otherwise, it is considered an error and the request is periodically retried with an exponential back-off: the first retry happens after roughly 1 minute, second after 2 minutes, third after 4 minutes etc. After 11 retries, which take around 32 hours, the system gives up and stops retrying the requests."),(0,o.kt)("p",null,"For safety reasons, the webhook URL should contain a secret token to ensure only Apify can invoke it. To test your endpoint, you can use the ",(0,o.kt)("strong",{parentName:"p"},"Test")," button in the user interface. Webhook HTTP requests time out in 30 seconds. If your endpoint performs a time-consuming operation, you should respond to the request immediately so that it does not time out before Apify receives the response. To ensure that the time-consuming operation is reliably finished, you can internally use a message queue to retry the operation on internal failure. In rare circumstances, the webhook might be invoked more than once, you should design your code to be idempotent to duplicate calls."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If your request's URL points toward Apify, you don't need to add a token, since it will be added automatically.")),(0,o.kt)("h3",{id:"payload-template"},"Payload template"),(0,o.kt)("p",null,"The payload template is a JSON-like string, whose syntax is extended with the use of variables. This is useful when a custom payload structure is needed, but at the same time dynamic data, that is only known at the time of the webhook's invocation, need to be injected into the payload. Aside from the variables, the string must be a valid JSON."),(0,o.kt)("p",null,"The variables need to be enclosed in double curly braces and cannot be chosen arbitrarily. A pre-defined list, ",(0,o.kt)("a",{parentName:"p",href:"#available-variables",target:null,rel:null},"that can be found below"),", shows all the currently available variables. Using any other variable than one of the pre-defined will result in a validation error."),(0,o.kt)("p",null,"The syntax of a variable therefore is: ",(0,o.kt)("inlineCode",{parentName:"p"},"{{oneOfAvailableVariables}}"),". The variables support accessing nested properties with dot notation: ",(0,o.kt)("inlineCode",{parentName:"p"},"{{variable.property}}"),"."),(0,o.kt)("h4",{id:"default-payload-template"},"Default payload template"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "userId": {{userId}},\n    "createdAt": {{createdAt}},\n    "eventType": {{eventType}},\n    "eventData": {{eventData}},\n    "resource": {{resource}}\n}\n')),(0,o.kt)("h4",{id:"default-payload-example"},"Default payload example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "userId": "abf6vtB2nvQZ4nJzo",\n    "createdAt": "2019-01-09T15:59:56.408Z",\n    "eventType": "ACTOR.RUN.SUCCEEDED",\n    "eventData": {\n        "actorId": "fW4MyDhgwtMLrB987",\n        "actorRunId": "uPBN9qaKd2iLs5naZ"\n    },\n    "resource": {\n        "id": "uPBN9qaKd2iLs5naZ",\n        "actId": "fW4MyDhgwtMLrB987",\n        "userId": "abf6vtB2nvQZ4nJzo",\n        "startedAt": "2019-01-09T15:59:40.750Z",\n        "finishedAt": "2019-01-09T15:59:56.408Z",\n        "status": "SUCCEEDED",\n        ...\n    }\n}\n')),(0,o.kt)("h4",{id:"payload-template-example"},"Payload template example"),(0,o.kt)("p",null,"This example shows how you can use the payload template variables to send a custom object that displays the status of a RUN, its ID and a custom property:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "runId": {{resource.id}},\n    "runStatus": {{resource.status}},\n    "myProp": "hello world"\n}\n')),(0,o.kt)("p",null,"You may have noticed that the ",(0,o.kt)("inlineCode",{parentName:"p"},"eventData")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"resource")," properties contain redundant data. This is for backwards compatibility. Feel free to only use ",(0,o.kt)("inlineCode",{parentName:"p"},"eventData")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"resource")," in your templates, depending on your use case."),(0,o.kt)("h3",{id:"available-variables"},"Available variables"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Variable"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"userId")),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"ID of the user who owns the webhook.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"createdAt")),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"ISO string date of the webhook's trigger event.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"eventType")),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"Type of the trigger event, ",(0,o.kt)("a",{parentName:"td",href:"/platform/integrations/webhooks/events",target:null,rel:null},"see Events"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"eventData")),(0,o.kt)("td",{parentName:"tr",align:null},"Object"),(0,o.kt)("td",{parentName:"tr",align:null},"Data associated with the trigger event, ",(0,o.kt)("a",{parentName:"td",href:"/platform/integrations/webhooks/events",target:null,rel:null},"see Events"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"resource")),(0,o.kt)("td",{parentName:"tr",align:null},"Object"),(0,o.kt)("td",{parentName:"tr",align:null},"The resource that caused the trigger event, ",(0,o.kt)("a",{parentName:"td",href:"#resource",target:null,rel:null},"see below"),".")))),(0,o.kt)("h4",{id:"resource"},"Resource"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"resource")," variable represents the triggering system resource. For example when using the ",(0,o.kt)("inlineCode",{parentName:"p"},"ACTOR.RUN.SUCCEEDED")," event, the resource is the actor run. The variable will be replaced by an ",(0,o.kt)("inlineCode",{parentName:"p"},"Object")," that one would receive as response from the relevant API at the moment when the webhook is triggered. So for the actor run resource, it would be the response of the ",(0,o.kt)("a",{parentName:"p",href:"/api/v2#/reference/actors/run-object-deprecated/get-run",target:null,rel:null},"Get actor run")," API endpoint."),(0,o.kt)("p",null,"In addition to actor runs, webhooks also support various events related to actor builds. In such cases, the resource object will look like the response of the\n",(0,o.kt)("a",{parentName:"p",href:"/api/v2#/reference/actor-builds/build-object/get-build",target:null,rel:null},"Get actor build")," API endpoint."))}h.isMDXComponent=!0}}]);