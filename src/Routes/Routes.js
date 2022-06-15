import  React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../Pages/Login/Login';
import Search from '../Pages/Search/Search';
import Favorites from '../Pages/Favorites/Favorites';
import Profile from '../Pages/Profile/Profile';


function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/search" component={ Search } />
      <Route exact path="/profile" component={ Profile } />
      <Route exact path="/favorites" component={ Favorites } />
    </Switch>
  )
}

export default Routes;
