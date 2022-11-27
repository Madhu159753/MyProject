// changing back ground color of item  by java script
var lists=document.getElementsByClassName('list-group-item');
console.log(lists);
lists[2].style.backgroundColor='green';

//
for(var i=0;i<lists.length;i++)
{

    lists[i].style.fontWeight='bold';
    lists[i].style.color='blue';
}