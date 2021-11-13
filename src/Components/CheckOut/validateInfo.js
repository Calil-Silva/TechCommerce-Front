import valid from "card-validator";

export default function validateInfo(values) {
  let errors = {};
  let creditCart = valid.number(values.number);

  creditCart.expirationDate = valid.expirationDate(values.expirationDate);
  creditCart.name = valid.cardholderName(values.name);
  creditCart.cvc = valid.cvv(values.cvc);
  creditCart.number = valid.number(values.number);

  errors.show = true;
  errors.message = "An unknown error ocurred. Please try again later.";
  errors.name = false;
  errors.number = false;
  errors.expirationDate = false;
  errors.cvc = false;

  if (values.cvc === null || !values.cvc.trim()) {
    errors.message = "Credit card CVC is imcomplete";
  } else if (creditCart.cvc.isValid) {
    errors.cvc = true;
  } else {
    errors.message = "Credit card CVC is invalid";
  }

  if (values.expirationDate === null || !values.expirationDate.trim()) {
    errors.message = "Credit card expiration is imcomplete";
  } else if (creditCart.expirationDate.isValid) {
    errors.expirationDate = true;
  } else {
    errors.message = "Credit card expiration is invalid";
  }

  if (values.number === null || !values.number.trim()) {
    errors.message = "Credit card number is imcomplete";
  } else if (creditCart.number.isValid) {
    errors.number = true;
  } else {
    errors.message = "Credit card number is invalid";
  }

  if (values.name === null || !values.name.trim()) {
    errors.message = "Credit card name is imcomplete";
  } else if (creditCart.name.isValid) {
    errors.name = true;
  } else {
    errors.message = "Credit card name is invalid";
  }

  if (errors.name && errors.number && errors.cvc && errors.expirationDate) {
    errors.message = "Credit card is valid";
  }

  return errors;
}
