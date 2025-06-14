// request body pass value:
// requestbody.js
var express=require('express');
var app=express();
var bodyparser=require('body-parser');
var cors=require('cors');
const PORT=8500;
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.use(cors());
app.get('/',(req,res)=>{
    res.sendFile("C:/Users/Sir/Desktop/express/basic.js/bodyhtml.html");


    
});
app.post('/savedata',(req,res)=>{
    console.log("data is saved  from the client ");
    console.log("roll no="+req.body.rno);
    console.log("name="+req.body.sname);
    console.log("marks="+req.body.marks);
    res.send("data is saved ")
    res.end();
});
app.listen(PORT,()=>{
    console.log("server is running ="+PORT);
})