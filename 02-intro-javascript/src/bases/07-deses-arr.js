//desestrucuracion de arreglos
const personajes = ['goku','vegeta','trunk']; 
const [,,p1] = personajes;
console.log(p1);


const retornaArreglo = ()=>{
    return ['AB',23];
}

const [letras,numeros] = retornaArreglo();
console.log(letras,numeros);

// tarea
// 1.primera posicion del arreglo se llamara nombre
// 2.primera posicion del arreglo se llamara setnombre
const userState = (valor)=>{
    return [valor, () =>{console.log('hola mundo')}]
}

const arr = userState('goku');
console.log(arr);

const [nombre,setNombre] = arr;
console.log(nombre);
setNombre();