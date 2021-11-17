import { Button, Form, Alert, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import useForm from "./useForm";
import "./creditCardForm.css";
import styled, { keyframes } from "styled-components";
import { flipInY } from "react-animations";

export default function CreditCard({ submitOrder }) {
  const { handleChange, handleFocus, handleSubmit, values, errors } = useForm();

  return (
    <>
      <CardTypeContainer>
        <div>
          <Cards
            cvc={values.cvc}
            expiry={values.expirationDate}
            focused={values.focus}
            name={values.name}
            number={values.number}
          />
        </div>
        <Form
          className="form"
          autoComplete="off"
          onSubmit={(e) => handleSubmit(e)}
        >
          <Form.Group className="inputs">
            <Form.Control
              className="inputField"
              type="text"
              id="name"
              placeholder="Nome do cartão"
              name="name"
              values={values.name}
              onChange={handleChange}
              onFocus={handleFocus}
              isValid={errors.name}
            />
          </Form.Group>
          <Form.Group className="inputs">
            <Form.Control
              className="inputField"
              type="number"
              id="number"
              placeholder="Número"
              name="number"
              values={values.number}
              onChange={handleChange}
              onFocus={handleFocus}
              isValid={errors.number}
            />
          </Form.Group>
          <Row>
            <Col>
              <Form.Group className="inputs">
                <Form.Control
                  className="inputField"
                  type="number"
                  id="expirationDate"
                  placeholder="Validade"
                  name="expirationDate"
                  values={values.expirationDate}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  isValid={errors.expirationDate}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="inputs">
                <Form.Control
                  className="inputField"
                  type="number"
                  id="cvc"
                  placeholder="CVV"
                  name="cvc"
                  values={values.cvc}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  isValid={errors.cvc}
                />
              </Form.Group>
            </Col>
          </Row>
          <Button
            className="submitButton"
            type="submit"
            onClick={(e) => {
              e.stopPropagation();
              handleSubmit(e);
              if (errors.message === "Sucesso!") {
                submitOrder(values);
              }
            }}
          >
            {errors.message === "Sucesso!" ? "Pagar" : "Validar"}
          </Button>
        </Form>
      </CardTypeContainer>
      {errors.show && <Alert className="alertMessage">{errors.message}</Alert>}
    </>
  );
}

const flipAnimation = keyframes`${flipInY}`;

const CardTypeContainer = styled.div`
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
  @media (max-width: 834px) {
    width: 100%;
    margin-bottom: 2rem;
    border: none;
  }
`;
