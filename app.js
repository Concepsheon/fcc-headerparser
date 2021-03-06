var express = require("express");
var morgan = require("morgan"); 

var app = express();

var port = process.env.PORT;

app.use(morgan("dev"));

app.get('/', function(req,res){
    res.json({
        ipaddress : req.ip,
        language: req.headers['accept-language'].split(',')[0],
        software: req.headers['user-agent'].split(') ')[0].split(' (')[1]
    });
});

app.listen(port)
