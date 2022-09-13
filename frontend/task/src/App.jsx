import Nav  from "./components/Nav.jsx";
import TaskList from "./components/TaskList.jsx";
import Footer from "./components/Footer.jsx";
import AddTaskModal from "./components/AddTaskModal.jsx";
import {useEffect, useState} from "react";
import axios from "axios";
import './index.css'
import './App.css'



function App() {

    const [isVisible,setIsVisible] = useState(false)
    const [tasks,setTasks] = useState([])



    const handleDisplayModal = (isVisible) => {
        setIsVisible(isVisible)
    }

    const handleTasks = (value) =>{
        setTasks(...value)

    }

     useEffect(()=>{
         axios.get('http://localhost:3000/list/task').then((res)=>{
                 setTasks(res.data)
         }

         )
     },[tasks]);

  return (

    <div className="app-wrapper">
        <Nav onDisplayModal={handleDisplayModal}/>
        <main>
            <TaskList tasks={tasks} />
            {isVisible && <AddTaskModal onDisplayModal={handleDisplayModal}/> }
        </main>
        <Footer/>
    </div>

  )
}

export default App
