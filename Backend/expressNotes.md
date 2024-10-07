# Express theory.

## What is Express.js & why is it used?
- It is a fast and optimized web application framework for Node.js.
- Allows us to create 1 Middlewares, 2 Handle routings, 3 error handling 4 template engine.

## What are the key features of Express.js?
- Routing
- Middleware
- Template Engines
- Error Handling (by using middleware)

## How does Express.js handle routing?
It has mechanisms that handle different types of HTTP requests like GET, POST, PUT, DELETE.
Routes can be defined as app.get(), app.post(), or router.get().


## What is middleware?
Middleware is a function that has access to the request and response objects.

## How do you handle form data in Express?
Parse JSON bodies:``` app.use(bodyParser.json())```
For URL encoded bodies: ```app.use(bodyParser.urlencoded({ extended: false }))```


## How can you handle static files (e.g., CSS, images) in Express?
Use ```app.use(express.static('public'))``` to serve files from the public directory.


## What is the purpose of the next() function?
It is used in middleware to pass control to the next middleware function in the stack.

## How can you handle route parameters in Express.js?
By prefixing a colon (:): app.get('/user/:id', (req, res) => { const id = req.params.id })


## How to implement authentication in Express.js?
- Token-based authentication using JWT.
- Session-based authentication using cookies.
- Integration with third-party authentication providers like OAuth.

## Explain the concept of middleware chaining in Express.
It involves registering multiple middleware functions in a specific order using app.use or route-specific.
Each middleware runs in sequence and can modify the request or response object before passing to the next middleware.

## How can you handle errors in Express?
Using middleware: app.use((err, req, res, next) => {})

## What are route handlers in Express.js?
Used to handle requests to specific routes, e.g., app.get('/', (req, res) => {}). // this function is handler.

## How can you access query parameters in Express?
Via req.query, e.g., /search?q=term would access the query using req.query.q.

## How can you send a JSON response in Express?
Using res.json({ id: 13 }).

## How can you handle file uploads in Express?
Using multer.upload.single().


-----------------------------------------

## What is the purpose of app.get and app.use()
- app.get() => It is more specific to HTTP route.
- app.use() => It is used to create middleware.

## How to set response header in express.js
   ```jsx

     res.setHeader({Content-Type:"text/plain"})
     res.send({message:"hello"})

   ```
## what is purpose of app.locales.
It is used to pass data from server to template or view.
```jsx 
 app.locale.title= "hello" 
```

## How to manage session management in express.js

## How to handle CORS in express.js
  app.use(cors())

## explain route prefixing in express.js
  - used to grouping multiple routes under common prefix.
    ```jsx
        const route = express.Router
        app.use('/api', route)
        router.get()
        router.post()

    ```  

## How can you implement rate limit in express js | how to implement request throttling.
- Rate limiting can done by using middleware ```express rate limiter```
- It is used to restrict no of request from specific IP address for specific time.

```jsx
 const rateLimit = require('express-rate-limit')

 app.use(rateLimit({
    windowMS:60* 100,   // min
    max:10,
    message:"too many request"
    }))

```

## what is purpose of view engine in express js
- It is used to dynamically genaration of HTML or any other markup language.
- They helps in rendering a template, inject data into template before sending to client.


## how can you handle redirects in express js
 
 res.redirect("/new-route")

## how can you access headers in express js
``` jsx 
    const userAgent= req.headers('user-agent')
    const contentType= req.headers('content-type')
```

## how can you enable compression (gzip) in express js
app.use(compression())  // this compress all responses.

## What is purpose of app.route() in express
 we can write multiple route handler for single url

 ```jsx

 app.route('/user')
        .get(()=>)
        .post(()=>)
 ```

## how can you implement input validation 
- Using express validator.

## how to handle cookie
 - using cookie parser
 ```jsx
 const cookieParser= require("cookie-parser")

 app.use(cookieParser())

 ```

 ## how to implement caching in node js
```jsx
const cacheController= require("express-cache-controller")
app.use(cacheController())

req.cacheController({maxAge:3600})

```
## What is view rendering
  render template using view engine and send it to client as response

## How to implement HTTPs in express js
    we need to provide **SSL/ TLS certificate** and **privet key** for secure connection.

## How can you use input sanitization
   By using middlewares like 
     - express-validator
     - sanitize-HTML
   It is used to prevent common security venerability's like cross site scripting.
   app.post() 

## how can you handle session timeouts

  By setting expiration time for session cookies.
  Session management middleware that provides option for session timeout.

## How to handle SSR in express
  by using view engine            

## how can you handle file download
  res.download(filepath, filename, (err)=>)  

