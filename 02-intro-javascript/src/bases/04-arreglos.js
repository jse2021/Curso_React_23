const arreglo = [];
arreglo.push(1);
arreglo.push(4);
console.log(arreglo);
let arreglo2 = [...arreglo,5];


// map: crea otro arreglo con la misma estructura de otro.
const arreglo3 = arreglo2.map(function(numero){
    return numero*2;
});

console.log(arreglo2);
console.log(arreglo3);


