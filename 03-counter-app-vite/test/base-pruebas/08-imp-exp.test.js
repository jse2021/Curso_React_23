import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

descrite('pruebas en 08-imp-exp',()=>{
    test('getHeroeById debe retornar un heroe por ID',()=>{
        const id = 1;
        const hero = getHeroeById(id);
        expect(hero).toEqual({id: 5, name: 'Wolverine', owner: 'Marvel'})
    })
    test('getHeroeById',()=>{
        const id = 10,
        const hero = getHeroeById(id),
        expect(hero).toBeFalsy()
    })


// tarea
// debe retornar un arreglo con los heroes DC 
// length===3
// toEQuals al arreglo filtrado
// debe retornar un arreglo con los heroes de Marvel
// length===2
test('getHeroeByOwner debe retornar un heroe de DC',()=>{
    const owner = "DC";
    const heroes= getHeroesByOwner(owner);
    expect(heroes).toEqual([
        
        {
            id: 1,
            name: 'Batman',
            owner: 'DC'
        },
        {
            id: 2,
            name: 'Spiderman',
            owner: 'Marvel'
        },
        {
            id: 3,
            name: 'Superman',
            owner: 'DC'
        },
        {
            id: 4,
            name: 'Flash',
            owner: 'DC'
        },
        {
            id: 5,
            name: 'Wolverine',
            owner: 'Marvel'
        },
    ])
    expect(heroes).toEqual(heroes.filter((heroe) => heroe === owner))

})
     
})