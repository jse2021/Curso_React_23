import { createSlice } from '@reduxjs/toolkit';
import { addHours } from 'date-fns';


const tempEvent = {
    _id:new Date().getTime(),
    title: 'Cancha Grande',
    notes: 'Reservada',
    start: new Date(),
    end: addHours( new Date(),2),
    bgColor: '#fafafa',
    user: {
        _id:'123',
        name:'Ariel'
    }
}



export const calendarSlice = createSlice({
    name: 'calendar',
    initialState:{
    events: [tempEvent],
    activeEvent:null
    },
    reducers: {
        //**ACTIVAR NOTA PARA MOSTRAR EN EL MODAL */
        onSetActiveEvent:(state,{payload})=>{
            state.activeEvent  = payload;
        },
        onAddNewEvent:(state,{payload})=>{
            state.events.push(payload);
            /**LIMPIO EL EVENTO ACTIVO */
            state.activeEvent = null;
        },
        onUpdateEvent:(state,{payload})=>{
            state.events = state.events.map(event=>{
                if (event._id === payload._id) {
                    return payload;                    
                }
                return event;
            })
        },
        onDeleteEvent: (state)=>{
            if (state.activeEvent) {
                state.events = state.events.filter(event => event._id !== state.activeEvent._id);
                state.activeEvent = null;    
            }
        }
}});


//action creators are generate for each case dreducer function
export const {onSetActiveEvent, onAddNewEvent,onUpdateEvent,onDeleteEvent} = calendarSlice.actions;