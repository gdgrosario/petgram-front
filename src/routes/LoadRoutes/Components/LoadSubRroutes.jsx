import { Route, Switch } from "react-router-dom";

export const LoadSubRoutes = ({ routes }) => (
    <Switch>
        {routes.map(({...params}, index) => (
            <Route
                key={index}
                {...params}
            />
        ))}
    </Switch>
)