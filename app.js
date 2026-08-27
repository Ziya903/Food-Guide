let input = document.querySelector("input");
let btn = document.querySelector("button");
let foodResult = document.querySelector("#foodResult");
foodResult.style.display = "none";
let historyValue = document.querySelector("#historyValue");
let historyArr = [];
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
        let product = result.data.product;
        if(product){
            foodResult.innerHTML = `<h2>${product.product_name}</h2>
                        <h3>Brand : ${product.brands}</h3>
                        <img src="${product.image_front_url}">
                        <p>Ingredients : ${product.ingredients_text }</p>
                        <p>Quantity : ${product.serving_size}</p>
                        <p>Nutri : ${product.nutriscore_score}
                        </p>`
        foodResult.style.display="block";
        historyArr.push(input.value);
        localStorage.setItem("history",JSON.stringify(historyArr));
        input.value = "";
        }else{
            alert("Product not found");
        }

    }
    catch(error){
        alert("Check your internet connection");
        console.log("Error fetching data",error);
    }
}

function showHistory(){
      let savedHistory = localStorage.getItem("history");
      if(savedHistory){
          historyArr = JSON.parse(savedHistory);

      }
           historyValue.innerHTML ="";
          for(let i=0; i<historyArr.length;i++){
              historyValue.innerHTML += historyArr[i] + "<br>";
        }    
    }
showHistory();
