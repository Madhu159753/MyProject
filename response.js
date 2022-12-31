const http = require('http');
const fs= require('fs');
const server=http.createServer((req,res)=>{
   
    const url=req.url;
   const method=req.method;
   if(url==='/'){
    fs.readFile("message.txt",(err,data)=>{
      if(err){
        console.log(err);
      }
      res.write("<html>");
    res.write("<head><title>enter message</head></title>");
    res.write(`<body>${data}</body>`);
    res.write(`<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">SEND</button></form></body>`);
    res.write("</html>");
    return res.end();
  });
   }
  else if(url === '/message' && method === 'POST')
   {
    const body=[];
    req.on('data',(chunk)=>{
      console.log(chunk);
     body.push(chunk);
    });  
     return req.on('end', () => {
      const parseBody=Buffer.concat(body).toString();
      const message=parseBody.split('=')[1];
      fs.writeFile('message.txt', message, err => {
        res.statusCode=302;
        res.setHeader('Location', '/');
        return res.end(); 
      });
     });    
   } 
    res.setHeader('content-type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My first page</head></title>');
    res.write('<body><h1>Welcome to my node js projec</h1></body>');
    res.write('</html');
});
server.listen(3000);