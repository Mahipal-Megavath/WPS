const mongoose=require('mongoose')
const workdata=new mongoose.Schema({
    email :{type :String ,required: true},
    mobilenum:{type:String ,required: true},
    workstype:{type:String ,required:true},
    country:{type:String ,required:true},
    state:{type:String ,required:true},
    district:{type:String ,required:true},
    village:{type:String ,required:true},
    pincode:{type:String ,required:true}

})
module.exports=mongoose.model("workdata",workdata,"Works");