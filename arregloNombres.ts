import * as rs from "readline-sync"

let nombres: string[] = [`Maria`, `Agustina`, `Matias`, `Ana`, `Martin`];

let buscarNombre: string = rs.question(`Ingrese el nombre a verificar: `);
let longitud = nombres.length; 
let resultado : string = "Nombre no encontrado";

for (let i : number = 0; i < longitud; i++) {
if (nombres[i] === buscarNombre){
    resultado = "Nombre encontrado";
} 
}
console.log(resultado);
