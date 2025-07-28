import mongoose from "mongoose";

export const  connectDB = async () =>{
     
     try {
           await mongoose.connect(process.env.MONGO_URI).then(()=>{
             console.log('database connected');
           }).catch(err=>{
              console.log(err);
           })
     }
      catch(error){
         console.log(error)
      }

}
