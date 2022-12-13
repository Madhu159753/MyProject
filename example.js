/*function person(name,age)
{
    this.name=name,
    this.age=age
    this.gree=function(){
        return('hii'+ ' '+this.name);
    }
}
const obj=new person('madhu',23);
const obj1=new person('lalit',22);
console.log(obj.name+'  '+obj.age+" "+obj.gree());
console.log(obj1.age+ '  '+obj1.name+ ' '+obj1.gree());*/
/*class student{
    static count=0;
    constructor(name,age,PhoneNumber,marks){
    this.name=name;
    this.age=age;
    this.PhoneNumber=PhoneNumber;
    this.marks=marks;
    student.c();
    }static c(){
        return(student.count++);
    }

    greet(){
        if(`${this.marks}`>40)
        {
            console.log('eli');
        }
        else{
            console.log('not eli');
        }
    }
}
const obj=new student('madhu',23,4554455,5);
const obj1=new student('lalit',22,4554455,5);
const obj2=new student('megha',28,4554455,5);
const obj3=new student('raj',20,4554455,5);
const obj4=new student('priya',26,4554455,5);
console.log(obj.name+ ' '+obj.age+ " "+obj.PhoneNumber+' '+obj.marks);
console.log(obj1.name+' '+obj1.age);
console.log(obj2.name+' '+obj2.age);
console.log(obj3.name+ ' '+obj3.age);
console.log(obj4.name+' '+obj4.age);
obj.greet();
console.log(student.c());*/

//fat arraow function
"use strict"
//var getA=function(a){
  //  return a;
//}
// change i in fa aerrow function
//var getA=a=>a;
//console.log(getA(2));
//square of a number through fat aerrow function
/*var square=a=>a*a;
console.log(square(4));
var add=(b,c)=>{return b+c};
console.log(add(4,8));
//without passing any parameter
var a=90;
var number=()=>{return a};
console.log(number());
var x=function(){
    
    this.val=1;
    setTimeout(()=>{
        this.val++;
        console.log(this.val);

    },1)
}
var xx=new x();*/
// passing argument without passing parameter in fa aerrow function
var z=(...n)=>
{
    console.log(n[0])
};
z(12,8,9);