import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "./Authentication";

const PrivateRoute = ({ children, ...rest }) => {
  const { currentUser } = useContext(AuthContext);
  return (
    <Route {...rest}>
      {!!currentUser ? (
        children
      ) : (
        <Redirect to="/signin" />
        )}
    </Route>
  );
};

export default PrivateRoute;
