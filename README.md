* Nombre: Matias Gabriel Casiba
* Link repo gitHub: 

# Estructuras condicionales y repetitiva

## Punto a. 
Se pidio crear un programa donde el usuario ingresa un numero y en consola muestra 3 emojis repetidamente (dependiendo del numero que haya ingresado el usuario) y respetando el mismo orden de la lista. Para lograrlo, trabajé de la siguiente forma:
```sh
let arrayGatos = ['😺', '😸', '😹'] # la lista de emojis
var cantidadDeGatos = Number(prompt('Ingrese la cantidad de gatos que quiera ver: ')); 
for (let i = 1; i <= cantidadDeGatos; i++) { # inicio en 1, si 1 es menor o igual a 10, entonces que vaya incrementando hasta llegar al 10 ya que en 11 da un false
  let emojis = arrayGatos[(i-1) % arrayGatos.length]
  console.log(`Gato #${i}: ${emojis}`)
}
```
* Nota: lo que hice en la variable emojis fue (i-1) % arrayGatos.length, esto con la finalidad de poder alternar los 3 emojis, con el operador de modulo (%) aseguro que los i se reinicien al llegar al final de la lista del array. Explicando mas a profundidad, i-1: resto para que el indice comience en 0, el arrayGatos.length es el tamaño del array, en este caso seria 3. El modulo es para obtener el indice dentro del rango del array (osea su tamaño). Esta logica funciona así:
```sh
i=1 -> (1-1) % 3 = 0 % 3 = 0 -> arrayGatos[0] 😺
i=2 -> (2-1) % 3 = 1 % 3 = 1 -> arrayGatos[1] 😸
i=3 -> (3-1) % 3 = 2 % 3 = 2 -> arrayGatos[2] 😹
i=4 -> (4-1) % 3 = 3 % 3 = 0 -> arrayGatos[0] 😺
```
* Explicacion de la cuenta: Por que 1%3= 1 ? tengo a % b, a(1) y b(3), si a < b, el resto siempre será igual a el valor de a, porque no puede dividirse completamente por b. Si a >= b, se calcula el modulo tomando el número de sobra despues de la division.