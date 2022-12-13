<html>
    <body>
        <script>
           const premovie=async ()=>{
            const promisewife=new Promise((reslove,reject)=>{
                setTimeout(()=>resolve('ticket'),3000);
            });
    let ticket=await promisewife();
           
    const getpopcorn=new Promise((resolve,reject)=>resolve(`popcorn`));
    const getbutter=new Promise((resolve,reject)=>reslove(`butter`));
    console.log('husband: we should go in');
    console.log('wife:no i am hunger');

    let popcorn=getpopcorn();
    console.log('husband :we should go in');
        console.log('wife:no,i need butter on my popcorn');

        let butter=await getbutter();
        console.log('some thing');
        return ticket;
}
premovie().then((m)=>console.log(m));
console.log('ticket 2');
console.log('ticket 4')
</script>
    </body>
    </html>