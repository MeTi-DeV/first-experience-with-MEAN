const express = require('express')
const app = express()
//commented 1 : body-parser is for pos data as json to server
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

//comment 2 : use post() method to send our client data to the server
app.post("/api/posts", (req, res ,next) => {
  //comment 3 : put that new data body to new variable like post
  const post = req.body
  res.status(201).json({
    message: "it is data",post,
  });
});
app.get("/api/posts", (req, res, next) => {
  const posts = [
    {
      id: "fadf12421l",
      title: "First server-side post",
      content: "This is coming from the server"
    },
    {
      id: "ksajflaj132",
      title: "Second server-side post",
      content: "This is coming from the server!"
    }
  ]
  res.status(200).json({
    message: "success!",
    posts: posts
  })
})
module.exports = app;
