function esNacional(pasaporte) {
    // Comprobar si el primer carácter del pasaporte es 'A'
    return pasaporte[0] === 'A';
  }
  
  // Ejemplo de uso:
  const numeroPasaporte = "f232"
  const nacional = esNacional(numeroPasaporte);
  console.log(`El pasajero es nacional?" '${nacional}'`);