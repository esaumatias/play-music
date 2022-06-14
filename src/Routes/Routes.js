import  React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../Pages/Login/Login';


function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
    </Switch>
  )
}

export default Routes;
