"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[8435],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),d=c(a),m=o,w=d["".concat(l,".").concat(m)]||d[m]||g[m]||i;return a?n.createElement(w,s(s({ref:t},p),{},{components:a})):n.createElement(w,s({ref:t},p))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,s=new Array(i);s[0]=d;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:o,s[1]=r;for(var c=2;c<i;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},43475:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>c,toc:()=>g});var n=a(87462),o=a(63366),i=(a(67294),a(3905)),s=["components"],r={title:"Logging into a website",description:'Understand the "login flow" - logging into a website, then maintaining a logged in status within different browser contexts for an efficient automation process.',sidebar_position:1,slug:"/puppeteer-playwright/common-use-cases/logging-into-a-website"},l="Logging into a website",c={unversionedId:"webscraping/puppeteer_playwright/common_use_cases/logging_into_a_website",id:"webscraping/puppeteer_playwright/common_use_cases/logging_into_a_website",title:"Logging into a website",description:'Understand the "login flow" - logging into a website, then maintaining a logged in status within different browser contexts for an efficient automation process.',source:"@site/sources/academy/webscraping/puppeteer_playwright/common_use_cases/logging_into_a_website.md",sourceDirName:"webscraping/puppeteer_playwright/common_use_cases",slug:"/puppeteer-playwright/common-use-cases/logging-into-a-website",permalink:"/academy/puppeteer-playwright/common-use-cases/logging-into-a-website",draft:!1,tags:[],version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1674755822,formattedLastUpdatedAt:"Jan 26, 2023",sidebarPosition:1,frontMatter:{title:"Logging into a website",description:'Understand the "login flow" - logging into a website, then maintaining a logged in status within different browser contexts for an efficient automation process.',sidebar_position:1,slug:"/puppeteer-playwright/common-use-cases/logging-into-a-website"},sidebar:"academy",previous:{title:"Common use cases",permalink:"/academy/puppeteer-playwright/common-use-cases"},next:{title:"Paginating through results",permalink:"/academy/puppeteer-playwright/common-use-cases/paginating-through-results"}},p={},g=[{value:"Inputting credentials",id:"inputting-credentials",level:2},{value:"Passing around cookies",id:"passing-around-cookies",level:2},{value:"Retrieving cookies",id:"retrieving-cookies",level:3},{value:"Passing cookies to a new browser context",id:"passing-cookies-to-new-contexts",level:3},{value:"Completing the flow",id:"completing-the-flow",level:3},{value:"Final code overview",id:"final-code",level:2},{value:"Next up",id:"next",level:2}],d={toc:g};function m(e){var t=e.components,r=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"logging-into-a-website"},"Logging into a website"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},'Understand the "login flow" - logging into a website, then maintaining a logged in status within different browser contexts for an efficient automation process.')),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Whether it's auto-renewing a service, automatically sending a message on an interval, or automatically cancelling a Netflix subscription, one of the most popular things headless browsers are used for is automating things within a user's account on a certain website. Of course, automating anything on a user's account requires the automation of the login process as well. In this lesson, we'll be covering how to build a simple login flow from start to finish with Playwright or Puppeteer."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"In this lesson, we'll be using ",(0,i.kt)("a",{parentName:"p",href:"https://yahoo.com",target:"_blank",rel:"noopener"},"yahoo.com")," as an example. Feel free to follow along using the academy Yahoo account credentials, or even deviate from the lesson a bit and try building a login flow for a different website of your choosing!")),(0,i.kt)("h2",{id:"inputting-credentials"},"Inputting credentials"),(0,i.kt)("p",null,"The full logging in process on Yahoo goes like this:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Accept their cookies policy, then load the main page."),(0,i.kt)("li",{parentName:"ol"},"Click on the ",(0,i.kt)("strong",{parentName:"li"},"Sign in")," button and load the sign-in page."),(0,i.kt)("li",{parentName:"ol"},"Enter the username and click the button."),(0,i.kt)("li",{parentName:"ol"},"Enter the password and click the button, then load the main page again (but now logged in).")),(0,i.kt)("p",null,"When we lay out the steps like this in ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Pseudocode",target:"_blank",rel:"noopener"},"pseudocode"),", it makes it significantly easier to translate over into code. Here's the four steps above loop in JavaScript:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-marked-tabs"},"<marked-tab header=\"Playwright\" lang=\"javascript\">\nimport { chromium } from 'playwright';\n\n// Launch a browser and open a page\nconst browser = await chromium.launch({ headless: false });\nconst page = await browser.newPage();\n\nawait page.goto('https://www.yahoo.com/');\n\n// Agree to the cookies terms, then click on the \"Sign in\" button\nawait page.click('button[name=\"agree\"]');\nawait page.waitForSelector('a:has-text(\"Sign in\")');\n\nawait page.click('a:has-text(\"Sign in\")');\nawait page.waitForLoadState('load');\n\n// Type in the username and continue forward\nawait page.type('input[name=\"username\"]', 'YOUR-LOGIN-HERE');\nawait page.click('input[name=\"signin\"]');\n\n// Type in the password and continue forward\nawait page.type('input[name=\"password\"]', 'YOUR-PASSWORD-HERE');\nawait page.click('button[name=\"verifyPassword\"]');\nawait page.waitForLoadState('load');\n\n// Wait for 10 seconds so we can see that we have in fact\n// successfully logged in\nawait page.waitForTimeout(10000)\n</marked-tab>\n<marked-tab header=\"Puppeteer\" lang=\"javascript\">\nimport puppeteer from 'puppeteer';\n\n// Launch a browser and open a page\nconst browser = await puppeteer.launch({ headless: false });\nconst page = await browser.newPage();\n\nawait page.goto('https://www.yahoo.com/');\n\n// Agree to the cookies terms, then click on the \"Sign in\" button\nawait Promise.all([page.waitForSelector('a[data-ylk*=\"sign-in\"]'), page.click('button[name=\"agree\"]')]);\nawait Promise.all([page.waitForNavigation(), page.click('a[data-ylk*=\"sign-in\"]')]);\n\n// Type in the username and continue forward\nawait page.type('input[name=\"username\"]', 'YOUR-LOGIN-HERE');\nawait Promise.all([page.waitForNavigation(), page.click('input[name=\"signin\"]')]);\n\n// Type in the password and continue forward\nawait page.type('input[name=\"password\"]', 'YOUR-PASSWORD-HERE');\nawait Promise.all([page.waitForNavigation(), page.click('button[name=\"verifyPassword\"]')]);\n\n// Wait for 10 seconds so we can see that we have in fact\n// successfully logged in\nawait page.waitForTimeout(10000)\n</marked-tab>\n")),(0,i.kt)("p",null,"Great! If you're following along and you've replaced the placeholder credentials with your own, you should see that on the final navigated page, you're logged into your Yahoo account."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Successfully logged into Yahoo",src:a(47537).Z,width:"1008",height:"408"})),(0,i.kt)("h2",{id:"passing-around-cookies"},"Passing around cookies"),(0,i.kt)("p",null,"Now that we all know how to log into a website let's try and solve a more complex problem. Let's say that we want to send 3 different emails at the same exact time, all from the ",(0,i.kt)("strong",{parentName:"p"},"Academy")," Yahoo account."),(0,i.kt)("p",null,"Here is an object we'll create which represents the three different emails we want to send:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const emailsToSend = [\n    {\n        to: 'abcdef123randomFakeEmail@gmail.com',\n        subject: 'Hello',\n        body: 'This is a message.',\n    },\n    {\n        to: 'testingtesting12345903@aol.com',\n        subject: 'Testing',\n        body: 'I love the academy!'\n    },\n    {\n        to: 'jimmyJohnBillyBob420@academy.net',\n        subject: 'Apify is awesome!',\n        body: 'Some content.'\n    }\n];\n")),(0,i.kt)("p",null,"What we could do is log in 3 different times, then simply automate the sending of each email; however, this is extremely inefficient. When you log into a website, one of the main things that allows you to stay logged in and perform actions on your account is the ",(0,i.kt)("a",{parentName:"p",href:"/academy/concepts/http-cookies",target:null,rel:null},"cookies")," stored in your browser. These cookies tell the website that you have been authenticated, and that you have the permissions required to modify your account."),(0,i.kt)("p",null,"With this knowledge of cookies, it can be concluded that we can just pass the cookies generated by the code above right into each new browser context that we use to send each email. That way, we won't have to run the login flow each time."),(0,i.kt)("h3",{id:"retrieving-cookies"},"Retrieving cookies"),(0,i.kt)("p",null,"First, we'll grab the cookies we generated:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-marked-tabs"},'<marked-tab header="Playwright" lang="javascript">\n// Grab the cookies from the default browser context,\n// which was used to log in\nconst cookies = await browser.contexts()[0].cookies();\n</marked-tab>\n<marked-tab header="Puppeteer" lang="javascript">\n// Grab the cookies from the page used to log in\nconst cookies = await page.cookies();\n</marked-tab>\n')),(0,i.kt)("p",null,"Notice that in Playwright, cookies are tied to a ",(0,i.kt)("strong",{parentName:"p"},"BrowserContext"),", while in Puppeteer they are tied to a ",(0,i.kt)("strong",{parentName:"p"},"Page"),"."),(0,i.kt)("h3",{id:"passing-cookies-to-new-contexts"},"Passing cookies to a new browser context"),(0,i.kt)("p",null,"Remembering from the section above, we stored our cookies in a variable named ",(0,i.kt)("strong",{parentName:"p"},"cookies"),". These can now be directly passed into a new browser context like so:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-marked-tabs"},'<marked-tab header="Playwright" lang="javascript">\n// Create a fresh non-persistent browser context\nconst sendEmailContext = await browser.newContext();\n// Add the cookies from the previous one to this one so that\n// we\'ll be logged into Yahoo without having to re-do the\n// logging in automation\nawait sendEmailContext.addCookies(cookies);\nconst page2 = await sendEmailContext.newPage();\n\n// Notice that we are logged in, even though we didn\'t\n// go through the logging in process again!\nawait page2.goto(\'https://mail.yahoo.com/\');\nawait page2.waitForTimeout(10000);\n</marked-tab>\n<marked-tab header="Puppeteer" lang="javascript">\n// Create a fresh non-persistent browser context\nconst sendEmailContext = await browser.createIncognitoBrowserContext();\n// Create a new page on the new browser context and set its cookies\n// to be the same ones from the page we used to log into the website.\nconst page2 = await sendEmailContext.newPage();\nawait page2.setCookie(...cookies);\n\n// Notice that we are logged in, even though we didn\'t\n// go through the logging in process again!\nawait page2.goto(\'https://mail.yahoo.com/\');\nawait page2.waitForTimeout(10000);\n</marked-tab>\n')),(0,i.kt)("h3",{id:"completing-the-flow"},"Completing the flow"),(0,i.kt)("p",null,"Now that passing cookies around is out of the way, we can finally complete the goal at hand and send all three of these emails at once. This can be done by mapping through ",(0,i.kt)("strong",{parentName:"p"},"emailsToSend"),", creating an array of promises where each function creates a new browser context, adds the initial cookies, and sends the email."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-marked-tabs"},'<marked-tab header="Playwright" lang="javascript">\n// Grab the cookies from the default browser context,\n// which was used to log in\nconst cookies = await browser.contexts()[0].cookies();\n\nawait page.close();\n\n// Create an array of promises, running the cookie passing\n// and email sending logic each time\nconst promises = emailsToSend.map(({ to, subject, body }) =>\n    (async () => {\n        // Create a fresh non-persistent browser context\n        const sendEmailContext = await browser.newContext();\n        // Add the cookies from the previous one to this one so that\n        // we\'ll be logged into Yahoo without having to re-do the\n        // logging in automation\n        await sendEmailContext.addCookies(cookies);\n        const page2 = await sendEmailContext.newPage();\n\n        await page2.goto(\'https://mail.yahoo.com/\');\n\n        // Compose an email\n        await page2.click(\'a[aria-label="Compose"]\');\n\n        // Populate the fields with the details from the object\n        await page2.type(\'input#message-to-field\', to);\n        await page2.type(\'input[data-test-id="compose-subject"]\', subject);\n        await page2.type(\'div[data-test-id="compose-editor-container"] div[contenteditable="true"]\', body);\n\n        // Send the email\n        await page2.click(\'button[title="Send this email"]\');\n\n        await sendEmailContext.close();\n    })()\n);\n\n// Wait for all emails to be sent\nawait Promise.all(promises);\n</marked-tab>\n<marked-tab header="Puppeteer" lang="javascript">\n// Create an array of promises, running the cookie passing\n// and email sending logic each time\nconst promises = emailsToSend.map(({ to, subject, body }) =>\n    (async () => {\n        // Create a fresh non-persistent browser context\n        const sendEmailContext = await browser.createIncognitoBrowserContext();\n        // Create a new page on the new browser context and set its cookies\n        // to be the same ones from the page we used to log into the website.\n        const page2 = await sendEmailContext.newPage();\n        await page2.setCookie(...cookies);\n\n        await page2.goto(\'https://mail.yahoo.com/\');\n\n        // Compose an email\n        await page2.click(\'a[aria-label="Compose"]\');\n\n        // Populate the fields with the details from the object\n        await page2.type(\'input#message-to-field\', to);\n        await page2.type(\'input[data-test-id="compose-subject"]\', subject);\n        await page2.type(\'div[data-test-id="compose-editor-container"] div[contenteditable="true"]\', body);\n\n        // Send the email\n        await page2.click(\'button[title="Send this email"]\');\n\n        await sendEmailContext.close();\n    })()\n);\n\n// Wait for all emails to be sent\nawait Promise.all(promises);\n</marked-tab>\n')),(0,i.kt)("h2",{id:"final-code"},"Final code overview"),(0,i.kt)("p",null,"To sum up what we've built during this lesson:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Log into Yahoo."),(0,i.kt)("li",{parentName:"ol"},"Store the login cookies in a variable."),(0,i.kt)("li",{parentName:"ol"},"Concurrently create 3 new browser contexts and inject the cookies into each one."),(0,i.kt)("li",{parentName:"ol"},"Concurrently send 3 emails from the same account logged into in the first step.")),(0,i.kt)("p",null,"Here's what the final code looks like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-marked-tabs"},"<marked-tab header=\"Playwright\" lang=\"javascript\">\nimport { chromium } from 'playwright';\n\nconst emailsToSend = [\n    {\n        to: 'abcdef123randomFakeEmail@gmail.com',\n        subject: 'Hello',\n        body: 'This is a message.',\n    },\n    {\n        to: 'testingtesting12345903@aol.com',\n        subject: 'Testing',\n        body: 'I love the academy!',\n    },\n    {\n        to: 'jimmyJohnBillyBob420@academy.net',\n        subject: 'Apify is awesome!',\n        body: 'Some content.',\n    },\n];\n\nconst browser = await chromium.launch({ headless: false });\nconst page = await browser.newPage();\n\n// Login logic\nawait page.goto('https://www.yahoo.com/');\n\nawait page.click('button[name=\"agree\"]');\nawait page.waitForSelector('a:has-text(\"Sign in\")');\n\nawait page.click('a:has-text(\"Sign in\")');\nawait page.waitForLoadState('load');\n\nawait page.type('input[name=\"username\"]', 'YOUR-LOGIN-HERE');\nawait page.click('input[name=\"signin\"]');\n\nawait page.type('input[name=\"password\"]', 'YOUR-PASSWORD-HERE');\nawait page.click('button[name=\"verifyPassword\"]');\nawait page.waitForLoadState('load');\n\nconst cookies = await browser.contexts()[0].cookies();\n\nawait page.close();\n\n// Email sending logic\nconst promises = emailsToSend.map(({ to, subject, body }) =>\n    (async () => {\n        const sendEmailContext = await browser.newContext();\n        await sendEmailContext.addCookies(cookies);\n        const page2 = await sendEmailContext.newPage();\n\n        await page2.goto('https://mail.yahoo.com/');\n\n        await page2.click('a[aria-label=\"Compose\"]');\n\n        await page2.type('input#message-to-field', to);\n        await page2.type('input[data-test-id=\"compose-subject\"]', subject);\n        await page2.type('div[data-test-id=\"compose-editor-container\"] div[contenteditable=\"true\"]', body);\n\n        await page2.click('button[title=\"Send this email\"]');\n\n        await sendEmailContext.close();\n    })()\n);\n\nawait Promise.all(promises);\n\nawait browser.close();\n</marked-tab>\n<marked-tab header=\"Puppeteer\" lang=\"javascript\">\nimport puppeteer from 'puppeteer';\n\nconst emailsToSend = [\n    {\n        to: 'abcdef123randomFakeEmail@gmail.com',\n        subject: 'Hello',\n        body: 'This is a message.',\n    },\n    {\n        to: 'testingtesting12345903@aol.com',\n        subject: 'Testing',\n        body: 'I love the academy!',\n    },\n    {\n        to: 'jimmyJohnBillyBob420@academy.net',\n        subject: 'Apify is awesome!',\n        body: 'Some content.',\n    },\n];\n\nconst browser = await puppeteer.launch({ headless: false });\nconst page = await browser.newPage();\n\n// Login logic\nawait page.goto('https://www.yahoo.com/');\n\nawait Promise.all([page.waitForSelector('a[data-ylk*=\"sign-in\"]'), page.click('button[name=\"agree\"]')]);\nawait Promise.all([page.waitForNavigation(), page.click('a[data-ylk*=\"sign-in\"]')]);\n\nawait page.type('input[name=\"username\"]', 'YOUR-LOGIN-HERE');\nawait Promise.all([page.waitForNavigation(), page.click('input[name=\"signin\"]')]);\n\nawait page.type('input[name=\"password\"]', 'YOUR-PASSWORD-HERE');\nawait Promise.all([page.waitForNavigation(), page.click('button[name=\"verifyPassword\"]')]);\n\nconst cookies = await page.cookies();\nawait page.close();\n\n// Email sending logic\nconst promises = emailsToSend.map(({ to, subject, body }) =>\n    (async () => {\n        const sendEmailContext = await browser.createIncognitoBrowserContext();\n        const page2 = await sendEmailContext.newPage();\n        await page2.setCookie(...cookies);\n\n        await page2.goto('https://mail.yahoo.com/');\n\n        await page2.click('a[aria-label=\"Compose\"]');\n\n        await page2.type('input#message-to-field', to);\n        await page2.type('input[data-test-id=\"compose-subject\"]', subject);\n        await page2.type('div[data-test-id=\"compose-editor-container\"] div[contenteditable=\"true\"]', body);\n\n        await page2.click('button[title=\"Send this email\"]');\n\n        await sendEmailContext.close();\n    })()\n);\n\nawait Promise.all(promises);\n\nawait browser.close();\n</marked-tab>\n")),(0,i.kt)("h2",{id:"next"},"Next up"),(0,i.kt)("p",null,"In the ",(0,i.kt)("a",{parentName:"p",href:"/academy/puppeteer-playwright/common-use-cases/paginating-through-results",target:null,rel:null},"next lesson"),", you'll learn how to paginate through results on a website."))}m.isMDXComponent=!0},47537:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/logged-in-4e2c63d8ee1b42330fc2cbe72c4ee6bd.webp"}}]);