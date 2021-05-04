//   Fundamentos Basicos l (Los 13 Algoritmos Basicos)   //



//  1.-Obtén del 1 al 255: Escribe una función que devuelve un array con todos los números del 1 al 255.
/*

function numeros() {
    var array = [];
    for (var i = 1; i <= 255; i++) {
        array.push(i);
    }
    return array;
}
console.log(numeros());

*/
//  2.-Consigue pares hasta 1000: Escribe una función que entregue la suma de todos los números pares del 1 al 1000 - Puedes usar un operador de módulo para este ejercicio.
/*

function sumarPares() {
    var suma = 0;
    for (var i = 0; i <= 1000; i += 2) {
        suma = suma + i;
    }
    return suma;
}
console.log(sumarPares());

*/
//  3.-Suma impares hasta 5000: Escribe una función que devuelva la suma de todos los números impares entre 1 y 5000 (ej: 1+3+5+...+4997+4999).
/*

function sumarImpares() {
    var suma = 0;
    for (var i = 1; i <= 5000; i += 2) {
        suma = suma + i;
    }
    return suma;
}
console.log(sumarImpares());

*/
//  4.-Itera un array: Escribe una función que devuelva la suma de todos los valores dentro de un array (ej:  [1,2,5] retorna 8. [-5,2,5,12] retorna 14).
/*

function sumaArray() {
    var r = [1, 2, 5, 3, 2];
    var suma = 0;
    for (var s = 0; s < r.length; s++) {
        suma = r[s] + suma;
    }
    return (suma);
}
console.log(sumaArray());

*/
//  5.-Encuentra el mayor (max): Dado un array con múltiples valores, escribe una función que devuelva el número mayor (ej: para [-3,3,5,7] el número mayor (max) es 7).
/*

function encontrarMax() {
    var r = [10, 2, 35, 34, 2];
    var buscar = 0;
    for (var i = 0; i < r.length; i++) {
        if (r[i] > buscar) {
            buscar = r[i];
        }
    }
    return (buscar);
}
console.log(encontrarMax());

*/
//  6.-Encuentra el promedio (avg): Dado un array con múltiples valores, escribe una función que devuelva el promedio de los valores (ej: para [1,3,5,7,20] el promedio es 7.2).
/*

function promedioAvg() {
    var r = [7, 2, 5, 8, 10];
    var suma = 0;
    for (var i = 0; i < r.length; i++) {
        suma = r[i] + suma;
    }
    x = (suma / r.length);
    return (x);
}
console.log(promedioAvg());

*/
//  7.-Array de impares: Escribe una función que devuelva un array de todos los números impares entre 1 y 50 (ej: [1,3,5, …, 47,49]). Pista: Usa el método ‘push’.
/*

function ArregloImpares() {
    var arreglo = [];
    for (var i = 1; i <= 50; i += 2) {
        arreglo.push(i)
    }
    return arreglo;
}
console.log(ArregloImpares());

*/
//  8.-Mayor que Y: Dado un valor Y, escribe una función que toma un array y devuelve los valores mayores que Y. Por ejemplo, si arr = [1,3,5,7] y Y = 3, tu función devolverá 2 (hay 2 números en el array mayores que 3, esto son 5 y 7).
/*

function MayoresQueY() {
    var r = [40, 2, 36, 34, 42];
    var y = 35;
    var buscar = 0;
    for (var i = 0; i < r.length; i++) {
        if (r[i] > y) {
            buscar = 1 + buscar;
        }
    }
    return (buscar);
}
console.log(MayoresQueY());

*/
//  9.-Cuadrados: Dado un array con múltiples valores, escribe una función que reemplace cada valor por el cuadrado del mismo valor (ej: [1,5,10,-2] será [1,25,100,4]).
/*

function cuadrados() {
    var arreglo = [1, 2, 3, 6, 5, 10];
    var resultado = 0;
    for (var i = 0; i < arreglo.length; i++) {
        resultado = arreglo[i] * arreglo[i];
        arreglo[i] = resultado
    }
    return (arreglo);
}
console.log(cuadrados());

*/
//  10.-Negativos: Dado un array con múltiples valores, escribe una función que reemplace cualquier número negativo dentro del array por 0. Cuando el programa esté listo, el array no debiera contener números negativos (ej: [1,5,10,-2] se convertirá en [1,5,10,0]).
/*

function Negativos() {
    var m = [2, 4, -3, -6, 8];
    for (var n = 0; n < m.length; n++) {
        if (m[n] < 0) {
            m[n] = 0;
        }
    }
    return m;
}
console.log(Negativos());

*/
//  11.-Max/Min/Avg: Dado un array con múltiples valores, escribe una función que devuelva un nuevo array que solo contenga el valor mayor (max), menor (min) y promedio (avg) del array original (ej: [1,5,10,-2] devolverá [10,-2,3.5]).
/*

function maxMinAvg(arr) {
    let max = arr[0]
    let min = arr[0]
    let suma = 0
    for (var x = 0; x < arr.length; x++) {
        if (min > arr[x]) { //Comparando para obtener el minimo
            min = arr[x]
        }
        if (max < arr[x]) { //Comparando para obtener el maximo
            max = arr[x]
        }
        suma += arr[x] //Sumando para luego sacar el promedio
    }
    let promedio = suma / arr.length
    return [max, min, promedio]
}
console.log(maxMinAvg([1, 5, 10, -2]))

*/
//  12.-Intercambia Valores: Escribe una función que intercambie el primer y el último valor de cualquier array. La extensión mínima predeterminada del array es 2 (ej: [1,5,10,-2] será [-2,5,10,1]).
/*

function intercambiar(arr) {
    if (arr.length < 2) {
        return 'El array es muy corto';
    }
    var primero = arr[0];
    var ultimo = arr[arr.length - 1];
    arr[0] = ultimo;
    arr[arr.length - 1] = primero;
    return arr;
}
console.log(intercambiar([1, 5, 10, -2]));

*/
//  13.-De Número a String: Escribe una función que tome un array de números y reemplace cualquier valor negativo por el string ‘Dojo’. Por ejemplo, dado el array = [-1,-3,2], tu función devolverá [‘Dojo’,‘Dojo’,2].


function cambiarNombre(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 'Dojo';
        }
    }
    return arr;
}
console.log(cambiarNombre([-1, -3, 2]));