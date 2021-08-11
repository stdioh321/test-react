import React from 'react';
import "./Button.css";

const Button = ({children,onPressed=()=>{}}) => {
    return ( 
        <div>
            <button className="add-button" onClick={onPressed} >{children}</button>
        </div>
     );
}
  
export default Button;