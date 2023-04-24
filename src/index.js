const express=require('express');
const app=express(); //this is instance of server application
const userRouter = require('./routes/userRoutes');
const mongoose=require('mongoose')
const cors=require('cors');
app.use(express.json());
app.use(cors());
app.use("/user",userRouter);
const hostname='0.0.0.0'



mongoose.set('strictQuery',false)
mongoose.connect("mongodb+srv://mwasiq500:wasapi@cluster0.hlebsr2.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{

    app.listen(5000,hostname,()=>{
        console.log("Server running at port no. 5000")
    });



}).catch((error)=>{

    console.log(error)

})
