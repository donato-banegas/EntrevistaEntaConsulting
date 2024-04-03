// Dada una lista de numeros Aleatorios.

let listaNumeros = [12, 45, 78, 77, 74, 24, 1, 23, 74, 23, 2, 12, 78, 3];

// Realizar un algoritmo que detecte si los numeros unicos de la lista
// y retorna una lista con los elementos unicos.

function detectarUnicos(arr){
    let unicos = [];
    let n = arr.length;
    let repeticion = 0;
    let indice_aux = 0;

    for(let i=0; i<n; i++){            // Hay que recorrer TODA la lista original.

        for(let j=0; j<n; j++){        // Comparamos cada elemento con TODOS los elementos del arreglo. (excepto el mismo)
            if(arr[i] == arr[j]){      // Contamos la cantidad de veces que se repite en el arreglo.
                repeticion++;
                console.log("El elemento arr[",i,"] se repitió:",repeticion,"veces");
            } 
        }

        if(repeticion == 1){        // Si se repite una sola vez, es UNICO y debemos almacenarlo en el arreglo de salida.
            console.log("El elemento arr[",i,"] es UNICO");
            unicos[indice_aux] = arr[i];
            indice_aux++;
        } else {                    // Si se repite mas de una vez, no es UNICO y hay que ignorarlo.
            console.log("El elemento arr[",i,"] NO ES UNICO");
        }

        repeticion = 0;
    }

    return unicos;
}

console.log(detectarUnicos(listaNumeros));