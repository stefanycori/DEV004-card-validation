import {isValid, maskify} from './validator.js';



var boton = document.getElementById('btn-validar');

boton.addEventListener('click', function (event) {

    const valid = isValid(document.getElementById("cardnumber").value);
    if (valid) {
      window.alert("Tarjeta valida")
    
    }
    else {
      window.alert("Tarjeta invalida")
    }

    console.log(maskify(document.getElementById("cardnumber").value));
});


//console.log(validator);
