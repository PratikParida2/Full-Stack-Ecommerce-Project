import express from 'express'
import dotend from 'dotenv'
import cors from 'cors'
import mongoose from 'mongoose'
import connectDB from './config/Database.js'
import connectCloudinary from './config/Cloudinary.js'

const app=express();
const port=dotend.config().PORT||3000;
connectDB();
connectCloudinary();

//middleware
app.use(express.json());
app.use(cors());

//Api Endpoints
app.get('/',(req,res)=>
{
    res.send("Server Is Started In Port Number 3000");
});
app.listen(port,()=>
{
    console.log("Server Is Started");
})