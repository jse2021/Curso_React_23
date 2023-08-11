import { useEffect, useMemo, useState } from 'react';
import Modal from 'react-modal';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css'
import { addHours, differenceInSeconds } from 'date-fns';
import DatePicker,{registerLocale} from "react-datepicker";
import es from 'date-fns/locale/es';
import "react-datepicker/dist/react-datepicker.css";
import { useUiStore } from '../../store/hook/useUiStore';
import useCalendarStore from '../../store/hook/useCalendarStore';


registerLocale('es',es);



const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  /**
   * TOMO EL ID ROOT DEL INDEX.HTML. 
   * ES PARA QUE EL MODAL SEPA DONDE SE DEBE COLOCAR
   */
  Modal.setAppElement('#root');


const CalendarModal = () => {

    const {isDateModalOpen,closeDatemodal} = useUiStore();// para manejar el modal
    const {activeEvent,startSavingEvent} = useCalendarStore();
    const[formSubmitted,setFormSubmitted] = useState();


    /**
     * CREO FORMULARIO
     */
    const [formValues, setFormValues] = useState({
        title:'Fernando',
        notes:'Herrera',
        start: new Date(),
        end: addHours(new Date(),2),
    });

    /**
     * MANEJO DEL FORMULARIO, ERRORES
     */

    const tittleClass= useMemo(()=>{
        if (!formSubmitted) return '';

        return(formValues.title.length > 0)
            ? ''
            :'is-invalid'

    },[formValues.title, formSubmitted])


    /**
     * PARA RELLENAR  EL FORMULARIO CON NUEVOS DATOS
     * CADA VEZ QUE SE CAMBIA DE EVENTO
     */
    useEffect(()=>{
        setFormValues({...activeEvent})
    },[activeEvent])

    /**
     * PARA ACTUALIZAR EL FORMULARIO, PARA REFLEJAR EL CAMBIO
     * SOLAMENTE ACTUALIZO EL VALOR QUE VENGA COMO PARAMETRO
     */

    const onInputChanged =({target})=>{
        setFormValues({
            ...formValues,// TRAIGO LOS DATOS, PARA NO SOBRESCRIBIR
            [target.name]: target.value
        })

    }
    
/**
 * TOMA LAS NUEVAS FECHAS SELECCIONADA
 */
const ondDateChanged = (event, changing)=>{
    setFormValues({
        ...formValues,
        [changing]:event
    })

}

/**
 * TOMAR LOS DATOS DEL FORMULARIO
 */
const onSubmit = async (event) => {
    event.preventDefault();
    setFormSubmitted(true);
    //evitar que la fecha fin sea inferior a la inicial
    const difference = differenceInSeconds(formValues.end, formValues.start);
    if (isNaN(difference) || difference <= 0) {
        Swal.fire('Fechas incorrectas','Revisar las fechas ingresadas','error')

        return;
    }
    if (formValues.title.length <= 0) return;
    console.log(formValues);
    await startSavingEvent(formValues);//Mandamos toda la informacion del formulario,
    closeDatemodal();
    setFormSubmitted(false);
}

    const onCloseModal =()=>{
        console.log('cerrando modal');
        closeDatemodal();

    }

        return (
        <>
            <Modal
                isOpen = {isDateModalOpen}
                onRequestClose={onCloseModal}
                style={customStyles}
                className="modal"
                overlayClassName="modal-fondo"
                closeTimeoutMS={200}
            >


<h1> Nuevo Dato </h1>
<hr />
<form className="container" onSubmit={onSubmit}>

    <div className="form-group mb-2">
        <label>Fecha y hora inicio</label>
        <DatePicker
            selected={formValues.start}
            onChange={(event)=>ondDateChanged(event,'start')}
            className='form-control'
            dateFormat="Pp"
            showTimeSelect
            locale="es"
            timeCaption='Hora'
        />
    </div>

    <div className="form-group mb-2">
        <label>Fecha y hora fin</label>
        <DatePicker        
            minDate={formValues.start}//no puede seleccionar fecha anterior a la start
            selected={formValues.end}
            onChange={(event)=>ondDateChanged(event,'end')}
            className='form-control'
            dateFormat="Pp"
            showTimeSelect
            locale="es"
            timeCaption='Hora'
        />
    </div>

    <hr />
    <div className="form-group mb-2">
        <label>Titulo y notas</label>
        <input 
            type="text" 
            className={`form-control ${tittleClass}`}
            placeholder="Título del evento"
            name="title"
            autoComplete="off"
            value={formValues.title}
            onChange={onInputChanged}
        />
        <small id="emailHelp" className="form-text text-muted">Una descripción corta</small>
    </div>

    <div className="form-group mb-2">
        <textarea 
            type="text" 
            className="form-control"
            placeholder="Notas"
            rows="5"
            name="notes"
            value={formValues.notes}
            onChange={onInputChanged}
        ></textarea>
        <small id="emailHelp" className="form-text text-muted">Información adicional</small>
    </div>

    <button
        type="submit"
        className="btn btn-outline-primary btn-block"
    >
        <i className="far fa-save"></i>
        <span> Guardar</span>
    </button>
</form>

</Modal>


        </>
        
    );
};

export default CalendarModal;