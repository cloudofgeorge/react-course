import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { CatalogPage } from "./pages/catalog";
import { MainPage } from "./pages/main";

export const AppRouter = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/catalog" component={CatalogPage} />
      <Redirect to="/" path="*" />
    </Switch>
  </Router>
);
