import React from "react";
import "./Category.css"
import {Link} from "react-router-dom";


function Category({image,title,description, link}){
    return(

                <Link to={link} className="category">
                    <div className="category__image_container">
                        <img src={image} alt="" className="category__image"/>
                    </div>
                    <div className="category__info_container">
                        <h3 className="category__info_header">{title}</h3>
                        <p className="category__info_description">{description}</p>
                    </div>
                </Link>
    )
}


export default Category