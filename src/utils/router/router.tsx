import "./router.css";

import React from "react";
import { connect } from "react-redux";
import { Redirect, Route, BrowserRouter as Router } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

import Login from "../../pages/auth/login";
import Dashboard from "../../pages/dashboard";
import Giveaway from "../../pages/giveaway";
import History from "../../pages/history";
import Landing from "../../pages/landing";

const routes = [
  { path: "/", name: "Landing", Component: Landing as any },

  { path: "/dashboard", name: "Dashboard", Component: Dashboard as any, protectedRoute: true },
  { path: "/history", name: "History", Component: History as any, protectedRoute: true },
  { path: "/giveaway", name: "Giveaway", Component: Giveaway as any, protectedRoute: true },

  { path: "/auth/login", name: "Login", Component: Login as any },
];

const RouterRender = ({ token }) => (
  <Router>
    {routes.map(({ path, Component, protectedRoute }) => {
      return protectedRoute && !token ? (
        <Redirect to="/" key={path} />
      ) : (
        <Route key={path} exact path={path}>
          {({ match, history }) => {
            return (
              <CSSTransition in={match != null} timeout={300} classNames="page" unmountOnExit>
                <div className="page">
                  <Component history={history} />
                </div>
              </CSSTransition>
            );
          }}
        </Route>
      );
    })}
  </Router>
);

const mapStateToProps = (state: any) => {
  const { token } = state.UserReducer;
  return { token };
};

export default connect(mapStateToProps)(RouterRender) as any;
