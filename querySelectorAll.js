var second=document.querySelectorAll('.list-group-item');
console.log(second);
second[1].style.color='green';
second[2].textContent='hello';
//Choose all the odd elements and make their background green using QuerySelectorALL﻿

var odd=document.querySelectorAll('.list-group-item:nth-child(odd)');
for(var i=0;i<odd.length;i++)
{
    odd[i].style.backgroundColor='green';
}