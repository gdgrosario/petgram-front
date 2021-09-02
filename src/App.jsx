import { MapRoutes } from "components/LoadRoutes/MapRoutes"
import { BrowserRouter as Router,  Switch } from "react-router-dom"

export const App = () => {
    return (
        <Router>
            <Switch>
                <MapRoutes/>
            </Switch>
        </Router>
    )
}
