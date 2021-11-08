import { BrowserRouter, Switch, Route } from "react-router-dom";
import UserContext from "./Contexts/UserContext";
import { useState } from "react";
import GlobalStyle from "./Components/GlobalStyle/GlobalStyle";
import SignUp from "./Components/SignUp/SignUp";

export default function App() {
  const [userData, setUserData] = useState(null);

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      <BrowserRouter>
        <GlobalStyle />
        {/* {userData ? <Topbar /> : ""} */}
        <Switch>
          <Route path="/" exact />

          <Route path="/sign-up" component={SignUp} exact />

          <Route path="/home" exact />
        </Switch>
      </BrowserRouter>
    </UserContext.Provider>
  );
}
