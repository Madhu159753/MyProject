
const express=require('express');
const parser=require('body-parser');
const app=express();
app.use(parser.urlencoded({extended:false}));

app.use('/add-product',(req,res,next)=>{
    res.send(`<body><form action="/product" method="POST"><input type="text" name="size"><input type="text" name="title"><button type="submit">SEND</button></form></body>`);
});
app.use('/product',(req,res,next)=>{

    console.log(req.body);
    res.redirect('/');

});
app.use('/',(req,res,next)=>{
res.send({sort:'key'});
});

//const server = http.createServer(app);

app.listen(2000);