import React from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";

interface Props extends RouteProps {
  loggedIn: boolean,
  component: React.ComponentType<any>
}

const ProtectedRoute = ({ component: Component, loggedIn, ...props }: Props) => {
  return (
    <Route>
      {() =>
        loggedIn ? <Component {...props} /> : <Redirect to="./login" />
      }
    </Route>
  );
};

export default ProtectedRoute;