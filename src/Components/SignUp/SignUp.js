import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { country_arr } from "../../Data/countris";
import { SiHandshake } from "react-icons/si";
import CountriesList from "./CountriesList";
import { postSignup } from "../../Services/TechCommer";
import {
  validateInputs,
  comparePasswords,
  validEmail,
} from "../../schemas/userValidations";

export default function SignUp() {
  const [openContries, setOpenCantries] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [disableSubmit, setDisableSubmit] = useState(false);
  const userData = {
    name: `${name} ${surname}`,
    selectedCountry,
    birthDate: new Date(birthDate.split("-").join("/")),
    email,
    password,
    confirmedPassword,
  };
  const history = useHistory();

  function handleSignupSubmit() {
    setDisableSubmit(true);
    if (!validateInputs(userData)) {
      setDisableSubmit(false);
      return;
    }

    const invalidCredentials =
      !comparePasswords(password, confirmedPassword) || !validEmail(email);

    if (invalidCredentials) {
      setDisableSubmit(false);
      return;
    }

    postSignup(userData)
      .then((res) => {
        alert(res.data.message);
        history.push("/signin");
      })
      .catch((err) => {
        setDisableSubmit(false);
        if (err.response.status === 406) {
          alert("Preencha o formulaŕio corretamente");
        } else {
          alert("Ocorreu um erro inesperado, tente novamente mais tarde");
        }
      });
  }

  return (
    <Body>
      <HeaderContainer>
        <HeaderWrapper>
          <Link to="/">
            <h1>ID TechCommerce</h1>
          </Link>
          <LinksWrapper>
            <PageLInk to="/signin">Iniciar sessão</PageLInk>
            <PageLInk to="/signup">Crie seu ID</PageLInk>
            <PageLInk to="/signup">Perguntas frequentes</PageLInk>
          </LinksWrapper>
        </HeaderWrapper>
      </HeaderContainer>
      <Title>Crie seu ID TechCommerce</Title>
      <SubTitle>
        Um ID TechCommerce é o que você precisa para acessar todos os serviços
        da TechCommerce.
      </SubTitle>
      <SubTitle>
        <span>Já tem um ID TechCommerce? &nbsp;</span>
        <Link to="signin">
          <span>Entrar</span>
        </Link>
      </SubTitle>
      <OuterDiv>
        <Container>
          <Form>
            <Name>
              <input
                placeholder="Nome"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                placeholder="Sobrenome"
                type="text"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
              />
            </Name>
            <LocationSection>
              <span>PAÍS/REGIÃO</span>
              <input
                placeholder="País"
                type="text"
                onFocus={() => setOpenCantries(true)}
                value={selectedCountry}
              />
              <span>Data de nascimento</span>
              <input
                placeholder="Data de nascimento"
                type="date"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
              />
            </LocationSection>
          </Form>
        </Container>
        <Container>
          <LoginSection>
            <input
              placeholder="nome@exemplo.com"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span>Este será o seu novo ID TechCommerce</span>
            <input
              placeholder="Senha"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              placeholder="Confirmar senha"
              type="password"
              value={confirmedPassword}
              onChange={(e) => setConfirmedPassword(e.target.value)}
            />
          </LoginSection>
        </Container>
        <SubmitSection>
          <SiHandshake style={{ fontSize: "3rem" }} />
          <span>
            As informações do seu ID Apple são usadas para permitir que você
            inicie sessão de forma segura e acesse seus dados. A Apple registra
            determinados dados de uso para fins de segurança, suporte e geração
            de relatórios. Veja como os seus dados são gerenciados.
          </span>
          <input
            type="submit"
            value="Continuar"
            disabled={disableSubmit}
            onClick={() => handleSignupSubmit()}
          />
        </SubmitSection>
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
    </Body>
  );
}

const Body = styled.div`
  position: relative;
  top: 44px;
`;

const HeaderContainer = styled.div`
  height: 3.5rem;
  width: 100%;
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
    color: black;
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
  padding: 0 1rem;
  font-size: 0.9rem;

  span:last-child {
    color: hsl(241, 100%, 50%);
    :hover {
      cursor: pointer;
    }
  }
`;

const OuterDiv = styled.div`
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid rgb(231, 231, 231);
  align-items: center;
`;

const Form = styled.div`
  input {
    height: 3.5rem;
    max-width: 13rem;
    width: calc(100vw / 2);
    border-radius: 5px;
    border: 1px solid rgb(219, 219, 219);
    margin: 1rem 0 2.5rem;
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
  justify-content: space-between;

  @media (max-width: 600px) {
    flex-direction: column;

    input {
      width: calc(100vw - 2rem);
      max-width: 27rem;

      &:last-child {
        margin: -1.5rem 0 2rem;
      }
    }
  }
`;

const LocationSection = styled.div`
  display: flex;
  flex-direction: column;

  span {
    color: rgb(119, 119, 119);
    font-size: 0.8rem;
    font-weight: bold;
  }

  input {
    margin: 0.5rem 0 1rem;
    width: calc(100vw - 2rem);
    max-width: 27rem;

    &:last-child {
      margin-top: 0.5rem;
      margin-bottom: 2rem;
    }
  }
`;

const CountriesContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

const CounstriesList = styled.ul`
  display: ${({ openContries }) => (!openContries ? "none" : "initial")};
  width: calc(100vw - 2rem);
  max-width: 25rem;
  height: calc(100% - 1rem);
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

const LoginSection = styled.div`
  display: flex;
  flex-direction: column;
  input {
    width: calc(100vw - 2rem);
    max-width: 27rem;
    height: 3.5rem;
    border-radius: 5px;
    border: 1px solid rgb(219, 219, 219);
    margin: 1rem 0 0;
    padding-left: 1rem;
    font-size: 1rem;
    ::placeholder {
      color: rgb(129, 129, 129);
      font-size: 1rem;
    }

    &:first-child {
      margin-top: 2rem;
      margin-bottom: 0.5rem;
    }

    &:last-child {
      margin-bottom: 2rem;
    }
  }

  span {
    color: rgb(119, 119, 119);
    font-size: 0.9rem;
  }
`;

const SubmitSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem 0 1rem;
  span {
    max-width: 27rem;
    text-align: center;
    color: rgb(119, 119, 119);
    font-size: 0.8rem;
    margin: 1rem;
  }

  input {
    height: 2.2rem;
    width: 7rem;
    border-radius: 5px;
    border: none;
    background-image: linear-gradient(hsl(206, 86%, 63%), hsl(206, 56%, 44%));
    font-size: 1rem;
    cursor: pointer;
    color: white;
    :hover {
      background-image: linear-gradient(hsl(206, 86%, 73%), hsl(206, 56%, 54%));
    }
  }
`;
