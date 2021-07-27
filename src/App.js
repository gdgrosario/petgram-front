import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Error404 from './pages/Error404';

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/' component={Login}/>
          <Route path='*' component={Error404}/>
        </Switch>
      </Router>
    </div>
  );
};

export default App;