import React, { lazy, Suspense } from "react";
import { Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/privateRoute/privateRoute";
import PublicRoute from "./components/privateRoute/publicRoute";
import history from "./utils/history";

const IndexPage = lazy(() => import("./pages/Index.js"));
const LoginPage = lazy(() => import("./pages/Login.js"));
const RegisterPage = lazy(() => import("./pages/Register.js"));
const ContactPage = lazy(() => import("./pages/Contact.js"));
const Product = lazy(() => import("./pages/Product.js"));
const Support = lazy(() => import("./pages/Support.js"));
const NotFoundPage = lazy(() => import("./pages/404.js"));

const App = () => {
  return (
    <Router history={history}>
      <Suspense fallback={<div>Please wait while loading...</div>}>
        <Switch>
          <PrivateRoute exact path="/" component={IndexPage}></PrivateRoute>
          <PrivateRoute path="/support" component={Support}></PrivateRoute>
          <PrivateRoute path="/products" component={Product}></PrivateRoute>
          <PrivateRoute path="/contact" component={ContactPage}></PrivateRoute>
          <PublicRoute path="/login" component={LoginPage}></PublicRoute>
          <PublicRoute path="/register" component={RegisterPage}></PublicRoute>
          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;
