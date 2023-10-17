// let body = document.querySelector('body')
// let btn = document.querySelector('button')
// btn.addEventListener('click',function(){
//     body.style.background='blue'
// })
// input valur.............................................................................................................................
// let inp = document.getElementById('inp')
// let btn=document.getElementById('btn')
// let ul = document.getElementById('ul')
// btn.addEventListener('click',function(){
//     let text = inp.value
//     let li = document.createElement('li')
//     li.innerText=text
//     ul.appendChild(li)
//     inp.value=''
// li.addEventListener('click',function(){
// li.remove()
// })

// })


//timer.................................................................
let t = new Date().getTime();
// let t = deadline - now;
let days = Math.floor(t/(1000*60*60*24));
let hours = Math.floor((t%(1000*60*60*24))/(1000*60*60));
let minutes = Math.floor((t%(1000*60*60))/(1000*60));
let seconds = Math.floor((t%(1000*60))/1000);
console.log(seconds);
console.log(minutes);







