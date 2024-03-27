import React from "react";
import "./BackButton.css";
import Strelka from "../../../assets/icons/strelka.svg"
import {useNavigate} from "react-router-dom";

const BackButton = () => {
    const navigate = useNavigate()

    return(
        <div>
            <button className="back_button" onClick={() => navigate(-1)}>
                <img src={Strelka} alt=""/><span>Назад</span>
            </button>
        </div>
    )
}

export default BackButton