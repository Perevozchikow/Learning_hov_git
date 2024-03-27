import React from "react";
import "./ContentPerson.css";



function ContentPerson(props){
    return(
        <div className="person_container">
            <div className="person_img">
                <img src={props.image} alt=""/>
            </div>
            <div className="person_info_container">
                <div className="person_header">
                    <h3 className="person_name">{props.title}</h3>

                </div>
                <div className="person_info">
                   <ul>
                       <li><span className="item">Раса:</span>{props.race}</li>
                       <li><span className="item">Место происходения:</span>{props.origin}</li>
                       <li><span className="item">Последняя локация:</span>{props.location}</li>
                   </ul>
                    <ul>
                        <li><span className="item">Пол:</span>{props.gender}</li>
                        <li><span className="item">Эпизоды:</span>{props.episode}</li>
                    </ul>
                </div>
                <div className="choice">
                    <button type="submit">Добавить в избранное</button>
                </div>
            </div>
        </div>
    )
}

export default ContentPerson