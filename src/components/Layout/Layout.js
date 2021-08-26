import { BrowserRouter, Switch, Route } from "react-router-dom";
import { UserStatusContextProvider } from "../Context/UserStatusContext";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Account from "../Pages/Account/Account";
import MainPage from "../Pages/MainPage/MainPage";
import LoginPage from "../Pages/LoginPage/LoginPage";

export default function Layout() {
  return (
    <BrowserRouter>
      <UserStatusContextProvider>
        <Header />
        <main id="emptyPage">
          <Switch>
            <Route exact path="/">
              <MainPage />
            </Route>
            <Route path="/account">
              <Account />
            </Route>
            <Route path="/login">
              <LoginPage />
            </Route>
          </Switch>
        </main>
        <Footer />
      </UserStatusContextProvider>
    </BrowserRouter>
  );
}
