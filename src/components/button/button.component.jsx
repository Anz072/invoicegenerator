
import "./button.styles.css";

const MainButton = ({content, fn}) =>{
    return(
        <div className="button_main" onClick={fn}><p>{content}</p></div>
    )
}

export default MainButton;

