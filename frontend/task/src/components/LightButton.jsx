import '../css/lightbutton.css'


const LightButton = ({children}) => {

    return(
        <>
            <button className="light-button" type="submit">
                {children}
            </button>
        </>
    )

}
export default LightButton;
