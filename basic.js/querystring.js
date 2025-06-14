var express=require('express');
var app=express();
const PORT=8555;
app.get('/',(req,res)=>{
    console.log("first get method ");
    res.send("welcome is this main page ");
    res.end();
});
app.get('/method',(req,res)=>{
    console.log("roll no="+req.query.rno);
    console.log("student name ="+req.query.sname);
    console.log("marks="+req.query.marks);
    console.log("garde="+req.query.grade);
    console.log("garde="+req.query.year);
    res.send("data is saved ");
    res.end();
});
app.listen(PORT,()=>{
    console.log("SERVER IS RUNNING");    
})
// http://localhost:8555/method?&rno=104&sname=pintu&marks=450&grade=B&year=2024