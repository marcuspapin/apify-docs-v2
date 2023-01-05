"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[2270],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},l=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(a),m=n,g=u["".concat(s,".").concat(m)]||u[m]||h[m]||i;return a?r.createElement(g,o(o({ref:t},l),{},{components:a})):r.createElement(g,o({ref:t},l))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var p=2;p<i;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},73266:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>c,metadata:()=>p,toc:()=>h});var r=a(87462),n=a(63366),i=(a(67294),a(3905)),o=["components"],c={title:"Captchas",description:"Learn about the reasons a bot might be presented a captcha, the best ways to avoid captchas in the first place, and how to programmatically solve them.",sidebar_position:5,slug:"/anti-scraping/techniques/captchas"},s="[](#captchas) Captchas",p={unversionedId:"anti_scraping/techniques/captchas",id:"anti_scraping/techniques/captchas",title:"Captchas",description:"Learn about the reasons a bot might be presented a captcha, the best ways to avoid captchas in the first place, and how to programmatically solve them.",source:"@site/sources/academy/anti_scraping/techniques/captchas.md",sourceDirName:"anti_scraping/techniques",slug:"/anti-scraping/techniques/captchas",permalink:"/academy/anti-scraping/techniques/captchas",draft:!1,tags:[],version:"current",lastUpdatedBy:"Jind\u0159ich B\xe4r",lastUpdatedAt:1672923705,formattedLastUpdatedAt:"Jan 5, 2023",sidebarPosition:5,frontMatter:{title:"Captchas",description:"Learn about the reasons a bot might be presented a captcha, the best ways to avoid captchas in the first place, and how to programmatically solve them.",sidebar_position:5,slug:"/anti-scraping/techniques/captchas"},sidebar:"defaultSidebar",previous:{title:"Firewalls",permalink:"/academy/anti-scraping/techniques/firewalls"},next:{title:"Mitigation",permalink:"/academy/anti-scraping/mitigation"}},l={},h=[{value:" Dealing with captchas",id:"-dealing-with-captchas",level:2},{value:" Solving captchas",id:"-solving-captchas",level:2},{value:"Wrap up",id:"wrap-up",level:2}],u={toc:h};function m(e){var t=e.components,a=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"-captchas"},(0,i.kt)("a",{parentName:"h1",href:"#captchas",target:null,rel:null})," Captchas"),(0,i.kt)("p",null,"In general, a website will present a user (or scraper) a captcha for 2 main reasons:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The website always does captcha checks to access the desired content."),(0,i.kt)("li",{parentName:"ol"},"One of the website's anti-bot measures (or the ",(0,i.kt)("a",{parentName:"li",href:"/academy/anti-scraping/techniques/firewalls",target:null,rel:null},"WAF"),") has flagged the user as suspicious.")),(0,i.kt)("h2",{id:"-dealing-with-captchas"},(0,i.kt)("a",{parentName:"h2",href:"#dealing-with-captchas",target:null,rel:null})," Dealing with captchas"),(0,i.kt)("p",null,"When you've hit a captcha, your first thought should not be how to programmatically solve it. Rather, you should consider the factors as to why you received the captcha in the first place: your bot didn't appear enough like a real user to avoid being presented the challenge."),(0,i.kt)("p",null,"Have you expended all of the possible options to make your scraper appear more human-like? Are you:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Using ",(0,i.kt)("a",{parentName:"li",href:"/academy/anti-scraping/mitigation/proxies",target:null,rel:null},"proxies"),"?"),(0,i.kt)("li",{parentName:"ul"},"Making the request with the proper ",(0,i.kt)("a",{parentName:"li",href:"/academy/concepts/http-headers",target:null,rel:null},"headers"),"?"),(0,i.kt)("li",{parentName:"ul"},"Generating and using a custom ",(0,i.kt)("a",{parentName:"li",href:"/academy/anti-scraping/techniques/fingerprinting",target:null,rel:null},"browser fingerprint"),"?"),(0,i.kt)("li",{parentName:"ul"},"Trying different general scraping methods (HTTP scraping, browser scraping)? If you are using browser scraping, have you tried using a different browser?")),(0,i.kt)("h2",{id:"-solving-captchas"},(0,i.kt)("a",{parentName:"h2",href:"#solving-captchas",target:null,rel:null})," Solving captchas"),(0,i.kt)("p",null,"If you've tried everything you can to avoid being presented the captcha and are still facing this roadblock, there are methods to programmatically solve captchas."),(0,i.kt)("p",null,"There are tons of different types of captchas, but one of the most popular is Google's ",(0,i.kt)("a",{parentName:"p",href:"https://www.google.com/recaptcha/about/",target:"_blank",rel:"noopener"},(0,i.kt)("strong",{parentName:"a"},"reCAPTCHA")),"."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://miro.medium.com/max/1400/1*4NhFKMxr-qXodjYpxtiE0w.gif",alt:"Google's reCAPTCHA"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"reCAPTCHA"),"s can be solved using the ",(0,i.kt)("a",{parentName:"p",href:"https://apify.com/petr_cermak/anti-captcha-recaptcha",target:"_blank",rel:"noopener"},"Anti Captcha Recaptcha")," actor on the Apify platform (note that this method requires an account on ",(0,i.kt)("a",{parentName:"p",href:"https://anti-captcha.com",target:"_blank",rel:"noopener"},"anti-captcha.com"),")."),(0,i.kt)("p",null,"Another popular captcha is the ",(0,i.kt)("a",{parentName:"p",href:"https://www.geetest.com/en/demo",target:"_blank",rel:"noopener"},"Geetest slider captcha"),". You can find a guide for solving these types of captchas in Puppeteer ",(0,i.kt)("a",{parentName:"p",href:"https://scraperbox.com/blog/solving-a-geetest-slider-captcha-with-puppeteer",target:"_blank",rel:"noopener"},"here"),". Amazon's captcha can similarly also be solved programmatically."),(0,i.kt)("h2",{id:"wrap-up"},"Wrap up"),(0,i.kt)("p",null,"In this course, you've learned about some of the most common (and some of the most advanced) anti-scraping techniques. Keep in mind that as the web (and technology in general) evolves, this section of the ",(0,i.kt)("strong",{parentName:"p"},"Anti scraping")," course will evolve as well. In the ",(0,i.kt)("a",{parentName:"p",href:"/academy/anti-scraping/mitigation",target:null,rel:null},"next section"),", we'll be discussing how to mitigate the anti-scraping techniques you learned about in this section."))}m.isMDXComponent=!0}}]);