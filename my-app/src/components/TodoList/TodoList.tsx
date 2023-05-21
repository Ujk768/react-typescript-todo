import React from 'react'
import { ITodo } from '../../model/Model'
import SingleTodo from '../SingleTodo/SingleTodo'
import './TodoList.css'
type Props={
    todoArray:ITodo[];
    setTodoArray :  React.Dispatch<React.SetStateAction<ITodo[]>>; 
}

export default function TodoList({todoArray, setTodoArray}: Props) {
    return (
    <div className='todos'>
        
       {
       todoArray.map(item => ( <SingleTodo value={item.todo} key={item.id} todoArray={todoArray} setTodoArray={setTodoArray } />))
       
       }
    </div>
  )
}
