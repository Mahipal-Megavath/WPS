const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username:{type:String,required:true},
    email:{type:String,required:true},
    mobilenum:{type:String,required:true},
    gender:{type:String,required:true},
    profession:{type:String,required:true},
    address:{type:String,required:true},
    password:{type:String,required:true}
})

module.exports = mongoose.model("user",userSchema,"Registration")