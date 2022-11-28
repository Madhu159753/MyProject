//dom using querySelector
var header=document.querySelector('#header');
header.style.borderBottom='solid 4px #ccc';

var input=document.querySelector('input');
input.value="hello world";

var submit=document.querySelector('input[type="submit"]');
submit.value='SEND';

var item=document.querySelector('.list-group-item');
item.style.color='red';

var LastItem=document.querySelector('.list-group-item:last-child');
LastItem.style.color='blue';
var SecondLast=document.querySelector('.list-group-item:nth-child(3)');
SecondLast.style.color='green';

var third=document.querySelector('.list-group-item:nth-child(5)');
third.style.visibility='hidden';