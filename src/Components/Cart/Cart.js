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

export default function Cart({ isOpenBag }) {
  const { purchases, setPurchases } = useContext(CheckoutContext);
  console.log(purchases.length);

  const removeIt = (p) => {
    setPurchases(purchases.filter((e, i) => i !== p));
    removeOrderData();
    storeOrderData(purchases);
  };

  return (
    <ToolTipBag isOpenBag={isOpenBag}>
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
    </ToolTipBag>
  );
}

const PatternItems = css`
  padding: 1rem 0;
  display: flex;
  align-items: center;
  &:not(:last-of-type) {
    border-bottom: 1px solid hsla(0, 0%, 75%, 1);
  }
  font-size: 1rem;
  span {
    color: hsla(260, 100%, 68%, 1);
  }
`;

const PatternIcons = css`
  width: 18px;
  height: 18px;
  color: hsla(260, 100%, 68%, 1);
  margin-right: 0.8rem;
`;

const Header = styled.h1`
  font-size: 0.9rem;
  margin: 3rem 0;
  text-align: center;
  display: ${({ purchases }) => (purchases > 0 ? "none" : "inherit")};
`;

const AllPurchases = styled.div`
  ${PatternItems}
  position: relative;
  img {
    height: 3rem;
    width: 3rem;
  }

  span {
    font-size: 0.9rem;
    color: black;
  }
`;

const Divider = styled(Link)`
  ${PatternItems}
`;

const Submit = styled(Link)`
  background-color: hsla(260, 100%, 68%, 1);
  color: #fff;
  height: 2.3rem;
  width: 100%;
  border-radius: 7px;
  font-size: 1rem;
  margin-bottom: 0.2rem;
  display: ${(props) => (props.purchases > 0 ? "flex" : "none")};
  cursor: pointer;
  justify-content: center;
  align-items: center;
`;

const IconBag = styled(BsBag)`
  ${PatternIcons}
`;

const Signin = styled(BsPersonCircle)`
  ${PatternIcons}
`;

const RemoveItem = styled(IoClose)`
  font-size: 15px;
  top: 10px;
  right: 10px;
  cursor: pointer;
  font-weight: 700;
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: red;
  border-radius: 100%;
  color: #fff;
`;

const ToolTipBag = styled.div`
  border-radius: 20px;
  width: 17rem;
  border: 1px solid hsla(0, 0%, 75%, 1);
  overflow-y: scroll;
  background: #fff;
  padding: 0.5rem 1rem;
  position: fixed;
  top: 6vh;
  right: 8vw;
  display: ${({ isOpenBag }) => (isOpenBag ? "initial" : "none")};

  @media (max-width: 834px) {
    position: inherit;
    position: absolute;
    width: 100vw;
    right: 0;
    top: 30px;
    border: none;
    padding: 1rem 1rem;
    border-radius: 0;
  }
`;
