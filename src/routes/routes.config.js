import { Login } from "pages/Auth/Login";
import { SignUp } from "pages/Auth/SignUp";
import { Error404 } from "pages/Errors/Error404";
import { Followers } from "pages/Followers/Followers";
import { Home } from "pages/Home/Home";
import { LoadSubroutesHome } from "pages/Home/LoadSubroutesHome";
import { Team } from "pages/Team/Team";
import { UserProfile } from "pages/UserProfile/UserProfile";

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
                path: '/Team',
                exact: true,
                component: Team,
            },
            {
                
                path: '/Followers',
                component: Followers,
                exact: true
            },
            {
                path: '/:UserName',
                component: UserProfile,
                exact: true
            },
            {
                component: Error404
            }
        ]
    },
]