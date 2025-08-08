function ftoc(fahrenheit) { //funcion con parametro
  let celsius = ((fahrenheit - 32) * 5) / 9; //convertimos de Fahrenheit a Celsius utilizando la formula de -32 * 5 / 9
  return Math.round(celsius * 10) / 10;
}

function ctof(celsius) { //funcion con parametro
  let fahrenheit = (celsius * 9) / 5 + 32; //convertimos de Celsius a Fahrenheit utilizando la formula de * 9 / 5 + 32
  return Math.round(fahrenheit * 10) / 10;
}

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
