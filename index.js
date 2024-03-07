const express = require("express")
require('dotenv').config()


const app = express();


app.get('/test', function (req, res) {
  const envValues = process.env.TEST_ENV
  res.send(`The test Env = ${envValues}`)
})

app.get('/', function (req, res) {
  res.send("server is running on 8080")
})


app.listen(8080, function (req, res) {
  console.log(`server is running on 8080`)
})
