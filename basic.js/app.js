var express=require('express')
var app=express()
const PORT=8520;
app.set("view engine","ejs");
app.set("views,_dirname"+"/views");
app.get("/",(req,res)=>{
    res.render("index");
});
app.get("/home",(req,res)=>{
    let data={
        id:"cs102",
        name:"pintu",
        hobbies:['playling cricket','singing','dancing','cycling']
    }
    res.render('index',{data:data});

});
app.listen(PORT,()=>{
    console.log('server is running',+PORT)
})
