import styled, { css } from "styled-components/macro";
import { BsBag, BsPersonCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import CheckoutContext from "../../Contexts/CheckoutContext";
import { useContext } from "react";
import { IoClose } from "react-icons/io5";
import {
  removeOrderData,
  storeOrderData,
} from "../../Services/orderPersistence";

export default function Cart() {
  const { purchases, setPurchases } = useContext(CheckoutContext);

  const removeIt = (p) => {
    setPurchases(purchases.filter((e, i) => i !== p));
    removeOrderData();
    storeOrderData(purchases);
  };

  return (
    <>
      <Header purchases={purchases.length}>Sua sacola está vazia</Header>
      {purchases.map((p, i) => {
        return (
          <AllPurchases>
            <img src={p.img} alt="" />
            <span>{p.name}</span>
            <RemoveItem onClick={() => removeIt(i)} />
          </AllPurchases>
        );
      })}
      <Submit purchases={purchases.length} to="/checkout">
        Finalizar
      </Submit>
      <Divider to="/">
        <IconBag />
        <span>Sacola</span>
      </Divider>
      <Divider to="/signin">
        <Signin />
        <span>Entrar</span>
      </Divider>
    </>
  );
}

const PatternItems = css`
  padding: 1rem 0;
  display: flex;
  align-items: center;
  &:not(:last-of-type) {
    border-bottom: 1px solid hsla(0, 0%, 75%, 1);
  }
  span {
    color: hsla(260, 100%, 68%, 1);
  }
  position: relative;
`;

const PatternIcons = css`
  width: 18px;
  height: 18px;
  color: hsla(260, 100%, 68%, 1);
  margin-right: 0.8rem;
`;

const Header = styled.h1`
  font-size: 0.8rem;
  margin: 3rem 0;
  display: ${({ purchases }) => (purchases > 0 ? "none" : "inherit")};
`;

const AllPurchases = styled.div`
  ${PatternItems}
  img {
    height: 4rem;
    width: 3rem;
  }
`;

const Divider = styled(Link)`
  ${PatternItems}
`;

const Submit = styled(Link)`
  background-color: hsla(260, 100%, 68%, 1);
  color: #fff;
  height: 2rem;
  width: 100%;
  border-radius: 7px;
  font-size: 1rem;
  margin-bottom: 0.2rem;
  display: ${({ purchases }) => (purchases > 0 ? "inherit" : "none")};
  cursor: pointer;
  padding: 0.5rem;
`;

const IconBag = styled(BsBag)`
  ${PatternIcons}
`;

const Signin = styled(BsPersonCircle)`
  ${PatternIcons}
`;

const RemoveItem = styled(IoClose)`
  font-size: 15px;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  font-weight: 700;
`;
