require("colors");
console.log("EJercicio N° 3 - Mercado restringido\n~~~~~~~~~~~~~~~~~~~~~~~~~~~");

/*3) Crear un archivo llamado mercadoRestringido.js, dentro de este
archivo generar cinco objetos de tipo producto, deben tener las
propiedades: id, nombreProducto, precio, stock. Guardar los
cinco objetos en un array llamado productos.
a) Se desea generar un método para realizar venta, validar stock y
generar etiqueta de envío. El método validarStock recibe como
parámetros de entrada un nombre de producto a buscar y el array
IFTS N° 11 – Tecnicatura Superior en Desarrollo de Software
Desarrollo de Sistemas Web – BackEnd
Profesor: Zammataro Gustavo
productos, debe buscar el producto, en el array de productos, en
caso de que lo encuentre, debe validar el stock disponible. El
método realizarVenta, debe recibir como parámetro de entrada un
objeto producto, y en caso de que se ejecute la venta, descontar
la cantidad vendida del producto. El método imprimirEtiqueta,
recibe como parámetro de entrada el nombre del producto.
b) El método para realizar venta no se debe ejecutar hasta no
validar si hay stock suficiente.
c) El método generar etiqueta solo se debe ejecutar si se realizó
la venta correctamente.
d) Simular retardos en los métodos de validar correlativas y
realizar inscripción de 2 segundos y 1 segundos y 4 segundos
respectivamente.
e) En cualquiera de los casos se debe ejecutar un log en consola
que informe que se finalizó la operación.
f) Ejecutar las promesas y definir como se debe comportar en cada
caso (resuelto/rechazado)
*/

const productos = [
    {id: 1, nombreProducto: "Teclado", precio: 5000, stock: 10},
    {id: 2, nombreProducto: "Mouse", precio: 3500, stock: 8},
    {id: 3, nombreProducto: "Auriculares", precio: 4000, stock: 5},
    {id: 4, nombreProducto: "Monitor", precio: 8500, stock: 15},
    {id: 5, nombreProducto: "Soporte noteboock", precio: 2000, stock: 1,}
]

function validarStock (nombreProducto, productos) {
        return new Promise((resolve, reject) => {
        console.log(`Estamos validando el stock del producto seleccionado: ${nombreProducto}`.yellow);
        setTimeout(() => {

        const resultado = productos.find(
            producto => producto.nombreProducto === nombreProducto);
        
        if (resultado && resultado.stock > 0) {
            resolve(resultado);
        } else {
            reject (`Error, no hay stock del producto ${nombreProducto}`.red);
        }
    }, 2000);
    })
}

function realizarVenta(producto) {
    return new Promise((resolve, reject) => {
        console.log("Procedemos a realizar la venta...");
        setTimeout(() => {

            producto.stock --;
            resolve(`Venta de: ${producto.nombreProducto} realizada con exito`);        
        }, 1000);
    })
}

function imprimirEtiqueta(producto){
    return new Promise((resolve, reject) => {
        console.log(`Realizando ticket`.yellow)
        console.log("============".cyan)
        setTimeout(() => {

            resolve(`ID: ${producto.id}\t PRODUCTO: ${producto.nombreProducto}\nPRECIO: $${producto.precio}\t STOCK ${producto.stock}`);
        }, 4000);
    });
}

function procesarVenta(nombreProducto) {
    validarStock(nombreProducto, productos)

    .then(producto => {
        console.log("Stock validado correctamente".green);
        return realizarVenta(producto);
    })

    .then(response => {
        console.log(response);
        const productoVendido = productos.find(p => p.nombreProducto === nombreProducto);
        return imprimirEtiqueta(productoVendido);
    })

    .then (response => {
        console.log(response);
    })

    .catch(error => {
        console.log(error.red);
    })

    .finally(() => {
        console.log("Proceso finalizado.".grey);
    })
}

procesarVenta("Mouse");

setTimeout(() =>{
    procesarVenta("Memoria ram");
}, 8000)