"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[1038],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),a=n(86010);const o="tabItem_Ymn6";function i(e){var t=e.children,n=e.hidden,i=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,i),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>N});var r=n(87462),a=n(67294),o=n(86010),i=n(12466),s=n(16550),u=n(91980),l=n(67392),c=n(50012);function p(e){return function(e){return a.Children.map(e,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function d(e){var t=e.values,n=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:p(n);return function(e){var t=(0,l.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function m(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function f(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId,o=(0,s.k6)(),i=function(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:r});return[(0,u._X)(i),(0,a.useCallback)((function(e){if(i){var t=new URLSearchParams(o.location.search);t.set(i,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[i,o])]}function g(e){var t,n,r,o,i=e.defaultValue,s=e.queryString,u=void 0!==s&&s,l=e.groupId,p=d(e),g=(0,a.useState)((function(){return function(e){var t,n=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:i,tabValues:p})})),h=g[0],b=g[1],k=f({queryString:u,groupId:l}),y=k[0],v=k[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:l}.groupId),n=(0,c.Nk)(t),r=n[0],o=n[1],[r,(0,a.useCallback)((function(e){t&&o.set(e)}),[t,o])]),N=w[0],_=w[1],T=function(){var e=null!=y?y:N;return m({value:e,tabValues:p})?e:null}();return(0,a.useEffect)((function(){T&&b(T)}),[T]),{selectedValue:h,selectValue:(0,a.useCallback)((function(e){if(!m({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);b(e),v(e),_(e)}),[v,_,p]),tabValues:p}}var h=n(72389);const b="tabList__CuJ",k="tabItem_LNqP";function y(e){var t=e.className,n=e.block,s=e.selectedValue,u=e.selectValue,l=e.tabValues,c=[],p=(0,i.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,n=c.indexOf(t),r=l[n].value;r!==s&&(p(t),u(r))},m=function(e){var t,n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var r,a=c.indexOf(e.currentTarget)+1;n=null!=(r=c[a])?r:c[0];break;case"ArrowLeft":var o,i=c.indexOf(e.currentTarget)-1;n=null!=(o=c[i])?o:c[c.length-1]}null==(t=n)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},l.map((function(e){var t=e.value,n=e.label,i=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:function(e){return c.push(e)},onKeyDown:m,onClick:d},i,{className:(0,o.Z)("tabs__item",k,null==i?void 0:i.className,{"tabs__item--active":s===t})}),null!=n?n:t)})))}function v(e){var t=e.lazy,n=e.children,r=e.selectedValue;if(t){var o=n.find((function(e){return e.props.value===r}));return o?(0,a.cloneElement)(o,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},n.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})})))}function w(e){var t=g(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",b)},a.createElement(y,(0,r.Z)({},e,t)),a.createElement(v,(0,r.Z)({},e,t)))}function N(e){var t=(0,h.Z)();return a.createElement(w,(0,r.Z)({key:String(t)},e))}},2886:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>g,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=n(74866),s=n(85162),u=["components"],l={title:"Continuous integration",description:"Learn how to integrate your actors by setting up automated builds, deploys, and testing for your actors using GitHub Actions or Bitbucket Pipelines.",slug:"/actors/development/continuous-integration"},c="Continuous integration for actors",p={unversionedId:"actors/development/continuous_integration",id:"actors/development/continuous_integration",title:"Continuous integration",description:"Learn how to integrate your actors by setting up automated builds, deploys, and testing for your actors using GitHub Actions or Bitbucket Pipelines.",source:"@site/sources/platform/actors/development/continuous_integration.md",sourceDirName:"actors/development",slug:"/actors/development/continuous-integration",permalink:"/platform/actors/development/continuous-integration",draft:!1,tags:[],version:"current",lastUpdatedBy:"Jind\u0159ich B\xe4r",lastUpdatedAt:1675174133,formattedLastUpdatedAt:"Jan 31, 2023",frontMatter:{title:"Continuous integration",description:"Learn how to integrate your actors by setting up automated builds, deploys, and testing for your actors using GitHub Actions or Bitbucket Pipelines.",slug:"/actors/development/continuous-integration"},sidebar:"docs",previous:{title:"Builds",permalink:"/platform/actors/development/builds"},next:{title:"Environment variables",permalink:"/platform/actors/development/environment-variables"}},d={},m=[{value:"TL;DR",id:"tldr",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Set up automatic builds",id:"set-up-automatic-builds",level:2},{value:"Automate tests",id:"automate-tests",level:2},{value:"Run tests on push to Git",id:"run-tests-on-push-to-git",level:3},{value:"Monitoring",id:"monitoring",level:3},{value:"Ongoing testing",id:"ongoing-testing",level:3}],f={toc:m};function g(e){var t=e.components,l=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,r.Z)({},f,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"continuous-integration-for-actors"},"Continuous integration for actors"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Learn how to integrate your actors by setting up automated builds, deploys, and testing for your actors using GitHub Actions or Bitbucket Pipelines.")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"If you have a project consisting of several actors, or even one actor that requires frequent updates, you may want to automate some part of the development process. Instead of manually pushing your code, building each actor, then testing it, you could perform the whole process whenever you run ",(0,o.kt)("inlineCode",{parentName:"p"},"git push"),"."),(0,o.kt)("p",null,"You can automate actor builds and tests using your Git repository's automated workflows like ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/features/actions",target:"_blank",rel:"noopener"},"GitHub Actions")," or ",(0,o.kt)("a",{parentName:"p",href:"https://bitbucket.org/product/features/pipelines",target:"_blank",rel:"noopener"},"Bitbucket Pipelines"),"."),(0,o.kt)("p",null,"This article will focus on GitHub, but ",(0,o.kt)("a",{parentName:"p",href:"https://help.apify.com/en/articles/1861038-setting-up-continuous-integration-for-apify-actors-on-bitbucket",target:"_blank",rel:"noopener"},"we also have a guide for Bitbucket"),"."),(0,o.kt)("h2",{id:"tldr"},"TL;DR"),(0,o.kt)("p",null,"Below is an example GitHub Actions workflow that will run your tests and build your actor every time you push your code to GitHub. This workflow supports both ",(0,o.kt)("strong",{parentName:"p"},"latest")," and ",(0,o.kt)("strong",{parentName:"p"},"beta")," builds. Copy the code into ",(0,o.kt)("strong",{parentName:"p"},"separate files")," in your actor repo's ",(0,o.kt)("strong",{parentName:"p"},".github/workflows")," directory: e.g. ",(0,o.kt)("strong",{parentName:"p"},".github/workflows/latest.yml")," and ",(0,o.kt)("strong",{parentName:"p"},".github/workflows/beta.yml"),"."),(0,o.kt)("p",null,"Each time you push to the ",(0,o.kt)("strong",{parentName:"p"},"main/master")," branch, a new ",(0,o.kt)("strong",{parentName:"p"},"latest")," version of your actor will be built. When you push to ",(0,o.kt)("strong",{parentName:"p"},"develop"),", a ",(0,o.kt)("strong",{parentName:"p"},"beta")," version will be built."),(0,o.kt)(i.Z,{groupId:"main",mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"latest.yml",label:"latest.yml",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"name: Test and build latest version\non:\n  push:\n    branches:\n      - master\n      - main\njobs:\n  test:\n    runs-on: ubuntu-latest\n    steps:\n      # Install dependencies and run tests\n      - uses: actions/checkout@v2\n      - run: npm install && npm run test\n      # Build latest version\n      - uses: distributhor/workflow-webhook@v1\n        env:\n          webhook_url: ${{ secrets.LATEST_BUILD_URL }}\n          webhook_secret: ${{ secrets.APIFY_TOKEN }}\n\n"))),(0,o.kt)(s.Z,{value:"beta.yml",label:"beta.yml",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"name: Test and build beta version\non:\n  push:\n    branches:\n      - develop\njobs:\n  test:\n    runs-on: ubuntu-latest\n    steps:\n      # Install dependencies and run tests\n      - uses: actions/checkout@v2\n      - run: npm install && npm run test\n      # Build latest version\n      - uses: distributhor/workflow-webhook@v1\n        env:\n          webhook_url: ${{ secrets.BETA_BUILD_URL }}\n          webhook_secret: ${{ secrets.APIFY_TOKEN }}\n\n")))),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://help.apify.com/en/articles/1861038-setting-up-continuous-integration-for-apify-actors-on-bitbucket",target:"_blank",rel:"noopener"},"Find the Bitbucket version here"),"."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"You will need an ",(0,o.kt)("a",{parentName:"p",href:"/platform/tutorials/quick-start",target:null,rel:null},"actor"),", a GitHub repo for it, and your Apify token."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://console.apify.com/account#/integrations",target:"_blank",rel:"noopener"},"Find your Apify token in the Apify Console"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Apify token in app",src:n(94049).Z,width:"2290",height:"382"})),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.github.com/en/actions/reference/encrypted-secrets#creating-encrypted-secrets-for-a-repository",target:"_blank",rel:"noopener"},"Add the token to GitHub secrets"),". Go to ",(0,o.kt)("strong",{parentName:"p"},"your repo > Settings > Secrets > New repository secret"),"."),(0,o.kt)("p",null,"Add the ",(0,o.kt)("a",{parentName:"p",href:"/api/v2#/reference/actors/build-collection/build-actor",target:null,rel:null},(0,o.kt)("strong",{parentName:"a"},"build actor")," API endpoint URL")," to GitHub secrets. Configure it to use your actor's ID and your API token."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cURL"},"https://api.apify.com/v2/acts/YOUR-ACTOR-NAME/builds?token=YOUR-TOKEN-HERE&version=0.0&tag=beta&waitForFinish=60\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Add build actor URL to secrets",src:n(21709).Z,width:"1810",height:"794"})),(0,o.kt)("h2",{id:"set-up-automatic-builds"},"Set up automatic builds"),(0,o.kt)("p",null,"Once you have your ",(0,o.kt)("a",{parentName:"p",href:"#prerequisites",target:null,rel:null},"prerequisites"),", you can start automating your builds. You can use ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Webhook",target:"_blank",rel:"noopener"},"webhooks")," or the ","[Apify CLI]","({{@link cli.md}}) (",(0,o.kt)("a",{parentName:"p",href:"https://help.apify.com/en/articles/1861038-setting-up-continuous-integration-for-apify-actors-on-bitbucket",target:"_blank",rel:"noopener"},"described in our Bitbucket guide"),") in your Git workflow."),(0,o.kt)("p",null,"To use webhooks, you can use the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/distributhor/workflow-webhook",target:"_blank",rel:"noopener"},"distributhor/workflow-webhook")," action, which uses the secrets described in the ",(0,o.kt)("a",{parentName:"p",href:"#prerequisites",target:null,rel:null},"prerequisites")," section."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"name: Build actor\n  - uses: distributhor/workflow-webhook@v1\n    env:\n      webhook_url: ${{ secrets.[VERSION]_BUILD_URL }}\n      webhook_secret: ${{ secrets.APIFY_TOKEN }}\n")),(0,o.kt)("p",null,"You can find your builds under the actor's ",(0,o.kt)("strong",{parentName:"p"},"Builds")," section."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"An actor&#39;s builds",src:n(14852).Z,width:"1948",height:"328"})),(0,o.kt)("h2",{id:"automate-tests"},"Automate tests"),(0,o.kt)("p",null,"Depending on your needs, you can test your actors ",(0,o.kt)("a",{parentName:"p",href:"#run-tests-on-push-to-git",target:null,rel:null},"on push to Git")," (using frameworks like ",(0,o.kt)("a",{parentName:"p",href:"https://jestjs.io/",target:"_blank",rel:"noopener"},"Jest")," or ",(0,o.kt)("a",{parentName:"p",href:"https://mochajs.org/",target:"_blank",rel:"noopener"},"Mocha"),") or ",(0,o.kt)("a",{parentName:"p",href:"#monitoring",target:null,rel:null},"set up ongoing monitoring")," of your actors' performance."),(0,o.kt)("h3",{id:"run-tests-on-push-to-git"},"Run tests on push to Git"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://help.apify.com/en/articles/1861038-setting-up-continuous-integration-for-apify-actors-on-bitbucket",target:"_blank",rel:"noopener"},"See our Bitbucket guide")," for an outline of running tests in a Git workflow. It works the same for GitHub and Bitbucket."),(0,o.kt)("p",null,"In brief, you need to write your tests using your tool of choice, add a script that executes the tests to the ",(0,o.kt)("strong",{parentName:"p"},"package.json")," file, and add the command to your Git workflow."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"# Install dependencies and run tests\n- uses: actions/checkout@v2\n- run: npm install && npm run test\n")),(0,o.kt)("h3",{id:"monitoring"},"Monitoring"),(0,o.kt)("p",null,"For most ongoing monitoring scenarios, we recommend using the ",(0,o.kt)("a",{parentName:"p",href:"https://apify.com/apify/monitoring",target:"_blank",rel:"noopener"},"Apify monitoring suite"),". It allows you to check your actor's run statuses, validate your results, and ",(0,o.kt)("a",{parentName:"p",href:"https://apify.com/apify/monitoring#notifications",target:"_blank",rel:"noopener"},"receive notifications via email or Slack"),"."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/platform/monitoring",target:null,rel:null},"Check out our text and video tutorials")," for various monitoring use cases."),(0,o.kt)("h3",{id:"ongoing-testing"},"Ongoing testing"),(0,o.kt)("p",null,"If you have advanced and specific requirements, you can create your own test actors, which you can ",(0,o.kt)("a",{parentName:"p",href:"/platform/schedules",target:null,rel:null},"schedule")," to regularly run and validate your actors' results. For this, you can use our ",(0,o.kt)("strong",{parentName:"p"},"Actor Testing")," (",(0,o.kt)("a",{parentName:"p",href:"https://apify.com/pocesar/actor-testing",target:"_blank",rel:"noopener"},"pocesar/actor-testing"),") actor (",(0,o.kt)("a",{parentName:"p",href:"/platform/actors/development/testing-and-maintenance",target:null,rel:null},"see the guide"),")."),(0,o.kt)("p",null,"If using this approach, you can set up notifications using the ",(0,o.kt)("strong",{parentName:"p"},"Send Mail")," (",(0,o.kt)("a",{parentName:"p",href:"https://apify.com/apify/send-mail",target:"_blank",rel:"noopener"},"apify/send-mail"),") and ",(0,o.kt)("strong",{parentName:"p"},"Send Slack Message")," (",(0,o.kt)("a",{parentName:"p",href:"https://apify.com/katerinahronik/slack-message",target:"_blank",rel:"noopener"},"katerinahronik/slack-message"),") actors."))}g.isMDXComponent=!0},21709:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/ci-add-build-url-b1d008e3713646e5a9c26de2dc84ba4c.png"},14852:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/ci-builds-0f82d5049343660d69af79c977f3eda4.png"},94049:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/ci-token-b623bba2addc8778a802a97aabda2ada.png"}}]);