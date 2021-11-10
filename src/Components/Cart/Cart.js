import styled from "styled-components";

export default function Cart() {
  return (
    <body>
      <Container>
        <Header></Header>
      </Container>
    </body>
  );
}

const Container = styled.div`
  height: 20rem;
  width: 17rem;
  border-radius: 20px;
  top: 50px;
  border: 1px solid hsla(0, 0%, 75%, 1);
  display: flex;
  justify-content: center;
  background-color: #fff;
  position: absolute;
  right: 7rem;

  @media (max-width: 1300px) {
    width: 100vw;
  }
`;

const Header = styled.h1`
  font-size: 0.7rem;
`;
