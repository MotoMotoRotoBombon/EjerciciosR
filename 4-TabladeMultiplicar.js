const readline = require('readline');

//las interfaces para las entradas y salidas
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// funcion para leer la entrada del usuario y generar la tabla de multiplicar
function leerEntrada() {
    console.log('Bievenido al generador de tablas de multiplicar');
    console.log('Desea generar una tabla de multiplicar?');
    console.log('1. Deseo generar una tabla?');
    console.log('2. No deseo generar la tabla?');

    rl.question("Seleccione la opción: ", (option) => {
        switch (option) {
            case '1':
                generar();
                break;
            case '2':
                console.log('Es una lastima, vuelva pronto!.\n');
                rl.close();
                break;
            default:
                console.log('Opción no válida, intente nuevamente.\n');
                cajeroAutomatico();
        }
    });
}

//FUNCION PARA GENERAR LA TABLA 
function generarTablaMultiplicar(numero) {
    console.log(`Tabla de multiplicar del ${numero}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}

function generar(){ //Llamar así la función me quitó un error que tenía, y mejor usé una función para que el usuario interactué y otra que genere la tabla
    rl.question('Ingrese el número para generar la tabla de multiplicar: ', (entrada) => {
        const numeroEntrada = parseInt(entrada, 10);
        if (isNaN(numeroEntrada)) {
            console.log('Error: Debe ingresar un número. \n');
        }else{
            generarTablaMultiplicar(numeroEntrada);
            leerEntrada();
        }
    });
    
}

// Llamada a la función
leerEntrada(5);
