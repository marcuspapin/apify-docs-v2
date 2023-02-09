"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[3178],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),s=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(r),h=n,m=d["".concat(u,".").concat(h)]||d[h]||c[h]||l;return r?a.createElement(m,o(o({ref:t},p),{},{components:r})):a.createElement(m,o({ref:t},p))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},63940:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>g,frontMatter:()=>s,metadata:()=>c,toc:()=>h});var a=r(87462),n=r(63366),l=(r(67294),r(3905)),o=r(74866),i=r(85162),u=["components"],s={title:"Puppeteer & Playwright",description:"Learn in-depth how to use two of the most popular Node.js libraries for controlling a headless browser - Puppeteer and Playwright.",sidebar_position:2,category:"web scraping & automation",slug:"/puppeteer-playwright"},p="Puppeteer & Playwright course",c={unversionedId:"webscraping/puppeteer_playwright/index",id:"webscraping/puppeteer_playwright/index",title:"Puppeteer & Playwright",description:"Learn in-depth how to use two of the most popular Node.js libraries for controlling a headless browser - Puppeteer and Playwright.",source:"@site/sources/academy/webscraping/puppeteer_playwright/index.md",sourceDirName:"webscraping/puppeteer_playwright",slug:"/puppeteer-playwright",permalink:"/academy/puppeteer-playwright",draft:!1,editUrl:"https://github.com/apify/apify-docs-v2/edit/master/sources/academy/webscraping/puppeteer_playwright/index.md",tags:[],version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1675941697,formattedLastUpdatedAt:"Feb 9, 2023",sidebarPosition:2,frontMatter:{title:"Puppeteer & Playwright",description:"Learn in-depth how to use two of the most popular Node.js libraries for controlling a headless browser - Puppeteer and Playwright.",sidebar_position:2,category:"web scraping & automation",slug:"/puppeteer-playwright"},sidebar:"academy",previous:{title:"Best practices",permalink:"/academy/web-scraping-for-beginners/best-practices"},next:{title:"I - Launching a browser",permalink:"/academy/puppeteer-playwright/browser"}},d={},h=[{value:"Advantages of using a headless browser",id:"advantages-of-headless-browsers",level:2},{value:"Setup",id:"setup",level:2},{value:"Course overview",id:"course-overview",level:2},{value:"First up",id:"next",level:2}],m={toc:h};function g(e){var t=e.components,r=(0,n.Z)(e,u);return(0,l.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"puppeteer-playwright-course"},"Puppeteer & Playwright course"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Learn in-depth how to use two of the most popular Node.js libraries for controlling a headless browser - Puppeteer and Playwright.")),(0,l.kt)("hr",null),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://pptr.dev/",target:"_blank",rel:"noopener"},"Puppeteer")," and ",(0,l.kt)("a",{parentName:"p",href:"https://playwright.dev/",target:"_blank",rel:"noopener"},"Playwright")," are both libraries which allow you to write code in Node.js which automates a headless browser."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"A headless browser is just a regular browser like the one you're using right now, but without the user-interface. Because they don't have a UI, they generally perform faster as they don't render any visual content. For an in-depth understanding of headless browsers, check out ",(0,l.kt)("a",{parentName:"p",href:"https://blog.arhg.net/2009/10/what-is-headless-browser.html",target:"_blank",rel:"noopener"},"this short article")," about them.")),(0,l.kt)("p",null,"Both packages were developed by the same team and are very similar, which is why we have combined the Puppeteer course and the Playwright course into one super-course that shows code examples for both technologies. There are some small differences between the two, which will be highlighted in the examples."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Each lesson's activity will contain examples for both libraries, but we recommend using Playwright, as it is newer and has more features and better ",(0,l.kt)("a",{parentName:"p",href:"https://playwright.dev/docs/intro",target:"_blank",rel:"noopener"},"documentation"))),(0,l.kt)("h2",{id:"advantages-of-headless-browsers"},"Advantages of using a headless browser"),(0,l.kt)("p",null,"When automating a headless browser, you can do a whole lot more in comparison to just making HTTP requests for static content. In fact, you can programmatically do pretty much anything a human could do with a browser, such as clicking elements, taking screenshots, typing into text areas, etc."),(0,l.kt)("p",null,"Additionally, since the requests aren't static, ",(0,l.kt)("a",{parentName:"p",href:"/academy/concepts/dynamic-pages",target:null,rel:null},"dynamic content")," can be rendered and interacted with (or, data from the dynamic content can be scraped)."),(0,l.kt)("h2",{id:"setup"},"Setup"),(0,l.kt)("p",null,"For this course, we'll be jumping right into the features of these awesome libraries and expecting you to already have an environment set up. Here's how we set up our environment:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Make sure you've installed ",(0,l.kt)("a",{parentName:"li",href:"https://nodejs.org/en/",target:"_blank",rel:"noopener"},"Node.js")),(0,l.kt)("li",{parentName:"ol"},"Create a new folder called ",(0,l.kt)("strong",{parentName:"li"},"puppeteer-playwright")," (or whatever you want to call it)"),(0,l.kt)("li",{parentName:"ol"},"Run the command ",(0,l.kt)("inlineCode",{parentName:"li"},"npm init -y")," within your new folder to automatically initialize the project"),(0,l.kt)("li",{parentName:"ol"},"Add ",(0,l.kt)("inlineCode",{parentName:"li"},'"type": "module"')," to the ",(0,l.kt)("strong",{parentName:"li"},"package.json")," file"),(0,l.kt)("li",{parentName:"ol"},"Create a new file named ",(0,l.kt)("strong",{parentName:"li"},"index.js")),(0,l.kt)("li",{parentName:"ol"},"Install the library you're going to be using during this course:")),(0,l.kt)(o.Z,{groupId:"main",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"Install Playwright",label:"Install Playwright",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"npm install playwright\n\n"))),(0,l.kt)(i.Z,{value:"Install Puppeteer",label:"Install Puppeteer",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"npm install puppeteer\n\n")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"For a more in-depth guide on how to set up the basic environment we'll be using in this tutorial, check out the ",(0,l.kt)("a",{parentName:"p",href:"/academy/web-scraping-for-beginners/data-collection/computer-preparation",target:null,rel:null},(0,l.kt)("strong",{parentName:"a"},"Computer preparation"))," lesson in the ",(0,l.kt)("strong",{parentName:"p"},"Web scraping for beginners")," course")),(0,l.kt)("h2",{id:"course-overview"},"Course overview"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"/academy/puppeteer-playwright/browser",target:null,rel:null},"Launching a browser")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"/academy/puppeteer-playwright/page",target:null,rel:null},"Opening a page"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/academy/puppeteer-playwright/page/interacting-with-a-page",target:null,rel:null},"Interacting with a page")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/academy/puppeteer-playwright/page/waiting",target:null,rel:null},"Waiting for content & events")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/academy/puppeteer-playwright/page/page-methods",target:null,rel:null},"Page methods")))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"/academy/puppeteer-playwright/executing-scripts",target:null,rel:null},"Executing scripts"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/academy/puppeteer-playwright/executing-scripts/injecting-code",target:null,rel:null},"Injecting code")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/academy/puppeteer-playwright/executing-scripts/collecting-data",target:null,rel:null},"Extracting data")))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"/academy/puppeteer-playwright/reading-intercepting-requests",target:null,rel:null},"Reading & intercepting requests")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"/academy/puppeteer-playwright/proxies",target:null,rel:null},"Using proxies")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"/academy/puppeteer-playwright/browser-contexts",target:null,rel:null},"Creating multiple browser contexts")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"/academy/puppeteer-playwright/common-use-cases",target:null,rel:null},"Common use cases"))),(0,l.kt)("h2",{id:"next"},"First up"),(0,l.kt)("p",null,"In the ",(0,l.kt)("a",{parentName:"p",href:"/academy/puppeteer-playwright/browser",target:null,rel:null},"first lesson")," of this course, we'll be learning a bit about how to create and use the ",(0,l.kt)("strong",{parentName:"p"},"Browser")," object."))}g.isMDXComponent=!0},85162:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(67294),n=r(86010);const l="tabItem_Ymn6";function o(e){var t=e.children,r=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(l,o),hidden:r},t)}},74866:(e,t,r)=>{r.d(t,{Z:()=>N});var a=r(87462),n=r(67294),l=r(86010),o=r(12466),i=r(16550),u=r(91980),s=r(67392),p=r(50012);function c(e){return function(e){return n.Children.map(e,(function(e){if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function d(e){var t=e.values,r=e.children;return(0,n.useMemo)((function(){var e=null!=t?t:c(r);return function(e){var t=(0,s.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,r])}function h(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function m(e){var t=e.queryString,r=void 0!==t&&t,a=e.groupId,l=(0,i.k6)(),o=function(e){var t=e.queryString,r=void 0!==t&&t,a=e.groupId;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:r,groupId:a});return[(0,u._X)(o),(0,n.useCallback)((function(e){if(o){var t=new URLSearchParams(l.location.search);t.set(o,e),l.replace(Object.assign({},l.location,{search:t.toString()}))}}),[o,l])]}function g(e){var t,r,a,l,o=e.defaultValue,i=e.queryString,u=void 0!==i&&i,s=e.groupId,c=d(e),g=(0,n.useState)((function(){return function(e){var t,r=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!h({value:r,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+r+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return r}var n=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:o,tabValues:c})})),f=g[0],b=g[1],y=m({queryString:u,groupId:s}),w=y[0],v=y[1],k=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:s}.groupId),r=(0,p.Nk)(t),a=r[0],l=r[1],[a,(0,n.useCallback)((function(e){t&&l.set(e)}),[t,l])]),N=k[0],P=k[1],x=function(){var e=null!=w?w:N;return h({value:e,tabValues:c})?e:null}();return(0,n.useEffect)((function(){x&&b(x)}),[x]),{selectedValue:f,selectValue:(0,n.useCallback)((function(e){if(!h({value:e,tabValues:c}))throw new Error("Can't select invalid tab value="+e);b(e),v(e),P(e)}),[v,P,c]),tabValues:c}}var f=r(72389);const b="tabList__CuJ",y="tabItem_LNqP";function w(e){var t=e.className,r=e.block,i=e.selectedValue,u=e.selectValue,s=e.tabValues,p=[],c=(0,o.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,r=p.indexOf(t),a=s[r].value;a!==i&&(c(t),u(a))},h=function(e){var t,r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var a,n=p.indexOf(e.currentTarget)+1;r=null!=(a=p[n])?a:p[0];break;case"ArrowLeft":var l,o=p.indexOf(e.currentTarget)-1;r=null!=(l=p[o])?l:p[p.length-1]}null==(t=r)||t.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},t)},s.map((function(e){var t=e.value,r=e.label,o=e.attributes;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:function(e){return p.push(e)},onKeyDown:h,onClick:d},o,{className:(0,l.Z)("tabs__item",y,null==o?void 0:o.className,{"tabs__item--active":i===t})}),null!=r?r:t)})))}function v(e){var t=e.lazy,r=e.children,a=e.selectedValue;if(t){var l=r.find((function(e){return e.props.value===a}));return l?(0,n.cloneElement)(l,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},r.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a})})))}function k(e){var t=g(e);return n.createElement("div",{className:(0,l.Z)("tabs-container",b)},n.createElement(w,(0,a.Z)({},e,t)),n.createElement(v,(0,a.Z)({},e,t)))}function N(e){var t=(0,f.Z)();return n.createElement(k,(0,a.Z)({key:String(t)},e))}}}]);