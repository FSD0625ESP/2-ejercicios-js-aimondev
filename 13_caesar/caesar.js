function caesar(str, shift) {
  //funcion con parametros
  return str //[\w\s]/g // Filtra solo letras y espacios
    .split("")
    .map((char) => {
      if (char >= "A" && char <= "Z") {
        // Comprueba si es una letra mayuscula
        let code = char.charCodeAt(0);
        let shifted = ((((code - 65 + shift) % 26) + 26) % 26) + 65;
        return String.fromCharCode(shifted);
      }

      if (char >= "a" && char <= "z") {
        // Comprueba si es una letra minuscula
        let code = char.charCodeAt(0);
        let shifted = ((((code - 97 + shift) % 26) + 26) % 26) + 97;
        return String.fromCharCode(shifted);
      }

      return char; // Si no es una letra, devuelve el caracter original
    })
    .join(""); // Une los caracteres en una cadena
}

// Do not edit below this line
module.exports = caesar;
