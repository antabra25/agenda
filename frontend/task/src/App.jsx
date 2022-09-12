import Nav  from "./components/Nav.jsx";
import TaskList from "./components/TaskList.jsx";
import Footer from "./components/Footer.jsx";
import Modal from "./components/Modal.jsx";
import {useEffect, useState} from "react";
import './index.css'
import './App.css'



function App() {

    const [isVisible,setIsVisible] = useState(false)

    const task = [
        {id:1,title:"Primera",body:"Esto es el contenido de esta nota."},
        {id:2,title:"Primera",body:"Esto es el contenido de esta nota."},
        {id:3,title:"Primera",body:"Esto es el contenido de esta nota."},
        {id:4,title:"Primera",body:"Esto es el contenido de esta nota."},
        {id:5,title:"Primera",body:"Esto es el contenido de esta nota."},
        {id:6,title:"Primera",body:"Esto es el contenido de esta nota."},
        {id:7,title:"Primera",body:"Esto es el contenido de esta nota."},
        {id:8,title:"Primera",body:"Esto es el contenido de esta nota."},
        {id:9,title:"Primera",body:"Esto es el contenido de esta nota."},
        {id:10,title:"Primera",body:"Esto es el contenido de esta nota."},

    ]

    const tasks = []


    const handleNote = (taskId,title,body) => {
        console.log(taskId,title,body)
    }

  return (

    <div className="app-wrapper">
        <Nav/>
        <main>
        <TaskList tasks={tasks} onNote={handleNote}/>
        {isVisible && <Modal/> }
        </main>
        <Footer/>
    </div>

  )
}

export default App
