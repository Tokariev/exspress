# Express.js 🫒

> Everything in Express.js is from top to bottom!


## Used technologies:
1. Views (ejs)
2. Routers
   
   1. URL with parameters
    ```js
    http://localhost:3000/users/1
    ...
    res.send(`Create User Wiht ID ${req.params.id}`);
    ```
3. Serve static files

   ```js 
   server.use(express.static("public"));
   ```
4. Access to body variables  
   ```js 
   server.use(express.urlencoded({ extended: true }));
   ```
5. Redirect to URL
   ```js
   res.redirect(`/users/${users.length - 1}`);
   ```
6. Read query params
   ```js
   http://localhost:3000/users?name=Mykola
   ...
   console.log(req.query.name);
   ``` 

[YouTube source](https://www.youtube.com/watch?v=SccSCuHhOw0&t=922s)