import { Button, Form, Alert, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import useForm from "./useForm";

export default function CreditCard() {
  const { handleChange, handleFocus, handleSubmit, values, errors } = useForm();
  return (
    <div>
      <div>
        <Cards
          cvc={values.cvc}
          expiry={values.expirationDate}
          focused={values.focus}
          name={values.name}
          number={values.number}
        />
      </div>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Form.Group>
          <Form.Control
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
        <Form.Group>
          <Form.Control
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
            <Form.Group>
              <Form.Control
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
            <Form.Group>
              <Form.Control
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
        <Button type="submit" onClick={(e) => handleSubmit(e)}>
          Validar
        </Button>
        <Alert id="alertMessage" variant={errors.varaint} show={errors.show}>
          {errors.message}
        </Alert>
      </Form>
    </div>
  );
}
