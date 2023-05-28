import {renderHook} from "@testing-library/react";
import useCounter from "../../src/hooks/useCounter";



describe('Pruebas  en el useCounter',() => {
    test('debe retornar un valor por defecto',() => {
        
        const {result} = renderHook( () => useCounter());
        const {counter, decrement, increment, reset} = result.current;

        expect(counter).toBe(10);
    });
});