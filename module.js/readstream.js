//  read data from file and print the data in browser
 var fs=require('fs')
 var http=require('http');
const server=http.createServer();
server.on("request",(req,res)=>{
    const reads=fs.createReadStream("sample.txt");
    reads.on("data",(chunkdata)=>{
        res.write(chunkdata);
    });
    reads.on("end",()=>{
        res.end();
    });

})
server.listen(8000,()=>{
    console.log("server is running ="+8000)
})