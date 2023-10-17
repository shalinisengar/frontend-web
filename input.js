//select input element
let inpute  = document.getElementById('title');

// selecet list element
let listE1 = document.getElementById('list');

// select button element
let addButtonE1 = document.getElementById('ad-button');

// adding "click" event lister on button element
addButtonE1.addEventListener('click' , function(){

    // getting the value of input field
    let titleText = inpute.value

    // creating and 'li' element and adding linner text
    let li= document.createElement('li');
    li.innerText  = titleText;

    // add the newly created li element to the list
    listE1.appendChild(li);

    // clear the input field after adding li to the list
    inpute.value = '';

    // remove li when it is clicked
    li.addEventListener('click' , function(){
        li.remove();
    })
})