import {useState} from "react";
import '../css/modal.css'
import closeBtn from '../assets/closeBtn.svg'
import LightButton from "./LightButton.jsx";

import axios from "axios";

const AddTaskModal = ({onAddTask,onDisplayModal})=>{

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
            axios.post('http://localhost:3000/create/task',{title:title,body:body}).then((res)=>{
                onDisplayModal(false)
            }).catch((error)=>{
                console.log(error)
            })
        }


    }

    const handleDisplayModal = () =>{
        onDisplayModal(false)
    }

    return (
        <div className="box-modal">

            <form className="modal" onSubmit={handleSubmitTask}>
                <img src={closeBtn} onClick={handleDisplayModal}/>
                <div>
                    <input type="text" name="title" placeholder="Titulo" value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
                </div>
                <div>
                    <textarea name="content" placeholder="Contenido" value={body} onChange={(e)=>{setBody(e.target.value)}} />
                </div>
                <div>
                    <LightButton>AGREGAR</LightButton>
                </div>

            </form>

        </div>
    )

}

export default AddTaskModal;