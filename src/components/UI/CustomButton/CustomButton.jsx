 import React from "react";
import "./CostomButton.css";


function CustomButton(props){
    return(
        <button className={props.variant ? `main_button ${props.variant}` : `main_button`}>
            {props.text}
        </button>

    )
}

export default CustomButton