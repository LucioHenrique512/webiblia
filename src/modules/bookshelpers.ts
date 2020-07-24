interface book {
  abbrev: any;
  author: string;
  chapters: number;
  group: string;
  name: string;
  testament: string;
}

export const testamentFilter = (data: Array<book>) => {
  const oldTestament: Array<book> = [];
  const newTestament: Array<book> = [];
  data.forEach((item) => {
    if (item.testament === "VT") oldTestament.push(item);
    if (item.testament === "NT") newTestament.push(item);
  });
  return { oldTestament, newTestament };
};

export const filterBooksByName = (query: string, books: Array<book>) => {
  return query.trim() !== ""
    ? books.filter((book) =>
        book.name.toLowerCase().includes(query.toLowerCase())
      )
    : [];
};

export const filterBookByAbbrev = (query: string, books: Array<book>) => {
  return books.find((book) => book.abbrev.pt === query);
};
