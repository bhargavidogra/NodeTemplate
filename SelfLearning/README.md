# NodeJs_Learning_path

Refrence : https://www.linkedin.com/learning/node-js-essential-training-3/

What is NodeJs?
An Asynchronous event driven JavaScript runtime,Node is designed to build scalable network applications.

Basic Theory :

Node's Async Nature

Node is event loop based i.e it is 'single threaded' environment and is made use of based on callback functions.

Promises and replacment of promise with Async/Await

EventEmitter : emitter.emit() emitter.on()
  
 Example : emitter.emit('data','Hello World!')
emitter.on('data',(msg)=>{
console.log(msg); //prints the data Hello World
})

Streams:

Readable Streams :
Events: readable,data,end,error
Methods:read,pause,resume,destroy
Properties:readable,readableLength

Writable Streams :
Events:drain,close,finish,error
Methods:write,destroy,end
Properties:writable,writableLength
Piping Streams and chaning then with file stream(fs) to import export file data could be useful.

NPM (Node Package Manager)
A package Repository to install third party modules and a command line Application

npm init -initializing project

npm install - Adding Dependencies

Express - A very powerful middleware,routing and templating Engine.

Testing frame works mocha, chai testing assertion liberary,sinon for spies,stubs and mocks in sinonjs.org and istanbul for code coverage.

Basic Learning Topics:

Refrence - https://www.linkedin.com/learning/node-js-essential-training-3/

1 Global object
2 Require Function to get any file module into your code.eg getting the path from node module and using it to get the directory or filename. eg global.js
3 Process object -process.argv eg globalProcess.js

4 Standard Input and output - process.stdout ,process.stdin .Both are streams for reading and writing. Time out in intervals.

NodeJs Core Module Topics:(Example Code : Core.js)

1 path module: used to join path by - path.join(\_\_dirname,'filename_to_concat');

2 util module: log in this is more powerful than consolelog as it logs the date as well but we need to require this module.

3 v8 module : to get the memory usage statstics.

4 ReadLine module :helps to read data form console .eg ask.js

5 File System Basics
readFileSync -For reading files Syncronously
readFile - For reading file Async by using a call back
ex code -readFile.js reads ReadMe.md
  
 if we want to read binary file we do not give UTF-8 as argument value
  
 writefile module used for writing data into file Asyncronously.eg writeFile.js

      creating directory using fs use of mkdir  for creation of directory.eg directory.js

      fs.appendFile() - to append file

      fs.renameSync() or fs.rename()

Streams

Readable File Streams:

Creation of your own modules and exporting them in other file for usage in code .eg myModule is imported in app.js

Event Emitter
These are imported by importing the events into the code and they are async in nature and are emitted on call mainly.

NPM
NODE PACKAGE MANAGER

          node -v  =for getting node version

          package.json file for installing dependecies.

          npm init - for initailzing the node command package.json declaration important if you are going to publish the npm package.

          Syntax for installing any package:
            npm install package_name.
             eg -npm install express babel --save (to install as dev tools not to be included in production environment but used thoughout the production environment)
        At times installing thing globaly from inside some module may cause error so in that case you need to use :  sudo npm install -g package_name
        Here it may promt to enter the machine pwd.

        npm outdated -g // checking the package vaersion
        update the package(to newest version) by simply typing
                    npm install package_name
        in case it has to be globally installed :
                   sudo npm install package_name


        Removing the package:
            npm uninstall package_name --save-dev

        Semantic versions:
           ^1.4.2   OR `1.4.2
            1->Major releases
            4->Minor releases
            2-> Patch releases
            ^ -> Caret All minor and patches OK ^1.X.X
            ` ->All patches only `1.4.X
          Control versions by removing ^ or `


         Package-lock.json
            when you share your project with some one make share to include it . This file will garantee to install same packages as per your project to run in any environment.

        NPM Cache
          npm keeps a cache for installing any kind of packages or something.

          use cmd : npm cache verify
                    npm cache clean --force (else not going to work)
                    npm audit fix - for minor fixing of issues
                    install npm againor that package again which is causing issue.

        NPM Scripts
          installing nodemon self starting of node project
          in package.json under scripts add - "start":"nodemon ./app.js"
          after installing npm install

          For running your own cmd :
            "nodemonthis"; "nodemon ./index.js"

NPX
to install packages locally and not globally we use npx
eg npx -p @angular/cli ng new angular_project_name
This cmd temporarily installs that package such that it makes the angular projectr for that specific time only

    just run: npm install npx ( to install npx )

Alternatives to NPM

     yarn one of the alternative to npm introduced by facebook
     ni - less verbal approach used here

Express and Middlewares

Syntax
app.use(callback); //calbacks get req and res object

     app.use(path.callback);

     app.[get|post|put|delete|...](path,callback);

     What do Express middleware do?
       Execute any code
       change the req and res object
       end the req / res cycle- to send data back to caller
       call the next middleware in the stack


          app.use((req,res,next)=>{
           return next();
          });

Routing via middleware :
app.get('/feedback', (req,res,next)=>{
return res.send('hello');
});

    Parameter Routes : Dynamic Routes:
    app.get('/speakers/:speakername',handler);
    app.get('/speakers/:speakername?',handler);//here ?makes speaker name optional

Node Js Data Persistance

Cookie Session
We store data and encrypt it such that we do not want user to know the data stored.example index.js
Note inthe browser the session handeling middleware will store the keys and data sent in the cookie.

Async Programming

     Asynchronous programming is a design pattern which ensures the non-blocking code execution.

     Non blocking code do not prevent the execution of piece of code. In general if we execute in Synchronous manner i.e one after another we unnecessarily stop the execution of those code which is not depended on the one you are executing.
     Asynchronous does exactly opposite, asynchronous code executes without having any dependency and no order. This improves the system efficiency and throughput.
     Asynchronous programming is great for faster execution of programs but it comes with price.Its difficult to program and most of the time we end up having callback hell scenario.

        var fs = require("fs");
       fs.readFile('sync.js','utf8',function(err,data){
       if(!err) {
       console.log(data);
       }
        });
       console.log("something else");

     Here we have got console.log() content first and then file content. This is because code is Asynchronous and event loop executes that later

      Event Loop
      It is responsible for scheduling asynchronous operations.

      Event-driven programming is a programming paradigm in which the flow of the program is determined by events such as user actions (mouse clicks, key presses), sensor outputs, or messages from other programs/threads.


      What is callback hell
     This happens due to the Asynchronous nature of the JavaScript. We want to execute tasks which are dependent on each other hence we wrap them into the callbacks of each function and hence caught into callback hell situation


      To avoid callback hell, follow one or combination of the following :

      Modularise your code.
      Use generators.
      Use promises
      Use event-driven programming.
      Use Async/await

Nested callbacks Example :

      app.post('/message',(req,res)=>{
          var message = new Message(req.body)
            message.save((err)=>{
                if(err)
                 sendStatus(500);

                 Message.findOne({message : 'badword',(err,censored)=>{
                           if(censored){
                          console.log(`Censored word found ${censored}`);
                       message.remove({_id:censored.id}, (err)=>{
                      console.log('removed censored message);
                       });
                      }
                   }});
                });
            });

SOLUTION:

Promises

    app.post('/message',(req,res)=>{
          var message = new Message(req.body)
            message.save().then(()=>{
                 console.log('saved');
                  return Message.findOne({message : 'badword'});
                }).then(censored =>{
                           if(censored){
                          console.log(`Censored word found ${censored}`);
                       message.remove({_id:censored.id}, (err)=>{
                      console.log('removed censored message);
                       });
                      }
                      io.emit('message),req.body)
                      res.sendStatus(200);
                })
                .catch((err)=>{
                  res.sendStatus(500);
                  console.log(err);
                });
            );



Async await

      app.post('/message', async(req,res)=>{
          var message = new Message(req.body)
            var savedMessage = await message.save();

                 console.log('saved');
                  var censored = await Message.findOne({message : 'badword'});

                  if(censored){
                   console.log(`Censored word found ${censored}`);
                     await  message.remove({_id:censored.id});
                      }
                  else{
                      io.emit('message),req.body)
                      res.sendStatus(200);
                  }
               });

NodeJs Securing RESTful Apis

       Top 5 Security Threats
       1 Injection Attacks
       2 Broken authentication
       3 Sensitive data exposure
       4 XML entities
       5 Broken Access Control

Link to current threats:

OWASP : www.owasp.org
Open Web Application Security Project
Explains the type of attacks that occur in day to day basis and how to tackel them

JWT (Jason Web Token) (link : jwt.io)
It is an open standard to transmit data and information between two parties.It mainly consist of three things namely : a header, payload and the signature

Parts of JWT Token are shown as: 1) Header has two parts
The type of token ('typ')
The algorithm used for hashing and encrypting the token('alg') 2) Payload
It consist of meta data from the request party that is required from the server.Typical information seen is the issuer of the request , information ,name etc 3) Signature
It proves the requester is - 'who he says he is' and it is this using which request is properly validated.AuthO services uses this JWT.

        USE OF JWT
        This is the best way to securly transmit information across parties on the web, so that payload could be used for any type of information you would like to transmit to the parties.It can quite evidently used to authenticate the user.

        Hence when a user is registered to a site this token will be used to validate the user as he makes several requests for several data.

POSTMAN

Used for checking the data by fetching it using get or post for sending to DB or delete data from DB or put to alter data in DB etc requests.
One of the best feature is that it provides the generate code section to get the data to front end directly by simply copying that fetch code in various languages.

     LOOPBACK
     Securing API with loopback framework which  helps to secure projects. Simply type  cmd - lb  it asks for entering project name and loopback version you want to use.

Securing API Manually

Install jasonwebtoken and bcrypt to the project.
Create model file and create schema . Use bycrypt to generate password.
Create controller and its calling functions in the index.js jwt token is passed in the header which is used to authenticate the data and user sent in the requested body.

Use of helmet to protect the headers from malicious attacks.Simply install helmet via typing cmd
npm install helmet
in index.js add app.use(helmet());
hence the header is protected.

Use of crypto for saving sensitive data by encrypting it.Just simply install crypto and import it by requiring it set a secret and then create a hash using secfret update it and digest.

Always maintain a your sessions properly.

Use of HTTPS web pages(Securing web browsing)

Use Cookie Attributes
Secure : only through HTTP
HTTPOnly:Prevents JavaScript use
Domain:specific URL or path
Expiry:when the cookie expires

Packages for cookies:
cookie package (provided by JS)
cookie-session(suggested)

Node EVENT
All objects that emit events are instances of the EventEmitter class. These objects expose an eventEmitter.on() function that allows one or more functions to be attached to named events emitted by the object. Typically, event names are camel-cased strings but any valid JavaScript property key can be used.

Example:
const EventEmitter = require('events');

      class MyEmitter extends EventEmitter {}

         const myEmitter = new MyEmitter();
        myEmitter.on('event', () => {
       console.log('an event occurred!');
          });
            myEmitter.emit('event');

usually the Event Emitters are Synchronous in nature but can be made Asynchronous by use of setImmediate() or process.nextTick();

If we want to handle events only once :
example for code:


   const myEmitter = new MyEmitter();
   let m = 0;
   myEmitter.on('event', () => {
   console.log(++m);
   });
   myEmitter.emit('event');
  // Prints: 1
  myEmitter.emit('event');
   // Prints: 2
 

 we make use of once as:
    
     const myEmitter = new MyEmitter();
    let m = 0;
    myEmitter.once('event', () => {
    console.log(++m);
    });
    myEmitter.emit('event');
    // Prints: 1
    myEmitter.emit('event');
    // Ignored


  Error Events
    If an EventEmitter does not have at least one listener registered for the 'error' event, and an 'error' event is emitted, the error is thrown, a stack trace is printed, and the Node.js process exits
 
    best practice, listeners should always be added for the 'error' events.

    const myEmitter = new MyEmitter();
    myEmitter.on('error', (err) => {
    console.error('whoops! there was an error');
    });
    myEmitter.emit('error', new Error('whoops!'));
    // Prints: whoops! there was an error


  Capture regection promises
      
       Using async functions with event handlers is problematic, because it can lead to an unhandled rejection in case of a thrown exception:

const ee = new EventEmitter();
ee.on('something', async (value) => {
  throw new Error('kaboom');
});
The captureRejections option in the EventEmitter constructor or the global setting change this behavior, installing a .then(undefined, handler) handler on the Promise. This handler routes the exception asynchronously to the Symbol.for('nodejs.rejection') method if there is one, or to 'error' event handler if there is none
   

   EventEmitter.captureRejections = true;
const ee1 = new EventEmitter();
ee1.on('something', async (value) => {
  throw new Error('kaboom');
});

ee1.on('error', console.log);
The 'error' events that are generated by the captureRejections behavior do not have a catch handler to avoid infinite error loops: the recommendation is to not use async functions as 'error' event handlers

emitter.emit(eventName[, ...args])

example in: eventemitter.js