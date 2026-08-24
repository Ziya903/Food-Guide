let input = document.querySelector("input");
let btn = document.querySelector("button");
let foodResult = document.querySelector("#foodResult");
btn.addEventListener("click",()=>{
    if(input.value != ""){
         console.log(input.value);
    }else{
        alert("Please enter your barcode");
    }
})
