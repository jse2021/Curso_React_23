import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onAddNewEvent, onDeleteEvent, onSetActiveEvent, onUpdateEvent } from '../calendar/calendarSlice';


export const useCalendarStore = () => {

  
    const {events,activeEvent} = useSelector(state => state.calendar);
    const dispatch = useDispatch();
    /**
     * TOMO LA INFO DEL STORE, Y DISPARO PARA TOMAR DEL CALENDAR PAGE
     */

    const setActiveEvent = (calendarEvent)=>{
        dispatch(onSetActiveEvent(calendarEvent))
    }

     
    /**
     *  PROCESO DE GRABACION DEL EVENTO
     */

    const startSavingEvent =(calendarEvent) =>{
        
        if (calendarEvent._id) {
            /**actualizar  evento*/
            dispatch(onUpdateEvent({...calendarEvent}))
            
        }else {
            /**nuevo evento */
            dispatch(onAddNewEvent({...calendarEvent, _id:new Date().getTime()}));
        }

    }

    const startDeletingEvent = () => {
        dispatch(onDeleteEvent())
    }


    return {
        //*PROPIEDADES
        events,
        activeEvent,
        hasEventSelected : !!activeEvent,

        //*METODOS
        setActiveEvent,
        startSavingEvent,
        startDeletingEvent
        
    }
      
    
};

export default useCalendarStore;