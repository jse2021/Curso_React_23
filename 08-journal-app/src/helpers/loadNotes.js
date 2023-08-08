import { collection, doc, getDocs } from "firebase/firestore/lite";
import { FirebaseDB } from "../firebase/config";

/**
 * PARA CARGAR LAS NOTAS DEL USUARIO QUE INICIA SESION
 * Es asincrono
 */
export const loadNotes = async (uid='') =>{
    if(!uid) throw new Error('El UID del usuario no existe');
    /**
     * CollectionRef, identificacmos las collecciones,
     * con getDocs, traigo los documentos
     */

    const collectionRef = collection(FirebaseDB,`${uid}/journal/notes`);
    const docs = await getDocs(collectionRef);
    
    //traigo la informacion de las colecciones
    const notes = [];
    docs.forEach(doc=>{
        notes.push({id:doc.id, ...doc.data()})
    });

    console.log(notes);

    return notes;
}