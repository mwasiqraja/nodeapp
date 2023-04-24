const mongoose=require("mongoose")
const user=mongoose.Schema({
    userName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    }
},{timestamps:true})

module.exports=mongoose.model("User_Tbl",user)

