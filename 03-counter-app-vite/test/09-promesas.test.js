
import { getHeroeById, getHeroesByOwner } from "../src/base-pruebas/08-imp-exp";
import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('pruebas en 09-promesas',()=>{
    test('getHeroeByIdAsync debe retornar un heroe',(done)=>{
      
      const id = 1;
      getHeroeByIdAsync(id).then(hero =>{
            expect(hero).toEqual({
                id:1,
                name:'Batman',
                owner:'DC'
            }
        );  
        done();
      })
    })

    test('getHeroeByIdAsync debe tener un error si heroe no existe',(done)=>{
      
          const id = 1;
          getHeroeByIdAsync(id).catch(error=>{
            expec(error).toBe("No se pudo encontrar el heroe con el id")
            done();
          }) 
            
          })
        })

