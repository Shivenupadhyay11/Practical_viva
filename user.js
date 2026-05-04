const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
    id:Number,
    name:String,
    email:String,
    passwordHash:String,
    role:String,
});

module.exports=mongoose.model("user",userSchema);