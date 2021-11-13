import { Link } from "react-router-dom";
import styled from "styled-components";
import { useContext } from "react";
import CheckoutContext from "../../Contexts/CheckoutContext";
import UserContext from "../../Contexts/UserContext";

export default function ReviewCart() {
  const { setIsOpenBag, purchases } = useContext(CheckoutContext);
  const { userOnline } = useContext(UserContext);
  const links = [
    "Condições de uso",
    "Política de privacidade",
    "Ajuda",
    "Cookies",
    "Fale conosco",
  ];
  const ref = "© 1009-2021, TechCommerce, Inc. ou suas afiliadas";

  const difItemsOrder = () => {
    let difItemsArr = [...new Set(purchases.map((p) => p.name))];
    let difItemsArrObj = [];
    for (let i = 0; i < difItemsArr.length; i++) {
      let amount = 0;
      for (let j = 0; j < purchases.length; j++) {
        if (difItemsArr[i] === purchases[j].name && amount <= 3) {
          amount++;
        }
      }
      difItemsArrObj.push({
        name: difItemsArr[i],
        amount,
        url_image: purchases.find(
          (purchase) => purchase.name === difItemsArr[i]
        ).url_image,
        description: purchases
          .find((purchase) => purchase.name === difItemsArr[i])
          .describe.split("|"),
      });
    }
    return difItemsArrObj;
  };

  return (
    <Body onClick={() => setIsOpenBag(false)}>
      <div>
        <TitleContainer>
          <Title>Resumo dos pedidos</Title>
          <SubTitle>
            O prazo de entrega dos produtos é de até um dia útil após a
            confirmação do pagamento.
          </SubTitle>
          {!userOnline && (
            <SubTitle>
              <span>
                Entre com seu ID TechCommerce para finalizar a compra? &nbsp;
              </span>
              <Link to="signin">
                <span>Entrar</span>
              </Link>
            </SubTitle>
          )}
        </TitleContainer>
        <OuterDivProducts>
          {purchases.length === 0 ? (
            <AuxDescription>
              Você ainda não adicionou nada ao carrinho.
            </AuxDescription>
          ) : (
            ""
          )}
          {difItemsOrder().map((p, i) => {
            return (
              <ProductContainer key={i}>
                <Product>
                  <h1>
                    {p.name}&nbsp;({p.amount}x)
                  </h1>
                  <div>
                    <img src={p.url_image} alt={p.name} />
                    <DescriptionContainer>
                      {p.description.map((d, i) => (
                        <p key={i}>{d}</p>
                      ))}
                    </DescriptionContainer>
                  </div>
                </Product>
              </ProductContainer>
            );
          })}
        </OuterDivProducts>
      </div>

      <div>
        <Links>
          {links.map((link, index) => (
            <a href="http://localhost:3000/signin" key={index}>
              {link}
            </a>
          ))}
        </Links>
        <Info>{ref}</Info>
      </div>
    </Body>
  );
}

const Body = styled.div`
  position: relative;
  height: calc(100vh - 5rem);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin-top: 2.5rem;
  margin-bottom: 1rem;
`;

const SubTitle = styled.div`
  text-align: center;
  margin-bottom: 0.5rem;
  padding: 0 1rem;
  font-size: 0.9rem;

  span:last-child {
    color: hsl(241, 100%, 50%);
    :hover {
      cursor: pointer;
    }
  }
`;

const ProductContainer = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid rgb(231, 231, 231);
  align-items: center;
  margin-top: 1rem;
`;

const Product = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 1rem auto 0;
  width: 40rem;

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      height: 8rem;
      width: 8rem;
      object-fit: contain;
    }
  }
  h1 {
    font-weight: bold;
  }

  @media (max-width: 834px) {
    width: 100vw;
  }
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
  margin-bottom: 1rem;
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  p {
    max-width: 100%;
    color: rgb(119, 119, 119);
    font-size: 1.2rem;
    text-align: center;
    margin: 0.25rem;
  }
`;

const AuxDescription = styled.div`
  text-align: center;
  font-size: 1.2rem;
  font-weight: bold;
  padding: 2rem;
  margin-top: 1rem;
  color: blue;
`;

const OuterDivProducts = styled.div`
  width: 50rem;
  border: 1px solid rgb(231, 231, 231);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;

  @media (max-width: 834px) {
    width: 100vw;
    border-radius: 0;
    border: none;
  }
`;

const TitleContainer = styled.div`
  margin-bottom: 2rem;
`;
