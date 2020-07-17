import React from "react";
import { Books } from "../containers";
import data from "../mooks/books.json";

const BooksRoute = () => {
  return <Books data={data} loading={data.length === 0}/>;
};

export default BooksRoute;
