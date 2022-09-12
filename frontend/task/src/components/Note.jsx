import  '../css/note.css'
import {useState} from "react";

const Note = ({id,title,body,onNote}) => {

    const [note,setNote] = useState({id:id,title:title,body: body})

    const noteHandler = (e)=>{
        setNote({
            ...note,
                [e.target.name]:e.target.value
        })
        onNote(note.id,note.title,note.body)
    }

    return (
            <div className="note">

                <div className="note-title">
               <input type="text" name="title" value={note.title} onChange={noteHandler} />
                </div>
                <div className="note-body">
                    <textarea name="body" rows="4" value={note.body} onChange={noteHandler} />
                </div>
            </div>
    )
}
export default Note;