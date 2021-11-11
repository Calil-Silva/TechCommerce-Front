import styled from "styled-components";
import iphone from "../Assets/iphone.jpeg";
import CheckoutContext from "../Contexts/CheckoutContext";
import { useContext, useEffect } from "react";
import { storeOrderData } from "../Services/orderPersistence";

export default function Product() {
  const { purchases, setPurchases } = useContext(CheckoutContext);

  const orderProduct = () => {
    setPurchases([...purchases, { name: "Super Saiyan Iphone", img: iphone }]);
    storeOrderData(purchases);
  };

  useEffect(() => {
    storeOrderData(purchases);
  }, [purchases]);

  return (
    <>
      <Container>
        <div>
          <h1>Super Saiyan Iphone</h1>
          <img src={iphone} alt="iphone 13"></img>
        </div>
        <Close onClick={() => orderProduct()}>
          <span>Comprar</span>
          <svg width="15px" height="10px" viewBox="0 0 13 10">
            <path d="M1,5 L11,5"></path>
            <polyline points="8 1 12 5 8 9"></polyline>
          </svg>
        </Close>
      </Container>
    </>
  );
}

const Container = styled.div`
  height: 10rem;
  width: 20rem;
  position: absolute;
  top: calc(50vh - 5rem);
  border-radius: 10px;
  background: linear-gradient(225deg, #3d3d3d, #494949);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 1rem;

  div {
    width: 100%;
    word-break: break-all;
    margin-bottom: 1rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  h1 {
    color: #fff;
    text-align: center;
    margin-bottom: 5px;
  }

  img {
    height: 4rem;
    width: 3rem;
    border: 2px dotted gold;
  }
`;

const Close = styled.button`
  position: relative;
  margin: auto;
  padding: 10px 18px;
  transition: all 0.2s ease;
  background: none;

  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    border-radius: 10px;
    background-image: linear-gradient(hsl(206, 86%, 63%), hsl(206, 56%, 44%));
    width: 45px;
    height: 40px;
    transition: all 0.3s ease;
  }

  span {
    position: relative;
    font-family: "Ubuntu", sans-serif;
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 0.05em;
    color: #fff;
  }
  svg {
    position: relative;
    top: 0;
    margin-left: 10px;
    fill: none;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke: hsl(206, 86%, 43%);
    stroke-width: 2;
    transform: translateX(-5px);
    transition: all 0.3s ease;
  }

  :hover:before {
    width: 100%;
    background-image: linear-gradient(hsl(206, 86%, 73%), hsl(206, 56%, 54%));
  }

  :hover svg {
    transform: translateX(0);
  }

  :active {
    transform: scale(0.95);
  }
`;
