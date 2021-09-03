import { Route, Switch } from "react-router-dom";

export const LoadSubRoutes = ({ routes }) => (
    <Switch>
        {routes.map((route, index) => (
            <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.component}
            />
        ))}
    </Switch>
)