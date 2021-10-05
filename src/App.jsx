import { MapRoutes } from "routes/LoadRoutes/MapRoutes";
import { AuthProvider } from "context/ContextProvider";
import { BrowserRouter as Router, Switch } from "react-router-dom";

export const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <MapRoutes />
        </Switch>
      </Router>
    </AuthProvider>
  );
};
