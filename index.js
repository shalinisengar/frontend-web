// // console.log('hello')
// // var a=true
// // console.log(a)
// var a= 5
// var a=6
// console.log(a);
// let b=7

// console.log(b);
// const c=4
// console.log(c);
// var name1 = 'shalini'
// let kuchnahi = 'sengar'
// console.log(`my name is ${name1} ans i am not ${kuchnahi}`);
// var isbool=false
// isbool?console.log('hello'):console.log('hii')

// 
// let student={
//     name:'shalini',
//     age:30,
//     isbool:true

// }
// student.age=21
// console.log(student.age);



// function add(a,b){

//     console.log(a+b);
// }
// add(3,6)
// add(7,9)
// add(2,8)
// const add1=()=>{
//     console.log('byy');
// }

// add1()
// add1()
// add1()


// function fullname(any){
// console.log(`name ${any.name} lastname ${any.lastname}`);
// }
// let person={
//     name:'shalini',
//     lastname:'sengar'
// }
// // fullname(person)
// for(let i=0;i<7;i++){
//     console.log(i);
// }


// let arr=[1,2,3,4,5,6]
// arr.forEach((kuch,i,arr)=> {3
// console.log(kuch,i,arr);
// });
// for(let i of arr){
//     console.log(i);
// }
// for(let i in arr){
//     console.log(i);
// }
// arr.forEach((data,index,arr)=>{
//     console.log(data,index,arr);
// })



// let arr=[1,2,3,4,5,6,7,8]
// let newS = arr.forEach((ele,data)=>{
//     return ele
// })
// console.log(newS);

// let newA = arr.map((ele,data)=>{
//     return ele
// })
// console.log(newA);



// let arr1=[1,2,3,4,5,9]
// let ss= arr1.filter((ele)=>{
//     return ele>
// })
// console.log(ss);
// let arr=[1,2,3,4,5,9]


//     let ss= arr.filter((ele)=>{
//           return ele>3
//         })
//    let sum = ss.reduce((a,b)=>{
//     return a+b
//    })

// console.log(sum);




// let arr=[
//     {
//         id:1,
//         name:'shalini'
//     },
//     {
//         id:2,
//         name:'priya ji'
//     }
// ]
// arr.map((ele)=>{
//     console.log(ele);
//     console.log(ele.name);

// })




// function outer(fn){
//     console.log("hello");
//     console.log(fn);
//     fn()
// }
// function inner(){
//     console.log("hiii");
// }
// outer(inner)

//  let arr=[1,2,3,"hello","shalini",true,false]
// function getString(arr){
//     let arr1=[];
// for(let i of arr){
//     console.log(typeof i);
//     if(typeof i === 'string' ){
//         arr1.push(i)
//          }
// }
// console.log(arr1);
// }
// function getString(arr){
//     let arr2=[];
// for(let i of arr){
//     console.log(typeof i);
//     if(typeof i === 'string' ){
//         arr2.push(i)
//          }
// }
// return arr1
// }

// console.log(arr1);
// console.log(arr2);
// console.log(arr3);

// function getString(item){
//     return typeof item === "string"
// }
// function getnumber(item){
//     return typeof item === "number"
// }
// function getbool(i){
//     return typeof i === "boolean"
// }
// function get(arr,fn1){
//     let res=[]
// for(let item of arr){
    
//     if(fn1(item)){
//         res.push(item)
//     }

// }return res
// }

// console.log(get(arr,getString));
// console.log(get(arr,getbool));
// console.log(get(arr,getnumber));
//asincwayk......................................................
//promisses......................................................
// call back function.....................................................................................
// function step1(fn1) {
//     setTimeout(() => {
//         console.log("photo select ho gai...");
//     fn1()
//  },4000);
   
// }
// function step2(fn2) {
//     setTimeout(() => {
//         console.log("filter select ho gaya.");
//         fn2()
//     },3000);
    
// }
// function step3(fn3) {
//     setTimeout(() => {
//         console.log("caption likha gaya");
//         fn3()
//     },2000)
    
// }
// function step4(params) {
//     setTimeout(() => {
//         console.log("post");
//     }, 1000)
    
    
// }
// step1(() =>{
//     step2(() =>{
//         step3(()=>{
//              step4()
// })
// })
// })


// // constractor function...........................................................................

// function user(username2,gmail) {
//     this.username1 = username2,
//     this.gmail=gmail
// }
// let user1 =new user('shalini',"shalinisengar@gmail.com")
// let user2 = new user("shalini","shalinisengar@gmail.com")

// console.log(user1);
// console.log(user2);



//Dom.........................................................................................
// let h = document.getElementById('one')
// console.log(document)

// let d = document.getElementsByClassName('class')
// console.log(d);

// console.log(h);


//
// let all= document.querySelectorAll('#one') 
// console.log(all);
// for(let i of all){
//     i.style.color='red'
// }





//img change.......................................................................................................................................................................................................



// let arr=["https://images.unsplash.com/photo-1663689555111-4833f3e11f79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQ0fEpwZzZLaWRsLUhrfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
// "https://images.unsplash.com/photo-1673439785262-91453f24dab1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDUxfEpwZzZLaWRsLUhrfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
// "https://plus.unsplash.com/premium_photo-1691784963883-1a481f97dc5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDgyfEpwZzZLaWRsLUhrfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
// "https://images.unsplash.com/photo-1693304550955-88a3b52fe399?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDc1fEpwZzZLaWRsLUhrfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
// "https://images.unsplash.com/photo-1692028322508-5e16bc6816b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDExMnxKcGc2S2lkbC1Ia3x8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"]   

// let img1= document.querySelector('img')

// let num=0

// setInterval(()=>{
//     img1.setAttribute('src',arr[num])
//     num = (num+1)%arr.length
// },1000)


//..creat ChannelSplitterNode.............................................................................................................................r.
// let a = document.querySelector('div')
// a.remove()

// let h1 = document.createElement('h1')
// h1.innerText='hello'
// a.appendChild(h1)
// a.removeChild(h1)
// console.log(a);
// // a.remove()
// console.log(a);

// click  event........................................................................................................................................
// 1............
// function fun1(){
//     console.log("hello");
// }
//2
// let btn= document.querySelector('button')
// btn.onClick=function(){
//     console.log('hello');
// }
// let btn = document.querySelector('button')


// let body = document.querySelector('body')

// btn.addEventListener('click',function(){
//     btn.style.backgroundColor='blue'
// })



//input event..............................................................................................................................
// let inp=document.addEventListener('input',function(){
//     console.log('hello');
// })

// let form = document.querySelector('form')
// let p = document.querySelector('p')





//submit...............................................................................................................................................
// form.addEventListener('submit',function(e){
//     e.preventDefault()
//     console.log("doneeeeeeeeeee");

    // p.innerText=e.target.value
    // console.log(e.target.value);
// })
let inp = document.querySelector('input');
let ul = document.querySelector('ul');
let btn = document.querySelector('button');
btn.addEventListener('click',function() {
    

   let text= inp.value;
    console.log(text);
    let li = document.createElement('li');
    ul.appendChild(li);
    li.innertext = text;
   
    inp.value='';

li.addEventListener('click',function() {
    li.remove();
})
})