// Dada una lista de numeros.

let listaNumeros = [12, 45, 78, 77, 74, 24, 1, 23];

// Realizar un algoritmo que calcule el promedio de los numeros:

let n = listaNumeros.length;
let Sumatoria = 0;
for(i=0; i<n; i++){
    Sumatoria = Sumatoria + listaNumeros[i];
}

let Promedio = Sumatoria / n;
console.log("El promedio es:", Promedio);