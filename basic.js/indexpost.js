
const express=require('express');
const app=express()
const PORT=8500;
app.get("/",(req,res)=>{
    res.send("welcome the express");
    res.end();
});

app.post("/home1",(req,res)=>{
    console.log("client is  here ")
    res.send(("welcome to the home 1 page "));
    res.end();


});
app.listen(PORT,()=>{
    console.log("server is running ="+PORT);
});