// traversing the DOM
var itemList=document.querySelector('#items');

//parentNode property
//console.log(itemList.parentNode); 
// use itemList.parentNode as a selector
//itemList.parentNode.style.backgroundColor='#f4f4f4';
 //console.log(itemList.parentNode.parentNode.parentNode);

  //parentElement
    
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor='#f4f4f4';
console.log(itemList.parentElement.parentElement.parentElement);

//childNode
//console.log(itemList.childNodes);
console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor='yellow';
//first child
console.log(itemList.firstChild);
//firstElementChild
console.log(itemList.firstElementChild); 
itemList.firstElementChild.textContent='hello1';
 
// lastElementChild
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent='hello4';
//nextSibling
console.log(itemList.nextSibling);
//nextElementSibling
console.log(itemList.nextElementSibling);

//previousSibling
console.log(itemList.previousSibling);
// previousElementSibling
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color='green'; 
//createElement
//creae a div
var newDiv=document.createElement('div'); 
//add class
newDiv.className='hello';
//add id
newDiv.id='idis';
// add attribue
newDiv.setAttribute('title','hello div');
// create a textnode under div
 var newDivText=document.createTextNode ('Hello world');
 // add text to div
 newDiv.appendChild(newDivText);

 var container=document.querySelector('header .container');
 var h1=document.querySelector('header h1');


newDiv.style.fontSize='30px';
console.log(newDiv);
container.insertBefore(newDiv,h1);
