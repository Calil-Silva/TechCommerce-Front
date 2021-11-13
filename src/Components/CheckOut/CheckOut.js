import styled, { css } from "styled-components/macro";
import CreditCardForm from "./CreditCard";

export default function CheckOut() {
  return (
    <Body>
      <section>
        <h1>Veja o que está na sua sacola R$ 41.497,00.</h1>
        <span>Frete grátis em todos os pedidos</span>
        <button>Veja o que está na sua sacola</button>
      </section>
      <section>
        <h1>Informações de pagamento</h1>
        <span>Escolha o meio de pagamento</span>
        <form>
          <input list="method"></input>
          <datalist id="method">
            <option value="PIX" />
            <option value="Cartão de crédito" />
          </datalist>
          <CreditCardForm />
        </form>
      </section>
    </Body>
  );
}

const Body = styled.div`
  margin-top: 44px;
`;
