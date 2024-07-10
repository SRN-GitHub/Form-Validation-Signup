const express = require('express')
const connectToMongoDb = require('./Database/connection')
require('dotenv').config()
const userMiddleware = require('./Routes/routes')
const cors = require('cors')


let app=express()
app.use(cors())
app.use(express.json())
app.use("/api/addUser",userMiddleware) //* CALLING THE MIDDLE WARE

//* SERVER 
let startServer=async()=>{
    try{
        await app.listen(process.env.MY_PORT,()=>{
            console.log(`Server is Running on Protn No : ${process.env.MY_PORT}`)
        })
        //*  MONGODB CONNECTION
        await connectToMongoDb(process.env.Mongo_URL)
        console.log(`Connected To MongoDB`)
        
    } catch (error) {
        console.log(error.message)
    }
}

startServer();