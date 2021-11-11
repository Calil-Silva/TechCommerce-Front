import styled from "styled-components";
import { keyframes } from "styled-components";
import { AiFillApple, AiOutlineSearch } from "react-icons/ai";
import { BsBag } from "react-icons/bs";
import { HiMenuAlt4 } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io5";

const menuAnimationOpen = keyframes`
   0% {
    height: 0vh;
  }
  100% {
    width: 100%;
    height: 100vh;
  }
`;

const menuAnimationClose = keyframes`
   100% {
    height: 0vh;
  }
  0% {
    width: 100%;
    height: 100vh;
  }
`;

const MenuDiv = styled.div`
  background-color: rgba(0, 0, 0, 0.9);
  overflow: hidden;
  z-index: 5;
  position: fixed;
  display: flex;
  justify-content: center;
  width: 100%;
  height: ${({ visible }) => (visible ? "100vh" : "0vh")};
  transition: height 1 ease-in;
  animation: ${({ visible }) =>
      visible ? menuAnimationOpen : menuAnimationClose}
    0.5s;
  background-color: rgba(0, 0, 0, 1);
  overflow: hidden;
  z-index: 5;
`;

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: left;
  width: 85%;

  a {
    margin: 15px 0;
  }
`;

const Header = styled.header`
  position: fixed;
  width: 100%;
  height: 44px;
  background-color: ${({ visible }) =>
    visible ? "rgba(0, 0, 0, 1);" : "rgba(0, 0, 0, 0.8)"};
  transition: background-color 0.5s ease-in;
  z-index: 5;
`;

const Ul = styled.ul`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-around;
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 400;
  font-size: 12px;
  margin: 0 auto;
  max-width: 996px;

  @media (max-width: 834px) {
    justify-content: space-between;
  }
`;

const IconApple = styled(AiFillApple)`
  width: 18px;
  height: 18px;
  color: rgba(255, 255, 255, 0.8);

  @media (max-width: 834px) {
    width: 25px;
    height: 25px;
  }
`;

const IconSearch = styled(AiOutlineSearch)`
  width: 18px;
  height: 18px;
  color: rgba(255, 255, 255, 0.8);

  @media (max-width: 834px) {
    display: none;
  }
`;

const IconBag = styled(BsBag)`
  width: 18px;
  height: 18px;
  color: rgba(255, 255, 255, 0.8);

  @media (max-width: 834px) {
    width: 20px;
    height: 20px;
    margin-right: 15px;
  }
`;

const IconOpenMenu = styled(HiMenuAlt4)`
  width: 25px;
  height: 25px;
  color: rgba(255, 255, 255, 0.8);
  display: none;

  @media (max-width: 834px) {
    display: block;
    margin-left: 15px;
  }
`;

const IconCloseMenu = styled(IoCloseSharp)`
  width: 25px;
  height: 25px;
  color: rgba(255, 255, 255, 0.8);
  display: none;

  @media (max-width: 834px) {
    display: block;
    margin-left: 15px;
  }
`;

const IconsToolTipWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const PurchasesAmount = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 100%;
  background-color: #fff;
  font-size: 12px;
  position: absolute;
  top: 8px;
  left: 8px;
  color: #000;
  display: ${({ displayPurchasesAmount }) =>
    displayPurchasesAmount ? "flex" : "none"};
  justify-content: center;
  align-items: center;
`;

export {
  IconOpenMenu,
  IconCloseMenu,
  IconSearch,
  IconApple,
  IconBag,
  MenuDiv,
  MenuContainer,
  menuAnimationOpen,
  menuAnimationClose,
  Header,
  Ul,
  PurchasesAmount,
  IconsToolTipWrapper,
};
