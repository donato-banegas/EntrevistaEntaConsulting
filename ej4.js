// Pagar el carrito online del super.
/*
Teniendo en cuenta que ya hemos cargado todos los artículos que deseamos comprar en nuestro carrito de
compras en línea de un supermercado, necesitamos realizar el pago con nuestra tarjeta de débito, la cual
tiene suficientes fondos para cubrir el monto total de la compra.

Para lograrlo, debemos diseñar un algoritmo que intente realizar la compra, ingresando al carrito de compras,
completando los datos de nuestra tarjeta de débito en la función IngresarDatosTarjeta(Nro Tarjeta, Titular) y
haciendo click en el botón "Pagar”.
En caso de que se presente un error en el pago, reintentar hasta 3 veces, una vez superado el límite se debe
enviar un correo electrónico al banco solicitando asistencia, porque puede bloquearse la tarjeta.
Cada vez que falle la compra, el algoritmo debería volver al carrito de compras con los productos cargados.
*/



let intentos = 3;

let usuarioPrueba = {   // Usuario Almacenado para comparar luego.
    nombre: 'Juan',
    apellido: 'Pérez',
    dni: '12345678',
    numeroTarjeta: '1234 5678 9012 3456',
    vencimiento: '12/25', 
};

let usuario = {
    nombre: '',
    apellido: '',
    dni: '',
    numeroTarjeta: '',
    vencimiento: '', 
};

function realizarPago(){
    while(intentos != 0){
        actualizarDatos(intentos);
        resultado = verificarDatos(usuario);

        if(resultado == true){
            console.log("Pago realizado con exito!");
            break;
        } else {
            intentos--;
            console.log("Datos erroneos! Le quedan:", intentos,"intentos.");
        }
    }
    if(intentos == 0){
        console.log("Se quedó sin intentos! Se enviará un mensaje al banco!");
    }
}

function verificarDatos(usuario){
    if(usuario.nombre === usuarioPrueba.nombre && usuario.apellido === usuarioPrueba.apellido && usuario.dni === usuarioPrueba.dni
        && usuario.numeroTarjeta === usuarioPrueba.numeroTarjeta && usuario.vencimiento === usuarioPrueba.vencimiento){
        return true;
    } else {
        return false;
    }
}


function actualizarDatos(intentos){ // Utilizamos 3 casos explicitos porque no estoy pudiendo obtener inputs por consola.
    switch(intentos) {
        case 3: // Se introducen los datos por primera vez.
            usuario.nombre = "Jorge";       // Primero está mal el nombre
            usuario.apellido = 'Pérez';
            usuario.dni = '12345678';
            usuario.numeroTarjeta = '1234 5678 9012 3456';
            usuario.vencimiento = '12/25'; 
            break;
        case 2:
            usuario.nombre = "Marcos";      // Se actualiza y sigue mal.
            usuario.apellido = 'Pérez';
            usuario.dni = '12345678';
            usuario.numeroTarjeta = '1234 5678 9012 3456';
            usuario.vencimiento = '12/25'; 
            break;
        case 1:
            usuario.nombre = "Daniel";        // Utilizamos el ultimo caso para probar.
            usuario.apellido = 'Pérez';
            usuario.dni = '12345678';
            usuario.numeroTarjeta = '1234 5678 9012 3456';
            usuario.vencimiento = '12/25'; 
            break;
    }
}

realizarPago();