Para correr los programas que se realizaron lo que instalé
## Instalación de las dependencias necesarias
npm install
## Para ejecutar los programas
1. node 1-CajeroAutomático
2. node 2-PotenciaDos
3. node 3-SistemadeGestióndeNotas
4. node 4-TabladeMultiplicar
5. node 5-ContarVocales
6. 6-ValidarCURP

## Introducción a los ejercicios

1. CajeroAutomático
    Crea un programa que permita al usuario:
        • Consultar su saldo inicial (ejemplo: $5000).
        • Retirar dinero (restar al saldo, sin permitir retiros mayores al saldo disponible).
        • Depositar dinero (sumar al saldo).
        • Salir del sistema.

2. PotenciaDos
    Escribe un programa que determine si un número dado es potencia de 2 sin usar
    operaciones de potencias.
3. SistemadeGestióndeNotas
    Crea un programa que permita al usuario ingresar las calificaciones de 5 estudiantes y:
        1. Calcule el promedio de la clase.
        2. Muestre la calificación más alta y más baja.

4. TabladeMultiplicar
    Crea un programa que genere la tabla de multiplicar de un número ingresado por el usuario.

5. ContarVocales
    Crea un programa que reciba una frase ingresada por el usuario y cuente cuántas vocales
    tiene.

6. ValidarCURP
    Crea un programa que valide si una CURP ingresada es válida. Una CURP válida debe
    cumplir con las siguientes reglas:
        1. Tener exactamente 18 caracteres.
        2. Los primeros 4 caracteres son letras y deben seguir el patrón: [A-Z][AEIOU][A-
        Z][A-Z].
        3. 4. Los siguientes 6 caracteres son una fecha en formato AAMMDD.
        El carácter 11 es un género: H o M.
        5. Los caracteres 12 y 13 son el estado: [AS, BC, BS, CC, CL, CM, CS, CH, DF,
        DG, GT, GR, HG, JC, MC, MN, MS, NT, NL, OC, PL, QT, QR, SP, SL, SR,
        TC, TS, TL, VZ, YN, ZS].
        6. El resto debe contener solo letras o números.

## Dificultades
En este caso la verdad todos los ejercicios me parecieron sencillo, pero solo hubo uno que no me salió al 100
que fue validar la CURP, a pesar que las expresiones regulares se me dan muy bien, me siguió saliendo 
curp no válida con mi curp propia.
De ahí en fuera no hubo dificultades, bueno, el de tablas de multuplicar me asustó un poco porque
pensé que era hacer una calculadora y yo digitar los números, por lo que lo primero que se me ocurrió hacer
un html y en base a los id agregar variables por medio de los eventos y así, pero al final solo era generar
solo la tabla sin hacer todo eso con el numero que digite, por lo que solo me perdí tiempo por no leer bien:/

Los de bases de datos no estaban muy muy dificiles, ya que eran muy similares todos
pero si me llevó mucho tiempo porque me equivocaba mucho en lo alias para distinguir mejor a las tablas y era hacerlo
muy exacto, por lo que si me tomó mucho tiempo.

## Clonar repo
git remote add origin https://github.com/MotoMotoRotoBombon/EjerciciosR.git

