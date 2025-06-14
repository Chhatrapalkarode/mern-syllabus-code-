var http=require("http");
var url=require("url");
var qs=require("querystring")
const PORT=5688;
http.createServer((req,res)=>{
 var udata=url.parse(req.url);
 var qdata=qs.parse(udata.query)
 console.log("data recieved from the client side ="+qdata.sname);
 res.write("welcome the this query string ")
 res.end();
})
.listen(PORT,()=>{
    console.log("server is running="+PORT);
});
// enter the this url link =http://localhost:5688/?sname=pintu