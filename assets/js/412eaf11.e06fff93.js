"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[6168],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),h=r,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||o;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},48736:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>p,toc:()=>d});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],s={title:"Cookies, headers, and tokens",description:"Learn about how some APIs require certain cookies, headers, and/or tokens to be present in a request in order for data to be received.",sidebar_position:2,slug:"/api-scraping/general-api-scraping/cookies-headers-tokens"},l="Dealing with headers, cookies, and tokens",p={unversionedId:"webscraping/api_scraping/general_api_scraping/cookies_headers_tokens",id:"webscraping/api_scraping/general_api_scraping/cookies_headers_tokens",title:"Cookies, headers, and tokens",description:"Learn about how some APIs require certain cookies, headers, and/or tokens to be present in a request in order for data to be received.",source:"@site/sources/academy/webscraping/api_scraping/general_api_scraping/cookies_headers_tokens.md",sourceDirName:"webscraping/api_scraping/general_api_scraping",slug:"/api-scraping/general-api-scraping/cookies-headers-tokens",permalink:"/academy/api-scraping/general-api-scraping/cookies-headers-tokens",draft:!1,tags:[],version:"current",lastUpdatedBy:"Jind\u0159ich B\xe4r",lastUpdatedAt:1675420633,formattedLastUpdatedAt:"Feb 3, 2023",sidebarPosition:2,frontMatter:{title:"Cookies, headers, and tokens",description:"Learn about how some APIs require certain cookies, headers, and/or tokens to be present in a request in order for data to be received.",sidebar_position:2,slug:"/api-scraping/general-api-scraping/cookies-headers-tokens"},sidebar:"academy",previous:{title:"Locating API endpoints",permalink:"/academy/api-scraping/general-api-scraping/locating-and-learning"},next:{title:"Handling pagination",permalink:"/academy/api-scraping/general-api-scraping/handling-pagination"}},c={},d=[{value:"Cookies",id:"cookies",level:2},{value:"Headers",id:"headers",level:2},{value:"Tokens",id:"tokens",level:2},{value:"Next up",id:"next",level:2}],u={toc:d};function h(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"challenges"},"Dealing with headers, cookies, and tokens"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Learn about how some APIs require certain cookies, headers, and/or tokens to be present in a request in order for data to be received.")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Unfortunately, most APIs will require a valid cookie to be included in the ",(0,o.kt)("inlineCode",{parentName:"p"},"cookie")," field within a request's headers in order to be authorized. Other APIs may require special tokens, or other data that validates the request."),(0,o.kt)("p",null,"Luckily, there are ways to retrieve and set cookies for requests prior to sending them, which will be covered more in-depth within future Scraping Academy modules. The most important things to know at the moment are:"),(0,o.kt)("h2",{id:"cookies"},"Cookies"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"For sites that heavily rely on cookies for user-verification and request authorization, certain generic requests (such as to the website's main page, or to the target page) will return back a (or multiple) ",(0,o.kt)("inlineCode",{parentName:"li"},"set-cookie")," header(s)."),(0,o.kt)("li",{parentName:"ol"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"set-cookie")," response header(s) can be parsed and used as the ",(0,o.kt)("inlineCode",{parentName:"li"},"cookie")," header in the headers of a request. A great package for parsing these values from a response's headers is ",(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/set-cookie-parser",target:"_blank",rel:"noopener"},(0,o.kt)("inlineCode",{parentName:"a"},"set-cookie-parser")),". With this package, cookies can be parsed from headers like so:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const axios = require('axios');\n\n// import the set-cookie-parser module\nconst setCookieParser = require('set-cookie-parser');\n\nconst getCookie = async () => {\n    // make a request to the target site\n    const response = await axios.get('https://www.example.com/');\n\n    // parse the cookies from the response\n    const cookies = setCookieParser.parse(response);\n\n    // format the parsed data into a usable string\n    const cookieString = cookies.map(({ name, value }) => `${name}=${value};`).join(' ');\n\n    // log the final cookie string to be used in a 'cookie' header\n    console.log(cookieString);\n};\n\ngetCookie();\n")),(0,o.kt)("h2",{id:"headers"},"Headers"),(0,o.kt)("p",null,'Other APIs may not require a valid cookie header, but instead will require certain headers to be attached to the request which are typically attached when a user makes a "real" request from a browser. The most commonly required headers are:'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"User-Agent")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Referer")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Origin")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Host"))),(0,o.kt)("p",null,"Headers required by the target API can be configured manually in a manner such as this, and attached to every single request the scraper sends:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const HEADERS = {\n    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 YaBrowser/22.1.0.2500 Yowser/2.5 Safari/537.36',\n    Referer: 'https://soundcloud.com',\n    ...\n}\n")),(0,o.kt)("p",null,"However, a much better option is to use either a custom implementation of generating random headers for each request, or to use a package such as ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/got-scraping",target:"_blank",rel:"noopener"},(0,o.kt)("inlineCode",{parentName:"a"},"got-scraping"))," to automatically do this."),(0,o.kt)("p",null,"With ",(0,o.kt)("inlineCode",{parentName:"p"},"got-scraping"),", generating request-specific headers can be done right within a request with ",(0,o.kt)("inlineCode",{parentName:"p"},"headerGeneratorOptions"),". Specific headers can also be set with the ",(0,o.kt)("inlineCode",{parentName:"p"},"headers")," option:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const response = await gotScraping({\n    url: 'https://example.com',\n    headerGeneratorOptions: {\n        browsers: [\n            {\n                name: 'chrome',\n                minVersion: 87,\n                maxVersion: 89\n            }\n        ],\n        devices: ['desktop'],\n        locales: ['de-DE', 'en-US'],\n        operatingSystems: ['windows', 'linux'],\n    },\n    headers: {\n        'some-header': 'Hello, Academy!'\n    }\n})\n")),(0,o.kt)("h2",{id:"tokens"},"Tokens"),(0,o.kt)("p",null,"For our SoundCloud example, testing the endpoint from the previous section in a tool like ",(0,o.kt)("a",{parentName:"p",href:"/academy/tools/postman",target:null,rel:null},"Postman")," works perfectly, and returns the data we want; however, when the ",(0,o.kt)("inlineCode",{parentName:"p"},"client_id")," parameter is removed, we receive a ",(0,o.kt)("strong",{parentName:"p"},"401 Unauthorized")," error. Luckily, the Client ID is the same for every user, which means that it is not tied to a session or an IP address (this is based on our own observations and tests). The big downfall is that the token being used by SoundCloud changes every few weeks, so it shouldn't be hardcoded. This case is actually quite common, and is not only seen with SoundCloud."),(0,o.kt)("p",null,"Ideally, this ",(0,o.kt)("inlineCode",{parentName:"p"},"client_id")," should be scraped dynamically, especially since it changes frequently, but unfortunately, the token cannot be found anywhere on SoundCloud's pages. We already know that it's available within the parameters of certain requests though, and luckily, ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/puppeteer/puppeteer",target:"_blank",rel:"noopener"},"Puppeteer")," offers a simple way to analyze each response when on a page. It's a bit like using browser DevTools, which you are already familiar with by now, but programmatically instead."),(0,o.kt)("p",null,"Here is a way you could dynamically scrape the ",(0,o.kt)("inlineCode",{parentName:"p"},"client_id")," using Puppeteer:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// import the puppeteer module\nconst puppeteer = require('puppeteer');\n\nconst scrapeClientId = async () => {\n    const browser = await puppeteer.launch({ headless: false });\n    const page = await browser.newPage();\n\n    // initialize a variable that will eventually hold the client_id\n    let clientId = null;\n\n    // handle each response\n    page.on('response', async (res) => {\n        // try to grab the 'client_id' parameter from each URL\n        const id = new URL(res._url).searchParams.get('client_id') ?? null;\n\n        // if the parameter exists, set our clientId variable to the newly parsed value\n        if (id) clientId = id;\n    });\n\n    // visit the page\n    await page.goto('https://soundcloud.com/tiesto/tracks');\n\n    // wait for a selector that ensures the page has time to load and make requests to its API\n    await page.waitForSelector('.sc-classic');\n\n    await browser.close();\n    console.log(clientId); // log the retrieved client_id\n};\n\nscrapeClientId();\n")),(0,o.kt)("h2",{id:"next"},"Next up"),(0,o.kt)("p",null,"Keep the code above in mind, because we'll be using it in the ",(0,o.kt)("a",{parentName:"p",href:"/academy/api-scraping/general-api-scraping/handling-pagination",target:null,rel:null},"next lesson")," when paginating through results from SoundCloud's API."))}h.isMDXComponent=!0}}]);