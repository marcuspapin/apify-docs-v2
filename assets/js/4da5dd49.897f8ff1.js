"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[120],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},59596:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],s={title:"Secret input",description:"Learn about making some actor input fields secret and encrypted. Ideal for passing passwords, API tokens or login cookies to actors.",slug:"/actors/development/secret-input"},p="[](#secret-input)Secret input",c={unversionedId:"actors/development/secret_input",id:"actors/development/secret_input",title:"Secret input",description:"Learn about making some actor input fields secret and encrypted. Ideal for passing passwords, API tokens or login cookies to actors.",source:"@site/sources/platform/actors/development/secret_input.md",sourceDirName:"actors/development",slug:"/actors/development/secret-input",permalink:"/platform/actors/development/secret-input",draft:!1,editUrl:"https://github.com/apify/apify-docs-v2/edit/master/sources/platform/actors/development/secret_input.md",tags:[],version:"current",lastUpdatedBy:"Jind\u0159ich B\xe4r",lastUpdatedAt:1676377646,formattedLastUpdatedAt:"Feb 14, 2023",frontMatter:{title:"Secret input",description:"Learn about making some actor input fields secret and encrypted. Ideal for passing passwords, API tokens or login cookies to actors.",slug:"/actors/development/secret-input"},sidebar:"docs",previous:{title:"Output schema",permalink:"/platform/actors/development/output-schema"},next:{title:"Source code",permalink:"/platform/actors/development/source-code"}},l={},u=[{value:"Setting an input field as secret",id:"setting-an-input-field-as-secret",level:2},{value:"Reading secret input fields",id:"reading-secret-input-fields",level:2},{value:"Encryption mechanism",id:"encryption-mechanism",level:2},{value:"Example actor",id:"example-actor",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"secret-input"},(0,o.kt)("a",{parentName:"h1",href:"#secret-input",target:null,rel:null}),"Secret input"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Learn about making some actor input fields secret and encrypted. Ideal for passing passwords, API tokens or login cookies to actors.")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"The secret input feature allows you to mark some actor input fields as secret, causing them to be encrypted when saving an input for an actor. The input can then be decrypted only inside the actor."),(0,o.kt)("h2",{id:"setting-an-input-field-as-secret"},"Setting an input field as secret"),(0,o.kt)("p",null,"To make an input field secret, just add a ",(0,o.kt)("inlineCode",{parentName:"p"},'"isSecret": true')," setting to the input field in the actor's ",(0,o.kt)("a",{parentName:"p",href:"/platform/actors/development/input-schema",target:null,rel:null},"input schema"),", like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    // ...\n    "properties": {\n        // ...\n        "password": {\n            "title": "Password",\n            "type": "string",\n            "description": "A secret, encrypted input field",\n            "editor": "textfield",\n            "isSecret": true\n        },\n        // ...\n    },\n    // ...\n}\n')),(0,o.kt)("p",null,"The editor for this input field will then turn into a secret input, and when you edit the field value, it will be stored encrypted."),(0,o.kt)("img",{src:"{{@asset actors/development/images/secret-input-editor.webp}}",alt:"Secret input editor",style:{width:"100%",maxWidth:"822px"}}),(0,o.kt)("p",null,"This is only available for ",(0,o.kt)("inlineCode",{parentName:"p"},"string")," inputs, and the editor type is limited to ",(0,o.kt)("inlineCode",{parentName:"p"},"textfield")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"textarea"),"."),(0,o.kt)("h2",{id:"reading-secret-input-fields"},"Reading secret input fields"),(0,o.kt)("p",null,"When you read the actor input through ",(0,o.kt)("inlineCode",{parentName:"p"},"Actor.getInput()"),", the encrypted fields are automatically decrypted, without any additional code needed (starting with the ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/apify",target:"_blank",rel:"noopener"},(0,o.kt)("inlineCode",{parentName:"a"},"apify")," package")," version 3.1.0)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"> await Actor.getInput();\n{\n    username: 'username',\n    password: 'password'\n}\n")),(0,o.kt)("p",null,"If you read the ",(0,o.kt)("inlineCode",{parentName:"p"},"INPUT")," key from the actor run's default key-value store directly, you will still get the original, encrypted input value."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"> await Actor.getValue('INPUT');\n{\n    username: 'username',\n    password: 'ENCRYPTED_VALUE:Hw/uqRMRNHmxXYYDJCyaQX6xcwUnVYQnH4fWIlKZL2Vhtq1rZmtoGXQSnhIXmF58+DjKlMZpTlK2zN3YUXk1ylzU6LfXyysOG/PISAfwm27FUgy3IfdgMyQggQ4MydLzdlzefX0mPRyixBviRcFhRTC+K7nK9lkATt3wJpj91YAZm104ZYkcd5KmsU2JX39vxN0A0lX53NjIenzs3wYPaPYLdjKIe+nqG9fHlL7kALyi7Htpy91ZgnQJ1s9saJRkKfWXvmLYIo5db69zU9dGCeJzUc0ca154O+KYYP7QTebJxqZNQsC8EH6sVMQU3W0qYKjuN8fUm1fRzyw/kKFacQ==:VfQd2ZbUt3S0RZ2ciywEWYVBbTTZOTiy'\n}\n")),(0,o.kt)("h2",{id:"encryption-mechanism"},"Encryption mechanism"),(0,o.kt)("p",null,"The encryption mechanism used for encrypting the secret input fields is the same dual encryption as in ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Pretty_Good_Privacy#/media/File:PGP_diagram.svg",target:"_blank",rel:"noopener"},"PGP"),"."),(0,o.kt)("p",null,"The secret input field is encrypted using a random key, using the ",(0,o.kt)("inlineCode",{parentName:"p"},"aes-256-gcm")," cipher, and then the key is encrypted using a 2048-bit RSA key.\nThe RSA key is unique for every user and actor combination, so no actor can decrypt input meant for other actor run of the same user, and no user can decrypt input of actor runs of a different user, but same actor."),(0,o.kt)("p",null,"The decryption keys are passed to the actor runs as environment variables, so the input decryption happens only inside of the actor run."),(0,o.kt)("h2",{id:"example-actor"},"Example actor"),(0,o.kt)("p",null,"If you want to test the secret input live, check out the ",(0,o.kt)("a",{parentName:"p",href:"https://console.apify.com/actors/O3S2UlSKzkcnFHRRA",target:"_blank",rel:"noopener"},"Example Secret Input")," actor in Apify Console.\nIf you want to dig in deeper, you can check out its ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apify/actor-example-secret-input",target:"_blank",rel:"noopener"},"source code")," on GitHub."))}m.isMDXComponent=!0}}]);