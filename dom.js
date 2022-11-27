console.log(document.URL);
console.log(document.domain);
console.log(document.title);
//document.title=123;

console.log(document.doctype);
//console.log(document.all[21]);
console.log(document.forms);
//GET ELEMENT BY ID
//console.log(document.getElementById('header'));
var getelement=document.getElementById('header');
console.log(getelement);
//getelement.textContent="hello";
getelement.innerText='good';
//console.log(getelement.innerText);
console.log(getelement.textContent);
getelement.innerHTML='<h3>hiiii</h3>';
//getelement.style.borderBottom = 'solid 3px #000';
var header=document.getElementById('main-header');
//header.style.borderBottom='solid 3px #000';
