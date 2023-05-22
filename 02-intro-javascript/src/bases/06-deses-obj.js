// desestructurante
// asignacion desestructurante: extrar lo que me interesa de un objeto

const persona = {
    nombre:'jose',
    edad:45,
    clave:'1234'
}

// const {nombre,clave} = persona;
// console.log(nombre,clave);


const userContext = ({edad,clave}) => {
    return{
        nombreClave:clave,
        anios:edad,
        latlng:{
            lat:12.2,
            lng:12.23
        }
    }
}

const {nombreClave,anios,latlng:{lat,lng}} = userContext(persona);
console.log(nombreClave,anios);
console.log(lat,lng);

