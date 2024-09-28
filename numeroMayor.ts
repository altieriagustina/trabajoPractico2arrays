// Estructuras de Datos
// Encontrar el elemento más grande del arreglo

// Dado el siguiente arreglo
// [4,7,9,3,1,45,67,23,29,78,11,16]
// - Crear un programa que encuentre cuál es el número
// más grande del arreglo e imprimirlo por consola
// - Almacenar el número más grande en una variable
// global y pasarlo a una función para determinar si el
// número es par o impar

let numeros: number[] = [4, 7, 9, 3, 1, 45, 67, 23, 29, 78, 11, 16]
let numeroMayor: number = 0;
let long: number = numeros.length;

for (let i = 0; i < long; i++) {

    if (numeros[i] > numeroMayor) {
        numeroMayor = numeros[i]
    }
}
console.log(`El numero mas grande del arreglo es: ${numeroMayor}`)

let esParOImpar = (mayor: number): void => {
    if (mayor % 2 === 0) {
        console.log(`El numero ${numeroMayor} es par`)
    } else {
        console.log(`El numero ${numeroMayor} es impar`)
    }
}

esParOImpar(numeroMayor);