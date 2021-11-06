import { BrowserRouter, Switch, Route } from "react-router-dom";
import UserContext from "./Contexts/UserContext";
import { useState } from "react";
import GlobalStyle from "./Components/GlobalStyle/GlobalStyle";
import SigninPage from "./Components/SignIn/SigninPage";

export default function App() {
  const [userData, setUserData] = useState(null);

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      <BrowserRouter>
        {/* {userData ? <Topbar /> : ""} */}
        <Switch>
          <Route path="/" component={SigninPage} exact />
          <Route path="/sign-up" exact />
          <Route path="/home" exact />
        </Switch>
      </BrowserRouter>
      <GlobalStyle />
    </UserContext.Provider>
  );
}
