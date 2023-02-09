"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[8380],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),g=p(a),d=r,h=g["".concat(s,".").concat(d)]||g[d]||u[d]||i;return a?n.createElement(h,o(o({ref:t},c),{},{components:a})):n.createElement(h,o({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},66021:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>c,default:()=>f,frontMatter:()=>p,metadata:()=>u,toc:()=>d});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),o=a(74866),l=a(85162),s=["components"],p={title:"Waiting for content & events",description:"Learn the importance of waiting for content and events before running interaction/collection code, as well as the best practices for doing so.",sidebar_position:2,slug:"/puppeteer-playwright/page/waiting"},c="Waiting for elements and events",u={unversionedId:"webscraping/puppeteer_playwright/page/waiting",id:"webscraping/puppeteer_playwright/page/waiting",title:"Waiting for content & events",description:"Learn the importance of waiting for content and events before running interaction/collection code, as well as the best practices for doing so.",source:"@site/sources/academy/webscraping/puppeteer_playwright/page/waiting.md",sourceDirName:"webscraping/puppeteer_playwright/page",slug:"/puppeteer-playwright/page/waiting",permalink:"/academy/puppeteer-playwright/page/waiting",draft:!1,editUrl:"https://github.com/apify/apify-docs-v2/edit/master/sources/academy/webscraping/puppeteer_playwright/page/waiting.md",tags:[],version:"current",lastUpdatedBy:"Jind\u0159ich B\xe4r",lastUpdatedAt:1675932804,formattedLastUpdatedAt:"Feb 9, 2023",sidebarPosition:2,frontMatter:{title:"Waiting for content & events",description:"Learn the importance of waiting for content and events before running interaction/collection code, as well as the best practices for doing so.",sidebar_position:2,slug:"/puppeteer-playwright/page/waiting"},sidebar:"academy",previous:{title:"Interacting with a page",permalink:"/academy/puppeteer-playwright/page/interacting-with-a-page"},next:{title:"Page methods",permalink:"/academy/puppeteer-playwright/page/page-methods"}},g={},d=[{value:"Elements",id:"waiting-for-elements",level:2},{value:"Navigation",id:"waiting-for-navigation",level:2},{value:"Our code so far",id:"current-code",level:2},{value:"Next up",id:"next",level:2}],h={toc:d};function f(e){var t=e.components,a=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"waiting-for-elements-and-events"},"Waiting for elements and events"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Learn the importance of waiting for content and events before running interaction/collection code, as well as the best practices for doing so.")),(0,i.kt)("hr",null),(0,i.kt)("p",null,"In a perfect world, every piece of content served on a website would be loaded instantaneously. We don't live in a perfect world though, and often times it can take anywhere between 1/10th of a second to a few seconds to load some content onto a page. Certain elements are also ",(0,i.kt)("a",{parentName:"p",href:"/academy/concepts/dynamic-pages",target:null,rel:null},"generated dynamically"),", which means that they are not present in the initial HTML, and that they are created by scripts or data from API calls."),(0,i.kt)("p",null,"Puppeteer and Playwright don't sit around waiting for a page (or specific elements) to load though - if we tell it to do something with an element that hasn't rendered yet, it'll start trying to do it (which will result in nasty errors). We've got to tell it to wait."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"For a thorough explanation on how dynamic rendering works, give ",(0,i.kt)("a",{parentName:"p",href:"/academy/concepts/dynamic-pages",target:null,rel:null},(0,i.kt)("strong",{parentName:"a"},"Dynamic pages"))," a quick readover, and check out the examples.")),(0,i.kt)("p",null,"Different events and elements can be waited for using the various ",(0,i.kt)("inlineCode",{parentName:"p"},"waitFor...")," methods offered."),(0,i.kt)("h2",{id:"waiting-for-elements"},"Elements"),(0,i.kt)("p",null,"In the previous lesson, we ran into an error with Puppeteer due to the fact that we weren't waiting for the ",(0,i.kt)("inlineCode",{parentName:"p"},".g a")," selector to be present on the page before clicking it. The same error didn't occur in Playwright, because ",(0,i.kt)("inlineCode",{parentName:"p"},"page.click()")," ",(0,i.kt)("a",{parentName:"p",href:"https://playwright.dev/docs/actionability",target:"_blank",rel:"noopener"},"automatically waits")," for the element to be visible on the page before clicking it."),(0,i.kt)("p",null,"Elements with specific selectors can be waited for by using the ",(0,i.kt)("inlineCode",{parentName:"p"},"page.waitForSelector()")," function. Let's use this knowledge to wait for the first result to be present on the page prior to clicking on it:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// This example is relevant for Puppeteer only!\nimport puppeteer from 'puppeteer';\n\nconst browser = await puppeteer.launch({ headless: false });\n\nconst page = await browser.newPage();\nawait page.goto('https://google.com/');\n\nawait page.click('button + button');\n\nawait page.type('input[title=\"Search\"]', 'hello world');\nawait page.keyboard.press('Enter');\n\n// Wait for the element to be present on the page prior to clicking it\nawait page.waitForSelector('.g a');\nawait page.click('.g a');\n\nawait page.waitForTimeout(10000)\nawait browser.close();\n")),(0,i.kt)("p",null,"Now, we won't see the error message anymore, and the first result will be successfully clicked by Puppeteer."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Playwright also has a ",(0,i.kt)("inlineCode",{parentName:"p"},"page.waitForSelector()")," function and it's useful in other scenarios than clicking, or for more granular control over the waiting process.")),(0,i.kt)("h2",{id:"waiting-for-navigation"},"Navigation"),(0,i.kt)("p",null,"If we remember properly, after clicking the first result, we want to console log the title of the result's page and save a screenshot into the filesystem. In order to grab a solid screenshot of the loaded page though, we should ",(0,i.kt)("strong",{parentName:"p"},"wait for navigation"),"  before snapping the image. This can be done with ",(0,i.kt)("a",{parentName:"p",href:"https://pptr.dev/#?product=Puppeteer&version=v14.1.0&show=api-pagewaitfornavigationoptions",target:"_blank",rel:"noopener"},(0,i.kt)("inlineCode",{parentName:"a"},"page.waitForNavigation()")),"."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"A navigation is simply when a new ",(0,i.kt)("a",{parentName:"p",href:"/academy/concepts/dynamic-pages",target:null,rel:null},"page load")," happens. First, the ",(0,i.kt)("inlineCode",{parentName:"p"},"domcontentloaded")," event is fired, then the ",(0,i.kt)("inlineCode",{parentName:"p"},"load")," event. ",(0,i.kt)("inlineCode",{parentName:"p"},"page.waitForNavigation()")," will wait for the ",(0,i.kt)("inlineCode",{parentName:"p"},"load")," event to fire.")),(0,i.kt)("p",null,"Naively, you might immediately think that this is the way we should wait for navigation after clicking the first result:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"await page.click('.g a');\nawait page.waitForNavigation();\n")),(0,i.kt)("p",null,"Though in theory this is correct, it can result in a race condition in which the page navigates quickly before the ",(0,i.kt)("inlineCode",{parentName:"p"},"page.waitForNavigation()")," function is ever run, which means that once it is finally called, it will hang and wait forever for the ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event",target:"_blank",rel:"noopener"},(0,i.kt)("inlineCode",{parentName:"a"},"load")," event")," event to fire even though it already fired. To solve this, we can stick the waiting logic and the clicking logic into a ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise.all()")," call (placing ",(0,i.kt)("inlineCode",{parentName:"p"},"page.waitForNavigation()")," first)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"await Promise.all([page.waitForNavigation(), page.click('.g a')]);\n")),(0,i.kt)("p",null,"Though the line of code above is also valid in Playwright, it is recommended to use ",(0,i.kt)("a",{parentName:"p",href:"https://playwright.dev/docs/api/class-page#page-wait-for-load-state",target:"_blank",rel:"noopener"},(0,i.kt)("inlineCode",{parentName:"a"},"page.waitForLoadState('load')"))," instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"page.waitForNavigation()"),", as it automatically handles the issues being solved by using ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise.all()"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"await page.click('.g a');\nawait page.waitForLoadState('load');\n")),(0,i.kt)("p",null,"This implementation will do the following:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Begin waiting for the page to navigate without blocking the ",(0,i.kt)("inlineCode",{parentName:"li"},"page.click()")," function"),(0,i.kt)("li",{parentName:"ol"},"Click the element, firing off a navigating event"),(0,i.kt)("li",{parentName:"ol"},"Resolve once the page has navigated, allowing further code to run")),(0,i.kt)("h2",{id:"current-code"},"Our code so far"),(0,i.kt)("p",null,"Here's what our project's code looks like so far:"),(0,i.kt)(o.Z,{groupId:"main",mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"Playwright",label:"Playwright",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"import { chromium } from 'playwright';\nimport * as fs from 'fs/promises';\n\nconst browser = await chromium.launch({ headless: false });\n\n// Create a page and visit Google\nconst page = await browser.newPage();\nawait page.goto('https://google.com');\n\n// Agree to the cookies policy\nawait page.click('button:has-text(\"I agree\")');\n\n// Type the query and visit the results page\nawait page.type('input[title=\"Search\"]', 'hello world');\nawait page.keyboard.press('Enter');\n\n// Click on the first result\nawait page.click('.g a');\nawait page.waitForLoadState('load');\n\n// Our title collecting and screenshotting logic\n// will go here\n\nawait page.waitForTimeout(10000);\n\nawait browser.close();\n\n"))),(0,i.kt)(l.Z,{value:"Puppeteer",label:"Puppeteer",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"import puppeteer from 'puppeteer';\nimport * as fs from 'fs/promises';\n\nconst browser = await puppeteer.launch({ headless: false });\n\n// Create a page and visit Google\nconst page = await browser.newPage();\nawait page.goto('https://google.com');\n\n// Agree to the cookies policy\nawait page.click('button + button');\n\n// Type the query and visit the results page\nawait page.type('input[title=\"Search\"]', 'hello world');\nawait page.keyboard.press('Enter');\n\n// Wait for the first result to appear on the page,\n// then click on it\nawait page.waitForSelector('.g a');\nawait Promise.all([page.waitForNavigation(), page.click('.g a')]);\n\n// Our title collecting and screenshotting logic\n// will go here\n\nawait page.waitForTimeout(10000);\n\nawait browser.close();\n\n")))),(0,i.kt)("h2",{id:"next"},"Next up"),(0,i.kt)("p",null,"In the ",(0,i.kt)("a",{parentName:"p",href:"/academy/puppeteer-playwright/page/page-methods",target:null,rel:null},"final lesson")," of the ",(0,i.kt)("strong",{parentName:"p"},"Opening & controlling a page")," section of this course, we'll be learning about various methods on ",(0,i.kt)("strong",{parentName:"p"},"Page")," which aren't related to directly interacting with a page or waiting for stuff, as well as finally adding the final touches to our mini-project (page title grabbing and screenshotting)."))}f.isMDXComponent=!0},85162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),r=a(86010);const i="tabItem_Ymn6";function o(e){var t=e.children,a=e.hidden,o=e.className;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,o),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>N});var n=a(87462),r=a(67294),i=a(86010),o=a(12466),l=a(16550),s=a(91980),p=a(67392),c=a(50012);function u(e){return function(e){return r.Children.map(e,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function g(e){var t=e.values,a=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:u(a);return function(e){var t=(0,p.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,a])}function d(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function h(e){var t=e.queryString,a=void 0!==t&&t,n=e.groupId,i=(0,l.k6)(),o=function(e){var t=e.queryString,a=void 0!==t&&t,n=e.groupId;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:a,groupId:n});return[(0,s._X)(o),(0,r.useCallback)((function(e){if(o){var t=new URLSearchParams(i.location.search);t.set(o,e),i.replace(Object.assign({},i.location,{search:t.toString()}))}}),[o,i])]}function f(e){var t,a,n,i,o=e.defaultValue,l=e.queryString,s=void 0!==l&&l,p=e.groupId,u=g(e),f=(0,r.useState)((function(){return function(e){var t,a=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!d({value:a,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+a+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return a}var r=null!=(t=n.find((function(e){return e.default})))?t:n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:o,tabValues:u})})),m=f[0],w=f[1],v=h({queryString:s,groupId:p}),b=v[0],k=v[1],y=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:p}.groupId),a=(0,c.Nk)(t),n=a[0],i=a[1],[n,(0,r.useCallback)((function(e){t&&i.set(e)}),[t,i])]),N=y[0],T=y[1],P=function(){var e=null!=b?b:N;return d({value:e,tabValues:u})?e:null}();return(0,r.useEffect)((function(){P&&w(P)}),[P]),{selectedValue:m,selectValue:(0,r.useCallback)((function(e){if(!d({value:e,tabValues:u}))throw new Error("Can't select invalid tab value="+e);w(e),k(e),T(e)}),[k,T,u]),tabValues:u}}var m=a(72389);const w="tabList__CuJ",v="tabItem_LNqP";function b(e){var t=e.className,a=e.block,l=e.selectedValue,s=e.selectValue,p=e.tabValues,c=[],u=(0,o.o5)().blockElementScrollPositionUntilNextRender,g=function(e){var t=e.currentTarget,a=c.indexOf(t),n=p[a].value;n!==l&&(u(t),s(n))},d=function(e){var t,a=null;switch(e.key){case"Enter":g(e);break;case"ArrowRight":var n,r=c.indexOf(e.currentTarget)+1;a=null!=(n=c[r])?n:c[0];break;case"ArrowLeft":var i,o=c.indexOf(e.currentTarget)-1;a=null!=(i=c[o])?i:c[c.length-1]}null==(t=a)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},t)},p.map((function(e){var t=e.value,a=e.label,o=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:function(e){return c.push(e)},onKeyDown:d,onClick:g},o,{className:(0,i.Z)("tabs__item",v,null==o?void 0:o.className,{"tabs__item--active":l===t})}),null!=a?a:t)})))}function k(e){var t=e.lazy,a=e.children,n=e.selectedValue;if(t){var i=a.find((function(e){return e.props.value===n}));return i?(0,r.cloneElement)(i,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n})})))}function y(e){var t=f(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",w)},r.createElement(b,(0,n.Z)({},e,t)),r.createElement(k,(0,n.Z)({},e,t)))}function N(e){var t=(0,m.Z)();return r.createElement(y,(0,n.Z)({key:String(t)},e))}}}]);