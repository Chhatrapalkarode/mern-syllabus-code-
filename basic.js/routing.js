// routing
var express=require('express');
var app=express();
var router=express.Router();
const PORT=8321;
app.use(router)
router.get('/student',(req,res)=>{
    console.log("request get method from the client side ");
    res.send("get methode are execute ");
});
router.post('/emp',(req,res)=>{
    res.send("post methode are execute ");
    res.end();

});
app.listen(PORT,()=>{
    console.log("server is ruuning "+PORT);
})