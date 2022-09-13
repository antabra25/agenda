import '../css/lightbutton.css'


const LightButton = ({children}) => {

    return(
        <>
            <button className="light-button" >
                {children}
            </button>
        </>
    )

}
export default LightButton;
