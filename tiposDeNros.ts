import * as rs from "readline-sync"

let dim: number = rs.questionInt(`Ingrese la dimension del arreglo: `);
let arregloInvertido: number[] = new Array(dim);
let positivos: number = 0;
let negativos: number = 0;
let cero: number = 0;

for (let i = 0; i < dim; i++) {
    arregloInvertido[i] = rs.questionInt(`Ingrese el numero de la posicion ${i + 1}: `)
    if (arregloInvertido[i] > 0) {
        positivos++;
    } else if (arregloInvertido[i] < 0) {
        negativos++
    } else {
        cero++
    }
}

console.log(`Cantidad de numeros positivos: ${positivos}`)
console.log(`Cantidad de numeros negativos: ${negativos}`)
console.log(`Cantidad de ceros: ${cero}`)