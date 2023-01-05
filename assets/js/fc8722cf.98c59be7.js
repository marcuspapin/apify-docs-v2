"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[8379],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(r),g=n,h=m["".concat(s,".").concat(g)]||m[g]||u[g]||o;return r?a.createElement(h,i(i({ref:t},p),{},{components:r})):a.createElement(h,i({ref:t},p))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},87624:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var a=r(87462),n=r(63366),o=(r(67294),r(3905)),i=["components"],l={title:"Naming your actor",description:"Apify's standards for actor naming. Learn how to choose the right name for scraping and non-scraping actors and how to optimize your actor for search engines.",sidebar_position:1,slug:"/get-most-of-actors/naming-your-actor"},s="[](#naming-your-actor) Naming your actor",c={unversionedId:"get_most_of_actors/naming_your_actor",id:"get_most_of_actors/naming_your_actor",title:"Naming your actor",description:"Apify's standards for actor naming. Learn how to choose the right name for scraping and non-scraping actors and how to optimize your actor for search engines.",source:"@site/sources/academy/get_most_of_actors/naming_your_actor.md",sourceDirName:"get_most_of_actors",slug:"/get-most-of-actors/naming-your-actor",permalink:"/academy/get-most-of-actors/naming-your-actor",draft:!1,tags:[],version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1672928875,formattedLastUpdatedAt:"Jan 5, 2023",sidebarPosition:1,frontMatter:{title:"Naming your actor",description:"Apify's standards for actor naming. Learn how to choose the right name for scraping and non-scraping actors and how to optimize your actor for search engines.",sidebar_position:1,slug:"/get-most-of-actors/naming-your-actor"},sidebar:"defaultSidebar",previous:{title:"Getting the most of actors on Apify Store",permalink:"/academy/get-most-of-actors"},next:{title:"Actor README",permalink:"/academy/get-most-of-actors/actor-readme"}},p={},u=[{value:" Scrapers",id:"-scrapers",level:2},{value:" Non-scraping actors",id:"-non-scraping-actors",level:2},{value:" Renaming your actor",id:"-renaming-your-actor",level:2},{value:" Next up",id:"-next-up",level:2}],m={toc:u};function g(e){var t=e.components,r=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"-naming-your-actor"},(0,o.kt)("a",{parentName:"h1",href:"#naming-your-actor",target:null,rel:null})," Naming your actor"),(0,o.kt)("p",null,"Naming your actor can be tricky. Especially when you've spent a long time coding and are excited to show your brand-new creation to the world. To help users find your actor, we've introduced naming standards. These standards improve your actor's ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Search_engine_optimization",target:"_blank",rel:"noopener"},"search engine optimization (SEO)")," and maintain consistency in the ",(0,o.kt)("a",{parentName:"p",href:"https://apify.com/store",target:"_blank",rel:"noopener"},"Apify Store"),"."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Your actor's name should be 3-63 characters long.")),(0,o.kt)("h2",{id:"-scrapers"},(0,o.kt)("a",{parentName:"h2",href:"#scrapers",target:null,rel:null})," Scrapers"),(0,o.kt)("p",null,"For actors such as ",(0,o.kt)("a",{parentName:"p",href:"https://apify.com/bernardo/youtube-scraper",target:"_blank",rel:"noopener"},"YouTube Scraper")," or ",(0,o.kt)("a",{parentName:"p",href:"https://apify.com/vaclavrut/amazon-crawler",target:"_blank",rel:"noopener"},"Amazon Scraper"),", which scrape web pages, we usually have one actor per domain. This helps with naming, as the domain name serves as your actor's name."),(0,o.kt)("p",null,"GOOD:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Technical name (actor's name in the ",(0,o.kt)("a",{parentName:"li",href:"https://console.apify.com",target:"_blank",rel:"noopener"},"Apify Console"),"): ",(0,o.kt)("strong",{parentName:"li"},"${domain}-scraper"),", e.g. ",(0,o.kt)("strong",{parentName:"li"},"youtube-scraper"),"."),(0,o.kt)("li",{parentName:"ul"},"Publication title for the Apify Store: ",(0,o.kt)("strong",{parentName:"li"},"${Domain} Scraper"),", e.g. ",(0,o.kt)("strong",{parentName:"li"},"YouTube Scraper"),"."),(0,o.kt)("li",{parentName:"ul"},"Name of the GitHub repository: ",(0,o.kt)("strong",{parentName:"li"},"actor-${domain}-scraper"),", e.g. ",(0,o.kt)("strong",{parentName:"li"},"actor-youtube-scraper"),".")),(0,o.kt)("p",null,"AVOID:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Technical name: ",(0,o.kt)("strong",{parentName:"li"},"the-scraper-of-${domain}"),", e.g. ",(0,o.kt)("strong",{parentName:"li"},"the-scraper-of-youtube"),"."),(0,o.kt)("li",{parentName:"ul"},"Publication title: ",(0,o.kt)("strong",{parentName:"li"},"The Scraper of ${Domain}"),", e.g. ",(0,o.kt)("strong",{parentName:"li"},"The Scraper of YouTube"),"."),(0,o.kt)("li",{parentName:"ul"},"GitHub repository: ",(0,o.kt)("strong",{parentName:"li"},"actor-the-scraper-of-${domain}"),", e.g. ",(0,o.kt)("strong",{parentName:"li"},"actor-the-scraper-of-youtube"),".")),(0,o.kt)("p",null,"If your actor only caters to a specific service on a domain (and you don't plan on extending it), add the service to the actor's name."),(0,o.kt)("p",null,"For example,"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Technical name: ",(0,o.kt)("strong",{parentName:"li"},"${domain}-${service}-scraper"),", e.g. ",(0,o.kt)("strong",{parentName:"li"},"google-search-scraper"),"."),(0,o.kt)("li",{parentName:"ul"},"Publication title: ",(0,o.kt)("strong",{parentName:"li"},"${Domain} ${Service} Scraper"),", e.g. ",(0,o.kt)("a",{parentName:"li",href:"https://apify.com/apify/google-search-scraper",target:"_blank",rel:"noopener"},(0,o.kt)("strong",{parentName:"a"},"Google Search Scraper")),"."),(0,o.kt)("li",{parentName:"ul"},"GitHub repository: ",(0,o.kt)("strong",{parentName:"li"},"actor-${domain}-${service}-scraper"),", e.g. ",(0,o.kt)("strong",{parentName:"li"},"actor-google-search-scraper"),".")),(0,o.kt)("h2",{id:"-non-scraping-actors"},(0,o.kt)("a",{parentName:"h2",href:"#non-scraping-actors",target:null,rel:null})," Non-scraping actors"),(0,o.kt)("p",null,"Naming for non-scraping actors is more liberal. Being creative and considering SEO and user experience are good places to start. Think about what your users will type into a search engine when looking for your actor. What is your actor's function?"),(0,o.kt)("p",null,"If you're having trouble, you can always run your ideas by the Apify team using the chat icon in the bottom-right corner."),(0,o.kt)("p",null,"Below are examples for the ",(0,o.kt)("a",{parentName:"p",href:"https://apify.com/lukaskrivka/google-sheets",target:"_blank",rel:"noopener"},"Google Sheets")," actor."),(0,o.kt)("p",null,"GOOD:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Technical name: ",(0,o.kt)("strong",{parentName:"li"},"google-sheets"),"."),(0,o.kt)("li",{parentName:"ul"},"Publication title: ",(0,o.kt)("strong",{parentName:"li"},"Google Sheets Import & Export"),"."),(0,o.kt)("li",{parentName:"ul"},"GitHub repository: ",(0,o.kt)("strong",{parentName:"li"},"actor-google-sheets"),".")),(0,o.kt)("p",null,"AVOID:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Technical name: ",(0,o.kt)("strong",{parentName:"li"},"import-to-and-export-from-google-sheets"),"."),(0,o.kt)("li",{parentName:"ul"},"Publication title: ",(0,o.kt)("strong",{parentName:"li"},"Actor for Importing to and Exporting from Google Sheets"),"."),(0,o.kt)("li",{parentName:"ul"},"GitHub repository: ",(0,o.kt)("strong",{parentName:"li"},"actor-for-import-and-export-google-sheets"),".")),(0,o.kt)("h2",{id:"-renaming-your-actor"},(0,o.kt)("a",{parentName:"h2",href:"#renaming-your-actor",target:null,rel:null})," Renaming your actor"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Warning!")," Changing your actor's ",(0,o.kt)("strong",{parentName:"p"},"technical name")," may break current integrations for that actor's users. This is why some actors in the Apify Store don't have consistent naming. For the same reason, it is best to change the actor's name early, before you build a steady user base."),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"publication title"),", however, can be changed without any problems."),(0,o.kt)("h2",{id:"-next-up"},(0,o.kt)("a",{parentName:"h2",href:"#next",target:null,rel:null})," Next up"),(0,o.kt)("p",null,"Now that your actor is properly named and you know the differences between your actor's technical name and publication title, it's time to take the ",(0,o.kt)("a",{parentName:"p",href:"/academy/get-most-of-actors/actor-readme",target:null,rel:null},"next step"),"! into making your actor public in Apify Store by ensuring that it has a well-structured and comprehensive README."))}g.isMDXComponent=!0}}]);