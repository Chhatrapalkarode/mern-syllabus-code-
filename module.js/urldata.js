var http=require("http");
var url=require("url");
var qs=require("querystring")
const PORT=5689;
http.createServer((req,res)=>{
 var udata=url.parse(req.url);
 var qdata=qs.parse(udata.query)
 console.log("data recieved from the client side ="+qdata.sname);
 console.log("data recieved from the client side ="+qdata.roll);
 console.log("data recieved from the client side ="+qdata.marks);
 console.log("data recieved from the client side ="+qdata.grade);
 res.write("welcome the this query string ")
 res.end();
})
.listen(PORT,()=>{
    console.log("server is running="+PORT);
});
// http://localhost:5689/?sname=pintu&roll=101&marks=5555&grade=A
