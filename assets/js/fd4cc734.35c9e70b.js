"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[7183],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>h});var o=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=o.createContext({}),u=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=u(e.components);return o.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},g=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),g=u(t),h=a,f=g["".concat(c,".").concat(h)]||g[h]||p[h]||r;return t?o.createElement(f,i(i({ref:n},l),{},{components:t})):o.createElement(f,i({ref:n},l))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=g;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<r;u++)i[u]=t[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}g.displayName="MDXCreateElement"},55497:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var o=t(87462),a=t(63366),r=(t(67294),t(3905)),i=["components"],s={title:"How to use",description:"Learn to use and manage your organization account using the Apify Console or API. View the organizations you are in and manage your memberships.",sidebar_position:2,slug:"/access-rights/organization-account/how-to-use"},c="Using the organization account",u={unversionedId:"access_rights/organization_account/how_to_use",id:"access_rights/organization_account/how_to_use",title:"How to use",description:"Learn to use and manage your organization account using the Apify Console or API. View the organizations you are in and manage your memberships.",source:"@site/sources/platform/access_rights/organization_account/how_to_use.md",sourceDirName:"access_rights/organization_account",slug:"/access-rights/organization-account/how-to-use",permalink:"/platform/access-rights/organization-account/how-to-use",draft:!1,tags:[],version:"current",lastUpdatedBy:"Jind\u0159ich B\xe4r",lastUpdatedAt:1672930117,formattedLastUpdatedAt:"Jan 5, 2023",sidebarPosition:2,frontMatter:{title:"How to use",description:"Learn to use and manage your organization account using the Apify Console or API. View the organizations you are in and manage your memberships.",sidebar_position:2,slug:"/access-rights/organization-account/how-to-use"},sidebar:"docs",previous:{title:"Setup",permalink:"/platform/access-rights/organization-account/setup"},next:{title:"List of permissions",permalink:"/platform/access-rights/list-of-permissions"}},l={},p=[{value:" In the Apify Console",id:"-in-the-apify-console",level:2},{value:" Manage your organizations",id:"-manage-your-organizations",level:3},{value:" Transfer ownership",id:"-transfer-ownership",level:3},{value:" Via API",id:"-via-api",level:2}],g={toc:p};function h(e){var n=e.components,s=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},g,s,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"using-the-organization-account"},"Using the organization account"),(0,r.kt)("p",null,"Once an account becomes an organization, you can no longer log into it. Instead, you can switch into the organization to manage account information, memberships and actor runs."),(0,r.kt)("p",null,"While you can't manage an organization account via ",(0,r.kt)("a",{parentName:"p",href:"https://docs.apify.com/api/v2",target:"_blank",rel:"noopener"},"API"),", you can still manage its runs and resources via API like you would with any other account."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://www.youtube.com/watch?v=BIL6HqtnvKk",target:"_blank",rel:"noopener"},"See our video tutorial")," on organization accounts.")),(0,r.kt)("h2",{id:"-in-the-apify-console"},(0,r.kt)("a",{parentName:"h2",href:"#in-the-apify-console",target:null,rel:null})," In the Apify Console"),(0,r.kt)("p",null,"You can switch into ",(0,r.kt)("strong",{parentName:"p"},"Organization account")," view using the account button in the top-left corner."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Switch to organization account",src:t(36089).Z,width:"230",height:"454"})),(0,r.kt)("p",null,"In the menu, the account you are currently using is displayed at the top, with all the accounts you can switch to displayed below. When you need to get back to your personal account, you can just switch right back to it \u2013 no need to log in and out."),(0,r.kt)("p",null,"The resources you can access and account details you can edit will depend on your ",(0,r.kt)("a",{parentName:"p",href:"/platform/access-rights/list-of-permissions",target:null,rel:null},"permissions")," in the organization."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"When switching between accounts, beware which account you start an actor run in. If you accidentally start an organization's actor run in your personal account, the run will be billed to your account (and vice versa).")),(0,r.kt)("h3",{id:"-manage-your-organizations"},(0,r.kt)("a",{parentName:"h3",href:"#manage-your-organizations",target:null,rel:null})," Manage your organizations"),(0,r.kt)("p",null,"You can view and manage the organizations you are a member of from the ",(0,r.kt)("strong",{parentName:"p"},"Organizations")," tab on your ",(0,r.kt)("a",{parentName:"p",href:"https://console.apify.com/account#/myorganization",target:"_blank",rel:"noopener"},"account page"),"."),(0,r.kt)("p",null,"If you want to leave an organization you own, you must first transfer ownership to someone else."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"My organizations",src:t(87946).Z,width:"1082",height:"391"})),(0,r.kt)("h3",{id:"-transfer-ownership"},(0,r.kt)("a",{parentName:"h3",href:"#transfer-ownership",target:null,rel:null})," Transfer ownership"),(0,r.kt)("p",null,"The organization, its actors and integrations will keep running as they are. The original owner will either leave the organization or become a member with permissions defined by the new owner. Only the new owner will have complete access to the organization."),(0,r.kt)("h2",{id:"-via-api"},(0,r.kt)("a",{parentName:"h2",href:"#via-api",target:null,rel:null})," Via API"),(0,r.kt)("p",null,"While you cannot manage an organization account's settings and members via API, you can access its actor and task runs, webhooks, schedules and storages just like you would with any other account."),(0,r.kt)("p",null,"As a member of an organization, you are assigned an ",(0,r.kt)("a",{parentName:"p",href:"/platform/tutorials/integrations",target:null,rel:null},"API token")," (under the ",(0,r.kt)("strong",{parentName:"p"},"Integrations")," tab) and proxy password (click the ",(0,r.kt)("strong",{parentName:"p"},"Proxy")," button in the left menu) for accessing the Apify platform via REST API."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Integration tokens",src:t(3689).Z,width:"1080",height:"676"})),(0,r.kt)("p",null,"The API tokens' functionality reflects your account's permissions in the organization, so if you only have the ",(0,r.kt)("strong",{parentName:"p"},"read")," and ",(0,r.kt)("strong",{parentName:"p"},"run")," permissions for actors, you will only be able to view and run actors via API. Only you can view your API token and password."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Do not share your API token or password with untrusted parties.")),(0,r.kt)("p",null,"If you have the ",(0,r.kt)("strong",{parentName:"p"},"manage organization access keys")," permission, you are able to view and use organization-wide API tokens. These are shared across the organization, so everyone with the ",(0,r.kt)("strong",{parentName:"p"},"manage organization access keys")," permission can use them for organization-wide integrations."),(0,r.kt)("p",null,"For a ",(0,r.kt)("a",{parentName:"p",href:"/api/v2",target:null,rel:null},"detailed breakdown of all Apify API endpoints")," and help on using them, visit the API."))}h.isMDXComponent=!0},3689:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/integrations-cd09f76963e75d32825c73fd0a64e4f2.webp"},87946:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/my-organizations-c8c7e813c6dc9656cb159223df8876ec.webp"},36089:(e,n,t)=>{t.d(n,{Z:()=>o});const o="data:image/webp;base64,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"}}]);