let inp=document.getElementById('input')
let btn1=document.getElementsByClassName('button')
for(let btn of btn1){
    btn.addEventListener('click',function(e){

        let text=e.target.innerText
        
        if(text==='C'){
            inp.value=''
        }
        else if(text==='='){
            try{
                inp.value=eval(inp.value)
            }
            catch(e){
                inp.value='invalid'
            }
           
        }
        else{
            inp.value+=text
        }
    
})
}
