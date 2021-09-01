import { Login } from "pages/Auth/Login";
import { Followers } from "pages/Followers/Followers";
import { Home } from "pages/Home/Home";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

export default function Index() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login}></Route>
        <Route path="/followers" component={Followers}></Route>
        <Route path="/" component={Home}></Route>
      </Switch>
    </Router>
  );
}
