import Nav  from "./components/Nav.jsx";
import Note from "./components/Note.jsx"
import './index.css'
import './App.css'

function App() {


  return (
    <div className="app">

      <Nav/>
      <Note title={"Mi primera nota"} content={"Recordar terminar el CRUD."}/>

    </div>
  )
}

export default App
