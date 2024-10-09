import * as rs from "readline-sync";
// let longitud : number = 6;
// let arregloA: number[] = new Array(6);
// let arregloB: number[] = new Array(6);
// let sumaArreglos: number[] = new Array(6);

// for (let i: number = 0; i < longitud; i++) {
//     arregloA[i] = rs.questionInt(`Ingrese numero ${i + 1} del Arreglo A: `)
// };

// for (let i: number = 0; i < longitud; i++) {
//     arregloB[i] = rs.questionInt(`Ingrese numero ${i + 1} del Arreglo B: `)
// };

// for (let i: number = 0; i < longitud; i++) {
//     sumaArreglos[i] = arregloA[i] + arregloB[i]
//     console.log(`La suma la posicion ${i + 1} del ArregloA y la posicion ${i + 1} del ArregloB es: ${sumaArreglos[i]}`)
// };


//Mismo ejercicio pero modularizando

let longitud : number = 6;
let arregloA: number[] = new Array(longitud);
let arregloB: number[] = new Array(longitud);
let sumaArreglos: number[] = new Array(longitud);

const cargarArreglo = (nombreArray: number[], long : number) => {
    for (let i: number = 0; i < long; i++) {
        nombreArray[i] = rs.questionInt(`Ingrese numero ${i + 1}: `)
        };
}

cargarArreglo(arregloA, longitud)
cargarArreglo(arregloB, longitud)

const sumarArray = (arr1: number[], arr2: number[]) => {
    for (let i: number = 0; i < longitud; i++) {
            sumaArreglos[i] = arregloA[i] + arregloB[i]
            console.log(`La suma la posicion ${i + 1} del ArregloA y la posicion ${i + 1} del ArregloB es: ${sumaArreglos[i]}`)
        };
}

sumarArray(arregloA, arregloB)