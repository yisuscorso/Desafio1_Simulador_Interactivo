

function nombreAlumno(nombre) {
    //"Hola, me llamo " + nombre + " y te estoy saludando"
    return `Hola ${nombre}! la suma de tus notas es:`
}
console.log(nombreAlumno("Marcos"))

function sumar(numero1, numero2, numero3, numero4) {
    console.log(numero1 + numero2 + numero3 + numero4);
}

let numero1 = parseFloat(prompt("Ingresa la nota de ingles"));
let numero2 = parseFloat(prompt("Ingresa la nota de matemáticas"));
let numero3 = parseFloat(prompt("Ingresa la nota de latin"));
let numero4 = parseFloat(prompt("Ingresa la nota de historia del arte"));
sumar(numero1, numero2, numero3, numero4);

// aqui está el bloqueo. Mi lógica seria: Crear una función que me diese un resultado por lo que diría:
// Vamos a crear una función que contenga el resultado de la funcion "suma" y que a su vez esté
// dividido entre número de asignaturas. Todo esto es lo que no sé como traducir en código
// Necesito mucha ayuda :(
