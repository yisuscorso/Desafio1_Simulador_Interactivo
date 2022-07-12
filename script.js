

// function nombreAlumno(nombre) {
//     //"Hola, me llamo " + nombre + " y te estoy saludando"
//     return `Hola ${nombre}! la suma de tus notas es:`
// }
// console.log(nombreAlumno("Marcos"))

nombre = prompt("Introduce tu nombre")

let nota1, nota2, nota3, nota4;
let dato1, dato2, dato3, dato4, media;
dato1 = window.prompt("Ingresa la nota de ingles");
nota1 = parseInt(dato1);
dato2 = window.prompt("Ingresa la nota de matemáticas");
nota2 = parseInt(dato2);
dato3 = window.prompt("Ingresa la nota de latin");
nota3 = parseInt(dato3);
dato4 = window.prompt("Ingresa la nota de historia del arte");
nota4 = parseInt(dato4);

media = (nota1 + nota2 + nota3 + nota4)/3;

if (media <5) {
    resultat = "Suspendido"
} else {
    resultat = "Aprobado. ¡Felicidades!"
}
// document.write(`La nota final es ${resultat}`)
console.log(`${nombre}, la valoración sobre la media de tus notas es: ${resultat}`)

const materias = ["Ingles", "Matemáticas", "Latin", "Hisotria del arte",]
console.log(materias)
