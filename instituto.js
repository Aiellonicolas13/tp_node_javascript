require("colors");

/*2) Crear un archivo llamado instituto.js, dentro de este archivo
crear un objeto que se llame alumno con las siguientes
propiedades: Nombre, Edad, inscriptoAMaterias (un array de
strings), debeCorrelativa (un booleano)
realizar los siguientes métodos.
a) Se desea generar un método para realizar una inscripción a una
materia (recibe como parámetro de entrada el objeto alumno, y el
nombre de la materia a inscribirse) y un método para validar si
tiene las correlativas aprobadas (recibe como parámetro de
entrada el objeto alumno)
b) El método para realizar una inscripción no se debe ejecutar
hasta no validar si tiene las correlativas aprobadas. En el
método validarCorrelativa, utilizar la propiedad
“debeCorrelativa” para validarlo, en el método para inscribir,
en caso de que el alumno no deba la correlativa, agregar la
materia al array de materias “inscriptoAMaterias” del objeto.
c) Simular retardos en los métodos de validar correlativas y
realizar inscripción de 2 segundos y 5 segundos respectivamente.
d) En cualquiera de los dos casos se debe ejecutar un log en
consola que informe que se finalizó la operación.
e) Ejecutar las promesas y definir como se debe comportar en cada
caso (resuelto/rechazado)*/

const alumno = {
    nombre: "Pepito",
    edad: 26,
    inscriptoAMaterias: [],
    debeCorrelativa: false,
}

function validarCorrelativa(alumno){
    return new Promise((resolve, reject) => {
        console.log("===================================".cyan)
        console.log("EJercicio N° 3 - Instituto\n~~~~~~~~~~~~~~~~~~~~~~~~~~~");
        console.log(`Hola ${(alumno.nombre)}, estamos validando si debes alguna correlativa...`);
        setTimeout(() => {
            if (alumno.debeCorrelativa === false) {
                resolve(`No debes ninguna corelativa, podes inscribirte a la materia!`);
            } else {
                reject(`Lo sentimos, no es posible inscribirte a la materia, debes rendir su materia correlativa.`.red);              
            }
        }, 2000);
    });
}

function inscribirMateria(alumno, materia){
    console.log("Procesando la inscripcion..".yellow);
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            alumno.inscriptoAMaterias.push(materia);

            resolve(`Inscripcion a la materia: ${materia} realizada..`.green)
        }, 5000);
    })
}

function procesarInscripcion(alumno, materia) {
   return validarCorrelativa(alumno) 

        .then(response => {
            console.log(response);
            return inscribirMateria(alumno, materia);
        })

        .then(response => {
            console.log(response);
            console.log(`Materias actualizadas: ${alumno.inscriptoAMaterias}`);
        })

        .catch(error => {
            console.log(error);
        })

        .finally(() => { 
            console.log(`Proceso finalizado.\n===================================`.gray)
        })
     
}

function ejecutarInstituto() {

    return procesarInscripcion(alumno, "Matematica 1");

    setTimeout(() => {
        alumno.nombre = "Jose";
        alumno.debeCorrelativa = true;

        procesarInscripcion(alumno, "Base de datos");

    }, 10000);
}

module.exports = ejecutarInstituto;
