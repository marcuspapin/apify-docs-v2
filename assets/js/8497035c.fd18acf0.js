"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[8720],{3905:(e,t,s)=>{s.d(t,{Zo:()=>p,kt:()=>h});var r=s(67294);function a(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function n(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,r)}return s}function o(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?n(Object(s),!0).forEach((function(t){a(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):n(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function l(e,t){if(null==e)return{};var s,r,a=function(e,t){if(null==e)return{};var s,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)s=n[r],t.indexOf(s)>=0||(a[s]=e[s]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)s=n[r],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(a[s]=e[s])}return a}var c=r.createContext({}),i=function(e){var t=r.useContext(c),s=t;return e&&(s="function"==typeof e?e(t):o(o({},t),e)),s},p=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var s=e.components,a=e.mdxType,n=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=i(s),h=a,d=m["".concat(c,".").concat(h)]||m[h]||u[h]||n;return s?r.createElement(d,o(o({ref:t},p),{},{components:s})):r.createElement(d,o({ref:t},p))}));function h(e,t){var s=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=s.length,o=new Array(n);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var i=2;i<n;i++)o[i]=s[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,s)}m.displayName="MDXCreateElement"},72587:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var r=s(87462),a=s(63366),n=(s(67294),s(3905)),o=["components"],l={title:"CSS selectors",description:"Learn about CSS selectors. What they are, their types, why they are important for web scraping and how to use them in browser Console with JavaScript.",sidebar_position:8.4,slug:"/concepts/css-selectors"},c=void 0,i={unversionedId:"glossary/concepts/css_selectors",id:"glossary/concepts/css_selectors",title:"CSS selectors",description:"Learn about CSS selectors. What they are, their types, why they are important for web scraping and how to use them in browser Console with JavaScript.",source:"@site/sources/academy/glossary/concepts/css_selectors.md",sourceDirName:"glossary/concepts",slug:"/concepts/css-selectors",permalink:"/academy/concepts/css-selectors",draft:!1,editUrl:"https://github.com/apify/apify-docs-v2/edit/master/sources/academy/glossary/concepts/css_selectors.md",tags:[],version:"current",lastUpdatedBy:"Vlad Frangu",lastUpdatedAt:1676463577,formattedLastUpdatedAt:"Feb 15, 2023",sidebarPosition:8.4,frontMatter:{title:"CSS selectors",description:"Learn about CSS selectors. What they are, their types, why they are important for web scraping and how to use them in browser Console with JavaScript.",sidebar_position:8.4,slug:"/concepts/css-selectors"},sidebar:"academy",previous:{title:"Dynamic pages",permalink:"/academy/concepts/dynamic-pages"},next:{title:"Querying elements",permalink:"/academy/concepts/querying-css-selectors"}},p={},u=[{value:"Common types of CSS selectors",id:"common-types-of-css-selectors",level:2},{value:"Element selector",id:"element-selector",level:3},{value:"Class selector",id:"class-selector",level:3},{value:"ID selector",id:"id-selector",level:3},{value:"Attribute selector",id:"attribute-selector",level:3},{value:"Chaining selectors",id:"chaining-selectors",level:3},{value:"CSS selectors in web scraping",id:"css-selectors-in-web-scraping",level:2},{value:"Resources",id:"resources",level:2}],m={toc:u};function h(e){var t=e.components,s=(0,a.Z)(e,o);return(0,n.kt)("wrapper",(0,r.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"CSS selectors are patterns used to select ",(0,n.kt)("a",{parentName:"p",href:"/academy/concepts/html-elements",target:null,rel:null},"HTML elements")," on a web page. They are used in combination with CSS styles to change the appearance of web pages, and also in JavaScript to access and manipulate the elements on a web page."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Querying of CSS selectors with JavaScript is done using ",(0,n.kt)("a",{parentName:"p",href:"/academy/concepts/querying-css-selectors",target:null,rel:null},"query selector functions"),".")),(0,n.kt)("h2",{id:"common-types-of-css-selectors"},"Common types of CSS selectors"),(0,n.kt)("p",null,"There are several types of CSS selectors, some of the most common are:"),(0,n.kt)("h3",{id:"element-selector"},"Element selector"),(0,n.kt)("p",null,"This is used to select elements by their tag name. For example, to select all ",(0,n.kt)("inlineCode",{parentName:"p"},"<p>")," elements, you would use the ",(0,n.kt)("inlineCode",{parentName:"p"},"p")," selector."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"const paragraphs = document.querySelectorAll('p');\n")),(0,n.kt)("h3",{id:"class-selector"},"Class selector"),(0,n.kt)("p",null,"This is used to select elements by their class attribute. For example, to select all elements with the class of ",(0,n.kt)("inlineCode",{parentName:"p"},"highlight"),", you would use the ",(0,n.kt)("inlineCode",{parentName:"p"},".highlight")," selector."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"const highlightedElements = document.querySelectorAll('.highlight');\n")),(0,n.kt)("h3",{id:"id-selector"},"ID selector"),(0,n.kt)("p",null,"This is used to select an element by its ",(0,n.kt)("inlineCode",{parentName:"p"},"id")," attribute. For example, to select an element with the id of ",(0,n.kt)("inlineCode",{parentName:"p"},"header"),", you would use the ",(0,n.kt)("inlineCode",{parentName:"p"},"#header")," selector."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"const header = document.querySelector(`#header`);\n")),(0,n.kt)("h3",{id:"attribute-selector"},"Attribute selector"),(0,n.kt)("p",null,"This is used to select elements based on the value of an attribute. For example, to select all elements with the attribute ",(0,n.kt)("inlineCode",{parentName:"p"},"data-custom")," whose value is ",(0,n.kt)("inlineCode",{parentName:"p"},"yes"),", you would use the ",(0,n.kt)("inlineCode",{parentName:"p"},'[data-custom="yes"]')," selector."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"const customElements = document.querySelectorAll('[data-custom=\"yes\"]');\n")),(0,n.kt)("h3",{id:"chaining-selectors"},"Chaining selectors"),(0,n.kt)("p",null,"You can also chain multiple selectors together to select elements more precisely. For example, to select an element with the class ",(0,n.kt)("inlineCode",{parentName:"p"},"highlight")," that is inside a ",(0,n.kt)("inlineCode",{parentName:"p"},"<p>")," element, you would use the ",(0,n.kt)("inlineCode",{parentName:"p"},"p.highlight")," selector."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"const highlightedParagraph = document.querySelectorAll('p.highlight');\n")),(0,n.kt)("h2",{id:"css-selectors-in-web-scraping"},"CSS selectors in web scraping"),(0,n.kt)("p",null,"CSS selectors are important for web scraping because they allow you to target specific elements on a web page and extract their data. When scraping a web page, you typically want to extract specific pieces of information from the page, such as text, images, or links. CSS selectors allow you to locate these elements on the page, so you can extract the data that you need."),(0,n.kt)("p",null,"For example, if you wanted to scrape a list of all the titles of blog posts on a website, you could use a CSS selector to select all the elements that contain the title text. Once you have selected these elements, you can extract the text from them and use it for your scraping project."),(0,n.kt)("p",null,"Additionally, when web scraping it is important to understand the structure of the website and CSS selectors can help you to navigate it easily. With them, you can select specific elements and their children, siblings, or parent elements. This allows you to extract data that is nested within other elements, or to navigate through the page structure to find the data you need."),(0,n.kt)("h2",{id:"resources"},"Resources"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Find all the available CSS selectors and their syntax on the ",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors",target:"_blank",rel:"noopener"},"MDN CSS Selectors page"),".")))}h.isMDXComponent=!0}}]);