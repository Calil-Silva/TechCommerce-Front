import styled, { css, keyframes } from "styled-components/macro";
import CreditCardForm from "./CreditCard";
import { Link } from "react-router-dom";
import { IoLogoAppleAr } from "react-icons/io5";
import { rotateIn } from "react-animations";

export default function CheckOut() {
  return (
    <Body>
      <SectionHeader>
        <BagLink to="/cart">
          <span>Veja o que está na sua sacola R$ 41.497,00.</span>
        </BagLink>
      </SectionHeader>
      <PaymentContainer>
        <div>
          <Section>
            <h1>Informações de pagamento</h1>
            <form>
              <input
                list="method"
                type="text"
                placeholder="Escolha o meio de pagamento"
              />
              <datalist id="method">
                <option value="PIX" />
                <option value="Cartão de crédito" />
              </datalist>
            </form>
          </Section>
          <CreditCardForm />
        </div>
        <Divider />
        <ReviewContainer>
          <ReviewHeader>Resumo da sacola:</ReviewHeader>
          <Orders>
            <span>tablet</span>
            <span>R$ 150000</span>
          </Orders>
          <Orders>
            <span>Celular</span>
            <span>R$ 150000</span>
          </Orders>
          <Orders>
            <span>Relógio</span>
            <span>R$ 150000</span>
          </Orders>
          <div></div>
          <Orders>
            <span>Frete</span>
            <span>R$ 150000</span>
          </Orders>
          <Divider />
          <Orders>
            <span>Total</span>
            <span>R$ 150000</span>
          </Orders>
          <LogoTech>
            <LogoApple />
            <span>TechCommerce</span>
          </LogoTech>
        </ReviewContainer>
      </PaymentContainer>
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

const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 2rem;
  }

  input {
    width: 18rem;
    margin: 2rem 0 3rem;
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

  @media (max-width: 834px) {
    width: 100%;
    margin-bottom: 2rem;
    margin-top: 2rem;
    border-top: none;
  }
`;

const ReviewHeader = styled.div`
  font-size: 2rem;
  margin: 0 auto;
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
  margin: 1.5rem 2rem;
  a {
    font-size: 0.9rem;
    color: blue;
  }
  @media (max-width: 690px) {
    margin: 1.5rem 1rem;
    a {
      font-size: 0.7rem;
    }
  }
`;

const Info = styled.p`
  text-align: center;
`;
