import React, {useEffect, useState} from "react";
import Header from "../../components/Header/Header";
import Container from "../../components/UI/Container/Container";
import PageHeader from "../../components/PageHeader/PageHeader";
import ContentPerson from "../../components/ContentPerson/ContentPerson";


const api = "https://rickandmortyapi.com/api/character";

const Characters = () =>{
    const [posts,setPosts] = useState([])
    const[page,setPage] = useState(1)

    useEffect(() => {
        const fetchPost = async () => {

                const posts = await fetch(`${api}/?page=${page}`)
                    .then(res =>res.json());
                setPosts(posts.results)

        }
        fetchPost();
    }, [page]);

    return(
        <Container>
            <Header/>
            <PageHeader title={"Персонажи"}/>
            <div>
                {posts.map((post) => {
                    return(
                        <ContentPerson
                            key={post.id}
                            image={post.image}
                            location={post.location.name}
                            origin={post.origin.name}
                            race={post.species}
                            status={post.status}
                            title={post.name}
                            episode={post.episode.length}
                            gender={post.gender}
                        />
                    )
                })}
            </div>

        </Container>
    );
};

export default Characters