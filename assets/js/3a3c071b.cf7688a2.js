"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[9556],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(h,l(l({ref:t},c),{},{components:n})):a.createElement(h,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},72396:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>f,frontMatter:()=>u,metadata:()=>p,toc:()=>m});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),l=n(74866),i=n(85162),s=["components"],u={title:"Apify client",description:"Interact with the Apify API in your code by using the apify-client package, which is available for both JavaScript and Python.",sidebar_position:5,slug:"/getting-started/apify-client"},c="Apify client",p={unversionedId:"platform/getting_started/apify_client",id:"platform/getting_started/apify_client",title:"Apify client",description:"Interact with the Apify API in your code by using the apify-client package, which is available for both JavaScript and Python.",source:"@site/sources/academy/platform/getting_started/apify_client.md",sourceDirName:"platform/getting_started",slug:"/getting-started/apify-client",permalink:"/academy/getting-started/apify-client",draft:!1,editUrl:"https://github.com/apify/apify-docs-v2/edit/master/sources/academy/platform/getting_started/apify_client.md",tags:[],version:"current",lastUpdatedBy:"Jind\u0159ich B\xe4r",lastUpdatedAt:1676040579,formattedLastUpdatedAt:"Feb 10, 2023",sidebarPosition:5,frontMatter:{title:"Apify client",description:"Interact with the Apify API in your code by using the apify-client package, which is available for both JavaScript and Python.",sidebar_position:5,slug:"/getting-started/apify-client"},sidebar:"academy",previous:{title:"Apify API",permalink:"/academy/getting-started/apify-api"},next:{title:"Deploying your code",permalink:"/academy/deploying-your-code"}},d={},m=[{value:"Installing and importing",id:"installing-and-importing",level:2},{value:"Running an actor",id:"running-an-actor",level:2},{value:"Downloading dataset items",id:"downloading-dataset-items",level:2},{value:"Updating an actor",id:"updating-actor",level:2},{value:"Overview",id:"overview",level:2},{value:"Next up",id:"next",level:2}],h={toc:m};function f(e){var t=e.components,u=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},h,u,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"apify-client"},"Apify client"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Interact with the Apify API in your code by using the apify-client package, which is available for both JavaScript and Python.")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Now that you've gotten your toes wet with interacting with the Apify API through raw HTTP requests, you're ready to become familiar with the ",(0,o.kt)("strong",{parentName:"p"},"Apify client"),", which is a package available for both JavaScript and Python that allows you to interact with the API in your code without  explicitly needing to make any GET or POST requests."),(0,o.kt)("p",null,"This lesson will provide code examples for both Node.js and Python, so regardless of the language you are using, you can follow along!"),(0,o.kt)("h2",{id:"installing-and-importing"},"Installing and importing"),(0,o.kt)("p",null,"If you are going to use the client in Node.js, use this command within one of your projects to install the package through NPM:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npm install apify-client\n")),(0,o.kt)("p",null,"In Python, you can install it from PyPI with this command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"pip install apify-client\n")),(0,o.kt)("p",null,"After installing the package, let's make a file named ",(0,o.kt)("strong",{parentName:"p"},"client")," and import the Apify client like so:"),(0,o.kt)(l.Z,{groupId:"main",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// client.js\nimport { ApifyClient } from 'apify-client';\n\n"))),(0,o.kt)(i.Z,{value:"Python",label:"Python",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"# client.py\nfrom apify_client import ApifyClient\n\n")))),(0,o.kt)("h2",{id:"running-an-actor"},"Running an actor"),(0,o.kt)("p",null,"In the last lesson, we ran the ",(0,o.kt)("strong",{parentName:"p"},"adding-actor")," and retrieved its dataset items. That's exactly what we're going to do now; however, by using the Apify client instead."),(0,o.kt)("p",null,"Before we can use the client though, we must create a new instance of the ",(0,o.kt)("inlineCode",{parentName:"p"},"ApifyClient")," class and pass it our API token from the ",(0,o.kt)("a",{parentName:"p",href:"https://console.apify.com/account?tab=integrations&asrc=developers_portal",target:"_blank",rel:"noopener"},(0,o.kt)("strong",{parentName:"a"},"Integrations")," page")," on the Apify Console:"),(0,o.kt)(l.Z,{groupId:"main",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const client = new ApifyClient({\n    token: 'YOUR_TOKEN',\n});\n\n"))),(0,o.kt)(i.Z,{value:"Python",label:"Python",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"client = ApifyClient(token='YOUR_TOKEN')\n\n")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If you are planning on publishing your code to a public Github/Gitlab repository or anywhere else online, be sure to set your API token as en environment variable, and never hardcode it directly into your script.")),(0,o.kt)("p",null,"Now that we've got our instance, we can point to an actor using the ",(0,o.kt)("a",{parentName:"p",href:"https://docs-v2.apify.com/client-js#apifyclient-actor",target:"_blank",rel:"noopener"},(0,o.kt)("inlineCode",{parentName:"a"},"client.actor()"))," function, then call the actor with some input with the ",(0,o.kt)("a",{parentName:"p",href:"https://docs-v2.apify.com/client-js#actorclient-call",target:"_blank",rel:"noopener"},(0,o.kt)("inlineCode",{parentName:"a"},".call()"))," function - the first parameter of which is the input for the actor."),(0,o.kt)(l.Z,{groupId:"main",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const run = await client.actor('YOUR_USERNAME/adding-actor').call({\n    num1: 4,\n    num2: 2,\n});\n\n"))),(0,o.kt)(i.Z,{value:"Python",label:"Python",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"run = client.actor('YOUR_USERNAME/adding-actor').call(run_input={\n    'num1': 4,\n    'num2': 2\n})\n\n")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Learn more about the ",(0,o.kt)("inlineCode",{parentName:"p"},".call()")," function ",(0,o.kt)("a",{parentName:"p",href:"https://docs-v2.apify.com/client-js#actorclient-call",target:"_blank",rel:"noopener"},"here"),".")),(0,o.kt)("h2",{id:"downloading-dataset-items"},"Downloading dataset items"),(0,o.kt)("p",null,"Once an actor's run has completed, it will return a ",(0,o.kt)("strong",{parentName:"p"},"run info")," object that looks something like this:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Run info object",src:n(53554).Z,width:"576",height:"612"})),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"run")," variable we created in the last section points to the ",(0,o.kt)("strong",{parentName:"p"},"run info")," object of the run we created with the ",(0,o.kt)("inlineCode",{parentName:"p"},".call()")," function, which means that through this variable, we can access the run's ",(0,o.kt)("inlineCode",{parentName:"p"},"defaultDatasetId"),". This ID can then be passed into the ",(0,o.kt)("inlineCode",{parentName:"p"},"client.dataset()")," function."),(0,o.kt)(l.Z,{groupId:"main",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const dataset = client.dataset(run['defaultDatasetId'])\n\n"))),(0,o.kt)(i.Z,{value:"Python",label:"Python",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"dataset = client.dataset(run['defaultDatasetId'])\n\n")))),(0,o.kt)("p",null,"Finally, we can download the items in the dataset by using the ",(0,o.kt)("strong",{parentName:"p"},"list items")," function, then log them to the console."),(0,o.kt)(l.Z,{groupId:"main",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const { items } = await dataset.listItems();\n\nconsole.log(items);\n\n"))),(0,o.kt)(i.Z,{value:"Python",label:"Python",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"items = dataset.list_items().items\n\nprint(items)\n\n")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Notice that in the JavaScript example, we had to convert the ",(0,o.kt)("inlineCode",{parentName:"p"},"items")," to a ",(0,o.kt)("a",{parentName:"p",href:"https://nodejs.org/api/buffer.html",target:"_blank",rel:"noopener"},(0,o.kt)("inlineCode",{parentName:"a"},"Buffer")),", then convert the Buffer to a string and parse it. This is because ",(0,o.kt)("inlineCode",{parentName:"p"},"dataset.downloadItems()")," returns a buffer.")),(0,o.kt)("p",null,"The final code for running the actor and fetching its dataset items looks like this:"),(0,o.kt)(l.Z,{groupId:"main",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// client.js\nimport { ApifyClient } from 'apify-client';\n\nconst client = new ApifyClient({\n    token: 'YOUR_TOKEN',\n});\n\nconst run = await client.actor('YOUR_USERNAME/adding-actor').call({\n    num1: 4,\n    num2: 2,\n});\n\nconst dataset = client.dataset(run['defaultDatasetId'])\n\nconst { items } = await dataset.listItems();\n\nconsole.log(items);\n\n"))),(0,o.kt)(i.Z,{value:"Python",label:"Python",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"# client.py\nfrom apify_client import ApifyClient\n\nclient = ApifyClient(token='YOUR_TOKEN')\n\nactor = client.actor('YOUR_USERNAME/adding-actor').call(run_input={\n    'num1': 4,\n    'num2': 2\n})\n\ndataset = client.dataset(run['defaultDatasetId'])\n\nitems = dataset.list_items().items\n\nprint(items)\n\n")))),(0,o.kt)("h2",{id:"updating-actor"},"Updating an actor"),(0,o.kt)("p",null,"If you check the ",(0,o.kt)("strong",{parentName:"p"},"Settings")," tab within your ",(0,o.kt)("strong",{parentName:"p"},"adding-actor"),", you'll notice that the default memory being allocated to the actor is ",(0,o.kt)("strong",{parentName:"p"},"2048 MB"),". This is a bit overkill considering the fact that the actor is only adding two numbers together - ",(0,o.kt)("strong",{parentName:"p"},"256 MB")," would be much more reasonable. Also, we can safely say that the run should never take more than 20 seconds (even this is a generous number), and that the default of 3600 seconds is also overkill."),(0,o.kt)("p",null,"Let's change these two actor settings via the Apify client using the ",(0,o.kt)("a",{parentName:"p",href:"https://docs-v2.apify.com/client-js#actorclient-update",target:"_blank",rel:"noopener"},(0,o.kt)("inlineCode",{parentName:"a"},"actor.update()"))," function. This function will call the ",(0,o.kt)("strong",{parentName:"p"},"update actor")," endpoint, which can take ",(0,o.kt)("inlineCode",{parentName:"p"},"defaultRunOptions")," as an input property. You can find the shape of the ",(0,o.kt)("inlineCode",{parentName:"p"},"defaultRunOptions")," in the ",(0,o.kt)("a",{parentName:"p",href:"/api/v2#/reference/actors/actor-object/update-actor",target:null,rel:null},"API documentation"),". Perfect!"),(0,o.kt)("p",null,"First, we'll create a pointer to our actor, similar to as before (except this time, we won't be using ",(0,o.kt)("inlineCode",{parentName:"p"},".call()")," at the end):"),(0,o.kt)(l.Z,{groupId:"main",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const actor = client.actor('YOUR_USERNAME/adding-actor')\n\n"))),(0,o.kt)(i.Z,{value:"Python",label:"Python",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"actor = client.actor('YOUR_USERNAME/adding-actor')\n\n")))),(0,o.kt)("p",null,"Then, we'll just call the ",(0,o.kt)("inlineCode",{parentName:"p"},".update()")," method on the ",(0,o.kt)("inlineCode",{parentName:"p"},"actor")," variable we created and pass in our new ",(0,o.kt)("strong",{parentName:"p"},"default run options"),":"),(0,o.kt)(l.Z,{groupId:"main",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"Node.js",label:"Node.js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"await actor.update({\n    defaultRunOptions: {\n        build: 'latest',\n        memoryMbytes: 256,\n        timeoutSecs: 20,\n    },\n});\n\n"))),(0,o.kt)(i.Z,{value:"Python",label:"Python",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"actor.update(default_run_build='latest', default_run_memory_mbytes=256, default_run_timeout_secs=20)\n\n")))),(0,o.kt)("p",null,"After running the code, go back to the ",(0,o.kt)("strong",{parentName:"p"},"Settings")," page of ",(0,o.kt)("strong",{parentName:"p"},"adding-actor"),". If your default options now look like this, then it worked!:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"New run defaults",src:n(94501).Z,width:"1726",height:"704"})),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"There is so much more you can do with the Apify client than just running actors, updating actors, and downloading dataset items. The purpose of this lesson was just to get you comfortable using the client in your own projects, as it is the absolute best developer tool for integrating the Apify platform with an external system."),(0,o.kt)("p",null,"For a more in-depth understanding of the Apify API client, give these a quick lookover:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs-v2.apify.com/client-js",target:"_blank",rel:"noopener"},"API client for JavaScript")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs-v2.apify.com/client-python",target:"_blank",rel:"noopener"},"API client for Python"))),(0,o.kt)("h2",{id:"next"},"Next up"),(0,o.kt)("p",null,"Now that you're familiar and a bit more comfortable with the Apify platform, you're ready to start deploying your code to Apify! In the ",(0,o.kt)("a",{parentName:"p",href:"/academy/deploying-your-code",target:null,rel:null},"next section"),", you'll learn how to take any project written in any programming language and turn it into an actor."))}f.isMDXComponent=!0},85162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),r=n(86010);const o="tabItem_Ymn6";function l(e){var t=e.children,n=e.hidden,l=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(87462),r=n(67294),o=n(86010),l=n(12466),i=n(16550),s=n(91980),u=n(67392),c=n(50012);function p(e){return function(e){return r.Children.map(e,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function d(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:p(n);return function(e){var t=(0,u.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function m(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function h(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,o=(0,i.k6)(),l=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:a});return[(0,s._X)(l),(0,r.useCallback)((function(e){if(l){var t=new URLSearchParams(o.location.search);t.set(l,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[l,o])]}function f(e){var t,n,a,o,l=e.defaultValue,i=e.queryString,s=void 0!==i&&i,u=e.groupId,p=d(e),f=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var r=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:l,tabValues:p})})),g=f[0],y=f[1],k=h({queryString:s,groupId:u}),b=k[0],v=k[1],N=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),n=(0,c.Nk)(t),a=n[0],o=n[1],[a,(0,r.useCallback)((function(e){t&&o.set(e)}),[t,o])]),w=N[0],T=N[1],I=function(){var e=null!=b?b:w;return m({value:e,tabValues:p})?e:null}();return(0,r.useEffect)((function(){I&&y(I)}),[I]),{selectedValue:g,selectValue:(0,r.useCallback)((function(e){if(!m({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);y(e),v(e),T(e)}),[v,T,p]),tabValues:p}}var g=n(72389);const y="tabList__CuJ",k="tabItem_LNqP";function b(e){var t=e.className,n=e.block,i=e.selectedValue,s=e.selectValue,u=e.tabValues,c=[],p=(0,l.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==i&&(p(t),s(a))},m=function(e){var t,n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var a,r=c.indexOf(e.currentTarget)+1;n=null!=(a=c[r])?a:c[0];break;case"ArrowLeft":var o,l=c.indexOf(e.currentTarget)-1;n=null!=(o=c[l])?o:c[c.length-1]}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((function(e){var t=e.value,n=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:function(e){return c.push(e)},onKeyDown:m,onClick:d},l,{className:(0,o.Z)("tabs__item",k,null==l?void 0:l.className,{"tabs__item--active":i===t})}),null!=n?n:t)})))}function v(e){var t=e.lazy,n=e.children,a=e.selectedValue;if(t){var o=n.find((function(e){return e.props.value===a}));return o?(0,r.cloneElement)(o,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})})))}function N(e){var t=f(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",y)},r.createElement(b,(0,a.Z)({},e,t)),r.createElement(v,(0,a.Z)({},e,t)))}function w(e){var t=(0,g.Z)();return r.createElement(N,(0,a.Z)({key:String(t)},e))}},94501:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/new-defaults-5c654ba15fa6e919e518c56a49e6463e.webp"},53554:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/run-info-a0a7508da0b52ba2ea4b541e84ce6950.webp"}}]);