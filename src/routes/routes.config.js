
import { LoadSubroutesHome } from "routes/LoadRoutes/Components/LoadSubroutesHome";
import { Login } from "pages/Auth/Login";
import { SignUp } from "pages/Auth/SignUp";
import { Error404 } from "pages/Errors/Error404";
import { Followers } from "pages/Followers/Followers";
import { Home } from "pages/Home/Home";
import { Team } from "pages/Team/Team";
import { UserProfile } from "pages/UserProfile/UserProfile";
import { UserEdit } from "pages/UserProfile/UserEdit";

export const routes = [
  {
    path: "/",
    exact: false,
    component: LoadSubroutesHome,
    routes: [
      {
        path: "/",
        exact: true,
        component: Home,
      },
      {
        path: "/login",
        exact: true,
        component: Login,
      },
      {
        path: "/sign-up",
        exact: true,
        component: SignUp,
      },
      {
        path: "/team",
        exact: true,
        component: Team,
      },
      {
        path: "/followers",
        component: Followers,
        exact: true,
      },
      {
        path: "/edit",
        component: UserEdit,
        exact: true,
      },
      {
        path: "/:username",
        component: UserProfile,
        exact: true,
      },
      {
        component: Error404,
      },
    ],
  },
];
