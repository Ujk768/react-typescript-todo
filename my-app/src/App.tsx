import React ,{useState} from 'react';
import './App.css';
import { ITodo } from './model/Model';
import InputField from './components/InputField/InputField';
const App : React.FC=  ()=> {

  const [todo,setTodo] = useState<string | number >('');
  const [todoArray,setTodoArray]= useState<ITodo[]>([]);

  const addToArray = ()=>{
    
  }
  return (
    <div className="App">
      <div className="heading-wrapper">
        <div className="title">UJK Task App</div>
      </div>
      <InputField todo={todo} setTodo={setTodo}/>
    </div>
  );
}

export default App;
