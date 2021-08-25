import { BrowserRouter } from "react-router-dom";
import { UserStatusContextProvider } from "../Context/UserStatusContext";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

export default function Layout() {
  return (
    <BrowserRouter>
      <UserStatusContextProvider>
        <Header />
        <Footer />
      </UserStatusContextProvider>
    </BrowserRouter>
  );
}
