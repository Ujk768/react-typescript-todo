import React ,{useState} from 'react';
import './App.css';
import { ITodo } from './model/Model';
import InputField from './components/InputField/InputField';
import TodoList from './components/TodoList/TodoList';
const App : React.FC=  ()=> {

  const [todo,setTodo] = useState<string | number >('');
  const [todoArray,setTodoArray]= useState<ITodo[]>([]);

  const addToArray = (e : React.FormEvent)=>{
    e.preventDefault();
    if(todo){
      setTodoArray([...todoArray,{id: Date.now(),todo: todo,isDone: false}]);
      setTodo("");
    } 
  }
  return (
    <div className="App">
      <div className="heading-wrapper">
        <div className="title">UJK Task App</div>
      </div>
      <InputField todo={todo} setTodo={setTodo} addToArray={addToArray}/>
      <TodoList todoArray={todoArray} setTodoArray={setTodoArray}/>
    </div>
  );
}

export default App;
