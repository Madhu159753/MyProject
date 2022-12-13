const studentobj = {
	'yash': 26,
	'vaibhav': 24,
	'rajesh' : 25,
	}
 let count=0;
for(let key in studentobj)
{
    count++;
}
    let sum=0;
let arr=Object.values(studentobj);
for(let i=0;i<arr.length;i++){
    
     sum+=arr[i];
    
}
let ave=0;
ave=sum/count;
console.log(ave);
