/**
 * VA A SERVIR PARA MANTENER LA INFORMACION DEL UI, PARA SABER SI EL MODAL ESTA ABIERTO, CERRADO,ETC
 */
import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
    name: 'ui',
    initialState:{
        isDateModalOpen: false
    },
    
    reducers: {
        //SE LLAMA CUANDO LA PERSONA QUIERE ABRIR EL MODAL
        onOpenDateModal:(state) => {
            state.isDateModalOpen = true;   
        },

        //SE LLAMA CUANDO LA PERSONA QUEIRE CERRAR EL MODAL
        onCloseDateModal: (state) => {
            state.isDateModalOpen = false;
        }
},
});
//action creators are generate for each case dreducer function
export const {onOpenDateModal,onCloseDateModal} = uiSlice.actions;