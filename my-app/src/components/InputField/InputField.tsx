import React from 'react'
import './InputField.css'

interface PropsTodo{
  todo: string | number;
  setTodo: React.Dispatch<React.SetStateAction<string | number>>;
}

export default function InputField( props :PropsTodo) {
  return (
   <form className='input'>
    <input type="text"
     placeholder='Enter a task'
     className='input_box'
     value={props.todo}
     onChange={(e)=>props.setTodo(e.target.value)} />
    <button type='submit' className='input_submit'>Go</button>
   </form>
  )
}
