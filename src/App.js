import Pages from "./pages/Pages";
import Category from "./components/Category";
import { BrowserRouter } from "react-router-dom";
import Search from "./components/Search";
import styled from "styled-components";
import {Link} from 'react-router-dom';
import {GiKnifeFork} from "react-icons/gi"

//npm install framer-motion(for animations) react-icons react-router-dom styled-components(for css), also @splidejs/react-splide(for slider motion)
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav>
      <GiKnifeFork />
        <Logo to={"/"}>
          The Cook Book
        </Logo>
      </Nav>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.3rem;
  font-weight: 400;
  font-family: 'Lobster Two', cursive;
`

const Nav = styled.div`
  position: absolute;
  left: 20px;
  top: 0;
  padding: 1rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg{
    font-size: 2rem;
  }
`

export default App;
