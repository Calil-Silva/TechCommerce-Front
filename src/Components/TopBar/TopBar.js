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
import { Tooltip } from "react-tippy";
import Cart from "../Cart/Cart";
import "../Cart/cart.css";
import CheckoutContext from "../../Contexts/CheckoutContext";
import { useContext } from "react";

export default function Topbar() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const history = useHistory();
  const { purchases } = useContext(CheckoutContext);
  const purchasesAmount = purchases.length;
  const displayPurchasesAmount = purchasesAmount > 0 && true;

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
        <Tooltip
          trigger="click"
          interactive
          sticky
          useContext
          arrow="true"
          theme="light"
          html={<Cart />}
          distance="18"
          position="bottom"
        >
          <IconsToolTipWrapper>
            <IconBag />
            <PurchasesAmount displayPurchasesAmount={displayPurchasesAmount}>
              {purchasesAmount}
            </PurchasesAmount>
          </IconsToolTipWrapper>
        </Tooltip>
      </Ul>
      <MenuDiv visible={isOpenMenu}>
        <MenuContainer>
          <CategoriesNavBarList isMenu={true} setIsOpenMenu={setIsOpenMenu} />
        </MenuContainer>
      </MenuDiv>
    </Header>
  );
}
