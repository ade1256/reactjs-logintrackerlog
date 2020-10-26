import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { routes } from './routes';
import { PlayerPage } from '../Pages';
import baseUrl from './baseUrl';
import { UserProvider } from '../Context/UserContext';
import Cookies from '../Utils/Cookies';

const Router = () => {
  const userCookies = Cookies.get('user');

  const setUserCookies = values => {
    Cookies.set('user', values);
  };

  const deleteUserCookies = () => {
    Cookies.erase('user');
  };
  const RouterComponent = Object.getOwnPropertyNames(routes).map(
    (route, id) => {
      return (
        <Route
          key={id}
          path={routes[route].path}
          component={routes[route].component}
          exact={true}
        />
      );
    }
  );

  return (
    <Switch>
      <Route path={baseUrl.PLAYER} component={PlayerPage} />
      <UserProvider value={{ userCookies, setUserCookies, deleteUserCookies }}>
        {RouterComponent}
      </UserProvider>
    </Switch>
  );
};

export default withRouter(Router);
