let nombreEmpleado = "Juanito";
let salarioPorHora = 3000;
let horasTrabajadas = 180;

let salarioBasicoMensual = salarioPorHora * horasTrabajadas;
let recibeSubsidio = salarioBasicoMensual <= 700000;

console.log("i. Calcular su salario básico mensual");
console.log(salarioBasicoMensual);

console.log("ii. Determinar si recibe o no subsidio de transportes.");
console.log(recibeSubsidio);


if (recibeSubsidio) {
    console.log("El empleado recibe subsidio de transporte.");
} else {
    console.log("El empleado no recibe subsidio de transporte.");
}

console.log("iii. Mostrar en la consola el nombre del empleado, su salario básico mensual y si recibe o no subsidio de transporte.");
console.log(`Nombre del empleado: ${nombreEmpleado}`);
console.log(`Salario básico mensual: $${salarioBasicoMensual}`);
console.log(`Recibe subsidio de transporte: ${recibeSubsidio ? "Sí" : "No"}`);