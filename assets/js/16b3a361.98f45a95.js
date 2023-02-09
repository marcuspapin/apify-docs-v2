"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[7093],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(r),h=o,d=m["".concat(s,".").concat(h)]||m[h]||u[h]||n;return r?a.createElement(d,i(i({ref:t},c),{},{components:r})):a.createElement(d,i({ref:t},c))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,i=new Array(n);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<n;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},17460:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var a=r(87462),o=r(63366),n=(r(67294),r(3905)),i=["components"],l={title:"Source code",description:"Learn all about an Apify actor's code. Compare deployment options, create a custom Dockerfile, set environment variables and metamorph your actor.",slug:"/actors/development/source-code"},s="[](#source-code)Source code",p={unversionedId:"actors/development/source_code",id:"actors/development/source_code",title:"Source code",description:"Learn all about an Apify actor's code. Compare deployment options, create a custom Dockerfile, set environment variables and metamorph your actor.",source:"@site/sources/platform/actors/development/source_code.md",sourceDirName:"actors/development",slug:"/actors/development/source-code",permalink:"/platform/actors/development/source-code",draft:!1,editUrl:"https://github.com/apify/apify-docs-v2/edit/master/sources/platform/actors/development/source_code.md",tags:[],version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1675963489,formattedLastUpdatedAt:"Feb 9, 2023",frontMatter:{title:"Source code",description:"Learn all about an Apify actor's code. Compare deployment options, create a custom Dockerfile, set environment variables and metamorph your actor.",slug:"/actors/development/source-code"},sidebar:"docs",previous:{title:"Secret input",permalink:"/platform/actors/development/secret-input"},next:{title:"State persistence",permalink:"/platform/actors/development/state-persistence"}},c={},u=[{value:"Multiple source files",id:"multiple-source-files",level:2},{value:"Git repository",id:"git-repository",level:2},{value:"Private repositories",id:"private-repositories",level:3},{value:"Zip file",id:"zip-file",level:2},{value:"GitHub Gist",id:"github-gist",level:2},{value:"Custom Dockerfile",id:"custom-dockerfile",level:2},{value:"GitHub integration",id:"github-integration",level:2},{value:"Custom environment variables",id:"custom-environment-variables",level:2},{value:"Versioning",id:"versioning",level:2},{value:"Local development",id:"local-development",level:2},{value:"Input schema",id:"input-schema",level:2},{value:"Metamorph",id:"metamorph",level:2}],m={toc:u};function h(e){var t=e.components,l=(0,o.Z)(e,i);return(0,n.kt)("wrapper",(0,a.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"source-code"},(0,n.kt)("a",{parentName:"h1",href:"#source-code",target:null,rel:null}),"Source code"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Learn all about an Apify actor's code. Compare deployment options, create a custom Dockerfile, set environment variables and metamorph your actor.")),(0,n.kt)("hr",null),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"Source type")," setting determines the location of the source code for the actor. It can have one of the following values: ",(0,n.kt)("a",{parentName:"p",href:"#multiple-source-files",target:null,rel:null},"Multiple source files"),", ",(0,n.kt)("a",{parentName:"p",href:"#git-repository",target:null,rel:null},"Git repository"),", ",(0,n.kt)("a",{parentName:"p",href:"#zip-file",target:null,rel:null},"Zip file")," or ",(0,n.kt)("a",{parentName:"p",href:"#github-gist",target:null,rel:null},"GitHub Gist"),"."),(0,n.kt)("h2",{id:"multiple-source-files"},"Multiple source files"),(0,n.kt)("p",null,"If the actor's source code requires the use of multiple files/directories, then it can be hosted on the Apify platform using this option. This is particularly useful when you need to add ",(0,n.kt)("a",{parentName:"p",href:"/platform/actors/development/source-code",target:null,rel:null},(0,n.kt)("strong",{parentName:"a"},"INPUT_SCHEMA.json"))," or ",(0,n.kt)("strong",{parentName:"p"},"README.md")," to your actor, or if you want to create your actor in a language other than JavaScript."),(0,n.kt)("p",null,"The only required file for multi-file is ",(0,n.kt)("strong",{parentName:"p"},"Dockerfile"),", and all other files depend on your Dockerfile settings. By default, Apify's custom NodeJS Dockerfile is used, which requires a ",(0,n.kt)("strong",{parentName:"p"},"main.js")," file containing your source code and a ",(0,n.kt)("strong",{parentName:"p"},"package.json")," file containing package configurations for ",(0,n.kt)("a",{parentName:"p",href:"https://www.npmjs.com/",target:"_blank",rel:"noopener"},"NPM"),"."),(0,n.kt)("p",null,"See ",(0,n.kt)("a",{parentName:"p",href:"/platform/actors/development/source-code",target:null,rel:null},"Custom Dockerfile")," and ","[base Docker images]","({{@link actors/development/base_docker_images.md}}) for more information about creating your own Dockerfile and using Apify's prepared base images."),(0,n.kt)("h2",{id:"git-repository"},(0,n.kt)("a",{parentName:"h2",href:"#git-repository",target:null,rel:null}),"Git repository"),(0,n.kt)("p",null,"If the actor's source code is hosted externally in a Git repository, it can consist of multiple files and directories, use its own ",(0,n.kt)("strong",{parentName:"p"},"Dockerfile")," to control the build process (see ",(0,n.kt)("a",{parentName:"p",href:"/platform/actors/development/source-code",target:null,rel:null},"Custom Dockerfile")," for details) and have a user description in store fetched from the ",(0,n.kt)("strong",{parentName:"p"},"README.md")," file. The location of the repository is specified by the ",(0,n.kt)("strong",{parentName:"p"},"Git URL")," setting, which can be an ",(0,n.kt)("strong",{parentName:"p"},"https"),", ",(0,n.kt)("strong",{parentName:"p"},"git")," or ",(0,n.kt)("strong",{parentName:"p"},"ssh")," URL."),(0,n.kt)("p",null,"To help you get started quickly, you can use the ",(0,n.kt)("a",{parentName:"p",href:"https://apify.com/apify/quick-start",target:"_blank",rel:"noopener"},"apify/quick-start")," actor which contains all the boilerplate necessary when creating a new actor hosted on Git. The source code is available on ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apify/actor-quick-start",target:"_blank",rel:"noopener"},"GitHub"),"."),(0,n.kt)("p",null,"To specify a Git branch or tag to check out, add a URL fragment to the URL. For example, to check out the ",(0,n.kt)("strong",{parentName:"p"},"develop")," branch, specify a URL such as ",(0,n.kt)("inlineCode",{parentName:"p"},"https://github.com/jancurn/some-actor.git#develop"),"."),(0,n.kt)("p",null,"Optionally, the second part of the fragment in the Git URL (separated by a colon) specifies the context directory for the Docker build. For example, ",(0,n.kt)("inlineCode",{parentName:"p"},"https://github.com/jancurn/some-actor.git#develop:some/dir")," will check out the ",(0,n.kt)("strong",{parentName:"p"},"develop")," branch and set ",(0,n.kt)("strong",{parentName:"p"},"some/dir")," as a context directory for the Docker build."),(0,n.kt)("p",null,"Note that you can easily set up an integration where the actor is automatically rebuilt on every commit to the Git repository. For more details, see ",(0,n.kt)("a",{parentName:"p",href:"/platform/actors/development/source-code",target:null,rel:null},"GitHub integration"),"."),(0,n.kt)("h3",{id:"private-repositories"},(0,n.kt)("a",{parentName:"h3",href:"#private-repositories",target:null,rel:null}),"Private repositories"),(0,n.kt)("p",null,"If your source code is hosted in a private Git repository then you need to configure deployment key. Deployment key is different for each actor and might be used only once at Git hosting of your choice (GitHub, Bitbucket, GitLab, etc.)."),(0,n.kt)("p",null,"To obtain the key click at the ",(0,n.kt)("strong",{parentName:"p"},"deployment key")," link under the ",(0,n.kt)("strong",{parentName:"p"},"Git URL")," text input and follow the instructions there."),(0,n.kt)("h2",{id:"zip-file"},(0,n.kt)("a",{parentName:"h2",href:"#zip-file",target:null,rel:null}),"Zip file"),(0,n.kt)("p",null,"The source code for the actor can also be located in a Zip archive hosted on an external URL. This option enables integration with arbitrary source code or continuous integration systems. Similarly, as with the ",(0,n.kt)("a",{parentName:"p",href:"/platform/actors/development/source-code",target:null,rel:null},"Git repository"),", the source code can consist of multiple files and directories, can contain a custom ",(0,n.kt)("strong",{parentName:"p"},"Dockerfile")," and the actor description is taken from ",(0,n.kt)("strong",{parentName:"p"},"README.md"),". If you don't use a ","[custom Dockerfile]","({{@link actors/development/source_code.md#custom-dockerfile}}), the root file of your application must be named ",(0,n.kt)("inlineCode",{parentName:"p"},"main.js"),"."),(0,n.kt)("h2",{id:"github-gist"},(0,n.kt)("a",{parentName:"h2",href:"#github-gist",target:null,rel:null}),"GitHub Gist"),(0,n.kt)("p",null,"Sometimes having a full Git repository or a hosted Zip file might be overly complicated for your small project, but you still want to have the source code in multiple files. In this case, you can simply put your source code into a ",(0,n.kt)("a",{parentName:"p",href:"https://gist.github.com/",target:"_blank",rel:"noopener"},"GitHub Gist"),". For example:"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://gist.github.com/jancurn/2dbe83fea77c439b1119fb3f118513e7",target:"_blank",rel:"noopener"},"https://gist.github.com/jancurn/2dbe83fea77c439b1119fb3f118513e7")),(0,n.kt)("p",null,"Then set the ",(0,n.kt)("strong",{parentName:"p"},"Source Type")," to ",(0,n.kt)("strong",{parentName:"p"},"GitHub Gist")," and paste the Gist URL as follows:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"GitHub Gist settings",src:r(95760).Z,width:"1962",height:"570"})),(0,n.kt)("p",null,"Note that the example actor is available in the Apify Store as ",(0,n.kt)("a",{parentName:"p",href:"https://apify.com/apify/example-github-gist",target:"_blank",rel:"noopener"},"apify/example-github-gist"),"."),(0,n.kt)("p",null,"Similarly, as with the ",(0,n.kt)("a",{parentName:"p",href:"/platform/actors/development/source-code",target:null,rel:null},"Git repository"),", the source code can consist of multiple files and directories, it can contain a custom ",(0,n.kt)("strong",{parentName:"p"},"Dockerfile")," and the actor description is taken from ",(0,n.kt)("strong",{parentName:"p"},"README.md"),". If you don't use a ","[custom Dockerfile]","({{@link actors/development/source_code.md#custom-dockerfile}}), the root file of your application must be named ",(0,n.kt)("inlineCode",{parentName:"p"},"main.js"),"."),(0,n.kt)("h2",{id:"custom-dockerfile"},(0,n.kt)("a",{parentName:"h2",href:"#custom-dockerfile",target:null,rel:null}),"Custom Dockerfile"),(0,n.kt)("p",null,"Internally, Apify uses Docker to build and run actors. To control the build of the actor, you can create a custom ",(0,n.kt)("strong",{parentName:"p"},"Dockerfile")," and either reference from the ",(0,n.kt)("inlineCode",{parentName:"p"},"dockerfile")," field in the actor's config in ",(0,n.kt)("strong",{parentName:"p"},".actor/actor.json"),", or store it in ",(0,n.kt)("strong",{parentName:"p"},".actor/Dockerfile")," or ",(0,n.kt)("strong",{parentName:"p"},"Dockerfile")," in the actor's root directory. These three sites are searched for in this order of preference. If the ",(0,n.kt)("strong",{parentName:"p"},"Dockerfile")," is missing, the system uses the following default:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-dockerfile"},'FROM apify/actor-node:16\n\nCOPY package*.json ./\n\nRUN npm --quiet set progress=false \\\n && npm install --only=prod --no-optional \\\n && echo "Installed NPM packages:" \\\n && (npm list --only=prod --no-optional --all || true) \\\n && echo "Node.js version:" \\\n && node --version \\\n && echo "NPM version:" \\\n && npm --version\n\nCOPY . ./\n')),(0,n.kt)("p",null,"For more information about Dockerfile syntax and commands, see the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/reference/builder/",target:"_blank",rel:"noopener"},"Dockerfile reference"),"."),(0,n.kt)("p",null,"Note that ",(0,n.kt)("inlineCode",{parentName:"p"},"apify/actor-node")," is a base Docker image provided by Apify. There are other base images with other features available. However, you can use arbitrary Docker images as the base for your actors, although using the Apify images has some performance advantages. See ",(0,n.kt)("a",{parentName:"p",href:"/platform/actors/development/base-docker-images",target:null,rel:null},"base Docker images")," for details."),(0,n.kt)("p",null,"By default, all Apify base Docker images with the Apify SDK and Crawlee start your Node.js application the same way as ",(0,n.kt)("strong",{parentName:"p"},"npm start")," does, i.e. by running the command specified in the ",(0,n.kt)("strong",{parentName:"p"},"package.json")," file under the ",(0,n.kt)("strong",{parentName:"p"},"scripts")," - ",(0,n.kt)("strong",{parentName:"p"},"start")," key. The default ",(0,n.kt)("strong",{parentName:"p"},"package.json")," file is similar to the following."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "description": "Anonymous actor on the Apify platform",\n    "version": "0.0.1",\n    "license": "UNLICENSED",\n    "main": "main.js",\n    "scripts": {\n        "start": "node main.js"\n    },\n    "dependencies": {\n        "apify": "^3.0.0",\n        "crawlee": "^3.0.0"\n    },\n    "repository": {}\n}\n')),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"This means that by default the system expects the source code to be in the ",(0,n.kt)("strong",{parentName:"em"},"main.js")," file.")," If you want to override this behavior, use a custom ",(0,n.kt)("strong",{parentName:"p"},"package.json")," and/or ",(0,n.kt)("strong",{parentName:"p"},"Dockerfile"),"."),(0,n.kt)("h2",{id:"github-integration"},(0,n.kt)("a",{parentName:"h2",href:"#github-integration",target:null,rel:null}),"GitHub integration"),(0,n.kt)("p",null,"If the source code of an actor is hosted in a ",(0,n.kt)("a",{parentName:"p",href:"#git-repository",target:null,rel:null},"Git repository"),", it is possible to set up integration so that on every push to the Git repository the actor is automatically rebuilt. For that, you only need to set up a webhook in your Git source control system that will invoke the ",(0,n.kt)("a",{parentName:"p",href:"/api/v2/#/reference/actors/build-collection/build-actor",target:null,rel:null},"Build actor")," API endpoint on every push to Git repository."),(0,n.kt)("p",null,"For example, for repositories on GitHub it can be done using the following steps. First, go to the actor detail page, open the ",(0,n.kt)("strong",{parentName:"p"},"API")," tab and copy the ",(0,n.kt)("strong",{parentName:"p"},"Build actor")," API endpoint URL. It should look something like this:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"https://api.apify.com/v2/acts/apify~hello-world/builds?token=<API_TOKEN>&version=0.1\n")),(0,n.kt)("p",null,"Then go to your GitHub repository, click ",(0,n.kt)("strong",{parentName:"p"},"Settings"),", select ",(0,n.kt)("strong",{parentName:"p"},"Webhooks")," tab and click ",(0,n.kt)("strong",{parentName:"p"},"Add webhook"),". Paste the API URL to the ",(0,n.kt)("strong",{parentName:"p"},"Payload URL")," as follows:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"GitHub integration",src:r(3532).Z,width:"900",height:"669"})),(0,n.kt)("p",null,"And that's it! Now your actor should automatically rebuild on every push to the GitHub repository."),(0,n.kt)("h2",{id:"custom-environment-variables"},(0,n.kt)("a",{parentName:"h2",href:"#custom-environment-variables",target:null,rel:null}),"Custom environment variables"),(0,n.kt)("p",null,"The actor owner can specify custom environment variables that are set to the actor's process during the run. Sensitive environment variables such as passwords or API tokens can be protected by setting the ",(0,n.kt)("strong",{parentName:"p"},"Secret")," option. With this option enabled, the value of the environment variable is encrypted and it will not be visible in the app or APIs. In addition, the value is redacted from actor logs to avoid the accidental leakage of sensitive data."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Custom environment variables",src:r(51031).Z,width:"2114",height:"394"})),(0,n.kt)("p",null,"Note that the custom environment variables are fixed during the build of the actor and cannot be changed later. See the ",(0,n.kt)("a",{parentName:"p",href:"/platform/actors/development/builds",target:null,rel:null},"Builds")," section for details."),(0,n.kt)("p",null,"To access environment variables in Node.js, use the ",(0,n.kt)("inlineCode",{parentName:"p"},"process.env")," object, for example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"console.log(process.env.SMTP_HOST);\n")),(0,n.kt)("p",null,"The actor runtime sets additional environment variables for the actor process during the run. See ",(0,n.kt)("a",{parentName:"p",href:"/platform/actors/development/environment-variables",target:null,rel:null},"Environment variables")," for details."),(0,n.kt)("p",null,"The environment variables can also be used for the build process. In this case, the variables are treated as ",(0,n.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/reference/builder/#arg",target:"_blank",rel:"noopener"},"Docker build arguments"),". This means that they should not be used for secrets and, in order to access them in Dockerfile, you have to use the ",(0,n.kt)("inlineCode",{parentName:"p"},"ARG variable_name")," instruction."),(0,n.kt)("h2",{id:"versioning"},(0,n.kt)("a",{parentName:"h2",href:"#versioning",target:null,rel:null}),"Versioning"),(0,n.kt)("p",null,"In order to enable active development, the actor can have multiple versions of the source code and associated settings, such as the ",(0,n.kt)("strong",{parentName:"p"},"Base image")," and ",(0,n.kt)("strong",{parentName:"p"},"Environment"),". Each version is denoted by a version number of the form ",(0,n.kt)("inlineCode",{parentName:"p"},"MAJOR.MINOR"),"; the version numbers should adhere to the ",(0,n.kt)("a",{parentName:"p",href:"http://semver.org/",target:"_blank",rel:"noopener"},"Semantic Versioning")," logic."),(0,n.kt)("p",null,"For example, the actor can have a production version ",(0,n.kt)("strong",{parentName:"p"},"1.1"),", a beta version ",(0,n.kt)("strong",{parentName:"p"},"1.2")," that contains new features but is still backwards compatible, and a development version ",(0,n.kt)("strong",{parentName:"p"},"2.0")," that contains breaking changes."),(0,n.kt)("p",null,"The versions of the actors are built and run separately. For details, see ",(0,n.kt)("a",{parentName:"p",href:"/platform/actors/development/builds",target:null,rel:null},"Build")," and ",(0,n.kt)("a",{parentName:"p",href:"/platform/actors/running",target:null,rel:null},"Running"),"."),(0,n.kt)("h2",{id:"local-development"},(0,n.kt)("a",{parentName:"h2",href:"#local-development",target:null,rel:null}),"Local development"),(0,n.kt)("p",null,"It is possible to develop actors locally on your computer and then only deploy them to the Apify cloud when they are ready. This is especially useful if you're using Git integration. See ",(0,n.kt)("a",{parentName:"p",href:"#git-repository",target:null,rel:null},"Git repository")," for more details. The boilerplate for creating an actor in a Git repository is available on ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apify/actor-quick-start",target:"_blank",rel:"noopener"},"GitHub"),"."),(0,n.kt)("p",null,"Unfortunately, not all features of the Apify platform can be emulated locally, therefore you might still need to let the ",(0,n.kt)("a",{parentName:"p",href:"https://docs-v2.apify.com/client-js/latest",target:"_blank",rel:"noopener"},(0,n.kt)("inlineCode",{parentName:"a"},"apify"))," NPM package use your API token in order to interact with the Apify platform. The simplest way to achieve that is by setting the ",(0,n.kt)("inlineCode",{parentName:"p"},"APIFY_TOKEN")," environment variable on your local development machine."),(0,n.kt)("h2",{id:"input-schema"},(0,n.kt)("a",{parentName:"h2",href:"#input-schema",target:null,rel:null}),"Input schema"),(0,n.kt)("p",null,"Actor source files may contain an input schema defining the input that actor accepts and the UI components used for input at Apify platform. Using input schema you can provide UI to actor users that is easy to use and also ensure that input of your actor is valid."),(0,n.kt)("p",null,"For more information on this topic see ",(0,n.kt)("a",{parentName:"p",href:"/platform/actors/input-schema",target:null,rel:null},"input schema documentation")," on a separate page."),(0,n.kt)("h2",{id:"metamorph"},(0,n.kt)("a",{parentName:"h2",href:"#metamorph",target:null,rel:null}),"Metamorph"),(0,n.kt)("p",null,"The metamorph operation transforms an actor run into a run of another actor with a new input. This feature is useful if you want to use another actor to finish the work of your current actor, instead of internally starting a new actor run and waiting for its finish. With metamorph, you can easily create new actors on top of existing ones, and give your users nicer input structure and user-interface for the final actor. For the users of your actors, the metamorph operation is completely transparent, they will just see your actor got the work done."),(0,n.kt)("p",null,"Internally, the system stops the Docker container corresponding to the actor run and starts a new container using a different Docker image. All the default storages are preserved and the new input is stored under the ",(0,n.kt)("strong",{parentName:"p"},"INPUT-METAMORPH-1")," key in the same default key-value store."),(0,n.kt)("p",null,"To make you actor compatible with metamorph operation use ",(0,n.kt)("inlineCode",{parentName:"p"},"Actor.getInput()")," instead of ",(0,n.kt)("inlineCode",{parentName:"p"},"Actor.getValue('INPUT')"),". This method will fetch the input using the right key ",(0,n.kt)("strong",{parentName:"p"},"INPUT-METAMORPH-1")," in a case of metamorphed run."),(0,n.kt)("p",null,"For example, imagine you have an actor that accepts a hotel URL on input and then internally uses the ",(0,n.kt)("a",{parentName:"p",href:"https://www.apify.com/apify/web-scraper",target:"_blank",rel:"noopener"},"apify/web-scraper")," actor to scrape all the hotel reviews. The metamorphing code would look as follows:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"import { Actor } from 'apify';\n\nawait Actor.init();\n\n// Get input of your actor.\nconst { hotelUrl } = await Actor.getInput();\n\n// Create input for apify/web-scraper\nconst newInput = {\n    startUrls: [{ url: hotelUrl }],\n    pageFunction: () => {\n        // Here you pass the page function that\n        // scrapes all the reviews ...\n    },\n    // ... and here would be all the additional\n    // input parameters.\n};\n\n// Transform the actor run to apify/web-scraper\n// with the new input.\nawait Actor.metamorph('apify/web-scraper', newInput);\n\n// The line here will never be reached, because the\n// actor run will be interrupted.\n\nawait Actor.exit();\n")))}h.isMDXComponent=!0},95760:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/gist-settings-b1260625f63f720411b57df30ffcd493.png"},3532:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/github-integration-2ee82ac772eb3280155b7027a4259528.png"},51031:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/source-env-vars-d868a9ade5a96562ca70d345254daf1d.png"}}]);