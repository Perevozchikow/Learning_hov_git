import charactersImg from "../../assets/characters.png";
import episodeImg from "../../assets/episode.png";
import locationImg from "../../assets/locations.jpg";


const categories = [
    {
        id:1,
        image: charactersImg,
        title: "Персонажи",
        description: "Зайди и познакомся со всеми персонажими вселеной",
        link: "/characters"

    },
    {
        id:2,
        image: locationImg,
        title: "Локации",
        description: "Иследуй все локации. Давай же , не будь занудой!",
        link: "/location"

    },
    {
        id:3,
        image: episodeImg,
        title: "Эпизоды",
        description: "Узнай чуть больше о карте приложений Рика и Моти",
        link: "/episode"

    },
]

export default categories