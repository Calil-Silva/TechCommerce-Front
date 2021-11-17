import styled, { keyframes } from "styled-components";
import { GrDocumentPdf } from "react-icons/gr";
import { flipInY } from "react-animations";

export default function BankPayment({ submitOrder }) {
  const boleto = `
          Informações pessoais:
          Nome: fulano da sila
          CPF: 000.000.000-00
          RG: 00.000.000-0
          
          Endereço:
          Rua 1
          Bairro: Zero
          Estado: X

          Informações de cobrança:
          códido de barras: 00000000000000000000000000
          data de vencimento: 00/00/00
          valor: R$ 00,00
  `;
  return (
    <BankContainer>
      <h1>Boleto bancário</h1>
      <BankBody>{boleto}</BankBody>
      <DownloadContainer onClick={() => submitOrder()}>
        <Download />
        <h1>Download</h1>
      </DownloadContainer>
    </BankContainer>
  );
}

const flipAnimation = keyframes`${flipInY}`;

const BankContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 25rem;
  height: 30rem;
  border: 1px solid hsl(240, 6%, 83%);
  margin: auto auto 2rem;
  border-radius: 15px;
  -webkit-box-shadow: -1px 8px 15px 0px rgba(0, 0, 0, 0.44);
  -moz-box-shadow: -1px 8px 15px 0px rgba(0, 0, 0, 0.44);
  box-shadow: -1px 8px 15px 0px rgba(0, 0, 0, 0.44);
  backdrop-filter: blur(15px);
  background: hsla(240, 6%, 83%, 0.3);
  animation: 1s linear ${flipAnimation};
  position: relative;
  @media (max-width: 834px) {
    width: 100%;
    margin-bottom: 2rem;
    border: none;
  }
`;

const DownloadContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  backdrop-filter: blur(15px);
  background: hsla(240, 6%, 83%, 0.3);
  width: 100%;
  height: 100%;
  border-radius: 15px;
`;

const Download = styled(GrDocumentPdf)`
  font-size: 30px;
  margin-bottom: 1rem;
`;

const BankBody = styled.div`
  white-space: pre-wrap;
`;
