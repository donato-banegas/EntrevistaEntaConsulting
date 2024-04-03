// Lista de compra de supermercado: 
/*
Se tiene una lista de compras y cada uno de los productos tiene su precio y cantidad a comprar. Se tiene un monto
limitado de dinero para gastar. Ambas cosas son inputs del proceso.
La lista no tiene productos duplicados y para comprar un producto se tiene que comprar en su totalidad. Por
ejemplo, si hay que comprar 5 Aceites, no puedo comprar una cantidad distinta a 5.
Realizar un algoritmo para:
    • Devolver dinero le quedo sin gastar, priorizando las compras de mayor monto total por producto.
    • Obtener el porcentaje de los productos que se pudieron comprar (por productos, sin tener en cuenta las
cantidades de cada uno).

Aclaración: el método de ordenamiento se puede dar por conocido, indicar el criterio de ordenamiento y se pueden
agregar columnas a la lista.
*/

let saldoDisponible = 75;
let listaCompras = [
    {producto: "aceite", Cantidad: 2, precioUnitario: 8},
    {producto: "agua", Cantidad: 8, precioUnitario: 3},
    {producto: "azucar", Cantidad: 3, precioUnitario: 6},
    {producto: "papel", Cantidad: 2, precioUnitario: 2},
    {producto: "yogurt", Cantidad: 5, precioUnitario: 1},
    {producto: "galletitas", Cantidad: 6, precioUnitario: 3},
    {producto: "harina", Cantidad: 4, precioUnitario: 4},
    {producto: "levadura", Cantidad: 1, precioUnitario: 3},
]

function irDeCompras(listaCompras, saldoDisponible){
    // Primero hay que establecer la prioridad.
    let Conjuntos = []; // Arreglo de objetos.

    for(let i=0; i<listaCompras.length; i++){
        let Conjunto = {}; // Objeto para cada elemento de la lista de compras
        Conjunto.producto = listaCompras[i].producto;
        Conjunto.precioTotal = listaCompras[i].Cantidad * listaCompras[i].precioUnitario;
        Conjuntos.push(Conjunto); // Agregamos el objeto Conjunto al arreglo Conjuntos
    }
    console.log(Conjuntos);

    // Ahora hay que ordenar los objetos de mayor a menor precio.
    Conjuntos.sort((a, b) => b.precioTotal - a.precioTotal);
    console.log(Conjuntos);

    // Ahora hay que comenzar a comprar con prioridad en lo mas costoso.
    let productosComprados = 0;
    let totalComprado = 0;
    for(let i = 0; i < Conjuntos.length; i++){
        if(Conjuntos[i].precioTotal <= saldoDisponible){
            console.log(`Comprando ${Conjuntos[i].producto} por ${Conjuntos[i].precioTotal}`);
            saldoDisponible -= Conjuntos[i].precioTotal;
            totalComprado += Conjuntos[i].precioTotal;
            productosComprados++;
        } else {
            console.log(`No hay suficiente saldo para comprar ${Conjuntos[i].producto}`);
        }
    }

    console.log(`Se gastó un total de ${totalComprado} con un saldo restante de ${saldoDisponible}`);

    // Ahora hay que determinar el porcentaje de productos comprados.
    let totalProductos = listaCompras.length;
    let porcentajeCompra = (productosComprados / totalProductos) * 100;
    console.log("El porcentaje de productos es:",porcentajeCompra);
}

irDeCompras(listaCompras, saldoDisponible);