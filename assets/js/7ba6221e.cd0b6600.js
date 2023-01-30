"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[5077],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),f=a,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},23846:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>h,frontMatter:()=>s,metadata:()=>p,toc:()=>f});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=n(74866),l=n(85162),c=["components"],s={title:"Dockerfile",description:"Understand how to write a Dockerfile (Docker image blueprint) for your project so that it can be run within a Docker container on the Apify platform.",sidebar_position:4,slug:"/deploying-your-code/docker-file"},u="Dockerfile",p={unversionedId:"platform/deploying_your_code/docker_file",id:"platform/deploying_your_code/docker_file",title:"Dockerfile",description:"Understand how to write a Dockerfile (Docker image blueprint) for your project so that it can be run within a Docker container on the Apify platform.",source:"@site/sources/academy/platform/deploying_your_code/docker_file.md",sourceDirName:"platform/deploying_your_code",slug:"/deploying-your-code/docker-file",permalink:"/academy/deploying-your-code/docker-file",draft:!1,tags:[],version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1675095521,formattedLastUpdatedAt:"Jan 30, 2023",sidebarPosition:4,frontMatter:{title:"Dockerfile",description:"Understand how to write a Dockerfile (Docker image blueprint) for your project so that it can be run within a Docker container on the Apify platform.",sidebar_position:4,slug:"/deploying-your-code/docker-file"},sidebar:"academy",previous:{title:"Output schema",permalink:"/academy/deploying-your-code/output-schema"},next:{title:"Deploying",permalink:"/academy/deploying-your-code/deploying"}},d={},f=[{value:"Base images",id:"base-images",level:2},{value:"Writing the file",id:"writing-the-file",level:2},{value:"Examples",id:"examples",level:2},{value:"Next up",id:"next",level:2}],m={toc:f};function h(e){var t=e.components,n=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"dockerfile"},"Dockerfile"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Understand how to write a Dockerfile (Docker image blueprint) for your project so that it can be run within a Docker container on the Apify platform.")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Dockerfile")," is a file which gives the Apify platform (or Docker, more specifically) instructions on how to create an environment for your code to run in. Every actor must have a Dockerfile, as actors run in Docker containers."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Actors on the platform are always run in Docker containers; however, they can also be run in local Docker containers. This is not common practice though, as it requires more setup and a deeper understanding of Docker. For testing, it's best to just run the actor on the local OS (this requires you to have the underlying runtime installed, such as Node.js, Python, Rust, GO, etc).")),(0,o.kt)("h2",{id:"base-images"},"Base images"),(0,o.kt)("p",null,"If your project doesn\u2019t already contain a Dockerfile, don\u2019t worry! Apify offers ",(0,o.kt)("a",{parentName:"p",href:"https://docs-v2.apify.com/sdk-js/docs/guides/docker-images",target:"_blank",rel:"noopener"},"many base images")," that are optimized for building and running actors on the platform, which can be found ",(0,o.kt)("a",{parentName:"p",href:"https://hub.docker.com/u/apify",target:"_blank",rel:"noopener"},"here"),". When using a language for which Apify doesn't provide a base image, ",(0,o.kt)("a",{parentName:"p",href:"https://hub.docker.com/",target:"_blank",rel:"noopener"},"Docker Hub")," provides a ton of free Docker images for most use-cases, upon which you can create your own images."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Tip: You can see all of Apify's Docker images ",(0,o.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/apify/",target:"_blank",rel:"noopener"},"on DockerHub"),".")),(0,o.kt)("p",null,"At the base level, each Docker image contains a base operating system and usually also a programming language runtime (such as Node.js or Python). You can also find images with preinstalled libraries or just install them yourself during the build step."),(0,o.kt)("p",null,"Once you find the base image you need, you can add it as the initial ",(0,o.kt)("inlineCode",{parentName:"p"},"FROM")," statement:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-Dockerfile"},"FROM apify/actor-node:16\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"For syntax highlighting in your Dockerfiles, download the ",(0,o.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/docs/containers/overview#_installation",target:"_blank",rel:"noopener"},(0,o.kt)("strong",{parentName:"a"},"Docker")," VSCode extension"),".")),(0,o.kt)("h2",{id:"writing-the-file"},"Writing the file"),(0,o.kt)("p",null,"The rest of the Dockerfile is about copying the source code from the local filesystem into the container's filesystem, installing libraries, and setting the ",(0,o.kt)("inlineCode",{parentName:"p"},"RUN")," command (which falls back to the parent image)."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If you are not using a base image from Apify, then you should specify how to launch the source code of your actor with the ",(0,o.kt)("inlineCode",{parentName:"p"},"CMD")," instruction.")),(0,o.kt)("p",null,"Here's the Dockerfile for our Node.js example project's actor:"),(0,o.kt)(i.Z,{groupId:"main",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"Node.js Dockerfile",label:"Node.js Dockerfile",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-Dockerfile"},'FROM apify/actor-node:16\n\n# Second, copy just package.json and package-lock.json since they are the only files\n# that affect NPM install in the next step\nCOPY package*.json ./\n\n# Install NPM packages, skip optional and development dependencies to keep the\n# image small. Avoid logging too much and print the dependency tree for debugging\nRUN npm --quiet set progress=false \\\n && npm install --only=prod --no-optional \\\n && echo "Installed NPM packages:" \\\n && (npm list --all || true) \\\n && echo "Node.js version:" \\\n && node --version \\\n && echo "NPM version:" \\\n && npm --version\n\n# Next, copy the remaining files and directories with the source code.\n# Since we do this after NPM install, quick build will be really fast\n# for simple source file changes.\nCOPY . ./\n\n'))),(0,o.kt)(l.Z,{value:"Python Dockerfile",label:"Python Dockerfile",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-Dockerfile"},'# First, specify the base Docker image.\n# You can also use any other image from Docker Hub.\nFROM apify/actor-python:3.9\n\n# Second, copy just requirements.txt into the actor image,\n# since it should be the only file that affects "pip install" in the next step,\n# in order to speed up the build\nCOPY requirements.txt ./\n\n# Install the packages specified in requirements.txt,\n# Print the installed Python version, pip version\n# and all installed packages with their versions for debugging\nRUN echo "Python version:" \\\n && python --version \\\n && echo "Pip version:" \\\n && pip --version \\\n && echo "Installing dependencies from requirements.txt:" \\\n && pip install -r requirements.txt \\\n && echo "All installed Python packages:" \\\n && pip freeze\n\n# Next, copy the remaining files and directories with the source code.\n# Since we do this after installing the dependencies, quick build will be really fast\n# for most source file changes.\nCOPY . ./\n\n# Specify how to launch the source code of your actor.\n# By default, the main.py file is run\nCMD python3 main.py\n\n')))),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"The examples we just showed were for Node.js and Python, however, to drive home the fact that actors can be written in any language, here are some examples of some Dockerfiles for actors written in different programming languages:"),(0,o.kt)(i.Z,{groupId:"main",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"GO actor Dockerfile",label:"GO actor Dockerfile",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-Dockerfile"},'FROM golang:1.17.1-alpine\n\nWORKDIR /app\nCOPY . .\n\nRUN go mod download\n\nRUN go build -o /example-actor\nCMD ["/example-actor"]\n\n'))),(0,o.kt)(l.Z,{value:"Rust actor Dockerfile",label:"Rust actor Dockerfile",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-Dockerfile"},'# Image with prebuilt Rust. We use the newest 1.* version\n# https://hub.docker.com/_/rust\nFROM rust:1\n\n# We copy only package setup so we cache building all dependencies\nCOPY Cargo* ./\n\n# We need to have dummy main.rs file to be able to build\nRUN mkdir src && echo "fn main() {}" > src/main.rs\n\n# Build dependencies only\n# Since we do this before copying  the rest of the files,\n# the dependencies will be cached by Docker, allowing fast\n# build times for new code changes\nRUN cargo build --release\n\n# Delete dummy main.rs\nRUN rm -rf src\n\n# Copy rest of the files\nCOPY . ./\n\n# Build the source files\nRUN cargo build --release\n\nCMD ["./target/release/actor-example"]\n\n'))),(0,o.kt)(l.Z,{value:"Julia actor Dockerfile",label:"Julia actor Dockerfile",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-Dockerfile"},'FROM julia:1.7.1-alpine\n\nWORKDIR /app\nCOPY . .\n\nRUN julia install.jl\n\nCMD ["julia", "main.jl"]\n\n')))),(0,o.kt)("h2",{id:"next"},"Next up"),(0,o.kt)("p",null,"In the ",(0,o.kt)("a",{parentName:"p",href:"/academy/deploying-your-code/deploying",target:null,rel:null},"next lesson"),", we'll be push our code directly to the Apify platform, or create and integrate a new actor on the Apify platform with our project's GitHub repository."))}h.isMDXComponent=!0},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),a=n(86010);const o="tabItem_Ymn6";function i(e){var t=e.children,n=e.hidden,i=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,i),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>D});var r=n(87462),a=n(67294),o=n(86010),i=n(12466),l=n(16550),c=n(91980),s=n(67392),u=n(50012);function p(e){return function(e){return a.Children.map(e,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function d(e){var t=e.values,n=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:p(n);return function(e){var t=(0,s.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function f(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function m(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId,o=(0,l.k6)(),i=function(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:r});return[(0,c._X)(i),(0,a.useCallback)((function(e){if(i){var t=new URLSearchParams(o.location.search);t.set(i,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[i,o])]}function h(e){var t,n,r,o,i=e.defaultValue,l=e.queryString,c=void 0!==l&&l,s=e.groupId,p=d(e),h=(0,a.useState)((function(){return function(e){var t,n=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:i,tabValues:p})})),y=h[0],g=h[1],k=m({queryString:c,groupId:s}),b=k[0],v=k[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:s}.groupId),n=(0,u.Nk)(t),r=n[0],o=n[1],[r,(0,a.useCallback)((function(e){t&&o.set(e)}),[t,o])]),D=w[0],N=w[1],O=function(){var e=null!=b?b:D;return f({value:e,tabValues:p})?e:null}();return(0,a.useEffect)((function(){O&&g(O)}),[O]),{selectedValue:y,selectValue:(0,a.useCallback)((function(e){if(!f({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);g(e),v(e),N(e)}),[v,N,p]),tabValues:p}}var y=n(72389);const g="tabList__CuJ",k="tabItem_LNqP";function b(e){var t=e.className,n=e.block,l=e.selectedValue,c=e.selectValue,s=e.tabValues,u=[],p=(0,i.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,n=u.indexOf(t),r=s[n].value;r!==l&&(p(t),c(r))},f=function(e){var t,n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var r,a=u.indexOf(e.currentTarget)+1;n=null!=(r=u[a])?r:u[0];break;case"ArrowLeft":var o,i=u.indexOf(e.currentTarget)-1;n=null!=(o=u[i])?o:u[u.length-1]}null==(t=n)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},s.map((function(e){var t=e.value,n=e.label,i=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:function(e){return u.push(e)},onKeyDown:f,onClick:d},i,{className:(0,o.Z)("tabs__item",k,null==i?void 0:i.className,{"tabs__item--active":l===t})}),null!=n?n:t)})))}function v(e){var t=e.lazy,n=e.children,r=e.selectedValue;if(t){var o=n.find((function(e){return e.props.value===r}));return o?(0,a.cloneElement)(o,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},n.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})})))}function w(e){var t=h(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",g)},a.createElement(b,(0,r.Z)({},e,t)),a.createElement(v,(0,r.Z)({},e,t)))}function D(e){var t=(0,y.Z)();return a.createElement(w,(0,r.Z)({key:String(t)},e))}}}]);