import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink
} from "react-router-dom";
// import PrivateRoute from "./Components/privateRoute";
import routes from "./route";

function AppRouter() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink
                to="/"
                exact
                activeStyle={{
                  fontWeight: "bold",
                  color: "red"
                }}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/details/"
                activeStyle={{
                  fontWeight: "bold",
                  color: "red"
                }}
              >
                Details
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about/"
                activeStyle={{
                  fontWeight: "bold",
                  color: "red"
                }}
              >
                About
              </NavLink>
            </li>
          </ul>
        </nav>
        <Switch>
          {routes.map(
            ({
              id,
              path,
              component: Component,
              routes: childRoutes,
              ...parentProps
            }) => (
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
    </Router>
  );
}

export default AppRouter;
