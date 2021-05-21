document.body.innerHTML;
let s = 'Ill the best JS programmer';
let f = 'You will be the best!'
let b =document.querySelector('.toDo');
b.innerText=s;
let a = document.getElementById('mytodo');
a.textContent = f;
function addElement(){
let element = document.createElementById("h1");
element.innerText = s;
document.body.appendChild(element);
}
addElement('p');