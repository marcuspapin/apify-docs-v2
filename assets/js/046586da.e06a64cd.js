"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[1692],{3905:(e,t,o)=>{o.d(t,{Zo:()=>l,kt:()=>u});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var c=r.createContext({}),p=function(e){var t=r.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),h=p(o),u=n,f=h["".concat(c,".").concat(u)]||h[u]||d[u]||a;return o?r.createElement(f,s(s({ref:t},l),{},{components:o})):r.createElement(f,s({ref:t},l))}));function u(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,s=new Array(a);s[0]=h;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var p=2;p<a;p++)s[p]=o[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,o)}h.displayName="MDXCreateElement"},5490:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var r=o(87462),n=o(63366),a=(o(67294),o(3905)),s=["components"],i={title:"Ad-hoc webhooks",description:"Learn how to set one-off webhooks for actor runs started via the Apify API or from the actor's code. Trigger the event once the run reaches a desired state.",sidebar_position:3,slug:"/integrations/webhooks/ad-hoc-webhooks"},c="Ad-hoc webhooks",p={unversionedId:"integrations/webhooks/ad_hoc_webhooks",id:"integrations/webhooks/ad_hoc_webhooks",title:"Ad-hoc webhooks",description:"Learn how to set one-off webhooks for actor runs started via the Apify API or from the actor's code. Trigger the event once the run reaches a desired state.",source:"@site/sources/platform/integrations/webhooks/ad_hoc_webhooks.md",sourceDirName:"integrations/webhooks",slug:"/integrations/webhooks/ad-hoc-webhooks",permalink:"/platform/integrations/webhooks/ad-hoc-webhooks",draft:!1,tags:[],version:"current",lastUpdatedBy:"Jind\u0159ich B\xe4r",lastUpdatedAt:1675174133,formattedLastUpdatedAt:"Jan 31, 2023",sidebarPosition:3,frontMatter:{title:"Ad-hoc webhooks",description:"Learn how to set one-off webhooks for actor runs started via the Apify API or from the actor's code. Trigger the event once the run reaches a desired state.",sidebar_position:3,slug:"/integrations/webhooks/ad-hoc-webhooks"},sidebar:"docs",previous:{title:"Actions",permalink:"/platform/integrations/webhooks/actions"},next:{title:"Slack",permalink:"/platform/integrations/slack"}},l={},d=[{value:"Creating an ad-hoc webhook dynamically",id:"creating-an-ad-hoc-webhook-dynamically",level:2}],h={toc:d};function u(e){var t=e.components,o=(0,n.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ad-hoc-webhooks"},"Ad-hoc webhooks"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Learn how to set one-off webhooks for actor runs started via the Apify API or from the actor's code. Trigger the event once the run reaches a desired state.")),(0,a.kt)("hr",null),(0,a.kt)("p",null,"An ad-hoc webhook is a one-time webhook created for a certain actor run when starting the run using the ",(0,a.kt)("a",{parentName:"p",href:"/api/v2",target:null,rel:null},"Apify API"),". It's triggered at most once when the given run transitions into the desired state. Ad-hoc webhooks can be defined using a URL parameter ",(0,a.kt)("inlineCode",{parentName:"p"},"webhooks")," added to the API endpoint that starts an actor or actor task:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"https://api.apify.com/v2/acts/[ACTOR_ID]/runs?token=[YOUR_API_TOKEN]&webhooks=[AD_HOC_WEBHOOKS]\n")),(0,a.kt)("p",null,"where ",(0,a.kt)("inlineCode",{parentName:"p"},"AD_HOC_WEBHOOKS")," is a base64 encoded stringified JSON array of webhook definitions:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"[\n    {\n        eventTypes: ['ACTOR.RUN.FAILED'],\n        requestUrl: 'https://example.com/run-failed',\n    },\n    {\n        eventTypes: ['ACTOR.RUN.SUCCEEDED'],\n        requestUrl: 'https://example.com/run-succeeded',\n        payloadTemplate: '{\"hello\": \"world\", \"resource\":{{resource}}}',\n    },\n];\n")),(0,a.kt)("h2",{id:"creating-an-ad-hoc-webhook-dynamically"},"Creating an ad-hoc webhook dynamically"),(0,a.kt)("p",null,"You can also create a webhook dynamically from the code of your actor using the ",(0,a.kt)("a",{parentName:"p",href:"https://docs-v2.apify.com/sdk-js/api/apify/class/Actor#addWebhook",target:"_blank",rel:"noopener"},(0,a.kt)("inlineCode",{parentName:"a"},"Actor.addWebhook()"))," function:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { Actor } from 'apify';\n\nawait Actor.init();\n// ...\nawait Actor.addWebhook({\n    eventTypes: ['ACTOR.RUN.FAILED'],\n    requestUrl: 'https://example.com/run-failed',\n});\n// ...\nawait Actor.exit();\n")),(0,a.kt)("p",null,"To learn more, see the ",(0,a.kt)("a",{parentName:"p",href:"https://docs-v2.apify.com/sdk-js/api/apify/class/Actor#addWebhook",target:"_blank",rel:"noopener"},"Apify SDK documentation"),"."),(0,a.kt)("p",null,"To ensure that duplicate ad-hoc webhooks won't get created in a case of actor restart you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"idempotencyKey")," parameter. The idempotency key must be unique across all the webhooks of a user so that only one webhook gets created for a given value. You can use, for example, the actor run ID as idempotency key:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { Actor } from 'apify';\n\nawait Actor.init();\n// ...\nawait Actor.addWebhook({\n    eventTypes: ['ACTOR.RUN.FAILED'],\n    requestUrl: 'https://example.com/run-failed',\n    idempotencyKey: process.env.APIFY_ACTOR_RUN_ID,\n});\n// ...\nawait Actor.exit();\n")))}u.isMDXComponent=!0}}]);