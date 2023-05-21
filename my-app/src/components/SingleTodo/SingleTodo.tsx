import React from 'react'
import { ITodo } from '../../model/Model';
import {AiFillEdit,AiFillDelete} from 'react-icons/ai'
import {MdOutlineDoneOutline} from 'react-icons/md'
import './SingleTodo.css'
interface Props {
    value: string | number;
     key : number;
     todoArray: ITodo[];
      setTodoArray: React.Dispatch<React.SetStateAction<ITodo[]>>; 
}
export default function SingleTodo(props :Props) {
  return (
    <form className='todos_single'>
        <span className="todos_single_text">
            {props.value}  
        </span>
        <div className='icon-wrapper'>
            <div className='icon'>
                <AiFillEdit/>
            </div>
            <div className='icon'>
                <AiFillDelete/>
            </div>
            <div className='icon'>
                <MdOutlineDoneOutline/>
            </div>
        </div>
    </form>
  )
}
