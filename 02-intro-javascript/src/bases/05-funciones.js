// vemos funcion flecha

const saludar = function(nombre){
    return `hola, ${nombre}`;
}

console.log(saludar("jose forma 1"));

const saludar2 = (nombre)=>{
    return `hola, ${nombre}`;
}

console.log(saludar2("jose forma 2"));

const saludar3 = (nombre)=> `hola, ${nombre}`;

console.log(saludar3("jose forma 3"));

const getUser = () => {
    return{
        uid:'BCE22',
        username:'jose forma 4',
    }
}
console.log(getUser());

const getUser2 = () => ({
        uid:'BCE22',
        username:'jose forma 5',
    }
)
console.log(getUser2());

// tarea
// 1. transformar la funcion a flecha
// 2. tiene que retorar un objeto implicito
// 3.pruebas

function getUsuarioActivo(nombre){
    return{
        uid:'ABC23',
        username:nombre
    }
}

const usuarioActivo = getUsuarioActivo('Fernando');
console.log(usuarioActivo);


const usuarioAct = ( nombre) => 
     ({
        uid:'ABc24',
        username:nombre
    })

console.log(usuarioAct('jose forma 6'));





