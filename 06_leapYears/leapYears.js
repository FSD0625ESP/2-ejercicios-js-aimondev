function leapYears(year) { //funcion con paramemtro
  if (year % 4 !== 0) return false; // si el año no es divisible por 4, no es bisiesto
  if (year % 100 === 0 && year % 400 !== 0) return false; // si el año es divisible por 100 pero no por 400, no es bisiesto
  return true;
}




// Do not edit below this line
module.exports = leapYears;
