// multer type example 
const fs=require("fs");
const express=require('express');
const app=express();
const bodyparser=require("body-parser");
const PORT=8520;
const cors=require('cors');
const multer=require("multer");
app.use(cors());
app.use(bodyparser.urlencoded( { extended:true}));
app.use(bodyparser.json());
const st=multer.diskStorage( {destination:(req,file,cb)=>{
    cb(null,'image/')
},
filename:(req,file,cb)=>{
    cb(null,file.originalname)
}

});
const upload=multer({storage:st});
app.post('/uploadimage',upload.single('file'),(req,res)=>{
    res.send("file upload  successfull");
    res.end();
});
app.get('/getimage',(req,res)=>{
    const fulpath=("C:/Users/Sir/Desktop/express/basic.js/image/"); // chnage (\) to(/)  image path  always (" inside the image path ")

    const dir=fs.opendirSync(fulpath)
    let entity
    let listing=[]
    while((entity=dir.readSync())!=null){
        if(entity.isFile()){
            listing.push({name:entity.name})
        }
    }
        dir.closeSync()
        res.send(listing);

    
   
})
// send file from server to client side  app
app.get('/getimage1/:picname',(req,res)=>{
    const fulpath=("C:/Users/Sir/Desktop/express/basic.js/image/");
    res.sendFile(fulpath+req.params.picname)
});
app.listen(PORT,function(){
    console.log("server is running "+PORT)
});