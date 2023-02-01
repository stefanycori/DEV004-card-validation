import { isValid, maskify } from './validator.js';



const boton = document.getElementById('btn-validar');

const input = document.getElementById('card-number');

const text = document.getElementById('resultado');

let cardTmp = "";
let cardNumber = "";


boton.addEventListener('click', function () {

  if (input.value !== "") {
    const valid = isValid(cardNumber);

    if (valid) {
      text.style.color = "green";
      text.innerHTML = "Tarjeta válida."
    }
    else {
      text.style.color = "red";
      text.innerHTML = "Tarjeta inválida."
    }
  } else {
    window.alert("Ingrese un número de tarjeta.")
  }

});


input.addEventListener('keyup', function (event) {

  const code = (event.which) ? event.which : event.keyCode;

  if ((code > 47 && code < 58) || (code > 95 && code < 106)) {
    cardTmp = cardTmp + event.key;
  }

  if (code !== 8) {
    input.value = cardTmp;
  }

  let encryptedCard = "";
  cardNumber = cardTmp;

  encryptedCard = maskify(input.value);
  input.value = encryptedCard;


  if (input.value.length === 0) {
    cardTmp = "";
  }

});



