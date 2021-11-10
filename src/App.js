import { BrowserRouter, Switch, Route } from "react-router-dom";
import UserContext from "./Contexts/UserContext";
import { useState } from "react";
import GlobalStyle from "./Components/GlobalStyle/GlobalStyle";
import SigninPage from "./Components/SignIn/SigninPage";
import Topbar from "./Components/TopBar/TopBar";
import Home from "./Components/Home/Home";
import ProductPage from "./Components/ProductPage/ProductPage";
export default function App() {
  const [userData, setUserData] = useState(null);

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      <BrowserRouter>
        {/* {userData ? <Topbar /> : ""} */}
        <Topbar />
        <Switch>
          <Route path="/" component={Home}exact />
          <Route path="/signin" component={SigninPage} exact />
          <Route path="/signup" exact />
          <Route path="/:categoryName" component={ProductPage} exact />
        </Switch>
      </BrowserRouter>
      <GlobalStyle />
    </UserContext.Provider>
  );
}
