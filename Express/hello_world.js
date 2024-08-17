const express=require('express');
const app=express();
app.get('/',(req,res)=>{
    res.send('hello world');
})
app.listen((3008),()=>{
    console.log('server obtained from 3008')
})