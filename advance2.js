const f=(arr)=>
{
    let count=0;
    
    return()=>{
    
        console.log('hello'+arr[count])
        count++;
        
    }
}
const n= f(['ram','shyam','madhu'])
n();
n();
n();