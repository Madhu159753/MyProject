// const http = require('http');
// //const routes=require('./explore');
// //console.log(routes.sometext);
// //console.log(routes.few)
// const express=require('express');
// const app=express();
// app.use((req,res,next)=>{
// console.log('in the middle ware');
// next();
// });
// const server=http.createServer(app);
// server.listen(2000);
//const http = require('http');
const express=require('express');
const app=express();
app.use((req,res,next)=>{
console.log('in the middleweare');
next();
});
app.use((req,res,next)=>{
console.log('in secondmiddleware');
res.send({sort:'key'});
});

//const server = http.createServer(app);

app.listen(2000);