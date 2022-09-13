import {useState} from "react";
import '../css/modal.css'
import closeBtn from '../assets/closeBtn.svg'
import LightButton from "./LightButton.jsx";

import axios from "axios";

const AddTaskModal = ({onAddTask,setIsVisible})=>{

    const [title,setTitle] = useState('')
    const [body,setBody] = useState('')
    const [validForm,setValidForm] = useState(false)


    const handleSubmitTask = (e) =>{
        e.preventDefault()

        if(title.length > 0 && body.length > 0){
            setValidForm(true)
        }else{
            setValidForm(false)
        }

        if(validForm){
            const newTask = {title:title,body:body}
            axios.post('http://localhost:3000/create/task',newTask).then((res)=>{
                onAddTask(newTask)
                setIsVisible(false)
            }).catch((error)=>{
                console.log(error)
            })
        }


    }


    return (
        <div className="box-modal">

            <form className="modal" onSubmit={handleSubmitTask} >
                <img src={closeBtn} onClick={()=>setIsVisible(false)}/>
                <div>
                    <input type="text" name="title" placeholder="Titulo" value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
                </div>
                <div>
                    <textarea name="content" placeholder="Contenido" value={body} onChange={(e)=>{setBody(e.target.value)}} />
                </div>
                <div>
                    <LightButton >AGREGAR</LightButton>
                </div>

            </form>

        </div>
    )

}

export default AddTaskModal;