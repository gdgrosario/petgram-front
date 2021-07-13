import './App.css';
import Template from "./componentes/Template"
import Login from "./componentes/Login"
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App-header">
      <Router>
        <Switch>
          <Route path="/template" component={Template}></Route>
          
          <Route path="/login" component={Login}></Route>
          <Route path="/" component={Login}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
