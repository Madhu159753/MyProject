function attachEventLisner(){
   var count=0;
document.getElementById('clickMe').addEventListener('click',function(){
    console.log("documentloded",++count);
});

}
attachEventLisner();