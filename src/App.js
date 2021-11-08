import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./assets/css/style.css";
import Header from "./components/Header";
import routes from "./utils/routes/indexRoute";
import { auth } from "./config/firebase";
import Appcontext from "./store/AppContext";
import AuthRoute from "./utils/routes/AuthRoute";
import GuestRoute from "./utils/routes/GuestRoute";
import Loading from "./components/Loading";
import NotFound from "./page/404";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
        setUser(user);
        setIsLoading(false);
      } else {
        setIsLoggedIn(false);
        setUser({});
        setIsLoading(false);
      }
    });
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <Router>
      <Appcontext.Provider value={[isLoggedIn, user]}>
        <Header />
        <Switch>
          {routes.map((route, index) => {
            if (route.protected === "guest") {
              return (
                <GuestRoute
                  key={index}
                  exact
                  path={route.path}
                  component={route.component}
                />
              );
            }
            if (route.protected === "auth") {
              return (
                <AuthRoute
                  key={index}
                  exact
                  path={route.path}
                  component={route.component}
                />
              );
            }
            return (
              <Route
                key={index}
                exact
                path={route.path}
                component={route.component}
              />
            );
          })}
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Appcontext.Provider>
    </Router>
  );
}

export default App;
