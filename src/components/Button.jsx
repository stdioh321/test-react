import React from 'react';
import "./Button.scss";

const Button = ({children,onPressed=()=>{}}) => {
    return ( 
        <div>
            <button className="add-button" onClick={onPressed} >{children}</button>
        </div>
     );
}
  
export default Button;