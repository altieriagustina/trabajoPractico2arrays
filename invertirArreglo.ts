import * as rs from "readline-sync" 
import { cargarArreglo } from "./cargarArreglo";

// let dim: number = rs.questionInt(`Ingrese la dimension del arreglo: `);
// let arregloInvertido: number[] = new Array(dim);

// for (let i = 0; i < dim; i++) {
// arregloInvertido[i] = rs.questionInt(`Ingrese el numero de la posicion ${i+1}: `)
// }

// console.log(`El arreglo invertido es: ${arregloInvertido.reverse()}`);

//Invertir Arreglo con funcion

let dim: number = rs.questionInt(`Ingrese la dimension del arreglo: `);
let arregloInvertido: number[] = new Array(dim);

cargarArreglo(arregloInvertido, dim);

console.log(`El arreglo invertido es: ${arregloInvertido.reverse()}`);