import { Button, Form, Alert, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import useForm from "./useForm";
import "./creditCardForm.css";

export default function CreditCard() {
  const { handleChange, handleFocus, handleSubmit, values, errors } = useForm();

  return (
    <>
      <div className="creditCardOption">
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
          autocomplete="off"
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
                  placeholder="Data de validade"
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
                  placeholder="Cód. de segurança"
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
            onClick={(e) => handleSubmit(e)}
          >
            Validar
          </Button>
        </Form>
      </div>
      {errors.show && <Alert className="alertMessage">{errors.message}</Alert>}
    </>
  );
}
