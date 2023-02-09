"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[8148],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>u});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),d=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=d(r),u=n,m=p["".concat(l,".").concat(u)]||p[u]||h[u]||s;return r?a.createElement(m,o(o({ref:t},c),{},{components:r})):a.createElement(m,o({ref:t},c))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,o=new Array(s);o[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var d=2;d<s;d++)o[d]=r[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},13181:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>d,toc:()=>h});var a=r(87462),n=r(63366),s=(r(67294),r(3905)),o=["components"],i={title:"HTTP headers",description:"Understand what HTTP headers are, what they're used for, and three of the biggest differences between HTTP/1.1 and HTTP/2 headers.",sidebar_position:8.1,slug:"/concepts/http-headers"},l="HTTP headers",d={unversionedId:"glossary/concepts/http_headers",id:"glossary/concepts/http_headers",title:"HTTP headers",description:"Understand what HTTP headers are, what they're used for, and three of the biggest differences between HTTP/1.1 and HTTP/2 headers.",source:"@site/sources/academy/glossary/concepts/http_headers.md",sourceDirName:"glossary/concepts",slug:"/concepts/http-headers",permalink:"/academy/concepts/http-headers",draft:!1,editUrl:"https://github.com/apify/apify-docs-v2/edit/master/sources/academy/glossary/concepts/http_headers.md",tags:[],version:"current",lastUpdatedBy:"Jind\u0159ich B\xe4r",lastUpdatedAt:1675932804,formattedLastUpdatedAt:"Feb 9, 2023",sidebarPosition:8.1,frontMatter:{title:"HTTP headers",description:"Understand what HTTP headers are, what they're used for, and three of the biggest differences between HTTP/1.1 and HTTP/2 headers.",sidebar_position:8.1,slug:"/concepts/http-headers"},sidebar:"academy",previous:{title:"Concepts",permalink:"/academy/concepts"},next:{title:"HTTP cookies",permalink:"/academy/concepts/http-cookies"}},c={},h=[{value:"No headers",id:"no-headers",level:2},{value:"Some default headers required",id:"needs-default-headers",level:2},{value:"Custom headers required",id:"needs-custom-headers",level:2},{value:"Very specific headers required",id:"needs-specific-headers",level:2},{value:"HTTP/1.1 vs HTTP/2 headers",id:"http1-vs-http2",level:2}],p={toc:h};function u(e){var t=e.components,r=(0,n.Z)(e,o);return(0,s.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"headers"},"HTTP headers"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Understand what HTTP headers are, what they're used for, and three of the biggest differences between HTTP/1.1 and HTTP/2 headers.")),(0,s.kt)("hr",null),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers",target:"_blank",rel:"noopener"},"HTTP headers")," let the client and the server pass additional information with an HTTP request or response. Headers are represented by an object where the keys are header names. Headers can also contain certain authentication tokens."),(0,s.kt)("p",null,"In general, there are 4 different paths you'll find yourself on when scraping a website and dealing with headers:"),(0,s.kt)("h2",{id:"no-headers"},"No headers"),(0,s.kt)("p",null,"For some websites you won't need to worry about modifying headers at all, as there are no checks or verifications in place."),(0,s.kt)("h2",{id:"needs-default-headers"},"Some default headers required"),(0,s.kt)("p",null,"Some websites will require certain default browser headers to work properly, such as ",(0,s.kt)("strong",{parentName:"p"},"User-Agent")," (though, this header is becoming more obsolete, as there are more sophisticated ways to detect and block a suspicious user)."),(0,s.kt)("p",null,'Another example of such a "default" header is ',(0,s.kt)("strong",{parentName:"p"},"Referer"),". Some e-commerce websites might share the same platform, and data is loaded through XMLHttpRequests to that platform, which simply would not know which data to return without knowing which exact website is requesting it."),(0,s.kt)("h2",{id:"needs-custom-headers"},"Custom headers required"),(0,s.kt)("p",null,"A custom header is a non-standard HTTP header used for a specific website. For example, an imaginary website of ",(0,s.kt)("strong",{parentName:"p"},"cool-stuff.com")," might have a header with the name ",(0,s.kt)("strong",{parentName:"p"},"X_Cool_Stuff_Token")," which is required for every single request to a product page."),(0,s.kt)("p",null,"Dealing with cases like these usually isn't difficult, but can sometimes be tedious."),(0,s.kt)("h2",{id:"needs-specific-headers"},"Very specific headers required"),(0,s.kt)("p",null,"The most challenging websites to scrape are the ones that require a full set of site-specific headers to be included with the request. For example, not only would they potentially require proper ",(0,s.kt)("strong",{parentName:"p"},"User-Agent")," and ",(0,s.kt)("strong",{parentName:"p"},"Referer")," headers mentioned above, but also ",(0,s.kt)("strong",{parentName:"p"},"Accept"),", ",(0,s.kt)("strong",{parentName:"p"},"Accept-Language"),", ",(0,s.kt)("strong",{parentName:"p"},"Accept-Encoding"),", etc. with specific values."),(0,s.kt)("p",null,"Another big one to mention is the ",(0,s.kt)("strong",{parentName:"p"},"Cookie")," header. We cover this in more detail within the ",(0,s.kt)("a",{parentName:"p",href:"/academy/concepts/http-cookies",target:null,rel:null},"cookies")," lesson."),(0,s.kt)("p",null,"You could use Chrome DevTools to inspect request headers, and ",(0,s.kt)("a",{parentName:"p",href:"/academy/tools/insomnia",target:null,rel:null},"Insomnia")," or ",(0,s.kt)("a",{parentName:"p",href:"/academy/tools/postman",target:null,rel:null},"Postman")," to test how the website behaves with or without specific headers."),(0,s.kt)("h2",{id:"http1-vs-http2"},"HTTP/1.1 vs HTTP/2 headers"),(0,s.kt)("p",null,"There are some differences between HTTP/1.1 and HTTP/2 headers. We won't cover all the differences in this lesson, but you should overall keep these three in mind:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"There are no status messages in HTTP/2 headers (only status codes)."),(0,s.kt)("li",{parentName:"ol"},"Certain headers are no longer used in HTTP/2 (such as ",(0,s.kt)("strong",{parentName:"li"},"Connection")," along with few other related to it like ",(0,s.kt)("strong",{parentName:"li"},"Keep-Alive"),"). In HTTP/2, connection-specific headers are prohibited. While some browsers will simply ignore them, Safari and other webkit-based browsers will outright reject any response that contains them. Easy to do by accident, and a big problem."),(0,s.kt)("li",{parentName:"ol"},"While HTTP/1.1 headers are case-insensitive and could be sent by the browsers with the capitalized letters (e.g. ",(0,s.kt)("strong",{parentName:"li"},"Accept-Encoding"),", ",(0,s.kt)("strong",{parentName:"li"},"Cache-Control"),", ",(0,s.kt)("strong",{parentName:"li"},"User-Agent"),"), HTTP/2 headers are must be lower-cased (e.g. ",(0,s.kt)("strong",{parentName:"li"},"accept-encoding"),", ",(0,s.kt)("strong",{parentName:"li"},"cache-control"),", ",(0,s.kt)("strong",{parentName:"li"},"user-agent"),").")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"To learn more about the difference between HTTP/1.1 and HTTP/2 headers, check out ",(0,s.kt)("a",{parentName:"p",href:"https://httptoolkit.tech/blog/translating-http-2-into-http-1/",target:"_blank",rel:"noopener"},"this")," article")))}u.isMDXComponent=!0}}]);