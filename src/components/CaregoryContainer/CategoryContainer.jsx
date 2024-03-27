import React  from "react";
import "./CategoryContainer.css";
import Category from "../Category/Category";




const CategoryContainer = ({categories}) => {
    return(
        <div className="category_container">
            {categories.map(el => {
                return(
                    <Category
                        image= {el.image}
                        title={ el.title}
                        description={el.description}
                        id={el.id}
                        link ={el.link}
                    />
                )
            })}
        </div>
    )
}
export default CategoryContainer