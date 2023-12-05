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

