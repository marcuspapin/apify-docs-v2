"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[1038],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>m});var r=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var u=r.createContext({}),l=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=l(t.components);return r.createElement(u.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,u=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),d=l(n),m=o,g=d["".concat(u,".").concat(m)]||d[m]||c[m]||a;return n?r.createElement(g,i(i({ref:e},p),{},{components:n})):r.createElement(g,i({ref:e},p))}));function m(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var u in e)hasOwnProperty.call(e,u)&&(s[u]=e[u]);s.originalType=t,s.mdxType="string"==typeof t?t:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2886:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>u,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],s={title:"Continuous integration",description:"Learn how to integrate your actors by setting up automated builds, deploys, and testing for your actors using GitHub Actions or Bitbucket Pipelines.",slug:"/actors/development/continuous-integration"},u="Continuous integration for actors",l={unversionedId:"actors/development/continuous_integration",id:"actors/development/continuous_integration",title:"Continuous integration",description:"Learn how to integrate your actors by setting up automated builds, deploys, and testing for your actors using GitHub Actions or Bitbucket Pipelines.",source:"@site/sources/platform/actors/development/continuous_integration.md",sourceDirName:"actors/development",slug:"/actors/development/continuous-integration",permalink:"/platform/actors/development/continuous-integration",draft:!1,tags:[],version:"current",lastUpdatedBy:"Jind\u0159ich B\xe4r",lastUpdatedAt:1675092364,formattedLastUpdatedAt:"Jan 30, 2023",frontMatter:{title:"Continuous integration",description:"Learn how to integrate your actors by setting up automated builds, deploys, and testing for your actors using GitHub Actions or Bitbucket Pipelines.",slug:"/actors/development/continuous-integration"},sidebar:"docs",previous:{title:"Builds",permalink:"/platform/actors/development/builds"},next:{title:"Environment variables",permalink:"/platform/actors/development/environment-variables"}},p={},c=[{value:"TL;DR",id:"tldr",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Set up automatic builds",id:"set-up-automatic-builds",level:2},{value:"Automate tests",id:"automate-tests",level:2},{value:"Run tests on push to Git",id:"run-tests-on-push-to-git",level:3},{value:"Monitoring",id:"monitoring",level:3},{value:"Ongoing testing",id:"ongoing-testing",level:3}],d={toc:c};function m(t){var e=t.components,s=(0,o.Z)(t,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,s,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"continuous-integration-for-actors"},"Continuous integration for actors"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Learn how to integrate your actors by setting up automated builds, deploys, and testing for your actors using GitHub Actions or Bitbucket Pipelines.")),(0,a.kt)("hr",null),(0,a.kt)("p",null,"If you have a project consisting of several actors, or even one actor that requires frequent updates, you may want to automate some part of the development process. Instead of manually pushing your code, building each actor, then testing it, you could perform the whole process whenever you run ",(0,a.kt)("inlineCode",{parentName:"p"},"git push"),"."),(0,a.kt)("p",null,"You can automate actor builds and tests using your Git repository's automated workflows like ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/features/actions",target:"_blank",rel:"noopener"},"GitHub Actions")," or ",(0,a.kt)("a",{parentName:"p",href:"https://bitbucket.org/product/features/pipelines",target:"_blank",rel:"noopener"},"Bitbucket Pipelines"),"."),(0,a.kt)("p",null,"This article will focus on GitHub, but ",(0,a.kt)("a",{parentName:"p",href:"https://help.apify.com/en/articles/1861038-setting-up-continuous-integration-for-apify-actors-on-bitbucket",target:"_blank",rel:"noopener"},"we also have a guide for Bitbucket"),"."),(0,a.kt)("h2",{id:"tldr"},"TL;DR"),(0,a.kt)("p",null,"Below is an example GitHub Actions workflow that will run your tests and build your actor every time you push your code to GitHub. This workflow supports both ",(0,a.kt)("strong",{parentName:"p"},"latest")," and ",(0,a.kt)("strong",{parentName:"p"},"beta")," builds. Copy the code into ",(0,a.kt)("strong",{parentName:"p"},"separate files")," in your actor repo's ",(0,a.kt)("strong",{parentName:"p"},".github/workflows")," directory: e.g. ",(0,a.kt)("strong",{parentName:"p"},".github/workflows/latest.yml")," and ",(0,a.kt)("strong",{parentName:"p"},".github/workflows/beta.yml"),"."),(0,a.kt)("p",null,"Each time you push to the ",(0,a.kt)("strong",{parentName:"p"},"main/master")," branch, a new ",(0,a.kt)("strong",{parentName:"p"},"latest")," version of your actor will be built. When you push to ",(0,a.kt)("strong",{parentName:"p"},"develop"),", a ",(0,a.kt)("strong",{parentName:"p"},"beta")," version will be built."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-marked-tabs"},'<marked-tab header="latest.yml" lang="yaml">\nname: Test and build latest version\non:\n  push:\n    branches:\n      - master\n      - main\njobs:\n  test:\n    runs-on: ubuntu-latest\n    steps:\n      # Install dependencies and run tests\n      - uses: actions/checkout@v2\n      - run: npm install && npm run test\n      # Build latest version\n      - uses: distributhor/workflow-webhook@v1\n        env:\n          webhook_url: ${{ secrets.LATEST_BUILD_URL }}\n          webhook_secret: ${{ secrets.APIFY_TOKEN }}\n</marked-tab>\n\n\n<marked-tab header="beta.yml" lang="yaml">\nname: Test and build beta version\non:\n  push:\n    branches:\n      - develop\njobs:\n  test:\n    runs-on: ubuntu-latest\n    steps:\n      # Install dependencies and run tests\n      - uses: actions/checkout@v2\n      - run: npm install && npm run test\n      # Build latest version\n      - uses: distributhor/workflow-webhook@v1\n        env:\n          webhook_url: ${{ secrets.BETA_BUILD_URL }}\n          webhook_secret: ${{ secrets.APIFY_TOKEN }}\n</marked-tab>\n')),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://help.apify.com/en/articles/1861038-setting-up-continuous-integration-for-apify-actors-on-bitbucket",target:"_blank",rel:"noopener"},"Find the Bitbucket version here"),"."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"You will need an ",(0,a.kt)("a",{parentName:"p",href:"/platform/tutorials/quick-start",target:null,rel:null},"actor"),", a GitHub repo for it, and your Apify token."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://console.apify.com/account#/integrations",target:"_blank",rel:"noopener"},"Find your Apify token in the Apify Console"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Apify token in app",src:n(94049).Z,width:"2290",height:"382"})),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://docs.github.com/en/actions/reference/encrypted-secrets#creating-encrypted-secrets-for-a-repository",target:"_blank",rel:"noopener"},"Add the token to GitHub secrets"),". Go to ",(0,a.kt)("strong",{parentName:"p"},"your repo > Settings > Secrets > New repository secret"),"."),(0,a.kt)("p",null,"Add the ",(0,a.kt)("a",{parentName:"p",href:"/api/v2#/reference/actors/build-collection/build-actor",target:null,rel:null},(0,a.kt)("strong",{parentName:"a"},"build actor")," API endpoint URL")," to GitHub secrets. Configure it to use your actor's ID and your API token."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cURL"},"https://api.apify.com/v2/acts/YOUR-ACTOR-NAME/builds?token=YOUR-TOKEN-HERE&version=0.0&tag=beta&waitForFinish=60\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Add build actor URL to secrets",src:n(21709).Z,width:"1810",height:"794"})),(0,a.kt)("h2",{id:"set-up-automatic-builds"},"Set up automatic builds"),(0,a.kt)("p",null,"Once you have your ",(0,a.kt)("a",{parentName:"p",href:"#prerequisites",target:null,rel:null},"prerequisites"),", you can start automating your builds. You can use ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Webhook",target:"_blank",rel:"noopener"},"webhooks")," or the ","[Apify CLI]","({{@link cli.md}}) (",(0,a.kt)("a",{parentName:"p",href:"https://help.apify.com/en/articles/1861038-setting-up-continuous-integration-for-apify-actors-on-bitbucket",target:"_blank",rel:"noopener"},"described in our Bitbucket guide"),") in your Git workflow."),(0,a.kt)("p",null,"To use webhooks, you can use the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/distributhor/workflow-webhook",target:"_blank",rel:"noopener"},"distributhor/workflow-webhook")," action, which uses the secrets described in the ",(0,a.kt)("a",{parentName:"p",href:"#prerequisites",target:null,rel:null},"prerequisites")," section."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"name: Build actor\n  - uses: distributhor/workflow-webhook@v1\n    env:\n      webhook_url: ${{ secrets.[VERSION]_BUILD_URL }}\n      webhook_secret: ${{ secrets.APIFY_TOKEN }}\n")),(0,a.kt)("p",null,"You can find your builds under the actor's ",(0,a.kt)("strong",{parentName:"p"},"Builds")," section."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"An actor&#39;s builds",src:n(14852).Z,width:"1948",height:"328"})),(0,a.kt)("h2",{id:"automate-tests"},"Automate tests"),(0,a.kt)("p",null,"Depending on your needs, you can test your actors ",(0,a.kt)("a",{parentName:"p",href:"#run-tests-on-push-to-git",target:null,rel:null},"on push to Git")," (using frameworks like ",(0,a.kt)("a",{parentName:"p",href:"https://jestjs.io/",target:"_blank",rel:"noopener"},"Jest")," or ",(0,a.kt)("a",{parentName:"p",href:"https://mochajs.org/",target:"_blank",rel:"noopener"},"Mocha"),") or ",(0,a.kt)("a",{parentName:"p",href:"#monitoring",target:null,rel:null},"set up ongoing monitoring")," of your actors' performance."),(0,a.kt)("h3",{id:"run-tests-on-push-to-git"},"Run tests on push to Git"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://help.apify.com/en/articles/1861038-setting-up-continuous-integration-for-apify-actors-on-bitbucket",target:"_blank",rel:"noopener"},"See our Bitbucket guide")," for an outline of running tests in a Git workflow. It works the same for GitHub and Bitbucket."),(0,a.kt)("p",null,"In brief, you need to write your tests using your tool of choice, add a script that executes the tests to the ",(0,a.kt)("strong",{parentName:"p"},"package.json")," file, and add the command to your Git workflow."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"# Install dependencies and run tests\n- uses: actions/checkout@v2\n- run: npm install && npm run test\n")),(0,a.kt)("h3",{id:"monitoring"},"Monitoring"),(0,a.kt)("p",null,"For most ongoing monitoring scenarios, we recommend using the ",(0,a.kt)("a",{parentName:"p",href:"https://apify.com/apify/monitoring",target:"_blank",rel:"noopener"},"Apify monitoring suite"),". It allows you to check your actor's run statuses, validate your results, and ",(0,a.kt)("a",{parentName:"p",href:"https://apify.com/apify/monitoring#notifications",target:"_blank",rel:"noopener"},"receive notifications via email or Slack"),"."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/platform/monitoring",target:null,rel:null},"Check out our text and video tutorials")," for various monitoring use cases."),(0,a.kt)("h3",{id:"ongoing-testing"},"Ongoing testing"),(0,a.kt)("p",null,"If you have advanced and specific requirements, you can create your own test actors, which you can ",(0,a.kt)("a",{parentName:"p",href:"/platform/schedules",target:null,rel:null},"schedule"),")."),(0,a.kt)("p",null,"If using this approach, you can set up notifications using the ",(0,a.kt)("strong",{parentName:"p"},"Send Mail")," (",(0,a.kt)("a",{parentName:"p",href:"https://apify.com/apify/send-mail",target:"_blank",rel:"noopener"},"apify/send-mail"),") and ",(0,a.kt)("strong",{parentName:"p"},"Send Slack Message")," (",(0,a.kt)("a",{parentName:"p",href:"https://apify.com/katerinahronik/slack-message",target:"_blank",rel:"noopener"},"katerinahronik/slack-message"),") actors."))}m.isMDXComponent=!0},21709:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/ci-add-build-url-b1d008e3713646e5a9c26de2dc84ba4c.png"},14852:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/ci-builds-0f82d5049343660d69af79c977f3eda4.png"},94049:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/ci-token-b623bba2addc8778a802a97aabda2ada.png"}}]);