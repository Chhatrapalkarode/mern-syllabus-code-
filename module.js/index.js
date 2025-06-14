var http=require('http');
const PORT=5688;
var server=http.createServer((req,res)=>{
    res.write("i am hello here ");
    res.end();


})
server.listen(PORT,()=>{
    console.log("listen me "+PORT)
})