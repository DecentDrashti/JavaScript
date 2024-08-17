const express=require("express");
const mongoose=require("mongoose");
const bodyParser=require('body-parser');
const faculty=require('./faculty.js');

mongoose.connect("mongodb+srv://Drashti:<password>@cluster0.cgje9.mongodb.net/",{useNewUrlParser: true})
    .then(()=>{
        const app=express();
        app.use(bodyParser.urlencoded({ extended:false}))
    })