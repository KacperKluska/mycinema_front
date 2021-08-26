import { BrowserRouter, Switch, Route } from "react-router-dom";
import { UserStatusContextProvider } from "../Context/UserStatusContext";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Account from "../Pages/Account/Account";
import MainPage from "../Pages/MainPage/MainPage";

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
            <Route exact path="/account">
              <Account />
            </Route>
          </Switch>
        </main>
        <Footer />
      </UserStatusContextProvider>
    </BrowserRouter>
  );
}
