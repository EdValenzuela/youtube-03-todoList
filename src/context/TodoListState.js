import React, { useReducer } from 'react'
import { ADD_TASK, DELETE_TASK } from '../types';
import TodoListContext from './TodoListContext';
import reducer from './TodoListReducer';

const TodoListState = ({children}) => {

    const initialState = [{
        id: new Date().getTime(),
        name: "Encontrar trabajo"
    }]

    const [state, dispatch] = useReducer(reducer, initialState);

    const handleAdd = task => {
        dispatch({
            type: ADD_TASK,
            payload: task
        })
    }

    const handleDelete = idTask => {
        dispatch({
            type: DELETE_TASK,
            payload: idTask
        })
    }

    return (
        <TodoListContext.Provider value={{
            data: state,
            handleAdd,
            handleDelete
        }}>
            {children}
        </TodoListContext.Provider>
    )
}

export default TodoListState
