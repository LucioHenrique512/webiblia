import React from "react";
import { Container } from "../../components";
import { Content } from "./style";
import BookItem from "./bookitem";

interface propstypes {
  data: Array<any>;
  loading?: Boolean;
}

const Books = ({ data }: propstypes) => {
  //console.log(data);

  return (
    <Container>
      <Content data-testid="main-bookslist">
        {data.map(({ abbrev, author, chapters, group, name, testament }, i) => (
          <BookItem
            key={i}
            abbrev={abbrev}
            author={author}
            chapters={chapters}
            group={group}
            name={name}
            testament={testament}
          />
        ))}
      </Content>
    </Container>
  );
};

export default Books;
