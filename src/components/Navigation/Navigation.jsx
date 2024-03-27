import React from "react";
import NavigationLink from "../UI/NavigationLink/NavigationLink";

function Navigation() {
    return(

        <nav className="main_navigation">
            <li className={"main_navigation__item"}>
                <NavigationLink
                    path={"/"}
                    text={"Главная"}/>
            </li>
            <li className={"main_navigation__item"}>
                <NavigationLink
                    path={"/about"}
                    text={"о проекте"}/>
            </li>
        </nav>
    )
}


export default Navigation