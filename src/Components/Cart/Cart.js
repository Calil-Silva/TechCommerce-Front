import styled, { css } from "styled-components/macro";
import { BsBag, BsPersonCircle, BsFillPersonXFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import CheckoutContext from "../../Contexts/CheckoutContext";
import { useContext } from "react";
import { IoClose } from "react-icons/io5";
import {
  removeOrderData,
  storeOrderData,
} from "../../Services/orderPersistence";
import { removeUserData } from "../../Services/loginPersistence";
import { useHistory } from "react-router";

export default function Cart({ isOpenBag, userData }) {
  const { purchases, setPurchases } = useContext(CheckoutContext);
  const history = useHistory();

  const difItemsOrder = () => {
    let difItemsArr = [...new Set(purchases.map((p) => p.name))];
    let difItemsArrObj = [];
    let amount = 0;
    for (let i = 0; i < difItemsArr.length; i++) {
      for (let j = 0; j < purchases.length; j++) {
        if (difItemsArr[i] === purchases[i].name) {
          amount++;
        }
      }
      difItemsArrObj.push({
        name: difItemsArr[i],
        amount,
        img: purchases.find((purchase) => purchase.name === difItemsArr[i]).img,
      });
    }
    return difItemsArrObj;
  };

  console.log(difItemsOrder());

  const removeItem = (event, index) => {
    event.stopPropagation();
    setPurchases(purchases.filter((_, i) => i !== index));
    removeOrderData();
    storeOrderData(purchases);
  };

  const SigOut = () => {
    removeUserData();
    history.push("/");
  };

  return (
    <ToolTipBag isOpenBag={isOpenBag}>
      <Header purchases={purchases.length}>Sua sacola está vazia</Header>
      {difItemsOrder().map((p, i) => {
        return (
          <AllPurchases>
            <img src={p.img} alt="" />
            <div>
              <span>{p.name}</span>
              <span>x{p.amount}</span>
            </div>
            <Remove onClick={(e) => removeItem(e, i)} />
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
      <Divider to="/" userData={userData} onClick={SigOut}>
        <Signout />
        <span>Sair</span>
      </Divider>
    </ToolTipBag>
  );
}

const PatternItems = css`
  padding: 1rem 0;
  display: flex;
  align-items: center;
  font-size: 1rem;

  &:not(:last-of-type) {
    border-bottom: 1px solid hsla(0, 0%, 75%, 1);
  }

  &:nth-last-child(2) {
    border-bottom: ${({ userData }) => (userData ? "initial" : "none")};
  }

  span {
    color: hsla(260, 100%, 68%, 1);
  }

  @media (max-width: 834px) {
    padding: 1rem;
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

  div {
    display: flex;
    flex-direction: column;
  }

  span {
    font-size: 0.9rem;
    color: black;

    &:last-child {
      color: hsla(0, 0%, 55%, 1);
    }
  }
`;

const Divider = styled(Link)`
  ${PatternItems}

  &:last-child {
    display: ${({ userData }) => (userData ? "" : "none")};
  }
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

const Signout = styled(BsFillPersonXFill)`
  ${PatternIcons}
`;

const Remove = styled(IoClose)`
  font-size: 15px;
  top: 10px;
  right: 10px;
  cursor: pointer;
  font-weight: 700;
  position: absolute;
  top: 8px;
  right: 20px;
  background-color: red;
  border-radius: 5px;
  color: #fff;
`;

const ToolTipBag = styled.div`
  border-radius: 20px;
  width: 17rem;
  border: 1px solid hsla(0, 0%, 75%, 1);
  overflow-y: scroll;
  background: #fff;
  padding: 0.5rem 1rem;
  position: sticky;
  right: 0;
  display: ${({ isOpenBag }) => (isOpenBag ? "initial" : "none")};
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
  z-index: 100;

  @media (max-width: 834px) {
    width: 100vw;
    border-radius: 0;
    border: none;
    left: 0;
    /* height: 100vh;
    background-color: #000; */
    border-bottom: 1px solid hsla(0, 0%, 75%, 1);
  }
`;
