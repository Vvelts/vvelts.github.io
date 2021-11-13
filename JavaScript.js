  
function calculate() {
    let regexp = /\D/g;
    let productPrice = document.getElementsByName("product-price")[0].value;
    let productAmount = document.getElementsByName("product-amount")[0].value;
    let r = document.getElementById("result");

    if (Boolean(productPrice) && Boolean(productAmount)) {
        if (regexp.test(productPrice) || regexp.test(productAmount)) {
           r.innerText = "Данные введены не корректно";
        } else {
            regexp = /\d/g;
            
            productPrice = parseInt(productPrice.match(regexp).join(""));
            productAmount = parseInt(productAmount.match(regexp).join(""));
            r.innerText = `Итоговая цена: ${productPrice * productAmount}`;
        }
    }else {
        r.innerText = "Данные введены не корректно";
    }
}

window.document.addEventListener("DOMContentLoaded", function (calculate) {
    console.log("DOM is fully loaded and parsed");
    let button = document.getElementById("calculate-button");
    button.addEventListener("click", calculate);
});
