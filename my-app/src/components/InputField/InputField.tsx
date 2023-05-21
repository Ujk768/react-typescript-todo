import React, {useRef} from 'react'
import './InputField.css'
interface PropsTodo{
  todo: string | number;
  setTodo: React.Dispatch<React.SetStateAction<string | number>>;
  addToArray: (e:React.FormEvent)=>void;
}

export default function InputField( props :PropsTodo) {
  const inputRef = useRef(null);
  console.log(props.todo);
  return (
   <form className='input' onSubmit={(e)=>props.addToArray(e)}>
    <input
     type="text"
     ref={inputRef}
     placeholder='Enter a task'
     className='input_box'
     value={props.todo}
     onChange={(e)=>props.setTodo(e.target.value)} />
    <button type='submit' className='input_submit'>Go</button>
   </form>
  )
}
