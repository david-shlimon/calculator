import React, { useEffect, useState } from 'react';
import AmazingNumberButton from './AmazingNumberButton';
import GreatOperationButton from "./GreatOperationButton";
import MagnificientEqualButton from "./MagnificientEqualButton";
import BeautifullScreen from "./BeautifullScreen";
import ItSOverNineThousand from "./ItSOverNineThousand";
import './Calculator.css';



const Calculator = () => {
  
    const [result, setResult] = useState(""); 
    
    const [calc, setCalc] = useState ("");

    const [over, setOver] = useState("");

    const handleClick = (e) => { // handleClick const with e parameter 
      setCalc(calc.concat(e.target.value));  
    }
  
  const clear= () => {
      setCalc("");
      setResult("");
      setOver("");
  }

    const backspace = () => {
        setCalc(calc.slice(0, -1)); // delete 1 by 1 numbers thanks to slice by choosing "-1"

    }

    const calculate = () => {
        try {
            setResult(eval(calc).toString());
        } catch(err) {
            setResult("Erreur")
        }

}

    useEffect(() => { // search if the result is over 9000
        if (result > 9000) {
            setOver("It's over 9000 !!!");
        }else {
            setOver("");
        }
    }, [result]);




    return (
    

<div>   

            <div className="buttons-body">
            
            <BeautifullScreen result={result} /> 
            <BeautifullScreen calc={calc}/> 


            <GreatOperationButton label="C" handleClick={clear}/>
            <GreatOperationButton label="CE" handleClick={backspace}/>
            <GreatOperationButton label="/" handleClick={handleClick}/>
            <GreatOperationButton label="-" handleClick={handleClick}/>
            <GreatOperationButton label="+" handleClick={handleClick}/>
            <GreatOperationButton label="*" handleClick={handleClick}/>
            <AmazingNumberButton label="7" handleClick={handleClick}/>
            <AmazingNumberButton label="8" handleClick={handleClick}/>
            <AmazingNumberButton label="9" handleClick={handleClick}/>
            <AmazingNumberButton label="4" handleClick={handleClick}/>
            <AmazingNumberButton label="5" handleClick={handleClick}/>
            <AmazingNumberButton label="6" handleClick={handleClick}/>
            <AmazingNumberButton label="1" handleClick={handleClick}/>
            <AmazingNumberButton label="2" handleClick={handleClick}/>
            <AmazingNumberButton label="3" handleClick={handleClick}/>
            <AmazingNumberButton label="0" handleClick={handleClick}/>
            <AmazingNumberButton label="." handleClick={handleClick}/>
            <MagnificientEqualButton label="=" handleClick={calculate}/> 

            

               
            </div>
            
                
                <ItSOverNineThousand className="over" value={over} /> 
                
                </div>
     
    );
    }


export default Calculator;

