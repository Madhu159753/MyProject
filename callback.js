setTimeout(()=>console.log('timer1'),1000)
setTimeout(()=>console.log('timer 2'),0)
function x(y)
{
    console.log("inside x");
    y();
}
x(function y(){
  setTimeout(()=>console.log("inside y"),0);

    });
