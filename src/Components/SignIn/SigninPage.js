import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { validateEmail } from "../../schemas/userValidations";
import { storeUserDAta } from "../../Services/loginPersistence";
import { postLogin } from "../../Services/TechCommer";
import { handleEmailAlert, handlePasswordAlert } from "../../factories/alerts";

export default function SigninPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [sendStatus, setSendStatus] = useState(false);

  const handleSubmitLogin = (e, email, password) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setSendStatus(true);
      return;
    }

    postLogin({ email, password })
      .then((res) => storeUserDAta(res.data))
      .catch((err) => alert(err.response.data.massage));
  };

  return (
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
          onClick={(e) => handleSubmitLogin(e)}
        />
        <Helper>
          <Link to="/forgetPassword">
            <p>Esqueceu sua senha?</p>
          </Link>
          <Link to="/register">
            <p>Ainda não tem uma conta? Crie agora.</p>
          </Link>
        </Helper>
      </Form>
    </FormContainer>
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
    height: 2.3rem;
    max-width: 15rem;
    border-radius: 8px;
    border: 1px solid hsl(240, 6%, 83%);
    padding-left: 1rem;

    &:last-child {
      margin-bottom: 2rem;
    }
    ::placeholder {
      font-size: 0.75rem;
      color: hsl(240, 2%, 54%);
    }
  }
`;

const Submit = styled.input`
  margin-bottom: 0.5rem;
  width: 100%;
  max-width: 15rem;
  height: 2.3rem;
  border-radius: 8px;
  border: none;
  background-color: hsl(242, 60%, 59%);
  color: #fff;

  :hover {
    background-color: hsl(242, 60%, 69%);
    box-shadow: 0 0 1em red;
    cursor: pointer;
  }
`;

const Helper = styled.div`
  p {
    width: 100%;
    margin-bottom: 0.5rem;
    max-width: 15rem;
    font-size: 0.7rem;
    margin-left: 0.6rem;
    :hover {
      color: hsl(240, 2%, 54%);
      cursor: pointer;
    }
  }
`;
