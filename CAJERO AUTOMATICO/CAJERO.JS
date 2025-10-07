/* 
Pseudocódigo funcionalidad de un cajero automático:
Inicio
    Escribir "Bienvenido al cajero automático. Ingrese su nombre:"
    Leer usuario
    Si usuario está vacío Entonces
        usuario <- "Usuario"
    FinSi

    saldo <- 500000

    Escribir "Hola, usuario! Tu saldo inicial es: saldo"

    Repetir
        Escribir "usuario, su saldo actual es: saldo"
        Escribir "Ingrese el valor a retirar:"
        Leer retiro

        Si retiro no es válido o retiro <= 0 Entonces
            Escribir "Por favor, ingrese un valor válido y positivo."
        Sino Si retiro <= saldo Entonces
            saldo <- saldo - retiro
            Escribir "Retiro exitoso. Nuevo saldo: saldo"
        Sino
            Escribir "Fondos insuficientes para realizar el retiro."
        FinSi

        Escribir "¿Desea realizar otro retiro? (1 = Sí, 2 = No)"
        Leer opcion
        Si opcion no es 1 y no es 2 Entonces
            Escribir "Opción no válida. Se finalizará la sesión."
            opcion <- 2
        FinSi
    Hasta Que opcion = 2

    Escribir "Gracias por usar el cajero automático, usuario. Saldo final: saldo"
Fin
*/
// Implementación en JavaScript

let usuario = prompt("👤 Bienvenido al cajero automático.\nPor favor, ingrese su nombre:");
if (!usuario || usuario.trim() === "") {
    usuario = "Usuario";
}

let saldo = 500000;
let opcion = 1;

alert(`Hola, ${usuario}! Tu saldo inicial es: $${saldo.toLocaleString()}`);

while (opcion === 1) {
    alert(`💰 ${usuario}, su saldo actual es: $${saldo.toLocaleString()}`);
    let retiro = parseInt(prompt("Ingrese el valor a retirar (solo números positivos):"), 10);

    // Validación de entrada
    if (isNaN(retiro) || retiro <= 0) {
        alert("⚠️ Por favor, ingrese un valor válido y positivo.");
    } else if (retiro <= saldo) {
        saldo -= retiro;
        alert(`✅ Retiro exitoso.\nNuevo saldo: $${saldo.toLocaleString()}`);
    } else {
        alert("❌ Fondos insuficientes para realizar el retiro.");
    }

    opcion = parseInt(prompt("¿Desea realizar otro retiro?\n1 = Sí\n2 = No"), 10);
    if (opcion !== 1 && opcion !== 2) {
        alert("⚠️ Opción no válida. Se finalizará la sesión.");
        opcion = 2;
    }
}

alert(`Gracias por usar el cajero automático, ${usuario}.\nSaldo final: $${saldo.toLocaleString()}`);