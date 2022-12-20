"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[1420],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),g=s(a),h=r,m=g["".concat(p,".").concat(h)]||g[h]||u[h]||o;return a?n.createElement(m,i(i({ref:t},c),{},{components:a})):n.createElement(m,i({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[g]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},43690:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>g});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),i=["components"],l={title:"Interacting with a page",description:"Learn how to programmatically do actions on a page such as clicking, typing, and pressing keys. Also, discover a common roadblock that comes up when automating.",sidebar_position:1,slug:"/puppeteer-playwright/page/interacting-with-a-page"},p="[](#interacting-with-a-page) Interacting with a page",s={unversionedId:"puppeteer_playwright/page/interacting_with_a_page",id:"puppeteer_playwright/page/interacting_with_a_page",title:"Interacting with a page",description:"Learn how to programmatically do actions on a page such as clicking, typing, and pressing keys. Also, discover a common roadblock that comes up when automating.",source:"@site/sources/academy/puppeteer_playwright/page/interacting_with_a_page.md",sourceDirName:"puppeteer_playwright/page",slug:"/puppeteer-playwright/page/interacting-with-a-page",permalink:"/academy/puppeteer-playwright/page/interacting-with-a-page",draft:!1,tags:[],version:"current",lastUpdatedBy:"Jind\u0159ich B\xe4r",lastUpdatedAt:1671536597,formattedLastUpdatedAt:"Dec 20, 2022",sidebarPosition:1,frontMatter:{title:"Interacting with a page",description:"Learn how to programmatically do actions on a page such as clicking, typing, and pressing keys. Also, discover a common roadblock that comes up when automating.",sidebar_position:1,slug:"/puppeteer-playwright/page/interacting-with-a-page"},sidebar:"defaultSidebar",previous:{title:"II - Opening & controlling a page",permalink:"/academy/puppeteer-playwright/page"},next:{title:"Waiting for content & events",permalink:"/academy/puppeteer-playwright/page/waiting"}},c={},g=[{value:" Clicking &amp; pressing keys",id:"-clicking--pressing-keys",level:2},{value:" Next up",id:"-next-up",level:2}],u={toc:g};function h(e){var t=e.components,l=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"-interacting-with-a-page"},(0,o.kt)("a",{parentName:"h1",href:"#interacting-with-a-page",target:null,rel:null})," Interacting with a page"),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Page")," object has whole boat-load of functions which can be used to interact with the loaded page. We're not going to go over every single one of them right now, but we ",(0,o.kt)("em",{parentName:"p"},"will")," use a few of the most common ones to add some functionality to our current project."),(0,o.kt)("p",null,"Let's say that we want to automate searching for ",(0,o.kt)("strong",{parentName:"p"},"hello world")," on Google, then click on the first result and log the title of the page to the console, then take a screenshot and write it it to the filesystem. In order to understand how we're going to automate this, let's break down how we would do it manually:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Click on the button which accepts Google's cookies policy (To see how it looks, open Google in an anonymous window.)"),(0,o.kt)("li",{parentName:"ol"},"Type ",(0,o.kt)("strong",{parentName:"li"},"hello world")," into the search bar"),(0,o.kt)("li",{parentName:"ol"},"Press ",(0,o.kt)("strong",{parentName:"li"},"Enter")),(0,o.kt)("li",{parentName:"ol"},"Wait for the results page to load"),(0,o.kt)("li",{parentName:"ol"},"Click on the first result"),(0,o.kt)("li",{parentName:"ol"},"Read the title of the clicked result's loaded page"),(0,o.kt)("li",{parentName:"ol"},"Screenshot the page")),(0,o.kt)("p",null,"Though it seems complex, the wonderful ",(0,o.kt)("strong",{parentName:"p"},"Page")," API makes all of these actions extremely easy to perform."),(0,o.kt)("h2",{id:"-clicking--pressing-keys"},(0,o.kt)("a",{parentName:"h2",href:"#clicking-and-pressing-keys",target:null,rel:null})," Clicking & pressing keys"),(0,o.kt)("p",null,"Let's first focus on the first 3 steps listed above. By using ",(0,o.kt)("inlineCode",{parentName:"p"},"page.click()")," and the CSS selector of the element to click, we can click an element:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-marked-tabs"},'<marked-tab header="Playwright" lang="JavaScript">\n// Click the "I agree" button\nawait page.click(\'button:has-text("I agree")\');\n</marked-tab>\n<marked-tab header="Puppeteer" lang="JavaScript">\n// Click the "I agree" button\nawait page.click(\'button + button\');\n</marked-tab>\n')),(0,o.kt)("p",null,"With ",(0,o.kt)("inlineCode",{parentName:"p"},"page.click()"),", Puppeteer and Playwright actually drag the mouse and click, allowing the bot to act more human-like. This is different from programmatically clicking with ",(0,o.kt)("inlineCode",{parentName:"p"},"Element.click()")," in vanilla client-side JavaScript."),(0,o.kt)("p",null,"Notice that in the Playwright example, we are using a different selector than in the Puppeteer example. This is because Playwright supports ",(0,o.kt)("a",{parentName:"p",href:"https://playwright.dev/docs/selectors#text-selector",target:"_blank",rel:"noopener"},"many custom CSS selectors"),", such as the ",(0,o.kt)("strong",{parentName:"p"},"has-text")," pseudo class. As a rule of thumb, using text selectors is much more preferable to using regular selectors, as they are much less likely to break. If Google makes the sibling above the ",(0,o.kt)("strong",{parentName:"p"},"I agree")," button a ",(0,o.kt)("inlineCode",{parentName:"p"},"<div>")," element instead of a ",(0,o.kt)("inlineCode",{parentName:"p"},"<button>")," element, our ",(0,o.kt)("inlineCode",{parentName:"p"},"button + button")," selector will break. However, the button will always have the text ",(0,o.kt)("strong",{parentName:"p"},"I agree"),"; therefore, ",(0,o.kt)("inlineCode",{parentName:"p"},'button:has-text("I agree")')," is more reliable."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If you're not already familiar with CSS selectors and how to find them, we recommend referring to ",(0,o.kt)("a",{parentName:"p",href:"/academy/web-scraping-for-beginners/data-collection/using-devtools",target:null,rel:null},"this lesson")," in the ",(0,o.kt)("strong",{parentName:"p"},"Web scraping for beginners")," course.")),(0,o.kt)("p",null,"Then, we can type some text into an input field with ",(0,o.kt)("inlineCode",{parentName:"p"},"page.type()"),"; passing a CSS selector as the first, and the string to input as the second parameter:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Type the query into the search box\nawait page.type('input[title=\"Search\"]', 'hello world');\n")),(0,o.kt)("p",null,"Finally, we can press a single key by accessing the ",(0,o.kt)("inlineCode",{parentName:"p"},"keyboard")," property of ",(0,o.kt)("inlineCode",{parentName:"p"},"page")," and calling the ",(0,o.kt)("inlineCode",{parentName:"p"},"press()")," function on it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Press enter\nawait page.keyboard.press('Enter');\n")),(0,o.kt)("p",null,"So far, we've got this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-marked-tabs"},"<marked-tab header=\"Playwright\" lang=\"javascript\">\nimport { chromium } from 'playwright';\n\nconst browser = await chromium.launch({ headless: false });\n\nconst page = await browser.newPage();\n\nawait page.goto('https://google.com/');\n\n// Click the \"I agree\" button\nawait page.click('button:has-text(\"I agree\")');\n\n// Type the query into the search box\nawait page.type('input[title=\"Search\"]', 'hello world');\n\n// Press enter\nawait page.keyboard.press('Enter');\n\nawait page.waitForTimeout(10000)\nawait browser.close();\n</marked-tab>\n<marked-tab header=\"Puppeteer\" lang=\"javascript\">\nimport puppeteer from 'puppeteer';\n\nconst browser = await puppeteer.launch({ headless: false });\n\nconst page = await browser.newPage();\n\nawait page.goto('https://google.com/');\n\n// Click the \"I agree\" button\nawait page.click('button + button');\n\n// Type the query into the search box\nawait page.type('input[title=\"Search\"]', 'hello world');\n\n// Press enter\nawait page.keyboard.press('Enter');\n\nawait page.waitForTimeout(10000)\nawait browser.close();\n</marked-tab>\n")),(0,o.kt)("p",null,"When we run it, we leave off on the results page:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Google results page reached by headless browser",src:a(36910).Z,width:"1710",height:"606"})),(0,o.kt)("p",null,"Great! So now all we have to do is click the first result which matches the CSS selector ",(0,o.kt)("inlineCode",{parentName:"p"},".g a"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-marked-tabs"},"<marked-tab header=\"Playwright\" lang=\"javascript\">\nimport { chromium } from 'playwright';\n\nconst browser = await chromium.launch({ headless: false });\n\nconst page = await browser.newPage();\n\nawait page.goto('https://google.com/');\n\nawait page.click('button:has-text(\"I agree\")');\n\nawait page.type('input[title=\"Search\"]', 'hello world');\n\nawait page.keyboard.press('Enter');\n\n// Click the first result\nawait page.click('.g a');\n\nawait page.waitForTimeout(10000)\nawait browser.close();\n</marked-tab>\n<marked-tab header=\"Puppeteer\" lang=\"javascript\">\n// This code will throw an error!\nimport puppeteer from 'puppeteer';\n\nconst browser = await puppeteer.launch({ headless: false });\n\nconst page = await browser.newPage();\n\nawait page.goto('https://google.com/');\n\nawait page.click('button + button');\n\nawait page.type('input[title=\"Search\"]', 'hello world');\n\nawait page.keyboard.press('Enter');\n\n// Click the first result\nawait page.click('.g a');\n\nawait page.waitForTimeout(10000)\nawait browser.close();\n</marked-tab>\n")),(0,o.kt)("p",null,"But wait, when we try to run the Puppeteer code, we run into this nasty error:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The following error won't be present if you're following the Playwright examples. You'll learn why in the next lesson.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"/Users/me/Desktop/playwright-puppeteer/node_modules/puppeteer/lib/cjs/puppeteer/common/assert.js:26\n        throw new Error(message);\n              ^\n\nError: No node found for selector: .g a\n    at assert (/Users/me/Desktop/playwright-puppeteer/node_modules/puppeteer/lib/cjs/puppeteer/common/assert.js:26:15)\n...\n")),(0,o.kt)("p",null,"We hit this error because we attempted to click an element that wasn't yet present on the page. The results page hadn't even loaded yet!"),(0,o.kt)("h2",{id:"-next-up"},(0,o.kt)("a",{parentName:"h2",href:"#next",target:null,rel:null})," Next up"),(0,o.kt)("p",null,"In the ",(0,o.kt)("a",{parentName:"p",href:"/academy/puppeteer-playwright/page/waiting",target:null,rel:null},"next lesson"),", we'll be taking a look at how to ",(0,o.kt)("strong",{parentName:"p"},"wait for")," navigation, events, and content before resuming interactions."))}h.isMDXComponent=!0},36910:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/google-results-1f28190b8c26c07e70b5c8df549e39cf.webp"}}]);