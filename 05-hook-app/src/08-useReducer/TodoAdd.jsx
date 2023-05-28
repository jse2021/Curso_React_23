import useForm from '../hooks/useForm';

export const TodoAdd = ({onNewTodo}) => {

    const {description,  onInputChange,onResetForm} = useForm({
        description : '',
    });

    // esta funcion onFormSubmit trabaja el enter del input
    const onFormSubmit = (event) => {
        event.preventDefault();

        if(description.length <= 1) return;
        
        const newTodo = {
            id:new Date().getTime(),
            done: false,
            description: description,
        }  
        onNewTodo(newTodo);
        // para que se borre el contenido de la caja de texto
        onResetForm();
    };


    return (
        <form onSubmit={onFormSubmit}>
        <input 
            type="text" 
            placeholder='que hay que hacer?'
            className='form-control'
            name='description'
            value={description}
            onChange={onInputChange}
        /> 
        <button 
        type='submit'
        className='btn btn-outline-dark mt-2'
        >Agregar</button>
    </form>
    );
};

export default TodoAdd;