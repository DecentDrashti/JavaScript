//returns true or false
const fs=require('fs');
fs.exists('C:\\Users\\dr_dr\\OneDrive\\Desktop\\B.Tech CSE\\JavaScript\\Node\\app.js',(exists)=>{
    console.log(exists?'found':'not found!');
});

//to return the information about given file or directory

fs.stat('app.js',(err,data)=>{
    console.log(data);
})

//read files

fs.readFile('app.js',(err,data)=>{
    console.log(data.toString());
})

//difference between asynchronous function and synchronous function

//asynchronous:

fs.readFile('app.js',(err,data)=>{
    console.log(data.toString());
})
console.log("good bye");

//synchronous:

const data=fs.readFileSync('a.txt');
console.log(data.toString());
console.log("bye bye");

//write files:

fs.writeFile('DnD.txt','Drashti D. Ruparelia',(err,data) =>{
    console.log(data);
})

//write ni jagya e append lakhu to aay ave ne next je lakhu ey ave
