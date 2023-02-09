"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[8558],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),c=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(r),f=n,d=m["".concat(p,".").concat(f)]||m[f]||u[f]||o;return r?a.createElement(d,i(i({ref:t},s),{},{components:r})):a.createElement(d,i({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},74752:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>f,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var a=r(87462),n=r(63366),o=(r(67294),r(3905)),i=["components"],l={title:"Development",description:"Read about the technical part of building Apify actors. Learn to define actor inputs, build new versions, persist actor state, and choose base Docker images.",sidebar_position:7.4,slug:"/actors/development"},p="Development",c={unversionedId:"actors/development/index",id:"actors/development/index",title:"Development",description:"Read about the technical part of building Apify actors. Learn to define actor inputs, build new versions, persist actor state, and choose base Docker images.",source:"@site/sources/platform/actors/development/index.md",sourceDirName:"actors/development",slug:"/actors/development",permalink:"/platform/actors/development",draft:!1,editUrl:"https://github.com/apify/apify-docs-v2/edit/master/sources/platform/actors/development/index.md",tags:[],version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1675954665,formattedLastUpdatedAt:"Feb 9, 2023",sidebarPosition:7.4,frontMatter:{title:"Development",description:"Read about the technical part of building Apify actors. Learn to define actor inputs, build new versions, persist actor state, and choose base Docker images.",sidebar_position:7.4,slug:"/actors/development"},sidebar:"docs",previous:{title:"Tasks",permalink:"/platform/actors/tasks"},next:{title:"Actor config",permalink:"/platform/actors/development/actor-config"}},s={},u=[{value:"Before you begin",id:"before-you-begin",level:2},{value:"Essential materials",id:"essential-materials",level:2}],m={toc:u};function f(e){var t=e.components,r=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"development"},"Development"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Read about the technical part of building Apify actors. Learn to define actor inputs, build new versions, persist actor state, and choose base Docker images.")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"In this section, you can find documentation on creating your own actors using the Apify platform."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"If you're interested in building paid actors, contact ",(0,o.kt)("a",{parentName:"strong",href:"mailto:community@apify.com",target:"_blank",rel:"noopener"},"community@apify.com")," to receive the guide.")),(0,o.kt)("h2",{id:"before-you-begin"},"Before you begin"),(0,o.kt)("p",null,"Here are some resources that will help you go from beginner to pro. If you have any questions, join other devs on our ",(0,o.kt)("a",{parentName:"p",href:"https://discord.gg/jyEM2PRvMU",target:"_blank",rel:"noopener"},"Discord server")," or contact us at ",(0,o.kt)("a",{parentName:"p",href:"mailto:community@apify.com",target:"_blank",rel:"noopener"},"community@apify.com"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Get familiar with ",(0,o.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=nn-bCRvhNUM",target:"_blank",rel:"noopener"},"the Apify platform")," and ",(0,o.kt)("a",{parentName:"li",href:"/platform/actors",target:null,rel:null},"actors"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://gitlab.com/apify-public/wiki/-/wikis/home",target:"_blank",rel:"noopener"},"Check out our public wiki"),". It contains key information, best practices, and advice for building actors."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://gitlab.com/apify-public/wiki/-/wikis/writing-actors/how-to-write-and-not-write-an-actor",target:"_blank",rel:"noopener"},"How to and how not to write an actor"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://gitlab.com/apify-public/wiki/-/wikis/writing-actors/actor-performance-and-optimization",target:"_blank",rel:"noopener"},"Actor performance and optimization"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://help.apify.com/en/collections/1669782-publishing-to-apify-store",target:"_blank",rel:"noopener"},"Help articles"),".")),(0,o.kt)("h2",{id:"essential-materials"},"Essential materials"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://gitlab.com/apify-public/wiki/-/wikis/public-actors/input",target:"_blank",rel:"noopener"},"Actor input"),"."),(0,o.kt)("li",{parentName:"ul"},"README:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/academy/get-most-of-actors/actor-readme",target:null,rel:null},"How to make your README great"),"."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://gitlab.com/apify-public/wiki/-/wikis/public-actors/structure",target:"_blank",rel:"noopener"},"How to structure your actor's files"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://gitlab.com/apify-public/wiki/-/wikis/public-actors/checklist",target:"_blank",rel:"noopener"},"Actor building checklist"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/academy/get-most-of-actors/naming-your-actor",target:null,rel:null},"Naming your actor"),".")))}f.isMDXComponent=!0}}]);