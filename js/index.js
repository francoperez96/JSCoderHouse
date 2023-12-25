let ingreso = parseInt(prompt("Ingrese su edad"));

if(isNaN(ingreso)){
    console.log("Ingrese un numero por favor");
}
else{
    if(ingreso >= 18){
        console.log("Bienvenido a nuestro sitio");
    }else{
        console.log("No tiene edad suficiente para ingresar, vuelva cuando tenga 18 años");
    }
}


alert("Bienvenido");


alert("Stock");
let enStock = prompt("¿El producto esta en stock? Conteste si o no");
let precioDescuento = prompt("¿El producto tiene descuento? Conteste si o no");

if(enStock === "si" || precioDescuento === "si"){
    console.log("Producto Disponible");
}
else{
    console.log("Producto Agotado");
}

alert("Ciclo For Utilizado Para Multiplicar en 5");
const NUMERO = 5;
for(let i = 1; i <= 10; i++){
    let resultado = NUMERO * i;
    console.log(NUMERO + " X " + i + " = " + resultado);
}


alert("Juego de Palabra Secreta (javascript)");

const PALABRASECRETA = "javascript";
let intentos = 0;
let adivinanza = "";

while(adivinanza !== PALABRASECRETA){
    adivinanza = prompt("Adivina la palabra secreta").toLocaleLowerCase()
    intentos++;

    if(adivinanza !== PALABRASECRETA){
        alert("Esa no es, adivina de nuevo");
    }
}

alert("Felicitaciones! Tardaste " + intentos + " intentos");


alert("Sumar Numeros Aleatorios");
let suma = 0;
let continuar; 

do{
    const NUMERO = parseFloat(prompt("Ingresa un numero para sumar"));
    if(!isNaN(NUMERO)){
        suma += NUMERO;
        continuar = prompt("¿Quiere ingresar otro numero? (si/no)").toLocaleLowerCase()
    }
    else{
        alert("Ingresa un numero valido");
        continuar ="si";
    }
}
while(continuar === "si");

console.log("La suma total es: " + suma);


alert("Mini Calculadora"); 

let numero1 = parseInt(prompt("Ingresa un numero"));
let operacion = prompt("Ingrese la operacion: +, -, *, /");
let numero2 = parseInt(prompt("Ingresa otro numero"));

let resultado;
switch(operacion){
    case "+":
        resultado = numero1 + numero2;
    break;
    case "-":
        resultado = numero1 - numero2;
    break;
    case "*":
        resultado = numero1 * numero2;
    break;
    case "/":
        resultado = numero1 / numero2;
    break;
    default: 
    alert("Operacion no valida");
    resultado = "Indefinido";
}

alert("El resultado es: " + resultado);

alert("Funcion Sumar");
function sumar(){
    let num1 = parseInt(prompt("Ingresa un numero"));
    let num2 = parseInt(prompt("Ingresa un numero"));
    let suma = num1 + num2;
    console.log("La suma es: " + suma);
}

sumar();
sumar();

