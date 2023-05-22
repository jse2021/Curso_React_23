import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe('pruebas en 05-funciones',()=>{
    test('getUSer debe retornar un objeto',()=>{
        const testUser = {
            uid:'212',
            username:'capo'
        };
        const user = getUser();
        console.log(user);
        expect(testUser).toEqual(user);
    });

    test('getUsuarioActivo debe retornar un onjeto',()=>{

        const name = 'Fernando';
        const user = getUsuarioActivo(name);
        expect(user).toStrictEqual({
            uid:'ABC567',
            username:name
        })
    });
}); 