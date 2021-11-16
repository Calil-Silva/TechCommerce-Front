import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { validateEmail, validatePassword } from "../../schemas/userValidations";
import { storeUserDAta } from "../../Services/loginPersistence";
import { postLogin } from "../../Services/TechCommer";
import { handleEmailAlert, handlePasswordAlert } from "../../factories/alerts";
import { useHistory } from "react-router-dom";
import CheckoutContext from "../../Contexts/CheckoutContext";
import { useContext } from "react";
import UserContext from "../../Contexts/UserContext";
import { storeOrderData } from "../../Services/orderPersistence";

export default function SigninPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [sendStatus, setSendStatus] = useState(false);
  const [disableSubmit, setDisableSubmit] = useState(false);
  const { setIsOpenBag, purchases } = useContext(CheckoutContext);
  const { setUserOnline, userOnline, register, setRegister } =
    useContext(UserContext);
  const history = useHistory();

  const userData = {
    email,
    password,
    purchases,
  };
  const links = [
    "Condições de uso",
    "Política de privacidade",
    "Ajuda",
    "Cookies",
    "Fale conosco",
  ];
  const ref = "© 1009-2021, TechCommerce, Inc. ou suas afiliadas";

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    setDisableSubmit(true);

    if (!validateEmail(email) || !validatePassword(password)) {
      setSendStatus(true);
      return;
    }

    postLogin(userData)
      .then((res) => {
        storeUserDAta(res.data);
        setDisableSubmit(false);
        setUserOnline(!userOnline);

        if (register) {
          setRegister(!register);
          history.push("/");
          return;
        }
        history.goBack();
      })
      .catch((err) => {
        alert(err.response.data.message);
        setDisableSubmit(false);
      });
  };

  return (
    <div onClick={() => setIsOpenBag(false)}>
      <FormContainer>
        <Form>
          <Header>Por gentileza, insira seus dados nos campos abaixo.</Header>
          <Inputs>
            <input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {handleEmailAlert(email, sendStatus)}
            <input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {handlePasswordAlert(password, sendStatus)}
          </Inputs>
          <span></span>
          <Submit
            type="submit"
            value="Entrar"
            disabled={disableSubmit}
            disableSubmit={disableSubmit}
            onClick={(e) => handleSubmitLogin(e)}
          />
          <Helper>
            <Link to="/forgetPassword">
              <p>Esqueceu sua senha?</p>
            </Link>
            <Link to="/signup">
              <p>Ainda não tem uma conta? Crie agora.</p>
            </Link>
          </Helper>
        </Form>
      </FormContainer>
      <Divider />
      <Links>
        {links.map((link, index) => (
          <a href="http://localhost:3000/signin" key={index}>
            {link}
          </a>
        ))}
      </Links>
      <Info>{ref}</Info>
    </div>
  );
}

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 25rem;

  @media (max-width: 1000px) {
    margin: 0;
  }
`;

const Form = styled.form`
  margin: 5rem auto;
`;

const Header = styled.h1`
  display: inline-block;
  font-weight: bold;
  margin-bottom: 2rem;

  @media (max-width: 1000px) {
    width: 100%;
    max-width: 15rem;
    word-wrap: break-word;
    -webkit-hyphens: auto;
    -ms-hyphens: auto;
    hyphens: auto;
  }
`;

const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  input {
    margin-bottom: 0.5rem;
    width: 100%;
    height: 3rem;
    max-width: 25rem;
    border-radius: 8px;
    border: 1px solid hsl(240, 6%, 83%);
    padding-left: 1rem;

    &:last-child {
      margin-bottom: 2rem;
    }
    ::placeholder {
      font-size: 0.9rem;
      color: hsl(240, 2%, 54%);
    }
  }
`;

const Submit = styled.input`
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  width: 100%;
  max-width: 25rem;
  height: 3rem;
  border-radius: 8px;
  border: none;
  background-color: hsl(242, 60%, 59%);
  color: #fff;

  :hover {
    background-color: ${({ disableSubmit }) =>
      disableSubmit ? "hsl(242, 60%, 80%)" : "hsl(242, 60%, 69%)"};
    box-shadow: 0 0 1em red;
    cursor: pointer;
  }
`;

const Helper = styled.div`
  p {
    width: 100%;
    margin-bottom: 0.5rem;
    max-width: 25rem;
    font-size: 0.9rem;
    margin-left: 0.6rem;
    color: blue;
    :hover {
      color: hsl(240, 2%, 54%);
      cursor: pointer;
    }
  }
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  box-shadow: 0 0.1rem 0.2rem black;
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
