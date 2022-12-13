// add some thing in add iem field
var form=document.getElementById('addForm');
var itemList=document.getElementById('items');
// form submit event
form.addEventListener('submit',addItem);
//delete event
itemList.addEventListener('click',removeItem);
//add item
 function addItem(e){
    e.preventDefault();
    
    //get input value
    var newItem=document.getElementById('item').value;
// create new li element
var li=document.createElement('li');
 
//add class
li.className='list-group-item';
//add text node with input value
li.appendChild(document.createTextNode(newItem));

//create delete button element
var deleteBtn=document.createElement('button');
// add classes to delete button
deleteBtn.className='btn btn-danger btn-sm float-right delete';
// append text node in delete button

deleteBtn.appendChild(document.createTextNode('X'));
//append button to li
li.appendChild(deleteBtn);
//append li to list

itemList.appendChild(li);


// adding edit button 
var edit=document.createElement('button');
//append text node in edit button
edit.appendChild(document.createTextNode('EDIT'));
//add button to li
li.append(edit);

 }
function removeItem(e)
{
    if(e.target.classList.contains('delete'));
    {
    if(confirm('are you sure?'))
    {
        var li=e.target.parentElement;
        itemList.removeChild(li);
    }
    }
}
var filter=document.getElementById('filter');

//filter event
filter.addEventListener('keyup',filterItem);
// filter item function
function filterItem(e)
{
    //convert text to lower
    var text=e.target.value.toLowerCase();
  //get lis
    var items=itemList.getElementsByTagName('li');
    // conver toan Array
    Array.from(items).forEach(function(item){
 
        var itemName=item.firstChild.textContent;
        if(itemName.toLocaleLowerCase().indexOf(text)!= -1)
        {
            item.style.display='block';
        }
        else{
            item.style.display='none';
        }
    });
} 