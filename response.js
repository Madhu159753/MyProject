var http = require('http');
const server=http.createServer((req,res)=>{
   console.log(req.url,req.headers,req.method);
    res.setHeader('content-type','text/html');
    res.write('<html>');
    res.write('<head><title>My first page</head></title>');
    res.write('<body><h1>Welcome to my node js projec</h1></body>');
    res.write('</html');
   

})
server.listen(2000);