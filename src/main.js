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

let arrayGatos = ['😺', '😸', '😹']
var cantidadDeGatos = Number(prompt('Ingrese la cantidad de gatos que quiera ver: ')); 
for (let i = 1; i <= cantidadDeGatos; i++) {
  let emojis = arrayGatos[(i-1) % arrayGatos.length]
  console.log(`Gato #${i}: ${emojis}`)
}
