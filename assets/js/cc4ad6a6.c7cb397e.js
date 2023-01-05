"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[8607],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(a),d=r,h=u["".concat(p,".").concat(d)]||u[d]||g[d]||i;return a?n.createElement(h,o(o({ref:t},c),{},{components:a})):n.createElement(h,o({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},78398:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>g});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),o=["components"],l={title:"Waiting for content & events",description:"Learn the importance of waiting for content and events before running interaction/collection code, as well as the best practices for doing so.",sidebar_position:2,slug:"/puppeteer-playwright/page/waiting"},p="[](#waiting-for-elements-and-events) Waiting for elements and events",s={unversionedId:"puppeteer_playwright/page/waiting",id:"puppeteer_playwright/page/waiting",title:"Waiting for content & events",description:"Learn the importance of waiting for content and events before running interaction/collection code, as well as the best practices for doing so.",source:"@site/sources/academy/puppeteer_playwright/page/waiting.md",sourceDirName:"puppeteer_playwright/page",slug:"/puppeteer-playwright/page/waiting",permalink:"/academy/puppeteer-playwright/page/waiting",draft:!1,tags:[],version:"current",lastUpdatedBy:"Jind\u0159ich B\xe4r",lastUpdatedAt:1672923705,formattedLastUpdatedAt:"Jan 5, 2023",sidebarPosition:2,frontMatter:{title:"Waiting for content & events",description:"Learn the importance of waiting for content and events before running interaction/collection code, as well as the best practices for doing so.",sidebar_position:2,slug:"/puppeteer-playwright/page/waiting"},sidebar:"defaultSidebar",previous:{title:"Interacting with a page",permalink:"/academy/puppeteer-playwright/page/interacting-with-a-page"},next:{title:"Page methods",permalink:"/academy/puppeteer-playwright/page/page-methods"}},c={},g=[{value:" Elements",id:"-elements",level:2},{value:" Navigation",id:"-navigation",level:2},{value:" Our code so far",id:"-our-code-so-far",level:2},{value:" Next up",id:"-next-up",level:2}],u={toc:g};function d(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"-waiting-for-elements-and-events"},(0,i.kt)("a",{parentName:"h1",href:"#waiting-for-elements-and-events",target:null,rel:null})," Waiting for elements and events"),(0,i.kt)("p",null,"In a perfect world, every piece of content served on a website would be loaded instantaneously. We don't live in a perfect world though, and often times it can take anywhere between 1/10th of a second to a few seconds to load some content onto a page. Certain elements are also ",(0,i.kt)("a",{parentName:"p",href:"/academy/concepts/dynamic-pages",target:null,rel:null},"generated dynamically"),", which means that they are not present in the initial HTML, and that they are created by scripts or data from API calls."),(0,i.kt)("p",null,"Puppeteer and Playwright don't sit around waiting for a page (or specific elements) to load though - if we tell it to do something with an element that hasn't rendered yet, it'll start trying to do it (which will result in nasty errors). We've got to tell it to wait."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"For a thorough explanation on how dynamic rendering works, give ",(0,i.kt)("a",{parentName:"p",href:"/academy/concepts/dynamic-pages",target:null,rel:null},(0,i.kt)("strong",{parentName:"a"},"Dynamic pages"))," a quick readover, and check out the examples.")),(0,i.kt)("p",null,"Different events and elements can be waited for using the various ",(0,i.kt)("inlineCode",{parentName:"p"},"waitFor...")," methods offered."),(0,i.kt)("h2",{id:"-elements"},(0,i.kt)("a",{parentName:"h2",href:"#waiting-for-elements",target:null,rel:null})," Elements"),(0,i.kt)("p",null,"In the previous lesson, we ran into an error with Puppeteer due to the fact that we weren't waiting for the ",(0,i.kt)("inlineCode",{parentName:"p"},".g a")," selector to be present on the page before clicking it. The same error didn't occur in Playwright, because ",(0,i.kt)("inlineCode",{parentName:"p"},"page.click()")," ",(0,i.kt)("a",{parentName:"p",href:"https://playwright.dev/docs/actionability",target:"_blank",rel:"noopener"},"automatically waits")," for the element to be visible on the page before clicking it."),(0,i.kt)("p",null,"Elements with specific selectors can be waited for by using the ",(0,i.kt)("inlineCode",{parentName:"p"},"page.waitForSelector()")," function. Let's use this knowledge to wait for the first result to be present on the page prior to clicking on it:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// This example is relevant for Puppeteer only!\nimport puppeteer from 'puppeteer';\n\nconst browser = await puppeteer.launch({ headless: false });\n\nconst page = await browser.newPage();\nawait page.goto('https://google.com/');\n\nawait page.click('button + button');\n\nawait page.type('input[title=\"Search\"]', 'hello world');\nawait page.keyboard.press('Enter');\n\n// Wait for the element to be present on the page prior to clicking it\nawait page.waitForSelector('.g a');\nawait page.click('.g a');\n\nawait page.waitForTimeout(10000)\nawait browser.close();\n")),(0,i.kt)("p",null,"Now, we won't see the error message anymore, and the first result will be successfully clicked by Puppeteer."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Playwright also has a ",(0,i.kt)("inlineCode",{parentName:"p"},"page.waitForSelector()")," function and it's useful in other scenarios than clicking, or for more granular control over the waiting process.")),(0,i.kt)("h2",{id:"-navigation"},(0,i.kt)("a",{parentName:"h2",href:"#waiting-for-navigation",target:null,rel:null})," Navigation"),(0,i.kt)("p",null,"If we remember properly, after clicking the first result, we want to console log the title of the result's page and save a screenshot into the filesystem. In order to grab a solid screenshot of the loaded page though, we should ",(0,i.kt)("strong",{parentName:"p"},"wait for navigation"),"  before snapping the image. This can be done with ",(0,i.kt)("a",{parentName:"p",href:"https://pptr.dev/#?product=Puppeteer&version=v14.1.0&show=api-pagewaitfornavigationoptions",target:"_blank",rel:"noopener"},(0,i.kt)("inlineCode",{parentName:"a"},"page.waitForNavigation()")),"."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"A navigation is simply when a new ",(0,i.kt)("a",{parentName:"p",href:"/academy/concepts/dynamic-pages",target:null,rel:null},"page load")," happens. First, the ",(0,i.kt)("inlineCode",{parentName:"p"},"domcontentloaded")," event is fired, then the ",(0,i.kt)("inlineCode",{parentName:"p"},"load")," event. ",(0,i.kt)("inlineCode",{parentName:"p"},"page.waitForNavigation()")," will wait for the ",(0,i.kt)("inlineCode",{parentName:"p"},"load")," event to fire.")),(0,i.kt)("p",null,"Naively, you might immediately think that this is the way we should wait for navigation after clicking the first result:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"await page.click('.g a');\nawait page.waitForNavigation();\n")),(0,i.kt)("p",null,"Though in theory this is correct, it can result in a race condition in which the page navigates quickly before the ",(0,i.kt)("inlineCode",{parentName:"p"},"page.waitForNavigation()")," function is ever run, which means that once it is finally called, it will hang and wait forever for the ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event",target:"_blank",rel:"noopener"},(0,i.kt)("inlineCode",{parentName:"a"},"load")," event")," event to fire even though it already fired. To solve this, we can stick the waiting logic and the clicking logic into a ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise.all()")," call (placing ",(0,i.kt)("inlineCode",{parentName:"p"},"page.waitForNavigation()")," first)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"await Promise.all([page.waitForNavigation(), page.click('.g a')]);\n")),(0,i.kt)("p",null,"Though the line of code above is also valid in Playwright, it is recommended to use ",(0,i.kt)("a",{parentName:"p",href:"https://playwright.dev/docs/api/class-page#page-wait-for-load-state",target:"_blank",rel:"noopener"},(0,i.kt)("inlineCode",{parentName:"a"},"page.waitForLoadState('load')"))," instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"page.waitForNavigation()"),", as it automatically handles the issues being solved by using ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise.all()"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"await page.click('.g a');\nawait page.waitForLoadState('load');\n")),(0,i.kt)("p",null,"This implementation will do the following:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Begin waiting for the page to navigate without blocking the ",(0,i.kt)("inlineCode",{parentName:"li"},"page.click()")," function"),(0,i.kt)("li",{parentName:"ol"},"Click the element, firing off a navigating event"),(0,i.kt)("li",{parentName:"ol"},"Resolve once the page has navigated, allowing further code to run")),(0,i.kt)("h2",{id:"-our-code-so-far"},(0,i.kt)("a",{parentName:"h2",href:"#current-code",target:null,rel:null})," Our code so far"),(0,i.kt)("p",null,"Here's what our project's code looks like so far:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-marked-tabs"},"<marked-tab header=\"Playwright\" lang=\"javascript\">\nimport { chromium } from 'playwright';\nimport * as fs from 'fs/promises';\n\nconst browser = await chromium.launch({ headless: false });\n\n// Create a page and visit Google\nconst page = await browser.newPage();\nawait page.goto('https://google.com');\n\n// Agree to the cookies policy\nawait page.click('button:has-text(\"I agree\")');\n\n// Type the query and visit the results page\nawait page.type('input[title=\"Search\"]', 'hello world');\nawait page.keyboard.press('Enter');\n\n// Click on the first result\nawait page.click('.g a');\nawait page.waitForLoadState('load');\n\n// Our title collecting and screenshotting logic\n// will go here\n\nawait page.waitForTimeout(10000);\n\nawait browser.close();\n</marked-tab>\n<marked-tab header=\"Puppeteer\" lang=\"javascript\">\nimport puppeteer from 'puppeteer';\nimport * as fs from 'fs/promises';\n\nconst browser = await puppeteer.launch({ headless: false });\n\n// Create a page and visit Google\nconst page = await browser.newPage();\nawait page.goto('https://google.com');\n\n// Agree to the cookies policy\nawait page.click('button + button');\n\n// Type the query and visit the results page\nawait page.type('input[title=\"Search\"]', 'hello world');\nawait page.keyboard.press('Enter');\n\n// Wait for the first result to appear on the page,\n// then click on it\nawait page.waitForSelector('.g a');\nawait Promise.all([page.waitForNavigation(), page.click('.g a')]);\n\n// Our title collecting and screenshotting logic\n// will go here\n\nawait page.waitForTimeout(10000);\n\nawait browser.close();\n</marked-tab>\n")),(0,i.kt)("h2",{id:"-next-up"},(0,i.kt)("a",{parentName:"h2",href:"#next",target:null,rel:null})," Next up"),(0,i.kt)("p",null,"In the ",(0,i.kt)("a",{parentName:"p",href:"/academy/puppeteer-playwright/page/page-methods",target:null,rel:null},"final lesson")," of the ",(0,i.kt)("strong",{parentName:"p"},"Opening & controlling a page")," section of this course, we'll be learning about various methods on ",(0,i.kt)("strong",{parentName:"p"},"Page")," which aren't related to directly interacting with a page or waiting for stuff, as well as finally adding the final touches to our mini-project (page title grabbing and screenshotting)."))}d.isMDXComponent=!0}}]);