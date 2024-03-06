const express = require("express")

const app = express();


app.get('/', function(req, res){
	res.send("server is running on 8080")
})


app.listen(8080, function(req, res) {
	console.log(`server is running on 8080`)
})
 