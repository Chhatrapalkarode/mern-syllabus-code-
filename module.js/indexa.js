var http=require('http');
const PORT=5681;
http.createServer((req,res)=>{
    res.write("i am hello here  ji 88 ");
    res.end();

// res.write("hello here ")
})
.listen(PORT,()=>{
    console.log("listen me "+PORT)
})