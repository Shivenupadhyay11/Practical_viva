const mongoose =require('mongoose');


const productSchema=new mongoose.Schema({
    
    name:String,
    price:Number,
    stock:Number,
    catogary:String,
});

module.exports=mongoose.model("product",productSchema);