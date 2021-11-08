import styled from "styled-components";

export default function SignUp() {
  return (
    <>
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
              <input placeholder="País" type="text" />
              <input placeholder="Data de nascimento" type="date" />
            </Location>
          </Form>
        </Container>
      </OuterDiv>
    </>
  );
}

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
    color: blue;
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
