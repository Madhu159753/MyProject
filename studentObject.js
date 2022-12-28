// creating student object
const student={
    name:'Madhu',
    age:23,
    roll_No:123,
    greet(){
        console.log('hii i am' +' ' +this.name);
    }

}
console.log(student);
student.greet();