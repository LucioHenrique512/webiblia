import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import BooksRoute from "./booksroute";
import { routenames } from "../constants";
import BookRoute from "./bookroute";
import HolyTextRoute from "./holytextroute";
import NoMatchRoute from "./nomatchroute";

const Routes = () => {
  return (
    <Switch>
      <Route exact path={routenames.DEFAULT}>
        <Redirect to={routenames.BOOKS} />
      </Route>
      <Route exact path={routenames.BOOKS}>
        <BooksRoute />
      </Route>
      <Route exact path={`${routenames.BOOKS}/:abbrev`}>
        <BookRoute />
      </Route>
      <Route exact path={`${routenames.BOOKS}/:abbrev/:chapter`}>
        <HolyTextRoute />
      </Route>
      <Route>
        <NoMatchRoute />
      </Route>
    </Switch>
  );
};
export default Routes;
