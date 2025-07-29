import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors';
import { connectDB } from './db/db.js';
import authRoutes from "./routes/authRoutes.js";
import departmentRoutes from "./routes/departmentRoutes.js"
dotenv.config();
const PORT = process.env.PORT || 5000
connectDB();
const app = express();
app.use(express.json());

const corsOptions = {
    origin : 'http://localhost:5173',
    credentials:true
}
app.use(cors(corsOptions));

app.get("/" ,(req,res)=>{
    res.send("Api is working")
})

app.use("/api/auth" ,authRoutes);
app.use("/api/department" ,departmentRoutes);



app.listen(PORT ,()=>{
    console.log(`server is running on the http://localhost:/${PORT}`);
})