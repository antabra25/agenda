import '../css/lightbutton.css'


const LightButton = ({children,onClick}) => {

    return(
        <>
            <button className="light-button" onClick={(event)=>onClick(event)} >
                {children}
            </button>
        </>
    )

}
export default LightButton;
