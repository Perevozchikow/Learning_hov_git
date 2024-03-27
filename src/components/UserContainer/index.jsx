import React from "react";
import "./index.css";

function UserContainer(props){
    return(
        <div className={"user_container"}>
            {props.children}
        </div>
    )
}

export default UserContainer