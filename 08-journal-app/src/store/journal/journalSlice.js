import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
    name: 'journal',
    
    initialState:{
      isSaving: false,
      messageSaved:'',
      notes:[],
      active:null,
    },

    reducers: {

      savingNewNote: (state) => {
        state.isSaving = true;

      },
      
      // agregar notas, action.payload es la nota que quiero insertar
      addNewEmptyNote: (state,action)=>{
        state.notes.push(action.payload);
        state.isSaving = false;
      },

    //   para saber sobre que nota estoy activo
      setActiveNote: (state, action)=>{
        state.active = action.payload;
        state.messageSaved ='';
      },
    //   cargar las notas, cuando las tenemos leidas en algun lugar
    setNotes: (state,action)=>{
      state.notes = action.payload;

    },

    // hacer algo cuando estoy grabando las notas
    setSaving: (state)=>{
      state.isSaving = true;
      state.messageSaved ='';
    },

    updateNote: (state, action)=>{ 
      state.isSaving = false;
      state.notes = state.notes.map(note=>{

        // regresa una nota diferente si.., action trae la nota actualizada
        if (note.id === action.payload.id) {
          return action.payload;
        }
 
        return note;
      });
      state.messageSaved = `${action.payload.title}, actualizada correctamente`;
    },
    /**
     * DE ESTA MANERA PRESERVAMOS LAS ANTERIORES Y AGREGAMOS LAS NUEVAS
     */

    setPhotosToActiveNote: (state,action) => {
      state.active.imageUrls = [...state.active.imageUrls, ...action.payload];
      state.isSaving = false;
    },

    /**
     * PARA LIMPIAR LAS NOTAS
     */
    clearNotesLogout: (state)=>{
      state.isSaving = false;
      state.messageSaved='';
      state.notes = [];
      state.active = null;
    }, 

    /**
     * ELIMINAR NOTAS
     */
    
    deleteNoteById: (state,action)=>{
      state.active = null;
      state.notes = state.notes.filter(note => note.id !== action.payload);
    },
  }
});

// para llegar a estos reducers, hay que exportarlos
export const {
    addNewEmptyNote,
    setActiveNote,
    setNotes,
    setSaving,
    updateNote,
    deleteNoteById,
    savingNewNote,
    setPhotosToActiveNote,
    clearNotesLogout
    } = journalSlice.actions;
  