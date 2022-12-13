class student{
    static count=0;
    constructor(name,age,PhoneNumber,marks){
    this.name=name;
    this.age=age;
    this.PhoneNumber=PhoneNumber;
    this.marks=marks;
    }
    egligibleForPlacement(minimumage){
        return (minimumMarks)=>{
            if(this.age>minimumage && this.marks>minimumMarks){
                console.log(this.name+" is ready for placement");
            }
            else{
                console.log(this.name+" is not ready for placement");
            }
        }
    }
}
const obj=new student('madhu',23,4554455,50);
const obj1=new student('lalit',22,4554455,50);
const obj2=new student('megha',28,4554455,5);
const obj3=new student('raj',20,4554455,5);
const obj4=new student('priya',26,4554455,5);
console.log(obj.name+ ' '+obj.age+ " "+obj.PhoneNumber+' '+obj.marks);
console.log(obj1.name+' '+obj1.age+ " "+obj1.marks);
console.log(obj2.name+' '+obj2.age);
console.log(obj3.name+ ' '+obj3.age);
console.log(obj4.name+' '+obj4.age);
obj.egligibleForPlacement(19)(40);
obj1.egligibleForPlacement(18)(40);
obj2.egligibleForPlacement(18)(40);
obj3.egligibleForPlacement(18)(34);