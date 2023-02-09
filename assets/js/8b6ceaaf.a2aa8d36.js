"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[1122],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(a),h=r,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||o;return a?n.createElement(m,s(s({ref:t},c),{},{components:a})):n.createElement(m,s({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2628:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),s=["components"],i={title:"Best practices",description:"Understand the standards and best practices that we here at Apify abide by to write readable, scalable, and maintainable code.",sidebar_position:1.5,slug:"/web-scraping-for-beginners/best-practices"},l="Best practices when writing scrapers",p={unversionedId:"webscraping/web_scraping_for_beginners/best_practices",id:"webscraping/web_scraping_for_beginners/best_practices",title:"Best practices",description:"Understand the standards and best practices that we here at Apify abide by to write readable, scalable, and maintainable code.",source:"@site/sources/academy/webscraping/web_scraping_for_beginners/best_practices.md",sourceDirName:"webscraping/web_scraping_for_beginners",slug:"/web-scraping-for-beginners/best-practices",permalink:"/academy/web-scraping-for-beginners/best-practices",draft:!1,editUrl:"https://github.com/apify/apify-docs-v2/edit/master/sources/academy/webscraping/web_scraping_for_beginners/best_practices.md",tags:[],version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1675963489,formattedLastUpdatedAt:"Feb 9, 2023",sidebarPosition:1.5,frontMatter:{title:"Best practices",description:"Understand the standards and best practices that we here at Apify abide by to write readable, scalable, and maintainable code.",sidebar_position:1.5,slug:"/web-scraping-for-beginners/best-practices"},sidebar:"academy",previous:{title:"Scraping Amazon",permalink:"/academy/web-scraping-for-beginners/challenge/scraping-amazon"},next:{title:"Puppeteer & Playwright",permalink:"/academy/puppeteer-playwright"}},c={},u=[{value:"Code style",id:"code-style",level:2},{value:"Clean code",id:"clean-code",level:3},{value:"Constant variables",id:"constants",level:3},{value:"Use modern ES6 JavaScript",id:"use-es6",level:3},{value:"No magic numbers",id:"no-magic-numbers",level:3},{value:"Use comments!",id:"use-comments",level:3},{value:"Logging",id:"logging",level:2},{value:"Input",id:"input",level:2},{value:"Set limits",id:"set-limits",level:3},{value:"Validate",id:"validate",level:3},{value:"Error handling",id:"error-handling",level:2},{value:"Recap",id:"recap",level:2}],d={toc:u};function h(e){var t=e.components,a=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"best-practices"},"Best practices when writing scrapers"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Understand the standards and best practices that we here at Apify abide by to write readable, scalable, and maintainable code.")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Every developer has their own style, which evolves as they grow and learn. While one dev might prefer a more  ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Functional_programming",target:"_blank",rel:"noopener"},"functional")," style, another might find an ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Imperative_programming",target:"_blank",rel:"noopener"},"imperative")," approach to be more intuitive. We at Apify understand this, and have written this best practices lesson with that in mind."),(0,o.kt)("p",null,"The goal of this lesson is not to force you into a specific paradigm or to make you think that you're doing things wrong, but instead to provide you some insight into the standards and best practices that we at Apify follow to ensure readable, maintainable, scalable code."),(0,o.kt)("h2",{id:"code-style"},"Code style"),(0,o.kt)("p",null,"There are some general things we recommend when it comes to your code style when writing scrapers."),(0,o.kt)("h3",{id:"clean-code"},"Clean code"),(0,o.kt)("p",null,"Praise ",(0,o.kt)("a",{parentName:"p",href:"https://blog.risingstack.com/javascript-clean-coding-best-practices-node-js-at-scale/",target:"_blank",rel:"noopener"},"clean code"),"! Use proper variable and function names that are descriptive of what they are, and split your code into smaller ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Pure_function",target:"_blank",rel:"noopener"},"pure")," functions."),(0,o.kt)("h3",{id:"constants"},"Constant variables"),(0,o.kt)("p",null,"Define any ",(0,o.kt)("a",{parentName:"p",href:"https://softwareengineering.stackexchange.com/questions/250619/best-practices-reasons-for-string-constants-in-javascript",target:"_blank",rel:"noopener"},"constant variables")," that globally apply to the scraper in a single file named ",(0,o.kt)("strong",{parentName:"p"},"constants.js"),", from where they will all be imported. Constant variable names should be in ",(0,o.kt)("inlineCode",{parentName:"p"},"UPPERCASE_WITH_UNDERSCORES")," style."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If you have a whole lot of constant variables, they can be in a folder named ",(0,o.kt)("strong",{parentName:"p"},"constants")," organized into different files.")),(0,o.kt)("h3",{id:"use-es6"},"Use modern ES6 JavaScript"),(0,o.kt)("p",null,"If you're writing your scraper in JavaScript, use ",(0,o.kt)("a",{parentName:"p",href:"https://www.w3schools.com/js/js_es6.asp",target:"_blank",rel:"noopener"},"ES6")," features and ditch the old ones which they replace. This means using ",(0,o.kt)("inlineCode",{parentName:"p"},"const")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"let")," instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"var"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"includes")," instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"indexOf"),", etc."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"To learn more about some of the most popular (and awesome) ES6+ features, check out ",(0,o.kt)("a",{parentName:"p",href:"https://medium.com/@matthiasvstephens/why-is-es6-so-awesome-88bff6857849",target:"_blank",rel:"noopener"},"this")," article.")),(0,o.kt)("h3",{id:"no-magic-numbers"},"No magic numbers"),(0,o.kt)("p",null,"Avoid using ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Magic_number_(programming)",target:"_blank",rel:"noopener"},"magic numbers")," as much as possible. Either declare them as a ",(0,o.kt)("strong",{parentName:"p"},"constant")," variable in your ",(0,o.kt)("strong",{parentName:"p"},"constants.js")," file, or if they are only used once, add a comment explaining what the number is."),(0,o.kt)("p",null,"Don't write code like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const x = (y) => (y - 32) * (5 / 9);\n")),(0,o.kt)("p",null,"That is quite confusing due to the nondescriptive naming and the magic numbers. Do this instead:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Converts a fahrenheit value to celsius\nconst fahrenheitToCelsius = (celsius) => (celsius - 32) * (5 / 9);\n")),(0,o.kt)("h3",{id:"use-comments"},"Use comments!"),(0,o.kt)("p",null,"Don't be shy to add comments to your code! Even when using descriptive function and variable naming, it might still be a good idea to add a comment in places where you had to make a tough decision or chose an unusual choice."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If you're a true pro, use ",(0,o.kt)("a",{parentName:"p",href:"https://jsdoc.app/",target:"_blank",rel:"noopener"},"JSDoc")," to comment and document your code.")),(0,o.kt)("h2",{id:"logging"},"Logging"),(0,o.kt)("p",null,"Logging helps you understand exact what your scraper is doing. Generally, having more logs is better than having less. Especially make sure to log your ",(0,o.kt)("inlineCode",{parentName:"p"},"catch")," blocks - no error should pass unseen unless there is a good reason."),(0,o.kt)("p",null,"For scrapers that will run longer than usual, keep track of some useful stats (such as ",(0,o.kt)("strong",{parentName:"p"},"itemsScraped")," or ",(0,o.kt)("strong",{parentName:"p"},"errorsHit"),") and log them to the console on an interval."),(0,o.kt)("p",null,"The meaning of your log messages should make sense to an outsider who is not familiar with the inner workings of your scraper. Avoid log lines with just numbers or just URLs - always identify what the number/string means."),(0,o.kt)("p",null,'Here is an example of an "incorrect" log message:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"300  https://example.com/1234  1234\n")),(0,o.kt)("p",null,"And here is  that log message translated into something that makes much more sense to the end user:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"Index 1234 --- https://example.com/1234 --- took 300 ms\n")),(0,o.kt)("h2",{id:"input"},"Input"),(0,o.kt)("p",null,"There are two main best practices when it comes to accepting input into a scraper."),(0,o.kt)("h3",{id:"set-limits"},"Set limits"),(0,o.kt)("p",null,"When allowing your users to pass input properties which could break the scraper (such as ",(0,o.kt)("strong",{parentName:"p"},"timeout")," set to ",(0,o.kt)("strong",{parentName:"p"},"0"),"), be sure to disallow ridiculous values. Set a maximum/minimum number allowed, maximum array input length, etc."),(0,o.kt)("h3",{id:"validate"},"Validate"),(0,o.kt)("p",null,"Validate the input provided by the user! This should be the very first thing your scraper does. If the fields in the input are missing or in an incorrect type/format, either parse the value and correct it programmatically or throw an informative error telling the user how to fix the error."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"On the Apify platform, you can use the ",(0,o.kt)("a",{parentName:"p",href:"/academy/deploying-your-code/input-schema",target:null,rel:null},"input schema")," to both easily validate inputs and generate a clean UI for those using your scraper.")),(0,o.kt)("h2",{id:"error-handling"},"Error handling"),(0,o.kt)("p",null,"Errors are bound to occur in scrapers. Perhaps it got blocked, or perhaps the data scraped was corrupted in some way."),(0,o.kt)("p",null,"Whatever the reason, a scraper shouldn't completely crash when an error occurs. Use ",(0,o.kt)("inlineCode",{parentName:"p"},"try...catch")," blocks to catch errors and log useful messages. The log messages should indicate where the error happened, and what type of error happened."),(0,o.kt)("p",null,"Bad error log message:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"Cannot read property \u201c0\u201d from undefined\n")),(0,o.kt)("p",null,"Good error log message:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"Could not parse an address, skipping the page. Url: https://www.example-website.com/people/1234\n")),(0,o.kt)("p",null,"This doesn't mean that you should absolutely litter your code with ",(0,o.kt)("inlineCode",{parentName:"p"},"try...catch")," blocks, but it does mean that they should be placed in error-prone areas (such as API calls or testing a string with a specific regular expression)."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If the error that has occurred renders that run of the scraper completely useless, exit the process immediately.")),(0,o.kt)("p",null,"Logging is the minimum you should be doing though. For example, if you have an entire object of scraped data and just the ",(0,o.kt)("strong",{parentName:"p"},"price")," field fails to be parsed, you might not want to throw away the rest of that data. Rather, it could still be pushed to the output and a log message like this could appear:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"We could not parse the price of product: Men's Trainers Orange, pushing anyways.\n")),(0,o.kt)("p",null,"This really depends on your use case though. If you want 100% clean data, you might not want to push incomplete objects and just retry (ideally) or log an error message instead."),(0,o.kt)("h2",{id:"recap"},"Recap"),(0,o.kt)("p",null,"Wow, that's a whole lot of things to abide by! How will you remember all of them? Well, to simplify everything, just try to follow these three points:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Describe your code as you write it with good naming, constants, comments. It ",(0,o.kt)("strong",{parentName:"li"},"should read like a book"),"."),(0,o.kt)("li",{parentName:"ol"},"Add log messages at points throughout your code so that when it's running, you (and everyone else) know what's going on."),(0,o.kt)("li",{parentName:"ol"},"Handle errors appropriately. Log the error and either retry, or continue on. Only throw if the error will be caught or if the error is absolutely detrimental to the scraper's run.")))}h.isMDXComponent=!0}}]);