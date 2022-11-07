// console.log("Entro al main.js");

// class Perro {
//     constructor(nombre) {
//         this.nombre = nombre;
//     }
//     ladrar() {
//         console.log(`${this.nombre} está ladrando`);
//     }
//     sentar() {
//         console.log (`${this.nombre} está sentado`);
//     }
// }

// let perro_firulais = new Perro("Firulais");
// perro_firulais.ladrar();
// perro_firulais.sentar();

// let perro_dalmata = new Perro ("Dalmata");
// perro_dalmata.sentar();


/*
Quiero una página o sistema académico donde tenga guarados los alumnos y los profesores, deberóa poder retomarlo desde la POO (Programación Orientada a Objetos)
1. Maestros
2. Alumnos
*/

class Persona {
    constructor(nombre, apellido, edad, género, intereses) {
        this.edad = edad;
        this.género = género
        this.intereses = intereses
        this.nombre_completo = {
            nombre: nombre,
            apellido: apellido
        };
    }
    saludo() {
        console.log(`Hola, me llamo ${this.nombre_completo.nombre} ${this.nombre_completo.apellido}`);
    }
    despedida() {
        console.log(`La persona ${this.nombre_completo.nombre} se despide...`)
    }
}

class Maestro extends Persona {
    constructor(nombre, apellido, edad, género, intereses, materia, grado) {
        super(nombre, apellido, edad, género, intereses);
        this.materia = materia;
        this.grado = grado;
    }
    muestraMateria(){
        console.log(`El maestro ${this.nombre_completo.nombre} está dictando la materia ${this.materia}`);
    }
    despedida() {
        console.log(`El maestro ${this.nombre_completo.nombre} se despide...`)
    }
}

let maestro = new Maestro("Jesús", "Cardenas", "29", "Masculino", ["Programación", "Acuarofilia", "Ajedrez"], "Artes Oscuras", "5");
maestro.saludo();
maestro.muestraMateria();
maestro.despedida();

let alumno = new Persona("Otto", "Garduño", "21", "Masculino", ["Música", "Videojuegos", "Deportes"]);
alumno.saludo();
alumno.despedida();

