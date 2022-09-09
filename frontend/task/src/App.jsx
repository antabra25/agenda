import Nav  from "./components/Nav.jsx";
import Note from "./components/Note.jsx"
import './index.css'
import './App.css'

function App() {


    const handleNote = (title,body) => {
        console.log(title,body)
    }

  return (
    <div className="app">

      <Nav/>
      <Note title={"Mi primera nota"} body={"Recordar terminar el CRUD."} onNote={handleNote}/>

    </div>
  )
}

export default App
