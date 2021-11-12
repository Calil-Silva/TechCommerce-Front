export function validateEmail(email) {
  const pattern =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{3,}))$/;

  return pattern.test(email);
}

export function validatePassword(password) {
  const pattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  return pattern.test(password);
}

export function comparePasswords(password, confirmedPassword) {
  if (!validatePassword(password)) {
    alert(
      "O password deve conter no mínimo 8 caracteres, ao menos uma letra minúscula, uma maiúscula, um caractere especial e um número."
    );
    return false;
  }

  if (confirmedPassword !== password) {
    alert("As senhas devem coincidir");
    return false;
  }

  return true;
}

export const validateInputs = (userData) => {
  const userDataKeys = Object.keys(userData);
  let bool = true;

  for (let i = 0; i < userDataKeys.length; i++) {
    if (!userData[userDataKeys[i]]) {
      alert("Preencha todos os campos!");
      bool = false;
      break;
    }
  }
  return bool;
};

export const validEmail = (email) => {
  if (!validateEmail(email)) {
    alert("Informe um e-mail válido");
    return false;
  }
  return true;
};
