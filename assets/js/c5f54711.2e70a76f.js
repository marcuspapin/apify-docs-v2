"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[4574],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>d});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=p(o),d=r,m=h["".concat(l,".").concat(d)]||h[d]||c[d]||a;return o?n.createElement(m,i(i({ref:t},u),{},{components:o})):n.createElement(m,i({ref:t},u))}));function d(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<a;p++)i[p]=o[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}h.displayName="MDXCreateElement"},14273:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var n=o(87462),r=o(63366),a=(o(67294),o(3905)),i=["components"],s={title:"II - Managing source code",description:"Learn how to manage your actor's source code more efficiently by integrating it with a Github repository. This is the standard on the Apify platform.",sidebar_position:6.2,slug:"/expert-scraping-with-apify/managing-source-code"},l="Managing source code",p={unversionedId:"platform/expert_scraping_with_apify/managing_source_code",id:"platform/expert_scraping_with_apify/managing_source_code",title:"II - Managing source code",description:"Learn how to manage your actor's source code more efficiently by integrating it with a Github repository. This is the standard on the Apify platform.",source:"@site/sources/academy/platform/expert_scraping_with_apify/managing_source_code.md",sourceDirName:"platform/expert_scraping_with_apify",slug:"/expert-scraping-with-apify/managing-source-code",permalink:"/academy/expert-scraping-with-apify/managing-source-code",draft:!1,editUrl:"https://github.com/apify/apify-docs-v2/edit/master/sources/academy/platform/expert_scraping_with_apify/managing_source_code.md",tags:[],version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1675941697,formattedLastUpdatedAt:"Feb 9, 2023",sidebarPosition:6.2,frontMatter:{title:"II - Managing source code",description:"Learn how to manage your actor's source code more efficiently by integrating it with a Github repository. This is the standard on the Apify platform.",sidebar_position:6.2,slug:"/expert-scraping-with-apify/managing-source-code"},sidebar:"academy",previous:{title:"I - Webhooks & advanced actor overview",permalink:"/academy/expert-scraping-with-apify/actors-webhooks"},next:{title:"III - Tasks & storage",permalink:"/academy/expert-scraping-with-apify/tasks-and-storage"}},u={},c=[{value:"Learning \ud83e\udde0",id:"learning",level:2},{value:"Knowledge check \ud83d\udcdd",id:"quiz",level:2},{value:"Our task",id:"our-task",level:2},{value:"Integrating Github source code",id:"integrating-github",level:2},{value:"Quick chat about code management",id:"code-management",level:2},{value:"Next up",id:"next",level:2}],h={toc:c};function d(e){var t=e.components,s=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"managing-source-code"},"Managing source code"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Learn how to manage your actor's source code more efficiently by integrating it with a Github repository. This is the standard on the Apify platform.")),(0,a.kt)("hr",null),(0,a.kt)("p",null,"In this brief lesson, we'll discuss how to better manage an actor's source code. Up 'til now, you've been developing your scripts locally, then pushing the code directly to the actor on the Apify platform; however, there is a much more optimal (and standard) way."),(0,a.kt)("h2",{id:"learning"},"Learning \ud83e\udde0"),(0,a.kt)("p",null,"Thus far, every time we've updated our code on the Apify platform, we've used the ",(0,a.kt)("inlineCode",{parentName:"p"},"apify push")," CLI command; however, this can be problematic for a few reasons - mainly because, if someone else wants to make a change to/maintain your code, they don't have access to it, as it is on your local machine."),(0,a.kt)("p",null,"If you're not yet familiar with Git, please get familiar with it through the ",(0,a.kt)("a",{parentName:"p",href:"https://git-scm.com/docs",target:"_blank",rel:"noopener"},"Git documentation"),", then take a quick moment to read about ",(0,a.kt)("a",{parentName:"p",href:"/platform/actors/development/source-code#github-integration",target:null,rel:null},"Github integration")," in the Apify docs."),(0,a.kt)("p",null,"Also, try to explore the ",(0,a.kt)("strong",{parentName:"p"},"Multifile editor")," in one of the actors you developed in the previous lessons before moving forward."),(0,a.kt)("h2",{id:"quiz"},"Knowledge check \ud83d\udcdd"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Do you have to rebuild an actor each time the source code is changed?"),(0,a.kt)("li",{parentName:"ol"},"In Git, what is the difference between ",(0,a.kt)("strong",{parentName:"li"},"pushing")," changes and making a ",(0,a.kt)("strong",{parentName:"li"},"pull request"),"?"),(0,a.kt)("li",{parentName:"ol"},"Based on your knowledge and experience, is the ",(0,a.kt)("inlineCode",{parentName:"li"},"apify push")," command worth using (in your opinion)?")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/academy/expert-scraping-with-apify/solutions/managing-source",target:null,rel:null},(0,a.kt)("strong",{parentName:"a"},"Answers"))),(0,a.kt)("h2",{id:"our-task"},"Our task"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This lesson's task is so quick and easy, we won't even be splitting this topic into two parts like the previous two topics!")),(0,a.kt)("p",null,"First, we must initialize a Github repository (you can use Gitlab if you'd like, but this lesson's examples will be using Github). Then, after pushing our main Amazon actor's code to the repo, we must switch our actor's source code to use the content of the Github repository instead."),(0,a.kt)("h2",{id:"integrating-github"},"Integrating Github source code"),(0,a.kt)("p",null,"First, let's create a repository. This can be done ",(0,a.kt)("a",{parentName:"p",href:"https://kbroman.org/github_tutorial/pages/init.html",target:"_blank",rel:"noopener"},"in a number of ways"),", but in this lesson we'll do it by creating the remote repository on Github's website:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Create a new Github repo",src:o(1575).Z,width:"356",height:"400"})),(0,a.kt)("p",null,"Then, we'll run the commands it tells us in our terminal (while within the ",(0,a.kt)("strong",{parentName:"p"},"demo-actor")," directory) to initialize the repository locally, then push all of the files to the remote one."),(0,a.kt)("p",null,"After you've created your repo, navigate on the Apify platform to the actor we called ",(0,a.kt)("strong",{parentName:"p"},"demo-actor"),". In the ",(0,a.kt)("strong",{parentName:"p"},"Source")," tab, click the dropdown menu under ",(0,a.kt)("strong",{parentName:"p"},"Source code")," and select ",(0,a.kt)("strong",{parentName:"p"},"Git repository"),". By default, this is set to ",(0,a.kt)("strong",{parentName:"p"},"Multiple source files"),", which is what we've been using so far."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Select source code location",src:o(60735).Z,width:"2530",height:"766"})),(0,a.kt)("p",null,"Then, go ahead and paste the link to your repository into the ",(0,a.kt)("strong",{parentName:"p"},"Git URL")," text field and click ",(0,a.kt)("strong",{parentName:"p"},"Save"),"."),(0,a.kt)("p",null,"The final step is to click on ",(0,a.kt)("strong",{parentName:"p"},"API")," in the top right corner of your actor's page:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"API button",src:o(16306).Z,width:"806",height:"254"})),(0,a.kt)("p",null,"And scroll through all of the links until you find the ",(0,a.kt)("strong",{parentName:"p"},"Build actor")," API endpoint. Copy this endpoint's URL, then head back over to your Github repository and navigate to ",(0,a.kt)("strong",{parentName:"p"},"Settings > Webhooks > Add webhook"),". The final thing to do is to paste the URL and save the webhook."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Adding a webhook to your Github repo",src:o(26791).Z,width:"900",height:"669"})),(0,a.kt)("p",null,"And you're done! \ud83c\udf89"),(0,a.kt)("h2",{id:"code-management"},"Quick chat about code management"),(0,a.kt)("p",null,"So, it was bit of overhead, but the good news is that you don't ever have to configure this stuff again for this actor. Now, every time the content of your ",(0,a.kt)("strong",{parentName:"p"},"main"),"/",(0,a.kt)("strong",{parentName:"p"},"master")," branch changes, the actor on the Apify platform will rebuild based off of the newest code."),(0,a.kt)("p",null,"A great way to think about it is that, by doing this, you are combining two steps into one! Normally, you'd have to do a ",(0,a.kt)("inlineCode",{parentName:"p"},"git push")," from your terminal in order to get the newest code onto Github, then run ",(0,a.kt)("inlineCode",{parentName:"p"},"apify push")," to push it to the platform."),(0,a.kt)("p",null,"It's also important to know that Github/Gitlab repository integration is standard practice. As projects grow, and the number of contributors and maintainers grows, it only makes sense to have a Github repository integrated with the project's actor. For the remainder of this course, all actors created will be integrated with a Github repository."),(0,a.kt)("h2",{id:"next"},"Next up"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/academy/expert-scraping-with-apify/tasks-and-storage",target:null,rel:null},"Next up"),", you'll learn about the different ways to store scraped data, as well as how to utilize a cool feature to run pre-configured actors."))}d.isMDXComponent=!0},16306:(e,t,o)=>{o.d(t,{Z:()=>n});const n="data:image/webp;base64,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"},26791:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/github-integration-c76d4762b63047b1b3c63c9663aa7ed0.webp"},1575:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/github-new-repo-1e45ed3d75fdb3672b6253b016e1186d.png"},60735:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/select-source-location-8b84116417145746c275463c49e24baa.png"}}]);