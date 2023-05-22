

// estado incial de la app
const initialState = [{
    id:1,
    todo:'recolectar',
    done:false
}]

// funcion reducer que recibe el estado y una accion a realizar
const todoReducer =(state = initialState,action ={}) => {
    if(action.type ==='[todo] add todo'){
        return [...state,action.payload]
    }

    return state;
}


let todos = todoReducer();

const newTodo = {
    id:2,
    todo:'Recolectar la piedra del poder',
    donde:false
}

const addTodoAction = {
    type: '[todo] add todo',
    payload:newTodo
}

todos = todoReducer(todos,addTodoAction)

console.log({state:todos}) 