import { BrowserRouter } from "react-router-dom";
import { UserStatusContextProvider } from "../Context/UserStatusContext";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MainPage from "../Pages/MainPage/MainPage";

export default function Layout() {
  return (
    <BrowserRouter>
      <UserStatusContextProvider>
        <Header />
        <main id="emptyPage">
          <MainPage />
        </main>
        <Footer />
      </UserStatusContextProvider>
    </BrowserRouter>
  );
}
