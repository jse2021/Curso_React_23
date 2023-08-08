/**
 * VA A SERVIR PARA MANEJAR Y HACER DISPATCH DE ACCIONES RELACIONADO AL UI STORE
 */

import { useDispatch, useSelector } from "react-redux"
import { onCloseDateModal, onOpenDateModal } from "../ui/uiSlice";

export const useUiStore = () => {

    const dispatch = useDispatch();
    const {isDateModalOpen} = useSelector(state => state.ui);
    
    const openDatemodal =()=>{
         dispatch(onOpenDateModal());
    }

    const closeDatemodal =()=>{
        dispatch(onCloseDateModal());
    }

    const toggleDateModal =()=>{
        (isDateModalOpen)
        ? openDatemodal()
        :closeDatemodal();
    }

    return{
        //*PROPIEDADES
        isDateModalOpen,

        //*METODOS
        openDatemodal,
        closeDatemodal,
        toggleDateModal,
    }
}

// vercoments