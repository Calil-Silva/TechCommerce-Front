import { BrowserRouter, Switch, Route } from "react-router-dom";
import UserContext from "./contexts/UserContext";
import { useState } from "react";

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
        </UserContext.Provider >
    )
}