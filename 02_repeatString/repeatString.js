const repeatString = function(text, numTimes) {  // crea una funcion con diferentes parametros
  if (numTimes < 0){  // si el numero de veces es menor que 0 retorna 'ERROR' 
    return 'ERROR'     
  }

  return text.repeat(numTimes); // retorna el texto repetido el numero de veces indicado


}





// Do not edit below this line
module.exports = repeatString;