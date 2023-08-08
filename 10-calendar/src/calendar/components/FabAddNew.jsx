import React from 'react';
import { useUiStore } from '../../store/hook/useUiStore';
import useCalendarStore from '../../store/hook/useCalendarStore';
import { addHours } from 'date-fns';

const FabAddNew = () => {

    /**
     * REALIZAOMOS DISPATCH DE CIERTAS ACCIONES,
     * 1- LLAMAMOS EL HOOK USEUISTORE()
     * 2- CREAMOS METODO PARA ABRIR EL MODAL VACIO
     */
    const {openDatemodal} = useUiStore();
    const {setActiveEvent} = useCalendarStore();

    const handleClickNew = () =>{
        
        setActiveEvent({
            
            title: '',
            notes: '',
            start: new Date(),
            end: addHours( new Date(),2),
            bgColor: '#fafafa',
            user: {
                _id:'123',
                name:'Ariel'
            }

        })
        
        openDatemodal();
    }

    


    return (
      <>
        <button
        className='btn btn-primary fab'
        onClick={handleClickNew}
        >
        <i className='fas fa-plus'></i>
        </button>
      </>
    );
};

export default FabAddNew;