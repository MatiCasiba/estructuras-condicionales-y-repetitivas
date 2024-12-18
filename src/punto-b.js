/* 
b) Crear 2 variables con valores numéricos libres:
 var cantidadDeGatos = 5;
 var cantidadDePasos = 3;
 A partir de esas 2 variables, la consola debe mostrar lo siguiente:
 Gato #1:  🐈🐾🐾🐾
 Gato #2:  🐈🐾🐾🐾
 Gato #3:  🐈🐾🐾🐾
 Gato #4:  🐈🐾🐾🐾
 Gato #5:  🐈🐾🐾🐾
 Si se utilizan otros valores, el resultado en la consola debe adaptarse.
 var cantidadDeGatos = 2;
 var cantidadDePasos = 8;
 Gato #1:  🐈🐾🐾🐾🐾🐾🐾🐾🐾
 Gato #2:  🐈🐾🐾🐾🐾🐾🐾🐾🐾
 var cantidadDeGatos = 10;
 var cantidadDePasos = 4;
 Gato #1:  🐈🐾🐾🐾🐾
 Gato #2:  🐈🐾🐾🐾🐾
 Gato #3:  🐈🐾🐾🐾🐾
 Gato #4:  🐈🐾🐾🐾🐾
 Gato #5:  🐈🐾🐾🐾🐾
 Gato #6:  🐈🐾🐾🐾🐾
 Gato #7:  🐈🐾🐾🐾🐾
 Gato #8:  🐈🐾🐾🐾🐾
 Gato #9:  🐈🐾🐾🐾🐾
 Gato #10:  🐈 🐾🐾🐾�

*/
console.warn('Ejercicio 9) b.')

var cantidadDeGatos = Number(prompt('Ingrese la cantidad de gatos: '))
var cantidadDePasos = Number(prompt('Ingrese la cantidad de pasos: '))
let gato = '🐈'
let pasos = '🐾'
for (let i = 1; i <= cantidadDeGatos; i++ ){
  let cantiPasitos = pasos.repeat(cantidadDePasos)
  console.log(`Gatos # ${i}: ${gato} ${cantiPasitos}`)
}