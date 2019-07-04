import React from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
// import PrivateRoute from "./Components/privateRoute";
import routes from './route';
import LocaleContext, { LocaleConsumer } from './Context/localeContext';

function AppRouter() {
  return (
    <Router>
      <LocaleContext>
        <>
          <LocaleConsumer>
            {value => (
              <div>
                <select
                  name="locale"
                  value={value.locale}
                  onChange={e => value.onLocaleChange(e.target.value)}
                >
                  <option value="">Select Locale</option>
                  <option value="english">English</option>
                  <option value="spanish">Spanish</option>
                </select>
              </div>
            )}
          </LocaleConsumer>
          <div>
            <nav>
              <ul>
                <li>
                  <NavLink
                    to="/"
                    exact
                    activeStyle={{
                      fontWeight: 'bold',
                      color: 'red'
                    }}
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/details/"
                    activeStyle={{
                      fontWeight: 'bold',
                      color: 'red'
                    }}
                  >
                    Details
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about/"
                    activeStyle={{
                      fontWeight: 'bold',
                      color: 'red'
                    }}
                  >
                    About
                  </NavLink>
                </li>
              </ul>
            </nav>
            <Switch>
              {routes.map(
                ({ id, path, component: Component, routes: childRoutes, ...parentProps }) => (
                  <Route
                    key={id}
                    path={path}
                    render={props => <Component {...props} routes={childRoutes} />}
                    {...parentProps}
                  />
                )
              )}
            </Switch>
          </div>
        </>
      </LocaleContext>
    </Router>
  );
}

export default AppRouter;
