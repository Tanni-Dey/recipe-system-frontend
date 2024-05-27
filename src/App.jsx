import Header from "./components/Shared/Header";
import Footer from "./components/Shared/Footer";
import { Outlet } from "react-router-dom";
import "sweetalert2/src/sweetalert2.scss";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
