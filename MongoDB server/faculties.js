const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const Faculty = require('./Schema');

const connectionString ="mongodb+srv://Drashti:drashti2305@cluster0.cgje9.mongodb.net/"
mongoose.connect(connectionString) .then(()=>{
    console.log("database connected");

    const app = express();
    app.use(bodyParser.urlencoded());

        app.get('/home',(req,res)=>{
            res.send("Welcome");
        });

        //Get
        app.get('/faculties',async (req,res)=>{
            const ans = await Faculty.find();
            res.send(ans);
        });

        //GetAll
        app.get('/faculties',async (req,res)=>{
            const ans = await Faculty.find();
            res.send(ans);
        });

        //GetByID
        app.get('/faculties/:id',async (req,res)=>{
            const ans = await Faculty.findOne({id:req.params.FacultyId});
            res.send(ans);
        });

        //Create
        app.post('/faculties',async (req,res)=>{
            fac = new Faculty({...req.body});
            const ans = await fac.save();
            res.send(ans);
        });

        //Delete
        app.delete('/faculties/:id',async (req,res)=>{
            const ans = await Faculty.deleteOne({id:req.params.FacultyId});
            res.send(ans);
        });

        //Update
        app.patch('/faculties/:id',async (req,res)=>{
            const fac = await Faculty.findOne({id:req.params.id});
            fac.name = req.body.name;
            const ans = await fac.save();
            res.send(ans);

        })

        app.listen((3005),()=>{
            console.log('server started @3005')
        })

});