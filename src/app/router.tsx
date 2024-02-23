import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/mainPage/MainPage";
import PlayPage from "../pages/playPage/PlayPage";
import SettingsPage from "../pages/settingsPage/SettingsPage";

const router = createBrowserRouter([
    {
        path: '/kana-play',
        element: <MainPage/>
    },
    {
        path: '/kana-play/play',
        element: <PlayPage/>
    },
    {
        path: '/kana-play/settings',
        element: <SettingsPage/>
    }
])

const Router = () => {
    return <RouterProvider router={router}/>
}

export default Router