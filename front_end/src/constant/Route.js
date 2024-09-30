import {createRoute} from "../util/RouteUtil";
import {createBrowserRouter} from "react-router-dom";

import LoginView from "../component/login/LoginView";
import VideoView from "../component/video/VideoView";
import RegisterView from "../component/login/RegisterView";

export const ROUTES = {
    HOME: {PATH: "/", ELEMENT: <VideoView/>, IS_PRIVATE: true},
    LOGIN: {PATH: "/login", ELEMENT: <LoginView/>, IS_PRIVATE: false},
    REGISTER: {PATH: "/register", ELEMENT: <RegisterView/>, IS_PRIVATE: false}
}

function genBrowserRoutes()
{
    let browserRoutes = [];

    for (let key in ROUTES)
    {
        browserRoutes.push(createRoute(ROUTES[key]));
    }

    return browserRoutes;
}


export const BROWSER_ROUTES = createBrowserRouter(genBrowserRoutes())