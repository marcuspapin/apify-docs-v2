"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[8108],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},37579:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),i=["components"],l={title:"Downloading files",description:"Learn how to automatically download and save files to the disk using two of the most popular web automation libraries, Puppeteer and Playwright.",sidebar_position:3,slug:"/puppeteer-playwright/common-use-cases/downloading-files"},s="Downloading files",p={unversionedId:"puppeteer_playwright/common_use_cases/downloading_files",id:"puppeteer_playwright/common_use_cases/downloading_files",title:"Downloading files",description:"Learn how to automatically download and save files to the disk using two of the most popular web automation libraries, Puppeteer and Playwright.",source:"@site/sources/academy/puppeteer_playwright/common_use_cases/downloading_files.md",sourceDirName:"puppeteer_playwright/common_use_cases",slug:"/puppeteer-playwright/common-use-cases/downloading-files",permalink:"/academy/puppeteer-playwright/common-use-cases/downloading-files",draft:!1,tags:[],version:"current",lastUpdatedBy:"Jind\u0159ich B\xe4r",lastUpdatedAt:1672923705,formattedLastUpdatedAt:"Jan 5, 2023",sidebarPosition:3,frontMatter:{title:"Downloading files",description:"Learn how to automatically download and save files to the disk using two of the most popular web automation libraries, Puppeteer and Playwright.",sidebar_position:3,slug:"/puppeteer-playwright/common-use-cases/downloading-files"},sidebar:"defaultSidebar",previous:{title:"Paginating through results",permalink:"/academy/puppeteer-playwright/common-use-cases/paginating-through-results"},next:{title:"Submitting a form with a file attachment",permalink:"/academy/puppeteer-playwright/common-use-cases/submitting-a-form-with-a-file-attachment"}},c={},u=[{value:" Setting up a download path",id:"-setting-up-a-download-path",level:2},{value:" Intercepting and replicating a file download request",id:"-intercepting-and-replicating-a-file-download-request",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"downloading-files"},"Downloading files"),(0,r.kt)("p",null,"Downloading a file using Puppeteer can be tricky. On some systems, there can be issues with the usual file saving process that prevent you from doing it the easy way. However, there are different techniques that work (most of the time)."),(0,r.kt)("p",null,"These techniques are only necessary when we don't have a direct file link, which is usually the case when the file being downloaded is based on more complicated data export."),(0,r.kt)("h2",{id:"-setting-up-a-download-path"},(0,r.kt)("a",{parentName:"h2",href:"#setting-up-a-download-path",target:null,rel:null})," Setting up a download path"),(0,r.kt)("p",null,"Let's start with the easiest technique. This method tells the browser in what folder we want to download a file from Puppeteer after clicking on it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"await page._client.send('Page.setDownloadBehavior', {behavior: 'allow', downloadPath: './my-downloads'})\n")),(0,r.kt)("p",null,"We use the mysterious ",(0,r.kt)("inlineCode",{parentName:"p"},"_client")," API which gives us access to all the functions of the underlying developer console protocol. Basically, it extends Puppeteer's functionality. Then we can download the file by clicking on the button."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"await page.click('.export-button');\n")),(0,r.kt)("p",null,"Let's wait for one minute. In a real use case, you want to check the state of the file in the file system."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"await page.waitFor(60000);\n")),(0,r.kt)("p",null,"To extract the file from the file system into memory, we have to first find its name, and then we can read it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import fs from 'fs';\n\nconst fileNames = fs.readdirSync('./my-downloads');\n\n// Let's pick the first one\nconst fileData = fs.readFileSync(`./my-downloads/${fileNames[0]}`);\n")),(0,r.kt)("h2",{id:"-intercepting-and-replicating-a-file-download-request"},(0,r.kt)("a",{parentName:"h2",href:"#intercepting-a-file-download-request",target:null,rel:null})," Intercepting and replicating a file download request"),(0,r.kt)("p",null,"For this second option, we can trigger the file download, intercept the request going out, and then replicate it to get the actual data. First, we need to enable request interception. This is done using the following line of code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"await page.setRequestInterception(true);\n")),(0,r.kt)("p",null,"Next, we need to trigger the actual file export. We might need to fill in some form, select an exported file type, etc. In the end, it will look something like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"await page.click('.export-button');\n")),(0,r.kt)("p",null,"We don't need to await this promise since we'll be waiting for the result of this action anyway (the triggered request)."),(0,r.kt)("p",null,"The crucial part is intercepting the request that would result in downloading the file. Since the interception is already enabled, we just need to wait for the request to be sent."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const xRequest = await new Promise(resolve => {\n    page.on('request', interceptedRequest => {\n        interceptedRequest.abort(); //stop intercepting requests\n        resolve(interceptedRequest);\n    });\n});\n")),(0,r.kt)("p",null,"The last thing is to convert the intercepted Puppeteer request into a request-promise options object. We need to have the ",(0,r.kt)("inlineCode",{parentName:"p"},"request-promise")," package installed."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import request from 'request-promise';\n")),(0,r.kt)("p",null,"Since the request interception does not include cookies, we need to add them subsequently."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const options = {\n    encoding: null,\n    method: xRequest._method,\n    uri: xRequest._url,\n    body: xRequest._postData,\n    headers: xRequest._headers\n}\n\n// Add the cookies\nconst cookies = await page.cookies();\noptions.headers.Cookie = cookies.map(ck => ck.name + '=' + ck.value).join(';');\n\n// Resend the request\nconst response = await request(options);\n")),(0,r.kt)("p",null,"Now, the response contains the binary data of the downloaded file. It can be saved to the disk, uploaded somewhere, or ",(0,r.kt)("a",{parentName:"p",href:"/academy/puppeteer-playwright/common-use-cases/submitting-a-form-with-a-file-attachment",target:null,rel:null},"submitted with another form"),"."))}m.isMDXComponent=!0}}]);