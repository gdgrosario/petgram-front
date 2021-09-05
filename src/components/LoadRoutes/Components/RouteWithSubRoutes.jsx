import { Route } from "react-router-dom";

export const RouteWithSubRoutes = ({path, exact, routes, component:Component}) => (
    <Route
        path={path}
        exact={exact}
        render={props => <Component routes={routes} {...props} />}
    />
)