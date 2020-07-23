import React from "react";
import { Container, BackButton } from "../../components";
import { NoMatchContainer, Text } from "./style";
import { Lottie, useLottie } from "react-lottie-hook";
import animationLight from "../../assets/404_LIGHT.json";
import animationDark from "../../assets/404_DARK.json";
import { useSelector } from "react-redux";

const NoMatch = () => {
  const { darkMode }: any = useSelector((state: any) => state.utils);

  const [lottieRef] = useLottie({
    renderer: "canvas",
    loop: true,
    rendererSettings: {
      progressiveLoad: true,
    },
    animationData: darkMode ? animationDark : animationLight,
  });

  return (
    <Container>
      <NoMatchContainer>
        <Lottie lottieRef={lottieRef} width={350} height={350} />

        <Text>
          O Conteudo que você está buscando não foi encontrado ou ocorreu algum
          erro, pedimos desculpas pelo incoveniente{" "}
          <span role="img" aria-label="sad emoji">
            😕
          </span>
          , por favor volte para "livros" e tente novamente.
        </Text>
        <BackButton to="/books" label="Voltar para livros" />
      </NoMatchContainer>
    </Container>
  );
};

export default NoMatch;
