import {createBrowserRouter} from "react-router-dom";
import HomePages from "../pages/HomePages/HomePages";
import Characters from "../pages/Characters/Characters";
import Episode from "../pages/Episode/Episode";
import Location from "../pages/Location/Location";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <HomePages/>,

        },
        {
            path: "/characters",
            element: <Characters/>,

        },
        {
            path: "/location",
            element: <Location/>,

        },
        {
            path: "/episode",
            element: <Episode/>,

        }
    ]
)
export default router