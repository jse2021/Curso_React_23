import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onAddNewEvent, onDeleteEvent, onLoadEvents, onSetActiveEvent, onUpdateEvent } from '../calendar/calendarSlice';
import calendarApi from '../../api/calendarApi';
import Swal from 'sweetalert2'
import { convertEventsToDateEvents } from '../../helpers';



/**
 * DE ACA LLEGAMOS AL BACKEN Y RELIZAMOS LOS PROCESOS
 */

export const useCalendarStore = () => {

  
    const {events,activeEvent} = useSelector(state => state.calendar);
    const {user} = useSelector(state => state.auth);
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

    const startSavingEvent = async(calendarEvent) =>{
        try {
            if (calendarEvent.id) {
                // actualizando
                await calendarApi.put(`/events/${calendarEvent.id}`,calendarEvent);
                /**actualizar  evento*/
                dispatch(onUpdateEvent({...calendarEvent, user})) //eventos con usuario activo
                return;
                
            }
                /**agregar nuevo evento */
                const {data} = await calendarApi.post('/events', calendarEvent);
                dispatch(onAddNewEvent({...calendarEvent, id: data.evento.id, user}));
            
        } catch (error) {
             Swal.fire('Error al guardar',error.response.data.msg,'error');
            
        }
    }

    const startDeletingEvent = async() => {
        try {
            await calendarApi.delete((`/events/${activeEvent.id}`))
            
        } catch (error) {
            Swal.fire('Error al eliminar',error.response.data.msg,'error');
            
        }
        dispatch(onDeleteEvent())
    }

    /**
     * TRAIGO LOS EVENTOS DEL BACKEND PARA MOSTRAR EN PANTALLA
     * tiene que ser llamado en calendarPage
     */

    const startLoadingEvents = async() =>{

        try {
            const {data} = await calendarApi.get('/events'); 
            const events = convertEventsToDateEvents(data.eventos);
            dispatch(onLoadEvents(events));
            console.log(events);
            
        } catch (error) {
            console.log(error);
        }
    }




    return {
        //*PROPIEDADES
        events,
        activeEvent,
        hasEventSelected : !!activeEvent,

        //*METODOS
        setActiveEvent,
        startSavingEvent,
        startDeletingEvent,
        startLoadingEvents
        
    }
      
    
};

export default useCalendarStore;