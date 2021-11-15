import { BrowserRouter, Switch, Route } from "react-router-dom";
import UserContext from "./Contexts/UserContext";
import { useState, useEffect } from "react";
import GlobalStyle from "./Components/GlobalStyle/GlobalStyle";
import SignUp from "./Components/SignUp/SignUp";
import SigninPage from "./Components/SignIn/SigninPage";
import Topbar from "./Components/TopBar/TopBar";
import Home from "./Components/Home/Home";
import CheckOut from "./Components/CheckOut/CheckOut";
import CheckoutContext from "./Contexts/CheckoutContext";
import { getOrderData } from "./Services/orderPersistence";
import { getUserData } from "./Services/loginPersistence";
import ProductPage from "./Components/ProductPage/ProductPage";
import ReviewCart from "./Components/Cart/ReviewCart";

export default function App() {
  const localUserData = getUserData();
  const [userData, setUserData] = useState({ ...localUserData });
  const [purchases, setPurchases] = useState(getOrderData());
  const [groupedPurchases, setGroupedPurchases] = useState([]);
  const [typePayment, setTypePayment] = useState("boleto");
  const [isOpenBag, setIsOpenBag] = useState(false);
  const [userOnline, setUserOnline] = useState(localUserData ? true : false);

  useEffect(() => {
    setUserData({ ...localUserData });
  }, [userOnline]);

  return (
    <UserContext.Provider
      value={{ userData, setUserData, setUserOnline, userOnline }}
    >
      <BrowserRouter>
        <CheckoutContext.Provider
          value={{
            purchases,
            setPurchases,
            isOpenBag,
            setIsOpenBag,
            groupedPurchases,
            setGroupedPurchases,
            typePayment,
            setTypePayment,
          }}
        >
          <Topbar />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/signin" component={SigninPage} exact />
            <Route path="/signup" component={SignUp} exact />
            <Route path="/cart" component={ReviewCart} exact />
            <Route path="/checkout" component={CheckOut} exact />
            <Route path="/:categoryName" component={ProductPage} exact />
          </Switch>
        </CheckoutContext.Provider>
      </BrowserRouter>
      <GlobalStyle />
    </UserContext.Provider>
  );
}
