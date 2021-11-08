import { BrowserRouter, Switch, Route } from "react-router-dom";
import UserContext from "./Contexts/UserContext";
import { useState } from "react";
import GlobalStyle from "./Components/GlobalStyle/GlobalStyle";
import Topbar from "./Components/TopBar/TopBar";
import Home from "./Components/Home/Home";

export default function App () {

    const [userData, setUserData] = useState(null);

    return (
        <UserContext.Provider value={{ userData, setUserData }} >
            <BrowserRouter>
                {/* {userData ? <Topbar /> : ""} */}
                <Topbar />
                <Switch>
                    <Route path="/" exact>
                    </Route>

                    <Route path="/sign-up" exact>
                    </Route>

                    <Route path="/home" exact>
                        <Home />
                    </Route>
                </Switch>
            </BrowserRouter>
            <GlobalStyle />
        </UserContext.Provider >
    )
}