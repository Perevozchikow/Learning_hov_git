import React from "react";
import Container from "../../components/UI/Container/Container";
import Header from "../../components/Header/Header";
import CategoryContainer from "../../components/CaregoryContainer/CategoryContainer";
import categories from "../../data/Local/categories";

const HomePages = ()=>{
    return(
            <Container>
                <Header/>
                <main>
                    <CategoryContainer categories={categories}/>
                </main>
            </Container>
    )
}

export default HomePages