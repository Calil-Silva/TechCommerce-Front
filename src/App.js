import { BrowserRouter, Switch, Route } from "react-router-dom";
import UserContext from "./Contexts/UserContext";
import { useState } from "react";
import GlobalStyle from "./Components/GlobalStyle/GlobalStyle";
import SignUp from "./Components/SignUp/SignUp";
import SigninPage from "./Components/SignIn/SigninPage";
import Topbar from "./Components/TopBar/TopBar";
import Home from "./Components/Home/Home";
import CheckoutContext from "./Contexts/CheckoutContext";
import Products from "./Components/Products";
import { getOrderData } from "./Services/orderPersistence";

export default function App() {
  const [userData, setUserData] = useState(null);
  const [purchases, setPurchases] = useState(getOrderData());

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      <BrowserRouter>
        {/* {userData ? <Topbar /> : ""} */}
        <CheckoutContext.Provider value={{ purchases, setPurchases }}>
          <Topbar />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/signin" component={SigninPage} exact />
            <Route path="/signup" component={SignUp} exact />
            <Route path="/iPhone" component={Products} exact />
          </Switch>
        </CheckoutContext.Provider>
      </BrowserRouter>
      <GlobalStyle />
    </UserContext.Provider>
  );
}
