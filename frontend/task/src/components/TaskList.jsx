import '../css/tasklist.css'
import Note from "./Note.jsx";
const TaskList = ({tasks,onNote}) => {

    const forwardNote = (id,title,body) => onNote(id,title,body)

    return(
        <div className="app-container">
            <div className="task-list">
                {tasks.map(
                (task)=><Note key={task.id} id={task.id} title={task.title} body={task.body} onNote={forwardNote} />
                )}
            </div>
        </div>
    )



}

export default TaskList;
