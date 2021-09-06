import { BrowserRouter, Switch, Route } from "react-router-dom";
import { UserStatusContextProvider } from "../Context/UserStatusContext";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Account from "../Pages/Account/Account";
import MainPage from "../Pages/MainPage/MainPage";
import LoginPage from "../Pages/LoginPage/LoginPage";
import Movie from "../Movie/Movie";
import UsersListPage from "../Pages/AdminPages/UsersListPage/UsersListPage";
import CommentsPage from "../Pages/AdminPages/CommentsPage/CommentsPage";
import UploadMovietPage from "../Pages/AdminPages/UploadMoviePage/UploadMoviePage";

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
            <Route path="/movies/:id">
              <Movie />
            </Route>
            <Route path="/account">
              <Account />
            </Route>
            <Route path="/login">
              <LoginPage />
            </Route>
            <Route path="/admin/users_list">
              <UsersListPage />
            </Route>
            <Route path="/admin/comments_list">
              <CommentsPage />
            </Route>
            <Route path="/admin/upload_movie">
              <UploadMovietPage />
            </Route>
          </Switch>
        </main>
        <Footer />
      </UserStatusContextProvider>
    </BrowserRouter>
  );
}
