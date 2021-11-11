import { BsCheck } from "react-icons/bs";
import styled from "styled-components";

export default function CountriesList(props) {
  const {
    country,
    countries,
    setCountries,
    setSelectedCountry,
    selectedCountry,
  } = props;

  function handleCountriesListStatus(e) {
    if (!countries) {
      setCountries(true);
    } else {
      setSelectedCountry(e.target.innerText);
      setCountries(false);
    }
  }

  return (
    <Container onClick={(e) => handleCountriesListStatus(e)}>
      <Check country={country} selectedCountry={selectedCountry} />
      <li>{country}</li>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  font-size: 1rem;
  margin-bottom: 0.2rem;
  cursor: pointer;
  height: 1.5rem;
  border-radius: 4px;
  :hover {
    background-color: hsl(201, 89%, 54%);
  }

  li {
    color: #fff;
  }
`;

const Check = styled(BsCheck)`
  font-size: 1.5rem;
  color: ${({ country, selectedCountry }) =>
    country === selectedCountry ? "#fff" : "rgba(0, 0, 0, 0)"};
`;
