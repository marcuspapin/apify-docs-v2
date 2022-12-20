"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[3647],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),h=o,m=d["".concat(i,".").concat(h)]||d[h]||c[h]||r;return n?a.createElement(m,s(s({ref:t},u),{},{components:n})):a.createElement(m,s({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=h;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[d]="string"==typeof e?e:o,s[1]=l;for(var p=2;p<r;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},19641:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),s=["components"],l={title:"Use Apify from PHP",description:"Learn how to access Apify's REST API endpoints from your PHP projects using the guzzle package. Follow a tutorial to run an actor and download its data.",sidebar_position:3.95,slug:"/tutorials/use-apify-from-php"},i="How to use Apify from PHP",p={unversionedId:"tutorials/use_apify_from_php",id:"tutorials/use_apify_from_php",title:"Use Apify from PHP",description:"Learn how to access Apify's REST API endpoints from your PHP projects using the guzzle package. Follow a tutorial to run an actor and download its data.",source:"@site/sources/platform/tutorials/use_apify_from_php.md",sourceDirName:"tutorials",slug:"/tutorials/use-apify-from-php",permalink:"/platform/tutorials/use-apify-from-php",draft:!1,tags:[],version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1671540496,formattedLastUpdatedAt:"Dec 20, 2022",sidebarPosition:3.95,frontMatter:{title:"Use Apify from PHP",description:"Learn how to access Apify's REST API endpoints from your PHP projects using the guzzle package. Follow a tutorial to run an actor and download its data.",sidebar_position:3.95,slug:"/tutorials/use-apify-from-php"},sidebar:"defaultSidebar",previous:{title:"Process scraped data with Python",permalink:"/platform/tutorials/process-data-using-python"},next:{title:"Run actor and retrieve data via API",permalink:"/platform/tutorials/integrations/run-actor-and-retrieve-data-via-api"}},u={},d=[{value:"Before you start",id:"before-you-start",level:2},{value:"Preparing the client",id:"preparing-the-client",level:2},{value:"Running an actor",id:"running-an-actor",level:2},{value:" Getting the results from dataset",id:"-getting-the-results-from-dataset",level:2},{value:" Getting the results from key-value stores",id:"-getting-the-results-from-key-value-stores",level:2},{value:"When are the data ready?",id:"when-are-the-data-ready",level:2},{value:"Webhooks",id:"webhooks",level:2},{value:"How to use Apify Proxy",id:"how-to-use-apify-proxy",level:2},{value:"Feedback",id:"feedback",level:2}],c={toc:d};function h(e){var t=e.components,n=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"how-to-use-apify-from-php"},"How to use Apify from PHP"),(0,r.kt)("p",null,"Apify's ",(0,r.kt)("a",{parentName:"p",href:"https://docs.apify.com/api/v2#",target:"_blank",rel:"noopener"},"RESTful API")," allows you to use the platform from basically anywhere. Many projects are and will continue to be built using ",(0,r.kt)("a",{parentName:"p",href:"https://www.php.net/",target:"_blank",rel:"noopener"},"PHP"),". This tutorial enables you to use Apify in these projects in PHP and frameworks built on it."),(0,r.kt)("p",null,"Apify does not have an official PHP client (yet), so we are going to use ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/guzzle/guzzle",target:"_blank",rel:"noopener"},"guzzle"),", a great library for HTTP requests. By covering a few fundamental endpoints, this tutorial will show you the principles you can use for all Apify API endpoints."),(0,r.kt)("h2",{id:"before-you-start"},"Before you start"),(0,r.kt)("p",null,"Make sure you have an Apify account and API token. You will find the token in the ",(0,r.kt)("a",{parentName:"p",href:"https://console.apify.com/account?tab=integrations",target:"_blank",rel:"noopener"},"Integrations")," section in Apify Console."),(0,r.kt)("p",null,"If you don't already have guzzle installed in your project (or just want to try out the code examples), run ",(0,r.kt)("inlineCode",{parentName:"p"},"composer require guzzlehttp/guzzle")," to install it in the current directory."),(0,r.kt)("h2",{id:"preparing-the-client"},"Preparing the client"),(0,r.kt)("p",null,"To get a guzzle instance ready to be used with the Apify API, we first need to set up the base endpoint and authentication."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"require 'vendor/autoload.php';\n\n$client = new \\GuzzleHttp\\Client([\n    'base_uri' => 'https://api.apify.com/v2/',\n    'headers' => [\n        // Replace <YOUR_APIFY_API_TOKEN> with your actual token\n        'Authorization' => 'Bearer <YOUR_APIFY_API_TOKEN>',\n    ]\n]);\n")),(0,r.kt)("p",null,"Note that we pass the API token in the header. It can also be passed as a query string ",(0,r.kt)("inlineCode",{parentName:"p"},"token")," parameter, but passing it in the header is preferred and more secure."),(0,r.kt)("p",null,"To check whether everything works well, we'll try to get information about the ",(0,r.kt)("a",{parentName:"p",href:"/api/v2#/reference/users/private-data/get-private-user-data",target:null,rel:null},"current user"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"// Call the endpoint using our client\n// Note that the path does not have a leading slash\n$response = $client->get('users/me');\n// Parse the response (most Apify API endpoints return JSON)\n$parsedResponse = \\json_decode($response->getBody(), true);\n// The actual data are usually present under the `data` key\n$data = $parsedResponse['data'];\n\necho \\json_encode($data, JSON_PRETTY_PRINT);\n")),(0,r.kt)("p",null,"If, instead of data, you see an error saying ",(0,r.kt)("inlineCode",{parentName:"p"},"Authentication token is not valid"),", check if the API token you used to instantiate the client is valid."),(0,r.kt)("h2",{id:"running-an-actor"},"Running an actor"),(0,r.kt)("p",null,"Now that we have our guzzle client ready to go, we can run some actors. Let's try the ",(0,r.kt)("strong",{parentName:"p"},"Contact Details Scraper")," (",(0,r.kt)("a",{parentName:"p",href:"https://apify.com/vdrmota/contact-info-scraper",target:"_blank",rel:"noopener"},"vdrmota/contact-info-scraper"),")."),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"/api/v2#/reference/actors/run-collection/run-actor",target:null,rel:null},"API reference")," states that an actor's input should be passed as JSON in the request body. Other options are passed as query parameters."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"// To run the actor, we make a POST request to its run's endpoint\n// To identify the actor, you can use its ID, but you can also pass\n// the full actor name [username]~[actorName] or just ~[actorName] for\n// your own actors\n$response = $client->post('acts/vdrmota~contact-info-scraper/runs', [\n  // Actors usually accept JSON as input. When using the `json` key in\n  // a POST request's options, guzzle sets proper request headers\n  // and serializes the array we pass in\n  'json' => [\n    'startUrls' => [\n        ['url' => 'https://www.apify.com/contact']\n    ],\n    'maxDepth' => 0,\n  ],\n  // Other run options are passed in as query parameters\n  // This is optional since actors usually have reasonable defaults\n  'query' => [ 'timeout' => 30 ],\n]);\n$parsedResponse = \\json_decode($response->getBody(), true);\n$data = $parsedResponse['data'];\n\necho \\json_encode($data, JSON_PRETTY_PRINT);\n")),(0,r.kt)("p",null,"You should see information about the run, including its ID and the ID of its default ",(0,r.kt)("a",{parentName:"p",href:"../storage/dataset.md",target:null,rel:null},"dataset"),". Take note of these, we will need them later."),(0,r.kt)("h2",{id:"-getting-the-results-from-dataset"},(0,r.kt)("a",{parentName:"h2",href:"#getting-dataset",target:null,rel:null})," Getting the results from dataset"),(0,r.kt)("p",null,"Actors usually store their output in a default dataset. The ",(0,r.kt)("a",{parentName:"p",href:"/api/v2#/reference/actor-runs",target:null,rel:null},"actor runs endpoint")," lets you get overall info about an actor run's default dataset."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"// Replace <RUN_ID> with the run ID you from earlier\n$response = $client->get('actor-runs/<RUN_ID>/dataset');\n$parsedResponse = \\json_decode($response->getBody(), true);\n$data = $parsedResponse['data'];\n\necho \\json_encode($data, JSON_PRETTY_PRINT);\n")),(0,r.kt)("p",null,"As you can see, the response contains overall stats about the dataset, like its number of items, but not the actual data. To get those, we have to call the ",(0,r.kt)("strong",{parentName:"p"},"items")," endpoint."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"// Replace <RUN_ID> with the run ID from earlier\n$response = $client->get('actor-runs/<RUN_ID>/dataset/items');\n// The dataset items endpoint returns an array of dataset items\n// they are not under the `data` key like in other endpoints\n$data = \\json_decode($response->getBody(), true);\n\necho \\json_encode($data, JSON_PRETTY_PRINT);\n")),(0,r.kt)("p",null,"Some actors write to datasets other than the default. In these cases, you need to have the dataset ID and call the ",(0,r.kt)("inlineCode",{parentName:"p"},"datasets/<DATASET_ID>")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"datasets/<DATASET_ID>/items")," endpoints instead."),(0,r.kt)("p",null,"For larger datasets, you can paginate through the results by passing query parameters."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"$response = $client->get('datasets/<DATASET_ID>/items', [\n    'query' => [\n        'offset' => 20,\n        'limit' => 10,\n    ]\n]);\n$parsedResponse = \\json_decode($response->getBody(), true);\necho \\json_encode($parsedResponse, JSON_PRETTY_PRINT);\n")),(0,r.kt)("p",null,"All the available parameters are described in our ",(0,r.kt)("a",{parentName:"p",href:"/api/v2#/reference/datasets/item-collection/get-items",target:null,rel:null},"API reference")," and work both for all datasets."),(0,r.kt)("h2",{id:"-getting-the-results-from-key-value-stores"},(0,r.kt)("a",{parentName:"h2",href:"#getting-key-value-store",target:null,rel:null})," Getting the results from key-value stores"),(0,r.kt)("p",null,"Datasets are great for structured data, but are not suited for binary files like images or PDFs. In these cases, actors store their output in ",(0,r.kt)("a",{parentName:"p",href:"../storage/key_value_store.md",target:null,rel:null},"key-value stores"),". One such actor is the ",(0,r.kt)("strong",{parentName:"p"},"HTML String To PDF")," (",(0,r.kt)("a",{parentName:"p",href:"https://apify.com/mhamas/html-string-to-pdf",target:"_blank",rel:"noopener"},"mhamas/html-string-to-pdf"),") converter. Let's run it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"$response = $client->post('acts/mhamas~html-string-to-pdf/runs', [\n    'json' => [\n        'htmlString' => '<html><body><h1>Hello World</h1></body></html>'\n    ],\n]);\n$parsedResponse = \\json_decode($response->getBody(), true);\n$data = $parsedResponse['data'];\n\necho \\json_encode($data, JSON_PRETTY_PRINT);\n")),(0,r.kt)("p",null,"Keep track of the returned run ID."),(0,r.kt)("p",null,"Similar to datasets, we can get overall info about the default key-value store."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"// Replace <RUN_ID> with the ID returned by the code above\n$response = $client->get('actor-runs/<RUN_ID>/key-value-store');\n$parsedResponse = \\json_decode($response->getBody(), true);\n$data = $parsedResponse['data'];\n\necho \\json_encode($data, JSON_PRETTY_PRINT);\n")),(0,r.kt)("p",null,"The items in key-value stores are not structured, so we cannot use the same approach as we did with dataset items. We can obtain some information about a store's content using its ",(0,r.kt)("strong",{parentName:"p"},"keys")," endpoint."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"// Don't forget to replace <RUN_ID> with the ID you got earlier\n$response = $client->get('actor-runs/<RUN_ID>/key-value-store/keys');\n$parsedResponse = \\json_decode($response->getBody(), true);\n$data = $parsedResponse['data'];\n\necho \\json_encode($data, JSON_PRETTY_PRINT);\n")),(0,r.kt)("p",null,"We can see that there are two record keys: ",(0,r.kt)("inlineCode",{parentName:"p"},"INPUT")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"OUTPUT"),". The HTML String to PDF actor's README states that the PDF is stored under the ",(0,r.kt)("inlineCode",{parentName:"p"},"OUTPUT")," key. Downloading it is simple:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"// Don't forget to replace the <RUN_ID>\n$response = $client->get('actor-runs/<RUN_ID>/key-value-store/records/OUTPUT');\n// Make sure that the destination (filename) is writable\nfile_put_contents(__DIR__ . '/hello-world.pdf', $response->getBody());\n")),(0,r.kt)("p",null,"If you open the generated ",(0,r.kt)("inlineCode",{parentName:"p"},"hello-world.pdf"),' file, you should see... well, "Hello World".'),(0,r.kt)("p",null,"If the actor stored the data in a key-value store other than the default, we can use the standalone endpoints, ",(0,r.kt)("inlineCode",{parentName:"p"},"key-value-stores/<STORE_ID>"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"key-value-stores/<STORE_ID>/keys"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"key-value-stores/<STORE_ID>/records/<KEY>"),". They behave the same way as the default endpoints. See the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.apify.com/api/v2#/reference/key-value-stores/store-object",target:"_blank",rel:"noopener"},"full docs"),"."),(0,r.kt)("h2",{id:"when-are-the-data-ready"},"When are the data ready?"),(0,r.kt)("p",null,"It takes some time for an actor to generate its output. There are even actors that run for days. In the previous examples, we chose actors whose runs only take a few seconds. This meant the runs had enough time to finish before we ran the code to retrieve their dataset or key-value store (so the actor had time to produce some output). If we ran the code immediately after starting a longer-running actor, the dataset would probably still be empty."),(0,r.kt)("p",null,"For actors that are expected to be quick, we can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"waitForFinish")," parameter. Then, the running actor's endpoint does not respond immediately but waits until the run finishes (up to the given limit). Let's try this with the HTML String to PDF actor."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"$response = $client->post('acts/mhamas~html-string-to-pdf/runs', [\n    'json' => [\n        'htmlString' => '<html><body><h1>Hi World</h1></body></html>'\n    ],\n    // Pass in how long we want to wait, in seconds\n    'query' => [ 'waitForFinish' => 60 ]\n]);\n$parsedResponse = \\json_decode($response->getBody(), true);\n$data = $parsedResponse['data'];\n\necho \\json_encode($data, JSON_PRETTY_PRINT);\n\n$runId = $data['id'];\n$response = $client->get(sprintf('actor-runs/%s/key-value-store/records/OUTPUT', $runId));\nfile_put_contents(__DIR__ . '/hi-world.pdf', $response->getBody());\n")),(0,r.kt)("h2",{id:"webhooks"},"Webhooks"),(0,r.kt)("p",null,"For actors that take longer to run, we can use ","[webhooks]","({{@link integrations/webhooks.md}}). A webhook is an HTML POST request that is sent to a specified URL when an actor's status changes. We can use them as a kind of notification that is sent when your run finishes. You can set them up using query parameters. If we used webhooks in the example above, it would look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"// Webhooks need to be passed as a base64-encoded JSON string\n$webhooks = \\base64_encode(\\json_encode([\n    [\n        // The webhook can be sent on multiple events\n        // this one fires when the run succeeds\n        'eventTypes' => ['ACTOR.RUN.SUCCEEDED'],\n        // Set this to some url that you can react to\n        // To see what is sent to the URL,\n        // you can set up a temporary request bin at https://requestbin.com/r\n        'requestUrl' => '<WEBHOOK_ENDPOINT_URL>',\n    ],\n]));\n$response = $client->post('acts/mhamas~html-string-to-pdf/runs', [\n    'json' => [\n        'htmlString' => '<html><body><h1>Hello World</h1></body></html>'\n    ],\n    'query' => [ 'webhooks' => $webhooks ]\n]);\n")),(0,r.kt)("h2",{id:"how-to-use-apify-proxy"},"How to use Apify Proxy"),(0,r.kt)("p",null,"There is another important Apify feature you will need: ","[proxy]","({{@link proxy.md}}). Guzzle makes it really easy to use."),(0,r.kt)("p",null,"If you just want to make sure that your server's IP address won't get blocked somewhere when making requests, you can use the automatic proxy selection mode."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"$client = new \\GuzzleHttp\\Client([\n    // Replace <YOUR_PROXY_PASSWORD> below with your password\n    // found at https://console.apify.com/proxy\n    'proxy' => 'http://auto:<YOUR_PROXY_PASSWORD>@proxy.apify.com:8000'\n]);\n\n// This request will be made through an automatically chosen proxy\n$response = $client->get(\"http://proxy.apify.com/?format=json\");\necho $response->getBody();\n")),(0,r.kt)("p",null,"If you want to maintain the same IP between requests, you can use the session mode."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"$client = new \\GuzzleHttp\\Client([\n    // Replace <YOUR_PROXY_PASSWORD> below with your password\n    // found at https://console.apify.com/proxy\n    'proxy' => 'http://session-my_session:<YOUR_PROXY_PASSWORD>@proxy.apify.com:8000'\n]);\n\n// Both responses should contain the same clientIp\n$response = $client->get(\"https://api.apify.com/v2/browser-info\");\necho $response->getBody();\n\n$response = $client->get(\"https://api.apify.com/v2/browser-info\");\necho $response->getBody();\n")),(0,r.kt)("p",null,"See the ",(0,r.kt)("a",{parentName:"p",href:"/platform/proxy/connection-settings",target:null,rel:null},"proxy docs")," for more details on using specific proxies."),(0,r.kt)("h2",{id:"feedback"},"Feedback"),(0,r.kt)("p",null,"Are you interested in an Apify PHP client or other PHP-related content? Do you have some feedback on this tutorial? ",(0,r.kt)("a",{parentName:"p",href:"https://apify.typeform.com/to/KqhmiJge#source=tutorial_use_apify_from_php",target:"_blank",rel:"noopener"},"Let us know"),"!"))}h.isMDXComponent=!0}}]);