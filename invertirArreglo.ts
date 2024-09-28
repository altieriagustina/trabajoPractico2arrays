import * as rs from "readline-sync"

let dim: number = rs.questionInt(`Ingrese la dimension del arreglo: `);
let arregloInvertido: number[] = new Array(dim);

for (let i = 0; i < dim; i++) {
arregloInvertido[i] = rs.questionInt(`Ingrese el numero de la posicion ${i+1}: `)
}

console.log(arregloInvertido);