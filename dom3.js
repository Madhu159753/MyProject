var li=document.getElementsByClassName('list-group-item');
console.log(li);
// it will show no changes
//li[4].style.fontWeight='blue';
// manipulaing using getelementbytagname
var li=document.getElementsByTagName('li');

console.log(li);
li[4].textContent='changed item';
for(var i=0; i<li.length;i++)
{
    li[i].style.color='blue';
    console.log('hii');
}