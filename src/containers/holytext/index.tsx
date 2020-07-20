import React from "react";
import { Container, Loading, BackButton, Divider } from "../../components";
import {
  HolytextContainer,
  Header,
  BookName,
  ChapterName,
  VersesContainer,
  Verses,
} from "./style";

interface HolyTextProps {
  data: any;
  loading?: boolean;
  abbrev: string;
}

const HolyText = ({ data, loading, abbrev }: HolyTextProps) => {
  return (
    <Container>
      {loading ? (
        <Loading />
      ) : (
        <HolytextContainer>
          <Header>
            <BookName>{data.book.name}</BookName>
            <ChapterName>Capítulo {data.chapter.number}</ChapterName>
            <BackButton
              to={`/books/${abbrev}`}
              label={`Voltar para ${data.book.name}`}
            />
          </Header>
          <Divider />
          <VersesContainer>
            {data?.verses.map((verse: any) => (
              <Verses key={verse.number}>
                <span>{verse.number}</span> {verse.text}
              </Verses>
            ))}
          </VersesContainer>
        </HolytextContainer>
      )}
    </Container>
  );
};

export default HolyText;
