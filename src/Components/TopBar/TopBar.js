import { useState } from "react";
import {
  Header,
  Ul,
  IconOpenMenu,
  IconCloseMenu,
  IconApple,
  IconSearch,
  IconBag,
  MenuDiv,
  MenuContainer,
  PurchasesAmount,
  IconsToolTipWrapper,
  CartWrapper,
  ArrowBag,
  CartBackground,
} from "./TopBarStyled";
import CategoriesNavBarList from "../../Shared/CategoriesNavBarList";
import { useHistory } from "react-router";
import "react-tippy/dist/tippy.css";
import Cart from "../Cart/Cart";
import CheckoutContext from "../../Contexts/CheckoutContext";
import { useContext } from "react";
import UserContext from "../../Contexts/UserContext";

export default function Topbar() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const history = useHistory();
  const { purchases, isOpenBag, setIsOpenBag } = useContext(CheckoutContext);
  const purchasesAmount = purchases.length;
  const displayPurchasesAmount = purchasesAmount > 0 && true;
  const { userData } = useContext(UserContext);

  return (
    <Header
      visible={isOpenMenu}
      onClick={() => isOpenBag && setIsOpenBag(false)}
    >
      <Ul>
        {isOpenMenu ? (
          <IconCloseMenu onClick={() => setIsOpenMenu(!isOpenMenu)} />
        ) : (
          <IconOpenMenu onClick={() => setIsOpenMenu(!isOpenMenu)} />
        )}
        <IconApple onClick={() => history.push("/")} />
        <CategoriesNavBarList />
        <IconSearch />
        <IconsToolTipWrapper>
          <div onClick={() => setIsOpenBag(!isOpenBag)}>
            <IconBag />
            <PurchasesAmount displayPurchasesAmount={displayPurchasesAmount}>
              {purchasesAmount}
            </PurchasesAmount>
            <ArrowBag isOpenBag={isOpenBag} />
          </div>
          <CartWrapper isOpenBag={isOpenBag}>
            <Cart isOpenBag={isOpenBag} />
            <CartBackground />
          </CartWrapper>
        </IconsToolTipWrapper>
      </Ul>
      <MenuDiv visible={isOpenMenu}>
        <MenuContainer>
          <CategoriesNavBarList isMenu={true} setIsOpenMenu={setIsOpenMenu} />
        </MenuContainer>
      </MenuDiv>
    </Header>
  );
}
