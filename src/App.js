import { BrowserRouter, Switch, Route } from "react-router-dom";
import UserContext from "./Contexts/UserContext";
import { useState } from "react";
import GlobalStyle from "./Components/GlobalStyle/GlobalStyle";

export default function App () {

    const [userData, setUserData] = useState(null);

    return (
        <UserContext.Provider value={{ userData, setUserData }} >
            <BrowserRouter>
                {/* {userData ? <Topbar /> : ""} */}
                <Switch>
                    <Route path="/" exact>
                    </Route>

                    <Route path="/sign-up" exact>
                    </Route>

                    <Route path="/home" exact>
                    </Route>
                </Switch>
            </BrowserRouter>
            <GlobalStyle />
        </UserContext.Provider >
    )
}