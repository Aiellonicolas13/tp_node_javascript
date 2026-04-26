require("colors");
console.log("Testeando index");

console.log("INICIANDO SISTEMA GENERAL\n".yellow);

const ejecutarCuentaBancaria = require("./cuentaBancaria");
const ejecutarInstituto = require("./instituto");
const ejecutarMercado = require("./mercadoRestringido");

ejecutarCuentaBancaria()
    .then(() => ejecutarInstituto())
    .then(() => ejecutarMercado())
    .then(() => console.log("\nSISTEMA FINALIZADO".green));