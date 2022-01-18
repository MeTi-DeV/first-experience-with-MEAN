const express = require('express')
const app = express()
//comment 3 : It's CORS to access backend and frontend with different ports
//angular is 4200 , node.js is 3000
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', "*");
  res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next()
})
//comment 1 : create some data as server to get in client
app.use("/api/posts", (req, res, next) => {
  const posts = [
    {
      id: "ssdf54565",
      title: "it's first post",
      content: "it's from server"
    }, {
      id: "s45qwe65",
      title: "it's second post",
      content: "it's from server"
    }, {
      id: "qq45we46",
      title: "it's Third",
      content: "it's from server"
    },
  ]
  //comment 2 : after put data as json with message and all objects
  res.status(200).json({
    message: "success!",
    posts: posts
  })
})
module.exports = app;
