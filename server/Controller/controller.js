const express = require('express')
const FormData = require('../Model/model.schema')
const { model } = require('mongoose')

// * ADDING USER

let addUser= async(req,res)=>{
    try {

        let{fname,lname,age,gender,email,password}= req.body
        let addingUser= await FormData.create({fname,lname,age,gender,email,password})
        res.send({error:false,message:'User Added Successufully',addingUser})

    } catch (error) {
        res.send({error:true,message:error.message})
    }
}

// * UPDATE
let updateUser= async(req,res)=>{
    try {
        
    } catch (error) {
        
    }
}

module.exports={addUser}
