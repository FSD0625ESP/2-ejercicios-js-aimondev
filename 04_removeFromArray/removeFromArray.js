const removeFromArray = function (array, ...itemsToRemove) { //crea un funcion con dos parametros
  return array.filter((item) => !itemsToRemove.includes(item));  //retorna un nuevo array filtrando los elementos que no estan incluidos en itemsToRemove
};


// Do not edit below this line
module.exports = removeFromArray;
