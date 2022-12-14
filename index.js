import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"

const app = express()   //connected mongodb 
dotenv.config()


const connect = async() => {
    try{
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to mongodb")
    } catch (error) {
        throw error;
    }
};




app.listen(8800, ()=> {
    connect();
    console.log("Connected to backend")
})