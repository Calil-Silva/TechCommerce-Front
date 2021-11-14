import { useCallback, useEffect, useMemo, useState, useContext } from "react";
import { getCategoriesListRequest } from "../../Services/TechCommer";
import { Container, Figure, Footer, ImageCategorie, Main } from "./HomeStyled";
import CheckoutContext from "../../Contexts/CheckoutContext";

export default function Home() {
  const [categories, setCategories] = useState("");
  const { setIsOpenBag } = useContext(CheckoutContext);

  const gripS = useMemo(() => ["1/1", "1/2", "2/2", "2/2", "3/3", "3/3"], []);

  const renderCategories = useCallback(() => {
    getCategoriesListRequest()
      .then((res) => {
        setCategories(
          res.data.map((category, index) => ({
            ...category,
            value: gripS[index],
          }))
        );
      })
      .catch((error) => {});
  }, [gripS]);

  useEffect(() => {
    renderCategories();
  }, [renderCategories]);

  if (!categories) {
    return "";
  }
  return (
    <Container onClick={() => setIsOpenBag(false)}>
      <Main>
        {categories.map((category, index) => {
          return (
            <Figure key={index} to={`${category.name}`} value={category.value}>
              <figcaption>{category.name}</figcaption>
              <ImageCategorie src={category.url_image} />
            </Figure>
          );
        })}
      </Main>
      <Footer>Copyright © 2021 Apple Inc. All rights reserved.</Footer>
    </Container>
  );
}
