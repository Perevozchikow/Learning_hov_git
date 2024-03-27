import React from "react";

import "./Header.css";
import CustomButton from "../UI/CustomButton/CustomButton";
import Navigation from "../Navigation/Navigation";
import Logo from "../UI/Logo/Logo";
import UserContainer from "../UserContainer";

function Header() {
    return (
        <header>
            <Logo/>
            <Navigation/>
            <UserContainer>
                <CustomButton text={"Регистрация"}/>
                <CustomButton text={"Войти"} variant={"secondary"}/>
            </UserContainer>
        </header>
    )
}

export default Header