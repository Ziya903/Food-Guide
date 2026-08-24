let input = document.querySelector("input");
let btn = document.querySelector("button");
let foodResult = document.querySelector("#foodResult");
btn.addEventListener("click",()=>{
    if(input.value != ""){
         console.log(input.value);
         getValue();
    }else{
        alert("Please enter your barcode");
    }
})
async function getValue() {
    try{
        let result = await axios.get(`https://world.openfoodfacts.org/api/v0/product/${input.value}.json`);
        // let product = result.data.product;
        // foodResult.innerHTML = `<h2>${product.product_name}</h2>
        //                 <h3><span>Brand:<span>${product.brands}</h3>
        //                 <img src="${product.image_front_url}>
        //                 <p><span>Ingredients<span>${product.ingredients}</p>
        //                 <p><span>Quantity<span>${product.serving_size}</p>
        //                 <p><span>Nutri-Score<span>${product.nutriscore_score}
        //                 </p>`
        console.log(result.data.product);
    }
    catch(error){
        console.log("Error fetching data",error);
    }
}
