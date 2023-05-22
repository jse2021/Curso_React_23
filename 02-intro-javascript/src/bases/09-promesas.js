
import { getHeroeById } from "./08-imp-exp";


// const promesa = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         const heroe = getHeroeById(2);
//         resolve(heroe);
//     },2000)
// });
// promesa.then((heroe)=>{
//     console.log('heroe: ',heroe);
// })

const getHeroeByIdAsync = (id)=>{

    
return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const heroe = getHeroeById(id);
        if(heroe){
            resolve(heroe);
        }else{
            reject('No se encuentra el heroe');
        }
    },2000)
});
}

getHeroeByIdAsync(7).then(console.log).catch(console.warn);