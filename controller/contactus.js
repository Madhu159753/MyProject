const path=require('path');

exports.contactuscontroller=(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','view','contact.html'));
};
exports.postcontroller=(req,res,next)=>{

    console.log(req.body);
    res.redirect('/success');

};