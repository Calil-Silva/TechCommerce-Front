import styled, { keyframes } from "styled-components/macro";
import { Link } from "react-router-dom";
import { IoLogoAppleAr } from "react-icons/io5";
import { rotateIn } from "react-animations";
import CheckoutContext from "../../Contexts/CheckoutContext";
import { useContext } from "react";
import BankPayment from "./BankPayment";
import CreditCard from "./CreditCard";
import UserContext from "../../Contexts/UserContext";
import { putProducts } from "../../Services/TechCommer";
import { useHistory } from "react-router";
import { getOrderData, removeOrderData } from "../../Services/orderPersistence";

export default function CheckOut() {
  const {
    groupedPurchases,
    setTypePayment,
    typePayment,
    setPurchases,
    purchases,
    setIsOpenBag,
  } = useContext(CheckoutContext);
  const { userData } = useContext(UserContext);
  const history = useHistory();
  const links = [
    "Condições de uso",
    "Política de privacidade",
    "Ajuda",
    "Cookies",
    "Fale conosco",
  ];
  const ref = "© 1009-2021, TechCommerce, Inc. ou suas afiliadas";
  const price = purchases.reduce(
    (acc, value) => (acc += Number(value.price)),
    0
  );

  function changePaymentType(e) {
    if (e.target.value === "boleto") {
      return setTypePayment("bank_slip");
    }
    return setTypePayment("credit_card");
  }

  function submitOrder(creditcard) {
    if (!userData.token) return alert("Faça o login antes de continuar!");
    const body = [
      groupedPurchases,
      userData,
      { creditCardInfo: creditcard, type: typePayment },
    ];
    delete body.url_image;

    putProducts(body)
      .then(() => {
        alert("Compra concluída!");
        removeOrderData();
        setPurchases(getOrderData());
        history.push("/");
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  }

  return (
    <Body onClick={() => setIsOpenBag(false)}>
      <SectionHeader>
        <BagLink to="/cart">
          <span>{`Veja o que está na sua sacola de $ ${price}`}</span>
        </BagLink>
      </SectionHeader>
      <PaymentContainer>
        <div>
          <Section>
            <h1>Informações de pagamento</h1>
            <form>
              <PaymentTypeContainer>
                <div>
                  <input
                    type="radio"
                    id="html"
                    name="checked"
                    value="boleto"
                    onClick={(e) => changePaymentType(e)}
                  />
                  <label for="html">Boleto</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="credito"
                    name="checked"
                    value="crédito"
                    onClick={(e) => changePaymentType(e)}
                  />
                  <label for="credito">Cartão de crédito</label>
                </div>
              </PaymentTypeContainer>
            </form>
          </Section>
          <PaymentType>
            {typePayment === "bank_slip" ? (
              <BankPayment submitOrder={submitOrder} />
            ) : (
              <CreditCard submitOrder={submitOrder} />
            )}
          </PaymentType>
        </div>
        <Divider />
        <ReviewContainer>
          <ReviewHeader>Resumo da sacola:</ReviewHeader>
          {purchases.map((p, index) => {
            return (
              <Orders key={index}>
                <span>{p.name}</span>
                <span>$ {p.price}</span>
              </Orders>
            );
          })}
          <Divider />
          <Total>
            <span>Total</span>
            <span>$ {price}</span>
          </Total>
          <LogoTech>
            <LogoApple />
            <span>TechCommerce</span>
          </LogoTech>
        </ReviewContainer>
      </PaymentContainer>
      <Links>
        {links.map((link, index) => (
          <a href="http://localhost:3000/signin" key={index}>
            {link}
          </a>
        ))}
      </Links>
      <Info>{ref}</Info>
    </Body>
  );
}

const Body = styled.div`
  margin-top: 60px;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }
`;

const PaymentTypeContainer = styled.div`
  display: flex;
  width: 400px;
  justify-content: space-around;
`;

const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 2rem;
  }

  div {
  }

  input {
    width: 1rem;
    margin: 2rem 5px;
    background-color: red;
  }

  label {
    margin-left: 1rem;
  }

  @media (max-width: 834px) {
    h1 {
      text-align: center;
    }
  }
`;

const BagLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  width: 100vw;
  color: hsl(240, 6%, 53%);
  border-bottom: 1px solid hsl(240, 6%, 83%);
  padding-bottom: 1rem;

  span {
    font-size: 2rem;
    font-weight: bold;
    margin-right: 1rem;

    :hover {
      color: hsl(240, 6%, 73%);
    }
  }

  @media (max-width: 834px) {
    span {
      text-align: center;
    }
  }
`;

const PaymentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: calc(100vw - 5rem);

  @media (max-width: 834px) {
    flex-direction: column;
    width: calc(100vw - 0.5rem);
  }
`;

const ReviewContainer = styled.div`
  width: 40rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 834px) {
    width: 100%;
    margin-bottom: 2rem;
    margin-top: 2rem;
    border-top: none;
  }
`;

const ReviewHeader = styled.div`
  font-size: 2rem;
  margin: 0 auto 7rem;
`;

const Orders = styled.div`
  margin: 2rem;
  display: flex;
  justify-content: space-between;

  &:last-of-type {
    font-weight: bold;
  }
`;

const Divider = styled.div`
  border: 1px solid hsl(240, 6%, 83%);

  @media (max-width: 834px) {
      border-top: none;
    }
  }
`;

const LogoTech = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 2rem;
`;

const rotateAnimation = keyframes`${rotateIn}`;

const LogoApple = styled(IoLogoAppleAr)`
  font-size: 150px;
  animation: 5s infinite linear ${rotateAnimation};
`;

const Links = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 1rem;
  margin: 1rem 2rem;
  border-top: 1px solid hsl(240, 6%, 83%);
  width: 100%;
  padding: 0.5rem;
  a {
    font-size: 0.9rem;
    color: blue;
  }
  @media (max-width: 690px) {
    margin: 0.5rem 1rem;
    a {
      font-size: 0.7rem;
    }
  }
`;

const Info = styled.p`
  text-align: center;
  margin-bottom: 1rem;
`;

const PaymentType = styled.div`
  position: relative;
`;

const Total = styled.div`
  margin: 2rem;
  display: flex;
  justify-content: space-between;
  font-weight: bold;
`;
