//Hacer un algoritmo con JavaScript que reciba cualquier letra del abecedario y
//muestre en consola el valor booleano que indique si es o no una vocal.
const vocales = ['a','e','i','o','u'];

let letra = 'a';

let esVocal = vocales.includes(letra);

console.log(`La letra '${letra}' es una vocal: ${esVocal}`);

