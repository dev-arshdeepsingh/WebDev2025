// nginx is a web server that can be used to serve static & index files eg: index.html, index.css, index.js, etc.
// So it serves those files which ultiately loads the webpage.
//In nginx there is a server which is linked with a directory which contains the files to be served like index.html, index.css, index.js, etc.
// Now, as told above nginx -> server + directory,  now this nginx wil be present in a computer which will have virtual ports through which it will recieve web requests from browser.
// Through the virtual port, ther server part of nginx will recieve request and then the serve will take index.html file from directory serve it to the browser through the virtual port.

//here, we want to build our own live server like the one provided by VS code to host our web pages but using nginx. 

const http = require("http"); //In documentation, these libaries are importd as const http = require(node: http); But we won't be using node keyword because we are already working in node environment.
const fs = require("fs");
const path = require("path"); //It help us to grab paths of files, It aso tells us the type of file we are working with. So yeah path tells us various things. Type pwd(present working directory) in terminal to see the path of current directory.

//file systems (fs) handles the files whereas path grabs the path of files. 

//computer has various free ports 8080(localHost), 3000, 8000 so use any of them to setup the server but make sure it is not being used by any other application. Eg; port 80 & 443 are used for http & https to make requests. Also port 22 is used by ssh to make requests.
//The http module imported above is used to make sure that we are actually listening to some requests and acting as a server.
const port = 3000;

const server = http.createServer((req, res) => { //here also we can access functions of each module by using dot operator. .createServer is a function of http module used to create a server. It always listens on the port for some of the incoming traffic. But for now it is just created & it's functionality isn't defined yet. It also have a calback with2 parameter requests(req) & responses(res) however they can be named anything & based on this callback the server decides what requests it's listening too.
  const filePath = path.join( //In vague words, it merges 2 or more paths. Like here, it is taking current directory desktop...server.js from __dirname & either index.html or others based on if-else from if-else condition & results something like this /Users/arshdeepsingh/Desktop/.../server/index.html'
    __dirname,  //It means absolute path of current script which is server.js
    req.url === "/" ? "index.html" : req.url  //SHorthand of if-else (a===b ie condition) ? (execute this if true) : (execute this if false)
  ); //Note that index.html is wrapped in quotes while req.url is not because we are adding index.html in the path as string, whereas req.url is a variable which already has a path in the form of string inside it.
//The meaning of above is: 
// When someone visits http://localhost:3000/ → serves index.html
// When someone visits http://localhost:3000/about.html → serves about.html
// When someone visits http://localhost:3000/contact.html → serves contact.html





  const extName = path.extname(filePath).toLowerCase(); //extname is also a method of path, which retuens extension after last dot eg it returns html if filePath is index.HTML. It would be useful to lowercase the extension as extensios are of lowercase. so if user mistakes with uppercase then it will handle it.

  let mimeTypes = {  //mimeType is used to describe what kinds of files are we suppoting.
    ".html": "text/html",  //it will be helpful so that user don't add GIFs in it LOL 
    ".css": "text/css",
    ".js": "text/javascript",
    ".png": "image/png",
  };
//Now nodejs & libuv will manage based on file type


  const contentType = mimeTypes[extName] || "application/octet-stream";  //this app-octet-stream is a generic file type which must be opened. It maybe binary or word docx. Explore more about it. 

  //Till  now we have only grabbed now let's serve the files using fs.readFile(x, ()=>{})
  
  fs.readFile(filePath, (err, content) => {   //here we will also tke care of err or error 
    if (err) { //lets handle the error
      if (err.code === "ENOENT") { //ENOENT is a standard error code for file not found. It's full form is "Error NO ENTry"
        res.writeHead(404, { "Content-Type": "text/html" }); //Here we are defining the content type of the response & it's html
        res.end("404: File not found bro"); //In the body we will display this error message.
      } else {
        res.writeHead(500);   //here we will also handle responses //here we pass status code so first explore it on mdn as it has actions based o range 0-100. 100-200 etc. This range is a standard however we can set custom range of status code too.
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      res.writeHead(200, { "Content-Type": contentType });   //here we are using 200 as status code which means everything is fine. & writeHead is used to write the head of the response. And with the help of contentType we are telling the browser what kind of file we are sending. 
      res.end(content, "utf8"); //In above we dealt with head, now we are dealing with body. utf8 is used to tell the browser that the content is in utf8 format which supports all the english characters. Utf 16 can also be used it supports chineese characters too.
    }
  });
});

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});  //here is the functionality of server which was only created above using http.createServer() function. Here, we mention port & the functionality on that port.

//JS is not capable of listenig to http event, this functionality is imported from libUV. So libuv binds all the requests in an object & give it to u so that u can do anything with it. It is a big deal becuase there are thousnd of lines of code it do this every line.  



//Some more eg of path.join() 
// path.join('folder/', '/file.txt')
// Result: 'folder/file.txt' (normalized)
//path.join is better than string concatenation.
//on servers, req & res have 2 things head & body
//head has metadata like statusCode, datatype, filetype like is json or html
//body has data like content on webpage
//So via req we can req data like username, passwords, cookies, json tokens
//status code on MDN


//To run this server file, On terminal write node server.js & then go to browser & type localhost:3000/index.html & you will see the index.html file. Then add /about.html ahead of the same link to see the about.html file.
//& Bravo! You have created your own nginx server.


//Here, we may have created our own server but we don't actually use this technique in production instead we use express.js which is a framework for node.js & it also does the job of a server. It also picks the file & sends a response to the browser.



