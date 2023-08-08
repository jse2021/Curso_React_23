import React, { useState } from 'react';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Calendar } from 'react-big-calendar'


import {Navbar} from '../components/Navbar';
import { localizer,getMessageES } from '../../helpers';
import CalendarEvent from '../components/CalendarEvent';
import CalendarModal from '../components/CalendarModal';
import { useUiStore } from '../../store/hook/useUiStore';
import {useCalendarStore} from '../../store/hook/useCalendarStore';
import FabAddNew from '../components/FabAddNew';
import { FabDelete } from '../components/FabDelete';

 

export const CalendarPage = () => {

    const {openDatemodal} = useUiStore();//para abrir o cerrar el modal
    const {events,setActiveEvent} = useCalendarStore();
    // PARA ALMACENAR LA VISTA EN EL STORAGE
    const [lastView, setLastView]= useState(localStorage.getItem('lastView')||'week')

    /**
     * DISEÑO DE LOS EVENTOS, "BOTON"
     */
    const eventStyleGetter = (event, start, end,isSelected) =>{
        console.log({event, start, end,isSelected})
        const style = {
            backgroundColor: '#347cf7',
            borderRadius: '5px',
            opacity:0.8,
            color: 'white'
        }

        return {
            style
        }
    }

    const onDoubleClick = (event)=> {
        // console.log({dooubleClick:event})
        openDatemodal();
    
    }
    const onSelect = (event)=> {
        console.log({click:event})
        setActiveEvent(event);
        
    }

    /**
     * CUANDO CAMBIA LA VISTA
     */
        const onViewChanged = (event) => { 
        console.log({viewChange:event})
        localStorage.setItem('lastView',event);
    
    }

    return (
        <>
            <Navbar/> 

            <Calendar
                culture='es'
                defaultView={lastView}
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 'calc(100vh - 80px' }}
                messages={getMessageES()}
                eventPropGetter = {eventStyleGetter}
                components={{
                    event:CalendarEvent
                }}
                onDoubleClickEvent={onDoubleClick}
                onSelectEvent={onSelect}
                onView={onViewChanged}
            />
            <CalendarModal/>
            <FabAddNew />
            <FabDelete />
        </>
        
    );
};

export default CalendarPage;