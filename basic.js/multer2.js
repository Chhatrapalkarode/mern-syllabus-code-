// Image / file uploading and downloading from client to server .
const fs =require('fs');
const express =require('express');
const app = express();
const bodyparser = require('body-parser');
const PORT=5141;
const cors =require('cors');
const multer =require('multer');
app.use(cors());
app.use(bodyparser.urlencoded({extented:true}));
app.use(bodyparser.json());

//code save image to server
//diskStorage():-> function used to store file in server side permanent memory.

const st = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'images/')            //set path of folder or directory
    },
    filename:(req,file,cb)=>{        //get file name from requestbody
        cb(null,file.originalname)
    },
     
});
const upload = multer({storage:st}); //store 
app.post('/uploadimages',upload.single('file'),(req,res)=>{  
    console.log("Request from client ");
    res.send("File uploaded sucessfully");
    res.end();
});
//send file name to client app
app.get("/getimagesname",(req,res)=>{
    const fullPath ="C:/Users/Sir/Desktop/express/basic.js/image/";
    const dir = fs.opendirSync(fullPath)
    let entity
    let listing=[]
    while((entity =dir.readSync())!==null){
        if(entity.isFile()){
         listing.push({name:entity.name})
        }
    }
    dir.closeSync()
    res.send(listing)             
})
//send File from server to client app.
app.get("/getimage/:picname",(req,res)=>{
    const fullPath="C:/Users/Sir/Desktop/express/basic.js/image/";
    res.sendFile(fullPath+req.params.picname);
})
app.listen(PORT,function(){
    console.log('server is running on port:',PORT);
 });
 //http://localhost:5141/getimage/virat.jpg
 //http://localhost:5141/getimagesname
  //http://localhost:5141/getimagesname
