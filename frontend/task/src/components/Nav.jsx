import '../css/nav.css'
const Nav =({onDisplayModal})=>{

    const handleDisplayModal = () => {
        onDisplayModal(true)

    }
    return(
        <>
            <header className="header">
                <h1>Agenda de Actividades</h1>
                <nav>
                    <ul>
                        <li onClick={handleDisplayModal}>Nueva</li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Nav;