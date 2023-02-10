"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[2271],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),g=p(a),h=r,m=g["".concat(s,".").concat(h)]||g[h]||c[h]||o;return a?n.createElement(m,l(l({ref:t},u),{},{components:a})):n.createElement(m,l({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=g;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},74871:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>u,default:()=>d,frontMatter:()=>p,metadata:()=>c,toc:()=>h});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),l=a(74866),i=a(85162),s=["components"],p={title:"Interacting with a page",description:"Learn how to programmatically do actions on a page such as clicking, typing, and pressing keys. Also, discover a common roadblock that comes up when automating.",sidebar_position:1,slug:"/puppeteer-playwright/page/interacting-with-a-page"},u="Interacting with a page",c={unversionedId:"webscraping/puppeteer_playwright/page/interacting_with_a_page",id:"webscraping/puppeteer_playwright/page/interacting_with_a_page",title:"Interacting with a page",description:"Learn how to programmatically do actions on a page such as clicking, typing, and pressing keys. Also, discover a common roadblock that comes up when automating.",source:"@site/sources/academy/webscraping/puppeteer_playwright/page/interacting_with_a_page.md",sourceDirName:"webscraping/puppeteer_playwright/page",slug:"/puppeteer-playwright/page/interacting-with-a-page",permalink:"/academy/puppeteer-playwright/page/interacting-with-a-page",draft:!1,editUrl:"https://github.com/apify/apify-docs-v2/edit/master/sources/academy/webscraping/puppeteer_playwright/page/interacting_with_a_page.md",tags:[],version:"current",lastUpdatedBy:"Jind\u0159ich B\xe4r",lastUpdatedAt:1676040579,formattedLastUpdatedAt:"Feb 10, 2023",sidebarPosition:1,frontMatter:{title:"Interacting with a page",description:"Learn how to programmatically do actions on a page such as clicking, typing, and pressing keys. Also, discover a common roadblock that comes up when automating.",sidebar_position:1,slug:"/puppeteer-playwright/page/interacting-with-a-page"},sidebar:"academy",previous:{title:"II - Opening & controlling a page",permalink:"/academy/puppeteer-playwright/page"},next:{title:"Waiting for content & events",permalink:"/academy/puppeteer-playwright/page/waiting"}},g={},h=[{value:"Clicking &amp; pressing keys",id:"clicking-and-pressing-keys",level:2},{value:"Next up",id:"next",level:2}],m={toc:h};function d(e){var t=e.components,p=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},m,p,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"interacting-with-a-page"},"Interacting with a page"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Learn how to programmatically do actions on a page such as clicking, typing, and pressing keys. Also, discover a common roadblock that comes up when automating.")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Page")," object has whole boat-load of functions which can be used to interact with the loaded page. We're not going to go over every single one of them right now, but we ",(0,o.kt)("em",{parentName:"p"},"will")," use a few of the most common ones to add some functionality to our current project."),(0,o.kt)("p",null,"Let's say that we want to automate searching for ",(0,o.kt)("strong",{parentName:"p"},"hello world")," on Google, then click on the first result and log the title of the page to the console, then take a screenshot and write it it to the filesystem. In order to understand how we're going to automate this, let's break down how we would do it manually:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Click on the button which accepts Google's cookies policy (To see how it looks, open Google in an anonymous window.)"),(0,o.kt)("li",{parentName:"ol"},"Type ",(0,o.kt)("strong",{parentName:"li"},"hello world")," into the search bar"),(0,o.kt)("li",{parentName:"ol"},"Press ",(0,o.kt)("strong",{parentName:"li"},"Enter")),(0,o.kt)("li",{parentName:"ol"},"Wait for the results page to load"),(0,o.kt)("li",{parentName:"ol"},"Click on the first result"),(0,o.kt)("li",{parentName:"ol"},"Read the title of the clicked result's loaded page"),(0,o.kt)("li",{parentName:"ol"},"Screenshot the page")),(0,o.kt)("p",null,"Though it seems complex, the wonderful ",(0,o.kt)("strong",{parentName:"p"},"Page")," API makes all of these actions extremely easy to perform."),(0,o.kt)("h2",{id:"clicking-and-pressing-keys"},"Clicking & pressing keys"),(0,o.kt)("p",null,"Let's first focus on the first 3 steps listed above. By using ",(0,o.kt)("inlineCode",{parentName:"p"},"page.click()")," and the CSS selector of the element to click, we can click an element:"),(0,o.kt)(l.Z,{groupId:"main",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"Playwright",label:"Playwright",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-JavaScript"},'// Click the "I agree" button\nawait page.click(\'button:has-text("I agree")\');\n\n'))),(0,o.kt)(i.Z,{value:"Puppeteer",label:"Puppeteer",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-JavaScript"},"// Click the \"I agree\" button\nawait page.click('button + button');\n\n")))),(0,o.kt)("p",null,"With ",(0,o.kt)("inlineCode",{parentName:"p"},"page.click()"),", Puppeteer and Playwright actually drag the mouse and click, allowing the bot to act more human-like. This is different from programmatically clicking with ",(0,o.kt)("inlineCode",{parentName:"p"},"Element.click()")," in vanilla client-side JavaScript."),(0,o.kt)("p",null,"Notice that in the Playwright example, we are using a different selector than in the Puppeteer example. This is because Playwright supports ",(0,o.kt)("a",{parentName:"p",href:"https://playwright.dev/docs/selectors#text-selector",target:"_blank",rel:"noopener"},"many custom CSS selectors"),", such as the ",(0,o.kt)("strong",{parentName:"p"},"has-text")," pseudo class. As a rule of thumb, using text selectors is much more preferable to using regular selectors, as they are much less likely to break. If Google makes the sibling above the ",(0,o.kt)("strong",{parentName:"p"},"I agree")," button a ",(0,o.kt)("inlineCode",{parentName:"p"},"<div>")," element instead of a ",(0,o.kt)("inlineCode",{parentName:"p"},"<button>")," element, our ",(0,o.kt)("inlineCode",{parentName:"p"},"button + button")," selector will break. However, the button will always have the text ",(0,o.kt)("strong",{parentName:"p"},"I agree"),"; therefore, ",(0,o.kt)("inlineCode",{parentName:"p"},'button:has-text("I agree")')," is more reliable."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If you're not already familiar with CSS selectors and how to find them, we recommend referring to ",(0,o.kt)("a",{parentName:"p",href:"/academy/web-scraping-for-beginners/data-collection/using-devtools",target:null,rel:null},"this lesson")," in the ",(0,o.kt)("strong",{parentName:"p"},"Web scraping for beginners")," course.")),(0,o.kt)("p",null,"Then, we can type some text into an input field with ",(0,o.kt)("inlineCode",{parentName:"p"},"page.type()"),"; passing a CSS selector as the first, and the string to input as the second parameter:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Type the query into the search box\nawait page.type('input[title=\"Search\"]', 'hello world');\n")),(0,o.kt)("p",null,"Finally, we can press a single key by accessing the ",(0,o.kt)("inlineCode",{parentName:"p"},"keyboard")," property of ",(0,o.kt)("inlineCode",{parentName:"p"},"page")," and calling the ",(0,o.kt)("inlineCode",{parentName:"p"},"press()")," function on it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Press enter\nawait page.keyboard.press('Enter');\n")),(0,o.kt)("p",null,"So far, we've got this:"),(0,o.kt)(l.Z,{groupId:"main",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"Playwright",label:"Playwright",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { chromium } from 'playwright';\n\nconst browser = await chromium.launch({ headless: false });\n\nconst page = await browser.newPage();\n\nawait page.goto('https://google.com/');\n\n// Click the \"I agree\" button\nawait page.click('button:has-text(\"I agree\")');\n\n// Type the query into the search box\nawait page.type('input[title=\"Search\"]', 'hello world');\n\n// Press enter\nawait page.keyboard.press('Enter');\n\nawait page.waitForTimeout(10000)\nawait browser.close();\n\n"))),(0,o.kt)(i.Z,{value:"Puppeteer",label:"Puppeteer",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import puppeteer from 'puppeteer';\n\nconst browser = await puppeteer.launch({ headless: false });\n\nconst page = await browser.newPage();\n\nawait page.goto('https://google.com/');\n\n// Click the \"I agree\" button\nawait page.click('button + button');\n\n// Type the query into the search box\nawait page.type('input[title=\"Search\"]', 'hello world');\n\n// Press enter\nawait page.keyboard.press('Enter');\n\nawait page.waitForTimeout(10000)\nawait browser.close();\n\n")))),(0,o.kt)("p",null,"When we run it, we leave off on the results page:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Google results page reached by headless browser",src:a(98814).Z,width:"1710",height:"606"})),(0,o.kt)("p",null,"Great! So now all we have to do is click the first result which matches the CSS selector ",(0,o.kt)("inlineCode",{parentName:"p"},".g a"),":"),(0,o.kt)(l.Z,{groupId:"main",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"Playwright",label:"Playwright",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { chromium } from 'playwright';\n\nconst browser = await chromium.launch({ headless: false });\n\nconst page = await browser.newPage();\n\nawait page.goto('https://google.com/');\n\nawait page.click('button:has-text(\"I agree\")');\n\nawait page.type('input[title=\"Search\"]', 'hello world');\n\nawait page.keyboard.press('Enter');\n\n// Click the first result\nawait page.click('.g a');\n\nawait page.waitForTimeout(10000)\nawait browser.close();\n\n"))),(0,o.kt)(i.Z,{value:"Puppeteer",label:"Puppeteer",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// This code will throw an error!\nimport puppeteer from 'puppeteer';\n\nconst browser = await puppeteer.launch({ headless: false });\n\nconst page = await browser.newPage();\n\nawait page.goto('https://google.com/');\n\nawait page.click('button + button');\n\nawait page.type('input[title=\"Search\"]', 'hello world');\n\nawait page.keyboard.press('Enter');\n\n// Click the first result\nawait page.click('.g a');\n\nawait page.waitForTimeout(10000)\nawait browser.close();\n\n")))),(0,o.kt)("p",null,"But wait, when we try to run the Puppeteer code, we run into this nasty error:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The following error won't be present if you're following the Playwright examples. You'll learn why in the next lesson.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"/Users/me/Desktop/playwright-puppeteer/node_modules/puppeteer/lib/cjs/puppeteer/common/assert.js:26\n        throw new Error(message);\n              ^\n\nError: No node found for selector: .g a\n    at assert (/Users/me/Desktop/playwright-puppeteer/node_modules/puppeteer/lib/cjs/puppeteer/common/assert.js:26:15)\n...\n")),(0,o.kt)("p",null,"We hit this error because we attempted to click an element that wasn't yet present on the page. The results page hadn't even loaded yet!"),(0,o.kt)("h2",{id:"next"},"Next up"),(0,o.kt)("p",null,"In the ",(0,o.kt)("a",{parentName:"p",href:"/academy/puppeteer-playwright/page/waiting",target:null,rel:null},"next lesson"),", we'll be taking a look at how to ",(0,o.kt)("strong",{parentName:"p"},"wait for")," navigation, events, and content before resuming interactions."))}d.isMDXComponent=!0},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),r=a(86010);const o="tabItem_Ymn6";function l(e){var t=e.children,a=e.hidden,l=e.className;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>N});var n=a(87462),r=a(67294),o=a(86010),l=a(12466),i=a(16550),s=a(91980),p=a(67392),u=a(50012);function c(e){return function(e){return r.Children.map(e,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function g(e){var t=e.values,a=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:c(a);return function(e){var t=(0,p.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,a])}function h(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function m(e){var t=e.queryString,a=void 0!==t&&t,n=e.groupId,o=(0,i.k6)(),l=function(e){var t=e.queryString,a=void 0!==t&&t,n=e.groupId;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:a,groupId:n});return[(0,s._X)(l),(0,r.useCallback)((function(e){if(l){var t=new URLSearchParams(o.location.search);t.set(l,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[l,o])]}function d(e){var t,a,n,o,l=e.defaultValue,i=e.queryString,s=void 0!==i&&i,p=e.groupId,c=g(e),d=(0,r.useState)((function(){return function(e){var t,a=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!h({value:a,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+a+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return a}var r=null!=(t=n.find((function(e){return e.default})))?t:n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:l,tabValues:c})})),w=d[0],f=d[1],b=m({queryString:s,groupId:p}),k=b[0],y=b[1],v=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:p}.groupId),a=(0,u.Nk)(t),n=a[0],o=a[1],[n,(0,r.useCallback)((function(e){t&&o.set(e)}),[t,o])]),N=v[0],T=v[1],x=function(){var e=null!=k?k:N;return h({value:e,tabValues:c})?e:null}();return(0,r.useEffect)((function(){x&&f(x)}),[x]),{selectedValue:w,selectValue:(0,r.useCallback)((function(e){if(!h({value:e,tabValues:c}))throw new Error("Can't select invalid tab value="+e);f(e),y(e),T(e)}),[y,T,c]),tabValues:c}}var w=a(72389);const f="tabList__CuJ",b="tabItem_LNqP";function k(e){var t=e.className,a=e.block,i=e.selectedValue,s=e.selectValue,p=e.tabValues,u=[],c=(0,l.o5)().blockElementScrollPositionUntilNextRender,g=function(e){var t=e.currentTarget,a=u.indexOf(t),n=p[a].value;n!==i&&(c(t),s(n))},h=function(e){var t,a=null;switch(e.key){case"Enter":g(e);break;case"ArrowRight":var n,r=u.indexOf(e.currentTarget)+1;a=null!=(n=u[r])?n:u[0];break;case"ArrowLeft":var o,l=u.indexOf(e.currentTarget)-1;a=null!=(o=u[l])?o:u[u.length-1]}null==(t=a)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},p.map((function(e){var t=e.value,a=e.label,l=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:function(e){return u.push(e)},onKeyDown:h,onClick:g},l,{className:(0,o.Z)("tabs__item",b,null==l?void 0:l.className,{"tabs__item--active":i===t})}),null!=a?a:t)})))}function y(e){var t=e.lazy,a=e.children,n=e.selectedValue;if(t){var o=a.find((function(e){return e.props.value===n}));return o?(0,r.cloneElement)(o,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n})})))}function v(e){var t=d(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",f)},r.createElement(k,(0,n.Z)({},e,t)),r.createElement(y,(0,n.Z)({},e,t)))}function N(e){var t=(0,w.Z)();return r.createElement(v,(0,n.Z)({key:String(t)},e))}},98814:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/google-results-7c52a69dcd7170b0a8d1a8b93b321811.png"}}]);