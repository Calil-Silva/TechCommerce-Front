import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { country_arr } from "../../Data/countris";
import { BsCheck } from "react-icons/bs";
import CountriesList from "./CountriesList";

export default function SignUp() {
  const [openContries, setOpenCantries] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("");

  console.log(selectedCountry);

  return (
    <>
      <HeaderContainer>
        <HeaderWrapper>
          <h1>ID TechCommerce</h1>
          <LinksWrapper>
            <PageLInk to>Iniciar sessão</PageLInk>
            <PageLInk>Crie seu ID TechCommerce</PageLInk>
            <PageLInk>Perguntas frequentes</PageLInk>
          </LinksWrapper>
        </HeaderWrapper>
      </HeaderContainer>
      <Title>Crie seu ID TechCommerce</Title>
      <SubTitle>
        Um ID TechCommerce é o que você precisa para acessar todos os serviços
        da TechCommerce.
      </SubTitle>
      <SubTitle>
        Já tem um ID TechCommerce? &nbsp;
        <a href>Encontre-o aqui</a>
      </SubTitle>
      <OuterDiv>
        <Container>
          <Form>
            <Name>
              <input placeholder="Nome" type="text" />
              <input placeholder="Sobrenome" type="text" />
            </Name>

            <Location>
              <span>PAÍS/REGIÃO</span>
              <input
                placeholder="País"
                type="text"
                onFocus={() => setOpenCantries(true)}
                value={selectedCountry}
              />
              <input placeholder="Data de nascimento" type="date" />
            </Location>
          </Form>
        </Container>
        <CountriesContainer>
          <CounstriesList openContries={openContries}>
            {country_arr.map((country, index) => (
              <CountriesList
                country={country}
                key={index}
                openContries={openContries}
                selectedCountry={selectedCountry}
                setSelectedCountry={setSelectedCountry}
                setOpenCantries={setOpenCantries}
              />
            ))}
          </CounstriesList>
        </CountriesContainer>
      </OuterDiv>
    </>
  );
}

const HeaderContainer = styled.div`
  height: 3.5rem;
  width: 100vw;
  border-bottom: 1px solid rgb(231, 231, 231);
`;

const HeaderWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 15.5rem;

  h1 {
    font-size: 1.5rem;
  }

  @media (max-width: 1300px) {
    margin: 0 2rem;
  }

  @media (max-width: 750px) {
    justify-content: center;
  }
`;

const LinksWrapper = styled.div`
  column-gap: 1rem;
  margin-top: 0.3rem;
  @media (max-width: 750px) {
    display: none;
  }
`;

const PageLInk = styled(Link)`
  margin-right: 1rem;
  font-size: 0.8rem;
  color: hsl(71, 10%, 21%);
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

  a {
    color: hsl(241, 100%, 50%);
  }
`;

const OuterDiv = styled.div`
  width: 100vw;
  height: 100%;
`;

const Container = styled.div`
  margin: 0 15rem;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid rgb(231, 231, 231);
`;

const Form = styled.form`
  input {
    height: 3.5rem;
    width: 13rem;
    border-radius: 5px;
    border: 1px solid rgb(219, 219, 219);
    margin-bottom: 2.5rem;
    margin-top: 1rem;
    padding-left: 1rem;
    font-size: 1rem;
    ::placeholder {
      color: rgb(129, 129, 129);
      font-size: 1rem;
    }
  }
`;

const Name = styled.div`
  display: flex;
  column-gap: 1rem;
`;

const Location = styled.div`
  display: flex;
  flex-direction: column;

  span {
    color: rgb(119, 119, 119);
    font-size: 0.8rem;
    font-weight: bold;
  }

  input {
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    width: 27rem;

    &:last-child {
      margin-top: 0;
      margin-bottom: 2rem;
    }
  }
`;

const CountriesContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

const CounstriesList = styled.ul`
  display: ${({ openContries }) => (!openContries ? "none" : "initial")};
  width: 25rem;
  height: 100vh;
  background-color: yellow;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: 0.5rem auto;
  background-color: rgba(51, 51, 51, 80%);
  border-radius: 8px;
  backdrop-filter: blur(15px);
  overflow-y: scroll;
  scroll-padding-top: auto;
  padding: 1.5rem 0;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
  box-shadow: 0 0 1em black;
  border: 0.1px solid white;
`;
