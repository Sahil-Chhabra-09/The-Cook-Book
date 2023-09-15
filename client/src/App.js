import Pages from "./pages/Pages";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Search from "./components/Search";
import Category from "./components/Category";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//npm install framer-motion(for animations) react-icons react-router-dom styled-components(for css), also @splidejs/react-splide(for slider motion)

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <div className="webapp">
          <Search />
          <Category />
          <Pages />
        </div>
        <ToastContainer position="bottom-left" autoClose={3000} limit={4} />
      </BrowserRouter>
    </div>
  );
}

export default App;
