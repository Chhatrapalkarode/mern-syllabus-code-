var express =require('express');
var app =express();
const PORT = 6777;



var bodyparser =require('body-parser');
// var cors =require('cors');
var fs =require('fs'); 

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
// app.use(cors());

const cors = require('cors');
app.use(cors());


app.get("/",(req,res)=>{
    res.send("Welcome Default Url Invoked");
    res.end();
});
app.get("/showemp",(req,res)=>{
    fs.readFile("./emp.json","utf-8",(err,data)=>{
        if(err)
        {
            res.send(err); 
            res.end();
        }
        else{
            res.send(data);
            res.end();
        }
    });
});
app.post("/saveemp/:ecode/:ename/:esal/:dept",(req,res)=>{
    fs.readFile("./emp.json","utf-8",(err,data)=>{
        if(err)
        {
            res.send(err);
            res.end();
        }
        else{
            var elist = JSON.parse(data);
            var obj={
                ecode:req.params.ecode,
                ename:req.params.ename,
                esal:req.params.esal,
                dept:req.params.dept
            };
            elist.push(obj);
            var ulist = JSON.stringify(elist);
            fs.writeFile("./emp.json",ulist,()=>{
                res.send("Data Saved");
                res.end();
            });
        }
    });
});
app.listen(PORT,()=>{
    console.log("Server is Running on port"+PORT);
});