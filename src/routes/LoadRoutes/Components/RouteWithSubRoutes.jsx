import { Route } from "react-router-dom";

export const RouteWithSubRoutes = ({routes, component:Component, ...params}) => (
    <Route
        {...params}
        render={props => <Component routes={routes} {...props} />}
    />
)