"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[3884],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,p=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,y=d["".concat(p,".").concat(m)]||d[m]||u[m]||s;return r?n.createElement(y,i(i({ref:t},l),{},{components:r})):n.createElement(y,i({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,i=new Array(s);i[0]=d;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var c=2;c<s;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},45184:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var n=r(87462),o=r(63366),s=(r(67294),r(3905)),i=["components"],a={title:"Using man-in-the-middle proxy to intercept requests in Puppeteer",description:"This article demonstrates how to setup a reliable interception of HTTP requests in headless Chrome / Puppeteer using a local proxy.",sidebar_position:16.1,slug:"/node-js/using-proxy-to-intercept-requests-puppeteer"},p=void 0,c={unversionedId:"tutorials/node_js/using_proxy_to_intercept_requests_puppeteer",id:"tutorials/node_js/using_proxy_to_intercept_requests_puppeteer",title:"Using man-in-the-middle proxy to intercept requests in Puppeteer",description:"This article demonstrates how to setup a reliable interception of HTTP requests in headless Chrome / Puppeteer using a local proxy.",source:"@site/sources/academy/tutorials/node_js/using_proxy_to_intercept_requests_puppeteer.md",sourceDirName:"tutorials/node_js",slug:"/node-js/using-proxy-to-intercept-requests-puppeteer",permalink:"/academy/node-js/using-proxy-to-intercept-requests-puppeteer",draft:!1,editUrl:"https://github.com/apify/apify-docs-v2/edit/master/sources/academy/tutorials/node_js/using_proxy_to_intercept_requests_puppeteer.md",tags:[],version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1675941697,formattedLastUpdatedAt:"Feb 9, 2023",sidebarPosition:16.1,frontMatter:{title:"Using man-in-the-middle proxy to intercept requests in Puppeteer",description:"This article demonstrates how to setup a reliable interception of HTTP requests in headless Chrome / Puppeteer using a local proxy.",sidebar_position:16.1,slug:"/node-js/using-proxy-to-intercept-requests-puppeteer"},sidebar:"academy",previous:{title:"Filter out blocked proxies using sessions",permalink:"/academy/node-js/filter-blocked-requests-using-sessions"},next:{title:"Block requests in Puppeteer",permalink:"/academy/node-js/block-requests-puppeteer"}},l={},u=[],d={toc:u};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,s.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Sometimes you may need to intercept (or maybe block) requests in headless Chrome / Puppeteer, but ",(0,s.kt)("inlineCode",{parentName:"p"},"page.setRequestInterception()")," \xa0is not 100% reliable when the request is started in a new window."),(0,s.kt)("p",null,"One possible way to intercept these requests is to use a man-in-the-middle (MITM) proxy, i.e. a proxy server that can intercept and modify HTTP requests, even those over HTTPS. In this example, we're going to use ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/joeferner/node-http-mitm-proxy",target:"_blank",rel:"noopener"},"https://github.com/joeferner/node-http-mitm-proxy"),", since it has all the tools that we need."),(0,s.kt)("p",null,"First we set up the MITM proxy:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const Proxy = require('http-mitm-proxy');\nconst Promise = require('bluebird');\nconst { promisify } = require('util');\n\nconst { exec } = require('child_process');\n\nconst execPromise = promisify(exec);\n\nconst wait = timeout => new Promise(resolve => setTimeout(resolve, timeout));\n\nconst setupProxy = async (port) => {\n\xa0 // Setup chromium certs directory\n\xa0 // WARNING: this only works in debian docker images\n\xa0 // modify it for any other use cases or local usage.\n\xa0 await execPromise('mkdir -p $HOME/.pki/nssdb');\n\xa0 await execPromise('certutil -d sql:$HOME/.pki/nssdb -N');\n\xa0 const proxy = Proxy();\n\xa0 proxy.use(Proxy.wildcard);\n\xa0 proxy.use(Proxy.gunzip);\n\xa0 return new Promise((resolve, reject) => {\n\xa0 \xa0 proxy.listen({ port, silent: true }, (err) => {\n\xa0 \xa0 \xa0 if (err) return reject(err);\n\xa0 \xa0 \xa0 // Add CA certificate to chromium and return initialize proxy object\n\xa0 \xa0 \xa0 execPromise('certutil -d sql:$HOME/.pki/nssdb -A -t \"C,,\" -n mitm-ca -i ./.http-mitm-proxy/certs/ca.pem')\n\xa0 \xa0 \xa0 \xa0 .then(() => resolve(proxy))\n\xa0 \xa0 \xa0 \xa0 .catch(reject);\n\xa0 \xa0 });\n\xa0 });\n}\n")),(0,s.kt)("p",null,"Then we'll need a Docker image that has the ",(0,s.kt)("inlineCode",{parentName:"p"},"certutil")," utility. Here is an ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/apifytech/act-proxy-intercept-request/blob/master/Dockerfile",target:"_blank",rel:"noopener"},"example of a Dockerfile")," that can create such an image and is based on the ",(0,s.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/apify/actor-node-chrome/",target:"_blank",rel:"noopener"},"apify/actor-node-chrome")," image that contains Puppeteer."),(0,s.kt)("p",null,"Now we need to specify how the proxy shall handle the intercepted requests:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// Setup blocking of requests in proxy\nconst proxyPort = 8000;\nconst proxy = setupProxy(proxyPort);\nproxy.onRequest((context, callback) => {\n\xa0 \xa0if (blockRequests) {\n\xa0 \xa0 \xa0const request = context.clientToProxyRequest;\n\xa0 \xa0 \xa0// Log out blocked requests\n\xa0 \xa0 \xa0console.log('Blocked request:', request.headers.host, request.url);\n\n// Close the connection with custom content\n\xa0 \xa0 \xa0context.proxyToClientResponse.end('Blocked');\n\xa0 \xa0 \xa0return;\n\xa0 \xa0}\n\xa0 \xa0return callback();\n});\n")),(0,s.kt)("p",null,"The final step is to let Puppeteer use the local proxy:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// Launch puppeteer with local proxy\nconst browser = await puppeteer.launch({\n\xa0 \xa0 args: [ '--no-sandbox', `--proxy-server=localhost:${proxyPort}` ]\n});\n")),(0,s.kt)("p",null,"And we're done! By adjusting the ",(0,s.kt)("inlineCode",{parentName:"p"},"blockRequests")," variable, you can allow or block any request initiated through Puppeteer."),(0,s.kt)("p",null,"Here is a GitHub repository with a full example and all necessary files: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/apifytech/actor-example-proxy-intercept-request",target:"_blank",rel:"noopener"},"https://github.com/apifytech/actor-example-proxy-intercept-request")),(0,s.kt)("p",null,"If you have any questions, feel free to contact us in the chat."),(0,s.kt)("p",null,"Happy intercepting!"))}m.isMDXComponent=!0}}]);