import validator from './validator.js';


function validate() {
    const valid = validator.isValid(document.getElementById("cardnumber").value);
    if (valid) {
      window.alert("Tarjeta valida")
    }
    else {
      window.alert("Tarjeta invalida")
    }
  }

//console.log(validator);
