//program using call
function addtothis(a,b){
    return this.firstName+this.secondName +(a+b);

}
var person1={
    firstName:"Madhu",
    secondName:"bala"
}
console.log(addtothis.call(person1,3,5));
//program using apply
var Apply=function (a,b,c){
    return this.firstName +(a +b +c);
};
var person2={
    firstName:"ram"
}
var arr=[1,2,3];
console.log(Apply.apply(person2,arr));
// write a program using bind
function B(a,b,c)
{
    return this.firstName+(a+b+c);
}
var person3={
    firstName:"johan"
}
var arr1=[4,7,5];
var r=(B.bind(person3));
console.log(r(4,7,5));
// printing student age
var student={
       age:20
}
var printage=function()
{
    return this.age;
}
var sage=printage.bind(student);
console.log(sage());
//curring using bind
function multyply(a,b)
{
    console.log(a*b);
}
let res=multyply.bind(this,2);
res(3);
let m=multyply.bind(this);
m(5,6);
// curring using closure
function multi(x){
    return function(y){
        console.log(x+y);
    }
}
let newres=multi(3);
newres(5);
    