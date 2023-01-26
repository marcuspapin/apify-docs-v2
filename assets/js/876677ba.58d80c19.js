"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[8976],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),g=p(a),u=o,d=g["".concat(l,".").concat(u)]||g[u]||h[u]||r;return a?n.createElement(d,i(i({ref:t},c),{},{components:a})):n.createElement(d,i({ref:t},c))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},58124:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>p,toc:()=>h});var n=a(87462),o=a(63366),r=(a(67294),a(3905)),i=["components"],s={title:"Paginating through results",description:"Learn how to paginate through results on websites that use either page number-based pagination or dynamic lazy-loading pagination.",sidebar_position:2,slug:"/puppeteer-playwright/common-use-cases/paginating-through-results"},l="Paginating through results",p={unversionedId:"webscraping/puppeteer_playwright/common_use_cases/paginating_through_results",id:"webscraping/puppeteer_playwright/common_use_cases/paginating_through_results",title:"Paginating through results",description:"Learn how to paginate through results on websites that use either page number-based pagination or dynamic lazy-loading pagination.",source:"@site/sources/academy/webscraping/puppeteer_playwright/common_use_cases/paginating_through_results.md",sourceDirName:"webscraping/puppeteer_playwright/common_use_cases",slug:"/puppeteer-playwright/common-use-cases/paginating-through-results",permalink:"/academy/puppeteer-playwright/common-use-cases/paginating-through-results",draft:!1,tags:[],version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1674755822,formattedLastUpdatedAt:"Jan 26, 2023",sidebarPosition:2,frontMatter:{title:"Paginating through results",description:"Learn how to paginate through results on websites that use either page number-based pagination or dynamic lazy-loading pagination.",sidebar_position:2,slug:"/puppeteer-playwright/common-use-cases/paginating-through-results"},sidebar:"academy",previous:{title:"Logging into a website",permalink:"/academy/puppeteer-playwright/common-use-cases/logging-into-a-website"},next:{title:"Downloading files",permalink:"/academy/puppeteer-playwright/common-use-cases/downloading-files"}},c={},h=[{value:"Page number-based pagination",id:"page-number-based-pagination",level:2},{value:"Finding the last page",id:"finding-the-last-page",level:3},{value:"Making a request for each results page",id:"making-a-request-for-each-results-page",level:3},{value:"Final code",id:"final-pagination-code",level:3},{value:"Lazy-loading pagination",id:"lazy-loading-pagination",level:2},{value:"Auto scrolling",id:"auto-scrolling",level:3},{value:"Collecting data",id:"collecting-data",level:3},{value:"Final code",id:"final-lazy-loading-code",level:3},{value:"Quick note",id:"quick-note",level:2},{value:"Next up",id:"next",level:2}],g={toc:h};function u(e){var t=e.components,s=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},g,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"paginating-through-results"},"Paginating through results"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Learn how to paginate through results on websites that use either page number-based pagination or dynamic lazy-loading pagination.")),(0,r.kt)("hr",null),(0,r.kt)("p",null,"If you're trying to ",(0,r.kt)("a",{parentName:"p",href:"/academy/puppeteer-playwright/executing-scripts/collecting-data",target:null,rel:null},"collect data")," on a website that has millions, thousands, or even just hundreds of results, it is very likely that they are paginating their results to reduce strain on their backend as well as on the users loading and rendering the content."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://apify-docs.s3.amazonaws.com/master/docs/assets/tutorials/images/pagination.webp",alt:"Amazon pagination"})),(0,r.kt)("p",null,"Attempting to scrape thousands to tens of thousands of results using a headless browser on a website that only shows 30 results at a time might be daunting at first, but be rest assured that by the end of this lesson you'll feel confident when faced with this use case."),(0,r.kt)("h2",{id:"page-number-based-pagination"},"Page number-based pagination"),(0,r.kt)("p",null,"At the time of writing, Facebook has ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/orgs/facebook/repositories",target:"_blank",rel:"noopener"},"115 repositories on Github"),". By default, Github lists repositories in descending order based on when they were last updated (the most recently updated repos are at the top of the list)."),(0,r.kt)("p",null,"We want to scrape all of the titles, links, and descriptions for Facebook's repositories; however, Github only displays 30 repos per page. This means we've gotta paginate through all of the results."),(0,r.kt)("p",null,"Let's first start off by defining some basic variables:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// This is where we'll push all of the scraped repos\nconst repositories = [];\n\nconst BASE_URL = 'https://github.com';\n\n// We'll use this URL a couple of times within our code, so we'll\n// store it in a constant variable to prevent typos and so it's\n// easier to tell what it is\nconst REPOSITORIES_URL = `${BASE_URL}/orgs/facebook/repositories`;\n")),(0,r.kt)("h3",{id:"finding-the-last-page"},"Finding the last page"),(0,r.kt)("p",null,"What we want to do now is grab the last page number, so that we know exactly how many requests we need to send in order to paginate through all of the repositories. Luckily, this information is available right on the page here:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Final page number",src:a(20425).Z,width:"606",height:"76"})),(0,r.kt)("p",null,"Let's grab this number now with a little bit of code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-marked-tabs"},"<marked-tab header=\"Playwright\" lang=\"javascript\">\nimport { chromium } from 'playwright';\nimport { load } from 'cheerio';\n\nconst repositories = [];\n\nconst BASE_URL = 'https://github.com';\nconst REPOSITORIES_URL = `${BASE_URL}/orgs/facebook/repositories`;\n\nconst browser = await chromium.launch({ headless: false });\nconst page = await browser.newPage();\n\nawait page.goto(REPOSITORIES_URL);\n\nconst lastPageElement = page.locator('a[aria-label*=\"Page \"]:nth-last-child(2)');\n// This will output 4\nconst lastPage = +(await lastPageElement.getAttribute('aria-label')).replace(/\\D/g, '');\n\nconsole.log(lastPage);\n\nawait browser.close();\n</marked-tab>\n<marked-tab header=\"Puppeteer\" lang=\"javascript\">\nimport puppeteer from 'puppeteer';\nimport { load } from 'cheerio';\n\nconst repositories = [];\n\nconst BASE_URL = 'https://github.com';\nconst REPOSITORIES_URL = `${BASE_URL}/orgs/facebook/repositories`;\n\nconst browser = await puppeteer.launch({ headless: false });\nconst page = await browser.newPage();\n\nawait page.goto(REPOSITORIES_URL);\n\nconst lastPageLabel = await page.$eval('a[aria-label*=\"Page \"]:nth-last-child(2)', (elem) => elem.getAttribute('aria-label'));\n// This will output 4\nconst lastPage = +lastPageLabel.replace(/\\D/g, '');\n\nconsole.log(lastPage);\n\nawait browser.close();\n</marked-tab>\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Learn more about the ",(0,r.kt)("inlineCode",{parentName:"p"},":nth-last-child")," pseudo-class ",(0,r.kt)("a",{parentName:"p",href:"https://www.w3schools.com/cssref/sel_nth-last-child.asp",target:"_blank",rel:"noopener"},"on W3Schools"),". It works similar to ",(0,r.kt)("inlineCode",{parentName:"p"},":nth-child"),", but starts from the bottom of the parent element's children instead of from the top.")),(0,r.kt)("p",null,"When we run this code, here's what we see:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"4\n")),(0,r.kt)("p",null,"And since we're already on the first page, we'll go ahead and scrape the repos from it. However, since we are going to reuse this logic on the other pages as well, let's create a function that will handle the data collection and reliably return a nice array of results:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-marked-tabs"},"<marked-tab header=\"Playwright\" lang=\"javascript\">\nimport { chromium } from 'playwright';\nimport { load } from 'cheerio';\n\nconst repositories = [];\n\nconst BASE_URL = 'https://github.com';\nconst REPOSITORIES_URL = `${BASE_URL}/orgs/facebook/repositories`;\n\n// Create a function which grabs all repos from a page\nconst scrapeRepos = async (page) => {\n    const $ = load(await page.content());\n\n    return [...$('li.Box-row')].map((item) => {\n        const elem = $(item);\n        const titleElement = elem.find('a[itemprop*=\"name\"]');\n\n        return {\n            title: titleElement.text().trim(),\n            description: elem.find('p[itemprop=\"description\"]').text().trim(),\n            link: new URL(titleElement.attr('href'), BASE_URL).href,\n        };\n    });\n};\n\nconst browser = await chromium.launch({ headless: false });\nconst page = await browser.newPage();\n\nawait page.goto(REPOSITORIES_URL);\n\nconst lastPageElement = page.locator('a[aria-label*=\"Page \"]:nth-last-child(2)');\nconst lastPage = +(await lastPageElement.getAttribute('aria-label')).replace(/\\D/g, '');\n\n// Push all results from the first page to results array\nrepositories.push(...(await scrapeRepos(page)));\n\n// Log the 30 repositories scraped from the first page\nconsole.log(repositories);\n\nawait browser.close();\n</marked-tab>\n<marked-tab header=\"Puppeteer\" lang=\"javascript\">\nimport puppeteer from 'puppeteer';\nimport { load } from 'cheerio';\n\nconst repositories = [];\n\nconst BASE_URL = 'https://github.com';\nconst REPOSITORIES_URL = `${BASE_URL}/orgs/facebook/repositories`;\n\n// Create a function which grabs all repos from a page\nconst scrapeRepos = async (page) => {\n    const $ = load(await page.content());\n\n    return [...$('li.Box-row')].map((item) => {\n        const elem = $(item);\n        const titleElement = elem.find('a[itemprop*=\"name\"]');\n\n        return {\n            title: titleElement.text().trim(),\n            description: elem.find('p[itemprop=\"description\"]').text().trim(),\n            link: new URL(titleElement.attr('href'), BASE_URL).href,\n        };\n    });\n};\n\nconst browser = await puppeteer.launch({ headless: false });\nconst page = await browser.newPage();\n\nawait page.goto(REPOSITORIES_URL);\n\nconst lastPageLabel = await page.$eval('a[aria-label*=\"Page \"]:nth-last-child(2)', (elem) => elem.getAttribute('aria-label'));\nconst lastPage = +lastPageLabel.replace(/\\D/g, '');\n\n// Push all results from the first page to results array\nrepositories.push(...(await scrapeRepos(page)));\n\n// Log the 30 repositories scraped from the first page\nconsole.log(repositories);\n\nawait browser.close();\n</marked-tab>\n")),(0,r.kt)("h3",{id:"making-a-request-for-each-results-page"},"Making a request for each results page"),(0,r.kt)("p",null,"Cool, so now we have all the tools we need to write concise logic that will be run for every single page. First, we'll create an array of numbers from 0-4:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// We must add 1 to the lastPage, since the array starts at 0 and we\n// are creating an array from its index values\nArray(lastPage + 1).keys() // -> [0, 1, 2, 3, 4]\n")),(0,r.kt)("p",null,"Then, we'll slice the first two values from that array so that it starts from 2 and ends at 4:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"[...Array(lastPage + 1).keys()].slice(2) // -> [2, 3, 4]\n")),(0,r.kt)("p",null,"This array now accurately represents the pages we need to go through. We'll map through it and create an array of promises, all of which make a request to each page, scrape its data, then push it to the ",(0,r.kt)("strong",{parentName:"p"},"repositories")," array:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'// Map through the range. The value from the array is the page number\n// to make a request for\nconst promises = [...Array(lastPage + 1).keys()].slice(2).map((pageNumber) =>\n    (async () => {\n        const page2 = await browser.newPage();\n\n        // Prepare the URL before making the request by setting the "page"\n        // parameter to whatever the pageNumber is currently\n        const url = new URL(REPOSITORIES_URL);\n        url.searchParams.set(\'page\', pageNumber);\n\n        await page2.goto(url.href);\n\n        // Scrape the data and push it to the "repositories" array\n        repositories.push(...(await scrapeRepos(page2)));\n\n        await page2.close();\n    })()\n);\n\nawait Promise.all(promises);\n\nconsole.log(repositories.length);\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"IMPORTANT!")," Usually, within the map function's callback you'd want to add the requests to a request queue, especially when paginating through hundreds (or even thousands) of pages. But since we know that we have 4 pages and only 3 left to go through, it is totally safe to use ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise.all()")," for this specific use-case.")),(0,r.kt)("h3",{id:"final-pagination-code"},"Final code"),(0,r.kt)("p",null,"After all is said and done, here's what our final code looks like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-marked-tabs"},"<marked-tab header=\"Playwright\" lang=\"javascript\">\nimport { chromium } from 'playwright';\nimport { load } from 'cheerio';\n\nconst repositories = [];\n\nconst BASE_URL = 'https://github.com';\nconst REPOSITORIES_URL = `${BASE_URL}/orgs/facebook/repositories`;\n\nconst scrapeRepos = async (page) => {\n    const $ = load(await page.content());\n\n    return [...$('li.Box-row')].map((item) => {\n        const elem = $(item);\n        const titleElement = elem.find('a[itemprop*=\"name\"]');\n\n        return {\n            title: titleElement.text().trim(),\n            description: elem.find('p[itemprop=\"description\"]').text().trim(),\n            link: new URL(titleElement.attr('href'), BASE_URL).href,\n        };\n    });\n};\n\nconst browser = await chromium.launch({ headless: false });\nconst page = await browser.newPage();\n\nawait page.goto(REPOSITORIES_URL);\n\nconst lastPageElement = page.locator('a[aria-label*=\"Page \"]:nth-last-child(2)');\nconst lastPage = +(await lastPageElement.getAttribute('aria-label')).replace(/\\D/g, '');\n\nrepositories.push(...(await scrapeRepos(page)));\n\nawait page.close();\n\nconst promises = [...Array(lastPage + 1).keys()].slice(2).map((pageNumber) =>\n    (async () => {\n        const page2 = await browser.newPage();\n\n        const url = new URL(REPOSITORIES_URL);\n        url.searchParams.set('page', pageNumber);\n\n        await page2.goto(url.href);\n\n        repositories.push(...(await scrapeRepos(page2)));\n\n        await page2.close();\n    })()\n);\n\nawait Promise.all(promises);\n\n// Log the final length of the \"repositories\" array\nconsole.log(repositories.length);\n\nawait browser.close();\n</marked-tab>\n<marked-tab header=\"Puppeteer\" lang=\"javascript\">\nimport puppeteer from 'puppeteer';\nimport { load } from 'cheerio';\n\nconst repositories = [];\n\nconst BASE_URL = 'https://github.com';\nconst REPOSITORIES_URL = `${BASE_URL}/orgs/facebook/repositories`;\n\n// Create a function which grabs all repos from a page\nconst scrapeRepos = async (page) => {\n    const $ = load(await page.content());\n\n    return [...$('li.Box-row')].map((item) => {\n        const elem = $(item);\n        const titleElement = elem.find('a[itemprop*=\"name\"]');\n\n        return {\n            title: titleElement.text().trim(),\n            description: elem.find('p[itemprop=\"description\"]').text().trim(),\n            link: new URL(titleElement.attr('href'), BASE_URL).href,\n        };\n    });\n};\n\nconst browser = await puppeteer.launch({ headless: false });\nconst page = await browser.newPage();\n\nawait page.goto(REPOSITORIES_URL);\n\nconst lastPageLabel = await page.$eval('a[aria-label*=\"Page \"]:nth-last-child(2)', (elem) => elem.getAttribute('aria-label'));\nconst lastPage = +lastPageLabel.replace(/\\D/g, '');\n\nrepositories.push(...(await scrapeRepos(page)));\n\nawait page.close();\n\nconst promises = [...Array(lastPage + 1).keys()].slice(2).map((pageNumber) =>\n    (async () => {\n        const page2 = await browser.newPage();\n\n        const url = new URL(REPOSITORIES_URL);\n        url.searchParams.set('page', pageNumber);\n\n        await page2.goto(url.href);\n\n        repositories.push(...(await scrapeRepos(page2)));\n\n        await page2.close();\n    })()\n);\n\nawait Promise.all(promises);\n\n// Log the final length of the \"repositories\" array\nconsole.log(repositories.length);\n\nawait browser.close();\n</marked-tab>\n")),(0,r.kt)("p",null,"If we remember correctly, Facebook has 115 Github repositories (at the time of writing this lesson), so the final output should be:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"115\n")),(0,r.kt)("h2",{id:"lazy-loading-pagination"},"Lazy-loading pagination"),(0,r.kt)("p",null,"Though page number-based pagination is quite straightforward to automate the pagination process with, and though it is still an extremely common implementation, ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Lazy_loading",target:"_blank",rel:"noopener"},"lazy-loading")," is becoming extremely popular on the modern web, which makes it an important and relevant topic to discuss."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note that on websites with lazy-loading pagination, ",(0,r.kt)("a",{parentName:"p",href:"/academy/api-scraping",target:null,rel:null},"API scraping")," is usually a viable option, and a much better one due to reliability and performance.")),(0,r.kt)("p",null,"Take a moment to look at and scroll through the women's clothing section ",(0,r.kt)("a",{parentName:"p",href:"https://www.aboutyou.com/c/women/clothing-20204",target:"_blank",rel:"noopener"},"on About You's website"),". Notice that the items are loaded as you scroll, and that there are no page numbers. Because of how drastically different this pagination implementation is from the previous one, it also requires a different workflow to scrape."),(0,r.kt)("p",null,"We're going to scrape the brand and price from the first 75 results on the ",(0,r.kt)("strong",{parentName:"p"},"About You")," page linked above. Here's our basic setup:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-marked-tabs"},"<marked-tab header=\"Playwright\" lang=\"javascript\">\nimport { chromium } from 'playwright';\nimport { load } from 'cheerio';\n\n// Create an array where all scraped products will\n// be pushed to\nconst products = [];\n\nconst browser = await chromium.launch({ headless: false });\nconst page = await browser.newPage();\n\nawait page.goto('https://www.aboutyou.com/c/women/clothing-20204');\n\nawait browser.close();\n</marked-tab>\n<marked-tab header=\"Puppeteer\" lang=\"javascript\">\nimport puppeteer from 'puppeteer';\nimport { load } from 'cheerio';\n\n// Create an array where all scraped products will\n// be pushed to\nconst products = [];\n\nconst browser = await puppeteer.launch({ headless: false });\nconst page = await browser.newPage();\n\nawait page.goto('https://www.aboutyou.com/c/women/clothing-20204');\n\nawait browser.close();\n</marked-tab>\n")),(0,r.kt)("h3",{id:"auto-scrolling"},"Auto scrolling"),(0,r.kt)("p",null,"Now, what we'll do is grab the height in pixels of a result item to have somewhat of a reference to how much we should scroll each time, as well as create a variable for keeping track of how many pixels have been scrolled."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// Grab the height of result item in pixels, which will be used to scroll down\nconst itemHeight = await page.$eval('a[data-testid*=\"productTile\"]', (elem) => elem.clientHeight);\n\n// Keep track of how many pixels have been scrolled down\nlet totalScrolled = 0;\n")),(0,r.kt)("p",null,"Then, within a ",(0,r.kt)("inlineCode",{parentName:"p"},"while")," loop that ends once the length of the ",(0,r.kt)("strong",{parentName:"p"},"products")," array has reached 75, we'll run some logic that scrolls down the page and waits 1 second before running again."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-marked-tabs"},'<marked-tab header="Playwright" lang="javascript">\nwhile (products.length < 75) {\n    await page.mouse.wheel(0, itemHeight * 3);\n    totalScrolled += itemHeight * 3;\n    // Allow the products 1 second to load\n    await page.waitForTimeout(1000);\n}\n</marked-tab>\n<marked-tab header="Puppeteer" lang="javascript">\nwhile (products.length < 75) {\n    await page.mouse.wheel({ deltaY: itemHeight * 3 });\n    totalScrolled += itemHeight * 3;\n    // Allow the products 1 second to load\n    await page.waitForTimeout(1000);\n}\n</marked-tab>\n')),(0,r.kt)("p",null,"This will work; however, what if we reach the bottom of the page and there are say, only 55 total products on the page? That would result in an infinite loop. Because of this edge case, we have to keep track of the constantly changing available scroll height on the page."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-marked-tabs"},'<marked-tab header="Playwright" lang="javascript">\nwhile (products.length < 75) {\n    const scrollHeight = await page.evaluate(() => document.body.scrollHeight);\n\n    await page.mouse.wheel(0, itemHeight * 3);\n    totalScrolled += itemHeight * 3;\n    // Allow the products 1 second to load\n    await page.waitForTimeout(1000);\n\n    // Data collection login will go here\n\n    const innerHeight = await page.evaluate(() => window.innerHeight);\n\n    // if the total pixels scrolled is equal to the true available scroll\n    // height of the page, we\'ve reached the end and should stop scraping.\n    // even if we haven\'t reach our goal of 75 products.\n    if (totalScrolled >= scrollHeight - innerHeight) {\n        break;\n    }\n}\n</marked-tab>\n<marked-tab header="Puppeteer" lang="javascript">\nwhile (products.length < 75) {\n    const scrollHeight = await page.evaluate(() => document.body.scrollHeight);\n\n    await page.mouse.wheel({ deltaY: itemHeight * 3 });\n    totalScrolled += itemHeight * 3;\n    // Allow the products 1 second to load\n    await page.waitForTimeout(1000);\n\n    // Data collection login will go here\n\n    const innerHeight = await page.evaluate(() => window.innerHeight);\n\n    // if the total pixels scrolled is equal to the true available scroll\n    // height of the page, we\'ve reached the end and should stop scraping.\n    // even if we haven\'t reach our goal of 75 products.\n    if (totalScrolled >= scrollHeight - innerHeight) {\n        break;\n    }\n}\n</marked-tab>\n')),(0,r.kt)("p",null,"Now, the ",(0,r.kt)("inlineCode",{parentName:"p"},"while")," loop will exit out if we've reached the bottom of the page."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Generally, you'd want to create a utility function that handles this scrolling logic instead of putting all of the code directly into the while loop.")),(0,r.kt)("h3",{id:"collecting-data"},"Collecting data"),(0,r.kt)("p",null,"Within the loop, we can grab hold of the total number of items on the page. To avoid collecting and pushing duplicate items to the ",(0,r.kt)("strong",{parentName:"p"},"products")," array, we can use the ",(0,r.kt)("inlineCode",{parentName:"p"},".slice()")," method to cut out the items we've already scraped."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const $ = load(await page.content());\n\n// Grab the newly loaded items\nconst items = [...$('a[data-testid*=\"productTile\"]')].slice(products.length);\n\nconst newItems = items.map((item) => {\n    const elem = $(item);\n\n    return {\n        brand: elem.find('p[data-testid=\"brandName\"]').text().trim(),\n        price: elem.find('span[data-testid=\"finalPrice\"]').text().trim(),\n    };\n});\n\nproducts.push(...newItems);\n")),(0,r.kt)("h3",{id:"final-lazy-loading-code"},"Final code"),(0,r.kt)("p",null,"With everything completed, this is what we're left with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-marked-tabs"},"<marked-tab header=\"Playwright\" lang=\"javascript\">\nimport { chromium } from 'playwright';\nimport { load } from 'cheerio';\n\nconst products = [];\n\nconst browser = await chromium.launch({ headless: false });\nconst page = await browser.newPage();\n\nawait page.goto('https://www.aboutyou.com/c/women/clothing-20204');\n\n// Grab the height of result item in pixels, which will be used to scroll down\nconst itemHeight = await page.$eval('a[data-testid*=\"productTile\"]', (elem) => elem.clientHeight);\n\n// Keep track of how many pixels have been scrolled down\nlet totalScrolled = 0;\n\nwhile (products.length < 75) {\n    const scrollHeight = await page.evaluate(() => document.body.scrollHeight);\n\n    await page.mouse.wheel(0, itemHeight * 3);\n    totalScrolled += itemHeight * 3;\n    // Allow the products 1 second to load\n    await page.waitForTimeout(1000);\n\n    const $ = load(await page.content());\n\n    // Grab the newly loaded items\n    const items = [...$('a[data-testid*=\"productTile\"]')].slice(products.length);\n\n    const newItems = items.map((item) => {\n        const elem = $(item);\n\n        return {\n            brand: elem.find('p[data-testid=\"brandName\"]').text().trim(),\n            price: elem.find('span[data-testid=\"finalPrice\"]').text().trim(),\n        };\n    });\n\n    products.push(...newItems);\n\n    const innerHeight = await page.evaluate(() => window.innerHeight);\n\n    // if the total pixels scrolled is equal to the true available scroll\n    // height of the page, we've reached the end and should stop scraping.\n    // even if we haven't reach our goal of 75 products.\n    if (totalScrolled >= scrollHeight - innerHeight) {\n        break;\n    }\n}\n\nconsole.log(products.slice(0, 75));\n\nawait browser.close();\n</marked-tab>\n<marked-tab header=\"Puppeteer\" lang=\"javascript\">\nimport puppeteer from 'puppeteer';\nimport { load } from 'cheerio';\n\nconst products = [];\n\nconst browser = await puppeteer.launch({ headless: false });\nconst page = await browser.newPage();\n\nawait page.goto('https://www.aboutyou.com/c/women/clothing-20204');\n\n// Grab the height of result item in pixels, which will be used to scroll down\nconst itemHeight = await page.$eval('a[data-testid*=\"productTile\"]', (elem) => elem.clientHeight);\n\n// Keep track of how many pixels have been scrolled down\nlet totalScrolled = 0;\n\nwhile (products.length < 75) {\n    const scrollHeight = await page.evaluate(() => document.body.scrollHeight);\n\n    await page.mouse.wheel({ deltaY: itemHeight * 3 });\n    totalScrolled += itemHeight * 3;\n    // Allow the products 1 second to load\n    await page.waitForTimeout(1000);\n\n    const $ = load(await page.content());\n\n    // Grab the newly loaded items\n    const items = [...$('a[data-testid*=\"productTile\"]')].slice(products.length);\n\n    const newItems = items.map((item) => {\n        const elem = $(item);\n\n        return {\n            brand: elem.find('p[data-testid=\"brandName\"]').text().trim(),\n            price: elem.find('span[data-testid=\"finalPrice\"]').text().trim(),\n        };\n    });\n\n    products.push(...newItems);\n\n    const innerHeight = await page.evaluate(() => window.innerHeight);\n\n    // if the total pixels scrolled is equal to the true available scroll\n    // height of the page, we've reached the end and should stop scraping.\n    // even if we haven't reach our goal of 75 products.\n    if (totalScrolled >= scrollHeight - innerHeight) {\n        break;\n    }\n}\n\nconsole.log(products.slice(0, 75));\n\nawait browser.close();\n</marked-tab>\n")),(0,r.kt)("h2",{id:"quick-note"},"Quick note"),(0,r.kt)("p",null,"The examples shown in this lesson are not the only ways to paginate through websites. They are here to serve as solid examples, but don't view them as the end-all be-all of scraping paginated websites. The methods you use and algorithms you write might differ to various degrees based on what pages you're scraping and how your specific target website implemented pagination."),(0,r.kt)("h2",{id:"next"},"Next up"),(0,r.kt)("p",null,"We're actively working in expanding this section of the course, so stay tuned!"))}u.isMDXComponent=!0},20425:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/webp;base64,UklGRpYJAABXRUJQVlA4IIoJAADQOACdASpeAkwAPqlOok0mJCMiJHFKiMAVCWNu3V6dox6r8kvazr/+I+/v8v/VnofzbernzDyq/RD0FeYL+qHSN8wv7EerT6Ov8z6gH84/znWwegt5c/7e/C7+5/7ge1vqr3or/JWjNervTlY4AN1/S0NEbycl0OcpgdITZBPz/vyXVZCVGEl7WpTA5ghhZ7La+6kUJ3exDlq3BvpbsmS1KYG0vdqY6tZgXRIrHU/h3zfDpxas6t1QenYoDndDr0qlUxjj345ftIZED1EZwT4HvAL4IHKEyeSvlje5N59qqiljYgSysHh/aw6quuK4xpoS8AwwbF8yyfHalKbeKy+2Axn2X4rp/qC8gtaNAaR0JbmLGoRI66L/4zsz2k0h/EKwT1PGRah9ci6nxelF5sbtdOp8fO/EJUcgDqyD/vaLwp4FIpZtuozksRl466ia3NVr+2gcNeL0qm32edeBiB2+b7zMWk+IgU0coL4KG45JcSXMrM+LOPLmb9f13LVifH7LugY9Q/QW1vHyyfeJx+/oD8H7CqDP7LzWpPp3T/9BWs5KGzKglxnOU9LEfJ9hoHcF24EL9X0TGtarY7YF+iw58uCwiuyDgTTTmlMDpCSAAP70v1U8pPijnkgFEw2tzx7mhVjp1omiX16yR+ZSYer+rLPni4Ina6Wlww40iihth5zP9Zf8oSk8+y6M6YA1+4P3B+4NMh0SLLEQmf4SOnJQ0MjFyblL87MPkd8fwsqpKGfxBTSVajpPP4DOOqBLJ1XiUvaqsT0K/sH1drFOYwnERXyGpMgsqF2C1asxx3lhgTjJzsUTFfqmvwrAfeF8he1z96epdabRPp4ILp9AB2R99Jbrfp9huI2Ff16mccD4fZ5ZCc43Wkwl+EejnJlBaVvuzTXlNQJXcbFVwKBzQYWDVQbuTWYUibFEWlbXoNoNtX4RfDIupAmcU1OJk7RKz16LwFZ1GTZQEM3XzaTEqxhSLDMrDBk1l0aUfwDWMtjm+ZFhHH0SD3bySVhgtlntHYuNLuFr6ONNVEH5oEn2+YRzUqsw97GlJxxZzk6CLeop7YAtEHGraTVcpT8pXFuCXilaAF9HISCtd6mKUlMwmaLqaQW0DN/LdsiBdO/ZkP+r3SyLwyE17R0mj8zZe/NFGI608laXyAceIdWZl9Z1DeONFmtD06PC82G4CV+i0o4Y0ObHCMIzye9HPHTSadJeZ/NHYv3FmvG7QPZzmOswL63nNEel2CfMlesud14UtFQSPGkJqgu1NYWjq5r2o9pc48L82dFi/zb3nuARhMyLfygJeeCIBsGuMG07mLsAlYto1xxebDuaHE8HFFqGMTijRl+6VdGw6RJ3xdpPoiPqYxeN/DAsI9Yr9hSXYmQJPya/RsR+7a6k5ycurxGDuvvwMKnnCJtqYar2vO+2Ht0vdsw6fibobswwPH4rG11KHlCkX0xj3Hce8nXUHA47fNPE/MdChhqZzJjShsIVYg7gAMGYDQ++fVwpYQYSQNMboI2Kz0WtxvwSyUX+etESXtf+x9hhJg1XloLKFCL1Iv4r6x7A+nX0hbe6hvQp8nsbtAAfxqldXgdLpRapYl6bNSMFJTKGNQbD1GKxEMXQkkhccp90PkMZy76Yl/4An3pMwD3hCSY0yGedjVsMkQ8poAdN4VxWLTTyeJwp9xzokPt0/xYZCs+HZzgH/Kj6rjaekY0i578xy4jBm/ND0ty/Qfi7eQfy4p9eDEDLCd/zvIk1VdHkOCbCEXSS+xcPg0A7kR9MEUoyUBgyKoJeXy2p+nebrc4G/SC3S6BFjVpCBUnuDs10NFCtiWgyex8PUc1XdL77nZ3bkrbscVk1GvlQYfHh4hVtY4elj/OaQIIcvfb9wOfm8iy0GGO7k2Hyhk8toprGG6I/Sf6HPdVDg3ENh1g5td8/1pg+EObuGTU5ie97oEz8VoXxjAHoyYPNLPmyMtTpjknZiVR/uQHlv9FoHzyQS/tB3H2PFqN5qbDfvF/Hk+2keqSMDh577oFvq0P1zye9ZGBIBxd9fY7sBC/u7cJ5VTGh8gFMi/zGa1SyLp1JcKdXU3rwTCnso9Hdk2aMsO8DJnIss4KwmRQKHeuMC8IyxKKumPWGxpEDBGkCJw8H1Zoy+TbCsk0sqMe820/ngTOHr1+Ah66glKtaDt7DW4ef8gaDB0SSzkYtkS7Wio6OCv+raFXoIjkjBTpJ+a+fVpBkcBDrqdQL7a7s11kbuM7Ntu4zEFSlSjZdnqftYiv8VXk9N3OYWy8iZQfOVNmTZmPsd8jGVSOjnfSQOQIeuXG6M1vMCDDJouXT3vF9YrQOR3z1jx4R975aXkvwLyQyZ9lrXw+BkIGJQjqA/gKFJa78BobA9QFw6LmSvPFV4GFWVyII1sEzdjg3sCIYvvI0o4ALsjti5pWaC3clU7gsd95bMOj7M20UGCtOcWanRHBsFGF8D/He0QmzWF/AcMv8SXjoLVSWNBVtBnSTyZ3DCzZlC4nUx5fuIKR7KeU1ynDMjZQOPLJYdM9Y3lsk8Nb+jLHwuYBYYNiE2CAB10Kf3vRvpXZJvxxh4KUMs4agpl3HQsu50aB3lKsVRTZAo4BcVYUClvYE/d358X3TxubZDVlD1dbHZ8I/I04CAGodr8zUBH+W7/KHLbGo/e1qrjKNE/aTJWDsK/MHLI9LneLtv/9HtzaktTKMGBSmkZEmcnFZxJUf232vVu4z0D0/ik52ii9tTxE9g/QCUVm2R6+Cm9UY50FSQgvD9Z+j+ZR6lHTi/h/kLxepyipxkjBYK8J5wNkA76rweotrNO1JpSskm9XFcqVA4/hB+4RTl/5o/Vqrdbewb8LJw73/Q4B92HQPn0xfyuTyJfFLJexniwx/A0atRwj3mg5IRug5CvKPzsE8MTG0BfpUPLSgk3QAzUZAhW7HxFU6BDTkIh8sfrdKPV7+EJmw4mIOBo+v0PTzKLSt+0CXQWazj70xJZdyc/f+xQHVptOr3Ei+9pFeXMMi74Mh6TXCiUZTqkvpOjminC806hnMlWtxJLInldyNpyANxftaVADEAUf6UnZUmQG8hrNPvgOHcQXYAA5hJGOYg9psIv7tG/+PhPaUhG/oINuCr3+xVShqodU2f7raAR/SkH9MwIbGOrTP6OkwZ2N+cPsh9uqntuzLlvYR2bQ6M4UnS8h5wKOTtIDWLKcwTVK8e50PN/RLS3w6iee/fsFgwk/vZ6Ah4Fa7SvBd5TrFymvfgB2W9oEPmysvkuKAAAA="}}]);