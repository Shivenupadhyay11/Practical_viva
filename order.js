const mongoose=require('mongoose');
const orderSchema=new mongoose.Schema({
   userId:String,
   product:Number,
   totalamount:Number,
   status:String,
});

module.exports=mongoose.model("user",orderSchema);