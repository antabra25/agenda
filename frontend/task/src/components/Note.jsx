import  '../css/note.css'
import deleteBtn  from '../assets/deleteBtn.png'
import checkCircle from '../assets/checkCircle.png'
import axios from 'axios'
import {useState} from "react";

const Note = ({id,title,body}) => {

    const [note,setNote] = useState({id:id,title:title,body: body})

    const noteHandler = (e)=>{
        setNote({
            ...note,
                [e.target.name]:e.target.value
        })
    }
    const deleteTask = (id)=>{
        axios.delete(`http://localhost:3000/delete/task/${id}`).then(()=>{

        }).catch(()=>{

        })
    }
    const updateTask = ()=>{
        axios.put(`http://localhost:3000/update/task/${id}`,{title:note.title,body:note.body}).then((res)=>{
            console.log(res.data)
        }).catch((error)=>{
            console.log(error)
        })
    }

    return (
            <div className="note">

                <div className="note-title">
               <input type="text" name="title" value={note.title} onChange={noteHandler} />
                </div>
                <div className="note-body">
                    <textarea name="body" rows="4" value={note.body} onChange={noteHandler} />
                </div>
                <div className="btn-control-note">
                    <div className="control-img-wrapper">
                    <img className="delete-btn" onClick={()=>deleteTask(id)} src={deleteBtn} />
                    <img  className="check-btn" onClick={()=>updateTask(id)} src={checkCircle}/>
                    </div>
                </div>
            </div>
    )
}
export default Note;