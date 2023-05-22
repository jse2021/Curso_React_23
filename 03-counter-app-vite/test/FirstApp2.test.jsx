// import {render} from '@testing-library/react';
// import { FirstApp } from "../src/FirstApp";
import { render,screen } from '@testing-library/react'; 
import { FirstApp } from '../src/FirstApp';

describe('Pruebas en FirstApp.test',()=>{
    const title = 'hola soy jose'
    const subtitle = 'soy un subtitulo';
     test('debe hacer match con el snapshot',()=>{
        const {container} = render(<FirstApp tittle={title}/>)
        expect(container).toMatchSnapshot();
     })

     test('debe mostrar el msj ""hola soy jose',()=>{
        render(<FirstApp tittle={title}/>)
        expect(screen.getByText(title)).toBeTruthy();
     })
     test('debe de mostrar el titulo en h1',()=>{
        const {container} = render(<FirstApp tittle={title}/>)
        expect(screen.getByRole('heading',{level:1}).innerHTML).toContain(title);
     })

     test('debe de mostrar el subt enviado por props',()=>{
        render(<FirstApp 
                tittle={title}
                subtitle={subtitle}
            />)
            expect(screen.getAllByAltText(subtitle).length).toBe(2);
     });
    
})