import '../css/nav.css'
const Nav =({setIsVisible})=>{


    return(
        <>
            <header className="header">
                <h1>Agenda de Actividades</h1>
                <nav>
                    <ul>
                        <li onClick={()=>setIsVisible(true)}>Nueva</li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Nav;