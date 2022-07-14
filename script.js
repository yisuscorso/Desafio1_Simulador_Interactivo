
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

console.log(`${nombre}, la valoración sobre la media de tus notas es: ${resultat}`)


class Materia {
    constructor(id, nombre, duracion, numeroEvaluaciones, examenes){
        this.id = id
        this.nombre = nombre
        this.duracion = duracion
        this.numeroEvaluaciones = numeroEvaluaciones
        this.examenes = examenes
    }
}

const materia1 = new Materia(1, "Ingles", "3 trimestres", 3, ["examen 1", "examen 2", "examen 3"])
const materia2 = new Materia(2, "Matemáticas", "3 trimestres", 3, ["examen 1", "examen 2", "examen 3"])
const materia3 = new Materia(3, "Latín", "Marron", "2 trimestres", 2, ["examen 1", "examen 2"])
const materia4 = new Materia(4, "Hisotria del Arte", "1 trimestre", 1, ["examen 1"])

const materias = [materia1, materia2, materia3, materia4]

console.log(materias)