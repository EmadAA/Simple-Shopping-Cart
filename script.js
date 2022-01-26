function handleProductChange(Product, isIncrease){
     const productInput = document.getElementById(Product+'-count');
     const productCount = parseInt(productInput.value);
    let newProductCount = productCount;
    if(isIncrease == true){
        newProductCount = productCount + 1;
    }
    if(isIncrease == false && productCount > 0){
        newProductCount = productCount - 1;
    }
    productInput.value = newProductCount ;
    let productTotal;
    if(Product == "laptop"){
  productTotal = newProductCount * 245000 ;
    } 
    else{
        productTotal = newProductCount * 176999 ;
          }
    document.getElementById(Product + "-total").innerText = productTotal;
    handleCheckout();
}
function handleCheckout(){
    const laptopCount = document.getElementById("laptop-count").value;
    const phoneCount = document.getElementById("phone-count").value;
    const totalPrice = parseInt(laptopCount) * 245000 + parseInt(phoneCount) * 176999 ;
    document.getElementById("total-price").innerText = totalPrice ;
    const tax = Math.round(totalPrice * 0.001) ;
    document.getElementById("tax").innerText = tax ;
    const grandTotal = tax + totalPrice ;
    document.getElementById("grand-total").innerText = grandTotal ;
    

} 
function checkout() {
    alert("Thanks for purchasing with us!");
    location.reload();
}