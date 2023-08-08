import React, { useState } from 'react';
import { useGetTodosQuery,useGetTodoQuery } from './store/apis/todosApi';

export const TodoApp = (props) => {
    // const {data: todos = [],isLoading} = useGetTodosQuery();
    const [todoId, setTodoid] = useState(1);
    const {data: todo,isLoading} = useGetTodoQuery(todoId);
    const nextTodo = () => {
        setTodoid(todoId + 1);
    }
    const prevTodo = () => {
        if (todoId === 1 ) return;
        setTodoid(todoId - 1);
    }
    return (
        
        <>
            <h1> Todos - RTK Query</h1>
            <hr/>
            <h4>isLoading: {isLoading ? 'True':'False'}</h4>
            <pre>{JSON.stringify(todo)}</pre>
       
            <button onClick={prevTodo}>Previus Todo</button>
            <button onClick={nextTodo}>Next Todo</button>
            

       

        </>
    );
};

