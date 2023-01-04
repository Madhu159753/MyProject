const path=require('path');
exports.geterror=(req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'../','view','404.html')); 
    };