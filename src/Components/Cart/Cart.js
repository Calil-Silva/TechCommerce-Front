import styled from "styled-components";

export default function Cart() {
  return (
    <div>
      <Container>
        <Header>Sua sacola está vazia</Header>
      </Container>
    </div>
  );
}

const Container = styled.div``;

const Header = styled.h1`
  font-size: 0.7rem;
`;
