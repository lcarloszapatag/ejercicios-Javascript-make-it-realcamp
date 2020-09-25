[![Clase 9 y ejercicios de javascript del curso gratuito maike it Real](http://img.youtube.com/vi/H9nUzDo_Now/2.jpg)](http://www.youtube.com/watch?v=H9nUzDo_Now "Introducción a JavaScript - Día 1")


# Ejercicios día 9

Recuerda que puedes hacer preguntas en el [Foro de Make It Real](https://foro.makeitreal.camp/c/curso-javascript-sept-2020/6).

## Ejercicio 46

Imprime todos los elementos del arreglo utilizando el método `forEach`:

```javascript
const arr = [45, "Hola", 82, 2, 67, true, "Juan", 12.34]

// escribe tu código acá
```

El resultado en consola debería ser el siguiente:

```shell
45
Hola
82
2
67
true
Juan
12.34
```

Comparte tu respuesta [en este enlace](https://foro.makeitreal.camp/t/respuestas-ejercicio-46/545).

## Ejercicio 47

Escribe una función llamada `pares` que reciba un arreglo de números y retorne un nuevo arreglo con los números pares que existen en el arreglo:

```javascript
// escribe la función acá

// código de prueba
console.log(pares([0, 1, 2, 3, 4])) // [0, 2, 4]
console.log(pares([120, 876, 934, 1298])) // [120, 876, 934, 1298]
console.log(pares([7, 921, 43, 9649])) // []
```

**Nota:** Intenta utilizar el método `filter` de los arreglos para solucionar este ejercicio.

Comparte tu respuesta [en este enlace](https://foro.makeitreal.camp/t/respuestas-ejercicio-47/546). No incluyas el código de prueba.

## Ejercicio 48

Escribe una función llamada `posPares` que reciba un arreglo y retorne un nuevo arreglo con los valores en las **posiciones** pares del arreglo que llega como argumento.

```javascript
// escribe tu función acá

// código de prueba
console.log(posPares(["a", "b", "c"])) // ["a", "c"]
console.log(posPares([0, 1, 2, 3, 4])) // [0, 2, 4]
console.log(posPares([])) // []
```

**Nota:** Intenta utilizar el método `filter` de los arreglos.

Comparte tu respuesta [en este enlace](https://foro.makeitreal.camp/t/respuestas-ejercicio-48/547). No incluyas el código de prueba.

## Ejercicio 49

Escribe una función llamada `multiplicar` que reciba un arreglo (de números) y un número. La función debe retornar un nuevo arreglo con cada número multiplicado por segundo número:

```javascript
// escribe tu función acá

// código de prueba
console.log(multiplicar([1, 2, 3], 2)) // [2, 4, 6]
console.log(multiplicar([7, 4], 3)) // [21, 12]
console.log(multiplicar([], 10)) // []
```

**Nota:** intenta utilizar el método `map` de los arreglos.

Comparte tu respuesta [en este enlace](https://foro.makeitreal.camp/t/respuestas-ejercicio-49/548). No incluyas el código de prueba.

## Ejercicio 50

Escribe una función llamada `productosBaratos` que reciba un arreglo de objetos (que representan productos) y retorne un nuevo arreglo con los nombres de los productos cuyo precio esté entre 5 y 10:

```javascript
// escribe tu función acá

// código de prueba
let prods = [
  { nombre: "Arroz", precio: 5 },
  { nombre: "Pan", precio: 3 },
  { nombre: "Tomate", precio: 8 },
  { nombre: "Leche", precio: 15 }
];
console.log(productosBaratos(prods)); // ["Arroz", "Tomate"]
```

Comparte tu respuesta [en este enlace](https://foro.makeitreal.camp/t/respuestas-ejercicio-50/549). No incluyas el código de prueba.
