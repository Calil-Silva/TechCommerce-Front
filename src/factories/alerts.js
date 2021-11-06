import styled from "styled-components";
import { validateEmail } from "../schemas/userValidations";

const handlePasswordAlert = (password, sendStatus) => {
  if (!password && sendStatus) {
    return <Alert>A senha é obrigatória.</Alert>;
  }
};

const handleEmailAlert = (email, sendStatus) => {
  const shouldAlertUser = !validateEmail(email);

  if (shouldAlertUser && sendStatus) {
    return <Alert>Insira um e-mail válido!</Alert>;
  }
};

const Alert = styled.span`
  color: hsl(0, 77%, 56%);
  margin-bottom: 0.5rem;
  font-size: 0.6rem;
  margin-left: 0.6rem;
`;

export { handlePasswordAlert, handleEmailAlert };
