import { BrowserRouter, Switch, Route } from "react-router-dom";
import UserContext from "./Contexts/UserContext";
import { useState, useEffect, useCallback } from "react";
import GlobalStyle from "./Components/GlobalStyle/GlobalStyle";
import SignUp from "./Components/SignUp/SignUp";
import SigninPage from "./Components/SignIn/SigninPage";
import Topbar from "./Components/TopBar/TopBar";
import Home from "./Components/Home/Home";
import CheckoutContext from "./Contexts/CheckoutContext";
// import Products from "./Components/Products";
import { getOrderData } from "./Services/orderPersistence";
import { getUserData } from "./Services/loginPersistence";
import ProductPage from "./Components/ProductPage/ProductPage";

export default function App() {
  const localUserData = getUserData();
  const [userData, setUserData] = useState({ ...localUserData });
  const [purchases, setPurchases] = useState(getOrderData());
  const [isOpenBag, setIsOpenBag] = useState(false);
  const [userOnline, setUserOnline] = useState(false);

  useEffect(() => {
    setUserData({ ...localUserData });
  }, [userOnline]);

  return (
    <UserContext.Provider
      value={{ userData, setUserData, setUserOnline, userOnline }}
    >
      <BrowserRouter>
        <CheckoutContext.Provider
          value={{ purchases, setPurchases, isOpenBag, setIsOpenBag }}
        >
          <Topbar />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/signin" component={SigninPage} exact />
            <Route path="/signup" component={SignUp} exact />
            {/* <Route path="/iPhone" component={Products} exact /> */}
            <Route path="/:categoryName" component={ProductPage} exact />
          </Switch>
        </CheckoutContext.Provider>
      </BrowserRouter>
      <GlobalStyle />
    </UserContext.Provider>
  );
}
