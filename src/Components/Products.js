import styled from "styled-components";
import Product from "./Product";

export default function Products() {
  return (
    <Container>
      <Product />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
`;
