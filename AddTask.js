import './addTask.css';

const AddTask = function({task, setTask, incomplete, setIncomplete, inputVal, setInputVal, onlyItem, setOnlyItem}){

    const createTask = (e) =>{
        e.preventDefault();
        const newTask = {
            id: Math.trunc(Math.random() * 10000),
            task: inputVal
        };

        console.log(newTask);
        setTask([...task, newTask]);
        setIncomplete((prevIncomplete) => prevIncomplete + 1);
        setInputVal("");
    }

    return(
        <form className="add">    
                <label htmlFor="in" className="label">Add a task</label>
                <input onChange={(e)=> setInputVal(e.target.value)} type="text" placeholder="task here" id="in" className="input" value={inputVal}/>
                <button onClick={createTask} type="submit" className="but">Add</button>
 
        </form>
    );
}

export default AddTask;