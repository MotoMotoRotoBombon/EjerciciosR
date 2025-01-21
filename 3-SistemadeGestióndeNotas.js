const readline = require('readline');

//las interfaces para las entradas y salidas
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let alumno_Jorge = 92;
let alumno_Maria = 85;
let alumno_Juan = 78;
let alumno_Sofia = 95;
let alumno_Pedro = 90;

let calificaciones = [alumno_Jorge, alumno_Maria, alumno_Juan, alumno_Sofia, alumno_Pedro];

function SistemaGestion() {
    console.log('Bienvenido a la escuela MotoMoto, aqui podras gestionar los datos de tus alumnos');
    console.log('Qué desea hacer?');
    console.log('1. Calcular promedio de clase');
    console.log('2. Muestre la calificación más alta y más baja.');
    console.log('3. Salir.');

    rl.question(' Ingrese la opción que desee: ', (option) => {
        switch (option) {
            case '1':
                CalcularPromedio();
                break;
            case '2':
                calificacionesBajasAltas();
                break;
            case '3':
                console.log('Regrese pronto!.\n');
                rl.close();
                break;
            default:
                console.log('Opción no válida, por favor ingrese una opción válida.\n');
                SistemaGestion();
        }
    });

}
//FUNCION PARA CALCULAR EL PRIMEDIO DEL A CLASE
function CalcularPromedio(){
    const sumaPromedio = alumno_Jorge + alumno_Maria + alumno_Juan + alumno_Sofia + alumno_Pedro;
    const promedio = sumaPromedio / 5;
    console.log('El promedio de la clase es: ', promedio , '\n');
    SistemaGestion();
}

//FUNCION PARA MOSTRAR LA CALIFICACION MAS ALTA Y BAJA
function MostrarCalificaciones(calificaciones){
    //Los 3 puntos ayudará a crear una copia de la lista
    let calificacionesModificadas = [...calificaciones];
    const calificacionMasAlta = Math.max(...calificacionesModificadas); //... Ayudara a tener los valores indivuduales de la listap
    const calificacionMasBaja = Math.min(...calificacionesModificadas); // para que la función pueda compararlos y encontrar el mas alto y mas bajo

    console.log(
        'La calificación más alta es:', calificacionMasAlta, '\n',
        'La calificación más baja es:', calificacionMasBaja, '\n'
    );
        SistemaGestion();
}
function calificacionesBajasAltas(){
    try {
        MostrarCalificaciones(calificaciones);
    } catch (error) {
        console.error("Error:", error.message);
    }
}

SistemaGestion();
