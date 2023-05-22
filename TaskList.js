import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './taskList.css';

const TaskList = ({task, setTask, incomplete, setIncomplete, onlyItem, setOnlyItem}) => {


    const clearAll = () => {
        setIncomplete(0);
        setTask([]);
    }

    const trash = (id) => {
        setTask(task.filter(task => id !== task.id));
        setIncomplete(prevIncomplete => prevIncomplete -1);
    }
  
    const date = new Date();
    
    return(
        <div className="div-tsk">
            <div className="divCount">
                <h3 className="counter">incomplete tasks: <p className="num-task">{incomplete}</p></h3>
                <span className="clear" onClick={clearAll}>Clear All</span>
            </div>
            <div className="itens">
                <ul className="ul-tsk">
                    {task.map(task => 
                    <li className="li" key={task.id}>
                        <h2 className="nome-tarefa">{task.task}</h2>                                      
                            <i onClick={() => trash(task.id)} className="bi bi-trash"></i>
                            <p className="date">{date.toLocaleDateString()}</p>                               
                    </li>)}
                </ul>
             </div>
        </div>
    );
}

export default TaskList;

