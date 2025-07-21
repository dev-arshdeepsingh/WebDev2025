//React makes it easy to make complex frontend applications. Don't use react for simple websites. As it takes time to load because browser understands html, css & JS only, so react fist compile to html, css & js & then loads to browser which takes time.

//It was developed by Facebook in 2013. Because facebook was facing issues with their website. The count(which shows no. of unread messages) on chat icon was not disappearing even when they were read. This happened there was no sync between JS & DOM(UI).

//In initial phase it recieved criticism from the community. But now it is one of the most popular libraries for frontend development.

//When it was declared open-source by facebook then khan academy & Unsplash started using it first.

//React is a consistent library. It is a library not a framework. Frameworks are robust while libraries are less strict.

//JSX -> use of html in js.

//props -> properties (the key value pairs we see in object)

//React generally make SPA(Single Page Application) ie it loads only one page at a time. So we can't write /about, /contact etc etc in url. But a package called react router is used to make it dynamic. So we have to add this functionality separately.

//We also need to learn state management(used when UI looks inconsistent). It is also not a part of react. Eg: Zustand, Redux, etc.

//BAAS -> Backend as a Service is also studied separately. eg: Firebase, Supabase, Appwrite etc.

//freeapi.app is hitesh chaudhary's website to practice react.

//React don't have SEO, it has browser rendering issue. So yeah it is not the best but good to use.

//Hence switch to nextjs which is also react based. nextjs is a framework for both frontend & backend. Hence learn it after backend. lly, expo is also like nextjs but for mobile apps build over react.

//react.dev has the best documentation. But it is not easy to understand.

// react ==> react-dom or react-native or we can use 3js for 3d graphics.(we use react-dom for web apps & react-native for mobile apps).

//npm is a package manager for node.js. It is used to install packages & dependencies.
// npx is a tool to run the same packages but without installing them. (npx = node package executer)

//eg: npx create-react-app 01basixs (this will create a new react app in 01basixs folder) but this will take a hell amount of time to load.
// In above example we are using create-react-app package which is a utility or we can also call it a functionality. It is a heavy package as it installs everything even stuff which is not required. That's why we use vite or parcel or webpack to create a new react app. As it is a lightweight package it is faster to load & loads the required stuff only.

//After installing react, then in package.json we can see various packages & their versions.
//Web-vitals is a package to check the performance of the website.
//lly, scripts are used to run the app in production mode.
//start is used to run the app in development mode.
//build is used to build the app in production mode.
//test is used to run the tests.
//eslintconfig is used to configure the eslint.
//eslint is used to check the code for errors.
//prettier is used to format the code.
//react-scripts is used to run the app in development mode.
//react-dom is used to render the app in the browser.
//react-router-dom is used to handle the routing in the app.
//react-icons is used to use the icons in the app.
//react-scripts is used to run the app in development mode.

//Now, we run a script with "npm run start", however we don't need to use "run" keyword with it. But there are some exceptions where "run" is required.

//If we write "npm run build" then it will build the app in production mode & also create build folder.

//Now, let's use vite:
//Once u install react always read package.json file first. & ignore devdependencies as it is not required for production. If they are present then ok if not then also ok.
//npm install vite@latest
//then cd (project-name)
//npm install (To add node modules as they don't come with vite)
//npm run dev to host the app on local host.(you can see fucntionality of "dev" in package.json file).

//99% of the time we will be src folder.



//******************now, shift to 01. My Code -> Video 1 **************************

/*
In 01basicreact folder we have created a new react app using create-react-app utility.

Installed react full verion using create then delete some files in src folder.:
setuptest.js
reportWebVitals.js
logo.svg
app.test.js
app.css
index.css

now only remaining files are:
index.js
app.js 



Now, lets go to the 01vitereact folder & delete the following files:
Only keep app.jsx & main.jsx file

now, see as it is a library that's same file have .js extension in create-react-app & .jsx extension in vite react app. If it was a framework then it would have .js extension in both the cases as frameworks are more strict.

Use cd .. (to reach the root folder)
use ls (to see the files in the folder)
use cd filename (to go to that folder)


Now, we know how to clean a project & print a "Hello World" in react app.




****Now let's understand the folder structure of react app in next video @1:06:46****

JS always executes alone, it must explicitely added to the html file using <script> tag so that we can see the manipulations by JS on webpage.

But in react, we don't need to do that as it is already done by the react library. So we can directly write our code in the app.js file.

In node modules folder we can see the react library & its dependencies. They can be installed anytime using npm install command. Every functionality in package.json after installation can be seen in node modules folder.

In packagelock.jsoon, the dependencies are locked to a specific version. So that if we install the same package again then it will be installed with the same version. This is done to avoid any breaking changes in the code.


In public folder, only index.html is imp. others are logos or manifest.json (have metatags that helps webpages to run on mobile devices) or favicon.ico (the icon that appears in the browser tab).


index.html is the reason react is SPA. Because it is only 1 file.

index.js is the entry point of the react app. It is the file that is executed first when the app is run. It is used to render the app in the browser. We can name it anything.
app.js is the main component of the react app. 


//*******ENDING HERE FROM VIDEO 2 ONWARDS THE COMMENTS WILL BE ADDED IN THE REPECTIVE FILE.*******






*/