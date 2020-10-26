import React from 'react';
import { Redirect, Route } from 'react-router-dom';

export default ({ component: Component, ...rest }) => {
  // if (!AuthenticationService.getTokenAuth()) {
    if (process.env.NODE_ENV === 'development') {
      return <Redirect to={{ pathname: '/' }} />;
    }

    // if (process.env.NODE_ENV === 'production') {
    //   return (
    //     <Route
    //       path="/"
    //       component={() => {
    //         window.location.href = 'https://www.google.com';
    //         return null;
    //       }}
    //     />
    //   );
    // }
  // }

  return <Route {...rest} render={props => <Component {...props} />} />;
};
