const express=require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('./config/database');
const path = require('path');

mongoose.Promise = global.Promise;
mongoose.connect(config.uri, (err)=>{
	if(err){
		console.log("could not start",err);
	}else
	{
		console.log(config.secret)
		console.log("successfully connect" +config.db);
	}
});

app.use(express.static(__dirname + '/client/dist/client'));

app.get('/',(req,res)=>{
	res.sendFile(path.join(__dirname + '/client/dist/client/index.html'));
});



app.listen(8000, ()=>{
	console.log("Server is running very well good luck")
})