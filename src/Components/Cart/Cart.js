import styled from "styled-components";
import { BsBag, BsPersonCircle } from "react-icons/bs";
import { BrowserRouter, Link } from "react-router-dom";
import CheckoutContext from "../../Contexts/CheckoutContext";
import { useContext } from "react";

export default function Cart() {
  const { purchases, setPurchases } = useContext(CheckoutContext);

  return (
    <>
      <Container>
        <Header>Sua sacola está vazia</Header>
        <Submit>Finalizar</Submit>
        <BrowserRouter>
          <Divider to="/">
            <IconBag />
            <span>Sacola</span>
          </Divider>
          <Divider to="/signin">
            <Signin />
            <span>Entrar</span>
          </Divider>
        </BrowserRouter>
      </Container>
    </>
  );
}

const Container = styled.div``;

const Header = styled.h1`
  font-size: 0.8rem;
  margin: 3rem 0;
`;

const Divider = styled(Link)`
  border-bottom: 1px solid hsla(0, 0%, 75%, 1);
  padding: 1rem 0;
  display: flex;
  align-items: center;

  span {
    color: hsla(260, 100%, 68%, 1);
  }

  &:last-child {
    border-bottom: none;
  }
`;

const Submit = styled.button`
  background-color: hsla(260, 100%, 68%, 1);
  color: #fff;
  height: 2rem;
  width: 100%;
  border-radius: 7px;
  font-size: 1rem;
  margin-bottom: 0.2rem;
`;

const IconBag = styled(BsBag)`
  width: 18px;
  height: 18px;
  color: hsla(260, 100%, 68%, 1);
  margin-right: 0.8rem;
`;

const Signin = styled(BsPersonCircle)`
  width: 18px;
  height: 18px;
  color: hsla(260, 100%, 68%, 1);
  margin-right: 0.8rem;
`;
