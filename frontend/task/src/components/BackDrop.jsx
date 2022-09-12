import '../css/backdrop.css'

const BackDrop = ({children}) => {

    return(
        <div className="back-drop">
            {children}
        </div>
    )

}
export default BackDrop;