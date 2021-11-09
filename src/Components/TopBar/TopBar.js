import { useState } from "react";
import { Header, Ul, IconOpenMenu, IconCloseMenu, IconApple, IconSearch, IconBag, MenuDiv, MenuContainer } from "./TopBarStyled";
import CategoriesNavBarList from "../../Shared/CategoriesNavBarList"
import { useHistory } from "react-router";

export default function Topbar () {

    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const history = useHistory()

    return (
        <Header visible={isOpenMenu}>
            <Ul>
                {isOpenMenu 
                    ? 
                 <IconCloseMenu onClick={() => setIsOpenMenu(!isOpenMenu)}/>
                    :
                 <IconOpenMenu onClick={() => setIsOpenMenu(!isOpenMenu)}/>
                }
                <IconApple  onClick={() => history.push("/")} />
                <CategoriesNavBarList />
                <IconSearch />
                <IconBag />
            </Ul>
            <MenuDiv visible={isOpenMenu}>
                <MenuContainer>
                    <CategoriesNavBarList isMenu={true} setIsOpenMenu={setIsOpenMenu}/> 
                </MenuContainer>
            </MenuDiv>
        </Header>
    )
}