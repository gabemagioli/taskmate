import './App.css';
import Header from './components/Header/Header';
import TaskList from './components/TaskList/TaskList';
import AddTask from './components/addTask/AddTask';
import { useEffect, useState } from 'react';

function App() {

  const [task, setTask] = useState(JSON.parse(localStorage.getItem("task")) || []);

  useEffect( () => {
    localStorage.setItem("task", JSON.stringify(task));
  }, [task]);

  const [incomplete, setIncomplete] = useState(JSON.parse(localStorage.getItem("incomplete")) || 0 );

  useEffect( () => {
    localStorage.setItem("incomplete", JSON.stringify(incomplete));
  }, [incomplete]);

  const [inputVal, setInputVal] = useState("");
  const [onlyItem, setOnlyItem] = useState({});

  return (
    <div className="App">
        <Header/>
        <div className="main">
            <AddTask task={task} setTask={setTask} incomplete={incomplete} setIncomplete={setIncomplete} inputVal={inputVal} setInputVal={setInputVal}  onlyItem={onlyItem} setOnlyItem={setOnlyItem}/>
            <TaskList task={task} setTask={setTask} incomplete={incomplete} setIncomplete={setIncomplete} inputVal={inputVal} setInputVal={setInputVal} onlyItem={onlyItem} setOnlyItem={setOnlyItem}/>
        </div>
    </div>
  );
}

export default App;
