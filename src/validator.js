const validator = {
  // ...

  
};

export default validator;


export const isValid = (creditCardNumber) => {
    

    const numeros = Array.from(creditCardNumber);
    let tmpNum;
    let suma;
    let sumaTotal = 0;
  
    if (creditCardNumber === "") {
      window.alert("Ingrese un número de tarjeta.")
    }
    
    //for(i=0 ;i<numeros.length ; i++){
    for (let i = numeros.length - 1; i >= 0; i--) {
      if (i % 2 === 1) {
        numeros[i] = numeros[i] * 2;
        //console.log(numeros[i])
  
        if (numeros[i] >= 10) {
          //console.log(numeros[i])
          tmpNum = Array.from(numeros[i].toString())   // para convertir en un string
          suma = Number(tmpNum[0]) + Number(tmpNum[1]);   //number para convertir u  string a un numero
          //console.log(suma)
          numeros[i] = suma;   // asigno la suma de digitos al elemento del arreglo
        }
      }
  
      sumaTotal = sumaTotal + Number(numeros[i]);  //obtengo suma total
    }
  
  
    if (sumaTotal % 10 === 0) {   //valido que la suma sea  multiplo de 10
      return true;
    }
    else{
      return false
    }
}


  
export const maskify= (creditCardNumber) => {
  
    const numeros = Array.from(creditCardNumber);
    let result="";
  
    for(let i=0;i<numeros.length;i++){
      if(i<numeros.length-4){
        result=result+"#";
      }else{
        result=result+numeros[i];
      }  
    }
  
    console.log(result)
    return result;
  }






 