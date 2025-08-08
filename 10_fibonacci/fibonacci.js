const fibonacci = function (n) { //funcion con parametro
  const num = Number(n); // Convierte el parametro a numero
  const serie = []; // Crea un array vacio
  if (num < 0) return "ERROR"; // Si el numero es negativo devuelve "ERROR"
  for (let i = 0; i < num + 1; i++) { // Bucle que recorre desde 0 hasta el numero
    serie.push(i < 2 ? i : serie[i - 1] + serie[i - 2]); // Si i es menor que 2, añade i al array, si no, añade la suma de los dos numeros anteriores
  }
  return serie[num]; // Devuelve el numero de la serie de Fibonacci correspondiente al indice num
};



// Do not edit below this line
module.exports = fibonacci;
