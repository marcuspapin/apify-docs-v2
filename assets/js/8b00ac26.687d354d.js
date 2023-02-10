"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[8979],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=l(n),d=r,g=h["".concat(p,".").concat(d)]||h[d]||c[d]||o;return n?a.createElement(g,i(i({ref:t},u),{},{components:n})):a.createElement(g,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},91971:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],s={title:"Introspection",description:"Understand what introspection is, and how it can help you understand a GraphQL API to take advantage the features it has to offer before writing any code.",sidebar_position:2,slug:"/api-scraping/graphql-scraping/introspection"},p="Introspection",l={unversionedId:"webscraping/api_scraping/graphql_scraping/introspection",id:"webscraping/api_scraping/graphql_scraping/introspection",title:"Introspection",description:"Understand what introspection is, and how it can help you understand a GraphQL API to take advantage the features it has to offer before writing any code.",source:"@site/sources/academy/webscraping/api_scraping/graphql_scraping/introspection.md",sourceDirName:"webscraping/api_scraping/graphql_scraping",slug:"/api-scraping/graphql-scraping/introspection",permalink:"/academy/api-scraping/graphql-scraping/introspection",draft:!1,editUrl:"https://github.com/apify/apify-docs-v2/edit/master/sources/academy/webscraping/api_scraping/graphql_scraping/introspection.md",tags:[],version:"current",lastUpdatedBy:"Jind\u0159ich B\xe4r",lastUpdatedAt:1676040579,formattedLastUpdatedAt:"Feb 10, 2023",sidebarPosition:2,frontMatter:{title:"Introspection",description:"Understand what introspection is, and how it can help you understand a GraphQL API to take advantage the features it has to offer before writing any code.",sidebar_position:2,slug:"/api-scraping/graphql-scraping/introspection"},sidebar:"academy",previous:{title:"Modifying variables",permalink:"/academy/api-scraping/graphql-scraping/modifying-variables"},next:{title:"Custom queries",permalink:"/academy/api-scraping/graphql-scraping/custom-queries"}},u={},c=[{value:"Making the query",id:"making-the-query",level:2},{value:"Understanding the response",id:"understanding-the-response",level:2},{value:"Building a query",id:"building-a-query",level:2},{value:"Sending the query",id:"sending-the-query",level:2},{value:"Introspection disabled?",id:"introspection-disabled",level:2},{value:"Next up",id:"next",level:2}],h={toc:c};function d(e){var t=e.components,s=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"introspection"},"Introspection"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Understand what introspection is, and how it can help you understand a GraphQL API to take advantage the features it has to offer before writing any code.")),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://graphql.org/learn/introspection/",target:"_blank",rel:"noopener"},"Introspection")," is when you make a query to the target GraphQL API requesting information about its schema. When done properly, this can provide a whole lot of information about the API and the different ",(0,o.kt)("strong",{parentName:"p"},"queries")," and ",(0,o.kt)("strong",{parentName:"p"},"mutations")," it supports."),(0,o.kt)("p",null,"Just like when working with regular RESTful APIs in the ",(0,o.kt)("a",{parentName:"p",href:"/academy/api-scraping/general-api-scraping/locating-and-learning",target:null,rel:null},(0,o.kt)("strong",{parentName:"a"},"General API scraping"))," section, it's important to learn a bit about the different available features of the GraphQL API (or at least of the the query/mutation) you are scraping before actually writing any code."),(0,o.kt)("p",null,"Not only does becoming comfortable with and understanding the ins and outs of using the API make the development process easier, but it can also sometimes expose features which will return data you'd otherwise be scraping from a different location."),(0,o.kt)("h2",{id:"making-the-query"},"Making the query"),(0,o.kt)("p",null,"In order to perform introspection on our ",(0,o.kt)("a",{parentName:"p",href:"https://cheddar.com",target:"_blank",rel:"noopener"},"target website"),", we just need to make a request to their GraphQL API with this introspection query using ",(0,o.kt)("a",{parentName:"p",href:"/academy/tools/insomnia",target:null,rel:null},"Insomnia")," or another HTTP client that supports GraphQL:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"To make a GraphQL query in Insomnia, make sure you've set the HTTP method to ",(0,o.kt)("strong",{parentName:"p"},"POST")," and the request body type to ",(0,o.kt)("strong",{parentName:"p"},"GraphQL Query"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"query {\n  __schema {\n    queryType {\n      name\n    }\n    mutationType {\n      name\n    }\n    subscriptionType {\n      name\n    }\n    types {\n      ...FullType\n    }\n    directives {\n      name\n      description\n      locations\n      args {\n        ...InputValue\n      }\n    }\n  }\n}\nfragment FullType on __Type {\n  kind\n  name\n  description\n  fields(includeDeprecated: true) {\n    name\n    description\n    args {\n      ...InputValue\n    }\n    type {\n      ...TypeRef\n    }\n    isDeprecated\n    deprecationReason\n  }\n  inputFields {\n    ...InputValue\n  }\n  interfaces {\n    ...TypeRef\n  }\n  enumValues(includeDeprecated: true) {\n    name\n    description\n    isDeprecated\n    deprecationReason\n  }\n  possibleTypes {\n    ...TypeRef\n  }\n}\nfragment InputValue on __InputValue {\n  name\n  description\n  type {\n    ...TypeRef\n  }\n  defaultValue\n}\nfragment TypeRef on __Type {\n  kind\n  name\n  ofType {\n    kind\n    name\n    ofType {\n      kind\n      name\n      ofType {\n        kind\n        name\n        ofType {\n          kind\n          name\n          ofType {\n            kind\n            name\n            ofType {\n              kind\n              name\n              ofType {\n                kind\n                name\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n")),(0,o.kt)("p",null,"Here's what we got back from the request:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"GraphQL introspection request response",src:n(42692).Z,width:"1249",height:"894"})),(0,o.kt)("p",null,"The response body of our introspection query contains a whole lot of useful information about the API, such as the data types defined within it, as well the queries and mutations available for retrieving/changing the data."),(0,o.kt)("h2",{id:"understanding-the-response"},"Understanding the response"),(0,o.kt)("p",null,"An introspection query's response body size will vary depending on how big the target API is. In our case, what we got back is a 27 thousand line JSON response \ud83e\udd2f If you just thought to yourself, \"Wow, that's a whole lot to sift through! I don't want to look through that!\", you are absolutely right. Luckily for us, there is a fantastic online tool called ",(0,o.kt)("a",{parentName:"p",href:"https://apis.guru/graphql-voyager/",target:"_blank",rel:"noopener"},"GraphQL Voyager")," (no install required) which can take this massive JSON response and turn it into a digestable visualization of the API."),(0,o.kt)("p",null,"Let's copy the response to our clipboard by clicking inside of the response body and pressing ",(0,o.kt)("strong",{parentName:"p"},"CMD")," + ",(0,o.kt)("strong",{parentName:"p"},"A"),", then subsequently ",(0,o.kt)("strong",{parentName:"p"},"CMD")," + ",(0,o.kt)("strong",{parentName:"p"},"C"),". Now, we'll head over to ",(0,o.kt)("a",{parentName:"p",href:"https://apis.guru/graphql-voyager/",target:"_blank",rel:"noopener"},"GraphQL Voyager")," and click on ",(0,o.kt)("strong",{parentName:"p"},"Change Schema"),". In the modal, we'll click on the ",(0,o.kt)("strong",{parentName:"p"},"Introspection")," tab and paste our data into the text area."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Pasting the introspection",src:n(71995).Z,width:"841",height:"440"})),(0,o.kt)("p",null,"Finally, we can click on ",(0,o.kt)("strong",{parentName:"p"},"Display")," and immediately be shown a visualization of the API:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"GraphQL Voyager API visualization",src:n(8751).Z,width:"1911",height:"1019"})),(0,o.kt)("p",null,"Now that we have this visualization to work off of, it will be much easier to build a query of our own."),(0,o.kt)("h2",{id:"building-a-query"},"Building a query"),(0,o.kt)("p",null,"In future lessons, we'll be building more complex queries using ",(0,o.kt)("strong",{parentName:"p"},"dynamic variables")," and advanced features such as ",(0,o.kt)("strong",{parentName:"p"},"fragments"),"; however, for now let's just  get our feet wet by using the data we have from GraphQL Voyager to build a simple query."),(0,o.kt)("p",null,"Right now, our goal is to fetch the 1000 most recent articles on ",(0,o.kt)("a",{parentName:"p",href:"https://cheddar.com",target:"_blank",rel:"noopener"},"Cheddar"),". From each article, we'd like to fetch the ",(0,o.kt)("strong",{parentName:"p"},"title")," and the ",(0,o.kt)("strong",{parentName:"p"},"publish date"),". After just a bit of digging through the schema, we've come across the ",(0,o.kt)("strong",{parentName:"p"},"media")," field within the ",(0,o.kt)("strong",{parentName:"p"},"organization")," type, which has both ",(0,o.kt)("strong",{parentName:"p"},"title")," and ",(0,o.kt)("strong",{parentName:"p"},"public_at")," fields - seems to check out!"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"The media field pointing to datatype slugable",src:n(10599).Z,width:"1217",height:"770"})),(0,o.kt)("p",null,"Cool. So now we know we need to access ",(0,o.kt)("strong",{parentName:"p"},"media")," through the ",(0,o.kt)("strong",{parentName:"p"},"organization")," query. The ",(0,o.kt)("strong",{parentName:"p"},"media")," field also takes in some arguments, of which we will be using the ",(0,o.kt)("strong",{parentName:"p"},"first")," parameter set to ",(0,o.kt)("strong",{parentName:"p"},"1000"),". Let's start writing our query in Insomnia!"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Receiving a suggestion for a field titled edges",src:n(34018).Z,width:"676",height:"360"})),(0,o.kt)("p",null,"While writing our query, we've hit a slight roadblock - the ",(0,o.kt)("strong",{parentName:"p"},"media")," type doesn't seem to be accepting a ",(0,o.kt)("strong",{parentName:"p"},"title")," field; however, we are being suggested an ",(0,o.kt)("strong",{parentName:"p"},"edges")," field. This signifies that Cheddar is using ",(0,o.kt)("a",{parentName:"p",href:"https://relay.dev/graphql/connections.htm#relay-style-cursor-pagination",target:"_blank",rel:"noopener"},"cursor-based relay pagination"),", and that what is returned from media is actually a ",(0,o.kt)("strong",{parentName:"p"},"Connection")," type with multiple properties. The ",(0,o.kt)("strong",{parentName:"p"},"edges")," property contains the list of results we're after, and each result lies within a ",(0,o.kt)("strong",{parentName:"p"},"Node")," type accessible within ",(0,o.kt)("strong",{parentName:"p"},"edges")," as ",(0,o.kt)("strong",{parentName:"p"},"node"),". With this knowledge, we can finish writing our query:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"query {\n    organization {\n        media(first: 1000) {\n            edges {\n                node {\n                    title\n                    public_at\n                }\n            }\n        }\n    }\n}\n")),(0,o.kt)("h2",{id:"sending-the-query"},"Sending the query"),(0,o.kt)("p",null,"Let's send it!"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Unauthorized",src:n(98361).Z,width:"2166",height:"706"})),(0,o.kt)("p",null,"Oh, okay. So that didn't work. But ",(0,o.kt)("strong",{parentName:"p"},"why"),"?"),(0,o.kt)("p",null,"Rest assured, nothing is wrong with our query. We are most likely just missing an authorization token/parameter. Let's check back on the Cheddar website within our browser to see what types of headers are being sent with the requests there:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Request headers back on the Cheddar website",src:n(88162).Z,width:"477",height:"450"})),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Authorization")," and ",(0,o.kt)("strong",{parentName:"p"},"X-App-Token")," headers seem to be our culprits. Of course these values are dynamic, but for testing purposes we can copy them right from the ",(0,o.kt)("strong",{parentName:"p"},"Network")," tab and use them for our request in Insomnia."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Successful request",src:n(88675).Z,width:"2578",height:"1284"})),(0,o.kt)("p",null,"Cool, it worked! Now we know that if we want to scrape this API, we'll likely have to scrape these authorization headers as well in order to not get blocked."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"For more information about cookies, headers, and tokens, refer back to ",(0,o.kt)("a",{parentName:"p",href:"/academy/api-scraping/general-api-scraping/cookies-headers-tokens",target:null,rel:null},"this lesson")," from the previous section of the ",(0,o.kt)("strong",{parentName:"p"},"API scraping")," course.")),(0,o.kt)("h2",{id:"introspection-disabled"},"Introspection disabled?"),(0,o.kt)("p",null,"If the target website is smart, they will have introspection disabled. One of the most widely used GraphQL development tools is ",(0,o.kt)("a",{parentName:"p",href:"https://www.apollographql.com/docs/apollo-server/",target:"_blank",rel:"noopener"},"ApolloServer"),", which automatically disables introspection, so these cases are actually quite common."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Introspection disabled",src:n(55972).Z,width:"1114",height:"566"})),(0,o.kt)("p",null,"In these cases, it is still possible to get some information about the API when using ",(0,o.kt)("a",{parentName:"p",href:"/academy/tools/insomnia",target:null,rel:null},"Insomnia")," or ",(0,o.kt)("a",{parentName:"p",href:"/academy/tools/postman",target:null,rel:null},"Postman"),", due to the autocomplete that they provide. If we remember from the ",(0,o.kt)("a",{parentName:"p",href:"#building-a-query",target:null,rel:null},"Building a query")," section of this lesson, we were able to receive autocomplete suggestions when we entered a non-existent field into the query. Though this is not as great as seeing an entire visualization of the API in GraphQL Voyager, it can still be quite helpful."),(0,o.kt)("h2",{id:"next"},"Next up"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/academy/api-scraping/graphql-scraping/custom-queries",target:null,rel:null},"Next lesson"),"'s code-along project will walk you through how to  construct a custom GraphQL query for scraping purposes, how to accept input into it, and how to retrieve and output the data."))}d.isMDXComponent=!0},88162:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/cheddar-headers-0842b3f8b61b3e722ec5ad7b59b8e3e1.webp"},34018:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/edges-suggested-65c22c50bf4e1682ec511f97e0790009.png"},55972:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/introspection-disabled-0b524331e3d8505a3e4c2cc6cdc3e39e.png"},42692:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/introspection-e8f85847cc1266c5c5bfdd354e91c794.webp"},10599:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/media-field-e0ef277ebd421252c4e5e77651a062d3.webp"},71995:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/pasting-introspection-78e8ac32a797fcfd7f17f7f1685bbceb.png"},88675:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/successful-request-81d1fa87c1e58b7456a02376d395e38f.png"},98361:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/unauthorized-e5a911a6290b5515598de42cfb2f8b8a.png"},8751:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/voyager-interface-2118f0bce987637f89c2b9fe2142d13e.webp"}}]);