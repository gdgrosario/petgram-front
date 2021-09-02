import { Route } from "react-router-dom";

export const RouteWithSubRoutes = (route) => (
    <Route
        path={route.path}
        exact={route.exact}
        render={props => <route.component routes={route.routes} {...props} />}
    />
)