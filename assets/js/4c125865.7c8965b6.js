"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[6925],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),i=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},c=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=i(a),f=n,d=u["".concat(s,".").concat(f)]||u[f]||m[f]||o;return a?r.createElement(d,p(p({ref:t},c),{},{components:a})):r.createElement(d,p({ref:t},c))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,p=new Array(o);p[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,p[1]=l;for(var i=2;i<o;i++)p[i]=a[i];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},46923:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var r=a(87462),n=a(63366),o=(a(67294),a(3905)),p=["components"],l={title:"Examples",description:"Find out what you can do with the Apify platform. See code examples for a variety of use cases and learn about programming language support.",sidebar_position:7.9,slug:"/actors/examples"},s="Examples",i={unversionedId:"actors/examples",id:"actors/examples",title:"Examples",description:"Find out what you can do with the Apify platform. See code examples for a variety of use cases and learn about programming language support.",source:"@site/sources/platform/actors/examples.md",sourceDirName:"actors",slug:"/actors/examples",permalink:"/platform/actors/examples",draft:!1,tags:[],version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1674755822,formattedLastUpdatedAt:"Jan 26, 2023",sidebarPosition:7.9,frontMatter:{title:"Examples",description:"Find out what you can do with the Apify platform. See code examples for a variety of use cases and learn about programming language support.",sidebar_position:7.9,slug:"/actors/examples"},sidebar:"docs",previous:{title:"Limits",permalink:"/platform/actors/limits"},next:{title:"Schedules",permalink:"/platform/schedules"}},c={},m=[{value:"Use cases",id:"use-cases",level:2},{value:"Code examples",id:"code-examples",level:2},{value:"Language support",id:"language-support",level:2}],u={toc:m};function f(e){var t=e.components,a=(0,n.Z)(e,p);return(0,o.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"examples"},"Examples"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Find out what you can do with the Apify platform. See code examples for a variety of use cases and learn about programming language support.")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"This section provides examples of actors to illustrate what you can do with the Apify platform."),(0,o.kt)("h2",{id:"use-cases"},"Use cases"),(0,o.kt)("p",null,"The example actors (and many more) are available in ",(0,o.kt)("a",{parentName:"p",href:"https://apify.com/store?type=acts&search=user%3Aapify%20example",target:"_blank",rel:"noopener"},"Apify Store"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Scraping specific pages:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://apify.com/apify/google-search-scraper",target:"_blank",rel:"noopener"},"Scrape Google Search results"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://apify.com/vdrmota/twitter-scraper",target:"_blank",rel:"noopener"},"Scrape Twitter"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://apify.com/jaroslavhejlek/instagram-scraper",target:"_blank",rel:"noopener"},"Scrape Instagram"),"."))),(0,o.kt)("li",{parentName:"ul"},"Data processing:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://apify.com/lukaskrivka/google-sheets",target:"_blank",rel:"noopener"},"Import and export Google Sheets files"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://apify.com/lukaskrivka/dedup-datasets",target:"_blank",rel:"noopener"},"Deduplicate datasets"),"."))),(0,o.kt)("li",{parentName:"ul"},"SEO analysis:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://apify.com/jancurn/find-broken-links",target:"_blank",rel:"noopener"},"Check for broken links"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://apify.com/drobnikj/seo-audit-tool",target:"_blank",rel:"noopener"},"SEO audit"),"."))),(0,o.kt)("li",{parentName:"ul"},"Monitoring:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://apify.com/apify/monitoring",target:"_blank",rel:"noopener"},"Monitor your actors' performance"),".")))),(0,o.kt)("h2",{id:"code-examples"},"Code examples"),(0,o.kt)("p",null,"Below are a few example use cases for what you can do with actors. The ",(0,o.kt)("a",{parentName:"p",href:"https://docs-v2.apify.com/sdk-js/docs/examples/capture-screenshot",target:"_blank",rel:"noopener"},"Apify SDK documentation")," contains many more examples using ",(0,o.kt)("a",{parentName:"p",href:"https://docs-v2.apify.com/sdk-js/docs/examples/puppeteer-crawler",target:"_blank",rel:"noopener"},"Puppeteer"),", ",(0,o.kt)("a",{parentName:"p",href:"https://docs-v2.apify.com/sdk-js/docs/examples/playwright-crawler",target:"_blank",rel:"noopener"},"Playwright"),", and ",(0,o.kt)("a",{parentName:"p",href:"https://docs-v2.apify.com/sdk-js/docs/examples/cheerio-crawler",target:"_blank",rel:"noopener"},"Cheerio"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs-v2.apify.com/sdk-js/docs/examples/crawl-all-links",target:"_blank",rel:"noopener"},"Crawl an entire website"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs-v2.apify.com/sdk-js/docs/examples/capture-screenshot",target:"_blank",rel:"noopener"},"Navigate to a page and capture a screenshot"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs-v2.apify.com/sdk-js/docs/examples/map-and-reduce",target:"_blank",rel:"noopener"},"Process data"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs-v2.apify.com/sdk-js/docs/examples/call-actor",target:"_blank",rel:"noopener"},"Use other actors in yours"),".")),(0,o.kt)("h2",{id:"language-support"},"Language support"),(0,o.kt)("p",null,"While most actors are written in JavaScript, this does not have to be the case. You can write Apify actors in any language."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://apify.com/apify/example-selenium",target:"_blank",rel:"noopener"},"Selenium"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://apify.com/apify/example-php",target:"_blank",rel:"noopener"},"PHP"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://apify.com/yonny/python-3-example/source-code",target:"_blank",rel:"noopener"},"Python"),".")))}f.isMDXComponent=!0}}]);