function palindromes(str) { //funcion con parametro
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, ""); // Elimina espacios y caracteres especiales
  const reversed = cleaned.split("").reverse().join(""); // Invierte la cadena
  return cleaned === reversed; // Compara la cadena original con la invertida
}

// Do not edit below this line
module.exports = palindromes;
