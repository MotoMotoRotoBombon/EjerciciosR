const readline = require('readline');

//las interfaces para las entradas y salidas
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

//Establecemos las vocales, para despues usar un ciclo sobre lo que el usuario ingrese y comparar con la variable vocales, o así se me ocurre ahorita
var vocales = ['a', 'e', 'i', 'o', 'u'];

//funcion para leer la entrada del usuario
function leerEntrada() {
    console.log('Bievenido al detector de vocales!.');
    console.log('Desea digitar una frase y ver cuantas vocales tiene?');
    console.log('1. Deseo digitar una frase');
    console.log('2. No deseo digitar la frase');

    rl.question("Seleccione la opción: ", (option) => {
        switch (option) {
            case '1':
                contarVocales();
                break;
            case '2':
                console.log('Es una lastima, vuelva pronto!.\n');
                rl.close();
                break;
            default:
                console.log('Opción no válida, intente nuevamente.\n');
                leerEntrada();
        }
    });
}

function contarVocales(){
    rl.question('Ingrese la frase: ', (frase) => {
        let contador = 0;
        let vocalesEncontradas = [];

        for(let i = 0; i < frase.length; i++){
            if( vocales.includes(frase[i]) ){
                contador++;
                vocalesEncontradas.push(frase[i]); //No recordaba que existía el push, solo iba a dejar el contador y ver las
                //vocales en total pero si quería ver el arreglo tenía que meter las encontradas en uno para verlos, ya que
                // mostrando solo contador solo me mostraba un entero y no las vocales, o así fue como pensé que fue mejor
            }
        }
        if (contador > 0) {
            console.log(`La frase ${frase} contiene ${contador} vocales: ${vocalesEncontradas.join(', ')}. \n`);
        } else {
            console.log('No se encontraron vocales en la frase.\n');
        }
        leerEntrada();
    });
}   

leerEntrada();