import Nav  from "./components/Nav.jsx";
import TaskList from "./components/TaskList.jsx";
import Footer from "./components/Footer.jsx";
import Modal from "./components/Modal.jsx";
import {useEffect, useState} from "react";
import axios from "axios";
import './index.css'
import './App.css'



function App() {

    const [isVisible,setIsVisible] = useState(false)



    const handleNote = (taskId,title,body) => {
        console.log(taskId,title,body)
    }

    const handleDisplayModal = (isVisible) => {
        setIsVisible(isVisible)
    }

     useEffect(async ()=>{
            const res = await axios.get('http://localhost:3000/list/task')
            if(res.status === 200){
                console.log(res.data)
                const tasks = res.data
            }

     },[]);

  return (

    <div className="app-wrapper">
        <Nav onDisplayModal={handleDisplayModal}/>
        <main>
            <TaskList tasks={tasks} onNote={handleNote}/>
            {isVisible && <Modal onDisplayModal={handleDisplayModal}/> }
        </main>
        <Footer/>
    </div>

  )
}

export default App
