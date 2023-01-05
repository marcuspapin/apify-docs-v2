"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[5172],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>f});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(a),f=i,d=c["".concat(s,".").concat(f)]||c[f]||m[f]||r;return a?n.createElement(d,o(o({ref:t},u),{},{components:a})):n.createElement(d,o({ref:t},u))}));function f(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},97738:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var n=a(87462),i=a(63366),r=(a(67294),a(3905)),o=["components"],l={title:"Submitting a form with a file attachment",description:"Understand how to download a file, attach it to a form using a headless browser in Playwright or Puppeteer, then submit the form.",sidebar_position:4,slug:"/puppeteer-playwright/common-use-cases/submitting-a-form-with-a-file-attachment"},s="Submitting a form with a file attachment",p={unversionedId:"puppeteer_playwright/common_use_cases/submitting_a_form_with_a_file_attachment",id:"puppeteer_playwright/common_use_cases/submitting_a_form_with_a_file_attachment",title:"Submitting a form with a file attachment",description:"Understand how to download a file, attach it to a form using a headless browser in Playwright or Puppeteer, then submit the form.",source:"@site/sources/academy/puppeteer_playwright/common_use_cases/submitting_a_form_with_a_file_attachment.md",sourceDirName:"puppeteer_playwright/common_use_cases",slug:"/puppeteer-playwright/common-use-cases/submitting-a-form-with-a-file-attachment",permalink:"/academy/puppeteer-playwright/common-use-cases/submitting-a-form-with-a-file-attachment",draft:!1,tags:[],version:"current",lastUpdatedBy:"Jind\u0159ich B\xe4r",lastUpdatedAt:1672930117,formattedLastUpdatedAt:"Jan 5, 2023",sidebarPosition:4,frontMatter:{title:"Submitting a form with a file attachment",description:"Understand how to download a file, attach it to a form using a headless browser in Playwright or Puppeteer, then submit the form.",sidebar_position:4,slug:"/puppeteer-playwright/common-use-cases/submitting-a-form-with-a-file-attachment"},sidebar:"defaultSidebar",previous:{title:"Downloading files",permalink:"/academy/puppeteer-playwright/common-use-cases/downloading-files"},next:{title:"Scraping iFrames",permalink:"/academy/puppeteer-playwright/common-use-cases/scraping-iframes"}},u={},m=[{value:" Downloading the file",id:"-downloading-the-file",level:2},{value:" Submitting the form",id:"-submitting-the-form",level:2}],c={toc:m};function f(e){var t=e.components,a=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"submitting-a-form-with-a-file-attachment"},"Submitting a form with a file attachment"),(0,r.kt)("p",null,"We can use Puppeteer or Playwright to simulate submitting the same way a human-operated browser would."),(0,r.kt)("h2",{id:"-downloading-the-file"},(0,r.kt)("a",{parentName:"h2",href:"#downloading-the-file",target:null,rel:null})," Downloading the file"),(0,r.kt)("p",null,"The first thing necessary is to download the file, which can be done using the ",(0,r.kt)("inlineCode",{parentName:"p"},"request-promise")," module. We will also be using the ",(0,r.kt)("inlineCode",{parentName:"p"},"fs/promises")," module to save it to the disk, so make sure they are included."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import * as fs from 'fs/promises';\nimport request from 'request-promise';\n")),(0,r.kt)("p",null,"The actual downloading is slightly different for text and binary files. For a text file, it can simply be done like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const fileData = await request('https://some-site.com/file.txt');\n")),(0,r.kt)("p",null,"For a binary data file, we need to provide an additional parameter so as not to interpret it as text:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const fileData = await request({\n    uri: 'https://some-site.com/file.pdf',\n    encoding: null\n});\n")),(0,r.kt)("p",null,"In this case, ",(0,r.kt)("inlineCode",{parentName:"p"},"fileData")," will be a ",(0,r.kt)("inlineCode",{parentName:"p"},"Buffer")," instead of a string."),(0,r.kt)("p",null,"To use the file in Puppeteer/Playwright, we need to save it to the disk. This can be done using the ",(0,r.kt)("inlineCode",{parentName:"p"},"fs/promises")," module."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"await fs.writeFile('./file.pdf', fileData);\n")),(0,r.kt)("h2",{id:"-submitting-the-form"},(0,r.kt)("a",{parentName:"h2",href:"#submitting-the-form",target:null,rel:null})," Submitting the form"),(0,r.kt)("p",null,"The first step necessary is to open the form page in Puppeteer. This can be done as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const browser = await puppeteer.launch();\nconst page = await browser.newPage();\nawait page.goto('https://some-site.com/file-upload.php');\n")),(0,r.kt)("p",null,"To fill in any necessary form inputs, we can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"page.type()")," function. This works even in cases when ",(0,r.kt)("inlineCode",{parentName:"p"},"elem.value = 'value'")," is not usable."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"await page.type('input[name=firstName]', 'John');\nawait page.type('input[name=surname]', 'Doe');\nawait page.type('input[name=email]', 'john.doe@mail.com');\n")),(0,r.kt)("p",null,"To add the file to the appropriate input, we first need to find it and then use the ",(0,r.kt)("a",{parentName:"p",href:"https://pptr.dev/next/api/puppeteer.elementhandle.uploadfile",target:"_blank",rel:"noopener"},(0,r.kt)("inlineCode",{parentName:"a"},"uploadFile()"))," function."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const fileInput = await page.$('input[type=file]');\nawait fileInput.uploadFile('./file.pdf');\n")),(0,r.kt)("p",null,"Now we can finally submit the form."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"await page.click('input[type=submit]');\n")))}f.isMDXComponent=!0}}]);