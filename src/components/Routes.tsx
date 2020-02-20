import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
  ;
import Login from './pages/Login';
import Feed from './pages/Feed';

function Routes() {
  return (
    <Router>

      <Switch>
        <Route path="/" exact={true}>
          <Login />
        </Route>
        <Route path="/feed">
          <Feed />
        </Route>
      </Switch>
    </Router>
  );
}
export default Routes;
