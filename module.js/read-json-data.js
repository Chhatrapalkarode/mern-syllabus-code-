var http=require("http");
var url=require("url");
var  qs=require("querystring");
var fs=require("fs");
const PORT =5679;
http.createServer((req,res)=>{
    var udata=url.parse(req.url);
    var qdata=qs.parse(udata.qs);
    fs.readFile("./urll.json","utf8",(err,data)=>{
        if(err){
            res.write(err);
            res.end();

        }
        else{
            
            res.write(data);
            res.end();
           
        }
    })
})
.listen(PORT,()=>{
    console.log("server is running on http://localhost"+PORT)
});
//  http://localhost:5679
// http://localhost:5679/?sname=vishal&roll=505&marks=8528&dept=iit
 

 
