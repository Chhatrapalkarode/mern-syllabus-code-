const express =require('express');
const app =express();
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 9669;
const mongoose =require('mongoose');
const config = require('./DB.js');
const bookRoute =require("./book.route.js");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use('/book',bookRoute);
mongoose.connect(config.URL,{useNewURLParser:true}).then(()=>{
    console.log('Database is connected'+config.URL)},
    err=>{console.log("Can not connect to the database"+err)}
);
app.listen(PORT,()=>{
    console.log('server is running on port',PORT)
});




