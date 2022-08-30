
//__________________________________________________________________________________ CONSIGNA 1 de CODER !!!!! 

let numero1 = Number(prompt ("Ingrese un número al azar"));

if (numero1 > 1000) {
    alert("Ese número es demasiado grande")
};

// ______Pedir un texto mediante prompt, y si es igual a "Hola" mostrar un alerta por consola.
//__________________________________________________________________________________ CONSIGNA 2 de CODER !!!!! 

let texto = prompt ("Hola, Buenos días");

if (texto == "Hola") {
    alert("El texto ingresado es: " + texto)
};

// ______Pedir un número por prompt y evaluar si está entre 10 y 50. En caso positivo mostrar un alert.
//__________________________________________________________________________________ CONSIGNA 3 de CODER !!!!! 

let numero2 = Number(prompt ("Ingrese otro número"));

if ((numero2 > 10) && (numero2 < 50)) {
    alert("Tu número esta entre 10 y 50")
};

// _____Pedir número mediante prompt y sumarle otro número en cada repetición,realizando una salida por cada resultado.
//____________________________________________________________________________________________ CONSIGNA 4 de CODER !!!!! 

let numero3 = Number(prompt ("Ingrese un número base"))


for(let i=0; i < 6; i++){
    
    alert(numero3 + i);
}

// ______Pedir un texto mediante prompt, concatenar un valor en cada repetición, realizando una salida por cada resultado, hasta que se ingresa “ESC”.
//____________________________________________________________________________________________ CONSIGNA 5 de CODER !!!!! 

let texto1 = prompt("Escribe el nombre de una fruta")
let texto2 = " "

do{
    texto2 = prompt ("Nombre diferentes caracteristicas de esa fruta - (Escribe ESC para finalizar)")
    resultado = texto1 + " " + texto2
    console.log(resultado)
}
while(texto2 != "ESC")


// ______Pedir un número por prompt, repetir la salida del mensaje “Hola” la cantidad de veces ingresada.
//____________________________________________________________________________________________ CONSIGNA 6 de CODER !!!!! 

let numero4 = Number(prompt("Ingresar un número del 1 al 10"))
if(numero4 > 10){ 
    alert("Aprende a respetar consignas")
}

else{
for(let i=0; i<numero4 ; i++){
    alert("Hola")
}
}

















