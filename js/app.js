function totalInputCount(product, price, isIncrease){
    const totalInput = document.getElementById(product + "-count");
    let productNumber = totalInput.value;
    if(isIncrease){
        productNumber = parseInt(totalInput.value) + 1;
    }else if(productNumber> 0){
        productNumber = parseInt(totalInput.value) - 1;
    }
    totalInput.value = productNumber;

    const productTotal = document.getElementById(product+ "-total");
    productTotal.innerText = productNumber * price;
    calculateTotal();
}
function totalCost(product){
    const totalInput = document.getElementById(product + "-count");
    const productNumber = parseInt(totalInput.value);
    return productNumber;
}
function calculateTotal(){
    const jalapenoCost = totalCost('jalapeno') * 250;
    const grilledCost  = totalCost('grilled') * 150;
    const garlicost = totalCost('garlic') * 100;
    const subTotal = jalapenoCost + grilledCost + garlicost;
    const deliveryCost = 50;
    const total = subTotal + deliveryCost;
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = deliveryCost;
    document.getElementById('total-price').innerText = total;

}
