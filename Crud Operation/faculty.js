const path= require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded());

const faculty = [
    {
        id:1222,
        name:'kunj',
        email:'kunj@darshan.ac.in',
        age:19
    },
    {
        id:1231,
        name:'drashti',
        email:'drashti@darshan.ac.in',
        age:2
    },
    {
        id:1039,
        name:'krisha',
        email:'krisha@darshan.ac.in',
        age:18
    },
    {
        id:1241,
        name:'diya',
        email:'diya@darshan.ac.in',
        age:32
    },
    {
        id:1220,
        name:'yasha',
        email:'yasha@darshan.ac.in',
        age:92
    }
];
//getAllX
app.get('/faculty',(req,res)=>{
    res.send(faculty);
})

//getXByID
app.get('/faculty/:index',(req,res)=>{
    res.send(faculty[req.params.index]);
    //res.send(ans);
});

//Create
app.post('/faculty',(req,res)=>{
    faculty.push(req.body);
    res.send("faculty added");
});

app.get('/faculty/find/:id', (req, res) => {
    const ans = faculty.find(fac => fac.id == req.params.id);
    res.send(ans);
});

app.patch('/faculty/:id',(req,res)=>{
    const idToEdit = faculty.findIndex((fac)=>{
        if(fac.id==req.params.id){
            return true;
        }
    });
    faculty[idToEdit] = req.body;
    res.send('updated');
});

app.delete('/faculty/:id',(req,res)=>{
    const idToEdit = faculty.findIndex((fac)=>{
        if(fac.id==req.params.id){
            return true;
        }
    });
    faculty.splice(idToEdit,1);
    res.send("faculty deleted");
});

app.listen((3010),()=>{
    console.log('server obtained from 3010')
})
