"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[1129],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>g});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),o=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},d=function(e){var t=o(e.components);return r.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=o(a),g=n,u=c["".concat(l,".").concat(g)]||c[g]||h[g]||i;return a?r.createElement(u,p(p({ref:t},d),{},{components:a})):r.createElement(u,p({ref:t},d))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,p=new Array(i);p[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,p[1]=s;for(var o=2;o<i;o++)p[o]=a[o];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},30753:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>g,frontMatter:()=>s,metadata:()=>o,toc:()=>h});var r=a(87462),n=a(63366),i=(a(67294),a(3905)),p=["components"],s={title:"GraphQL scraping",description:"Dig into the topic of scraping APIs which use the latest and greatest API technology - GraphQL. GraphQL APIs are very different from regular REST APIs.",sidebar_position:4.2,slug:"/api-scraping/graphql-scraping"},l="[](#graphql-scraping) GraphQL scraping",o={unversionedId:"api_scraping/graphql_scraping/index",id:"api_scraping/graphql_scraping/index",title:"GraphQL scraping",description:"Dig into the topic of scraping APIs which use the latest and greatest API technology - GraphQL. GraphQL APIs are very different from regular REST APIs.",source:"@site/sources/academy/api_scraping/graphql_scraping/index.md",sourceDirName:"api_scraping/graphql_scraping",slug:"/api-scraping/graphql-scraping",permalink:"/academy/api-scraping/graphql-scraping",draft:!1,tags:[],version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1673462256,formattedLastUpdatedAt:"Jan 11, 2023",sidebarPosition:4.2,frontMatter:{title:"GraphQL scraping",description:"Dig into the topic of scraping APIs which use the latest and greatest API technology - GraphQL. GraphQL APIs are very different from regular REST APIs.",sidebar_position:4.2,slug:"/api-scraping/graphql-scraping"},sidebar:"defaultSidebar",previous:{title:"Handling pagination",permalink:"/academy/api-scraping/general-api-scraping/handling-pagination"},next:{title:"Modifying variables",permalink:"/academy/api-scraping/graphql-scraping/modifying-variables"}},d={},h=[{value:" How do I know if it&#39;s a GraphQL API?",id:"-how-do-i-know-if-its-a-graphql-api",level:2},{value:" Advantages &amp; disadvantages",id:"-advantages--disadvantages",level:2},{value:"Advantages",id:"advantages",level:3},{value:"Disadvantages",id:"disadvantages",level:3},{value:" Next up",id:"-next-up",level:2}],c={toc:h};function g(e){var t=e.components,s=(0,n.Z)(e,p);return(0,i.kt)("wrapper",(0,r.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"-graphql-scraping"},(0,i.kt)("a",{parentName:"h1",href:"#graphql-scraping",target:null,rel:null})," GraphQL scraping"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Dig into the topic of scraping APIs which use the latest and greatest API technology - GraphQL. GraphQL APIs are very different from regular REST APIs.")),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://graphql.org/",target:"_blank",rel:"noopener"},"GraphQL")," APIs different from the regular ",(0,i.kt)("a",{parentName:"p",href:"https://www.redhat.com/en/topics/api/what-is-a-rest-api",target:"_blank",rel:"noopener"},"REST"),"ful APIs you're likely familiar with, which means that different methods and tooling are used to scrape them. This course will teach you everything you need to know about GraphQL to scrape an API built with it."),(0,i.kt)("h2",{id:"-how-do-i-know-if-its-a-graphql-api"},(0,i.kt)("a",{parentName:"h2",href:"#graphql-endpoints",target:null,rel:null})," How do I know if it's a GraphQL API?"),(0,i.kt)("p",null,"In this section, we'll be scraping ",(0,i.kt)("a",{parentName:"p",href:"https://cheddar.com",target:"_blank",rel:"noopener"},"cheddar.com"),"'s GraphQL API. When you visit the website and make a search for anything while your ",(0,i.kt)("strong",{parentName:"p"},"Network Tab")," is open, you'll see a request that has been sent to the endpoint ",(0,i.kt)("strong",{parentName:"p"},"api.cheddar.com/graphql"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"GraphQL endpoint",src:a(70587).Z,width:"358",height:"130"})),(0,i.kt)("p",null,"As a rule of thumb, when the endpoint ends with ",(0,i.kt)("strong",{parentName:"p"},"/graphql")," and it's a ",(0,i.kt)("strong",{parentName:"p"},"POST")," request, it's a 99.99% bulletproof indicator that the target site is using GraphQL. If you want to be 100% certain though, taking a look at the request payload will most definitely give it away."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"GraphQL payload",src:a(744).Z,width:"505",height:"145"})),(0,i.kt)("p",null,"Every GraphQL payload will be a JSON object with a ",(0,i.kt)("strong",{parentName:"p"},"query")," property, and a ",(0,i.kt)("strong",{parentName:"p"},"variables")," property if any variables were provided. If you take a closer look at the full ",(0,i.kt)("strong",{parentName:"p"},"query")," property of this request, you'll notice that it's stringified GraphQL language content."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Taking a closer look at the payload",src:a(85648).Z,width:"858",height:"1014"})),(0,i.kt)("h2",{id:"-advantages--disadvantages"},(0,i.kt)("a",{parentName:"h2",href:"#advantages-disadvantages",target:null,rel:null})," Advantages & disadvantages"),(0,i.kt)("p",null,"We already discussed the advantages and disadvantages of API scraping in general in this course's introduction, but because GraphQL is such a different technology, scraping an API built with it comes with its own pros and cons."),(0,i.kt)("h3",{id:"advantages"},"Advantages"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"GraphQL allows you as the developer to choose which fields you'd like to be returned back to you. Not only does this leave you with only the data you want and no extra unwanted fields, but it is also easier on the target.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Allows access to data that is not readily available natively through the website.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Queries are heavily customizable due to features like ",(0,i.kt)("strong",{parentName:"p"},"fragments"),"."))),(0,i.kt)("h3",{id:"disadvantages"},"Disadvantages"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Though it's a fantastic technology with lots of awesome features, it is also more complex to understand.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"GraphQL ",(0,i.kt)("a",{parentName:"p",href:"/academy/api-scraping/graphql-scraping/introspection",target:null,rel:null},"introspection")," is disabled on many sites, which makes it more difficult to reap the full benefits of GraphQL."))),(0,i.kt)("h2",{id:"-next-up"},(0,i.kt)("a",{parentName:"h2",href:"#next",target:null,rel:null})," Next up"),(0,i.kt)("p",null,"This course section's ",(0,i.kt)("a",{parentName:"p",href:"/academy/api-scraping/graphql-scraping/modifying-variables",target:null,rel:null},"first lesson")," will be discussing how to customize GraphQL queries without ever having to write any GraphQL language."))}g.isMDXComponent=!0},70587:(e,t,a)=>{a.d(t,{Z:()=>r});const r="data:image/webp;base64,UklGRsoRAABXRUJQVlA4IL4RAABQUACdASpmAYIAPqlMoUwmJCMiJtLrGMAVCWdu3V9Q1kIFXg9QG2R8wHnC+dvvjW8u/5LJUPN3+E7XP7v4X+I72Jmk5b+rjUa+Vfdr+D/fvPb9ZvEv4Rf5nqBflX9H7+HY8Z//k/QF9sPqffHf2f969Rvy/+1f8H+x/AB/Kf6f/vPUD/N+D79w/1XsA/zv+v/9b/Hf4z4W/6j/6f6Hz0fU37XfAR/Ov7n1l/SSK/y/nYeGksEleAy+Astxqk6/lmusoRdVT3jkcQS+5Frceg2ddT6VkehphWSry02+wIbAQrlMvsQTDUzePeWW7wIgLXroR7iZtVIbPoRKmJ0l3f3SCHkN/UPpNr/BKsDscs+pDZeMn+iglMWLKz8kIXcoGQJy44tqlCK/BslT3mEfsE3IzTD3D2n8AyBy+5avORnfNNZ5T2E5zF1YswRqKFUQRnRCv7g4/QqkIqjBm5c8R7V+FJLe17/8F++BtRH51Bg2TfoSTFPWxAmeg2kb5ILmZUKCaspH8jmzqOgKvOXmaG1ayltKiZSEUfrrxOa0MmeWpoPAg1Q0cuNKyNFY44TV56y8ClaEMMzw1Pa6buze75UAQFO7iSqBZxPxduLXYAz9Hoqs3eHQsF0piD0a31n1HcHk/pYO7pFlx7PxvRMclqzNVfRZ/rtiQzzO2hW72m2vOB10kQY+zj1OgTmDii5tQC3S61gdXOWIcRVreVk3Uydyh78kZWYYmbZ283C4BBpgDaol42F26cl0OVAd+a2uBtXkS5MLFm6FwrSbCCjjutXbQCchLAQL8XQkg41YIlE2YtrZVUY+AltrHKa7146ueCmtKhJOG+rkxT1sYxMhodVT18JMvQlOul6rMwAA/r2gpLKuFoyDaoZ/RgC9pFvOy2JiucWiDxiKhbd6kAuGUTtB8h1NyNlSkw4AUV5DA17OieemuvLf+ub2GoDWcsiWBF5f2AycmGfU7QP+fdi9ux95rCKb5Wgvu4bg5eK4JkNGMeoC4II8ZOobHtFnRIZ2Wtig8ZnpbZDTbU2NmHMucDYwAXRl/PJb2HAD99uVT6GsxZypdPN/CiMGnFaIAsf5dOMoCbT1OLpHJKDCVrhcHXgI8/glfw4dSMb3QdRzjkodlhktHF1YzhQO25BIhHw6jG6aS+5igb19iA/ppuPt52zWIbGiTLiMflOO0+SuR1ltcalFYDtoQ3JszZF/3YBKFgEyI/v0wOPNJO9gyN9632bMmsm5008SnrJfhOe6qY86TexdCsAXkXAT9qWjm/Xt9/A9yS3TDqPGTa+I5Hlirfrz/NtxHJ3fTTCFOCLxKTX3EtRAuv77soOqWHgmDOhZM31oM/aZP97MWPQtnZ1OByre5TVHIV/Zm4Ad0/ezjbX2KxpF+us0VY/PqswvUJTL/zMrHjNYzHvJ9nkmb4ewE1RD2YYKYy/pV39ylkVuWI9F09MjGhJn38S49B7JxlLdcGO5TKOJREo2ZkfK9wGwPUhEKtq+7w1hQr/4txKHzHp0PN8Y6aoXUu99e1MqIowJ6RH7vu1UhS8EJ+oLMsHlTIkyjKz3TzrkLsM0JbFwW6gsQM5tQjbvqsPaJO6r1pLDTKR/tzxrxNiyLdR959iioWr9CL0v4Uq57ODfnXy1xgUIZ060MvXB7ZF7CBedHmX5S2YP77hDoo/g6xA0rHd1ywvhKX3HWinHWDmWe+ntDf+9oomANYHuLOZfWexyio02ShlQ/BiKDWU88so3hswi4NUPa9cvsHCMY92PcDMKISdC/iR9+d+SFFcTvSUnlpTag99eM4jQPwZwiPzEbu4SGt3eJFhUy5/2ZJzEeqM65OOMtPSFEoefVn1nU+kd+6OrBQzdDZXiKfa4YcbNR0mAnlkpTbja5AFr8Kl6mj+iAuUs4i5WFClTuz1712h5sY/1x5q5OXkRobfOwB0ugDRsH4pa4waGe//znl/oQujJxRq1tU2iMKaJQNaW/de/zCH65pehMe7sVF1rCRKiwGfCW8+OlUMIOK2KPARz4yn+/A8wkmlNsniJZXXJzK9bO4etCzn/UiAct3uscT6lIbzG4y+LEDTNHmgt8u1vA0GUJdhlC9/T6O/+w25g6tvHMVQeT92iXWyZ3uuZXf/cCQvHzVtTD/jk0JvMld+6yM1yVgeVn+Ru5llvh96v7RDszN2yjrYfi1SILbomgMwYToaJrYzMVH1d953ROkb7zKsOXpXbSlNSNa55HeXj8dJyTs5gfyFDCLdKVrcdzIkITnCLONHKg9d7TAuUKnMcWYCoZI1JflyIQwcvjAPhrVGpaMxGOWYzLpSeN+tpdY41EXOjkV5wTOgv5W/lfnX7P6DTtNVI5t6DRKOW5JQ2IFuRrS6qUEkpC1UVeXDgeFcB+27lOJM/TFf7SZOQOKcayecLqziS4mmvnoNU3zUID1QuAWZpV4sGrBGkdmG0sS5ZuCB+9MLGuxb6zLtXhwDSWj0Nu5kZsDNulfnb7RRqbBcmw2YvQh80PfWBHNTCfxsx2hpLH5/W3Y/b83gnSfcU7zAXjGu0M09m342WDnfFZtKuqOIxLN8UK3OnwMvGSWeZHUogvN2ijlrhcOwxheqYfnuO1bmERlHNwnzmlKYoCGrXGsHeS9qKdxQbVa8kFvDfQ6eWYl8fzfKHE6J4aR5+oSpKCwv0dbo0VqTXFAzc5MwEJVIcyhQFLmGRgEuE2EAAALwsxsHiNqOw69jlXM5vqm6C7jz14PnPviSoiNesQYvz7iC50KD2F2ZCX/ULxNVLw/CXYTZs4wyY5Kuzvj2X602nxn2AlvC4A/2yn3o/s+b31JX0TWbJdY6GPsfRl1QajVGA/Erwmt1KFV4lIDbnBDmERIDrknb9rChmSmMpU5KDcrTJJsuOihfreCCfQBrQtVNbKrQg38Ugq2nu4W8d8nGwcJBdBumR2QH59Dpg4WcM6z6QsflZ/0BHgw1dGFL6aNNuXZ2PoQsQ8EyhPRS2RWsIAABYMNH1vddxF1sSBoAt3wLv4EDM4Rzs56X3+q6vgnmfwKHNpVhr+itCHqWj8kcN72KSyJbTog23gyFvalxr4yaTt8tQOCDfGc7UTHYZ671BawhPXKZXQqTRRIxKEdc+3QJ8uh4n8T7240inzhwTmutTmV5YIhXhUMsHxyRwdzQtaVv5PDSdejLBZqpo0Et9c6X6Zy6B5wfk2OwCjFGz9Xg/6gj4PDzj9XSNCYfjmQ2/C3yCuy4tuiLDhxSR4dl1hvdHJQNvdwDjsGQ08k+xQcKHGfUyQp9fgcjQEF5xhiDwMcOzbdSld4zF2wqLIKTWWYZ3T6tKD3NkzwMkRMhfv36Wzw1PsaR55JheZIffGdZmWU0oJ9IjAzHwb3t4vrXumi24lmotV+ZXKUUX/kbWNynNdkBHEENQN+Q7UOPCdm90yy5G3OqfqMGpz94lp62NDmKsm2lbJxQm1KT+oQ1zjo9cVpU81e4acQFHjkpVy2dnlXUnkwz8YrzuqM0qoaUbDgTphLNCMlAImmotFbrPVxrb8ay/kmGYk1HA+V9hRcG/13fqpE+GALclsYUfsXJdxPdUk/statWnLxV5QUMISK2CL7O+4mApxiQsE4Kfj07zpU1s+bh6/4q+BMc2itPxfO5us+DUEEJjHsqByhhOsgcTaNtEHQEi0sKi/g9n5en6zaUBWotylrq447TGovSlY0D07XH1PyxkBzg9hHvTGB1D/bSuxes3x/wzZgR+d2OaluwIdI+sMcmbNMqS3jvQpeSAfX03FJqUBhag2REKSS//hrOMi3tSJYbAWiUJpqJ08ExEF4OUHjTGKW6Dt1SWS+jPU4KWwIQccSHv4BJJDc4ghxQwNnYRiZ2Nwd5qz9WuBAWoV2qwknNf5Ej8Fy3U76io7gVutVnXBtXS42ZSHz1XD0pkK5kpxTSlTHBcn41P4szQExSyEt3yAtymJVjCNqR0YF63kRCj33qGCNiflQ6RWd5z5Y6jk04CkUuXs8qpA5WefNtqPmFB/2RHVNqvdhX7BxqGBgncfd7+s6PvupQEavhr5M/RhkUy/1Fmice4xNY+ijsLmuR+W8vjfEooST/hlXnWjJ3rnG3l9Mh7PDm6G0IFEUNiwtW+kv8Obmutx4DNZvjWduqlvV4yqu4nOrzr1Mf+YXOOnDLZGGN5CHO9mZeTeyB9kOpQC+t7ydgSNNdtudOKpk3SRRrzuzYpkOd7fn9pE3ZNa35+oFrkq6upqQVSefw6UBsP4+QCU610I6CG72kmoTH1U9L3RPutxPf6MidHUoFY3xgJq2hoTCL+q6U8ZpT9wpmqAUic6WADh0FlyWTSVl26Hc6J1gA3J3NC6VjHxg/HHwyFEest8p4syfWsaQkRehp60t7foG6+/rie6WWyJnZ0szg4+lqo0C4b7jahFUT0/gZrqlTwWI/izgv99GOFcjrpAKmTtp0qc/jM9CYyMSql1x1nu4/V32WKERLpWvbpjDv0uu6tUSSn3LlQCixuesn0CDfVicHp8aSBoNVTfnc6Urq7Hj7YGudGznYWOYIi3iA/8xOIAf+G4H0fmJKA4LOpT+3rS6VSwhI8Fi/6tL3z7AzNlJs5h7r5agL1YCdaSXSKAP3o67E7UVzUh7RNkihK8UqMTElP3I64Y0woVtjAHIQZNTWgyL8gQoAJZ+7lwlVU1QGpAUvL+H/HmGQiGALac4Z2ivm8bVQ+MgyzSZ49u+1UFrXOjfl5/lNa6MnvpIJylUl/teJVC3Y9R/QMN1Iq17CAuSQXQsgoQO4ahtVowBFhla8vQJbay4SVQDTw+alkoQ2+K5oG7xvkdTr6BDNOUCUXdKPoWIo7cnGc6YpjWPW51FuS/+Cqc5Xu46Yf/otg4AvuQkfve3uSVtcocankaMKEnUt2ufRRZvYEpfTcI6WRKo5FFfydvDg6OivC2QncZw9/4tXr7hfXwTni2H1msDq554OepFAUFgPzeFauZ0bMrqSJ0BB8SUzKbgBNsjo582XxONkW0czhxgKOVKnrHeZLToD7PNuSx8xi55PTJkccr6xIH7OIqsP0jwyGooEUYwahSo8xN0bfHkoyz01VnfEny/8ZUTrE+EdebmiUrAQe73P3SrICRIAjctHnhP2ZOrF/DZDDon7VPtEBYCBcEk0Y+s9069wNupzYDAY8UenqVn2Z7eBEdmLO/HBc91+a85so44tr0/7yELNDvf3rj5dkBXg1F7aQ9KGO74PSwBQJVW3ranrHmoujwuHAtYqn1mh36C1gYbZz0TiQIMUv33aaNR6vWvwKXJdwv0tDWsadh61/1J/NtO74Kz1pgqrNKaneg15Xsz0rn0l7gh/QM2pbc4yCoEj8wJXGcw7/R1G5W2I+NGDtqXJYWgnCmCLm/yi/58ZkJ03FLMb0nwvfZGl2T+VhYhM9ICyvIiXixsxgQ4akJ48sS0+KcyW0c6Kk6Mng1DaMBMxDrxOZQFRMheabyIYSPaR6W+pXTGqbT4CPdPgAOYZAYusNy209UpAp3Wku+heDw0UBEwCsSm2aNlqnO0v9+t650of/WbIBynl18GB+CzUndaoIAwauleN43ilWN0kW8zdAR05xrSCrK/VNmjcRbIPz2Kd3gRnxg2HkfJ9R564MkgXF57XxkxbUdEAK8IqMgQcBJLiuYOGHI8WQNi4v/CcFm3BN9nmHNCxumcCF3NdX2pVskQgH9caABzlPU0EBgBSOReRknLaunyWk4rKKY+h51z9QkYM/cffvNHehxhP+JRz5ppkRXj+LItpNd9P+vkzT0ir2LnH1skKZ78+2iS/2/yQukOGzC+DYvZpOnCZtru5WaLVTuVOwLPpfDu5kGJiT52uY34/bwdztfallqS14mC7Cry6w45/mtzHLaPNZzR16cgsWnkf6ytlqkQq7hHy4xh7xgjWKVBmtx8jHTxekYydNhdEUMfZbeIex3Tlfl2n7TpNR0642z0ELUrAHHPpVed8pE/ngZjyUk40UpBD8NJg4IlIpdIK31/nglG5AzNeNyssiS0pc9cZAz4zyNf98/ejBvaTUCrS3e3g3Ckytbp7CzNvsLkAAAAAAAAA="},744:(e,t,a)=>{a.d(t,{Z:()=>r});const r="data:image/webp;base64,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"},85648:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/stringified-syntax-5d59f01227c3a79bb83788bd8da726ed.webp"}}]);