import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/mainPage/MainPage";
import PlayPage from "../pages/playPage/PlayPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainPage/>
    },
    {
        path: '/play',
        element: <PlayPage/>
    }
])

const Router = () => {
    return <RouterProvider router={router}/>
}

export default Router