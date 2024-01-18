

const BOTON_MODO = document.getElementById("botonModo");

BOTON_MODO.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        localStorage.setItem("modo", "dark");
    } else {
        localStorage.setItem("modo", "claro");
    }
})

const modo = localStorage.getItem("modo");

if (modo === "dark") {
    document.body.classList.add("dark");
} else {
    document.body.classList.remove("dark");
}


class Cliente {
    constructor(usuario, contraseña) {
        this.usuario = usuario;
        this.contraseña = contraseña;
    }
}

let arrayClientes = [];

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const nombre = document.getElementById("usuario");
    const apellido = document.getElementById("contraseña");

    console.log("El usuario ingresado es: " + nombre.value);
    console.log("La contraseña ingresada es: " + apellido.value);

    const cliente = new Cliente(nombre.value, apellido.value);
    arrayClientes.push(cliente);

    localStorage.setItem("clientes", JSON.stringify(arrayClientes));

    console.log(arrayClientes);

    formulario.reset();
});

function cargarClientes() {
    let clientes = localStorage.getItem("clientes");

    if (clientes) {
        arrayClientes = JSON.parse(clientes);  
    }
}

cargarClientes();

function cargarTareas() {
    let tareas = localStorage.getItem("tareas");

    if (tareas) {
        let listaTareas = document.getElementById("listaTareas");
        listaTareas.innerHTML = tareas;
        asignarEventosABotones();
    }
}

function agregarTarea() {
    let tareaInput = document.getElementById("tareasInput");
    let nuevaTarea = tareaInput.value.trim();

    if (nuevaTarea !== "") {
        let tareas = localStorage.getItem("tareas") || "";
        tareas += `<li>${nuevaTarea} <button onclick="eliminarTarea(this.parentNode)">Borrar</button></li>`;
        localStorage.setItem("tareas", tareas);
        tareaInput.value = "";
        cargarTareas();
    }
}

function eliminarTarea(tarea) {
    let listaTareas = document.getElementById("listaTareas");
    let tareas = listaTareas.innerHTML;

    tareas = tareas.replace(tarea.outerHTML, "");
    localStorage.setItem("tareas", tareas);

    listaTareas.innerHTML = tareas;

    asignarEventosABotones();
}

function asignarEventosABotones() {
    let botonesBorrar = document.querySelectorAll("#listaTareas li button");
    botonesBorrar.forEach((boton) => {
        boton.addEventListener("click", function() {
            eliminarTarea(boton.parentNode);
        });
    });
}

cargarTareas();



const PRODUCTOS = [
    { id: 1, nombre: 'CPU Intel i5', precio: 3000, img: "img/cpu-intel-i5.jpg" },
    { id: 2, nombre: 'Monitor', precio: 8000, img: "img/monitor.avif" },
    { id: 3, nombre: 'Teclado', precio: 2500, img: "img/teclado.webp" },
    { id: 4, nombre: 'Mouse', precio: 5000, img: "https://support.content.office.net/es-es/media/e8384959-ad1a-1b95-762b-2861496b886e.png" },
    { id: 5, nombre: 'CPU Ryzen 5', precio: 8500, img: "img/cpu-ryzen-5.jpeg" },
    { id: 6, nombre: 'Mouse Gamer', precio: 1000, img: "img/mouse.webp" },
    { id: 7, nombre: 'Monitor Curvo', precio: 3000, img: "https://ar-media.hptiendaenlinea.com/wysiwyg/Las_5_razones_principales_para_comprar_un_monitor_de_PC_curvo_2.png" },
    { id: 8, nombre: 'Teclado RGB', precio: 4500, img: "https://www.infinitonline.com.ar/images/000000000000184701533TECLADO-USB-GAMER-MECANICO-REDRAGON-K552-KUMARA-NEGRO-RGB--K552-RGB--SWITCH-AZUL.jpg" },
];

const carrito = JSON.parse(localStorage.getItem('carrito')) || [];

actualizarCarrito();

function renderizarProductos() {
    const carritoElement = document.getElementById('carrito');
    carritoElement.innerHTML = '';

    const productosEnCarrito = document.createElement('div');
    productosEnCarrito.classList.add('d-flex', 'flex-row', 'flex-wrap', 'gap-1');

    PRODUCTOS.forEach(producto => {
        const card = document.createElement('div');
        card.classList.add('card', 'mb-3');
        card.innerHTML = `
            <img src="${producto.img}" alt="${producto.nombre}">
            <h3>${producto.nombre}</h3>
            <p>precio: ${producto.precio.toFixed(2)}</p>
            <button onclick="agregarAlCarrito(${producto.id}, '${producto.img}')">agregar carrito</button>
        `;
        productosEnCarrito.appendChild(card);
    });

    carritoElement.appendChild(productosEnCarrito);
}

function agregarAlCarrito(idProducto, imgProducto) {
    const productoExistente = carrito.find(producto => producto.id === idProducto);

    if (productoExistente) {
        productoExistente.cantidad += 1;
    } else {
        const productoSeleccionado = PRODUCTOS.find(producto => producto.id === idProducto);

        if (productoSeleccionado) {
            productoSeleccionado.cantidad = 1;
            productoSeleccionado.img = imgProducto;
            carrito.push(productoSeleccionado);
        }
    }

    localStorage.setItem('carrito', JSON.stringify(carrito));

    actualizarCarrito();
}

function actualizarCarrito() {
    const carritoElement = document.getElementById('total');
    carritoElement.innerHTML = '';

    const productosEnCarrito = document.createElement('div');
    productosEnCarrito.classList.add('d-flex', 'flex-row', 'flex-wrap', 'gap-1');

    carrito.forEach(producto => {
        const card = document.createElement('div');
        card.classList.add('card', 'mb-3');
        card.innerHTML = `
            <img src="${producto.img}" alt="${producto.nombre}">
            <h3>${producto.nombre}</h3>
            <p>precio: ${producto.precio.toFixed(2)}</p>
            <p>cantidad: ${producto.cantidad}</p>
            <button onclick="eliminarUno(${producto.id})">Eliminar uno</button>
            <button onclick="eliminarTodos(${producto.id})">Eliminar todos</button>
        `;
        productosEnCarrito.appendChild(card);
    });

    carritoElement.appendChild(productosEnCarrito);

    sumarTotal();
}

function eliminarUno(idProducto) {
    const index = carrito.findIndex(producto => producto.id === idProducto);

    if (index !== -1) {
        const producto = carrito[index];

        if (producto.cantidad > 1) {
            producto.cantidad -= 1;
        } else {
            carrito.splice(index, 1);
        }

        localStorage.setItem('carrito', JSON.stringify(carrito));

        actualizarCarrito();
    }
}

function eliminarTodos(idProducto) {
    const index = carrito.findIndex(producto => producto.id === idProducto);

    if (index !== -1) {
        carrito.splice(index, 1);

        localStorage.setItem('carrito', JSON.stringify(carrito));

        actualizarCarrito();
    }
}

function sumarTotal() {
    const totalElement = document.getElementById('final');
    const total = carrito.reduce((acc, producto) => acc + producto.precio * producto.cantidad, 0);
    totalElement.innerHTML = `<p> total: $${total.toFixed(2)}</p>`;
}

cargarClientes();
renderizarProductos();



























