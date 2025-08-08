const findTheOldest = function (people) {// funcion con parametro
  const currentYear = new Date().getFullYear(); // Obtiene el año actual

  return people.reduce((oldest, person) => {// Utiliza reduce para encontrar la persona mas vieja
    const death = person.yearOfDeath || currentYear; // Si no tiene año de muerte, usa el año actual
    const age = death - person.yearOfBirth; // Calcula la edad de la persona

    const oldestDeath = oldest.yearOfDeath || currentYear; // Si la persona mas vieja no tiene año de muerte, usa el año actual
    const oldestAge = oldestDeath - oldest.yearOfBirth; // Calcula la edad de la persona mas vieja

    return age > oldestAge ? person : oldest; // Compara las edades y devuelve la persona mas vieja
  });
};

// Do not edit below this line
module.exports = findTheOldest;
