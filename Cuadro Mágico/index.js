// Nos traemos los elementos del DOM
const celdas = document.querySelectorAll('.celda'); // selecciona todos los elementos del documento que tienen la clase celda, y luego se almacenan en la variable celdas.
const button = document.querySelector('button'); // lo mismo de la linea de arriba
let numeros = []; // Declara una variable 'numeros' global con un valor de array vacío, almacena los números ingresados

// Función para verificar si el usuario ha ingresado números validos
function validarInput() { // Declara una función para validar los inputs
let validar = true; // Declara 'validar' con un valor booleano 'true'
numeros = []; // 'Llama a numeros' dentro de la función
for (let celda of celdas) {  // Para celda de celdas 
    let value = parseInt(celda.value); // Convierte el valor de la propiedad 'value' del objeto 'celda'de una cadena de texto a un numero
    if (isNaN(value) || value < 1 || value > 9) { // Si el valor no es un numero o si es menor que 1 o mayor que 0
    validar = false; // Cambia su valor a false
    break; // Rompe la sentencia con un error
    } else { // De otro modo si la sentencia es verdad
    numeros.push(value); // Pasa el método push para empujar el valor al final de la matriz
    }
}
return validar; // Devuelve 'validar' si los numeros son validos 
} // Recorre el arreglo del DOM

// Función para verificar si una fila, columna o diagonal suma 15
function validarSuma(celdas) { // Declara una función y le pasamos el parámetro 'celdas', que contiene el arreglo del DOM
let suma = 0; // Define suma en 0 
for (let celda of celdas) { // Para celda de celdas
    suma += parseInt(celda.value); // Suma todos los elementos del arreglo
} 
return suma === 15; // Devuelve la suma y compara que sea igual a 15
}

// Función para verificar si el cuadro mágico esta completado 
function validarCuadro() { // 
  // Validar filas
for (let i = 0; i < 9; i += 3) { // Para i que vale 0, ejecutar if mientras que i que vale 0 sea menor a 9, e ir sumando 3 en cada iteración 
    if (!validarSuma([celdas[i], celdas[i+1], celdas[i+2]])) { // Si 'validarSuma' no es igual a 15 
    return false; // Devuelve un valor boolean 'false'
    }
}

  // Validar columnas
for (let i = 0; i < 3; i++) { // lo mismo pero para las columnas 
    if (!validarSuma([celdas[i], celdas[i+3], celdas[i+6]])) {
    return false;
    }
}

  // Validar diagonales // lo mismo pero para las diagonales
if (!validarSuma([celdas[0], celdas[4], celdas[8]])) {
    return false;
}
if (!validarSuma([celdas[2], celdas[4], celdas[6]])) {
    return false;
}

return true;
}

// Escuchar el click del 
button.addEventListener('click', () => { // Al darle click al botón
  // Validar datos introducidos 
if (!validarInput()) { // si no hay datos introducidos 
    alert('Por favor ingrese números del 1 al 9 en todas las casillas.');
    return; // devuelve un error
}

  // Asignar numeros a las celdas
for (let i = 0; i < celdas.length; i++) { // Si los número ingresados son validos, almacena en 'numeros',
    celdas[i].value = numeros[i]; // Para i que vale 0 mientras i sea menor que la longitud del arreglo, le corresponde un valor en la lista
}

  // Validar si el cuadro mágico esta terminado
if (validarCuadro()) { // Si validarCuadro devuelve 'true' ha terminado el cuadro mágico
    alert('¡Felicidades! ¡Has completado el cuadro mágico!');
} else { // De otro modo si devuelve 'false' ha terminado el cuadro mágico
    alert('Lo siento, no has completado el cuadro mágico.');
}
});