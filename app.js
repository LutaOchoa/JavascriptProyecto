//variables
const productos=[
    {nombre: "huevos", precio:50},
    {nombre: "gaseosa", precio:250},
    {nombre: "yogur", precio:100},
    {nombre: "leche", precio:200},
    {nombre: "mayonesa", precio:150},
];
let carrito = []

let seleccion=prompt("Hola desea comprar algun producto si o no")

while(seleccion != "si" && seleccion != "no"){
    alert("por favor ingresar si o no")
    seleccion=prompt("hola desea comprar algo si o no")
}

if (seleccion=="si"){
    alert("a continuacion la lista de productos")
    let todosLosProductos =productos.map(
        (producto) => producto.nombre + "" + producto.precio + "$"
    );
    alert(todosLosProductos.join("-"))
}else if (seleccion=="no"){
    alert("gracias por venir, hasta pronto")
}

while (seleccion != "no"){
    let producto=prompt("agrega un producto a tu carrito")
    let precio=0

    if (producto=="huevo"||producto=="gaseosa"||producto=="yogur"||producto=="leche"||producto=="mayonesa"){
        switch (producto){
            case "huevo":
                precio=50;
                break;
            case "gaseosa":
                precio=250;
                break;
            case "yogur":
                precio=100;
                break;
            case "leche":
                precio=200;
                break;
            case "mayonesa":
                precio=150;
                break;
            default:
                break;
        }
        
        let unidades=parseInt(prompt("cuantas unidades quiere llevar"))

        carrito.push({producto,unidades,precio})
        console.log(carrito)
    }else{
        alert("no tenemos ese producto")
    }

    seleccion=prompt("desea seguir comprando?")

    while(seleccion ==="no"){
        alert("gracias por la compra! hasta pronto")
        carrito.forEach((carrritoFinal)=>{
            console.log(`producto: ${carrritoFinal.producto}, unidades: ${carrito.unidades}, total a pagar por producto ${carrritoFinal.unidades * carrritoFinal.precio}`)
        })
    break;
    }
}

const total =carrito.reduce((acc,el)=> acc + el.precio * el.unidades,0)
alert(`su compra fue de: ${total} $` )
