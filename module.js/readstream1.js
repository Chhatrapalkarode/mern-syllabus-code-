// read stream data 
// read data from the file and print the data in server /console/terminal
var fs =require("fs");
var data = '';
var readerStream =fs.createReadStream('sample.txt');
readerStream.setEncoding('UTF-8');
readerStream.on('data',(chunk)=>{
    data+=chunk;
});
readerStream.on('end',()=>{
    console.log(data);
});
readerStream.on('error',(err)=>{
    console.log(err.stack);
});