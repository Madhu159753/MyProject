const http = require('http');
const routes=require('./export');
console.log(routes.sometext);
const server=http.createServer(routes.h);
server.listen(3000);