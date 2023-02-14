"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[5378],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),h=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=h(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=h(a),u=r,m=c["".concat(l,".").concat(u)]||c[u]||p[u]||o;return a?n.createElement(m,i(i({ref:t},d),{},{components:a})):n.createElement(m,i({ref:t},d))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var h=2;h<o;h++)i[h]=a[h];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},69711:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>h,toc:()=>p});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),i=["components"],s={title:"Scrape data using Python",description:"Learn how to scrape websites using Python and its Beautiful Soup library. Follow the tutorial to analyze the target page and create a Python actor.",sidebar_position:3.93,slug:"/tutorials/scrape-data-using-python"},l=void 0,h={unversionedId:"tutorials/scrape_data_using_python",id:"tutorials/scrape_data_using_python",title:"Scrape data using Python",description:"Learn how to scrape websites using Python and its Beautiful Soup library. Follow the tutorial to analyze the target page and create a Python actor.",source:"@site/sources/platform/tutorials/scrape_data_using_python.md",sourceDirName:"tutorials",slug:"/tutorials/scrape-data-using-python",permalink:"/platform/tutorials/scrape-data-using-python",draft:!1,editUrl:"https://github.com/apify/apify-docs-v2/edit/master/sources/platform/tutorials/scrape_data_using_python.md",tags:[],version:"current",lastUpdatedBy:"Jind\u0159ich B\xe4r",lastUpdatedAt:1676377646,formattedLastUpdatedAt:"Feb 14, 2023",sidebarPosition:3.93,frontMatter:{title:"Scrape data using Python",description:"Learn how to scrape websites using Python and its Beautiful Soup library. Follow the tutorial to analyze the target page and create a Python actor.",sidebar_position:3.93,slug:"/tutorials/scrape-data-using-python"},sidebar:"docs",previous:{title:"Scrape paginated sites",permalink:"/platform/tutorials/scrape-paginated-sites"},next:{title:"Process scraped data with Python",permalink:"/platform/tutorials/process-data-using-python"}},d={},p=[{value:"Exploring the BBC Weather page",id:"exploring-the-bbc-weather-page",level:2},{value:"Understanding the URL format",id:"understanding-the-url-format",level:3},{value:"Determining the forecast&#39;s starting date",id:"determining-the-forecasts-starting-date",level:3},{value:"Understanding the element structure",id:"understanding-the-element-structure",level:3},{value:"Scraping the data from the page",id:"scraping-the-data-from-the-page",level:2},{value:"Setting up the actor",id:"setting-up-the-actor",level:3},{value:"Writing the code",id:"writing-the-code",level:3},{value:"Extracting the data",id:"extracting-the-data",level:4},{value:"Storing the data",id:"storing-the-data",level:4},{value:"Running the actor",id:"running-the-actor",level:3},{value:"Processing the results",id:"processing-the-results",level:2}],c={toc:p};function u(e){var t=e.components,s=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"how-to-scrape-data-in-python-using-beautiful-soup"},"How to scrape data in Python using Beautiful Soup"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Learn how to scrape websites using Python and its Beautiful Soup library. Follow the tutorial to analyze the target page and create a Python actor.")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Web scraping is not limited to the JavaScript world. The Python ecosystem contains some pretty powerful scraping tools as well. One of those is ",(0,o.kt)("a",{parentName:"p",href:"https://www.crummy.com/software/BeautifulSoup/",target:"_blank",rel:"noopener"},"Beautiful Soup"),", a library for parsing HTML and easy navigation or modification of a DOM tree."),(0,o.kt)("p",null,"This tutorial shows you how to write a Python ",(0,o.kt)("a",{parentName:"p",href:"/platform/actors",target:null,rel:null},"actor")," for scraping the weather forecast from ",(0,o.kt)("a",{parentName:"p",href:"https://www.bbc.com/weather",target:"_blank",rel:"noopener"},"BBC Weather"),". We also have an accompanying tutorial for ",(0,o.kt)("a",{parentName:"p",href:"/platform/tutorials/process-data-using-python",target:null,rel:null},"how to process the scraped data")," using ",(0,o.kt)("a",{parentName:"p",href:"https://pandas.pydata.org/",target:"_blank",rel:"noopener"},"Pandas"),"."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"In a rush? Skip this tutorial and get the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apify/apify-docs/tree/master/examples/python-data-scraper/",target:"_blank",rel:"noopener"},"full code example"),".")),(0,o.kt)("h2",{id:"exploring-the-bbc-weather-page"},"Exploring the BBC Weather page"),(0,o.kt)("p",null,"BBC Weather offers you the weather forecast for the upcoming 14 days for a large selection of places around the world. Let's say we want to decide on our next holiday destination. We're choosing between Prague, New York, and Honolulu, and we will pick the destination based on which one has the best weather. To do that, we will scrape the weather forecast for each of our options, and then compare the results."),(0,o.kt)("h3",{id:"understanding-the-url-format"},"Understanding the URL format"),(0,o.kt)("p",null,"First, we need to look around the BBC Weather page and understand how the weather data is being retrieved and presented. If we open the ",(0,o.kt)("a",{parentName:"p",href:"https://www.bbc.com/weather",target:"_blank",rel:"noopener"},"BBC Weather")," page and search for Prague, we can see that it opened a page with a URL ending in a seven-digit number, which we can assume is the ID of the displayed location BBC Weather uses internally. Opening a different location changes only that number in the URL, confirming our assumptions."),(0,o.kt)("p",null,"The page shows the weather forecast for the upcoming 14 days. If we hover over the days in the displayed carousel, we can see that the link for each day leads to a URL ending with ",(0,o.kt)("inlineCode",{parentName:"p"},"/day{X}"),", with ",(0,o.kt)("inlineCode",{parentName:"p"},"{X}")," representing how many days in the future the specific day is."),(0,o.kt)("p",null,"Combining this information gives us the full format for the URL of a page for a given location and day: ",(0,o.kt)("inlineCode",{parentName:"p"},"https://www.bbc.com/weather/{LOCATION_ID}/day{DAY_OFFSET}"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"BBC Weather URL format",src:a(84103).Z,width:"2560",height:"1958"})),(0,o.kt)("h3",{id:"determining-the-forecasts-starting-date"},"Determining the forecast's starting date"),(0,o.kt)("p",null,"Looking more closely at the BBC Weather page, we can see that it shows the forecast for each day from 6:00 AM to 5:00 AM the next day. But what happens when we view a location where the current time is between midnight and 5 AM? Trying that, we can see that, in the day represented by ",(0,o.kt)("strong",{parentName:"p"},"Tonight"),", there are only a few slots for the hours between midnight and 5 AM displayed. This means that the first displayed day can either represent the current date at the location, or the day before the current date. To find out which of these two it is, we will first have to determine the current date and time at the location, and then possibly adjust it by one day based on whether the date matches the first displayed day."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"BBC Weather displaying a location with current time between midnight and 5 AM",src:a(65248).Z,width:"2560",height:"1958"})),(0,o.kt)("p",null,"To determine the current date and time at the displayed location, we will need to know the location's timezone. Fortunately, the timezone and its offset to GMT are displayed near the bottom of the page."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"The timezone offset on the BBC Weather page",src:a(30828).Z,width:"954",height:"176"})),(0,o.kt)("h3",{id:"understanding-the-element-structure"},"Understanding the element structure"),(0,o.kt)("p",null,"To extract data from the page, we need to figure out where exactly in the internal page structure it is stored."),(0,o.kt)("p",null,"If we right-click on the day title in the top carousel (",(0,o.kt)("strong",{parentName:"p"},"Today")," or ",(0,o.kt)("strong",{parentName:"p"},"Tonight"),") and select ",(0,o.kt)("strong",{parentName:"p"},"Inspect")," in the popup menu, we can open the Chrome DevTools Inspector with the clicked element highlighted. We can see that the element with the currently displayed day in the top carousel has the class ",(0,o.kt)("inlineCode",{parentName:"p"},"wr-day--active"),", and that the element with the day's title has the class ",(0,o.kt)("inlineCode",{parentName:"p"},"wr-day__title")," and the accessibility label attribute ",(0,o.kt)("inlineCode",{parentName:"p"},"aria-label")," contains the actual date of that day, not just ",(0,o.kt)("strong",{parentName:"p"},"Today")," or ",(0,o.kt)("strong",{parentName:"p"},"Tonight"),". Additionally, the timezone information is in an element with the class ",(0,o.kt)("inlineCode",{parentName:"p"},"wr-c-footer-timezone__item"),". There are two elements with the same class, so we will need to pick the second one when parsing the page."),(0,o.kt)("p",null,"Exploring the document tree further, we can see that the element containing all the displayed hours has the class ",(0,o.kt)("inlineCode",{parentName:"p"},"wr-time-slot-container__slots"),". The elements with the forecast for a given hour have the class ",(0,o.kt)("inlineCode",{parentName:"p"},"wr-time-slot"),". In each time slot, the element containing the slot's hour has the class ",(0,o.kt)("inlineCode",{parentName:"p"},"wr-time-slot-primary__hours")," and the element containing the slot's predicted temperature in degrees Celsius has the class ",(0,o.kt)("inlineCode",{parentName:"p"},"wr-value--temperature--c"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"BBC Weather with the DevTools Inspector open",src:a(1396).Z,width:"2560",height:"1958"})),(0,o.kt)("h2",{id:"scraping-the-data-from-the-page"},"Scraping the data from the page"),(0,o.kt)("p",null,"Now that we understand the element structure of the page and know where to find all the data we need, we can start writing the scraper."),(0,o.kt)("h3",{id:"setting-up-the-actor"},"Setting up the actor"),(0,o.kt)("p",null,"First, we need to create a new actor. To do this, go to ",(0,o.kt)("a",{parentName:"p",href:"https://console.apify.com/",target:"_blank",rel:"noopener"},"Apify Console"),", open the ",(0,o.kt)("a",{parentName:"p",href:"https://console.apify.com/actors",target:"_blank",rel:"noopener"},"Actors section"),", click on the ",(0,o.kt)("strong",{parentName:"p"},"Create new")," button in the top right, and select the ",(0,o.kt)("strong",{parentName:"p"},"Example: Hello world in Python")," actor template."),(0,o.kt)("p",null,"In the page that opens, you can see your newly created actor. In the ",(0,o.kt)("strong",{parentName:"p"},"Settings")," tab, you can give it a name (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"bbc-weather-scraper"),") and further customize its settings. We'll skip customizing the settings for now, the defaults should be fine. In the ",(0,o.kt)("strong",{parentName:"p"},"Source")," tab, you can see the files that are at the heart of the actor. There are several of them, but only two are important for us now, ",(0,o.kt)("inlineCode",{parentName:"p"},"main.py")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"requirements.txt"),"."),(0,o.kt)("p",null,"First we'll start with the ",(0,o.kt)("inlineCode",{parentName:"p"},"requirements.txt")," file. Its purpose is to list all the third-party packages that your actor will use. We will be using the ",(0,o.kt)("inlineCode",{parentName:"p"},"requests")," package for downloading the BBC Weather pages, and the ",(0,o.kt)("inlineCode",{parentName:"p"},"beautifulsoup4")," package for parsing and processing the downloaded pages. We don't particularly care about the specific versions of these packages, so we just list them in the file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"# Add your dependencies here.\n# See https://pip.pypa.io/en/latest/cli/pip_install/#requirements-file-format\n# for how to format them\n\nbeautifulsoup4\nrequests\n")),(0,o.kt)("h3",{id:"writing-the-code"},"Writing the code"),(0,o.kt)("p",null,"Finally, we can get to writing the main logic for the actor, which will live in the ",(0,o.kt)("inlineCode",{parentName:"p"},"main.py")," file. Let's delete everything currently in it and start from an empty file."),(0,o.kt)("p",null,"First, we need to import all the packages we will use in the code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from datetime import datetime, time, timedelta, timezone\nimport os\nimport re\n\nfrom apify_client import ApifyClient\nfrom bs4 import BeautifulSoup\nimport requests\n")),(0,o.kt)("p",null,"Next, let's set up the locations we want to scrape in a constant for easier reference and, optionally, modification."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"# Locations which to scrape and their BBC Weather IDs\nLOCATIONS = [\n    ('Prague', '3067696'),\n    ('Honolulu', '5856195'),\n    ('New York', '5128581'),\n]\n")),(0,o.kt)("h4",{id:"extracting-the-data"},"Extracting the data"),(0,o.kt)("p",null,"We'll be scraping each location separately. For each location, we need to know in which timezone it resides and what is the first displayed date in the weather forecast for that location. We will scrape each of the 14 forecast days one by one. For each day, we will first download its forecast page using the ",(0,o.kt)("inlineCode",{parentName:"p"},"requests")," library, and then parse the downloaded HTML using the ",(0,o.kt)("inlineCode",{parentName:"p"},"BeautifulSoup")," parser:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"# List with scraped results\nweather_data = []\n\n# Scrape each location separately\nfor (location_name, location_id) in LOCATIONS:\n    print(f'Scraping weather from {location_name}...')\n    location_timezone = None\n    first_displayed_date = None\n    for day_offset in range(14):\n        # Get the BBC Weather page for the given location and day and parse it with BeautifulSoup\n        response = requests.get(f'https://www.bbc.com/weather/{location_id}/day{day_offset}')\n        soup = BeautifulSoup(response.content, 'html.parser')\n")),(0,o.kt)("p",null,"When scraping a location, we need to know in which timezone it lies, and what date the first displayed day of the forecast represents. We can find that out at the beginning, when scraping the first day of the forecast for that location."),(0,o.kt)("p",null,"To get the necessary data, we will need to find the elements in which it is contained. Let's use the ",(0,o.kt)("inlineCode",{parentName:"p"},"soup.find(...)")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"soup.findAll(...)")," methods, which find elements matching some specified conditions in the parsed HTML."),(0,o.kt)("p",null,"First, we extract the timezone from the second element with class ",(0,o.kt)("inlineCode",{parentName:"p"},"wr-c-footer-timezone__item"),". The timezone information is described there with a full sentence, but we're only interested in the numerical representation of the timezone offset, so we parse it out using a regular expression. With the timezone offset parsed, we can construct a ",(0,o.kt)("inlineCode",{parentName:"p"},"timezone")," object and from that get the current datetime at the location."),(0,o.kt)("p",null,"Afterwards, we can figure out which date is represented by the first displayed day. We find the element with the class ",(0,o.kt)("inlineCode",{parentName:"p"},"wr-day--active")," containing the header for the currently displayed day. Inside it, we find the element with the title of that day, which has the class ",(0,o.kt)("inlineCode",{parentName:"p"},"wr-day__title"),". This element has the accessibility label containing the actual date of the day in its ",(0,o.kt)("inlineCode",{parentName:"p"},"aria-label")," attribute, but it contains only the day and month and not the year, so we can't use it directly. Instead, to get the full date of the first displayed day, we compare the day from the accessibility label and the day from the current datetime at the location. If they match, we know the first displayed date is the current date at the location. If they don't, we know the first displayed date is the day before the current date at the location."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"        # When parsing the first day, find out what day it represents,\n        # to know when do the results start\n        if day_offset == 0:\n            # Get the timezone offset written in the page footer and parse it\n            tz_description = soup.find_all(class_='wr-c-footer-timezone__item')[1].text\n            tz_offset_match = re.search(r'([+-]\\d\\d)(\\d\\d)', tz_description)\n            tz_offset_hours = int(tz_offset_match.group(1))\n            tz_offset_minutes = int(tz_offset_match.group(2))\n\n            # Get the current date and time at the scraped location\n            timezone_offset = timedelta(hours=tz_offset_hours, minutes=tz_offset_minutes)\n            location_timezone = timezone(timezone_offset)\n\n            location_current_datetime = datetime.now(tz=location_timezone)\n\n            # The times displayed for each day are from 6:00 AM that day to 5:00 AM the next day,\n            # so \"today\" on BBC Weather might actually mean \"yesterday\" in actual datetime.\n            # We have to parse the accessibility label containing the actual date on the header for the first day\n            # and compare it with the current date at the location, then adjust the date accordingly\n            day_carousel_item = soup.find(class_='wr-day--active')\n            day_carousel_title = day_carousel_item.find(class_='wr-day__title')['aria-label']\n            website_first_displayed_item_day = int(re.search(r'\\d{1,2}', day_carousel_title).group(0))\n\n            if location_current_datetime.day == website_first_displayed_item_day:\n                first_displayed_date = location_current_datetime.date()\n            else:\n                first_displayed_date = location_current_datetime.date() - timedelta(days=1)\n")),(0,o.kt)("p",null,"Now that we've figured out the date of the first displayed day, we can extract the predicted weather from each hour of each forecast day. The forecast for the displayed day is in the element with class ",(0,o.kt)("inlineCode",{parentName:"p"},"wr-time-slot-container__slots"),", and that element contains time slots for each predicted hour represented by elements with the class ",(0,o.kt)("inlineCode",{parentName:"p"},"wr-time-slot"),". In each time slot, the element with the class ",(0,o.kt)("inlineCode",{parentName:"p"},"wr-time-slot-primary__hours")," contains the hour of the time slot. The element with the class ",(0,o.kt)("inlineCode",{parentName:"p"},"wr-value--temperature--c")," contains the temperature in degrees Celsius."),(0,o.kt)("p",null,"To get the datetime of each slot, we need to combine the date of the first displayed day, the hour displayed in the slot, and the timezone of the currently processed location. Since the page shows the forecast for each day from 6 AM to 5 AM the next day, we need to add one day to the slots from midnight to 5 AM to get the correct datetime."),(0,o.kt)("p",null,"Finally, we can put all the extracted information together and push them to the array holding the resulting data."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"        # Go through the elements for each displayed time slot of the displayed day\n        slot_container = soup.find(class_='wr-time-slot-container__slots')\n        for slot in slot_container.find_all(class_='wr-time-slot'):\n            # Find out the date and time of the displayed element from the day offset and the displayed hour.\n            # The times displayed for each day are from 6:00 AM that day to 5:00 AM the next day,\n            # so anything between midnight and 6 AM actually represents the next day\n            slot_hour = int(slot.find(class_='wr-time-slot-primary__hours').text)\n            slot_datetime = datetime.combine(first_displayed_date, time(hour=slot_hour), tzinfo=location_timezone)\n            slot_datetime += timedelta(days=day_offset)\n            if slot_hour < 6:\n                slot_datetime += timedelta(days=1)\n\n            # Parse the temperature from the right element\n            slot_temperature = int(slot.find(class_='wr-value--temperature--c').text[:-1])\n\n            # Add the parsed data to the result list\n            weather_data.append({\n                'datetime': slot_datetime,\n                'location': location_name,\n                'temperature': slot_temperature,\n            })\n")),(0,o.kt)("h4",{id:"storing-the-data"},"Storing the data"),(0,o.kt)("p",null,"As the last step, we need to store the scraped data in a dataset on the Apify platform, so that we can access it later. We do that through the ",(0,o.kt)("a",{parentName:"p",href:"/api/client/python/",target:null,rel:null},"Apify API Client for Python"),", which greatly simplifies working with the Apify platform and allows you to use its functions without having to call the Apify API directly."),(0,o.kt)("p",null,"First, we initialize an ",(0,o.kt)("inlineCode",{parentName:"p"},"ApifyClient")," instance. All the necessary arguments are automatically provided to the actor process as environment variables accessible in Python through the ",(0,o.kt)("inlineCode",{parentName:"p"},"os.environ")," mapping. We will save the data into the default dataset belonging to the actor run, so we create a sub-client for working with that dataset, and push the data into it using its ",(0,o.kt)("inlineCode",{parentName:"p"},".push_items(...)")," method."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"# Initialize the main ApifyClient instance\nclient = ApifyClient(os.environ['APIFY_TOKEN'], api_url=os.environ['APIFY_API_BASE_URL'])\n\n# Get the resource subclient for working with the default dataset of the actor run\ndefault_dataset_client = client.dataset(os.environ['APIFY_DEFAULT_DATASET_ID'])\n\n# Finally, push all the results into the dataset\ndefault_dataset_client.push_items(weather_data)\n\nprint(f'Results have been saved to the dataset with ID {os.environ[\"APIFY_DEFAULT_DATASET_ID\"]}')\n")),(0,o.kt)("h3",{id:"running-the-actor"},"Running the actor"),(0,o.kt)("p",null,"And that's it! Now you can save the changes in the editor, and then click ",(0,o.kt)("strong",{parentName:"p"},"Build and run")," at the bottom of the page. The actor will get built, the built actor image will get saved for future reuse, and then it will be executed. You can follow the progress of the actor build and the actor run in the ",(0,o.kt)("strong",{parentName:"p"},"Last build")," and ",(0,o.kt)("strong",{parentName:"p"},"Last run")," tabs, respectively, in the developer console in the actor source view. Once the actor finishes running, you can view the scraped data in the ",(0,o.kt)("strong",{parentName:"p"},"Dataset")," tab in the actor run view."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Building and running the BBC Weather Scraper actor",src:a(79197).Z,width:"2560",height:"1958"})),(0,o.kt)("h2",{id:"processing-the-results"},"Processing the results"),(0,o.kt)("p",null,"In this tutorial, you have learned the basics of scraping data in Python using Requests and Beautiful Soup with Apify actors. But scraping data is only one part of the process. Head on to our ",(0,o.kt)("a",{parentName:"p",href:"/platform/tutorials/process-data-using-python",target:null,rel:null},"next tutorial")," to learn how to process the data in a dataset using ",(0,o.kt)("a",{parentName:"p",href:"https://pandas.pydata.org/",target:"_blank",rel:"noopener"},"Pandas")," and visualize it using ",(0,o.kt)("a",{parentName:"p",href:"https://matplotlib.org/",target:"_blank",rel:"noopener"},"Matplotlib"),"."))}u.isMDXComponent=!0},30828:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/bbc-time-offset-a7657ef9dc2721e46f2c2adf0f71aac0.png"},65248:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/bbc-weather-after-midnight-7348c6c0be8c3441be74734d16b90451.png"},1396:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/bbc-weather-devtools-ede1403dc7aa869f51e9b01efae06def.png"},79197:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/bbc-weather-scraper-source-c258d4425b1d3ec8f9e4772acefa5ccb.png"},84103:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/bbc-weather-url-format-e8135406724ef738c71b26d310cddf7e.png"}}]);