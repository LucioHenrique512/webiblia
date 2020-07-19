import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import BooksRoute from "./booksroute";
import { routenames } from "../constants";
import BookRoute from "./bookroute";

const Routes = () => {
  return (
    <Switch>
      <Route exact path={routenames.DEFAULT}>
        <Redirect to={routenames.BOOKS} />
      </Route>
      <Route path={routenames.BOOKS}>
        <BooksRoute />
      </Route>
      <Route path={`${routenames.BOOK}/:abbrev`}>
        <BookRoute />
      </Route>
    </Switch>
  );
};
export default Routes;
