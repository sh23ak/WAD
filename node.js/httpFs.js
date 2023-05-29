var http=require("http")
var fs=require('fs')
http.createServer(function(req,res){
    fs.readFile('demo.txt',function(err,data){
        res.write(data)
        res.end()
    })
}).listen(8000,()=>console.log("server started"))