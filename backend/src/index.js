import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";
import dotenv from "dotenv"
import cors from "cors"
const app=express()
app.use(express.json());
app.use(morgan('dev'))
dotenv.config()
app.use(cors());

 
// importing routing
import bookRoutes from "./routes/bookRoutes.js"

// --------connecting Database --------------//
const db= async()=>{
    try {
        await mongoose.connect(process.env.CLUSTER)
        console.log(`db is connected`);
    } catch (error) {
        console.log(`Error in mongodb${error}`);
    }
}
db();

// ---------routes------- //
app.use('/api/v1/book',bookRoutes)







const server =app.listen(process.env.PORT,()=>{
    console.log(`Server is running at ${process.env.PORT}`);
})
