//Escribe un programa que determine si un número dado es potencia de 2 sin usar operaciones de potencias.
//Potencias de 2
//2^0 = 1 (1 sería la clave aquí)
//2^1 = 2
//2^2 = 4
//2^3 = 8
//2^4 = 16
//2^5 = 32
//2^6 = 64
//2^7 = 128
//2^8 = 256
//2^9 = 512
//2^10 = 1024
function esPotencia(n){
    //return n > 0 && (n & (n - 1)) === 0; //Esta fue la forma que despues miré por medio de bits (que fue después de resolverlo)
    // Por ejemplo 1. = 0001
    // 2. = 0010
    // 3. = 0011
    // 4. = 0100
    // Entonces si un número es par, su bit menos significativo es 0
    // Si un número es impar, su bit menos significativo es 1
    // Si un número es potencia de 2, su bit menos significativo es 1
    // Y todos los demás bits son 0
    if(n <= 0){
        return flase;
    }
    while(n > 1){
        if(n % 2 !== 0) return false;
        // 8 % 2 = 0
        // 4 % 2 = 0
        // 2 % 2 = 0
        // 1 % 2 = 1 (True)
        n = Math.floor(n / 2);
        // 8 / 2 = 4
        // 4 / 2 = 2
        // 2 / 2 = 1 (True)
    }
    return true;
} 

console.log(esPotencia(8)); // true
console.log(esPotencia(10)); // false
console.log(esPotencia(16)); // true
console.log(esPotencia(25)); // false