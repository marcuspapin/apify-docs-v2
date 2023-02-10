"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[3165],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=l(n),d=r,g=h["".concat(p,".").concat(d)]||h[d]||c[d]||o;return n?a.createElement(g,i(i({ref:t},u),{},{components:n})):a.createElement(g,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},17903:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],s={title:"Custom queries",description:"Learn how to write custom GraphQL queries, how to pass input values into GraphQL requests as variables, and how to retrieve and output the data from a scraper.",sidebar_position:3,slug:"/api-scraping/graphql-scraping/custom-queries"},p="Custom queries",l={unversionedId:"webscraping/api_scraping/graphql_scraping/custom_queries",id:"webscraping/api_scraping/graphql_scraping/custom_queries",title:"Custom queries",description:"Learn how to write custom GraphQL queries, how to pass input values into GraphQL requests as variables, and how to retrieve and output the data from a scraper.",source:"@site/sources/academy/webscraping/api_scraping/graphql_scraping/custom_queries.md",sourceDirName:"webscraping/api_scraping/graphql_scraping",slug:"/api-scraping/graphql-scraping/custom-queries",permalink:"/academy/api-scraping/graphql-scraping/custom-queries",draft:!1,editUrl:"https://github.com/apify/apify-docs-v2/edit/master/sources/academy/webscraping/api_scraping/graphql_scraping/custom_queries.md",tags:[],version:"current",lastUpdatedBy:"Jind\u0159ich B\xe4r",lastUpdatedAt:1676040579,formattedLastUpdatedAt:"Feb 10, 2023",sidebarPosition:3,frontMatter:{title:"Custom queries",description:"Learn how to write custom GraphQL queries, how to pass input values into GraphQL requests as variables, and how to retrieve and output the data from a scraper.",sidebar_position:3,slug:"/api-scraping/graphql-scraping/custom-queries"},sidebar:"academy",previous:{title:"Introspection",permalink:"/academy/api-scraping/graphql-scraping/introspection"},next:{title:"Anti-scraping protections",permalink:"/academy/anti-scraping"}},u={},c=[{value:"Project setup",id:"project-setup",level:2},{value:"Preparations",id:"preparations",level:2},{value:"Building the query",id:"building-the-query",level:2},{value:"Making the request",id:"making-the-request",level:2},{value:"Final code",id:"final-code",level:2},{value:"Wrap up",id:"wrap-up",level:2}],h={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"custom-queries"},"Custom queries"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Learn how to write custom GraphQL queries, how to pass input values into GraphQL requests as variables, and how to retrieve and output the data from a scraper.")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Sometimes, the queries found in the ",(0,o.kt)("strong",{parentName:"p"},"Network")," tab aren't good enough for your use case. Or, perhaps they're even returning more data than what you're after (which can slow down the queries depending on how much data they're giving back). In these situations, it's a good idea to dig a bit deeper into the API and start writing your own custom use-case specific queries."),(0,o.kt)("p",null,"In this lesson, we're building a scraper which expects a single number (in ",(0,o.kt)("strong",{parentName:"p"},"hours"),") and a ",(0,o.kt)("strong",{parentName:"p"},"query")," string as its input. As output, it should provide data about the first 1000 Cheddar posts published within the last ",(0,o.kt)("strong",{parentName:"p"},"n")," hours which match the provided query. Each ",(0,o.kt)("strong",{parentName:"p"},"post")," object should contain the ",(0,o.kt)("strong",{parentName:"p"},"title"),", the ",(0,o.kt)("strong",{parentName:"p"},"publishDate")," and the ",(0,o.kt)("strong",{parentName:"p"},"videoUrl")," of the post."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "title": "FDA Authorizes 1st Breath Test for COVID-19 Infection",\n        "publishDate": "2022-04-15T11:58:44-04:00",\n        "videoUrl": "https://vod.chdrstatic.com/source%3Dbackend%2Cexpire%3D1651782479%2Cpath%3D%2Ftranscode%2Fb68f8133-3aa9-4c96-ac26-047452bbc9ce%2Ctoken%3D581fd52bb7f634834edca5c201619c014cd21eb20448cf89525bf101ca8a6f64/transcode/b68f8133-3aa9-4c96-ac26-047452bbc9ce/b68f8133-3aa9-4c96-ac26-047452bbc9ce.mp4"\n    }\n    {\n        "...": "..."\n    }\n]\n')),(0,o.kt)("h2",{id:"project-setup"},"Project setup"),(0,o.kt)("p",null,"To make sure we're all on the same page, we're going to set up the project together by first creating a folder named ",(0,o.kt)("strong",{parentName:"p"},"graphql-scraper"),". Once navigated to the folder within your terminal, run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npm init -y && npm install graphql-tag puppeteer got-scraping\n")),(0,o.kt)("p",null,"This command will first initialize the project with NPM, then will install the ",(0,o.kt)("inlineCode",{parentName:"p"},"puppeteer"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"graphql-tag"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"got-scraping")," packages, which we will need in this lesson."),(0,o.kt)("p",null,"Finally, create a file called ",(0,o.kt)("strong",{parentName:"p"},"index.js"),". This is the file we will be working in for the rest of the lesson."),(0,o.kt)("h2",{id:"preparations"},"Preparations"),(0,o.kt)("p",null,'If we remember from the last lesson, we need to pass a valid "app token" within the ',(0,o.kt)("strong",{parentName:"p"},"X-App-Token")," header of every single request we make, or else we will be blocked. When testing queries, we just copied this value straight from the ",(0,o.kt)("strong",{parentName:"p"},"Network")," tab; however, since this is a dynamic value, we should farm it."),(0,o.kt)("p",null,"Since we know requests with this header are sent right when the front page is loaded, it can be farmed by simply visiting thee page and intercepting requests in Puppeteer like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// scrapeAppToken.js\nimport puppeteer from 'puppeteer';\n\nconst scrapeAppToken = async () => {\n    const browser = await puppeteer.launch();\n    const page = await browser.newPage();\n\n    let appToken = null;\n\n    page.on('response', async (res) => {\n        // grab the token from the request headers\n        const token = res.request().headers()?.['x-app-token'];\n\n        // if there is a token, grab it and close the browser\n        if (token) {\n            appToken = token;\n            await browser.close();\n        }\n    });\n\n    await page.goto('https://cheddar.com/');\n\n    await page.waitForNetworkIdle();\n\n    // otherwise, just close the browser after networkidle\n    // has been fired\n    await browser.close();\n\n    // return the apptoken (or null)\n    return appToken;\n};\n\nexport default scrapeAppToken;\n")),(0,o.kt)("p",null,"With this code, we're doing the same exact thing as we did in the previous lesson to grab this header value, except programmatically."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"To learn more about this method of scraping headers and tokens, refer to the ",(0,o.kt)("a",{parentName:"p",href:"/academy/api-scraping/general-api-scraping/cookies-headers-tokens",target:null,rel:null},"Cookies, headers, and tokens")," lesson of the ",(0,o.kt)("strong",{parentName:"p"},"General API scraping")," section.")),(0,o.kt)("p",null,"Now, we can import this function into our ",(0,o.kt)("strong",{parentName:"p"},"index.js")," and use it to create a ",(0,o.kt)("inlineCode",{parentName:"p"},"token")," variable which will be passed as our ",(0,o.kt)("strong",{parentName:"p"},"X-App-Token")," header when scraping:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// index.js\n\n// import the function\nimport scrapeAppToken from './scrapeAppToken.mjs';\n\nconst token = await scrapeAppToken();\n")),(0,o.kt)("h2",{id:"building-the-query"},"Building the query"),(0,o.kt)("p",null,"First, we'll write a skeleton query where we define which variables we're expecting (from the user of the scraper):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"query SearchQuery($query: String!, $max_age: Int!) {\n    # query will go here\n}\n")),(0,o.kt)("p",null,"Also in the previous lesson, we learned that the ",(0,o.kt)("strong",{parentName:"p"},"media")," type is dependent on the ",(0,o.kt)("strong",{parentName:"p"},"organization")," type. This means to get any ",(0,o.kt)("strong",{parentName:"p"},"media"),", it must be wrapped in the ",(0,o.kt)("strong",{parentName:"p"},"organization")," query:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"query SearchQuery($query: String!, $max_age: Int!) {\n  organization {\n    media(query: $query, max_age: $max_age , first: 1000) {\n        \n    }\n  }\n}\n")),(0,o.kt)("p",null,"Finally, since Cheddar is using ",(0,o.kt)("a",{parentName:"p",href:"https://relay.dev/graphql/connections.htm#relay-style-cursor-pagination",target:"_blank",rel:"noopener"},"cursor-based relay pagination")," for their API, we must access the data through the ",(0,o.kt)("strong",{parentName:"p"},"edges")," property, where each ",(0,o.kt)("strong",{parentName:"p"},"node")," is a result item:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"query SearchQuery($query: String!) {\n  organization {\n    media(query: $query, max_age: $max_age , first: 1000) {\n      edges {\n        node {\n            # here we will define the fields we want\n        }\n      }\n    }\n  }\n}\n")),(0,o.kt)("p",null,"The next step is to just fill out the fields we'd like back, and we've got our final query!"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"query SearchQuery($query: String!) {\n  organization {\n    media(query: $query, max_age: $max_age , first: 1000) {\n      edges {\n        node {\n          title # title\n          public_at # this will be publishDate\n          hero_video {\n            video_urls {\n              url # the first URL from these results will be videoUrl\n            }\n          }\n        }\n      }\n    }\n  }\n}\n")),(0,o.kt)("h2",{id:"making-the-request"},"Making the request"),(0,o.kt)("p",null,"Back in our code, we can import ",(0,o.kt)("inlineCode",{parentName:"p"},"gql")," from ",(0,o.kt)("inlineCode",{parentName:"p"},"graphql-tag")," and use it to store our query:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// index.js\nimport { gql, } from 'graphql-tag';\nimport scrapeAppToken from './scrapeAppToken.mjs';\n\nconst token = await scrapeAppToken();\n\nconst GET_LATEST = gql`\n    query SearchQuery($query: String!, $max_age: Int!) {\n        organization {\n            media(query: $query, max_age: $max_age, first: 1000) {\n                edges {\n                    node {\n                        title\n                        public_at\n                        hero_video {\n                            video_urls {\n                                url\n                            }\n                        }\n                        thumbnail_url\n                    }\n                }\n            }\n        }\n    }\n`;\n")),(0,o.kt)("p",null,"Alternatively, if you don't want to write your GraphQL queries right within your Javascript code, you can write them in files using the ",(0,o.kt)("strong",{parentName:"p"},".graphql")," format, then read them from the filesystem or import them."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"In order to receive nice GraphQL syntax highlighting in these template literals, download the ",(0,o.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=GraphQL.vscode-graphql",target:"_blank",rel:"noopener"},"GraphQL VSCode extension"))),(0,o.kt)("p",null,"Then, we'll take our input and use it to create a ",(0,o.kt)("strong",{parentName:"p"},"variables")," object which will be used for the request:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// find posts from the last 48 hours that include the keyword \"stocks\".\n// since we don't have any real input, we'll simulate some input\nconst testInput = { hours: 48, query: 'stocks' };\n\n// the API takes max_input in the format of minutes * 60\n// to calculate this value, we do hours * 60^2\nconst variables = { query: testInput.query, max_age: Math.round(testInput.hours) * 60 ** 2 };\n")),(0,o.kt)("p",null,"The final step is to take the query and variable and marry them within a ",(0,o.kt)("inlineCode",{parentName:"p"},"gotScraping()")," call, which will return the API response:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const data = await gotScraping('https://api.cheddar.com/graphql', {\n    // we are expecting a JSON response back\n    responseType: 'json',\n    // we must use a post request\n    method: 'POST',\n    // this is where we pass in our token\n    headers: { 'X-App-Token': token, 'Content-Type': 'application/json' },\n    // here is our query with our variables\n    body: JSON.stringify({ query: GET_LATEST.loc.source.body, variables }),\n});\n")),(0,o.kt)("p",null,"The final step after making the query is to format the data to match the expected output schema."),(0,o.kt)("h2",{id:"final-code"},"Final code"),(0,o.kt)("p",null,"Here's what our final project looks like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// index.js\nimport { gql, } from 'graphql-tag';\nimport scrapeAppToken from './scrapeAppToken.mjs';\nimport { gotScraping } from 'got-scraping';\n\n// Scrape the token\nconst token = await scrapeAppToken();\n\n// Define our query\nconst GET_LATEST = gql`\n    query SearchQuery($query: String!, $max_age: Int!) {\n        organization {\n            media(query: $query, max_age: $max_age, first: 1000) {\n                edges {\n                    node {\n                        title\n                        public_at\n                        hero_video {\n                            video_urls {\n                                url\n                            }\n                        }\n                        thumbnail_url\n                    }\n                }\n            }\n        }\n    }\n`;\n\n// Grab our input\nconst testInput = { hours: 48, query: 'stocks' };\n\n// Calculate and prepare our variables\nconst variables = { query: testInput.query, max_age: Math.round(testInput.hours) * 60 ** 2 };\n\n// Make the request \nconst { body: { data: { organization } } } = await gotScraping('https://api.cheddar.com/graphql', {\n    responseType: 'json',\n    method: 'POST',\n    headers: { 'X-App-Token': token, 'Content-Type': 'application/json' },\n    body: JSON.stringify({ query: GET_LATEST.loc.source.body, variables }),\n});\n\n// Format the data\nconst result = organization.media.edges.map(({ node }) => ({\n    title: node?.title,\n    publishDate: node?.public_at,\n    videoUrl: node?.hero_video ? node.hero_video.video_urls[0].url : null,\n}));\n\n// Log the result\nconsole.log(result);\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// scrapeAppToken.js\nimport puppeteer from 'puppeteer';\n\nconst scrapeAppToken = async () => {\n    const browser = await puppeteer.launch();\n    const page = await browser.newPage();\n\n    let appToken = null;\n\n    page.on('response', async (res) => {\n        const token = res.request().headers()?.['x-app-token'];\n\n        if (token) {\n            appToken = token;\n            await browser.close();\n        }\n    });\n\n    await page.goto('https://cheddar.com/');\n\n    await page.waitForNetworkIdle();\n\n    await browser.close();\n\n    return appToken;\n};\n\nexport default scrapeAppToken;\n")),(0,o.kt)("h2",{id:"wrap-up"},"Wrap up"),(0,o.kt)("p",null,"If you've made it this far, that means that you've conquered the king of API scraping - GraphQL, and that you're ready to take on writing scrapers for the majority of websites out there. Nice work!"),(0,o.kt)("p",null,"Take a moment to review the skills you learned in this section:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Modifying the variables of copied GraphQL queries"),(0,o.kt)("li",{parentName:"ol"},"Introspecting a GraphQL API"),(0,o.kt)("li",{parentName:"ol"},"Visualizing and understanding a GraphQL API introspection"),(0,o.kt)("li",{parentName:"ol"},"Writing custom queries"),(0,o.kt)("li",{parentName:"ol"},"Dealing with cursor-based relay pagination"),(0,o.kt)("li",{parentName:"ol"},"Writing a GraphQL scraper with custom queries")))}d.isMDXComponent=!0}}]);