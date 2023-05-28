import React, { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';
import TodoList from './TodoList';
import TodoAdd from './TodoAdd';
import useTodos from '../hooks/useTodos';

export const TodoApp = () => {

const {todos,todosCount,pendingTodosCount,handleNewTodo,handleDeletedTodo,handleToggleTodo} = useTodos();
    return (
            <>
                <h1>TodoAPP: {todosCount}, <small>Pendientes: {pendingTodosCount}</small></h1>
                <hr />
                <div className='row'>
                    <div className='col-7'>
                        <TodoList todos = {todos} 
                            onDeleteTodo = {handleDeletedTodo}
                            onToggleTodo={handleToggleTodo}/>                                
                    </div>   
                    <div className='col-5'>
                        <h4>Agregar TODO</h4>
                        <hr />
                        <TodoAdd
                             onNewTodo={handleNewTodo}/>
                    </div>

                </div>

            </>
    );
}

export default TodoApp;