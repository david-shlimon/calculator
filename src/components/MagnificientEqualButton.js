
import './MagnificientEqualButton.css';

const MagnificientEqualButton = (props) => {
    return (               
        <button className="equalButton" value={props.label} onClick={props.handleClick}> {props.label} </button>        
        );
    }

    
    export default MagnificientEqualButton;