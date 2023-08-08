
import { collection, deleteDoc, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { addNewEmptyNote, deleteNoteById, savingNewNote, setActiveNote, setNotes, setPhotosToActiveNote, setSaving, updateNote } from "./journalSlice";
import { loadNotes } from "../../helpers/loadNotes";
import { fileUpload } from "../../helpers/fileUpload";



// quiere decir que es el inicio del proceso
export const startNewNote =()=>{
// para grabar en firebase usamos el uid del usuario
    return async (dispatch,getState ) =>{
        
        dispatch(savingNewNote());

        // busco el uid del usuario
        const {uid} = getState().auth;

        const newNote ={
            title:'',
            body:'',
            date: new Date().getTime(),
        }

  /**
   * INSERTAR NOTAS
   */
        const newDoc = doc(collection(FirebaseDB, `${uid}/journal/notes`))

        // newDoc es el que va a tener el id
        await setDoc(newDoc,newNote)
        newNote.id = newDoc.id;
        dispatch(addNewEmptyNote(newNote));
        dispatch(setActiveNote(newNote))
        
    }
}

/**
 * PROCESO DE CARGA DE NOTAS, SEGUN USUARIO LOGUEADO
 * ESTA FUNCION ES LLAMADA EN USECHEKAUTH
 */
export const startLoadingNotes =  () =>{
    return async (dispatch, getState)=> {
        const {uid} = getState().auth;
        if(!uid) throw new Error('El UID del usuario no existe');
        
        //disparo para insertar las notas asociadas a un usuario
        const notes =  await loadNotes(uid);
        dispatch(setNotes(notes));
    }
}
 
export const starSaveNote = () => {
   
    return async(dispatch, getState)=>{
        dispatch(setSaving());
        const {uid} = getState().auth;
        // obtenemos la nota activa, la cual viene el ID
        const {active:note} = getState().journal;
        
        // para que no modifique el id de la nota
        const noteToFireStore = {...note};
        delete noteToFireStore.id;

        // hago referencia al documento
        const docRef = doc(FirebaseDB, `${uid}/journal/notes/${note.id}`)

        //impactar los datos en firebase
        await setDoc(docRef, noteToFireStore,{ merge:true})
        // actualiza nota en sidebar, NOTE: nota actualizada con el id
        dispatch(updateNote(note));
     }
}

/**
 * PARA REALIZAR LA CARGA DE IMAGENES
 */

export const startUploadingFiles = (files = []) =>{
    return async(dispatch)=>{
        dispatch(setSaving());
        const fileUploadPromises = [];
        /**
         * NO DISPARO LA ACCION, SOLO CREO EL ARREGLO DE PROMESAS
         */
        for(const file of files){
            fileUploadPromises.push(fileUpload(file));
        }
        /**
         * CON ESTA ACCION DISPARO LA ACCION
         */       
        const photoUrls = await Promise.all(fileUploadPromises);
        dispatch(setPhotosToActiveNote(photoUrls));
    }

}

/**
 * 
 * ELIMINAR NOTAS
 */

export const startDeletingNote = () =>{
    
     //getState porque ocupamos la informacion de la nota activa y usuario activo
    
    return async(dispatch,getState) => {

        const {uid} = getState().auth;
        const {active:note} = getState().journal;

        const docRef = doc(FirebaseDB, `${uid}/journal/notes/${note.id}`)
        const resp = await deleteDoc(docRef);

        //eliminar tambien del store
        dispatch(deleteNoteById(note.id));


    }
}

 