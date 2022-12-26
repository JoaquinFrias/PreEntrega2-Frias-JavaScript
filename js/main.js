const productos = [
    {nombre: "guitarra", precio: 50000},
    {nombre: "teclado", precio: 80000},
    {nombre: "cajon", precio: 10000},
    {nombre: "trompeta", precio: 20000},
    {nombre: "violin", precio: 18000},
    {nombre: "bateria", precio: 25000},
];

let carrito = [];

let seleccion = prompt("Hola desea comprar algun producto? escriba si o no");

while(seleccion != "si" && seleccion != "no"){
    alert("Por favor ingrese si o no");
    seleccion = prompt("Hola desea comprar algun producto? escriba si o no");
}

if (seleccion == "si"){
    alert("A continuacion nuestra lista de productos")
    let listaProductos = productos.map((producto) => producto.nombre + " " + producto.precio + "$");
    alert(listaProductos.join(" - "))
}
    else if (seleccion == "no"){
    alert("Gracias por venir, hasta pronto!")
}

while (seleccion == "si"){
    let producto = prompt("Agrega un producto a tu carrito");
    let precio=0;
    if(producto=="guitarra" || producto =="teclado" || producto=="cajon" || producto=="trompeta" || producto=="violin" || producto=="bateria"){
        switch (producto) {
            case "guitarra":
                precio = 50000;
                break;
            case "teclado":
                precio = 80000;
                break;
            case "cajon":
                precio = 10000;
                break;
            case "trompeta":
                precio = 20000;
                break;
            case "violin":
                precio = 18000;
                break;
            case "bateria":
                precio = 25000;
                break;
            default:
                break;
        }
        let unidades = parseInt(prompt("Cuantas unidades desea llevar?"))
        carrito.push({producto, unidades, precio})
        console.log(carrito);
    }else{
        alert("No tenemos ese producto")
    }
    seleccion = prompt("Desea seguir comprando? escriba si o no");
    while(seleccion === "no"){
        alert("Gracias por su compra! vuelva pronto")
        carrito.forEach((carritoFinal) => {
            console.log(`Producto: ${carritoFinal.producto}, Unidades: ${carritoFinal.unidades}, Total a pagar por producto ${carritoFinal.unidades * carritoFinal.precio}`);
        })
    break;
    }
}

const total = carrito.reduce((acumulador, elemento) => acumulador + elemento.precio * elemento.unidades, 0)
console.log(`El total a pagar por su compra es: ${total}`);
