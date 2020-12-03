import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
const PublicRoute = ({ component, ...rest }) => {
  const { currentUser } = useSelector((state) => state.currentUser);
  return (
    <Route
      {...rest}
      render={(props) =>
        currentUser !== undefined ? (
          <Redirect
            to={{
              pathname: "/",
            }}
          />
        ) : (
          React.createElement(component, props)
        )
      }
    />
  );
};

export default PublicRoute;
