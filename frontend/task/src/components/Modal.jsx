import {useState} from "react";
import '../css/modal.css'
import closeBtn from '../assets/closeBtn.svg'
import LightButton from "./LightButton.jsx";

const Modal = ({onAddTask})=>{
    const [task,setTask] = useState({})
    const handleChangeTask = (e) =>{
       setTask({
           ...task,
           [e.target.name]:e.target.value
       })

    }

    const handleSubmitTask = (e) =>{
        e.preventDefault()


    }

    return (
        <div className="box-modal">

            <form className="modal" onSubmit={handleSubmitTask}>
                <img src={closeBtn} alt=""/>
                <div>
                    <input type="text" name="title" defaultValue="Titulo" value={task.title} onChange={handleChangeTask}/>
                </div>
                <div>
                    <textarea name="content" defaultValue="Contenido" value={task.content} onChange={handleChangeTask} />
                </div>
                <div>
                    <LightButton>AGREGAR</LightButton>
                </div>

            </form>

        </div>
    )

}

export default Modal;