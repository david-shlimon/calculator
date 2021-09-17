
import './AmazingNumberButton.css';

const AmazingNumberButton = (props) => {
return (
            
    <button className="numberButton" value={props.label} onClick={props.handleClick}>{props.label}</button>
            
        );
    }



export default AmazingNumberButton;