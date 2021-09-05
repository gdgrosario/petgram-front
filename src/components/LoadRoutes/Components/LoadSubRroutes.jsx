import { Route, Switch } from "react-router-dom";

export const LoadSubRoutes = ({ routes }) => (
    <Switch>
        {routes.map(({path, exact, component}, index) => (
            <Route
                key={index}
                path={path}
                exact={exact}
                component={component}
            />
        ))}
    </Switch>
)