require("colors"); 

/*1) Crear un archivo llamado cuentaBancaria.js, dentro de este
archivo realizar los siguientes métodos.
a) Se desea generar un método para realizar una transferencia y un
método para validar el saldo disponible en la cuenta.
b) El método de realizar transferencia no se debe ejecutar hasta no
validar el saldo y que haya saldo suficiente.
c) Simular retardos en los métodos de validar saldo y realizar
transferencia de 5 segundos y 10 segundos respectivamente.
d) En cualquiera de los casos se debe ejecutar un log en consola
que informe que se finalizó la operación. (había un método de la
promesa que le paso un callback que se ejecuta en cualquiera de
los dos casos)
e) Ejecutar las promesas y definir como se debe comportar en cada
*/

let saldoDisponible = 5000;

function validarSaldo(monto) {
    return new Promise((resolve, reject) => {
        console.log("===================================".cyan);
        console.log("EJercicio N° 3 - Cuenta bancaria\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
        console.log("Estamos ejecutando la transaccion");
        setTimeout(() => {
            if (saldoDisponible >= monto) {
                resolve(`Saldo disponible: ${saldoDisponible}`);
            } else {
                reject("No posee saldo en su cuenta para la operacion.".red);
            }
        }, 5000);
    });
}

function realizarTransferencia(respuestaValidacion, monto) {
    console.log("Ejecutando la transferencia...");
    return new Promise((resolve, reject) => 
        setTimeout(() => {
            if (saldoDisponible >= monto) {
                saldoDisponible -= monto;
                resolve(`Transferencia realizada con exito!\nTICKET:\nMONTO RETIRADO: $${monto}\nSALDO ACTUAL: $${saldoDisponible}`.green); 
            } else {
                reject(`ERROR de transaccion`);
            }
        }, 10000)
    );
}


function procesarTransferencia(monto) {
    return validarSaldo(monto)
   
    .then(response => {
        console.log(`Validando saldo...`.yellow);
        console.log(`Respuesta recibida: ${response}`);

        return realizarTransferencia(response, monto);
    })

    .then(response => {
        console.log(`Realizando transferencia...`);
        console.log(`Respuesta recibida: ${response}`);
    })
    .catch(error => {
        console.log("ERROR :O");
        console.log(`Detalle: ${error}`);
    })

    .finally(() => {
        console.log("Finalizando proceso de transferencia...".gray); 
    })
}

function ejecutarCuentaBancaria() {
    return procesarTransferencia(1000);
}

module.exports = ejecutarCuentaBancaria;
