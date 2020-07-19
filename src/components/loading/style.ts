import styled from "styled-components";

export const LoadingContainer = styled.div`
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoadingContent = styled.div`
display:flex;
flex-direction: column;
align-items:center;
justify-content:center;
color:${({theme})=>theme.colors.text};
svg{
    margin-bottom: 15px;
    animation: bibleJumping infinite 2s .5s;
}
h1{
    font-size: 25px;
}
@keyframes bibleJumping{
  100%,0%{
      transform: translateY(0px);
  }
  50%{
    transform: translateY(-10px);
  }
}
`