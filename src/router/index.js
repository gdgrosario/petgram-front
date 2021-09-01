import { Login } from "pages/Auth/Login";
import { Followers } from "pages/Followers/Followers";
import { Home } from "pages/Home/Home";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { Team } from "pages/Team/Team";

export default function Index() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login}></Route>
        <Route path="/followers" component={Followers}></Route>
        <Route path="/team" component={Team}></Route>
        <Route path="/" component={Home}></Route>
      </Switch>
    </Router>
  );
}
