
import './GreatOperationButton.css';

    const GreatOperationButton = (props) => {
return (
        
            
                <button className="operationButton" value={props.label} onClick={props.handleClick}> {props.label} </button>
            
           
        );
    }



export default GreatOperationButton;

