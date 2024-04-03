// Recorridas del Supermercado.

/*
Se necesita comprar una serie de artículos que están contenidos en una lista.
Los artículos deben comprarse en una cantidad X de supermercados disponibles en la zona, ingresando la
menor cantidad de veces a los mismo. No todos los artículos están a la venta en todos los supermercados, y
puede darse el caso de que existan artículos que no estén a la venta en ningún supermercado.
Los artículos deben comprarse solo una vez.
No hay ningún tipo de preferencia entre un supermercado y otro.
No deben tenerse en cuenta temas de precios ni disponibilidad de dinero al momento del análisis.

Armar un algoritmo que, dada una lista de artículos y una
lista de supermercados, resuelva el proceso de compra de todos los artículos disponibles en los
supermercados, devolviendo:

• Una lista con todos los artículos que se pudieron comprar y en que supermercado se compró cada
uno.
• Una lista que indique que productos no pudieron conseguirse en ningún supermercado.

Nota: Se puede dar por conocida la función ExisteArtículo(artículo,supermercado) que devuelve Verdadero o
Falso.
*/

const supermercados = [
    ["Walmart", ["aceite", "agua", "bananas", "azucar", "leche"]],
    ["Carrefour", ["aceite", "agua", "bananas", "leche", "azucar", "arroz", "pasta", "carne"]],
    ["Aldi", ["aceite", "agua", "manzanas", "bananas", "leche"]],
    ["Lidl", ["aceite", "agua", "manzanas", "bananas", "leche", "pan", "yogur", "queso", "huevos"]],
    ["Mercadona", ["aceite", "agua", "manzanas", "bananas", "leche", "pan", "azucar", "harina", "sal", "vinagre"]],
    ["Dia", ["aceite", "agua", "manzanas", "bananas", "leche", "pan", "papel higiénico", "detergente", "champú"]]
];

let lista_de_compras1 = ["aceite","agua","manzanas","bananas","leche","pan","azucar"];
let lista_de_compras2 = ["aceite","agua","manzanas","bananas","leche","pan","azucar","zucaritas"];


function irDeCompras(listaCompras, supermercados){

    let listaOriginal = listaCompras;
    let productosComprados = [];
    let registroFinal = [];
    let productosRestantes = [];
    let terminamosComprar = false;

    // Recorrer cada supermercado
    for(let i=0; i<supermercados.length ; i++){

        let supermercadoActual = supermercados[i][0];
        let productosSuperActual = supermercados[i][1];
        console.log("Productos de ",supermercadoActual,": ", productosSuperActual);

        productosDisponibles = verDisponibilidad(productosSuperActual,listaCompras);
        console.log("La lista de compras dice:", listaCompras);

        if(productosDisponibles.length !== 0){
            console.log("Se encontraron productos aqui! Vamos a Comprar!");
            productosComprados.push(...productosDisponibles);       // Agregamos los productos disponibles al final.
            listaCompras = actualizarListaCompras(listaCompras, productosComprados);

            // Agregar los productos comprados al registro final
            productosDisponibles.forEach(producto => {
                registroFinal.push(`${producto} se compró en ${supermercadoActual}`);
            });

        } else {
            console.log("No hay nada que comprar aqui...");
        }

        terminamosComprar = verificarIgualdadArreglos(listaOriginal, productosComprados);
        if(terminamosComprar == true){
            console.log("Se logró comprar todos los productos de la lista!");
            break;
        }
    }

    if(terminamosComprar == false){ // No se consiguieron todos los productos.
        console.log("No se consiguieron todos los productos.");
        productosRestantes.push(...listaCompras);
    }

    return { productosConseguidos: registroFinal, productosNoConseguidos: productosRestantes };
}

function verDisponibilidad(productosSuper,listaCompras){
    let productosDisponibles = [];
    let k = 0;
    for(let i = 0; i<listaCompras.length; i++){
        for(let j=0; j<productosSuper.length ; j++){
            if(productosSuper[j] === listaCompras[i]){
                productosDisponibles[k] = productosSuper[j];
                k++;
                break;
            } 
        }
    }
    console.log("Productos disponibles aqui: ",productosDisponibles);
    return productosDisponibles;
}

function actualizarListaCompras(listaCompras, productosComprados) {
    // Filtrar los elementos de listaCompras que no están presentes en productosComprados
    return listaCompras.filter(producto => !productosComprados.includes(producto));
}

function verificarIgualdadArreglos(arreglo1, arreglo2) {
    // Primero, asegurémonos de que ambos arreglos tengan la misma longitud
    if (arreglo1.length !== arreglo2.length) {
        return false; // Si las longitudes son diferentes, los arreglos no pueden ser iguales
    }

    // Ordenar ambos arreglos alfabéticamente
    arreglo1.sort();
    arreglo2.sort();

    // Ahora podemos comparar los elementos uno por uno
    for (let i = 0; i < arreglo1.length; i++) {
        if (arreglo1[i] !== arreglo2[i]) {
            return false; // Si algún elemento es diferente, los arreglos no son iguales
        }
    }

    // Si llegamos hasta aquí, significa que los arreglos son iguales
    return true;
}


console.log(irDeCompras(lista_de_compras1, supermercados));