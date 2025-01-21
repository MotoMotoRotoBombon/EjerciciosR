const readline = require('readline');

//las interfaces para las entradas y salidas
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


function leerEntrada() {
    console.log('Bievenido al CURP VALIDATOR!.');
    console.log('Desea validar su CURP?');
    console.log('1. Sí deseo validar mi CURP');
    console.log('2. No deseo validar mi CURP');

    rl.question("Seleccione la opción: ", (option) => {
        switch (option) {
            case '1':
                rl.question("Ingresa la CURP: ", (curp) => {
                    console.log(validarCURP(curp));
                    leerEntrada();
                });
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

/*
INDICACIONES:
1. Tener exactamente 18 caracteres.
2. Los primeros 4 caracteres son letras y deben seguir el patrón: [A-Z][AEIOU][A-
Z][A-Z].
3. Los siguientes 6 caracteres son una fecha en formato AAMMDD.
4. El carácter 11 es un género: H o M.
5. Los caracteres 12 y 13 son el estado: [AS, BC, BS, CC, CL, CM, CS, CH, DF,
DG, GT, GR, HG, JC, MC, MN, MS, NT, NL, OC, PL, QT, QR, SP, SL, SR,
TC, TS, TL, VZ, YN, ZS].
6. El resto debe contener solo letras o números.
*/

function validarCURP(curp){
    //PRIMERO VER QUE LA VALIDACIÓN DE CURP TENGA AL MENOS 18 CARACTERES
    if(curp.length !== 18){
        console.log('La CURP debe tener exactamente 18 caracteres. \n');
    }
    //LO ESTABA HACIENDO UNO POR UNO, PERO CREO QUE ES MEJOR HACER TODO EN UNA Y VER EL PATRON COPLETO, 
    // NO PREGUNTAR, CUMPLE EL PUNTO 2? SI PASA EL SIGUIENTE, CUMPLE EL 3?
                //CHECAR LOS PRIMEROS 4   AQUI SE CHECARIA LA FECHA                             Y AQUI LOS ESTADOS QUE ME DIO                                                                   Y SOLO LETRAS | NUMEROS
    let patron = /^[A-Z][AEIOU][A-Z]{2}\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])[HM](AS|BC|BS|CC|CL|CM|CS|CH|DF|DG|GT|GR|HG|JC|MC|MN|MS|NT|NL|OC|PL|QT|QR|SP|SL|SR|TC|TS|TL|VZ|YN|ZS)[A-Z0-9]{3}$/;
    
    if(patron.test(curp)){
        return 'La CURP es válida. \n';
    }else{
        return 'La CURP no es válida. \n';
    }
}

leerEntrada();



