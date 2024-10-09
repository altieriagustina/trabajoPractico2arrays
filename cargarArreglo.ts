import * as rs from "readline-sync"

export const cargarArreglo = (nombreArray: number[], long : number) => {
    for (let i: number = 0; i < long; i++) {
        nombreArray[i] = rs.questionInt(`Ingrese numero ${i + 1}: `)
        }
    }

