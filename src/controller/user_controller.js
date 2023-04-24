const userModel = require("../model/user_tbl")
const jwt=require("jsonwebtoken");

const signUpUser= async (req,res)=>{
    //Existing User check
    //Hashed Password
    //User Creation
    //Token Generate

    /**
     * http://localhost:5000/user/addUser
     * 
     * {
        "usernames":"ali khan",
        "email":"postman@gmail.com"
       }

        this json object  that we are sending from postman /app must be matched
         with => const {usernames,email}=req.body 
         these key values otherwide validation error will occur

     */
         console.log("enter")

    const {newuser,emails}=req.body; //this body was in stream form initially then after adding app.use(express.json()) in index.js file it is converted into json


    console.log(req.body)

    try{

    const existingUser=await userModel.findOne({email:emails}) //as it connects to db i.e; thats y it is await function
    // console.log(existingUser)
    // console.log(existingUser.email)
    // res.status(903).json(existingUser)
    if(existingUser!=null){
        return res.status(400).json({message:"user already exist..."});
    }

    // //const hashedPassword=await bcrypt.hash(password,10);

    const result= await userModel.create({
        userName :newuser,
        email:emails
    });


    //const token=jwt.sign({email:result.email,id:result._id},"USERAPI");
    res.status(200).json(result);
    
    }catch(error){
        console.log(error);
        res.status(500).json({message:error})
    }
}



const signInUser= async (req,res)=>{

    try{

        console.log("enter")
     const {emails}=req.body;
    // console.log(req.body)
     const existingUser=await userModel.findOne({email:emails});
     console.log(existingUser)
    if(existingUser==null){
        return res.status(401).json({message:"user  not found..."});
    }

    //const matchedPassword=await bcrypt.compare(password,existingUser.password);
    // if(!matchedPassword){
    //     return res.status(400).json({message:"invalid credentials..."});
    // }

    //const token=jwt.sign({email:existingUser.email,id:existingUser._id},"NOTEAPI");
    
    res.status(201).json(existingUser);

}catch(error){
        console.log(error);
        res.status(500).json({message:error})
}



}

module.exports={signUpUser}
/**
 * agar 2(dow) hogy to jaha use kar rahy ha udr obj mile ga pehly then ander sy properties fetch karny ha
 */  
module.exports={signUpUser,signInUser}  
