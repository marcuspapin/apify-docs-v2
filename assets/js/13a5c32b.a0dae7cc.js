"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[974],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,g=u["".concat(s,".").concat(d)]||u[d]||h[d]||r;return n?o.createElement(g,i(i({ref:t},c),{},{components:n})):o.createElement(g,i({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1991:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var o=n(87462),a=n(63366),r=(n(67294),n(3905)),i=["components"],l={title:"II - Managing source code",description:"Learn how to manage your actor's source code more efficiently by integrating it with a Github repository. This is the standard on the Apify platform.",sidebar_position:6.2,slug:"/expert-scraping-with-apify/managing-source-code"},s="[](#managing-source-code) Managing source code",p={unversionedId:"expert_scraping_with_apify/managing_source_code",id:"expert_scraping_with_apify/managing_source_code",title:"II - Managing source code",description:"Learn how to manage your actor's source code more efficiently by integrating it with a Github repository. This is the standard on the Apify platform.",source:"@site/sources/academy/expert_scraping_with_apify/managing_source_code.md",sourceDirName:"expert_scraping_with_apify",slug:"/expert-scraping-with-apify/managing-source-code",permalink:"/academy/expert-scraping-with-apify/managing-source-code",draft:!1,tags:[],version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1671540496,formattedLastUpdatedAt:"Dec 20, 2022",sidebarPosition:6.2,frontMatter:{title:"II - Managing source code",description:"Learn how to manage your actor's source code more efficiently by integrating it with a Github repository. This is the standard on the Apify platform.",sidebar_position:6.2,slug:"/expert-scraping-with-apify/managing-source-code"},sidebar:"defaultSidebar",previous:{title:"I - Webhooks & advanced actor overview",permalink:"/academy/expert-scraping-with-apify/actors-webhooks"},next:{title:"III - Tasks & storage",permalink:"/academy/expert-scraping-with-apify/tasks-and-storage"}},c={},u=[{value:" Learning \ud83e\udde0",id:"-learning-",level:2},{value:" Knowledge check \ud83d\udcdd",id:"-knowledge-check-",level:2},{value:" Our task",id:"-our-task",level:2},{value:" Integrating Github source code",id:"-integrating-github-source-code",level:2},{value:" Quick chat about code management",id:"-quick-chat-about-code-management",level:2},{value:" Next up",id:"-next-up",level:2}],h={toc:u};function d(e){var t=e.components,l=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},h,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"-managing-source-code"},(0,r.kt)("a",{parentName:"h1",href:"#managing-source-code",target:null,rel:null})," Managing source code"),(0,r.kt)("p",null,"In this brief lesson, we'll discuss how to better manage an actor's source code. Up 'til now, you've been developing your scripts locally, then pushing the code directly to the actor on the Apify platform; however, there is a much more optimal (and standard) way."),(0,r.kt)("h2",{id:"-learning-"},(0,r.kt)("a",{parentName:"h2",href:"#learning",target:null,rel:null})," Learning \ud83e\udde0"),(0,r.kt)("p",null,"Thus far, every time we've updated our code on the Apify platform, we've used the ",(0,r.kt)("inlineCode",{parentName:"p"},"apify push")," CLI command; however, this can be problematic for a few reasons - mainly because, if someone else wants to make a change to/maintain your code, they don't have access to it, as it is on your local machine."),(0,r.kt)("p",null,"If you're not yet familiar with Git, please get familiar with it through the ",(0,r.kt)("a",{parentName:"p",href:"https://git-scm.com/docs",target:"_blank",rel:"noopener"},"Git documentation"),", then take a quick moment to read about ",(0,r.kt)("a",{parentName:"p",href:"https://docs.apify.com/actors/development/source-code#github-integration",target:"_blank",rel:"noopener"},"Github integration")," in the Apify docs."),(0,r.kt)("p",null,"Also, try to explore the ",(0,r.kt)("strong",{parentName:"p"},"Multifile editor")," in one of the actors you developed in the previous lessons before moving forward."),(0,r.kt)("h2",{id:"-knowledge-check-"},(0,r.kt)("a",{parentName:"h2",href:"#quiz",target:null,rel:null})," Knowledge check \ud83d\udcdd"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Do you have to rebuild an actor each time the source code is changed?"),(0,r.kt)("li",{parentName:"ol"},"In Git, what is the difference between ",(0,r.kt)("strong",{parentName:"li"},"pushing")," changes and making a ",(0,r.kt)("strong",{parentName:"li"},"pull request"),"?"),(0,r.kt)("li",{parentName:"ol"},"Based on your knowledge and experience, is the ",(0,r.kt)("inlineCode",{parentName:"li"},"apify push")," command worth using (in your opinion)?")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/academy/expert-scraping-with-apify/solutions/managing-source",target:null,rel:null},(0,r.kt)("strong",{parentName:"a"},"Answers"))),(0,r.kt)("h2",{id:"-our-task"},(0,r.kt)("a",{parentName:"h2",href:"#our-task",target:null,rel:null})," Our task"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This lesson's task is so quick and easy, we won't even be splitting this topic into two parts like the previous two topics!")),(0,r.kt)("p",null,"First, we must initialize a Github repository (you can use Gitlab if you'd like, but this lesson's examples will be using Github). Then, after pushing our main Amazon actor's code to the repo, we must switch our actor's source code to use the content of the Github repository instead."),(0,r.kt)("h2",{id:"-integrating-github-source-code"},(0,r.kt)("a",{parentName:"h2",href:"#integrating-github",target:null,rel:null})," Integrating Github source code"),(0,r.kt)("p",null,"First, let's create a repository. This can be done ",(0,r.kt)("a",{parentName:"p",href:"https://kbroman.org/github_tutorial/pages/init.html",target:"_blank",rel:"noopener"},"in a number of ways"),", but in this lesson we'll do it by creating the remote repository on Github's website:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Create a new Github repo",src:n(15994).Z,width:"356",height:"400"})),(0,r.kt)("p",null,"Then, we'll run the commands it tells us in our terminal (while within the ",(0,r.kt)("strong",{parentName:"p"},"demo-actor")," directory) to initialize the repository locally, then push all of the files to the remote one."),(0,r.kt)("p",null,"After you've created your repo, navigate on the Apify platform to the actor we called ",(0,r.kt)("strong",{parentName:"p"},"demo-actor"),". In the ",(0,r.kt)("strong",{parentName:"p"},"Source")," tab, click the dropdown menu under ",(0,r.kt)("strong",{parentName:"p"},"Source code")," and select ",(0,r.kt)("strong",{parentName:"p"},"Git repository"),". By default, this is set to ",(0,r.kt)("strong",{parentName:"p"},"Multiple source files"),", which is what we've been using so far."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Select source code location",src:n(74600).Z,width:"2530",height:"766"})),(0,r.kt)("p",null,"Then, go ahead and paste the link to your repository into the ",(0,r.kt)("strong",{parentName:"p"},"Git URL")," text field and click ",(0,r.kt)("strong",{parentName:"p"},"Save"),"."),(0,r.kt)("p",null,"The final step is to click on ",(0,r.kt)("strong",{parentName:"p"},"API")," in the top right corner of your actor's page:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"API button",src:n(69760).Z,width:"806",height:"254"})),(0,r.kt)("p",null,"And scroll through all of the links until you find the ",(0,r.kt)("strong",{parentName:"p"},"Build actor")," API endpoint. Copy this endpoint's URL, then head back over to your Github repository and navigate to ",(0,r.kt)("strong",{parentName:"p"},"Settings > Webhooks > Add webhook"),". The final thing to do is to paste the URL and save the webhook."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Adding a webhook to your Github repo",src:n(50360).Z,width:"900",height:"669"})),(0,r.kt)("p",null,"And you're done! \ud83c\udf89"),(0,r.kt)("h2",{id:"-quick-chat-about-code-management"},(0,r.kt)("a",{parentName:"h2",href:"#code-management",target:null,rel:null})," Quick chat about code management"),(0,r.kt)("p",null,"So, it was bit of overhead, but the good news is that you don't ever have to configure this stuff again for this actor. Now, every time the content of your ",(0,r.kt)("strong",{parentName:"p"},"main"),"/",(0,r.kt)("strong",{parentName:"p"},"master")," branch changes, the actor on the Apify platform will rebuild based off of the newest code."),(0,r.kt)("p",null,"A great way to think about it is that, by doing this, you are combining two steps into one! Normally, you'd have to do a ",(0,r.kt)("inlineCode",{parentName:"p"},"git push")," from your terminal in order to get the newest code onto Github, then run ",(0,r.kt)("inlineCode",{parentName:"p"},"apify push")," to push it to the platform."),(0,r.kt)("p",null,"It's also important to know that Github/Gitlab repository integration is standard practice. As projects grow, and the number of contributors and maintainers grows, it only makes sense to have a Github repository integrated with the project's actor. For the remainder of this course, all actors created will be integrated with a Github repository."),(0,r.kt)("h2",{id:"-next-up"},(0,r.kt)("a",{parentName:"h2",href:"#next",target:null,rel:null})," Next up"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/academy/expert-scraping-with-apify/tasks-and-storage",target:null,rel:null},"Next up"),", you'll learn about the different ways to store scraped data, as well as how to utilize a cool feature to run pre-configured actors."))}d.isMDXComponent=!0},69760:(e,t,n)=>{n.d(t,{Z:()=>o});const o="data:image/webp;base64,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"},50360:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/github-integration-c76d4762b63047b1b3c63c9663aa7ed0.webp"},15994:(e,t,n)=>{n.d(t,{Z:()=>o});const o="data:image/webp;base64,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"},74600:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/select-source-location-263d67317581d6ed12d41bbfd52e4d8f.webp"}}]);