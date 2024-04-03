// Dada una lista de numeros Aleatorios.

let listaNumeros = [12, 45, 78, 77, 74, 24, 1, 23];

// Realizar un algoritmo que detecte si un numero X existe en esa lista.
// Si existe que retorne True, caso contrario que retorne False.

function detectarNumero(arr, X){
    let n = arr.length;
    for(i=0; i<n; i++){
        if(arr[i] == X){
            return true;
        } 
    }
    return false;
}

let numPrueba = 25;
console.log(detectarNumero(listaNumeros, numPrueba));