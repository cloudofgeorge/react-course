import React from "react";
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { CatalogPage } from "./pages/catalog";
import { MainPage } from "./pages/main";
import { ProductPage } from "./pages/product";

export const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/catalog" component={CatalogPage} />
      <Route exact path="/catalog/:productID" component={ProductPage} />
      <Redirect to="/" path="*" />
    </Switch>
  </BrowserRouter>
);
