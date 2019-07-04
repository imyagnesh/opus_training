import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const privateRoute = ({ component: Component, isAuthenticated, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/',
              // eslint-disable-next-line react/prop-types
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};

privateRoute.propTypes = {
  component: PropTypes.element.isRequired,
  isAuthenticated: PropTypes.bool.isRequired
};

export default privateRoute;
