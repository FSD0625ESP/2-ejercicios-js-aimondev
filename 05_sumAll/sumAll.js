function sumAll(a, b) { // funcion con dos parametros 
  if (typeof a !== "number" || typeof b !== "number") return "ERROR"; // verifica que ambos parametros sean numeros
  if (a < 0 || b < 0) return "ERROR"; // sin son negativos retorna "ERROR"

  let start = Math.min(a, b); 
  let end = Math.max(a, b); // determina el inicio y el fin del rango basado en los valores de a y b
  let total = 0;

  for (let i = start; i <= end; i++) { // itera desde el inicio hasta el fin
    total += i;
  }

  return total;
}

// Do not edit below this line
module.exports = sumAll;
