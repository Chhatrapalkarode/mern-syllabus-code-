// requestparameter.js
// requesr parameter type 
var express=require('express');
var app=express();
const PORT=5678;
app.get('/',(req,res)=>{
    res.send("file are avilabel here ");
    console.log("first get are running ")
});
app.get('/home/:rno/:sname/:marks/:dept',(req,res)=>{
    console.log("roll no="+req.params.rno);
    console.log("name="+req.params.sname);
    console.log("marks="+req.params.marks);
    console.log("dept="+req.params.dept);
    res.send("data is saves get method ");
    res.end();

});
// get data by post method:
app.post('/home/:rno/:sname/:marks/:dept',(req,res)=>{
    console.log("roll no="+req.params.rno);
    console.log("name="+req.params.sname);
    console.log("marks="+req.params.marks);
    console.log("dept="+req.params.dept);
    res.send("data is saves get method ");
    res.end();

})
app.listen(PORT,()=>{
    console.log(" server is running ="+PORT);
})
// http://localhost:5678/home/104/pintu/450/it