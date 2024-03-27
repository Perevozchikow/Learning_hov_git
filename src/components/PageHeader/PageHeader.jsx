import React from "react";
import "./PageHeader.css";
import BackButton from "../UI/BackButton/BackButton";
import ContentPerson from "../ContentPerson/ContentPerson";

const PageHeader = ({title}) => {
    return(
        <div className="page_header">
            <BackButton/>
            <h3 className="page_title">{title}</h3>

        </div>
    )
}

export default PageHeader