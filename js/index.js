
// function verificarEdad() {
//     let ingreso = parseInt(prompt("Ingrese su edad"));

//     if (isNaN(ingreso)) {
//         console.log("Ingrese un numero por favor");
//     } else {
//         if (ingreso >= 18) {
//             console.log("Bienvenido a nuestro sitio");
//         } else {
//             console.log("No tiene edad suficiente para ingresar, vuelva cuando tenga 18 años");
//         }
//     }

//     alert("Bienvenido");
// }

// verificarEdad();


// function verificarStockYDescuento() {
//     alert("Stock");
    
//     let enStock = prompt("¿El producto está en stock? Conteste si o no").toLowerCase();
//     let precioDescuento = prompt("¿El producto tiene descuento? Conteste si o no").toLowerCase();

//     if (enStock === "si" || precioDescuento === "si") {
//         console.log("Producto Disponible");
//     } else {
//         console.log("Producto Agotado");
//     }
// }

// verificarStockYDescuento();


// function multiplicarEn5() {
//     alert("Ciclo For Utilizado Para Multiplicar en 5");

//     const NUMERO = 5;
    
//     for (let i = 1; i <= 10; i++) {
//         let resultado = NUMERO * i;
//         console.log(NUMERO + " X " + i + " = " + resultado);
//     }
// }

// multiplicarEn5();


// function juegoDescuento() {
//     alert("Adivina la palabra y ganate un descuento del 10% (javascript)");

//     const JUEGO_DESCUENTO = "javascript";
//     let intentos = 0;
//     let adivinanza = "";
//     let acertado = false; 

//     while (intentos < 3) {
//         adivinanza = prompt("Adivina la palabra").toLowerCase();
//         intentos++;

//         if (adivinanza === JUEGO_DESCUENTO) {
//             acertado = true;
//             break; 
//         } else {
//             alert("Esa no es, adivina de nuevo");
//         }
//     }

//     if (acertado) {
//         alert("¡Felicitaciones! Ganaste el descuento del 10%.");
//     } else {
//         alert("Lo siento, has agotado tus intentos. ¡Inténtalo de nuevo la próxima vez!");
//     }
// }

// juegoDescuento();


// function sumarNumerosAleatorios() {
//     alert("Sumar Numeros Aleatorios");
    
//     let suma = 0;
//     let continuar; 

//     do {
//         const NUMERO = parseFloat(prompt("Ingresa un numero para sumar"));
        
//         if (!isNaN(NUMERO)) {
//             suma += NUMERO;
//             continuar = prompt("¿Quiere ingresar otro numero? (si/no)").toLowerCase();
//         } else {
//             alert("Ingresa un numero válido");
//             continuar = "si"; 
//         }
//     } while (continuar === "si");

//     alert("La suma total es: " + suma);
// }

// sumarNumerosAleatorios();


// function miniCalculadora() {
//     alert("Mini Calculadora");
    
//     let numero1 = parseInt(prompt("Ingresa un numero"));
//     let operacion = prompt("Ingrese la operacion: +, -, *, /");
//     let numero2 = parseInt(prompt("Ingresa otro numero"));

//     let resultado;
//     switch (operacion) {
//         case "+":
//             resultado = numero1 + numero2;
//             break;
//         case "-":
//             resultado = numero1 - numero2;
//             break;
//         case "*":
//             resultado = numero1 * numero2;
//             break;
//         case "/":
//             resultado = numero1 / numero2;
//             break;
//         default:
//             alert("Operacion no valida");
//             resultado = "Indefinido";
//     }

//     alert("El resultado es: " + resultado);
// }

// miniCalculadora();



// alert("Funcion Sumar");
// function sumar(){
//     let num1 = parseInt(prompt("Ingresa un numero"));
//     let num2 = parseInt(prompt("Ingresa un numero"));
//     let suma = num1 + num2;
//     console.log("La suma es: " + suma);
// }

// sumar();


const PRODUCTOS = [
    {nombre: 'PC 1', precio: 1000 },
    {nombre: 'Monitor 1', precio: 3000 },
    {nombre: 'CPU 1', precio: 4500 },
    {nombre: 'Mouse', precio: 500 },
    {nombre: 'Teclado', precio: 500 },
    {nombre: 'Auriculares', precio: 1500 },
];

function saberPrecio (productos){
    console.log(`El producto es ${productos.nombre}, y su valor es de ${productos.precio}`);
}

PRODUCTOS.forEach(saberPrecio);

const MAYOR_PRODUCTO = PRODUCTOS.find(function(producto){
    return producto.precio > 2500;
})

console.log(MAYOR_PRODUCTO);

const precioMinimoUsuario = parseFloat(prompt("Ingrese el precio minimo que desee"));

if(isNaN(precioMinimoUsuario)){
    console.log("Ingrese un precio");
} {
    const productoFiltrado = PRODUCTOS.filter(function(producto){
        return producto.precio >= precioMinimoUsuario;
    });
    console.log("Productos que cumplen", productoFiltrado);
};


const NUMEROS = [2,3,10,5,9,7];

const hayNumeroMayor = NUMEROS.some(function(numero){
    return numero > 1; 
});

console.log(hayNumeroMayor);


const nombreMayuscula = PRODUCTOS.map(function(producto){
    return producto.nombre.toLocaleUpperCase();
})

console.log(nombreMayuscula);

const porcentajeAumentado = 0.1;

const precioAumentado = PRODUCTOS.map(function(producto){
    return{
        nombre: producto.nombre,
        precio: producto.precio*(1+porcentajeAumentado)
    }
})

console.log(precioAumentado);


let produOrden = [
    {nombre: "Monitor", precio: 3000},
    {nombre: "Notebook", precio: 15000},
    {nombre: "Mouse", precio: 2500},
    {nombre: "Parlante", precio: 5500},
];

produOrden.sort(function(a,b){
    return a.precio - b.precio
});


console.log(produOrden);

const TITULO = document.getElementById("tituloPrincipal"); 

console.log(TITULO); 


const NOMBRES = document.getElementsByClassName("nombres");

console.log(NOMBRES);

const LI = document.getElementsByTagName("li");
console.log(LI); 


const QueryNames = document.querySelector(".nombres"); 
console.log(QueryNames);

const QueryNamesAll = document.querySelectorAll(".nombres"); 
console.log(QueryNamesAll);


// TITULO.innerText = "HOLAAAA";

const SECTION_CONT = document.getElementById("seccionContenedor");

// SECTION_CONT.innerHTML = `
//                             <div class="card">
//                                 <img src="" alt="">
//                                 <div>
//                                     <h3>titulo de la card</h3>
//                                     <p>precio del producto</p>
//                                     <button>comprar</button>
//                                 </div>
//                             </div>`


const contenedor = document.getElementById("contenedor");

const tituloCompras = document.createElement("h2");

tituloCompras.innerText = "Productos Disponibles";
tituloCompras.className = "rojo";

contenedor.appendChild(tituloCompras); 


//parrafo.remove(); PARA ELIMINAR ELEMENTOS.


class Producto{
    constructor(nombre,precio,img){
        this.nombre = nombre;
        this.precio = precio;
        this.img = img;
    }
}

const PROD1 = new Producto("CPU Intel i5",3000,"img/cpu-intel-i5.jpg");
const PROD2 = new Producto("Monitor",8000,"img/monitor.avif");
const PROD3 = new Producto("Teclado",250000,"img/teclado.webp");
const PROD4 = new Producto("Mouse",50000,"https://support.content.office.net/es-es/media/e8384959-ad1a-1b95-762b-2861496b886e.png");
const PROD5 = new Producto("CPU Ryzen 5",2500,"img/cpu-ryzen-5.jpeg");
const PROD6 = new Producto("Mouse Gamer",10000,"img/mouse.webp");
const PROD7 = new Producto("Monitor Curvo",30000,"https://ar-media.hptiendaenlinea.com/wysiwyg/Las_5_razones_principales_para_comprar_un_monitor_de_PC_curvo_2.png");
const PROD8 = new Producto("Teclado RGB",4500,"https://www.infinitonline.com.ar/images/000000000000184701533TECLADO-USB-GAMER-MECANICO-REDRAGON-K552-KUMARA-NEGRO-RGB--K552-RGB--SWITCH-AZUL.jpg");

const arrayProductos = [PROD1,PROD2,PROD3,PROD4,PROD5,PROD6,PROD7,PROD8];

const contenedorDeProductos = document.getElementById("contenedorDeProductos");

arrayProductos.forEach(producto =>{
    const div = document.createElement("div");

    div.className = "card";

    div.innerHTML = `
                    <img class="card-img" src="${producto.img}">
                    <div>
                        <h3>${producto.nombre}</h3>
                        <p>${producto.precio}</p>
                        <button>comprar</button>
                    </div>
                    `;
 
    contenedorDeProductos.appendChild(div);
})



function ordenarPorPrecio() {
    const opcion = prompt("¿Deseas ordenar los productos por precio? (asc/desc)").toLowerCase();

    if (opcion === "asc") {
        arrayProductos.sort((a, b) => a.precio - b.precio);
    } else if (opcion === "desc") {
        arrayProductos.sort((a, b) => b.precio - a.precio);
    } else {
        alert("Opción no válida. Por favor, ingresa 'asc' para ascendente o 'desc' para descendente.");
        return;
    }

    mostrarProductos(arrayProductos);
}

function buscarProductoPorNombre() {
    const nombreBuscado = prompt("Ingresa el nombre del producto que deseas buscar:");
    const productosFiltrados = arrayProductos.filter(producto => producto.nombre.toLowerCase().includes(nombreBuscado.toLowerCase()));

    if (productosFiltrados.length === 0) {
        alert("No se encontraron productos con ese nombre.");
        return;
    }

    mostrarProductos(productosFiltrados);
}

function mostrarProductos(productos) {
    contenedorDeProductos.innerHTML = "";

    productos.forEach(producto => {
        const div = document.createElement("div");
        div.className = "card";
        div.innerHTML = `
            <img class="card-img" src="${producto.img}">
            <div>
                <h3>${producto.nombre}</h3>
                <p>${producto.precio}</p>
                <button>comprar</button>
            </div>`;
        contenedorDeProductos.appendChild(div);
    });
}

const deseaBuscar = prompt("¿Deseas buscar un producto por nombre? (si/no)").toLowerCase();

if (deseaBuscar === "si") {
    buscarProductoPorNombre();
} else {
    ordenarPorPrecio();
}











