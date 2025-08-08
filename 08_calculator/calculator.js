const add = function (a, b) { //add dos numeros 
  return a + b;
};

const subtract = function (a, b) { //resta dos numeros 
  return a - b;
};

const sum = function (array) { //suma todos los numeros de un array
  return array.reduce((total, num) => total + num, 0);
};

const multiply = function (array) { //multiplica todos los numeros de un array
  return array.reduce((product, current) => product * current, 1);
};

const power = function (a, b) { // eleva un numero a la potencia de otro
  return a ** b;
};

const factorial = function (n) { // calcula el factorial de un numero
  if (n === 0 || n === 1) return 1;
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
