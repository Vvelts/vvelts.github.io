function updatePrice() {
    // Находим select по имени в DOM.
    let s = document.getElementsByName("prodType");
    let select = s[0];
    let price = 0;
    let prices = getPrices();
    let priceIndex = parseInt(select.value) - 1;
    if (priceIndex >= 0) {
      price = prices.prodTypes[priceIndex];
    }
    
    // Скрываем или показываем радиокнопки.
    let radioDiv = document.getElementById("radio-but");
    radioDiv.style.display = (select.value == "3" ? "block" : "none");
    
    // Смотрим какая товарная опция выбрана.
    let radios = document.getElementsByName("radoptions");
    radios.forEach(function(radio) {
      if (radio.checked) {
        let optionPrice = prices.radoptions[radio.value];
        if (optionPrice !== undefined) {
          price += optionPrice;
        }
      }
    });
  
    // Скрываем или показываем чекбоксы.
    let checkDiv = document.getElementById("checkboxes");
    checkDiv.style.display = (select.value == "3" ? "none" : "block");
  
    // Смотрим какие товарные свойства выбраны.
    let checkboxes = document.querySelectorAll("#checkboxes input");
    checkboxes.forEach(function(checkbox) {
      if (checkbox.checked) {
        let propPrice = prices.prodProperties[checkbox.name];
        if (propPrice !== undefined) {
          price += propPrice;
        }
      }
    });
    
    let prodPrice = document.getElementById("prodPrice");
    prodPrice.innerHTML = price + " рублей";
    
    function calculate() {
      let regexp = /\D/g;
      let productAmount = document.getElementsByName("count")[0].value;
      let r = document.getElementById("prodPrice");
  
      if (Boolean(productAmount)) {
          if (regexp.test(productAmount)) {
             r.innerText = "Данные введены не корректно";
          } else {
              regexp = /\d/g;
              productAmount = parseInt(productAmount.match(regexp).join(""));
              let productPrice = r.innerText.match(/\d+/g);
              r.innerText = `${productPrice * productAmount} рублей`;
          }
      }
      return false;
  }
  
  }
  
  function getPrices() {
    return {
      prodTypes: [25, 80, 110],
      prodOptions: {
        option2: 5,
        option3: 15,
      },
      prodProperties: {
        box1: 10,
        box2: 35,
      }
    };
  }
  
  window.addEventListener('DOMContentLoaded', function (event) {
    // Скрываем радиокнопки.
    let radioDiv = document.getElementById("radio-but");
    radioDiv.style.display = "none";
    
    // Находим select по имени в DOM.
    let s = document.getElementsByName("prodType");
    let select = s[0];
    // Назначаем обработчик на изменение select.
    select.addEventListener("change", function(event) {
      let target = event.target;
      console.log(target.value);
      updatePrice();
    });
    
    // Назначаем обработчик радиокнопок.  
    let radios = document.getElementsByName("prodOptions");
    radios.forEach(function(radio) {
      radio.addEventListener("change", function(event) {
        let r = event.target;
        console.log(r.value);
        updatePrice();
      });
    });
  
      // Назначаем обработчик радиокнопок.  
    let checkboxes = document.querySelectorAll("#checkboxes input");
    checkboxes.forEach(function(checkbox) {
      checkbox.addEventListener("change", function(event) {
        let c = event.target;
        console.log(c.name);
        console.log(c.value);
        updatePrice();
      });
    });
  
    updatePrice();
    
    let button = document.getElementById("calculate-button");
      button.addEventListener("click", calculate);
  
  });