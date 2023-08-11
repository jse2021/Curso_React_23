
/**
 * PROCESAMOS LA INFORMACION DE LOS EVENTOS EN ESTE CASO LAS FECHAS DE STRING A DATE
 *  PARA LUEGO MOSTRAR CORRECTAMENTE EN PANTALLA
 */
import { parseISO } from 'date-fns'
export const convertEventsToDateEvents = (events = []) =>{

    return events.map(event => {
        event.end = parseISO(event.end);
        event.start = parseISO(event.start);
        
        return event;

    })
}