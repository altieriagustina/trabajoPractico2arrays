import * as rs from "readline-sync";

let vector1: number;
let arregloA: number[] = new Array(6);
let arregloB: number[] = new Array(6);
let sumaArreglos: number[] = new Array(6);

for (let i: number = 0; i < 6; i++) {
    arregloA[i] = rs.questionInt(`Ingrese numero ${i + 1} del Arreglo A: `)
};

for (let i: number = 0; i < 6; i++) {
    arregloB[i] = rs.questionInt(`Ingrese numero ${i + 1} del Arreglo B: `)
};

for (let i: number = 0; i < 6; i++) {
    sumaArreglos[i] = arregloA[i] + arregloB[i]
    console.log(`La suma la posicion ${i + 1} del ArregloA y la posicion ${i + 1} del ArregloB es: ${sumaArreglos[i]}`)
};
