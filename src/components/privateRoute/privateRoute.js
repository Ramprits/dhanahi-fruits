import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
const PrivateRoute = ({ component, ...rest }) => {
  const { currentUser } = useSelector((state) => state.currentUser);
  return (
    <Route
      {...rest}
      render={(props) =>
        currentUser !== undefined ? (
          React.createElement(component, props)
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: {
                from: props.location,
              },
            }}
          />
        )
      }
    />
  );
};
export default PrivateRoute;
