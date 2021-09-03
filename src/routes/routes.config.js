import { Login } from "pages/Auth/Login";
import { SignUp } from "pages/Auth/SignUp";
import { Error404 } from "pages/Errors/Error404";
import { Followers } from "pages/Followers/Followers";
import { Home } from "pages/Home/Home";
import { LoadSubroutesHome } from "pages/Home/LoadSubroutesHome";

export const routes = [
    {
        path: '/',
        exact: false,
        component: LoadSubroutesHome,
        routes: [
            {
                path: '/',
                exact: true,
                component: Home,
            },
            {
                path: '/Login',
                exact: true,
                component: Login,
            },
            {
                path: '/SignUp',
                exact: true,
                component: SignUp,
            },
            {
                
                path: '/Followers',
                component: Followers,
                exact: true
            },
            {
                component: Error404
            }
        ]
    },
]