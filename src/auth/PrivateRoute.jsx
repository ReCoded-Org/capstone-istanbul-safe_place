import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "./Authentication";

/**
 * Use this higher-order component with the component that
 * require the user to be authentecated. It's used with instead
 * of <Route />
 *
 */
const PrivateRoute = ({ children, ...rest }) => {
  const { currentUser } = useContext(AuthContext);
  return (
    <Route {...rest}>
      {currentUser ? children : <Redirect to="/signin" />}
    </Route>
  );
};

export default PrivateRoute;
