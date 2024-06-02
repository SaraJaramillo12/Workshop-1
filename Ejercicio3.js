const pVerdadera = true;
const qVerdadera = true;
const pFalsa = false;
const qFalsa = false;

//Comparaciones para la table NOT p AND q
notP1AndQ1 = !pVerdadera && qVerdadera; 
notP2AndQ2 = !pVerdadera && qFalsa;   
notP3AndQ3 = !pFalsa && qVerdadera;         
notP4AndQ4 = !pFalsa && qFalsa;  

//Comparaciones para la tabla NOT p AND NOT q
notP1AndNotQ1 = !pVerdadera && !qVerdadera; 
notP2AndNotQ2 = !pVerdadera && !qFalsa;      
notP3AndNotQ3 = !pFalsa && !qVerdadera;    
notP4AndNotQ4 = !pFalsa && !qFalsa; 

console.log("Tabla de verdad para NOT p AND q:");
console.log("p\tq\tNOT p\tNOT p AND q");
console.log(`${pVerdadera}\t${qVerdadera}\t${!pVerdadera}\t${notP1AndQ1}`);
console.log(`${pVerdadera}\t${qFalsa}\t${!pVerdadera}\t${notP2AndQ2}`);
console.log(`${pFalsa}\t${qVerdadera}\t${!pFalsa}\t${notP3AndQ3}`);
console.log(`${pFalsa}\t${qFalsa}\t${!pFalsa}\t${notP4AndQ4}`);
   

console.log("\nTabla de verdad para NOT p AND NOT q:");
console.log("p\tq\tNOT p\tNOT q\tNOT p AND NOT q");
console.log(`${pVerdadera}\t${qVerdadera}\t${!pVerdadera}\t${!qVerdadera}\t${notP1AndNotQ1}`);
console.log(`${pVerdadera}\t${qFalsa}\t${!pVerdadera}\t${!qFalsa}\t${notP2AndNotQ2}`);
console.log(`${pFalsa}\t${qVerdadera}\t${!pFalsa}\t${!qVerdadera}\t${notP3AndNotQ3}`);
console.log(`${pFalsa}\t${qFalsa}\t${!pFalsa}\t${!qFalsa}\t${notP4AndNotQ4}`);
