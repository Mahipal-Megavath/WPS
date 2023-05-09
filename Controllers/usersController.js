const User=require('../model/userModel');

module.exports.getAllusers=async (req,res,next)=>{
    try {
        const users= await User.find({_id:{$ne:req.params.id}}).select([
            "email",
            "username",
            "_id"
        ])
        return res.json(users)
    } catch (error) {
        console.log(error)
        next(error)
    }
};