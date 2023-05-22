import {fireEvent, render} from '@testing-library/react';



describe('Pruebas en el CounterApp',()=>{

    test('debe de incrementar con el boton +1',()=>{

        render(<CounterApp value={100}/>)
        fireEvent.click(screen.getByText('+1'))
        expect(screen.getByText('11')).toBeTruthy();
        
    }) 

    test('debe de decrementar con el boton -1',()=>{

        render(<CounterApp value={100}/>)
        fireEvent.click(screen.getByText('-1'))
        expect(screen.getByText('9')).toBeTruthy();
        
    }) 
    test('debe de funcionar boton reset',()=>{

        render(<CounterApp value={100}/>)
        fireEvent.click(screen.getByText('Reset'))
        expect(screen.getByText(355)).toBeTruthy();
        
    }) 
})