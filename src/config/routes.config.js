import { LayoutHome } from "layouts/LayoutHome/LayoutHome";
import { LayoutHomeBasicUser } from "layouts/LayoutHomeBasicUser/LayoutHomeBasicUser";
import { Login } from "pages/Auth/Login";
import { Error404 } from "pages/Errors/Error404";
import { Followers } from "pages/Followers/Followers";
import { Home } from "pages/Home/Home";
import { HomeAut } from "pages/HomeAuth/HomeAut";

export const routes = [
    {
        path: '/Welcome',
        exact: false,
        component: LayoutHomeBasicUser,
        routes: [
            {
                path: '/Welcome',
                exact: true,
                component: Home,
            },
            {
                path: '/Welcome/Login',
                exact: true,
                component: Login,
            },
            {
                component: Error404
            }
        ]
    },
    {
        path: '/Home',
        exact: false,
        component: LayoutHome,
        routes: [
            {
                path: '/Home',
                component: HomeAut,
                exact: true
            },
            {
                
                path: '/Home/Followers',
                component: Followers,
                exact: true
            },
            {
                component: Error404
            }
        ]
    }
]