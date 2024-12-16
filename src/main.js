import './style.css'

/* 
a) Crear una variable con un valor numérico libre:
 var cantidadDeGatos = 10;
 Esto debe generar en la consola lo siguiente:
 Gato #1: 😺
 Gato #2: 😸
 Gato #3: 😹
 Gato #4: 😺
 Gato #5: 😸
 Gato #6: 😹
 Gato #7: 😺
 Gato #8: 😸
 Gato #9: 😹
 Gato #10: 😺
 Noten que son 3 emojis distintos que se se van intercalando.
 La consola reflejará los cambios según el contenido de la variable.
 var cantidadDeGatos = 1;
 Gato #1: 😺
 var cantidadDeGatos = 4;
 Gato #1: 😺
 Gato #2: 😸
 Gato #3: 😹
 Gato #4: �
*/
console.warn('Ejercicio 9) a.')

let arrayGatos = ['😺', '😸', '😹']
var cantidadDeGatos = Number(prompt('Ingrese la cantidad de gatos que quiera ver: ')); 
for (let i = 1; i <= cantidadDeGatos; i++) {
  let emojis = arrayGatos[(i-1) % arrayGatos.length]
  console.log(`Gato #${i}: ${emojis}`)
}

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

/* 
 Adaptar el ejercicio anterior para que se muestren 2 gatos alternadamente:
 var cantidadDeGatos = 10;
 var cantidadDePasos = 4;
 Gato #1: 🐈 🐾🐾🐾🐾
 Gato #2: 🐈‍⬛ 🐾🐾🐾🐾
 Gato #3: 🐈 🐾🐾🐾🐾
 Gato #4: 🐈‍⬛ 🐾🐾🐾🐾
 Gato #5: 🐈 🐾🐾🐾🐾
 Gato #6: 🐈‍⬛ 🐾🐾🐾🐾
 Gato #7: 🐈 🐾🐾🐾🐾
 Gato #8: 🐈‍⬛ 🐾🐾🐾🐾
 Gato #9: 🐈 🐾🐾🐾🐾
 Gato #10: 🐈‍⬛ 🐾🐾🐾�
*/
console.warn('Ejercicio 9) c.')

var cantidadDeGatos = Number(prompt('Ingrese la cantidad de gatos: '))
var cantidadDePasos = Number(prompt('Ingrese la cantidad de pasos: '))
let gatos = ['🐈', '🐈‍⬛']
let paso = '🐾'
for (let i=1; i <= cantidadDeGatos; i++){
  let cantPasitos = paso.repeat(cantidadDePasos)
  let gatoAlternado = gatos[(i-1) % gatos.length]
  console.log(`Gato #${i}: ${gatoAlternado} ${cantPasitos}`)
}

