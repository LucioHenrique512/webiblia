import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import BooksRoute from "./booksRoute";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/books" />
      </Route>
      <Route path="/books">
        <BooksRoute />
      </Route>
    </Switch>
  );
};
export default Routes;
