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
} from "./TopBarStyled";
import CategoriesNavBarList from "../../Shared/CategoriesNavBarList";
import { useHistory } from "react-router";
import "react-tippy/dist/tippy.css";
import { Tooltip } from "react-tippy";
import Cart from "../Cart/Cart";
import "../Cart/cart.css";

export default function Topbar() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const history = useHistory();

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
          position="bottom"
          trigger="click"
          arrow="true"
          theme="light"
          html={<Cart />}
          distance="18"
          //   theme="tomato"
        >
          <IconBag />
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
