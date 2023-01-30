"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[9870],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>d});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),i=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},u=function(e){var r=i(e.components);return n.createElement(s.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=i(t),d=o,h=m["".concat(s,".").concat(d)]||m[d]||c[d]||a;return t?n.createElement(h,l(l({ref:r},u),{},{components:t})):n.createElement(h,l({ref:r},u))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=m;var p={};for(var s in r)hasOwnProperty.call(r,s)&&(p[s]=r[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,l[1]=p;for(var i=2;i<a;i++)l[i]=t[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},85162:(e,r,t)=>{t.d(r,{Z:()=>l});var n=t(67294),o=t(86010);const a="tabItem_Ymn6";function l(e){var r=e.children,t=e.hidden,l=e.className;return n.createElement("div",{role:"tabpanel",className:(0,o.Z)(a,l),hidden:t},r)}},74866:(e,r,t)=>{t.d(r,{Z:()=>P});var n=t(87462),o=t(67294),a=t(86010),l=t(12466),p=t(16550),s=t(91980),i=t(67392),u=t(50012);function c(e){return function(e){return o.Children.map(e,(function(e){if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var r=e.props;return{value:r.value,label:r.label,attributes:r.attributes,default:r.default}}))}function m(e){var r=e.values,t=e.children;return(0,o.useMemo)((function(){var e=null!=r?r:c(t);return function(e){var r=(0,i.l)(e,(function(e,r){return e.value===r.value}));if(r.length>0)throw new Error('Docusaurus error: Duplicate values "'+r.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[r,t])}function d(e){var r=e.value;return e.tabValues.some((function(e){return e.value===r}))}function h(e){var r=e.queryString,t=void 0!==r&&r,n=e.groupId,a=(0,p.k6)(),l=function(e){var r=e.queryString,t=void 0!==r&&r,n=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:t,groupId:n});return[(0,s._X)(l),(0,o.useCallback)((function(e){if(l){var r=new URLSearchParams(a.location.search);r.set(l,e),a.replace(Object.assign({},a.location,{search:r.toString()}))}}),[l,a])]}function g(e){var r,t,n,a,l=e.defaultValue,p=e.queryString,s=void 0!==p&&p,i=e.groupId,c=m(e),g=(0,o.useState)((function(){return function(e){var r,t=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var o=null!=(r=n.find((function(e){return e.default})))?r:n[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:l,tabValues:c})})),y=g[0],f=g[1],w=h({queryString:s,groupId:i}),k=w[0],b=w[1],x=(r=function(e){return e?"docusaurus.tab."+e:null}({groupId:i}.groupId),t=(0,u.Nk)(r),n=t[0],a=t[1],[n,(0,o.useCallback)((function(e){r&&a.set(e)}),[r,a])]),P=x[0],v=x[1],O=function(){var e=null!=k?k:P;return d({value:e,tabValues:c})?e:null}();return(0,o.useEffect)((function(){O&&f(O)}),[O]),{selectedValue:y,selectValue:(0,o.useCallback)((function(e){if(!d({value:e,tabValues:c}))throw new Error("Can't select invalid tab value="+e);f(e),b(e),v(e)}),[b,v,c]),tabValues:c}}var y=t(72389);const f="tabList__CuJ",w="tabItem_LNqP";function k(e){var r=e.className,t=e.block,p=e.selectedValue,s=e.selectValue,i=e.tabValues,u=[],c=(0,l.o5)().blockElementScrollPositionUntilNextRender,m=function(e){var r=e.currentTarget,t=u.indexOf(r),n=i[t].value;n!==p&&(c(r),s(n))},d=function(e){var r,t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":var n,o=u.indexOf(e.currentTarget)+1;t=null!=(n=u[o])?n:u[0];break;case"ArrowLeft":var a,l=u.indexOf(e.currentTarget)-1;t=null!=(a=u[l])?a:u[u.length-1]}null==(r=t)||r.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},r)},i.map((function(e){var r=e.value,t=e.label,l=e.attributes;return o.createElement("li",(0,n.Z)({role:"tab",tabIndex:p===r?0:-1,"aria-selected":p===r,key:r,ref:function(e){return u.push(e)},onKeyDown:d,onClick:m},l,{className:(0,a.Z)("tabs__item",w,null==l?void 0:l.className,{"tabs__item--active":p===r})}),null!=t?t:r)})))}function b(e){var r=e.lazy,t=e.children,n=e.selectedValue;if(r){var a=t.find((function(e){return e.props.value===n}));return a?(0,o.cloneElement)(a,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},t.map((function(e,r){return(0,o.cloneElement)(e,{key:r,hidden:e.props.value!==n})})))}function x(e){var r=g(e);return o.createElement("div",{className:(0,a.Z)("tabs-container",f)},o.createElement(k,(0,n.Z)({},e,r)),o.createElement(b,(0,n.Z)({},e,r)))}function P(e){var r=(0,y.Z)();return o.createElement(x,(0,n.Z)({key:String(r)},e))}},90682:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>m,contentTitle:()=>u,default:()=>g,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var n=t(87462),o=t(63366),a=(t(67294),t(3905)),l=t(74866),p=t(85162),s=["components"],i={title:"Examples",description:"Learn how to connect to Google SERP proxies from your applications with Node.js (axios and got-scraping), Python 2 and 3 and PHP using code examples.",slug:"/proxy/google-serp-proxy/examples"},u=void 0,c={unversionedId:"proxy/google_serp_proxy/examples",id:"proxy/google_serp_proxy/examples",title:"Examples",description:"Learn how to connect to Google SERP proxies from your applications with Node.js (axios and got-scraping), Python 2 and 3 and PHP using code examples.",source:"@site/sources/platform/proxy/google_serp_proxy/examples.md",sourceDirName:"proxy/google_serp_proxy",slug:"/proxy/google-serp-proxy/examples",permalink:"/platform/proxy/google-serp-proxy/examples",draft:!1,tags:[],version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1675095521,formattedLastUpdatedAt:"Jan 30, 2023",frontMatter:{title:"Examples",description:"Learn how to connect to Google SERP proxies from your applications with Node.js (axios and got-scraping), Python 2 and 3 and PHP using code examples.",slug:"/proxy/google-serp-proxy/examples"},sidebar:"docs",previous:{title:"Google SERP proxy",permalink:"/platform/proxy/google-serp-proxy"},next:{title:"Troubleshooting",permalink:"/platform/proxy/troubleshooting"}},m={},d=[{value:"Using the Apify SDK",id:"using-the-apify-sdk",level:2},{value:"Get a list of search results",id:"get-a-list-of-search-results",level:3},{value:"Get a list of shopping results",id:"get-a-list-of-shopping-results",level:3},{value:"Using standard libraries and languages",id:"using-standard-libraries-and-languages",level:2},{value:"HTML from search results",id:"html-from-search-results",level:3},{value:"HTML from localized shopping results",id:"html-from-localized-shopping-results",level:3}],h={toc:d};function g(e){var r=e.components,t=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},h,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"connect-to-google-serp-proxies"},"Connect to Google SERP proxies"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Learn how to connect to Google SERP proxies from your applications with Node.js (axios and got-scraping), Python 2 and 3 and PHP using code examples.")),(0,a.kt)("hr",null),(0,a.kt)("p",null,"This page contains code examples for connecting to ",(0,a.kt)("a",{parentName:"p",href:"/platform/proxy/google-serp-proxy",target:null,rel:null},"Google SERP proxies")," using ",(0,a.kt)("a",{parentName:"p",href:"https://apify.com/proxy",target:"_blank",rel:"noopener"},"Apify Proxy"),"."),(0,a.kt)("p",null,"See the ",(0,a.kt)("a",{parentName:"p",href:"/platform/proxy/connection-settings",target:null,rel:null},"connection settings")," page for connection parameters."),(0,a.kt)("h2",{id:"using-the-apify-sdk"},"Using the Apify SDK"),(0,a.kt)("p",null,"If you are developing your own Apify ",(0,a.kt)("a",{parentName:"p",href:"/platform/actors",target:null,rel:null},"actor")," using the ",(0,a.kt)("a",{parentName:"p",href:"https://docs-v2.apify.com/sdk-js",target:"_blank",rel:"noopener"},"Apify SDK")," and ",(0,a.kt)("a",{parentName:"p",href:"https://crawlee.dev/",target:"_blank",rel:"noopener"},"Crawlee"),", the most efficient way to use Google SERP proxy is ",(0,a.kt)("a",{parentName:"p",href:"https://crawlee.dev/api/cheerio-crawler/class/CheerioCrawler",target:"_blank",rel:"noopener"},"CheerioCrawler"),". This is because Google SERP proxy ",(0,a.kt)("a",{parentName:"p",href:"/platform/proxy/google-serp-proxy",target:null,rel:null},"only returns a page's HTML"),". Alternatively, you can use the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apify/got-scraping",target:"_blank",rel:"noopener"},"got-scraping")," ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/got-scraping",target:"_blank",rel:"noopener"},"NPM package")," by specifying proxy URL in the options."),(0,a.kt)("p",null,"Apify Proxy also works with ",(0,a.kt)("a",{parentName:"p",href:"https://crawlee.dev/api/puppeteer-crawler/class/PuppeteerCrawler",target:"_blank",rel:"noopener"},"PuppeteerCrawler"),", ",(0,a.kt)("a",{parentName:"p",href:"https://crawlee.dev/api/puppeteer-crawler/function/launchPuppeteer",target:"_blank",rel:"noopener"},"launchPuppeteer()"),", ",(0,a.kt)("a",{parentName:"p",href:"https://crawlee.dev/api/playwright-crawler/class/PlaywrightCrawler",target:"_blank",rel:"noopener"},"PlaywrightCrawler"),", ",(0,a.kt)("a",{parentName:"p",href:"https://crawlee.dev/api/playwright-crawler/function/launchPlaywright",target:"_blank",rel:"noopener"},"launchPlaywright()")," and ",(0,a.kt)("a",{parentName:"p",href:"https://crawlee.dev/api/jsdom-crawler/class/JSDOMCrawler",target:"_blank",rel:"noopener"},"JSDOMCrawler"),". However, ",(0,a.kt)("inlineCode",{parentName:"p"},"CheerioCrawler")," is simply the most efficient solution for this use case."),(0,a.kt)("h3",{id:"get-a-list-of-search-results"},"Get a list of search results"),(0,a.kt)("p",null,"Get a list of search results for the keyword ",(0,a.kt)("strong",{parentName:"p"},"wikipedia")," from the USA (",(0,a.kt)("inlineCode",{parentName:"p"},"google.com"),")."),(0,a.kt)(l.Z,{groupId:"main",mdxType:"Tabs"},(0,a.kt)(p.Z,{value:"CheerioCrawler",label:"CheerioCrawler",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import { Actor } from 'apify';\nimport { CheerioCrawler } from 'crawlee';\n\nawait Actor.init();\n\nconst proxyConfiguration = await Actor.createProxyConfiguration({\n    groups: ['GOOGLE_SERP'],\n});\n\nconst crawler = new CheerioCrawler({\n    proxyConfiguration,\n    async requestHandler({ body }) {\n        // ...\n        console.log(body)\n    },\n});\n\nawait crawler.run(['http://www.google.com/search?q=wikipedia']);\n\nawait Actor.exit();\n\n"))),(0,a.kt)(p.Z,{value:"gotScraping()",label:"gotScraping()",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import { Actor } from 'apify';\nimport { gotScraping } from 'got-scraping';\n\nawait Actor.init();\n\nconst proxyConfiguration = await Actor.createProxyConfiguration({\n    groups: ['GOOGLE_SERP'],\n});\nconst proxyUrl = await proxyConfiguration.newUrl();\n\nconst { body } = await gotScraping({\n    url: 'http://www.google.com/search?q=wikipedia',\n    proxyUrl,\n});\n\nconsole.log(body);\n\nawait Actor.exit();\n\n")))),(0,a.kt)("h3",{id:"get-a-list-of-shopping-results"},"Get a list of shopping results"),(0,a.kt)("p",null,"Get a list of shopping results for the query ",(0,a.kt)("strong",{parentName:"p"},"Apple iPhone XS 64GB")," from Great Britain (",(0,a.kt)("inlineCode",{parentName:"p"},"google.co.uk"),")."),(0,a.kt)(l.Z,{groupId:"main",mdxType:"Tabs"},(0,a.kt)(p.Z,{value:"CheerioCrawler",label:"CheerioCrawler",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import { Actor } from 'apify';\nimport { CheerioCrawler } from 'crawlee';\n\nawait Actor.init();\n\nconst proxyConfiguration = await Actor.createProxyConfiguration({\n    groups: ['GOOGLE_SERP'],\n});\n\nconst crawler = new CheerioCrawler({\n    proxyConfiguration,\n    async requestHandler({ body }) {\n        // ...\n        console.log(body)\n    },\n});\n\nconst query = encodeURI('Apple iPhone XS 64GB');\nawait crawler.run([`http://www.google.co.uk/search?q=${query}&tbm=shop`]);\n\nawait Actor.exit();\n\n"))),(0,a.kt)(p.Z,{value:"gotScraping()",label:"gotScraping()",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import { Actor } from 'apify';\nimport { gotScraping } from 'got-scraping';\n\nawait Actor.init();\n\nconst proxyConfiguration = await Actor.createProxyConfiguration({\n    groups: ['GOOGLE_SERP'],\n});\nconst proxyUrl = await proxyConfiguration.newUrl();\n\nconst query = encodeURI('Apple iPhone XS 64GB');\nconst { body } = await gotScraping({\n    url: `http://www.google.co.uk/search?tbm=shop&q=${query}`,\n    proxyUrl,\n});\n\nconsole.log(body);\n\nawait Actor.exit();\n\n")))),(0,a.kt)("h2",{id:"using-standard-libraries-and-languages"},"Using standard libraries and languages"),(0,a.kt)("p",null,"You can find your proxy password on the ",(0,a.kt)("a",{parentName:"p",href:"https://console.apify.com/proxy",target:"_blank",rel:"noopener"},"Proxy page")," of the Apify Console."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"username")," field is ",(0,a.kt)("strong",{parentName:"p"},"not")," your Apify username.",(0,a.kt)("br",null),"\nInstead, you specify proxy settings (e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"groups-GOOGLE_SERP"),").",(0,a.kt)("br",null),"\nUse ",(0,a.kt)("inlineCode",{parentName:"p"},"groups-GOOGLE_SERP")," to use proxies from all available countries.")),(0,a.kt)("p",null,"For examples using ",(0,a.kt)("a",{parentName:"p",href:"https://www.php.net/",target:"_blank",rel:"noopener"},"PHP"),", you need to have the ",(0,a.kt)("a",{parentName:"p",href:"https://www.php.net/manual/en/book.curl.php",target:"_blank",rel:"noopener"},"cURL")," extension enabled in your PHP installation. See ",(0,a.kt)("a",{parentName:"p",href:"https://www.php.net/manual/en/curl.installation.php",target:"_blank",rel:"noopener"},"installation instructions")," for more information."),(0,a.kt)("p",null,"Examples in ",(0,a.kt)("a",{parentName:"p",href:"https://www.python.org/download/releases/2.0/",target:"_blank",rel:"noopener"},"Python 2")," use the ",(0,a.kt)("a",{parentName:"p",href:"https://pypi.org/project/six/",target:"_blank",rel:"noopener"},"six")," library. Run ",(0,a.kt)("inlineCode",{parentName:"p"},"pip install six")," to enable it."),(0,a.kt)("h3",{id:"html-from-search-results"},"HTML from search results"),(0,a.kt)("p",null,"Get the HTML of search results for the keyword ",(0,a.kt)("strong",{parentName:"p"},"wikipedia")," from the USA (",(0,a.kt)("strong",{parentName:"p"},"google.com"),")."),(0,a.kt)("p",null,"Select this option by setting the ",(0,a.kt)("inlineCode",{parentName:"p"},"username")," parameter to ",(0,a.kt)("inlineCode",{parentName:"p"},"groups-GOOGLE_SERP"),". Add the item you want to search to the ",(0,a.kt)("inlineCode",{parentName:"p"},"query")," parameter."),(0,a.kt)(l.Z,{groupId:"main",mdxType:"Tabs"},(0,a.kt)(p.Z,{value:"Node.js (axios)",label:"Node.js (axios)",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import axios from 'axios';\n\nconst proxy = {\n    protocol: 'http',\n    host: 'proxy.apify.com',\n    port: 8000,\n    // Replace <YOUR_PROXY_PASSWORD> below with your password\n    // found at https://console.apify.com/proxy\n    auth: { username: 'groups-GOOGLE_SERP', password: <YOUR_PROXY_PASSWORD> },\n};\n\nconst url = 'http://www.google.com/search';\nconst params = { q: 'wikipedia' };\n\nconst { data } = await axios.get(url, { proxy, params });\n\nconsole.log(data);\n\n"))),(0,a.kt)(p.Z,{value:"Python 3",label:"Python 3",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import urllib.request as request\nimport urllib.parse as parse\n\n# Replace <YOUR_PROXY_PASSWORD> below with your password\n# found at https://console.apify.com/proxy\npassword = '<YOUR_PROXY_PASSWORD>'\nproxy_url = f\"http://groups-GOOGLE_SERP:{password}@proxy.apify.com:8000\"\n\nproxy_handler = request.ProxyHandler({\n    'http': proxy_url,\n})\n\nopener = request.build_opener(proxy_handler)\n\nquery = parse.urlencode({ 'q': 'wikipedia' })\nprint(opener.open(f\"http://www.google.com/search?{query}\").read())\n\n"))),(0,a.kt)(p.Z,{value:"Python 2",label:"Python 2",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import six\nfrom six.moves.urllib import request, urlencode\n\n# Replace <YOUR_PROXY_PASSWORD> below with your password\n# found at https://console.apify.com/proxy\npassword = '<YOUR_PROXY_PASSWORD>'\nproxy_url = (\n    'http://groups-GOOGLE_SERP:%s@proxy.apify.com:8000' %\n    (password)\n)\nproxy_handler = request.ProxyHandler({\n    'http': proxy_url,\n})\nopener = request.build_opener(proxy_handler)\nquery = parse.urlencode({ 'q': 'wikipedia' })\nurl = (\n    'http://www.google.com/search?%s' %\n    (query)\n)\nprint(opener.open(url).read())\n\n"))),(0,a.kt)(p.Z,{value:"PHP",label:"PHP",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n$query = urlencode('wikipedia');\n$curl = curl_init('http://www.google.com/search?q=' . $query);\ncurl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);\ncurl_setopt($curl, CURLOPT_PROXY, 'http://proxy.apify.com:8000');\n// Replace <YOUR_PROXY_PASSWORD> below with your password\n// found at https://console.apify.com/proxy\ncurl_setopt($curl, CURLOPT_PROXYUSERPWD, 'groups-GOOGLE_SERP:<YOUR_PROXY_PASSWORD>');\n$response = curl_exec($curl);\ncurl_close($curl);\necho $response;\n?>\n\n"))),(0,a.kt)(p.Z,{value:"PHP (Guzzle)",label:"PHP (Guzzle)",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"<?php\nrequire 'vendor/autoload.php';\n\n$client = new \\GuzzleHttp\\Client([\n    // Replace <YOUR_PROXY_PASSWORD> below with your password\n    // found at https://console.apify.com/proxy\n    'proxy' => 'http://groups-GOOGLE_SERP:<YOUR_PROXY_PASSWORD>@proxy.apify.com:8000'\n]);\n\n$response = $client->get(\"http://www.google.com/search\", [\n    'query' => ['q' => 'wikipedia']\n]);\necho $response->getBody();\n\n")))),(0,a.kt)("h3",{id:"html-from-localized-shopping-results"},"HTML from localized shopping results"),(0,a.kt)("p",null,"Get HTML of shopping results for the query ",(0,a.kt)("strong",{parentName:"p"},"Apple iPhone XS 64GB")," from Great Britain (",(0,a.kt)("inlineCode",{parentName:"p"},"google.co.uk"),")."),(0,a.kt)("p",null,"Select this option by setting the ",(0,a.kt)("inlineCode",{parentName:"p"},"username")," parameter to ",(0,a.kt)("inlineCode",{parentName:"p"},"groups-GOOGLE_SERP"),". In the ",(0,a.kt)("inlineCode",{parentName:"p"},"query")," parameter, add the item you want to search and specify the ",(0,a.kt)("strong",{parentName:"p"},"shop")," page as a URL parameter."),(0,a.kt)("p",null,"Set the domain (your country of choice) in the URL (in the ",(0,a.kt)("inlineCode",{parentName:"p"},"response")," variable)."),(0,a.kt)(l.Z,{groupId:"main",mdxType:"Tabs"},(0,a.kt)(p.Z,{value:"Node.js (axios)",label:"Node.js (axios)",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import axios from 'axios';\n\nconst proxy = {\n    protocol: 'http',\n    host: 'proxy.apify.com',\n    port: 8000,\n    // Replace <YOUR_PROXY_PASSWORD> below with your password\n    // found at https://console.apify.com/proxy\n    auth: { username: 'groups-GOOGLE_SERP', password: <YOUR_PROXY_PASSWORD> },\n};\n\nconst url = 'http://www.google.co.uk/search';\nconst params = { q: 'Apple iPhone XS 64GB', tbm: 'shop' }\n\nconst { data } = await axios.get(url, { proxy, params });\n\nconsole.log(data);\n\n"))),(0,a.kt)(p.Z,{value:"Python 3",label:"Python 3",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import urllib.request as request\nimport urllib.parse as parse\n\n# Replace <YOUR_PROXY_PASSWORD> below with your password\n# found at https://console.apify.com/proxy\npassword = '<YOUR_PROXY_PASSWORD>'\nproxy_url = f\"http://groups-GOOGLE_SERP:{password}@proxy.apify.com:8000\"\nproxy_handler = request.ProxyHandler({\n    'http': proxy_url,\n})\nopener = request.build_opener(proxy_handler)\n\nquery = parse.urlencode({ 'q': 'Apple iPhone XS 64GB', 'tbm': 'shop' })\nprint(opener.open(f\"http://www.google.co.uk/search?{query}\").read())\n\n"))),(0,a.kt)(p.Z,{value:"Python 2",label:"Python 2",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import six\nfrom six.moves.urllib import request, urlencode\n\n# Replace <YOUR_PROXY_PASSWORD> below with your password\n# found at https://console.apify.com/proxy\npassword = '<YOUR_PROXY_PASSWORD>'\nproxy_url = (\n    'http://groups-GOOGLE_SERP:%s@proxy.apify.com:8000' %\n    (password)\n)\nproxy_handler = request.ProxyHandler({\n    'http': proxy_url,\n})\nopener = request.build_opener(proxy_handler)\nquery = parse.urlencode({ 'q': 'Apple iPhone XS 64GB', 'tbm': 'shop' })\nurl = (\n    'http://www.google.co.uk/search?%s' %\n    (query)\n)\nprint(opener.open(url).read())\n\n"))),(0,a.kt)(p.Z,{value:"PHP",label:"PHP",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n$query = urlencode('Apple iPhone XS 64GB');\n$curl = curl_init('http://www.google.co.uk/search?tbm=shop&q=' . $query);\ncurl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);\ncurl_setopt($curl, CURLOPT_PROXY, 'http://proxy.apify.com:8000');\n// Replace <YOUR_PROXY_PASSWORD> below with your password\n// found at https://console.apify.com/proxy\ncurl_setopt($curl, CURLOPT_PROXYUSERPWD, 'groups-GOOGLE_SERP:<YOUR_PROXY_PASSWORD>');\n$response = curl_exec($curl);\ncurl_close($curl);\necho $response;\n?>\n\n"))),(0,a.kt)(p.Z,{value:"PHP (Guzzle)",label:"PHP (Guzzle)",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"<?php\nrequire 'vendor/autoload.php';\n\n$client = new \\GuzzleHttp\\Client([\n    // Replace <YOUR_PROXY_PASSWORD> below with your password\n    // found at https://console.apify.com/proxy\n    'proxy' => 'http://groups-GOOGLE_SERP:<YOUR_PROXY_PASSWORD>@proxy.apify.com:8000'\n]);\n\n$response = $client->get(\"http://www.google.co.uk/search\", [\n    'query' => [\n        'q' => 'Apple iPhone XS 64GB',\n        'tbm' => 'shop'\n    ]\n]);\necho $response->getBody();\n\n")))))}g.isMDXComponent=!0}}]);