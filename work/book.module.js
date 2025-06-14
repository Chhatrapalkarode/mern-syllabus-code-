var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var Book = new Schema({
    BId:{type:Number},
    BName:{type:String},
    BPrice:{type:Number},
},{collection:"Book"});
module.exports = mongoose.model("Book",Book);