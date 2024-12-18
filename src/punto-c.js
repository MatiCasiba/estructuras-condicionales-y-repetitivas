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