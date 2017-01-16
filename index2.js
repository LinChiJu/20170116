var http = require("http");
var express = require("express");
var app = express();/*宣告express*/
var sever http.createsever(app);/*啟用express*/

app.get("/".function(req,res){
        res.send("HELLO BANANA");
        res.end()
        });
//sever.listen(3000);
app.listen(1234);