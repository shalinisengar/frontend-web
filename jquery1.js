// $('h1').css('color','blue')
// console.log($('h1').text());
// $('h1').text()
// console.log($('input').attr('type'));
// $('h1').css({
//     color: 'red',
//     border:'2px solid black'
// })
// $('li').first().css('color','red')
// $('button').click(function(){
//     console.log('hello');
// })




// api onload.apply.....................................................................................................................
// let req = new XMLHttpRequest()
// req.open('GET','https://dummyjson.com/products/1')
// req.send()
// req.onload=function(data){
//     console.log(data);
// }
// req.onerror=function(err){
//     console.log(err);
// }















// api ...///..................................................................................................................................
fetch('https://dummyjson.com/products/1').then((res)=>{
    return res.json()
}).then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err);
})