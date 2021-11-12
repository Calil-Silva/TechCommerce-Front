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
} from "./TopBarStyled";
import CategoriesNavBarList from "../../Shared/CategoriesNavBarList";
import { useHistory } from "react-router";
import "react-tippy/dist/tippy.css";
import Cart from "../Cart/Cart";
import CheckoutContext from "../../Contexts/CheckoutContext";
import { useContext } from "react";

export default function Topbar() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const history = useHistory();
  const { purchases } = useContext(CheckoutContext);
  const purchasesAmount = purchases.length;
  const displayPurchasesAmount = purchasesAmount > 0 && true;
  const [isOpenBag, setIsOpenBag] = useState(false);

  return (
    <Header visible={isOpenMenu}>
      <Ul>
        {isOpenMenu ? (
          <IconCloseMenu onClick={() => setIsOpenMenu(!isOpenMenu)} />
        ) : (
          <IconOpenMenu onClick={() => setIsOpenMenu(!isOpenMenu)} />
        )}
        <IconApple onClick={() => history.push("/")} />
        <CategoriesNavBarList />
        <IconSearch />
        <IconsToolTipWrapper onClick={() => setIsOpenBag(!isOpenBag)}>
          <IconBag />
          <PurchasesAmount displayPurchasesAmount={displayPurchasesAmount}>
            {purchasesAmount}
          </PurchasesAmount>
          <Cart isOpenBag={isOpenBag} />
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
