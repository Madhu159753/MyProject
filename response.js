const http = require('http');
const fs= require('fs');
const server=http.createServer((req,res)=>{
   
    const url=req.url;
   const method=req.method;
   if(url==='/'){
    res.write('<html>');
    res.write('<head><title>enter message</head></title>');
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">SEND</button></form></body>');
    res.write('</html');
    return res.end();

   }
   if(url === '/message' && method === 'POST')
   {
     fs.writeFileSync('me.txt', 'dummy');
     res.statusCode=302;
     res.setHeader('Location', '/');
     return res.end();
   }
    
    res.setHeader('content-type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My first page</head></title>');
    res.write('<body><h1>Welcome to my node js projec</h1></body>');
    res.write('</html');
   

})
server.listen(3000);