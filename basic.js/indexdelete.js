
const express=require('express');
const app=express()
const PORT=8500;
app.get("/",(req,res)=>{
    res.send("welcome the express");
    res.end();
});
app.get("/home",(req,res)=>{
    res.send(("welcome to the home page "));
    res.end();


});
app.post("/home1",(req,res)=>{
    res.send(("welcome to the home 1 page "));
    res.end();


});
app.delete("/home1",(req,res)=>{
    console.log("delete ")
    res.send(("welcome to the home 1 page delete "));
    res.end();

});
app.listen(PORT,()=>{
    console.log("server is running ="+PORT);
});