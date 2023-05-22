import {render} from '@testing-library/react';
import { FirstApp } from "../src/FirstApp";


describe('Pruebas en FirstApp.test',()=>{
    // test('debe hacer match con el snapshot',()=>{
    //     const title = "hola soy jose";
    //     const {container} = render(<FirstApp title={title}/>)
    //     expect(container).toMatchSnapshot();
        
    // });
    test('Debe mostrar el titulo en h1',()=>{
        const title = 'hol sou jose';
        const {container,getByText,getByTestId} = render(<FirstApp title={title}/>)
        expect(getByTestId('test-title').innerText).toContain(title);
        // const h1 = container.querySelector("h1");
        // que contenga el titulo
        // console.log(h1.innerHTML).toContain(title);
    })

    test('debe mostrar el subtitulo enviado por props',()=>{
        const title = 'hola soy jse';
        const subTItle = 'soy subtitulo';
        const {getAllByText} = render(
        <FirstApp 
            title = {title}
            subTItle = {subTItle}

         />);

        expect(getAllByText(subTItle).length).toBe(3);

    })

    // test('Debe mostrar el subtitulo enviado por props',()=>{
    //     const title = 'hol sou jose';
    //     const subTitle = 'soy subitutlo'
    //     const {getByText} = render (<FirstApp title={title}
    //     subtitle={subTitle}/>)
    //     expect(getByText(subTitle)).toBeTruthy();


    // })
})