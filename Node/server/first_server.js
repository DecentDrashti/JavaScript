// const http = require('http');

// server = http.createServer((req,res)=>{
// 	res.end('Hello world from my first server');
// });

// server.listen(3000);
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
	if(req.url == "/home"){
        fs.readFile("home.html", (err, data) => {
            if(err){
                res.end(err);
            }
            else{
                res.writeHead(200, 'content-type', 'text/html');
                res.end(data);
            }
        });
    }


    else if(req.url == "/about"){
        fs.readFile("about.html", (err, data) => {
            if(err){
                res.end(err);
            }
            else{
                res.writeHead(200, 'content-type', 'text/html');
                res.end(data);
            }
        });
    }

    // else if(req.url == "/contact"){
    //     fs.readFile("contact.html", (err, data) => {
    //         if(err){
    //             res.end(err);
    //         }
    //         else{
    //             res.writeHead(200, 'content-type', 'text/html');
    //             res.end(data);
    //         }
    //     });
    // }

    else{
     const data=fs.readFileSync("first_server.html",'UTF-8');
	 res.end(data);   
    }
});

server.listen(3002, () => {
    console.log("server started at 3002");
});