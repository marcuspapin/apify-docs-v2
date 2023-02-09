"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[3309],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),l=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=l(a),d=r,m=h["".concat(p,".").concat(d)]||h[d]||c[d]||o;return a?n.createElement(m,i(i({ref:t},u),{},{components:a})):n.createElement(m,i({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=h;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},63919:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),i=["components"],s={title:"When to use Puppeteer Scraper",description:"Choosing between Web Scraper and Puppeteer Scraper can be difficult. We explain the important differences to help you pick the right tool.",sidebar_position:15.2,slug:"/node-js/when-to-use-puppeteer-scraper"},p=void 0,l={unversionedId:"tutorials/node_js/when_to_use_puppeteer_scraper",id:"tutorials/node_js/when_to_use_puppeteer_scraper",title:"When to use Puppeteer Scraper",description:"Choosing between Web Scraper and Puppeteer Scraper can be difficult. We explain the important differences to help you pick the right tool.",source:"@site/sources/academy/tutorials/node_js/when_to_use_puppeteer_scraper.md",sourceDirName:"tutorials/node_js",slug:"/node-js/when-to-use-puppeteer-scraper",permalink:"/academy/node-js/when-to-use-puppeteer-scraper",draft:!1,editUrl:"https://github.com/apify/apify-docs-v2/edit/master/sources/academy/tutorials/node_js/when_to_use_puppeteer_scraper.md",tags:[],version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1675963489,formattedLastUpdatedAt:"Feb 9, 2023",sidebarPosition:15.2,frontMatter:{title:"When to use Puppeteer Scraper",description:"Choosing between Web Scraper and Puppeteer Scraper can be difficult. We explain the important differences to help you pick the right tool.",sidebar_position:15.2,slug:"/node-js/when-to-use-puppeteer-scraper"},sidebar:"academy",previous:{title:"Request labels and how to pass data to other requests",permalink:"/academy/node-js/request-labels-in-apify-actors"},next:{title:"Submitting forms on .ASPX pages",permalink:"/academy/node-js/submitting-forms-on-aspx-pages"}},u={},c=[{value:"What exactly is Puppeteer?",id:"what-exactly-is-puppeteer",level:2},{value:"Execution environment",id:"execution-environment",level:2},{value:"Practical differences",id:"practical-differences",level:2},{value:"Evaluating in-browser code",id:"evaluating-in-browser-code",level:2},{value:"Navigation to other pages (URLs)",id:"navigation-to-other-pages-urls",level:2},{value:"Intercepting network activity",id:"intercepting-network-activity",level:2},{value:"Enqueueing JavaScript links",id:"enqueueing-javascript-links",level:2},{value:"Word of caution",id:"word-of-caution",level:2},{value:"Plain form submit navigations",id:"plain-form-submit-navigations",level:2},{value:"Form submit navigations with side-effects",id:"form-submit-navigations-with-side-effects",level:2},{value:"Frontend navigations",id:"frontend-navigations",level:2},{value:"Using Apify SDK",id:"using-apify-sdk",level:2},{value:"Wrapping it up",id:"wrapping-it-up",level:2}],h={toc:c};function d(e){var t=e.components,s=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You may have read in the ",(0,o.kt)("a",{parentName:"p",href:"https://apify.com/apify/web-scraper",target:"_blank",rel:"noopener"},"Web Scraper")," readme or somewhere else at Apify that ",(0,o.kt)("a",{parentName:"p",href:"https://apify.com/apify/puppeteer-scraper",target:"_blank",rel:"noopener"},"Puppeteer Scraper")," is more powerful and gives you more control over the browser, enabling you to do almost anything. But what does that really mean? In this article, we will talk about the differences in more detail and show you some minimal examples to strengthen that understanding."),(0,o.kt)("h2",{id:"what-exactly-is-puppeteer"},"What exactly is Puppeteer?"),(0,o.kt)("p",null,"Both the Web Scraper and Puppeteer Scraper use Puppeteer to control the Chrome browser, so, what's the difference? Consider Puppeteer and Chrome as two separate programs."),(0,o.kt)("p",null,"Puppeteer is a JavaScript program that's used to control the browser and by controlling we mean opening tabs, closing tabs, moving the mouse, clicking buttons, typing on the keyboard, managing network activity and so on. If a website is watching for any of these events, there is no way for it to know that those actions were performed by a robot and not a human user. Chrome is just Chrome as you know it."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"There are numerous ways to detect robot browsers. But there are no ways to tell if a specific mouse click was made by a user or a robot.")),(0,o.kt)("p",null,"Ok, so both Web Scraper and Puppeteer Scraper use Puppeteer to give commands to Chrome. Where's the difference? It's called the execution environment."),(0,o.kt)("h2",{id:"execution-environment"},"Execution environment"),(0,o.kt)("p",null,"It may sound fancy, but it's just a technical term for \"where does my code run\". When you open the DevTools and start typing JavaScript in the browser Console, it gets executed in the browser. Browser is the code's execution environment. But you can't control the browser from the inside. For that, you need a different environment. Puppeteer's environment is Node.js. If you don't know what Node.js is, don't worry about it too much. Just remember that it's the environment where Puppeteer runs."),(0,o.kt)("p",null,"By now you probably figured this out on your own, so this will not come as a surprise. The difference between Web Scraper and Puppeteer Scraper is where your page function gets executed. When using the Web Scraper, it's executed in the browser environment. It means that it gets access to all the browser specific features such as the ",(0,o.kt)("inlineCode",{parentName:"p"},"window")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"document")," objects, but it cannot control the browser with Puppeteer directly. This is done automatically in the background by the scraper. Whereas in Puppeteer Scraper, the page function is executed in the Node.js environment, giving you full access to Puppeteer and all its features."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Puppeteer Scraper Diagram",src:a(83951).Z,width:"641",height:"279"}),"\n",(0,o.kt)("em",{parentName:"p"},"This does not mean that you can't execute in-browser code with Puppeteer Scraper. Keep reading to learn how.")),(0,o.kt)("h2",{id:"practical-differences"},"Practical differences"),(0,o.kt)("p",null,"Ok, cool, different environments, but how does that help you scrape stuff? Actually, quite a lot. There are things you just cannot do from within the browser, but you can easily do them with Puppeteer. We will not attempt to create an exhaustive list, but rather show you some very useful features that we use every day in our scraping."),(0,o.kt)("h2",{id:"evaluating-in-browser-code"},"Evaluating in-browser code"),(0,o.kt)("p",null,"In Web Scraper, everything runs in the browser, so there's really not much to talk about there. With Puppeteer Scraper, it's just a single function call away."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const bodyHTML = await context.page.evaluate(() => {\\\n\xa0 \xa0 console.log('This will be printed in browser console.');\\\n\xa0 \xa0 return document.body.innerHTML;\\\n})\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"context.page.evaluate()")," call executes the provided function in the browser environment and passes back the return value back to Node.js environment. There is one very important caveat though! Since we're in different environments, we cannot simply use our existing variables, such as ",(0,o.kt)("inlineCode",{parentName:"p"},"context")," inside of the evaluated function, because they are not available there. Different environments, different variables."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"See the")," ",(0,o.kt)("inlineCode",{parentName:"p"},"page.evaluate()")," ",(0,o.kt)("em",{parentName:"p"},(0,o.kt)("a",{parentName:"em",href:"https://pptr.dev/#?product=Puppeteer&show=api-pageevaluatepagefunction-args",target:"_blank",rel:"noopener"},"documentation")," for info on how to pass variables from Node.js to browser.")),(0,o.kt)("p",null,"With the help of Apify SDK, we can even inject jQuery into the browser. You can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"Pre goto function")," input option to manipulate the page's environment before it loads."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"async function preGotoFunction({ request, page, Apify }) {\\\n\xa0 \xa0 await Apify.utils.puppeteer.injectJQuery(page);\\\n}\n\nThis will make jQuery available in all pages. You can then use it in `context.page.evaluate()` calls:\n\nconst bodyText = await context.page.evaluate(() => {\\\n\xa0 \xa0 return $('body').text();\\\n})\n")),(0,o.kt)("p",null,"You can do a lot of DOM manipulation directly from Node.js / Puppeteer, but when you're planning to do a lot of sequential operations, it's often better and faster to do it with jQuery in a single ",(0,o.kt)("inlineCode",{parentName:"p"},"context.page.evaluate()")," call than using multiple ",(0,o.kt)("inlineCode",{parentName:"p"},"context.page.$"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"context.page.$eval()")," and other Puppeteer methods."),(0,o.kt)("h2",{id:"navigation-to-other-pages-urls"},"Navigation to other pages (URLs)"),(0,o.kt)("p",null,"In Web Scraper, your page function literally runs within a page so it makes sense that when this page gets destroyed, the page function throws an error. Sadly, navigation (going to a different URL) destroys pages, so whenever you click a button in Web Scraper that forces the browser to navigate somewhere else, you end up with an error. In Puppeteer Scraper, this is not an issue, because the ",(0,o.kt)("inlineCode",{parentName:"p"},"page")," object gets updated with new data seamlessly."),(0,o.kt)("p",null,"Imagine that you currently have ",(0,o.kt)("inlineCode",{parentName:"p"},"https://example.com/page-1")," open and there's a button on the page that will take you to ",(0,o.kt)("inlineCode",{parentName:"p"},"https://example.com/page-2"),".Or that you're on ",(0,o.kt)("inlineCode",{parentName:"p"},"https://google.com")," and you \xa0fill in the search bar and click on the search button."),(0,o.kt)("p",null,"Consider the following code inside Web Scraper page function:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"await context.waitFor('button');\\\n$('button').click();\n")),(0,o.kt)("p",null,"With a ",(0,o.kt)("inlineCode",{parentName:"p"},"button")," that takes you to the next page or launches a Google search (which takes you to the results page), the page function will fail with a nasty error."),(0,o.kt)("p",null,"However, when using Puppeteer Scraper, this code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"await context.page.waitFor('button');\\\nawait Promise.all([\\\n\xa0 \xa0 context.page.waitForNavigation(),\\\n\xa0 \xa0 context.page.click('button'),\\\n]);\n")),(0,o.kt)("p",null,"Will work as expected and after the ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise.all()")," call resolves, you will have the next page loaded and ready for scraping."),(0,o.kt)("p",null,"Pay special attention to the ",(0,o.kt)("inlineCode",{parentName:"p"},"page.waitForNavigation()")," (",(0,o.kt)("a",{parentName:"p",href:"https://pptr.dev/#?product=Puppeteer&show=api-pagewaitfornavigationoptions",target:"_blank",rel:"noopener"},"see docs"),") call which is very important. It pauses your script until the navigation completes. Without it, the execution would start immediately after the mouse click. It's also important that you place it before the click itself, otherwise it creates a race condition and your script will behave unpredictably."),(0,o.kt)("p",null,"You can go even further and navigate programmatically by calling:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"await context.page.goto('https://some-new-page.com');\n")),(0,o.kt)("h2",{id:"intercepting-network-activity"},"Intercepting network activity"),(0,o.kt)("p",null,"Some very useful scraping techniques revolve around listening to network requests and responses and even modifying them on the fly. Web Scraper's page function doesn't have access to the network, besides calling JavaScript APIs such as ",(0,o.kt)("inlineCode",{parentName:"p"},"fetch()"),". Puppeteer Scraper, on the other hand, has full control over the browser's network activity."),(0,o.kt)("p",null,"With a simple call, you can listen to all the network requests that are being dispatched from the browser. For example, the following code will print all their URLs to the console."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"context.page.on('request', req => console.log(req.url()));\n")),(0,o.kt)("p",null,"This can be useful in many ways, such as blocking unwanted assets or scripts from being downloaded, modifying request methods or faking responses and so on."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Explaining how to do interception properly is out of scope of this article. See ",(0,o.kt)("a",{parentName:"em",href:"https://pptr.dev/#?product=Puppeteer&show=api-pagesetrequestinterceptionvalue",target:"_blank",rel:"noopener"},"Puppeteer docs")," and the ",(0,o.kt)("a",{parentName:"em",href:"https://docs-v2.apify.com/sdk-js/docs/api/puppeteer#puppeteeraddinterceptrequesthandler-promise",target:"_blank",rel:"noopener"},"Apify SDK helper")," for request interception.")),(0,o.kt)("h2",{id:"enqueueing-javascript-links"},"Enqueueing JavaScript links"),(0,o.kt)("p",null,"A large number of websites use either form submissions or JavaScript redirects for navigation and displaying of data. With Web Scraper, you cannot crawl those websites, because there are no links to find and enqueue on those pages. Puppeteer Scraper enables you to automatically click all those elements that cause navigation, intercept the navigation requests and enqueue them to the request queue."),(0,o.kt)("p",null,"If it seems complicated, don't worry. We've abstracted all the complexity away into a simple ",(0,o.kt)("inlineCode",{parentName:"p"},"Clickable elements selector")," input option. When left empty, none of the said clicking and intercepting happens, but once you choose a selector, Puppeteer Scraper will automatically click all the selected elements, watch for page navigations and enqueue them into the ",(0,o.kt)("inlineCode",{parentName:"p"},"RequestQueue"),"."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"The")," ",(0,o.kt)("inlineCode",{parentName:"p"},"Clickable elements selector")," ",(0,o.kt)("em",{parentName:"p"},"will also work on regular non-JavaScript links, however, its significantly slower than using the plain")," ",(0,o.kt)("inlineCode",{parentName:"p"},"Link selector"),(0,o.kt)("em",{parentName:"p"},". Unless you know you need it, use the")," ",(0,o.kt)("inlineCode",{parentName:"p"},"Link selector")," ",(0,o.kt)("em",{parentName:"p"},"for best performance.")),(0,o.kt)("h2",{id:"word-of-caution"},"Word of caution"),(0,o.kt)("p",null,"Since we're actually clicking in the page, which may or may not trigger some nasty JavaScript, anything can happen really, including the page completely breaking. There are three common scenarios though."),(0,o.kt)("h2",{id:"plain-form-submit-navigations"},"Plain form submit navigations"),(0,o.kt)("p",null,"This is easy and will work out of the box. It's typically used on older websites such as ",(0,o.kt)("a",{parentName:"p",href:"https://www.remax.com.tr/ofis-office-franchise-girisimci-agent-arama",target:"_blank",rel:"noopener"},"Turkish Remax"),". For a site like this you can just set the ",(0,o.kt)("inlineCode",{parentName:"p"},"Clickable elements selector")," and you're good to go:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"a[onclick^=getPage]\n")),(0,o.kt)("h2",{id:"form-submit-navigations-with-side-effects"},"Form submit navigations with side-effects"),(0,o.kt)("p",null,'Those are similar to the ones above with an important caveat. Once you click the first thing, it usually modifies the page in a way that causes more clicking to become impossible. We deal with those by scraping the pages one by one, using the pagination "next" button. See ',(0,o.kt)("a",{parentName:"p",href:"http://www.maxwellrender.com/materials/",target:"_blank",rel:"noopener"},"Maxwell Materials")," and use the following selector:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"li.page-item.next a\n")),(0,o.kt)("h2",{id:"frontend-navigations"},"Frontend navigations"),(0,o.kt)("p",null,"Modern websites typically won't navigate away just to fetch the next set of results. They will do it in the background and just update the displayed data. To paginate websites like that is quite easy actually and it can be done in both Web Scraper and Puppeteer Scraper. Try it on ",(0,o.kt)("a",{parentName:"p",href:"https://www.udemy.com/topic/javascript/",target:"_blank",rel:"noopener"},"Udemy")," for example. Just click the next button to load the next set of courses."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Web Scraper\\\n$('li a span.pagination-next').click();\n\n// Puppeteer Scraper\\\nawait page.click('li a span.pagination-next');\n")),(0,o.kt)("h2",{id:"using-apify-sdk"},"Using Apify SDK"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs-v2.apify.com/sdk-js/",target:"_blank",rel:"noopener"},"Apify SDK")," is the library we used to build all of our scrapers. For power users, it is the best tool out there to scrape using JavaScript. If you're not yet ready to start writing your own actors using SDK, Puppeteer Scraper enables you to use its features without having to worry about building your own actors."),(0,o.kt)("p",null,"The possibilities are endless, but to show you some examples:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Check out the ",(0,o.kt)("a",{parentName:"p",href:"https://docs-v2.apify.com/sdk-js/docs/api/puppeteer#puppeteer.infiniteScroll",target:"_blank",rel:"noopener"},"Apify.utils.puppeteer.infiniteScroll()")," function that enables scraping pages with infinite scroll in one line of code.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://docs-v2.apify.com/sdk-js/docs/api/puppeteer#puppeteer.blockRequests",target:"_blank",rel:"noopener"},"Apify.utils.puppeteer.blockRequests()")," allows you to block network requests based on URL patterns.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://docs-v2.apify.com/sdk-js/docs/api/apify#module_Apify.openDataset",target:"_blank",rel:"noopener"},"Apify.openDataset()")," lets you work with any dataset under your account.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Make HTTP requests with ",(0,o.kt)("inlineCode",{parentName:"p"},"Apify.utils.requestAsBrowser()")," to fetch external resources."))),(0,o.kt)("p",null,"And we're only scratching the surface here."),(0,o.kt)("h2",{id:"wrapping-it-up"},"Wrapping it up"),(0,o.kt)("p",null,"There are many more techniques available to Puppeteer Scraper that are either too complicated to replicate in Web Scraper or downright impossible to do. For basic scraping of simple websites Web Scraper is a great tool, because it goes right to the point and uses in-browser JavaScript which is well-known to millions of people, even non-developers."),(0,o.kt)("p",null,"Once you start hitting some roadblocks, you may find that Puppeteer Scraper is just what you need to overcome them. And if Puppeteer Scraper still doesn't cut it, there's still Apify SDK to rule them all. We hope you found this tutorial helpful and happy scraping."))}d.isMDXComponent=!0},83951:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/puppeteer-scraper-diagram-5eb36bbee183cfd0066ee3807e8f9073.jpeg"}}]);