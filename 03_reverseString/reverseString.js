const reverseString = function (str) {  //crea uan funcion que con un parametro
  return str.split("").reverse().join(""); // convierte el string en un array, lo invierte y lo vuelve a unir en un string
};
console.log(reverseString);  

// Do not edit below this line
module.exports = reverseString;