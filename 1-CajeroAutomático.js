const readline = require('readline');

//las interfaces para las entradas y salidas
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

//Manejar saldo inical estático
let saldo = 5000;

// Ahora sería realizar la función que interactue con el cliente, en este caso se me bienvenida y que pregunte si quiere depositar o retirar
function cajeroAutomatico(){
    console.log('Bievenido al cajero automático de Jorge');
    console.log('Que desea hacer?');
    console.log('1. Retirar dinero');
    console.log('2. Depositar dinero');
    console.log('3. Consultar saldo');
    console.log('4. Salir');

    rl.question("Seleccione la opción: ", (option) => {
        switch (option) {
            case '1':
                retirarDinero();
                break;
            case '2':
                depositarDinero();
                break;
            case '3':
                consultarSaldo();
                break;
            case '4':
                console.log('Gracias por utilizar el cajero automático.');
                rl.close();
                break;
            default:
                console.log('Opción no válida, intente nuevamente.\n');
                cajeroAutomatico();
        }
    });
}
//Función para retirar dinero
function retirarDinero(){
    rl.question("Cuanto desea retirar? ", (cantidad) => {
        const cantidadNumerica = parseFloat(cantidad); //Necesario poque no siempre se manejan valores enteros
        //Ahora serás las condiciones, si el saldo es menor que lo que quiere retirar, mostrar mensaje, si no, restar el monto
        //En caso de no poner nada valido mostrar mensaje de error y regresar a la función principal
        if(cantidadNumerica > saldo){
            console.log('Fondos insuficientes, intente nuevamente.\n');
        }else if(cantidadNumerica > 0){
            saldo -= cantidadNumerica;
            console.log(`Se ha retirado ${cantidadNumerica}. Tu nuevo saldo es ${saldo}.\n`);
        }else{
            console.log('Opción no válida, intente nuevamente .\n');
        }
        cajeroAutomatico(); //Regresamos a la función
    });
}
//Función para depositar dinero
function depositarDinero(){
    rl.question("Cuanto desea depositar? ", (cantidad) => {
        const cantidadNumerica = parseFloat(cantidad);

        if(cantidadNumerica > 0){
            saldo += cantidadNumerica;
            console.log(`Se ha depositado ${cantidadNumerica}. Tu nuevo saldo es ${saldo}.\n`);
        }else{
            console.log('Opción no válida, intente nuevamente.\n');
        }
        cajeroAutomatico(); //Regresamos a la función principal
    });
}


//Funcion para consultar saldo
function consultarSaldo(){
    console.log(`Tu saldo actual es ${saldo}.\n`);
    cajeroAutomatico();
}


console.log(cajeroAutomatico());

