import '../css/lightbutton.css'


const LightButton = ({children,onClick}) => {

    return(
        <>
            <button className="light-button"  onClick={onClick}>
                {children}
            </button>
        </>
    )

}
export default LightButton;
