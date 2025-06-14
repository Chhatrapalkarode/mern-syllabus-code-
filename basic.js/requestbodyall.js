var express =require('express');
var app =express();
const PORT = 6777;



var bodyparser =require('body-parser');
// var cors =require('cors');
var fs =require('fs'); 

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
// app.use(cors());

const cors = require('cors');
app.use(cors());


app.get("/",(req,res)=>{
    res.send("Welcome Default Url Invoked");
    res.end();
});
app.get("/showemp",(req,res)=>{
    fs.readFile("./emp.json","utf-8",(err,data)=>{
        if(err)
        {
            res.send(err); 
            res.end();
        }
        else{
            res.send(data);
            res.end();
        }
    });
});
app.get("/searchemp/:ecode",(req,res)=>{
  fs.readFile("./emp.json","utf-8",(err,data)=>{
    if(err)
    {
        res.send(err);
        res.end();
    }
    else{
        var found = false,i;
        var elist = JSON.parse(data);
        for(i=0;i<elist.length;i++)
        {
            if(req.params.ecode == elist[i].ecode)
            {
                found=true;
                var obj={
                    ecode:elist[i].ecode,
                    ename:elist[i].ename,
                    esal:elist[i].esal,
                    dept:elist[i].dept
                };
                res.send(JSON.stringify(obj));
                res.end();
            }
        }
        if(found == false)
        {
            res.send("Data Not Found");
            res.end();
        }
    }
  });
});
app.post("/saveemp/:ecode/:ename/:esal/:dept",(req,res)=>{
    fs.readFile("./emp.json","utf-8",(err,data)=>{
        if(err)
        {
            res.send(err);
            res.end();
        }
        else{
            var elist = JSON.parse(data);
            var obj={
                ecode:req.params.ecode,
                ename:req.params.ename,
                esal:req.params.esal,
                dept:req.params.dept
            };
            elist.push(obj);
            var ulist = JSON.stringify(elist);
            fs.writeFile("./emp.json",ulist,()=>{
                res.send("Data Saved");
                res.end();
            });
        }
    });
});
app.put("/updateemp",(req,res)=>{
    var obj={
        ecode:req.body.ecode,
        ename:req.body.ename,
        esal:req.body.esal,
        dept:req.body.dept
    };
    fs.readFile("./emp.json","utf-8",(err,data)=>{
        if(err)
        {
            res.send(err);
            res.end();
        }else{
            var i, found=false;
            var elist = JSON.parse(data);
            for(i=1;i<elist.length;i++)
            {
                if(elist[i].ecode == obj.ecode)
                {    
                    found=true;
                    elist[i].ecode=obj.ecode;
                    elist[i].ename=obj.ename;
                    elist[i].esal=obj.esal;
                    elist[i].dept=obj.dept;
                     

                    var ulist = JSON.stringify(elist);
                    fs.writeFile("./emp.json",ulist,()=>{
                         res.send("Data updated");
                        res.end();
                    })
                }
            }
        }
    });
});
app.delete("/deleteemp/:ecode",(req,res)=>{
    fs.readFile("./emp.json","utf-8",(err,data)=>{
        var found = false;
        if(err)
        {
            res.send(err);
            res.end();
        }
        else{
            var elist = JSON.parse(data);
            for(i=0;i<elist.length;i++)
            {
                if(elist[i].ecode==req.params.ecode)
                {
                    found=true;
                    elist.splice(i,1);
                    var ulist=JSON.stringify(elist);
                    fs.writeFile("./emp.json",ulist,()=>{
                        res.send("Data Deleted");
                        res.end();
                    });
                }
            }
            if(found==false)
            {
                res.send("Data not found and cannot delete");
                res.end();
            }
        }
    });
});
app.listen(PORT,()=>{
    console.log("Server is Running on port"+PORT);
});