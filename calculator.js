let btn = document.querySelectorAll('button');
let inp = document.getElementById('input');
let str = "";

let btnsArray = Array.from(btn);
btnsArray.forEach((btn) => {
btn.addEventListener("click",(event)=>{
    // console.log(event.target.innerHTML);
    
    if(event.target.innerHTML == "DEL"){
        str = str.substring(0,str.length-1);
        input.value = str;
    }
    else if(event.target.innerHTML == "AC"){
        str = "";
        input.value = str;
    }
    else if(event.target.innerHTML == "="){
        str = eval(str);
        input.value = str;
    }
    else{
        str += event.target.innerHTML;
        input.value = str;
    }
})
    
});