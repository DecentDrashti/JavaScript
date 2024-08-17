const express=require('express');
const app=express();
const path=require('path');

app.get('/',function (req,res) {
    res.sendFile(path.join(__dirname,'web_app.html'),(err,data)=>{
        if (err) {
            throw err
        }
    });
    //res.send('hello world')
});
app.get('/home',function (req,res) {
    res.sendFile(path.join(__dirname,'home.html'),(err,data)=>{
        if (err) {
            throw err
        }
    });
    // res.send('welcome home');
});

app.get('/about',function (req,res) {
    res.sendFile(path.join(__dirname,'about.html'),(err,data)=>{
        if (err) {
            throw err
        }
    });
    //res.send('welcome about');
});

app.get('/contact',function (req,res) {
    res.sendFile(path.join(__dirname,'contact.html'),(err,data)=>{
        if (err) {
            throw err
        }
    });
    res.send('welcome contact');
});

app.get('/explore',function (req,res) {
    res.send('welcome explore');
});

app.get('/service',function (req,res) {
    res.send('welcome service');
});

app.listen((3010),()=>{
    console.log('server obtained from 3010')
})
