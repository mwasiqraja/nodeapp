const exp=require('express');
const {signUpUser,signInUser}=require("../controller/user_controller")
//const signObj=require("../controller/user_controller")

const userRouter=exp.Router();

userRouter.post("/addUser",signUpUser)
userRouter.post("/alluser",signInUser)

/** here it is exporting only the userRouter not the whole object*/
module.exports=userRouter