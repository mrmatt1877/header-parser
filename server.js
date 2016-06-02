var express = require("express");
var app = server();
var useragent = require('useragent');

 app.get("/api/whoami/", function(req, res) {
   var ip = req.headers['x-forwarded-for'];
   var language = req.headers['accept-language'].split(",")[0];
   var software = useragent.parse(req.headers['user-agent']);
   
   res.send({ipaddress: ip, language: language, software: software});
 });


var port = process.env.PORT || 8080;
app.listen(port, function(){
    console.log("listenting on " + port);
})