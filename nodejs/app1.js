
const express=require('express');
const parser=require('body-parser');

const app=express();

const adminRouts=require('./admin');
const shopRouts=require('./shop');

app.use(parser.urlencoded({extended:false}));
  

app.use('/admin',adminRouts);// adding separate filter
app.use(shopRouts);
// adding page not found 404 status code
app.use((req,res,next)=>{
res.status(404).send('<h1>page not found </h1>');
});

//const server = http.createServer(app);

app.listen(2000);


// admin file for seprate filer
const express=require('express');
const router=express.Router();
// adding separate filter  /admin
router.get('/add-product',(req,res,next)=>{
    res.send(`<body><form action="/admin/add-product" method="POST"><input type="text" name="size"><input type="text" name="title"><button type="submit">SEND</button></form></body>`);
});
router.post('/add-product',(req,res,next)=>{

    console.log(req.body);
res.redirect('/');

});

 module.exports=router;
 // shope route file
 const express=require('express');
const router=express.Router();

router.get('/',(req,res,next)=>{
    res.send('<h1>hello from express</h1>');
    });
    
module.exports=router;