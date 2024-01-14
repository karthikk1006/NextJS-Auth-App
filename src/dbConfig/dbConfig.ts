const mongoose=require("mongoose")
require("dotenv")

export async function connect(){
    try{
       await mongoose.connect(process.env.MONGO_URI!)
       const connection=mongoose.connection
       connection.on("connected",()=>{
        console.log(" Mongo Connected Successfully");
        
       })
       connection.on("error",(err:any)=>{
        console.log(err);
        process.exit()
       })
    }
    catch(error){
        console.log(error);
        
    }
}