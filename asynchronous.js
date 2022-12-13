function greet(){
    console.log("hello asnchronous world");
    console.log(" how are you hope ou are fine")
}
let intervalId=setTimeout(greet,5000);
console.log('id:'+intervalId);
//show time every 3 second
let count=0;
let interval=setInterval(function(){
 count++;
 if(count===5){
    clearInterval(interval)
 }
 let datetime=new Date();
 let time=datetime.toLocaleTimeString();
console.log(time);
},2000);
// call back funcion
function madhu(name ,callback){
    console.log("hiii"+name);
    callback(name);
}
function callback()

{
    console.log("hiii i am callback");

}
setTimeout(madhu,1000,'johan',callback);
